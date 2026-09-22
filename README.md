# 🚀 Guía de Backend

Una plataforma educativa **gratuita, en español y sin registro** para aprender desarrollo
**Backend desde cero hasta experiencia**: fundamentos, HTTP, bases de datos, APIs, arquitectura,
System Design y proyectos reales.

> **Sin herramientas, sin build, sin servidor.** Pura `HTML + CSS + JS vanilla`, lista para
> desplegar en GitHub Pages abriendo `index.html` directamente.

| | |
|---|---|
| **Cursos** | 30 |
| **Lecciones** | +780 páginas HTML generadas a mano |
| **Niveles** | 5 (Principiante → Experto) |
| **Duración aprox.** | ~12 meses siguiendo el roadmap |
| **Requisitos** | Solo un navegador |
| **Licencia** | Libre para aprender, modificar y compartir |

---

## 📚 Contenido

Cada curso está organizado en **módulos → lecciones**, todo interconectado y autocontenido:

- **Landing del curso** (`cursos/<slug>/index.html`) — objetivos, requisitos, duración, nivel y badges.
- **Índice de módulo** (`modulo-0X/index.html`) — listado de lecciones con nivel y etiquetas.
- **Lecciones** (`leccion-XX.html`) — con índice (TOC) lateral, barra de progreso, código resaltado
  con botón de copiado, retos con solución plegable, cheatsheets y navegación anterior/siguiente.
- **Secciones globales** — roadmap, buscador, dashboard de progreso, favoritos, historial y glosario.

```
/
├── index.html               → Página de inicio
├── 404.html                 → Página de error
├── assets/                  → CSS, JS e imágenes compartidos
├── cursos/                  → Los 30 cursos (cada uno con módulos y lecciones)
├── roadmap/   aprender/   práctica/   practica/   proyectos/   recursos/
├── README.md
└── _GUIA_DE_ESTILO.md
```

---

## ▶️ Cómo ejecutar

El sitio es 100% estático: no necesita compilación, npm ni servidor.

| Opción | Cómo |
|---|---|
| **A · GitHub Pages** | Sube el repositorio y activa Pages sobre la rama `main`, carpeta raíz. |
| **B · Local** | Doble clic en `index.html` (protocolo `file://`). |
| **C · Servidor simple** | `npx serve .` o `python -m http.server 8000`. |

El progreso, favoritos e historial se guardan en `localStorage` del navegador.

---

## ✨ Funcionalidades

- **Buscador global** con filtros por curso, módulo, nivel y tag; resalta coincidencias.
- **Roadmap** de 5 etapas con el orden óptimo de aprendizaje.
- **Dashboard de progreso**: lecciones completadas por curso, favoritos e historial.
- **Navegación de lección**: breadcrumb, TOC lateral, anterior/siguiente y bloque "Siguiente lección".
- **Código**: bloques con resaltado y botón copiar, cheatsheets y retos con solución plegable.
- **Tema claro/oscuro** persistido en el navegador.

---

## 🗂️ Estructura de un curso

```
cursos/<slug>/
├── index.html                 → Landing del curso (objetivo, requisitos, duración, niveles)
└── modulo-01/
    ├── index.html             → Índice del módulo con sus lecciones
    └── leccion-01.html        → Lección autocontenida
```

> Cada curso usa el patrón `slug` (minúsculas separadas por guiones), p. ej.
> `microservicios`, `system-design`, `sistemas-distribuidos`.

---

## ⚙️ Registrar un curso en la app

La app lee el catálogo desde `assets/js/data.js` (JS literal, no JSON). Los cursos con
`modules: []` aparecen en disco pero no en el sitio.

```bash
# Desde la raíz del repositorio:
node _registrar_cursos_en_data_js.mjs <slug>   # registrar un curso concreto
node _registrar_cursos_en_data_js.mjs --dry    # simular sin escribir
node _registrar_cursos_en_data_js.mjs          # registrar todos los pendientes
```

El script escanea `cursos/<slug>/modulo-0X/`, rellena el array `modules` real y actualiza
`lessons: N`, validando con `node --check` antes y después.

> `assets/js/data.js` debe mantenerse **UTF-8 sin BOM** y con acentos correctos. No lo edites
> con herramientas que rompan la codificación; usa el script anterior.

---

## 🎨 Guía de estilo

Para mantener las +780 páginas consistentes (misma estructura de lección, mismas clases,
mismo orden de scripts), sigue la guía en la raíz:

- **`_GUIA_DE_ESTILO.md`** — reglas de maquetación, codificación y estructura.

Reglas mínimas antes de tocar `assets/` o `cursos/`:

1. **UTF-8 sin BOM** en todos los `.html`, `.css`, `.js` y `.md`.
2. **Español correcto** con acentos reales (sin entidades numéricas salvo necesidad).
3. **Lecciones autocontenidas**: no dependas de globales excepto `assets/js/*`.
4. Orden fijo de scripts al final de cada página:

   ```html
   <script src="../../../assets/js/helpers.js"></script>
   <script src="../../../assets/js/storage.js"></script>
   <script src="../../../assets/js/theme.js"></script>
   <script src="../../../assets/js/data.js"></script>
   <script src="../../../assets/js/progress.js"></script>
   <script src="../../../assets/js/navigation.js"></script>
   <script src="../../../assets/js/sidebar.js"></script>
   <script src="../../../assets/js/toc.js"></script>
   <script src="../../../assets/js/code.js"></script>
   <script src="../../../assets/js/favorites.js"></script>
   <script src="../../../assets/js/history.js"></script>
   <script src="../../../assets/js/search.js"></script>
   <script src="../../../assets/js/main.js"></script>
   ```

5. `data-root` debe apuntar a la raíz del sitio desde cada página: `"../../../"`.

---

## 📈 Estado del proyecto

| Fase | Descripción | Estado |
|------|-------------|--------|
| A | Núcleo JS y estructura base | ✅ Completado |
| B | Secciones globales (inicio, 404, dashboard, favoritos, historial, buscar) | ✅ Completado |
| C | Landings de los 30 cursos | ✅ Completado |
| D | Áreas de práctica y cheatsheets | ✅ Completado |
| E | Lecciones de los 11 cursos pendientes | ✅ Completado |
| F | README + guía de estilo (este documento) | ✅ Completado |
| G | Validación final y plan de continuación | ✅ Completado |

---

## 🤝 Cómo contribuir

1. Crea/edita la carpeta `cursos/<slug>/` con su landing, módulos y lecciones.
2. Registra el curso con el script de la sección [Registrar un curso](#️-registrar-un-curso-en-la-app).
3. Valida:

   ```bash
   node --check assets/js/data.js   # sintaxis del registro
   node _validador.mjs              # integridad global (si existe)
   ```

Todo cambio que afecte a varias páginas (nuevo script, estructura, renombrado de carpetas)
debe documentarse en `_GUIA_DE_ESTILO.md` **antes** de aplicarse.

---

## 📄 Licencia

Contenido educativo propio, creado para aprendizaje y portafolio. Puedes usarlo, modificarlo
y compartirlo libremente conservando la atribución.

---

*Generado como parte del proyecto **"Guía de Backend"** (GitHub Pages).*
