// _retrofit_css.mjs
// Inyecta <link> a assets/css/responsive.css (o course.css si falta) en todos
// los HTML que no lo cargan, con el prefijo relativo correcto según profundidad.
//
// USO: node _retrofit_css.mjs
//
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(dirname(fileURLToPath(import.meta.url)));

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules") continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

function prefixFor(file) {
  const rel = relative(__dirname, dirname(file)).split(sep).filter(Boolean);
  return rel.length ? "../".repeat(rel.length) : "";
}

let injected = 0;
let skipped = 0;
const files = walk(__dirname);
for (const file of files) {
  let html = readFileSync(file, "utf8");
  if (html.includes("assets/css/responsive.css")) {
    skipped++;
    continue;
  }
  const closeHead = html.indexOf("</head>");
  if (closeHead === -1) {
    skipped++;
    continue;
  }
  const prefix = prefixFor(file);
  const links =
    `\n<link rel="stylesheet" href="${prefix}assets/css/course.css">` +
    `\n<link rel="stylesheet" href="${prefix}assets/css/responsive.css">` +
    `\n`;
  html = html.slice(0, closeHead) + links + html.slice(closeHead);
  writeFileSync(file, html, "utf8");
  injected++;
}
console.log(`[retrofit] ${files.length} html · ${injected} con links nuevos · ${skipped} ya lo tenían`);