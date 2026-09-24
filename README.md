<div align="center">

# ⚙️ Guía de Backend

### La escuela gratuita del Backend en español

Plataforma educativa **gratuita, en español y sin registro** para aprender desarrollo
backend desde cero hasta experiencia: fundamentos, HTTP, bases de datos, APIs, arquitectura,
System Design y proyectos reales.

<code>Sin herramientas. Sin build. Sin servidor. Pura HTML + CSS + JS vanilla.</code>

<br>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)](https://github.com/Apaza-Victor/Guia-de-Backend)
[![Sin registro](https://img.shields.io/badge/sin%20registro-6A4C93?style=flat-square)](https://github.com/Apaza-Victor/Guia-de-Backend)
[![En español](https://img.shields.io/badge/en%20español-EA4335?style=flat-square)](https://github.com/Apaza-Victor/Guia-de-Backend)

<br>

</div>

## 🌐 Acceso rápido · Web desplegada

<div align="center">

# [**apaza-victor.github.io/Guia-de-Backend**](https://apaza-victor.github.io/Guia-de-Backend/)

*Haz clic para abrir la plataforma en GitHub Pages.*

</div>

<div align="center">

| | |
|---|---|
| **📚 Cursos** | 30 |
| **📄 Lecciones** | +780 páginas HTML generadas a mano |
| **📈 Niveles** | 5 (Principiante → Experto) |
| **⏱️ Duración aprox.** | ~12 meses siguiendo el roadmap |
| **🌍 Requisitos** | Solo un navegador |
| **📜 Licencia** | Libre para aprender, modificar y compartir |

</div>

---

## 📑 Tabla de contenidos

- [📚 Contenido](#-contenido)
- [▶️ Cómo ejecutar](#️-cómo-ejecutar)
- [✨ Funcionalidades](#-funcionalidades)
- [🗂️ Estructura de un curso](#️-estructura-de-un-curso)
- [⚙️ Registrar un curso en la app](#️-registrar-un-curso-en-la-app)
- [🎨 Guía de estilo](#-guía-de-estilo)
- [📈 Estado del proyecto](#-estado-del-proyecto)
- [🤝 Cómo contribuir](#-cómo-contribuir)
- [📄 Licencia](#-licencia)

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
├── secciones/               → Páginas globales (roadmap, aprender, práctica, proyectos,
│                              recursos, glosario, cheatsheets, buscador, favoritos, historial)
├── _herramientas/           → Scripts de generación/validación y documentación de soporte
├── README.md
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
node _herramientas/_registrar_cursos_en_data_js.mjs <slug>   # registrar un curso concreto
node _herramientas/_registrar_cursos_en_data_js.mjs --dry    # simular sin escribir
node _herramientas/_registrar_cursos_en_data_js.mjs          # registrar todos los pendientes
```

El script escanea `cursos/<slug>/modulo-0X/`, rellena el array `modules` real y actualiza
`lessons: N`, validando con `node --check` antes y después.

> `assets/js/data.js` debe mantenerse **UTF-8 sin BOM** y con acentos correctos. No lo edites
> con herramientas que rompan la codificación; usa el script anterior.

---

## 🎨 Guía de estilo

Para mantener las +780 páginas consistentes (misma estructura de lección, mismas clases,
mismo orden de scripts), sigue la guía en la raíz:

- **`_herramientas/_GUIA_DE_ESTILO.md`** — reglas de maquetación, codificación y estructura.

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
   node --check assets/js/data.js                # sintaxis del registro
   node _herramientas/_validador_enlaces.mjs     # integridad global de enlaces
   ```

Todo cambio que afecte a varias páginas (nuevo script, estructura, renombrado de carpetas)
debe documentarse en `_herramientas/_GUIA_DE_ESTILO.md` **antes** de aplicarse.

---

## 📄 Licencia

Contenido educativo propio, creado para aprendizaje y portafolio. Puedes usarlo, modificarlo
y compartirlo libremente conservando la atribución.

---

<div align="center">

*Generado como parte del proyecto **"Guía de Backend"** (GitHub Pages).*

[**🌐 Ver plataforma en vivo**](https://apaza-victor.github.io/Guia-de-Backend/)

</div>