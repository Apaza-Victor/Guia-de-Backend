# PLAN DE CONTINUACION - Backend Academy (Guia de Backend)

> Documento maestro de traspaso. Contiene: (1) el requerimiento completo,
> (2) el prompt maestro de trabajo, (3) el checklist de TODO lo que falta
> hacer en orden. Cualquier agente puede retomar el proyecto leyendo SOLO este archivo.

---

## 1) LO QUE SE PIDIO (REQUISITOS COMPLETOS)

### 1.1 Proposito
Plataforma educativa ESTATICA gratuita en ESPANOL para aprender Backend de cero a
experto (todos los niveles). Nombre de marca: "Backend Academy" (titulo dentro de
la web: "Guia de Backend" / "Backend Academy"). Se despliega en GITHUB PAGES
(solo archivos planos: HTML + CSS + JS vanilla ES6, rutas relativas, sin backend).

### 1.2 Stack y reglas duras
- HTML5 semantico + CSS3 modulares + JS ES6 vanilla. Se autoriza Bootstrap si
  acelera, pero el proyecto ya usa CSS/JS propios modulares y coherencia total.
- Fuentes: Font Awesome 6 (CDN) + Google Fonts (Inter + JetBrains Mono).
- Idioma 100% espanol (contenido REAL, sin lorem ipsum, sin paginas vacias).
- Responsive 320px->4K, mobile-first, dark mode (dato-theme light/dark/auto).
- SEO: <title> unico, <meta description> unica, lang="es", OpenGraph basico.
- Rutas RELATIVAS SIEMPRE (sin "/" inicial) - GitHub Pages.
- Profundidad: raiz=assets/; seccion=../assets/; curso (cursos/<slug>/)=../../assets/;
  leccion (cursos/<slug>/modulo-0X/)=../../../assets/.
- Convencion HTML (ver referencia): <body data-tree="N" data-root="...">,
  <header data-header>, <aside data-sidebar>, <main data-content>,
  breadcrumb, sidebar con TOC/menu, prev/next data-prev/data-next, scripts al final
  en orden: helpers, storage, theme, data, progress, navigation, sidebar, toc, code,
  favorites, history, search, main. CSS en <head> en el mismo orden.

### 1.3 Estructura (30 cursos + secciones)
Carpeta raiz real (ver seccion 7) con:
- assets/css (16): animate, cards, code, components, dashboard, footer, forms,
  global, header, layout, lesson, reset, roadmap, sidebar, toc, variables.
- assets/js (13): code, data, favorites, helpers, history, main, navigation,
  progress, search, sidebar, storage, theme, toc.
- Secciones (carpetas + index.html): aprender, roadmap (index + 5 niveles:
  principiante/basico/intermedio/avanzado/experto), practica (index + ejercicios/
  retos/proyectos), recursos (index + herramientas, recursos-adicionales,
  blog-y-comunidades, cursos-gratis, libros, conceptos, descargas), cheatsheets
  (index + 16 hojas), glosario, buscador, dashboard, favoritos, historial, acerca,
  referencias, 404.html, index.html raiz, README.md.

Los 30 cursos (carpeta cursos/<slug>/ + index.html landing + modulos/lecciones):
1  fundamentos-backend (HECHO-completo, 5 modulos, 44 html, es la referencia canonica)
2  programacion        (HECHO-completo, 6 modulos, 31 lecciones, 38 html)
3  php
4  nodejs
5  python
6  bases-datos
7  sql
8  apis-rest
9  autenticacion
10 seguridad
11 git-github
12 linux
13 arquitectura
14 patrones
15 testing
16 docker
17 devops
18 cloud
19 redis
20 performance
21 mensajeria
22 microservicios
23 sistemas-distribuidos
24 observabilidad
25 websockets
26 graphql
27 backend-ia
28 system-design
29 integraciones
30 proyectos

NOTA: TODOS los 30 slugs ya estan creados como carpetas; los slugs REALES en disco
coinciden con la lista de data.js. Verificar con el inventario (seccion 7).

---

## 2) EL PROMPT MAESTRO (para lanzar subagentes)

"Eres un agente de contenido de Backend Academy. Tu unica tarea: crear N paginas
HTML en espanol real (sin lorem ipsum, sin paginas vacias, sin caracteres corruptos,
EXTENSION .html). Trabaja SIEMPRE sobre la ruta base real (seccion 7) usando
-LiteralPath. ANTES de escribir lee la referencia canonica para clonar las
convenciones EXACTAS (orden CSS/JS, rutas relativas, breadcrumb, header/sidebar/
footer, prev/next, data-root):

cursos\fundamentos-backend\modulo-01\index.html  (indice de modulo)
cursos\fundamentos-backend\modulo-01\leccion-01-que-es-backend.html  (leccion)
cursos\fundamentos-backend\index.html  (landing de curso)

Escribe SOLO con la herramienta write usando filePath = ruta absoluta exacta
(copiada de la referencia) y content con el codigo completo. Despues de cada
grupo, valida ejecutando node --check sobre cada JS referenciado y contando los
archivos creados con Get-ChildItem. REPITE la convencion exacta de la referencia:
mismo orden de CSS en <head>, mismos scripts JS al final (helpers, storage, theme,
data, progress, navigation, sidebar, toc, code, favorites, history, search, main),
misma estructura header/sidebar/footer/breadcrumb/prev-next, mismas rutas relativas
por profundidad. NO agregues paginas vacias ni contenido placeholder: cada pagina
debe tener contenido educativo real. NO edites data.js salvo que se indique.
Al terminar responde: (a) conteo de archivos, (b) lista de paths relativos creados,
(c) archivos que no pudiste crear y por que, (d) confirmacion de enlaces/rutas."

---

## 3) CHECKLIST - TODO LO QUE FALTA (EN ORDEN)

### FASE A - REPARAR BUGS CRITICOS (HACER PRIMERO)
- [ ] A1. REPARAR search.js: node --check da FALLO (search.js:106 area). Reescribir
      limpio replicando la logica de buscador de data.js (AppSearch con collections()).
- [ ] A2. REPARAR toc.js: node --check da FALLO (toc.js:74 area). Reescribir limpio
      (AppToc toc desde h2/h3/h4 con scrollspy).
- [ ] A3. Tras reparar, correr node --check sobre TODOS los JS raiz (assets/js) y
      grep de corrupcion: space- P, space- PAS, PAS;, PC;, space- 人头, space- PAS.

### FASE B - PLATAFORMA (pantallas faltantes)
- [ ] B1. index.html RAIZ (hero, stats, ultimos cursos, CTA roadmap, grid secciones).
- [ ] B2. 404.html.
- [ ] B3. aprender/index.html (grid categorias + cursos).
- [ ] B4. roadmap avanzado.html + experto.html (faltan; principiante/basico/
      intermedio ya existen).
- [ ] B5. practica/index.html + ejercicios/index.html + retos/index.html +
      proyectos/index.html.
- [ ] B6. recursos/index.html + herramientas + recursos-adicionales +
      blog-y-comunidades + cursos-gratis + libros + conceptos + descargas.
- [ ] B7. glosario/index.html.
- [ ] B8. buscador/index.html.
- [ ] B9. dashboard/index.html.
- [ ] B10. favoritos/index.html.
- [ ] B11. historial/index.html.
- [ ] B12. acerca/index.html.
- [ ] B13. referencias/index.html.

### FASE C - LANDINGS DE CURSO FALTANTES (16)
- [ ] C1. cursos/testing/index.html
- [ ] C2. cursos/docker/index.html
- [ ] C3. cursos/devops/index.html
- [ ] C4. cursos/cloud/index.html
- [ ] C5. cursos/redis/index.html
- [ ] C6. cursos/performance/index.html
- [ ] C7. cursos/mensajeria/index.html
- [ ] C8. cursos/microservicios/index.html
- [ ] C9. cursos/sistemas-distribuidos/index.html
- [ ] C10. cursos/observabilidad/index.html
- [ ] C11. cursos/websockets/index.html
- [ ] C12. cursos/graphql/index.html
- [ ] C13. cursos/backend-ia/index.html
- [ ] C14. cursos/system-design/index.html
- [ ] C15. cursos/integraciones/index.html
- [ ] C16. cursos/proyectos/index.html

### FASE D - CHEATSHEETS (16 paginas + index)
- [ ] D1. cheatsheets/index.html
- [ ] D2-D17. html, css, javascript, php, nodejs, python, sql, mysql, postgresql,
      git, linux, docker, rest, http, regex, bash  (cada una .html con cheatsheet
      real y boton copiar via AppCode)

### FASE E - CONTENIDO EDUCATIVO (lecciones de los 28 cursos sin lecciones)
Cada curso debe tener index.html + modulo-0X/index.html + lecciones reales
siguiendo la plantilla de fundamentos-backend. Empezar por los mas referenciados:
php, nodejs, python, bases-datos, sql, apis-rest. Luego: autenticacion, seguridad,
git-github, linux, arquitectura, patrones, testing, docker, devops, cloud, redis,
performance, mensajeria, microservicios, sistemas-distribuidos, observabilidad,
websockets, graphql, backend-ia, system-design, integraciones, proyectos.

### FASE F - DOCUMENTACION
- [ ] F1. README.md (descripcion, estructura, instalacion, publicacion GitHub Pages,
      como agregar curso/modulo/leccion/ejercicio/reto/proyecto/cheatsheet/termino).
- [ ] F2. _GUIA_DE_ESTILO.md (plantilla de leccion + reglas de estilo, como existe
      en cursos/fundamentos-backend/_GUIA_DE_ESTILO.md - replicar).

### FASE G - VALIDACION FINAL
- [ ] G1. node --check sobre TODOS los JS (0 fallos).
- [ ] G2. Grep de corrupcion en CSS/JS/HTML: space- P, space- PAS, PAS;, PC;,
      space- 人头, orton, space- PAS.
- [ ] G3. Script que recorra todos los HTML y verifique que cada href/src relativo
      exista (0 enlaces rotos).
- [ ] G4. Responsive 320px->4K, dark mode, sin overflow horizontal, consola sin
      errores (probar localmente con http server estatico).

---

## 4) DATOS DE REFERENCIA / ESTADO ACTUAL (inventario real verificado)

- Raiz real y existente (VERIFICAR con Get-ChildItem -LiteralPath):
  (ver seccion 7 - la ruta con espacios/acentos; usar SIEMPRE -LiteralPath).
- assets/css: 16 hojas OK (node --check exit=0 y scans sin corrupcion).
- assets/js: 13 archivos; busqueda: 11 OK, 2 FALLO (search.js, toc.js) -> reparar.
- HTML total en repositorio: 109.
- Cursos con landing (index.html) YA EXISTEN (14): apis-rest, arquitectura,
  autenticacion, bases-datos, fundamentos-backend, git-github, linux, nodejs,
  patrones, php, programacion, python, seguridad, sql.
- Cursos con lecciones reales: fundamentos-backend (44 html, completo) y
  programacion (38 html, completo). El resto tienen 0 lecciones (solo carpeta).
- Secciones con index.html existentes: aprender, roadmap (parcial: index,
  principiante, basico, intermedio). Faltan: avanzado, experto y todo lo de la
  FASE B.
- Landings de curso extras ya creados ademas de los 14: ninguno (validar).

LIMITACION CONOCIDA DEL ENTORNO: al escribir archivos grandes via la herramienta
write se producen CORRUPCIONES de bytes en el contenido (aparecen tokens extraños
como space- P, space- PAS, PAS;, PC;, space- 人头, orton, lineas duplicadas, "\n"
literales). SIEMPRE revalidar con node --check (JS) y grep de corrupcion tras cada
escritura; si un archivo sale corrupto, REWRITELO COMPLETO de una vez (no editar
lineas sueltas). Preferir contenido menor y escribir leccion por leccion.

---

## 5) CONVENCION DE PROFUNDIDAD / RUTAS (resumen)

| Ubicacion del archivo                     | CSS/JS a usar                         | Profundidad |
|-------------------------------------------|---------------------------------------|-------------|
| raiz/ (index.html, 404.html)              | assets/...                            | data-root="."          |
| seccion/ (aprender, roadmap, ...)         | ../assets/...                         | data-root=".."         |
| cursos/<slug>/ (landing curso)            | ../../assets/...                      | data-root="../.."      |
| cursos/<slug>/modulo-0X/ (lecciones)      | ../../../assets/...                   | data-root="../../.."   |

Usar AppHelpers.asset() en JS y enlaces directos relativos en HTML.

---

## 6) RECOMENDACIONES PARA EL SIGUIENTE AGENTE
1. Reparar search.js y toc.js PRIMERO (FASE A) para no arrastrar errores.
2. Lanzar subagentes (Task) en PARALELO para fases independientes: B (plataforma),
   C (16 landings), D (cheatsheets). Cada subagente con el prompt maestro de la
   seccion 2 indicandole SUS rutas exactas y el conteo esperado.
3. Fase E (contenido educativo) - la mas grande: dividir por grupos de cursos y
   lanzar varios subagentes; registrar paths de lecciones reales en data.js.
4. Validacion final SIEMPRE con node --check + grep corrupcion + enlaces relativos.

---

## 7) RUTA BASE REAL
La ruta base del proyecto contiene espacios y acentos. Usar SIEMPRE -LiteralPath.
Para obtenerla en cada sesion nueva, ejecutar:

  Get-ChildItem -LiteralPath $PWD -Directory | Select-Object Name   (en la carpeta
  del proyecto)  o bien localizar la carpeta "Guia de Backend" con:
  Get-ChildItem -LiteralPath <Downloads> -Recurse -Directory -Filter 'Guia de Backend'

Ruta base tipica (verificar porque varia el usuario):
  C:\Users\<USUARIO>\Downloads\Repositorio de Modulos\Guia de Backend
  o
  C:\Users\<USUARIO>\Downloads\Repositorio de Modulos\Guia de Backend\cursos
