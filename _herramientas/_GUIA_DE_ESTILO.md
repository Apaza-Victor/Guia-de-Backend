# Guía de Estilo — Curso "Programación para Backend"

> Estándar ABSOLUTO que debe cumplir **cualquier página HTML** de este curso.
> Si una página no cumple estos puntos, se considera **incorrecta** y debe regenerarse.
> La plataforma usa rutas `../../../` desde profundidad de lección (3 niveles) y `../../` desde el índice del curso (2 niveles).

## 1. Estructura base de una LECCIÓN

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Título} · Programación para Backend · Backend Academy</title>
  <meta name="description" content="{Descripción de 1 línea, sin acentos problemáticos en el texto visible}">
  <meta name="generator" content="Backend Academy - generador de cursos">
  <meta name="color-scheme" content="light dark">
  <!-- Google Fonts (Inter + JetBrains Mono) y Font Awesome 6.5.2 -->
  ...CSS (ver §3)...
</head>
<body class="app-shell">

  <header class="site-header">...  <!-- Navegación relativa, ver §7 --></header>

  <div class="lesson-layout lesson-layout--with-toc container">
    <aside class="sidebar" aria-label="Contenido del curso Programación para Backend">...</aside>
    <main class="lesson-main" id="main">
      <nav class="lesson-crumbs" aria-label="Ruta de navegación">...</nav>
      <article class="lesson-article" data-lesson-id="{id}">
        <header class="lesson-hero">
          <h1 class="lesson-title">{Título}</h1>
          <div class="lesson-meta">
            <span class="lesson-meta__item"><i class="fa-solid fa-clock" aria-hidden="true"></i> {duración}</span>
            <span class="lesson-meta__item"><i class="fa-solid fa-signal" aria-hidden="true"></i> {Nivel}</span>
            <span class="lesson-meta__item"><i class="fa-solid fa-code" aria-hidden="true"></i> PHP</span>
            <span class="lesson-meta__item"><i class="fa-solid fa-layer-group" aria-hidden="true"></i> {Módulo}</span>
            <label class="complete-toggle"><input type="checkbox"><span class="complete-toggle__box" aria-hidden="true">✓</span> Marcar como completada</label>
          </div>
        </header>

        <div class="lesson-content">
          ... 12 secciones (ver §4) con sus bloques ...
        </div>

        <nav class="lesson-nav-footer" aria-label="Contenido del módulo">
          <a class="lesson-nav-footer__link" href="{../../../cursos/programacion/modulo-XX}/index.html">
            <i class="fa-solid fa-bars" aria-hidden="true"></i> Contenido del módulo
          </a>
        </nav>

        <div class="lesson-prevnext"><a ...>Anterior</a><a class="lesson-prevnext__link--next" ...>Siguiente</a></div>

        <section class="related-block" aria-labelledby="rel-t">
          <h2 id="rel-t">También puede interesarte</h2>
          <div class="related-lessons">... 3-4 enlaces ...</div>
        </section>
      </article>
    </main>
    <aside class="toc-rail" data-toc aria-label="Contenido de la página">... 12 secciones ...</aside>
  </div>

  <footer class="site-footer">...</footer>

  <script src="{../../../assets/js/data.js}"></script>
  <script src="{../../../assets/js/storage.js}"></script>
  <script src="{../../../assets/js/theme.js}"></script>
  <script src="{../../../assets/js/navigation.js}"></script>
  <script src="{../../../assets/js/progress.js}"></script>
  <script>/* AppTheme.init() y AppProgress.init() en DOMContentLoaded */</script>
</body>
</html>
```

## 2. Estructura base de un ÍNDICE DE MÓDULO (modulo-XX/index.html)

Misma base que la lección, con:
- `<div class="container">` (sin `.lesson-layout`).
- Breadcrumb: `Inicio / Cursos / Programación para Backend / {Módulo}`.
- `<header class="page-head">` con badges: `Módulo {N}`, `{n} lecciones`, `Principiante`, `PHP`.
- Sección **Objetivo de este módulo** (`<section aria-labelledby="objetivo-t">` + `<div class="objectives">`).
- Sección **Lecciones del módulo** (`<section aria-labelledby="lecciones-t">` + `<div class="section-grid">` con `<a class="card card--link card--lesson" href="{archivo}.html">`).
- Prev/Next entre módulos (`lesson-prevnext`, primero "Índice del curso" / último "Índice del curso").
- Footer + scripts igual que la lección.

## 3. Estructura base del ÍNDICE DEL CURSO (index.html)

- Profundidad 2 → prefijo `../../` para assets y enlaces internos; hacia los módulos: `modulo-XX/index.html`.
- Breadcrumb con `.current` "Programación para Backend" (sin enlace).
- `<header class="hero hero--home">`: nivel, tecnología, duración y nº de lecciones en badges; h1 "Programación para Backend"; `div.progress data-progress="programacion"`.
- **¿Qué vas a aprender?** (`section.text` + `objectives`) y **Requisitos** (`section.text` + `ul`).
- **Módulos del curso**: cards `card--module` con listado de lecciones (`ul.sidebar__mini-list`, enlaces `{modulo-XX}/{leccion}.html`) y botón `Ver módulo`.
- Prev/Next: "← Curso anterior → Fundamentos de Backend" y "Empezar → Módulo 1…".

## 4. Las 12 secciones obligatorias de cada lección

Orden fijo e IDs fijos (referencian el `data-toc`):

| # | id | Título |
|---|----|--------|
| 1 | `introduccion` | Introducción |
| 2 | `definicion` | Definición |
| 3 | `conceptos-clave` | Conceptos clave |
| 4 | `ejemplo-basico` | Ejemplo básico |
| 5 | `ejemplo-intermedio` | Ejemplo intermedio |
| 6 | `ejemplo-real` | Ejemplo real |
| 7 | `codigo` | Código completo |
| 8 | `explicacion` | Explicación |
| 9 | `errores-comunes` | Errores comunes |
| 10 | `buenas-practicas` | Buenas prácticas |
| 11 | `ejercicio` | Ejercicio |
| 12 | `resumen` | Resumen |

- Cada sección: `<section id="{id}" aria-labelledby="{id}-t"><h2 id="{id}-t">…</h2> …contenido… </section>`.
- El `<h2>` es **único contenedor** de la sección: prohíbido meter el contenido dentro del `<h2>`.
- La sección `resumen` usa esta marca interna exacta:
  ```html
  <div class="summary">
    <table class="summary__table">…</table>
  </div>
  ```
  sin `h2` duplicado dentro.

## 5. Componentes de contenido

- **Bloque de código**:
  ```html
  <div class="code-block" data-lang="php">
    <div class="code-block__header"><span class="code-block__lang">PHP</span><span class="code-block__caption">{archivo o descripción}</span></div>
    <div class="code-block__body"><pre data-lang="php"><code class="language-php">…escaped…</code></pre></div>
  </div>
  ```
  Caption con lenguaje `php|bash|sql|json|html|css|text|http`. El código **siempre** escapado (entidades HTML).
- **Aviso**: `<div class="notice notice--{info|success|warning|danger}"><i class="fa-solid fa-{icono} notice__icon" aria-hidden="true"></i><div><strong>{Título}.</strong> {Texto}</div></div>`
- **Lista de lección** (sección `resumen`): `<ul class="lesson-list">…</ul>`.
- **Enlaces externos**: `target="_blank" rel="noopener"` (evitar el atributo `rel="nofollow"` salvo casos justificados).
- Código **inline**: `<code class="inline">…</code>`.

## 6. Prefijos de ruta

- Lecciones y `modulo-XX/index.html` (profundidad 3): `../../../`
- `cursos/programacion/index.html` (profundidad 2): `../../`
- Dentro de un módulo, los enlaces a otras lecciones del **mismo** módulo usan el nombre corto: `{leccion}.html`.
- Nunca se usan rutas `/…` absolutas de servidor: la web se debe poder abrir desde un clic en el directorio (file://).

## 7. Navegación y breadcrumb

- Header (relativo, sin `/` inicial): Inicio → `{P}/index.html`, Roadmap → `{P}/roadmap/index.html`, Aprender → `{P}/aprender/index.html`, Práctica → `{P}/practica/index.html`, Proyectos → `{P}/cursos/proyectos/index.html`, Recursos → `{P}/recursos/index.html`, Buscar → `{P}/buscador/index.html`.
- Botón tema: `<button class="theme-toggle btn btn--icon" type="button" aria-label="Cambiar a modo oscuro">…`
- Breadcrumb de lección: `Inicio / Cursos / Programación para Backend / {módulo} / {lección}`. El enlace del módulo es `{P}/cursos/programacion/modulo-XX/index.html` y su texto visible es `módulo XX` (minúsculas).

## 8. Scripts finales (mismo orden, juntos antes de `</body>`)

```html
<script src="{P}/assets/js/data.js"></script>
<script src="{P}/assets/js/storage.js"></script>
<script src="{P}/assets/js/theme.js"></script>
<script src="{P}/assets/js/navigation.js"></script>
<script src="{P}/assets/js/progress.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  try { if (window.AppTheme) AppTheme.init(); } catch (err) {}
  try { if (window.AppProgress) AppProgress.init(); } catch (err) {}
});
</script>
```

## 9. Contenido textual

- Todo en **español**, español neutro con voseo **cero** fuera de los ejemplos de código donde el usuario habla informalmente.
- Lenguaje de ejemplos: **PHP 8** (tipos estrictos `declare(strict_types=1);` en los "Ejemplo real").
- Todo concepto usa estos bloques: **qué es / por qué importa / cómo se usa / cuándo (y cuándo no)**.
- Extensión estimada por lección: 250–400 líneas de HTML.
- **No** usar emojis salvo en mnemotécnicas muy específicas y nunca en código.
- UTF-8 obligatorio (los hindles se escriben con acentos reales y en UTF-8).

## 10. Registro en data.js (obligatorio)

- Estructura del curso registrado bajo el id `"programacion"` en `assets/js/data.js`:
  - `path: "cursos/programacion/index.html"`, `lessons: 31`.
  - Un objeto por módulo con `id: "modulo-0X"`, `title`, `path: "cursos/programacion/modulo-0X/index.html"` y array `lessons` exactamente alineado con los `.html` generados.
  - Cada lección: `{ id, title, path, duration: "N min", level, tags[] }`.
- `data.js` expone también `window.COURSES` y `window.APP_COURSES` como alias de `courses` (lo usan `sidebar.js`, `progress.js`, `search.js`).

## 11. Regla final

- Todas las rutas **deben existir** realmente en el repositorio.
- Ninguna página se considera terminada hasta pasar la validación de enlaces (todos los `href`/`src` locales resuelven).
- Si se regenera el curso, se regeneran **todas** las 38 páginas (31 lecciones + 6 índices de módulo + índice del curso) para que prev/next, sidebar y related quedén consistentes.