// _reparar_rutas.mjs — reintegra cualquier href/src RELATIVO al destino correcto
// según la ubicación actual del archivo (idempotente).
// - chunks normales (fuera de <script>/<style>): reescribe href/src.
// - bloques <script>: reescribe SOLO el atributo src de la etiqueta de apertura.
// Reporta lo no reparable (enlaces que apuntan a un destino inexistente).
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, normalize, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));

function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if ([".git", ".opencode", "node_modules", "_herramientas"].includes(e.name)) continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (e.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

function toPosix(p) {
  return p.split("\\").join("/");
}

function siteRel(abs) {
  return toPosix(abs.slice(ROOT.length + 1));
}

function fixUrl(value, hostDir) {
  const clean = value.split("#")[0].split("?")[0];
  const target = resolve(hostDir, clean);
  const suffix = value.slice(clean.length);
  if (existsSync(target)) {
    let relp = toPosix(relative(hostDir, target));
    if (!relp.startsWith(".")) relp = "./" + relp;
    return { value: relp + suffix, broken: false, changed: relp + suffix !== value };
  }
  // Fallback: reinterprete como ruta desde la raíz del sitio (valor truncado de ../)
  const base = clean.replace(/^(\.\.\/)+/, "");
  if (!base || base.startsWith("../") || base.startsWith("/")) return { value, broken: true };
  const fallbackTarget = resolve(ROOT, base);
  if (existsSync(fallbackTarget)) {
    let relp = toPosix(relative(hostDir, fallbackTarget));
    if (!relp.startsWith(".")) relp = "./" + relp;
    return { value: relp + suffix, broken: false, changed: relp + suffix !== value };
  }
  return { value, broken: true };
}

const attrRe = /\b(href|src)\s*=\s*("([^"]+)"|'([^']+)')/g;
const scriptSrcRe = /<script\b([^>]*)\bsrc\s*=\s*("([^"]+)"|'([^']+)')([^>]*)>/g;

let changedFiles = 0, changedAttrs = 0, brokenTotal = 0;
const broken = new Map();
const log = new Map();

for (const abs of walk(ROOT)) {
  const html = readFileSync(abs, "utf8");
  const hostDir = dirname(abs);
  let next = html;
  const blocks = [];
  html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, (m, off) => blocks.push([off, m.length]));
  let offset = 0, out = "";
  const note = (v) => {
    if (!log.has(siteRel(abs))) log.set(siteRel(abs), []);
    log.get(siteRel(abs)).push(v);
  };
  for (const [off, len] of blocks) {
    const before = html.slice(offset, off);
    const block = html.slice(off, off + len);
    out += before.replace(attrRe, (full, attr, q, dq, sq) => {
      const val = dq !== undefined ? dq : sq;
      if (/^(\/\/|https?:|data:|#|mailto)/.test(val)) return full;
      const r = fixUrl(val, hostDir);
      if (r.broken) {
        brokenTotal++;
        if (!broken.has(siteRel(abs) + " -> " + val)) broken.set(siteRel(abs) + " -> " + val, true);
        return full;
      }
      if (r.changed) { changedAttrs++; }
      const quote = q[0];
      return attr + "=" + quote + r.value + quote;
    });
    const opened = block.replace(scriptSrcRe, (full, pre, q, dq, sq, post) => {
      const val = dq !== undefined ? dq : sq;
      if (/^(\/\/|https?:|data:|#)/.test(val)) return full;
      const r = fixUrl(val, hostDir);
      if (r.broken) {
        brokenTotal++;
        if (!broken.has(siteRel(abs) + " -> " + val)) broken.set(siteRel(abs) + " -> " + val, true);
        return full;
      }
      if (r.changed) changedAttrs++;
      const quote = q[0];
      return "<script" + pre + " src=" + quote + r.value + quote + post + ">";
    });
    out += opened.replace("<script", "<script");
    offset = off + len;
  }
  out += html.slice(offset);
  if (out !== html) {
    writeFileSync(abs, out, "utf8");
    changedFiles++;
  }
}
console.log("=== FIXER ===");
console.log("archivos modificados:", changedFiles, "· atributos corregidos:", changedAttrs, "· rotos restantes:", brokenTotal);
for (const k of [...broken.keys()].sort()) console.log("ROTO:", k);
for (const k of [...log.keys()].sort()) console.log("LOG:", k, log.get(k).join(" | "));