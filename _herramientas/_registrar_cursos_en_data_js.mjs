// _registrar_cursos_en_data_js.mjs
// FASE E·REGISTRO · Registra en assets/js/data.js los 11 cursos que en disco ya
// tienen módulos/lecciones reales pero que en data.js aún figuran como
// `modules: []` y `lessons: 0`.
//
// Estrategia (sin riesgo para assets/js/ restante):
// 1) Escanea disco: cursos/<slug>/modulo-0X/... construyendo el array `modules`.
// 2) Busca el bloque `modules: []` <<de ese curso>> (localizado por su `id: "<slug>"`).
// 3) Reemplaza SOLO esa ocurrencia por el array real; actualiza `lessons: 0` -> N.
// 4) Escribe `data.js` de nuevo (UTF-8, sin BOM, con acentos correctos).
//
// USO:
//   node _registrar_cursos_en_data_js.mjs --dry      # solo informa
//   node _registrar_cursos_en_data_js.mjs <slug>     # solo ese curso
//   node _registrar_cursos_en_data_js.mjs            # los 11 targets
//
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(dirname(fileURLToPath(import.meta.url)));
const CURSOS_DIR = join(__dirname, "cursos");
const DATA_FILE = join(__dirname, "assets", "js", "data.js");

const TARGETS = [
  "backend-ia",
  "graphql",
  "integraciones",
  "mensajeria",
  "microservicios",
  "observabilidad",
  "performance",
  "proyectos",
  "sistemas-distribuidos",
  "system-design",
  "websockets",
];

const RE_MOD = /^modulo-0(\d)$/;

function escRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function stripTags(s) {
  return (s || "").replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").trim();
}
function slugify(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
function jsStr(v) {
  return JSON.stringify(String(v ?? ""));
}

// ---- extracción de metadatos desde HTML de lección ----
function readMeta(htmlAbs, fallbackId) {
  const html = existsSync(htmlAbs) ? readFileSync(htmlAbs, "utf8") : "";
  const title =
    stripTags((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "") ||
    fallbackId.replace(/-/g, " ");
  const id =
    (html.match(/data-lesson-id="([^"]+)"/) || [])[1] ||
    basename(htmlAbs).replace(/\.html$/, "");
  const dur =
    (html.match(/"duration"\s*:\s*"([^"]+)"/) || [])[1] ||
    (html.match(/(\d+)\s*min/i) || [, "12"])[1] + " min";
  const level =
    (html.match(/data-level="([^"]+)"/) || [])[1] ||
    (html.match(/badge--level-([a-z]+)/) || [, "intermedio"])[1];
  const tags = [];
  const tagRe = /class="tag tag--cat"[^>]*>([^<]+)</g;
  let m;
  while ((m = tagRe.exec(html))) tags.push(stripTags(m[1]));
  return { id, title, duration: dur.replace(/\s+/g, " ").trim(), level, tags };
}

// ---- escaneo de disco -> objeto modules según formato de data.js ----
function scanCourse(slug) {
  const courseDir = join(CURSOS_DIR, slug);
  if (!existsSync(courseDir)) return { modules: [], lessons: 0 };
  const modules = [];
  let totalLessons = 0;

  const modDirs = readdirSync(courseDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && RE_MOD.test(d.name))
    .sort((a, b) => Number(a.name.match(RE_MOD)[1]) - Number(b.name.match(RE_MOD)[1]));

  for (const md of modDirs) {
    const modAbs = join(courseDir, md.name);
    const idxAbs = join(modAbs, "index.html");
    const idxHtml = existsSync(idxAbs) ? readFileSync(idxAbs, "utf8") : "";
    const modTitle =
      stripTags((idxHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "") ||
      "Módulo " + md.name.match(RE_MOD)[1];

    const lessons = [];
    const files = readdirSync(modAbs, { withFileTypes: true })
      .filter((f) => f.isFile() && f.name.endsWith(".html") && f.name !== "index.html")
      .sort((a, b) => a.name.localeCompare(b.name, "es"));

    for (const f of files) {
      const meta = readMeta(join(modAbs, f.name), f.name.replace(/\.html$/, ""));
      lessons.push({
        id: meta.id,
        title: meta.title,
        path: `cursos/${slug}/${md.name}/${f.name}`,
        duration: meta.duration,
        level: meta.level,
        tags: meta.tags,
      });
      totalLessons++;
    }

    modules.push({
      id: md.name,
      title: modTitle,
      path: `cursos/${slug}/${md.name}/index.html`,
      lessons,
    });
  }
  return { modules, lessons: totalLessons };
}

// ---- serializer a objeto JS literal (sin JSON.stringify de claves) ----
function jsify(value, indent) {
  const pad = "  ".repeat(indent);
  if (Array.isArray(value)) {
    if (!value.length) return "[]";
    const inner = value.map((v) => jsify(v, indent + 1)).join(",\n" + "  ".repeat(indent + 1));
    return `[\n${"  ".repeat(indent + 1)}${inner}\n${pad}]`;
  }
  if (value && typeof value === "object") {
    const keys = Object.keys(value);
    if (!keys.length) return "{}";
    const inner = keys
      .map((k) => `${k}: ${jsify(value[k], indent + 1)}`)
      .join(",\n" + "  ".repeat(indent + 1));
    return `{\n${"  ".repeat(indent + 1)}${inner}\n${pad}}`;
  }
  return jsStr(value);
}

// ---- main ----
const args = process.argv.slice(2);
const dry = args.includes("--dry");
const slugs = args.filter((a) => !a.startsWith("--"));
const targets = slugs.length ? slugs : TARGETS;

let source = readFileSync(DATA_FILE, "utf8");
let out = source;
let done = 0;

for (const slug of targets) {
  const { modules, lessons } = scanCourse(slug);
  if (!modules.length) {
    console.warn(`[skip] ${slug}: no hay módulos en disco`);
    continue;
  }

  // localizar el bloque del curso por su id único
  const idIdx = out.indexOf(`id: "${slug}"`);
  if (idIdx === -1) {
    console.warn(`[skip] ${slug}: id no encontrado en data.js`);
    continue;
  }
  // el bloque termina en el siguiente `id: "` (o fin de archivo)
  const nextId = out.indexOf('\n    id: "', idIdx + 6);
  const block = nextId === -1 ? out.slice(idIdx) : out.slice(idIdx, nextId);
  const modIdx = block.indexOf("modules: []");
  if (modIdx === -1) {
    console.warn(`[skip] ${slug}: bloque sin "modules: []" (revisar)`);
    continue;
  }
  const absMod = idIdx + modIdx;
  const modulesJs = jsify(modules, 3).replace(/^/gm, "    ");

  if (!dry) {
    out = out.slice(0, absMod) + "modules: " + modulesJs + out.slice(absMod + "modules: []".length);
    // actualizar lessons: 0 -> N dentro del bloque del curso
    const absLess = idIdx + block.indexOf("lessons: 0");
    out =
      out.slice(0, absLess) +
      "lessons: " + lessons +
      out.slice(absLess + "lessons: 0".length);
  }
  console.log(`[${dry ? "DRY" : "OK "}] ${slug}: ${modules.length} módulos / ${lessons} lecciones`);
  done++;
}

if (!dry && done > 0) writeFileSync(DATA_FILE, out, "utf8");
console.log(`\n[fin] ${done}/${targets.length} cursos ${dry ? "(dry) sin escribir" : "registrados"}`);
