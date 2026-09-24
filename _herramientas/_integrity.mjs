import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
let html = 0, unclosed = 0, malformed = 0;
(function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    if (["_herramientas", ".git", "node_modules", ".opencode"].includes(e.name)) continue;
    const fp = join(d, e.name);
    if (e.isDirectory()) walk(fp);
    else if (e.name.endsWith(".html")) {
      html++;
      let s = readFileSync(fp, "utf8");
      s = s.replace(/<script[\s\S]*?<\/script>/g, "");
      s = s.replace(/<pre[\s\S]*?<\/pre>/g, "");
      s = s.replace(/<code[\s\S]*?<\/code>/g, "");
      const bad = [...s.matchAll(/(?:href|src)="\s*[<>]/g)];
      if (bad.length) { malformed += bad.length; console.log("ATTR MALFORMADO:", fp); }
      const tags = [...s.matchAll(/<(?:"[^"]*"|[^">])*>/g)].map((m) => m[0]);
      const odd = tags.filter((t) => t.split('"').length % 2 === 0);
      if (odd.length) { unclosed += odd.length; console.log("ETIQUETA DESBALANCEADA:", fp, "->", odd.slice(0, 2).join(" | ")); }
    }
  }
})(".");
console.log("HTML:", html, "| etiquetas con  comillas impares:", unclosed, "| atributos malformados:", malformed);