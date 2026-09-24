/* Repara <a href=">Etiqueta</a> (URL borrada) en footer nav y cursos/linux.
   Añade id a la <section> que contiene el <h2> destino y reescribe el href.
   Uso: node _herramientas/_reparar_anclas.mjs */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));

/* archivo -> [[clave del h2, id]] */
const SECTION_PLAN = {
  "secciones/recursos/blog-y-comunidades/index.html": [
    ["Foros de preguntas y respuestas", "foros"],
    ["Comunidades hispanas", "comunidades"],
  ],
  "secciones/recursos/conceptos/index.html": [
    ["HTTP y Web", "http-y-web"],
    ["Datos", "datos"],
    ["Arquitectura", "arquitectura"],
    ["Infraestructura", "infraestructura"],
  ],
  "secciones/recursos/cursos-gratis/index.html": [
    ["Plataformas y cursos", "plataformas"],
    ["Canales de YouTube", "canales"],
  ],
  "secciones/recursos/descargas/index.html": [
    ["Plantillas de proyectos", "plantillas"],
    ["Checklists", "checklists"],
    ["Comandos esenciales", "comandos-esenciales"],
    ["Gu", "guias-html"],
  ],
  "secciones/recursos/herramientas/index.html": [
    ["Clientes de bases de datos", "clientes-bd"],
    ["Contenedores", "contenedores"],
  ],
  "secciones/recursos/libros/index.html": [
    ["Fundamentos de datos", "fundamentos-de-datos"],
    ["Lenguajes y protocolos", "lenguajes-y-protocolos"],
    ["Arquitectura y dise", "arquitectura-y-diseno"],
    ["Sistemas y escala", "sistemas-y-escala"],
  ],
  "secciones/recursos/recursos-adicionales/index.html": [
    ["Newsletters", "newsletters"],
    ["Canales de YouTube", "canales-de-youtube"],
  ],
};

/* etiqueta rota -> id (por archivo) */
const LABEL_MAP = {
  "secciones/recursos/blog-y-comunidades/index.html": {
    "Foros y Reddit": "foros",
    "Comunidades hispanas": "comunidades",
  },
  "secciones/recursos/conceptos/index.html": {
    "HTTP y Web": "http-y-web",
    "Datos y programaci\u00f3n": "datos",
    "Arquitectura": "arquitectura",
    "Infra y seguridad": "infraestructura",
  },
  "secciones/recursos/cursos-gratis/index.html": {
    "Plataformas": "plataformas",
    "Canales en espa\u00f1ol": "canales",
  },
  "secciones/recursos/descargas/index.html": {
    "Plantillas": "plantillas",
    "Checklists": "checklists",
    "Comandos esenciales": "comandos-esenciales",
    "Gu\u00edas HTML": "guias-html",
  },
  "secciones/recursos/herramientas/index.html": {
    "Clientes de API y BD": "clientes-bd",
    "Contenedores y cloud": "contenedores",
  },
  "secciones/recursos/libros/index.html": {
    "Principiante: SQL y oficio": "fundamentos-de-datos",
    "Intermedio: lenguajes": "lenguajes-y-protocolos",
    "Avanzado: arquitectura": "arquitectura-y-diseno",
    "Experto: sistemas": "sistemas-y-escala",
  },
  "secciones/recursos/recursos-adicionales/index.html": {
    "Newsletters y podcasts": "newsletters",
    "Canal de la semana": "canales-de-youtube",
  },
};

let sectionsPatched = 0;
let linksPatched = 0;

function patchSections(rel, plan) {
  const file = join(ROOT, rel);
  const lines = readFileSync(file, "utf8").split("\n");
  let changed = false;
  for (const [key, id] of plan) {
    const h2 = lines.findIndex((l) => l.includes("<h2") && l.includes(key));
    if (h2 < 0) {
      console.warn(`  [skip] h2 no encontrado en ${rel}: "${key}"`);
      continue;
    }
    let j = h2;
    while (j >= 0 && !/^\s*<section>\s*$/.test(lines[j]) && !/^\s*<section[^>]*id=/.test(lines[j])) j--;
    if (j < 0) {
      console.warn(`  [skip] <section> padre no encontrada en ${rel}: "${key}"`);
      continue;
    }
    if (/^\s*<section>\s*$/.test(lines[j])) {
      lines[j] = lines[j].replace("<section>", `<section id="${id}">`);
      sectionsPatched++;
      changed = true;
    }
  }
  if (changed) writeFileSync(file, lines.join("\n"), "utf8");
}

function patchLinks(rel) {
  const file = join(ROOT, rel);
  let html = readFileSync(file, "utf8");
  let changed = false;
  for (const [label, id] of Object.entries(LABEL_MAP[rel])) {
    const broken = `href=">${label}</a>`;
    if (html.includes(broken)) {
      html = html.replace(broken, `href="#${id}">${label}</a>`);
      linksPatched++;
      changed = true;
    }
  }
  if (changed) writeFileSync(file, html, "utf8");
}

for (const rel of Object.keys(SECTION_PLAN)) {
  patchSections(rel, SECTION_PLAN[rel]);
  patchLinks(rel);
}

/* cursos/linux: enlaces de módulos en prev/next de modulo-01 */
const linuxDir = join(ROOT, "cursos", "linux", "modulo-01");
const linuxFixes = [
  [`href=">M\u00f3dulo 4 \u00b7 Herramientas del backend</a>`,
   `href="../modulo-04/index.html">M\u00f3dulo 4 \u00b7 Herramientas del backend</a>`],
  [`href=">M\u00f3dulo 5 \u00b7 Procesos y servicios</a>`,
   `href="../modulo-05/index.html">M\u00f3dulo 5 \u00b7 Procesos y servicios</a>`],
];
for (const name of readdirSync(linuxDir).filter((f) => f.endsWith(".html"))) {
  const file = join(linuxDir, name);
  let html = readFileSync(file, "utf8");
  let changed = false;
  for (const [broken, fix] of linuxFixes) {
    if (html.includes(broken)) {
      html = html.replace(broken, fix);
      linksPatched++;
      changed = true;
    }
  }
  if (name === "apt-paquetes.html") {
    const prose = [
      [`href=">procesos</a>`, `href="../modulo-05/index.html">procesos</a>`],
      [`href=">nginx</a>`, `href="../modulo-06/index.html">nginx</a>`],
    ];
    for (const [broken, fix] of prose) {
      if (html.includes(broken)) {
        html = html.replace(broken, fix);
        linksPatched++;
        changed = true;
      }
    }
  }
  if (changed) writeFileSync(file, html, "utf8");
}

console.log(`Secciones con id: ${sectionsPatched} | Enlaces reparados: ${linksPatched}`);

/* barrido final: busca href="> o src="> restantes */
let leftover = 0;
function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if ([".git", "node_modules", ".opencode", "_herramientas"].includes(e.name)) continue;
    const fp = join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (e.name.endsWith(".html")) {
      const html = readFileSync(fp, "utf8");
      const m = html.match(/(href|src)="\s*>/g);
      if (m) {
        leftover += m.length;
        console.log(`  RESTANTE: ${fp.slice(ROOT.length + 1)} -> ${m.join(", ")}`);
      }
    }
  }
}
walk(ROOT);
console.log(leftover === 0 ? "Sin href/src rotos restantes" : `Quedan ${leftover} rotos`);
