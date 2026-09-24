// _generador_paginas.mjs
// FASE G · Generador reutilizable de páginas (lección + índice de módulo) y
// actualizador de data.js para los cursos parciales (python, devops, cloud).
//
// Lee un curriculum (.mjs que exporta COURSES) y genera:
//   - cursos/<slug>/modulo-XX/index.html            (índice de módulo)
//   - cursos/<slug>/modulo-XX/<leccion>.html         (lección)
//
// Las lecciones SIN `body` (ya escritas a mano) se listan en el índice y en
// data.js pero nunca se sobrescriben.
//
// El cuerpo de una lección puede ser:
//   - `body: "<html string>"`  → se inserta literal
//   - `body: {sectionKey: [...], ...}` → se maqueta en las 12 secciones estándar
//
// USO:
//   node _generador_paginas.mjs --curriculum=_curriculum_python.mjs
//   node _generador_paginas.mjs --curriculum=... --force      # sobrescribe body menos array (si --no-data)
//   node _generador_paginas.mjs --curriculum=... --update-data # además reescribe data.js
//   node _generador_paginas.mjs --curriculum=... --dry
//
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(dirname(fileURLToPath(import.meta.url)));
const DATA_FILE = join(__dirname, "assets", "js", "data.js");

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const LEVELS = {
  principiante: { label: "Principiante", emoji: "🌱" },
  basico: { label: "Básico", emoji: "💻" },
  intermedio: { label: "Intermedio", emoji: "⚙️" },
  avanzado: { label: "Avanzado", emoji: "🔥" },
  experto: { label: "Experto", emoji: "🧠" },
};

/* ============================================================ plantillas */
function head(title, desc, prefix, htmlExtra = "") {
  return `<!DOCTYPE html>
<html lang="es" data-theme="light"${htmlExtra}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} · Backend Academy</title>
<meta name="description" content="${esc(desc)}">
<meta name="generator" content="Backend Academy - generador de cursos">
<meta name="color-scheme" content="light dark">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link rel="stylesheet" href="${prefix}assets/css/reset.css">
<link rel="stylesheet" href="${prefix}assets/css/variables.css">
<link rel="stylesheet" href="${prefix}assets/css/global.css">
<link rel="stylesheet" href="${prefix}assets/css/layout.css">
<link rel="stylesheet" href="${prefix}assets/css/header.css">
<link rel="stylesheet" href="${prefix}assets/css/sidebar.css">
<link rel="stylesheet" href="${prefix}assets/css/footer.css">
<link rel="stylesheet" href="${prefix}assets/css/cards.css">
<link rel="stylesheet" href="${prefix}assets/css/lesson.css">
<link rel="stylesheet" href="${prefix}assets/css/code.css">
<link rel="stylesheet" href="${prefix}assets/css/forms.css">
<link rel="stylesheet" href="${prefix}assets/css/roadmap.css">
<link rel="stylesheet" href="${prefix}assets/css/dashboard.css">
<link rel="stylesheet" href="${prefix}assets/css/components.css">
<link rel="stylesheet" href="${prefix}assets/css/toc.css">
<link rel="stylesheet" href="${prefix}assets/css/course.css">
<link rel="stylesheet" href="${prefix}assets/css/responsive.css">
</head>`;
}

function siteHeader(prefix) {
  return `
<header class="site-header">
  <div class="container site-header__inner">
    <a class="brand" href="${prefix}index.html">
      <span class="brand__logo">⚙️</span>
      <span>Backend Academy<small>Cursos</small></span>
    </a>
    <nav class="nav-main" aria-label="Navegación principal">
      <a href="${prefix}index.html">Inicio</a>
      <a href="${prefix}secciones/roadmap/index.html">Roadmap</a>
      <a href="${prefix}secciones/aprender/index.html">Aprender</a>
      <a href="${prefix}secciones/practica/index.html">Práctica</a>
      <a href="${prefix}secciones/proyectos/index.html">Proyectos</a>
      <a href="${prefix}secciones/recursos/index.html">Recursos</a>
      <a href="${prefix}secciones/buscador/index.html" class="nav-icon" aria-label="Buscar"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></a>
    </nav>
    <div class="header-actions">
      <button class="btn btn--icon btn--ghost theme-toggle" type="button" aria-label="Cambiar a tema oscuro">
        <i data-mode="light" class="fa-solid fa-moon" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</header>`;
}

function footerModLinks(prefix, course) {
  return (course.modules || [])
    .map(
      (m) =>
        `          <li><a href="${prefix}cursos/${course.slug}/${m.id}/index.html">Módulo ${m.n} · ${esc(m.t)}</a></li>`
    )
    .join("\n");
}

function siteFooter(prefix, course) {
  return `
<footer class="site-footer">
  <div class="container">
    <div class="site-footer__top">
      <div class="site-footer__desc">
        <p><strong>Backend Academy</strong></p>
        <p>Plataforma gratuita para aprender desarrollo Backend desde cero: conceptos, protocolos, arquitectura y práctica con ejemplos reales.</p>
      </div>
      <nav aria-label="Secciones">
        <h4>Explora</h4>
        <ul>
          <li><a href="${prefix}index.html">Inicio</a></li>
          <li><a href="${prefix}secciones/roadmap/index.html">Roadmap de aprendizaje</a></li>
          <li><a href="${prefix}secciones/aprender/index.html">Aprender</a></li>
          <li><a href="${prefix}secciones/practica/index.html">Práctica</a></li>
        </ul>
      </nav>
      <nav aria-label="Recursos">
        <h4>Recursos</h4>
        <ul>
          <li><a href="${prefix}secciones/recursos/index.html">Recursos</a></li>
          <li><a href="${prefix}glosario/index.html">Glosario</a></li>
          <li><a href="${prefix}cheatsheets/index.html">Cheatsheets</a></li>
          <li><a href="${prefix}secciones/buscador/index.html">Buscar</a></li>
        </ul>
      </nav>
      <nav aria-label="Curso">
        <h4>Curso actual</h4>
        <ul>
${footerModLinks(prefix, course)}
        </ul>
      </nav>
    </div>
    <div class="site-footer__bottom">
      <span>© 2026 Backend Academy. Contenido liberado para aprender y compartir.</span>
      <div class="site-footer__links">
        <a href="${prefix}acerca/index.html">Acerca de</a>
        <a href="${prefix}favoritos/index.html">Favoritos</a>
        <a href="${prefix}historial/index.html">Historial</a>
      </div>
    </div>
  </div>
</footer>`;
}

function scripts(prefix) {
  return `
<script src="${prefix}assets/js/helpers.js"></script>
<script src="${prefix}assets/js/storage.js"></script>
<script src="${prefix}assets/js/theme.js"></script>
<script src="${prefix}assets/js/data.js"></script>
<script src="${prefix}assets/js/progress.js"></script>
<script src="${prefix}assets/js/navigation.js"></script>
<script src="${prefix}assets/js/sidebar.js"></script>
<script src="${prefix}assets/js/toc.js"></script>
<script src="${prefix}assets/js/code.js"></script>
<script src="${prefix}assets/js/main.js"></script>
</body>
</html>`;
}

/* ================================================== cuerpo de lección */
function codeBlock(lang, caption, code) {
  const label = String(lang || "text").toLowerCase();
  const nice = { bash: "Bash", python: "Python", yaml: "YAML", js: "JavaScript", json: "JSON", sql: "SQL", text: "Texto", nginx: "Nginx", docker: "Dockerfile", ini: "INI", env: "ENV" }[label] || (lang ? lang.toUpperCase() : "Código");
  const src = Array.isArray(code) ? code.join("\n") : code;
  return `<figure class="code-block">
  <figcaption class="code-block__header"><span class="code-block__lang">${nice}</span>${caption ? `<span class="code-block__caption">${esc(caption)}</span>` : ""}</figcaption>
  <div class="code-block__body"><pre><code class="language-${label}">${esc(src)}</code></pre></div>
</figure>`;
}

function pList(items, tag = "ul") {
  if (!items || !items.length) return "";
  return `<${tag}>${items.map((i) => `<li>${i}</li>`).join("\n")}</${tag}>`;
}

function renderBody(lesson) {
  const b = lesson.body;
  if (typeof b === "string") return b;
  if (!b || typeof b !== "object") return "";

  const sections = [];
  // Secciones fijas estándar
  if (b.intro) sections.push(`<section id="introduccion" aria-labelledby="introduccion-t"><h2 id="introduccion-t">Introducción</h2><p>${b.intro.join("</p>\n<p>")}</p></section>`);
  if (b.def) sections.push(`<section id="definicion" aria-labelledby="definicion-t"><h2 id="definicion-t">Definición</h2>${renderDef(b.def)}</section>`);
  if (b.concepts && b.concepts.length) sections.push(`<section id="conceptos-clave" aria-labelledby="conceptos-clave-t"><h2 id="conceptos-clave-t">Conceptos clave</h2>${pList(b.concepts)}</section>`);
  if (b.basic) sections.push(`<section id="ejemplo-basico" aria-labelledby="ejemplo-basico-t"><h2 id="ejemplo-basico-t">Ejemplo básico</h2>${renderExample(b.basic, lesson.lang, lesson)}</section>`);
  if (b.intermediate) sections.push(`<section id="ejemplo-intermedio" aria-labelledby="ejemplo-intermedio-t"><h2 id="ejemplo-intermedio-t">Ejemplo intermedio</h2>${renderExample(b.intermediate, lesson.lang, lesson)}</section>`);
  if (b.real) sections.push(`<section id="ejemplo-real" aria-labelledby="ejemplo-real-t"><h2 id="ejemplo-real-t">Ejemplo real</h2>${renderExample(b.real, lesson.lang, lesson)}</section>`);
  if (b.code) sections.push(`<section id="codigo" aria-labelledby="codigo-t"><h2 id="codigo-t">Código completo</h2><p>${b.codeIntro || "El código completo de esta lección: para copiarlo en tu proyecto y adaptarlo a tu caso."}</p>${codeBlock(b.codeLang || lesson.lang, b.codeCaption, b.code)}</section>`);
  if (b.expl) sections.push(`<section id="explicacion" aria-labelledby="explicacion-t"><h2 id="explicacion-t">Explicación</h2>${pList(b.expl)}</section>`);
  if (b.errors && b.errors.length) {
    sections.push(`<section id="errores-comunes" aria-labelledby="errores-comunes-t"><h2 id="errores-comunes-t">Errores comunes</h2>${pList(b.errors.map((e) => (typeof e === "string" ? e : `${e.t}`)))}</section>`);
  }
  if (b.tips && b.tips.length) sections.push(`<section id="buenas-practicas" aria-labelledby="buenas-practicas-t"><h2 id="buenas-practicas-t">Buenas prácticas</h2>${pList(b.tips)}</section>`);
  if (b.exercise && b.exercise.length) sections.push(`<section id="ejercicio" aria-labelledby="ejercicio-t" class="exercise"><div class="exercise__head"><h2 id="ejercicio-t"><i class="fa-solid fa-pen" aria-hidden="true"></i> Ejercicio</h2></div>${pList(b.exercise, "ol")}</section>`);
  if (b.summary && b.summary.length) sections.push(`<section id="resumen" aria-labelledby="resumen-t" class="summary"><h2 id="resumen-t">Resumen</h2><ul class="lesson-list">${b.summary.map((s) => `<li>${s}</li>`).join("\n")}</ul></section>`);
  return sections.join("\n\n");
}

function renderDef(def) {
  if (typeof def === "string") return `<p>${def}</p>`;
  let out = `<p>${def.par || ""}</p>`;
  if (def.porQue) out += `<p><strong>Por qué importa.</strong> ${def.porQue}</p>`;
  if (def.cuando) out += `<p><strong>Cuándo usarlo.</strong> ${def.cuando}</p>`;
  return out;
}

function renderExample(ex, lang, lesson) {
  if (typeof ex === "string") return `<p>${ex}</p>`;
  const parts = [];
  if (ex.p) parts.push(`<p>${ex.p}</p>`);
  if (ex.ul) parts.push(pList(ex.ul));
  if (ex.code) parts.push(codeBlock(ex.lang || lang || "bash", ex.caption || `${lesson.exampleFile || "ejemplo"}.${ex.lang || "py" || "sh"}`, ex.code));
  if (ex.out) parts.push(`<pre><code class="language-text">${esc(ex.out)}</code></pre>`);
  if (ex.nota) parts.push(`<div class="note note--info"><p><i class="fa-solid fa-circle-info" aria-hidden="true"></i> ${ex.nota}</p></div>`);
  return parts.join("\n");
}

/* ==================================================== página de lección */
function lessonPage(course, mod, lesson) {
  const prefix = "../../../";
  const lvl = LEVELS[lesson.level] || LEVELS[mod.level] || LEVELS.basico;
  const crumbs = `
        <nav class="lesson-crumbs" aria-label="Miga de pan">
          <a href="${prefix}index.html">Inicio</a><span class="sep">/</span>
          <a href="${prefix}cursos/index.html">Cursos</a><span class="sep">/</span>
          <a href="../../index.html">${esc(course.title)}</a><span class="sep">/</span>
          <a href="../index.html">Módulo ${mod.n}</a><span class="sep">/</span>
          <span class="current">${esc(lesson.title)}</span>
        </nav>`;
  const meta = `
        <div class="lesson-meta">
          <span class="lesson-meta__item"><span class="badge badge--level badge--level-${lesson.level || mod.level}">${lvl.emoji} ${lvl.label}</span></span>
          <span class="lesson-meta__item"><i class="fa-solid fa-clock" aria-hidden="true"></i> ${lesson.duration || "10 min"}</span>
          <span class="lesson-meta__item"><i class="fa-solid fa-book" aria-hidden="true"></i> ${esc(course.title)}</span>
          <span class="lesson-meta__item"><i class="fa-solid fa-layer-group" aria-hidden="true"></i> Módulo ${mod.n} · ${esc(mod.t)}</span>
        </div>`;

  return `${head(lesson.title + " · " + course.title, lesson.desc || lesson.title, prefix, ` data-lesson-id="${lesson.id}"`)}
<body data-root="../../../" class="app-shell">

${siteHeader(prefix)}

<div class="lesson-layout lesson-layout--with-toc" id="top">
  <aside class="sidebar" data-sidebar="course" data-course="${course.slug}" data-current="${lesson.id}"></aside>
  <main class="lesson-main">
    <article class="lesson-article">
      <header class="lesson-hero">
        ${crumbs}
        <h1 class="lesson-title">${esc(lesson.title)}</h1>
        ${meta}
      </header>

      <div class="lesson-content" id="contenido">
        ${renderBody(lesson)}
      </div>

      <nav class="lesson-nav-footer" aria-label="Contenido del módulo">
        <a class="lesson-nav-footer__link" href="../index.html">
          <i class="fa-solid fa-bars" aria-hidden="true"></i> Contenido del módulo
        </a>
      </nav>

      <form class="complete-toggle"><label><input type="checkbox"> Marcar lección como completada</label></form>
      <div data-prev-next></div>
    </article>
  </main>
  <aside class="toc-rail" data-toc aria-label="Contenido de la página"></aside>
</div>

${siteFooter(prefix, course)}
${scripts(prefix)}`;
}

/* ================================================ índice de módulo */
function moduleIndex(course, mod) {
  const prefix = "../../../";
  const lvl = LEVELS[mod.level] || LEVELS[course.level] || LEVELS.intermedio;
  const totalMin = mod.lessons.reduce((a, l) => a + (parseInt(l.duration, 10) || 0), 0);
  const cards = (mod.lessons || [])
    .map(
      (l, i) => `          <a class="card card--lesson card--link" href="${l.id}.html">
            <h3>${i + 1} · ${esc(l.title)}</h3>
            <p>${l.cardText || l.desc || l.title}</p>
            <div class="card__meta"><span class="tag">${l.duration || "10 min"}</span><span class="tag tag--cat">${esc(l.category || "lección")}</span></div>
            <span class="btn btn--sm btn--outline card__action">Abrir lección <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
          </a>`
    )
    .join("\n");
  const goals = (mod.objectives || [])
    .map((o) => `          <div class="objective"><span class="objective__icon">✔</span><span>${esc(o)}</span></div>`)
    .join("\n");

  return `${head("Módulo " + mod.n + " · " + mod.t + " · " + course.title, mod.desc || mod.t, prefix)}
<body data-root="../../../">

${siteHeader(prefix)}

<main class="main-content">
  <section class="page-hero">
    <div class="container">
      <nav class="breadcrumb" aria-label="Miga de pan">
        <span class="breadcrumb__item"><a href="${prefix}index.html">Inicio</a></span>
        <span class="breadcrumb__separator" aria-hidden="true">/</span>
        <span class="breadcrumb__item"><a href="${prefix}cursos/index.html">Cursos</a></span>
        <span class="breadcrumb__separator" aria-hidden="true">/</span>
        <span class="breadcrumb__item"><a href="../index.html">${esc(course.title)}</a></span>
        <span class="breadcrumb__separator" aria-hidden="true">/</span>
        <span class="breadcrumb__item" aria-current="page">Módulo ${mod.n}</span>
      </nav>
      <p class="page-hero__eyebrow">${lvl.emoji} ${lvl.label}</p>
      <h1 class="page-hero__title">Módulo ${mod.n} · ${esc(mod.t)}</h1>
      <p class="page-hero__subtitle">${esc(mod.subtitle || mod.desc || "")}</p>
      <div class="page-hero__meta">
        <span><i class="fa-solid fa-book-open" aria-hidden="true"></i> ${mod.lessons.length} lecciones</span>
        <span><i class="fa-solid fa-clock" aria-hidden="true"></i> ≈ ${totalMin} min</span>
        <span><i class="fa-solid fa-signal" aria-hidden="true"></i> Nivel ${lvl.label.toLowerCase()}</span>
      </div>
    </div>
  </section>
  <div class="container">
    <section class="lesson-content">
      <section>
        <h2>Objetivos del módulo</h2>
        <div class="objectives">
${goals}
        </div>
      </section>
    </section>

    <section class="lesson-grid-section">
      <div class="section-head">
        <h2>Lecciones del módulo</h2>
        <p>${mod.lessons.length} lecciones · ~${totalMin} min · ${esc(mod.caption || mod.t)}.</p>
      </div>
      <div class="grid-2">
${cards}
      </div>
    </section>

    <nav class="lesson-prevnext" aria-label="Navegación entre módulos">
      ${mod.prev || `<a class="lesson-prevnext__link" href="../index.html"><span class="label">← Curso</span><span class="title">${esc(course.title)}</span></a>`}
      ${mod.next || `<a class="lesson-prevnext__link lesson-prevnext__link--next" href="../index.html"><span class="label">Curso completo →</span><span class="title">${esc(course.title)}</span></a>`}
    </nav>
  </div>
</main>

${siteFooter(prefix, course)}
${scripts(prefix)}`;
}

/* ============================================ prev/next entre módulos */
function buildPrevNext(course, mod) {
  const mods = course.modules;
  const idx = mods.findIndex((m) => m.id === mod.id);
  const prevM = mods[idx - 1];
  const nextM = mods[idx + 1];
  mod.prev = prevM
    ? `<a class="lesson-prevnext__link" href="../${prevM.id}/index.html"><span class="label">← Anterior</span><span class="title">Módulo ${prevM.n} · ${esc(prevM.t)}</span></a>`
    : `<a class="lesson-prevnext__link" href="../index.html"><span class="label">← Curso</span><span class="title">${esc(course.title)}</span></a>`;
  mod.next = nextM
    ? `<a class="lesson-prevnext__link lesson-prevnext__link--next" href="../${nextM.id}/index.html"><span class="label">Siguiente módulo →</span><span class="title">Módulo ${nextM.n} · ${esc(nextM.t)}</span></a>`
    : `<a class="lesson-prevnext__link lesson-prevnext__link--next" href="../index.html"><span class="label">Curso completo →</span><span class="title">${esc(course.title)}</span></a>`;
}

/* ============================================== actualizar data.js */
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
  return JSON.stringify(String(value ?? ""));
}

export function updateDataJs(courses) {
  if (!existsSync(DATA_FILE)) {
    console.warn("[data] no encuentro data.js");
    return 0;
  }
  let out = readFileSync(DATA_FILE, "utf8");
  let n = 0;
  for (const c of courses) {
    // construir modules en el formato de data.js (from curriculum, con path)
    const modules = (c.modules || []).map((m) => ({
      id: m.id,
      title: `Módulo ${m.n} · ${m.t}`,
      path: `cursos/${c.slug}/${m.id}/index.html`,
      lessons: (m.lessons || []).map((l) => ({
        id: l.id,
        title: l.title,
        path: `cursos/${c.slug}/${m.id}/${l.id}.html`,
        duration: l.duration || "10 min",
        level: l.level || m.level || c.level || "intermedio",
        tags: l.tags || [],
      })),
    }));
    const lessons = modules.reduce((a, m) => a + m.lessons.length, 0);

    const idIdx = out.indexOf(`id: "${c.slug}"`);
    if (idIdx === -1) {
      console.warn(`[data] id "${c.slug}" no existe en data.js`);
      continue;
    }
    const nextId = out.indexOf('\n    id: "', idIdx + 6);
    const block = nextId === -1 ? out.slice(idIdx) : out.slice(idIdx, nextId);

    // reemplazar módulos
    const modArrow = block.indexOf("modules:");
    if (modArrow === -1) {
      console.warn(`[data] "${c.slug}" sin modules:`);
      continue;
    }
    const absArrow = idIdx + modArrow;
    const startBracket = block.indexOf("[", modArrow);
    let depth = 0;
    let end = startBracket;
    for (let i = startBracket; i < block.length; i++) {
      if (block[i] === "[") depth++;
      else if (block[i] === "]") {
        depth--;
        if (depth === 0) {
          end = i + 1;
          break;
        }
      }
    }
    const oldLen = end - modArrow;
    const modulesJs = jsify(modules, 1).replace(/^(\s*)/gm, "    ");
    out = out.slice(0, absArrow) + "modules: " + modulesJs + out.slice(absArrow + oldLen);

    // reemplazar lessons: N
    const lessonsRe = out.slice(idIdx).match(/lessons:\s*\d+/);
    if (lessonsRe) {
      const abs = idIdx + lessonsRe.index;
      out = out.slice(0, abs) + `lessons: ${lessons}` + out.slice(abs + lessonsRe[0].length);
    }
    writeFileSync(DATA_FILE, out, "utf8");
    console.log(`[data] ${c.slug}: ${modules.length} módulos / ${lessons} lecciones`);
    n++;
  }
  return n;
}

/* ================================================ landing de curso */
function courseMeta(slug) {
  if (!existsSync(DATA_FILE)) return null;
  const out = readFileSync(DATA_FILE, "utf8");
  const i = out.indexOf('\n    id: "' + slug + '"');
  if (i === -1) return null;
  const next = out.indexOf('\n  {\n    id: "', i + 6);
  const block = next === -1 ? out.slice(i) : out.slice(i, next);
  const g = (key) => {
    const re = new RegExp(key + ':\\s*("(?:[^"\\\\]|\\\\.)*"|\\[[\\s\\S]*?\\])');
    const m = re.exec(block);
    if (!m) return null;
    const v = m[1];
    if (v[0] === "[") return [...v.matchAll(/"((?:[^"\\\\]|\\\\.)*)"/g)].map((x) => x[1]);
    return JSON.parse(v);
  };
  return {
    title: g("title"),
    level: g("level"),
    category: g("category"),
    techs: g("techs") || [],
    duration: g("duration"),
    icon: g("icon"),
    description: g("description"),
    objectives: g("objectives") || [],
    requirements: g("requirements") || [],
    tags: g("tags") || [],
  };
}

function modIcon(n) {
  const icons = [
    "fa-sitemap", "fa-database", "fa-code", "fa-shield-halved",
    "fa-plug", "fa-server", "fa-cubes", "fa-rocket",
    "fa-network-wired", "fa-terminal", "fa-layer-group", "fa-gears",
  ];
  return icons[(Math.max(1, Number(n) || 1) - 1) % icons.length];
}

function moduleCardsHtml(course) {
  const mods = course.modules || [];
  return mods
    .map((m) => {
      const totalMin = (m.lessons || []).reduce((a, l) => a + (parseInt(l.duration, 10) || 0), 0);
      const lis = (m.lessons || [])
        .map((l) => `<li><a href="${m.id}/${l.id}.html">${esc(l.title)}</a></li>`)
        .join("\n");
      return `          <article class="card card--module">
            <div class="card__top card__top--with-icon">
              <span class="card__icon"><i class="fa-solid ${modIcon(m.n)}" aria-hidden="true"></i></span>
              <div class="card__head">
                <h3 class="card__title">Módulo ${m.n} · ${esc(m.t)}</h3>
                <div class="card__meta">
                  <span>${(m.lessons || []).length} lecciones</span><span>≈ ${totalMin} min</span>
                </div>
              </div>
            </div>
            <p class="card__text">${esc(m.desc || m.caption || "")}</p>
            <ol class="module-lessons">
${lis}
            </ol>
            <div class="card__actions">
              <a class="btn btn--primary btn--sm" href="${m.id}/index.html">Empezar módulo <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </article>`;
    })
    .join("\n\n");
}

function courseVisual(meta, nMods, nLess) {
  const techs = Array.isArray(meta.techs) && meta.techs.length ? meta.techs : ["Backend"];
  const tech = techs[0] || "Backend";
  const endpoint = String(tech).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "api";
  const lines = [
    `<span class="t-c"># ${esc(meta.title || "Curso de Backend")}</span>`,
    `<span class="t-p">$</span> <span class="t-w">npm run dev</span>`,
    ``,
    `  <span class="t-g">✓</span> <span class="t-w">Servidor listo en <span class="t-g">:3000</span></span>`,
    `  <span class="t-g">✓</span> <span class="t-w">${nMods} módulos · ${nLess} lecciones</span>`,
    ``,
    `<span class="t-b">GET</span>  <span class="t-w">/api/${endpoint}</span>      <span class="t-g">200 OK</span>`,
    `<span class="t-b">POST</span> <span class="t-w">/api/${endpoint}</span>  <span class="t-g">201 Created</span>`,
  ].join("\n");
  return `          <div class="course-visual" aria-hidden="true">
            <div class="terminal-card">
              <div class="terminal-card__bar">
                <span></span><span></span><span></span>
                <small>backend-academy · README</small>
              </div>
              <pre class="terminal-card__body">${lines}</pre>
              <div class="terminal-card__glow"></div>
            </div>
            <div class="floating-chip floating-chip--top"><i class="fa-solid fa-code" aria-hidden="true"></i> ${esc(tech)}</div>
            <div class="floating-chip floating-chip--bottom"><i class="fa-solid fa-rocket" aria-hidden="true"></i> 100% gratis</div>
          </div>`;
}

function footerModulesHtml(course) {
  return (course.modules || [])
    .map((m) => `          <li><span>Módulo ${m.n} · ${esc(m.t)}</span></li>`)
    .join("\n");
}

function courseLanding(course) {
  const prefix = "../../";
  const slug = course.slug;
  const meta = courseMeta(slug) || {};
  const lvl = LEVELS[meta.level] || LEVELS.intermedio;
  const mods = course.modules || [];
  const totalLessons = mods.reduce((a, m) => a + (m.lessons || []).length, 0);
  const moduleCards = moduleCardsHtml(course);
  const footMods = footerModulesHtml(course);
  const objectives = (meta.objectives || [])
    .map((o) => `            <div class="objective"><span class="objective__icon">✔</span><span>${esc(o)}</span></div>`)
    .join("\n");
  const reqs = (meta.requirements || []).map((r) => `<li>${esc(r)}</li>`).join("\n");
  const techs = (meta.techs || []).map((t) => `<span class="tag tag--tech">${esc(t)}</span>`).join("\n");

  return `<!DOCTYPE html>
<html lang="es" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(meta.title || course.title)} · Backend Academy</title>
<meta name="description" content="${esc(meta.description || course.title)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link rel="stylesheet" href="${prefix}assets/css/reset.css">
<link rel="stylesheet" href="${prefix}assets/css/variables.css">
<link rel="stylesheet" href="${prefix}assets/css/global.css">
<link rel="stylesheet" href="${prefix}assets/css/layout.css">
<link rel="stylesheet" href="${prefix}assets/css/header.css">
<link rel="stylesheet" href="${prefix}assets/css/sidebar.css">
<link rel="stylesheet" href="${prefix}assets/css/footer.css">
<link rel="stylesheet" href="${prefix}assets/css/cards.css">
<link rel="stylesheet" href="${prefix}assets/css/lesson.css">
<link rel="stylesheet" href="${prefix}assets/css/code.css">
<link rel="stylesheet" href="${prefix}assets/css/forms.css">
<link rel="stylesheet" href="${prefix}assets/css/roadmap.css">
<link rel="stylesheet" href="${prefix}assets/css/dashboard.css">
<link rel="stylesheet" href="${prefix}assets/css/components.css">
<link rel="stylesheet" href="${prefix}assets/css/toc.css">
<link rel="stylesheet" href="${prefix}assets/css/course.css">
<link rel="stylesheet" href="${prefix}assets/css/responsive.css">
</head>
<body data-root=".">

<header class="site-header" data-header>
  <div class="container site-header__inner">
    <a class="brand" href="${prefix}index.html">
      <span class="brand__logo">⚙️</span>
      <span>Backend Academy<small>Cursos</small></span>
    </a>
    <nav class="nav-main" aria-label="Navegación principal">
      <a href="${prefix}index.html">Inicio</a>
      <a href="${prefix}secciones/roadmap/index.html">Roadmap</a>
      <a href="${prefix}secciones/aprender/index.html">Aprender</a>
      <a href="${prefix}secciones/practica/index.html">Práctica</a>
      <a href="${prefix}secciones/proyectos/index.html">Proyectos</a>
      <a href="${prefix}secciones/recursos/index.html">Recursos</a>
      <a href="${prefix}secciones/buscador/index.html" class="nav-icon" aria-label="Buscar"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></a>
    </nav>
    <div class="header-actions">
      <button class="btn btn--icon btn--ghost theme-toggle" type="button" aria-label="Cambiar a tema oscuro">
        <i data-mode="light" class="fa-solid fa-moon" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</header>

<aside data-sidebar></aside>

<main data-content>
  <section class="page-hero page-hero--course">
    <div class="container">
      <nav class="breadcrumb" aria-label="Miga de pan">
        <span class="breadcrumb__item"><a href="${prefix}index.html">Inicio</a></span>
        <span class="breadcrumb__separator" aria-hidden="true">›</span>
        <span class="breadcrumb__item"><a href="${prefix}secciones/aprender/index.html">Aprender</a></span>
        <span class="breadcrumb__separator" aria-hidden="true">›</span>
        <span class="breadcrumb__item" aria-current="page">${esc(meta.title || course.title)}</span>
      </nav>
      <div class="page-hero__inner">
        <div class="page-hero__content">
          <p class="page-hero__eyebrow">${lvl.emoji} ${lvl.label}</p>
          <h1 class="page-hero__title">${meta.icon ? meta.icon + " " : ""}${esc(meta.title || course.title)}</h1>
          <p class="page-hero__subtitle">${esc(meta.description || "")}</p>
          <div class="page-hero__meta">
            <span><i class="fa-solid fa-clock" aria-hidden="true"></i> ${esc(meta.duration || "")}</span>
            <span><i class="fa-solid fa-book-open" aria-hidden="true"></i> ${mods.length} módulos · ${totalLessons} lecciones</span>
            <span><i class="fa-solid fa-tag" aria-hidden="true"></i> ${esc((meta.techs || []).join(" · "))}</span>
          </div>
          <div class="page-hero__actions">
            <a class="btn btn--primary btn--lg" href="#modulos"><i class="fa-solid fa-flag-checkered" aria-hidden="true"></i> Empezar curso</a>
            <a class="btn btn--ghost btn--lg" href="${prefix}secciones/aprender/index.html"><i class="fa-solid fa-layer-group" aria-hidden="true"></i> Todos los cursos</a>
          </div>
        </div>
        ${courseVisual(meta, mods.length, totalLessons)}
      </div>
    </div>
  </section>

  <div class="container">
    <article class="course" data-course-id="${slug}">

      <section class="lesson-content">
        <section>
          <h2>¿Qué vas a aprender?</h2>
          <p>${esc(meta.description || "")}</p>
          <div class="info-grid">
            <div class="info-item"><span class="info-item__label">Nivel</span><span class="info-item__value">${lvl.emoji} ${lvl.label}</span></div>
            <div class="info-item"><span class="info-item__label">Duración</span><span class="info-item__value">${esc(meta.duration || "")}</span></div>
            <div class="info-item"><span class="info-item__label">Módulos</span><span class="info-item__value">${mods.length}</span></div>
            <div class="info-item"><span class="info-item__label">Lecciones</span><span class="info-item__value">${totalLessons}</span></div>
          </div>
        </section>

        <section>
          <h2>Objetivos de aprendizaje</h2>
          <div class="objectives">
${objectives}
          </div>
        </section>

        <section>
          <h2>Requisitos previos</h2>
          <ul>
${reqs}
            <li><strong>Constancia:</strong> practica cada lección antes de avanzar.</li>
          </ul>
        </section>

        <section>
          <h2>Tecnologías y herramientas</h2>
          <div class="row">
${techs}
          </div>
        </section>
      </section>

      <hr class="divider">

      <section id="modulos">
        <h2 class="section-title">Módulos del curso</h2>
        <p class="section-subtitle">${mods.length} módulos con ${totalLessons} lecciones en total.</p>

        <div class="section-grid">
${moduleCards}
        </div>
      </section>

    </article>
  </div>
</main>

<footer class="site-footer" data-footer>
  <div class="container">
    <div class="site-footer__top">
      <div class="site-footer__desc">
        <p><strong>Backend Academy</strong></p>
        <p>Plataforma gratuita para aprender desarrollo Backend desde cero: conceptos, protocolos, arquitectura y práctica con ejemplos reales.</p>
      </div>
      <nav aria-label="Secciones">
        <h4>Explora</h4>
        <ul>
          <li><a href="${prefix}index.html">Inicio</a></li>
          <li><a href="${prefix}secciones/roadmap/index.html">Roadmap de aprendizaje</a></li>
          <li><a href="${prefix}secciones/aprender/index.html">Aprender</a></li>
          <li><a href="${prefix}secciones/practica/index.html">Práctica</a></li>
        </ul>
      </nav>
      <nav aria-label="Recursos">
        <h4>Recursos</h4>
        <ul>
          <li><a href="${prefix}secciones/recursos/index.html">Recursos</a></li>
          <li><a href="${prefix}glosario/index.html">Glosario</a></li>
          <li><a href="${prefix}cheatsheets/index.html">Cheatsheets</a></li>
          <li><a href="${prefix}secciones/buscador/index.html">Buscar</a></li>
        </ul>
      </nav>
      <nav aria-label="Curso">
        <h4>Curso actual</h4>
        <ul>
${footMods}
        </ul>
      </nav>
    </div>
    <div class="site-footer__bottom">
      <span>© 2026 Backend Academy. Contenido liberado para aprender y compartir.</span>
      <div class="site-footer__links">
        <a href="${prefix}acerca/index.html">Acerca de</a>
        <a href="${prefix}favoritos/index.html">Favoritos</a>
        <a href="${prefix}historial/index.html">Historial</a>
      </div>
    </div>
  </div>
</footer>

<script src="${prefix}assets/js/helpers.js"></script>
<script src="${prefix}assets/js/storage.js"></script>
<script src="${prefix}assets/js/theme.js"></script>
<script src="${prefix}assets/js/data.js"></script>
<script src="${prefix}assets/js/progress.js"></script>
<script src="${prefix}assets/js/navigation.js"></script>
<script src="${prefix}assets/js/sidebar.js"></script>
<script src="${prefix}assets/js/toc.js"></script>
<script src="${prefix}assets/js/code.js"></script>
<script src="${prefix}assets/js/main.js"></script>
</body>
</html>`;
}

/* ============================================================== main */
const argv = process.argv.slice(2);
const curFile =
  (argv.find((a) => a.startsWith("--curriculum=")) || "--curriculum=_curriculum.json").split("=")[1];
const force = argv.includes("--force");
const dry = argv.includes("--dry");
const updateData = argv.includes("--update-data");
const landings = argv.includes("--landing");

const { COURSES = [] } = await import(pathToFileURL(join(__dirname, "_herramientas", curFile)).href);
if (!COURSES.length) {
  console.error("El curriculum no exporta COURSES");
  process.exit(1);
}

let lessonsWritten = 0;
let indexesWritten = 0;
let skipped = 0;
for (const course of COURSES) {
  for (const mod of course.modules) {
    buildPrevNext(course, mod);
    const modDir = join(__dirname, "cursos", course.slug, mod.id);
    if (!dry) mkdirSync(modDir, { recursive: true });
    const idxFile = join(modDir, "index.html");
    if (!dry) writeFileSync(idxFile, moduleIndex(course, mod), "utf8");
    indexesWritten++;

    for (const lesson of mod.lessons) {
      if (!lesson.body) {
        skipped++;
        continue;
      }
      const lFile = join(modDir, lesson.id + ".html");
      if (existsSync(lFile) && !force) {
        skipped++;
        continue;
      }
      if (!dry) writeFileSync(lFile, lessonPage(course, mod, lesson), "utf8");
      lessonsWritten++;
    }
  }
  const total = course.modules.reduce((a, m) => a + m.lessons.length, 0);
  console.log(`[${dry ? "DRY" : "OK "}] ${course.slug}: ${course.modules.length} módulos, ${total} lecciones totales`);

  if (landings) {
    const courseDir = join(__dirname, "cursos", course.slug);
    if (!dry) mkdirSync(courseDir, { recursive: true });
    const landingFile = join(courseDir, "index.html");
    if (!dry) writeFileSync(landingFile, courseLanding(course), "utf8");
    console.log(`[${dry ? "DRY" : "OK "}] ${course.slug}/index.html (landing) regenerado`);
  }
}
console.log(`\n[generación] ${indexesWritten} índices · ${lessonsWritten} lecciones escritas · ${skipped} sin cambios`);

if (updateData && !dry) updateDataJs(COURSES);
if (dry && updateData) console.log("(--update-data omitido en modo dry)");
