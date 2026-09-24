// _construir_curriculums.mjs
// Construye _curriculum_<slug>.mjs para los cursos que no tienen curriculum
// (bases-datos, sql, seguridad, arquitectura) leyendo sus índices de módulo
// en disco (formato page-hero + card--lesson). No toca data.js ni lecciones.
//
// USO: node _construir_curriculums.mjs
//
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(dirname(fileURLToPath(import.meta.url)));
const DATA_FILE = join(__dirname, "assets", "js", "data.js");
const SLUGS = ["bases-datos", "sql", "seguridad", "arquitectura"];

const dec = (s) =>
  String(s)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const strip = (s) => dec(String(s).replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

function courseMeta(slug) {
  const out = readFileSync(DATA_FILE, "utf8");
  const i = out.indexOf(`\n    id: "${slug}"`);
  if (i === -1) return {};
  const next = out.indexOf('\n  {\n    id: "', i + 6);
  const block = next === -1 ? out.slice(i) : out.slice(i, next);
  const title = (block.match(/title:\s*"((?:[^"\\]|\\.)*)"/) || [])[1];
  const level = (block.match(/level:\s*"((?:[^"\\]|\\.)*)"/) || [])[1];
  return { title, level };
}

function parseModule(dirName, html) {
  const h1 = html.match(/<h1 class="page-hero__title">([\s\S]*?)<\/h1>/);
  const modTitle = h1 ? strip(h1[1]) : dirName;
  const m = modTitle.match(/^Módulo\s+(\d+)\s*[·:]\s*(.+)$/i) || modTitle.match(/^Módulo\s+(\d+)\s*(.*)$/i);
  const n = m ? parseInt(m[1], 10) : parseInt(dirName.replace(/\D+/g, ""), 10) || 1;
  const t = m && m[2] ? m[2].trim() : modTitle;

  const sub = html.match(/<p class="page-hero__subtitle">([\s\S]*?)<\/p>/);
  const subtitle = sub ? strip(sub[1]) : "";

  const objectives = [...html.matchAll(/<div class="objective"><span[^>]*>[^<]*<\/span><span>([\s\S]*?)<\/span><\/div>/g)]
    .map((x) => strip(x[1]));

  const lessons = [];
  const cardRe = /<a class="card card--lesson card--link" href="([^"]+)">([\s\S]*?)<\/a>/g;
  for (const card of html.matchAll(cardRe)) {
    const href = card[1];
    const body = card[2];
    const h3 = (body.match(/<h3>([\s\S]*?)<\/h3>/) || [])[1] || "";
    const p = (body.match(/<p>([\s\S]*?)<\/p>/) || [])[1] || "";
    const tags = [...body.matchAll(/<span class="tag(?:\s+[^"]*)?">([\s\S]*?)<\/span>/g)].map((x) => strip(x[1]));
    const title = strip(h3).replace(/^\d+\s*·\s*/, "");
    const duration = tags.find((x) => /min/i.test(x)) || "10 min";
    const category = tags.find((x) => !/min/i.test(x)) || "lección";
    lessons.push({
      id: href.replace(/\.html$/, ""),
      title,
      duration,
      category,
      cardText: p,
      desc: p,
    });
  }

  return { id: dirName, n, t, subtitle, desc: subtitle, caption: subtitle, objectives, lessons };
}

for (const slug of SLUGS) {
  const courseDir = join(__dirname, "cursos", slug);
  const meta = courseMeta(slug);
  const dirs = readdirSync(courseDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^modulo-\d+$/.test(d.name))
    .map((d) => d.name)
    .sort();

  const modules = dirs.map((dir) =>
    parseModule(dir, readFileSync(join(courseDir, dir, "index.html"), "utf8"))
  );

  const course = {
    slug,
    title: meta.title || slug,
    level: meta.level || "intermedio",
    modules,
  };

  const file = join(__dirname, "_herramientas", `_curriculum_${slug}.mjs`);
  writeFileSync(file, `export const COURSES = ${JSON.stringify([course], null, 2)};\n`, "utf8");
  const total = modules.reduce((a, m) => a + m.lessons.length, 0);
  console.log(`[curriculum] ${slug}: ${modules.length} módulos, ${total} lecciones → _curriculum_${slug}.mjs`);
}