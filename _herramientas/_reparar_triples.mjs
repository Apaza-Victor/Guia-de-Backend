// _reparar_triples.mjs (v2 — backreference)
// Colapsa el patrón corrupto  href="A"B"A"  ->  href="B"
// usando una backreference para exigir que el tramo final repita EXACTAMENTE el primero,
// evitando falsos positivos cuando el regex abarcaba varios atributos seguidos.
//
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === ".opencode" || entry.name === "node_modules") continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

const dqRe = /\b(href|src|data-src|poster)\s*=\s*"([^"]+)"([^"]+)"\2"/g;
const sqRe = /\b(href|src|data-src|poster)\s*=\s*'([^']+)'([^']+)'\2'/g;

function pass(text) {
  let prev;
  do {
    prev = text;
    text = text.replace(dqRe, (full, attr, a, b) => `${attr}="${b}"`);
    text = text.replace(sqRe, (full, attr, a, b) => `${attr}='${b}'`);
  } while (text !== prev);
  return text;
}

let total = 0;
let filesChanged = 0;
for (const abs of walk(ROOT)) {
  const html = readFileSync(abs, "utf8");
  const next = pass(html);
  if (next !== html) {
    writeFileSync(abs, next, "utf8");
    filesChanged++;
  }
  const nq = (html.match(/="([^"]+)"([^"]+)"\1"/g) || []).length;
  const ns = (html.match(/='([^']+)'([^']+)'\1'/g) || []).length;
  total += nq + ns;
  if ((nq + ns) > 0 && next === html) {
    console.log("[reparar] NO colapsado (revisar):", abs);
  }
}
console.log(`[reparar] archivos con cambios: ${filesChanged} · triples colapsados: ${total}`);