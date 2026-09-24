import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const root = "C:/Users/LENOVO IDEPAD/Downloads/Repositorio de Módulos/Guia de Backend";

function walk(dir) {
  let out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "_herramientas" || e.name === "node_modules") continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(p));
    else if (extname(e.name) === ".html") out.push(p);
  }
  return out;
}

const PRE = '<pre><code class="language-text">';
const WRAPPER = '<div class="code-block__body">';
const CLOSERS = /<\/div>|<\/figure>|<\/section>|<\/main>/g;

function isRaw(text, idx) {
  const since = Math.max(text.lastIndexOf(WRAPPER, idx), -1);
  const slice = text.slice(since + 1, idx);
  return slice.search(CLOSERS) !== -1;
}

function fixText(text) {
  let i = 0;
  let fixed = 0;
  while (true) {
    const idx = text.indexOf(PRE, i);
    if (idx === -1) break;
    if (!isRaw(text, idx)) { i = idx + PRE.length; continue; }
    const preEnd = text.indexOf("</pre>", idx);
    if (preEnd === -1) { i = idx + PRE.length; continue; }
    const content = text.slice(idx + PRE.length, preEnd).replace(/<\/code>\s*$/, "");
    const lineStart = text.lastIndexOf("\n", idx - 1) + 1;
    const indent = text.slice(lineStart, idx);
    let lineEnd = text.indexOf("\n", lineStart);
    if (lineEnd === -1) lineEnd = text.length;
    const tail = text.slice(preEnd + "</pre>".length, lineEnd);
    const postFix =
      indent + "<figure class=\"code-block code-block--output\">\n" +
      indent + "  <figcaption class=\"code-block__header\"><span class=\"code-block__lang\">Salida</span></figcaption>\n" +
      indent + "  <div class=\"code-block__body\"><pre><code class=\"language-text\">" +
      content +
      "</code></pre></div>\n" +
      indent + "</figure>" + tail;
    const next = lineEnd === text.length ? text.length : lineEnd + 1;
    text = text.slice(0, lineStart) + postFix + text.slice(next);
    i = lineStart + postFix.length;
    fixed++;
  }
  return { text, fixed };
}

const files = walk(root);
let totalFixed = 0;
const changed = [];

for (const f of files) {
  const raw = readFileSync(f, "utf8");
  const { text, fixed } = fixText(raw);
  if (fixed > 0) {
    if (process.env.DRY !== "1") writeFileSync(f, text.replace(/\r\n/g, "\n"));
    totalFixed += fixed;
    changed.push(`${f.replace(root + "\\", "")} (${fixed})`);
  }
}

console.log("Archivos modificados:", changed.length);
console.log("Pres convertidos:", totalFixed);
console.log(changed.join("\n"));