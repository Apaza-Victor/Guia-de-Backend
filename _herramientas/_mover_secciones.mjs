// _mover_secciones.mjs
// Reorganiza la web: mueve todas las secciones (menos index.html y cursos/)
// a una carpeta "secciones/" y reescribe los enlaces relativos de todos los
// HTML (href/src) resolviendo contra la estructura anterior y reemitiéndolos
// con el remapeo de carpetas movidas (primera carpeta -> secciones/).
// También fija data-root correcto en cada <body>.
//
// USO: node _mover_secciones.mjs
//
import { readFileSync, writeFileSync, readdirSync, renameSync, mkdirSync, statSync, cpSync, rmSync } from "node:fs";
import { join, dirname, sep, posix } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(dirname(fileURLToPath(import.meta.url)));
const ROOT = __dirname;

const MOVED = [
  "acerca", "aprender", "buscador", "cheatsheets", "dashboard", "ejercicios",
  "favoritos", "glosario", "historial", "practica", "proyectos", "recursos",
  "referencias", "retos", "roadmap",
];
const MOVED_SET = new Set(MOVED);
const EXCLUDED = new Set([".git", ".opencode", "node_modules", "assets", "cursos", "secciones"]);

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === ".opencode" || entry.name === "node_modules") continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

const relOf = (abs) => posix.normalize(abs.slice(ROOT.length).replace(/\\/g, "/").replace(/^\//, ""));

function rewriteUrl(value, oldDir, newDir) {
  const HASH = "#";
  const proto = /^([a-zA-Z][a-zA-Z0-9+.-]*:)?\/\//.test(value) || value.startsWith("data:") || value.startsWith("mailto:") || value.startsWith("tel:") || value.startsWith("javascript:");
  if (proto) return value;
  if (value.startsWith("#")) return value;
  if (value.startsWith("/")) return value;

  let hash = "";
  let query = "";
  let path = value;
  const hIdx = path.indexOf("#");
  if (hIdx !== -1) { hash = path.slice(hIdx); path = path.slice(0, hIdx); }
  const qIdx = path.indexOf("?");
  if (qIdx !== -1) { query = path.slice(qIdx); path = path.slice(0, qIdx); }
  if (!path) return value;

  path = path.replace(/^\.\/+/, "");
  const resolved = posix.normalize("/" + oldDir + "/" + path).replace(/^\//, "");
  const segs = resolved.split("/");
  let target = resolved;
  if (!segs.some((s) => s === "..") && MOVED_SET.has(segs[0])) {
    target = "secciones/" + resolved;
  }
  let out = posix.relative(newDir, target);
  if (!out) out = "./";
  return out + query + hash;
}

function fixDataRoot(html, depth) {
  const rootVal = depth === 0 ? "." : "../".repeat(depth);
  const bodyRe = /<body([^>]*)>/;
  const m = html.match(bodyRe);
  if (!m) return html;
  let attrs = m[1] || "";
  if (/\sdata-root\s*=/.test(attrs)) {
    attrs = attrs.replace(/data-root="[^"]*"/, `data-root="${rootVal}"`);
  } else {
    attrs += ` data-root="${rootVal}"`;
  }
  return html.replace(bodyRe, `<body${attrs}>`);
}

function rewriteFile(abs) {
  const rel = relOf(abs);
  const moved = rel.startsWith("secciones/");
  const oldRel = moved ? rel.slice("secciones/".length) : rel;
  const newRel = rel;

  const oldDir = posix.dirname(oldRel) === "." ? "" : posix.dirname(oldRel);
  const newDir = posix.dirname(newRel) === "." ? "" : posix.dirname(newRel);
  const depth = newDir ? newDir.split("/").length : 0;

  let html = readFileSync(abs, "utf8");
  const original = html;

  const attrRe = /\b(href|src|data-src|poster)\s*=\s*("([^"]*)"|'([^']*)')/g;
  const rewriteAttrs = (chunk) =>
    chunk.replace(attrRe, (full, attr, quoted, dq, sq) => {
      const val = dq !== undefined ? dq : sq;
      const next = rewriteUrl(val, oldDir, newDir);
      if (next === val) return full;
      const quote = quoted[0];
      return `${attr}=${quote}${next}${quote}`;
    });

  let out = "";
  let idx = 0;
  const re = /<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>/gi;
  for (const m of html.matchAll(re)) {
    out += rewriteAttrs(html.slice(idx, m.index));
    out += m[0];
    idx = m.index + m[0].length;
  }
  out += rewriteAttrs(html.slice(idx));
  html = fixDataRoot(out, depth);

  if (html !== original) writeFileSync(abs, html, "utf8");
  return { rel, changed: html !== original };
}

const before = walk(ROOT);
for (const section of MOVED) {
  const from = join(ROOT, section);
  const to = join(ROOT, "secciones", section);
  if (statSync(from, { throwIfNoEntry: false })) {
    mkdirSync(dirname(to), { recursive: true });
    try {
      renameSync(from, to);
      console.log(`[move] ${section}/ -> secciones/${section}/`);
    } catch (err) {
      console.log(`[move] ${section}/: rename falló (${err.code}); copiando...`);
      cpSync(from, to, { recursive: true });
      rmSync(from, { recursive: true, force: true });
      console.log(`[move] ${section}/ -> secciones/${section}/ (copiado+borrado)`);
    }
  } else {
    console.log(`[move] ${section}/ ya movido (o no existe)`);
  }
}

let changedFiles = 0;
for (const abs of walk(ROOT)) {
  const r = rewriteFile(abs);
  if (r.changed) changedFiles++;
}
console.log(`[rewrite] ${walk(ROOT).length} html · ${changedFiles} con cambios`);