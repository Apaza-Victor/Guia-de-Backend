# Especificación canónica · Crear `_curriculum_<slug>.mjs`

Objetivo: cada curso que no tenga 7 módulos debe expandirse a exactamente **7 módulos** con un total de **~30–40 lecciones**. Las lecciones/módulos YA EXISTENTES se reutilizan tal cual (sus archivos HTML no se regeneran); solo se agregan módulos nuevos y lecciones nuevas.

## Reglas invariables

1. **Exportar** `export const COURSES = [...]`. Un solo objeto por archivo.
2. Cada módulo usa exactamente estas claves:
```js
{
  id: "modulo-01",   // OBLIGATORIO: conservar el id EXISTENTE. Para módulos nuevos: modulo-04, modulo-05… (por posición, solo en orden ascendente)
  n: 1,              // número de módulo (1..7)
  t: "Título corto sin prefijo",  // p.ej. "Introducción al Backend" (sin "Módulo 1 ·")
  level: "basico",   // coherencia con el curso
  caption: "Frase corta para la cabecera del índice (1 línea).",
  desc: "Descripción de 1-2 frases para el <meta name=description> y tarjetas.",
  subtitle: "Subtítulo atractivo para el hero del índice.",
  objectives: ["Objetivo 1", "Objetivo 2", "Objetivo 3", "Objetivo 4"],
  lessons: [ ... ]
}
```
3. Cada lección usa exactamente estas claves:
```js
{
  id: "slug-unico-minúsculas-con-guiones",   // conservar id existente si aplica
  title: "Título legible",
  duration: "10 min",
  level: "basico",
  category: "etiqueta corta",
  cardText: "Una frase para la tarjeta del índice del módulo.",
  desc: "Una frase para el <meta name=description> de la lección.",
  // body SOLO si es lección NUEVA (véase sección "body"). Las existentes NO llevan body.
}
```
4. **Lecciones existentes**: las que ya están en `_inventario_expansion.json` bajo ese curso/módulo. Se listan con sus `id`, `title`, `duration` EXACTOS del inventario (respeta esos strings), sin `body`. Añade `cardText`/`desc`/`category`/`level` coherentes con el título (inventa contenido de apoyo afín al tema), pero NUNCA cambies id/title/duration ya registrados.
5. **Módulos existentes**: conserva `id` y `t` (saca el título del inventario: la cadena "Módulo N · Título" → `t = "Título"`). El orden/índice `n` del módulo en el array DEBE ser el mismo que en el inventario (modulo-01 → n:1, …). Añade objectives/caption/desc/subtitle (los redactas tú).
6. **Lecciones nuevas**: llevan `body` (esquema detallado abajo). Inventa `id` como slug único en español minúsculas con guiones, sin acentos ni símbolos. `level`, `duration` (8–16 min), `category`, `cardText`, `desc`.
7. **Módulos nuevos**: continúan la progresión temática lógica del curso tras los módulos existentes. Títulos cortos y claros.
8. **Total por curso**: exactamente 7 módulos, ~30–40 lecciones. Si el curso ya tiene >40 lecciones (p.ej. fundamentos-backend: 55), NO agregues más; basta con llegar a 7 módulos redistribuyendo solo el NOMBRE/título y manteniendo cada lección en su módulo existente, y añadiendo 1-2 módulos nuevos (m4+… ) con ~4-5 lecciones cada uno.
9. Timbre de voz y formato idénticos a `_curriculum_python.mjs`. Contenido en español de España/neutral, orientado a BACKEND, con ejemplos reales y de calidad.
10. NO ejecutes el generador (`_generador_paginas.mjs`) ni toques `data.js`. Solo escribes el archivo `_curriculum_<slug>.mjs`.
11. Cada lección con `body` debe tener la clave `exampleFile` (slug) y `desc` repetida al final del body.

## Esquema del `body` para lección nueva

Campos opcionales a incluir en este orden (puedes dejar alguno de los arrays con 2-3 ítems, pero incluye TODAS las claves):

```js
body: {
  intro: [ "2 párrafos de entrada que conecten con el tema y su aplicación real en backend." ],
  def: {
    par: "Definición técnica de 1-2 frases.",
    porQue: "Por qué importa en un backend real.",
    cuando: "Cuándo usarlo / cuándo no.",
  },
  concepts: [ "Lista de 4-5 conceptos clave en frases cortas." ],
  basic: {
    p: "Frase introductoria del ejemplo básico.",
    code: [ "línea1", "línea2", ... ],   // código real ejecutable; strings escapadas
    out: "Salida esperada",
    lang: "python" /* o js, sql, bash, php, etc. */,
  },
  intermediate: {
    p: "Frase de contexto del ejemplo intermedio.",
    caption: "Subtítulo del bloque de código.",
    code: [ ... ],
  },
  real: {
    p: "Contexto de un escenario real de backend.",
    ul: [ "3 balas de buenas prácticas" ],
    code: [ ... ],
    nota: "Aclaración adicional opcional.",
  },
  expl: [ "4-5 frases de explicación profunda de lo anterior." ],
  errors: [ "3 errores típicos y cómo evitarlos." ],
  tips: [ "3-4 consejos prácticos." ],
  exercise: [ "3 ejercicios cortos y concretos." ],
  summary: [ "3 frases de resumen (1 por idea clave)." ],
  lang: "python",
  exampleFile: "slug-del-archivo",
  desc: "Misma descripción de la lección.",
}
```

## Verificación obligatoria (al terminar cada archivo)

```bash
node --check _curriculum_<slug>.mjs
node -e "import('./_curriculum_<slug>.mjs').then(m=>{const c=m.COURSES[0];console.log(c.slug, c.modules.length, c.modules.reduce((a,mo)=>a+mo.lessons.length,0))})"
```
Debe imprimir `slug 7 total`. Si da error, corrige antes de reportar.

No modifiques ningún otro archivo del repo.