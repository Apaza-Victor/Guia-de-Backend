/* ============================================================
   Backend Academy — Registro central de datos
   Carpeta: /assets/js/data.js
   ------------------------------------------------------------
   Este archivo es la ÚNICA fuente de verdad de la plataforma.
   Para agregar un curso/módulo/lección solo se edita aquí:
   1. Crear la carpeta + archivo .html
   2. Registrar el contenido en este archivo
   3. Guardar. La plataforma lo muestra automáticamente.
   ============================================================ */

/* Niveles usados de forma consistente en todo el contenido */
const APP_LEVELS = {
  principiante: { label: "Principiante", color: "success", emoji: "🌱" },
  basico:       { label: "Básico",       color: "info",    emoji: "💻" },
  intermedio:   { label: "Intermedio",   color: "warning", emoji: "⚙️" },
  avanzado:     { label: "Avanzado",     color: "danger",  emoji: "🔥" },
  experto:      { label: "Experto",      color: "primary", emoji: "🧠" }
};

/* Categorías de la plataforma (para filtros) */
const APP_CATEGORIES = {
  fundamentos:  { label: "Fundamentos",  emoji: "🌱" },
  programacion: { label: "Programación", emoji: "💻" },
  web:          { label: "Web",          emoji: "🌐" },
  backend:      { label: "Backend",      emoji: "⚙️" },
  datos:        { label: "Base de Datos",emoji: "🗄️" },
  api:          { label: "APIs",         emoji: "🔌" },
  auth:         { label: "Auth",         emoji: "🔐" },
  seguridad:    { label: "Seguridad",    emoji: "🛡️" },
  git:          { label: "Git",          emoji: "🔀" },
  sistemas:     { label: "Linux",        emoji: "🐧" },
  arquitectura: { label: "Arquitectura", emoji: "🏗️" },
  patrones:     { label: "Patterns",     emoji: "🧩" },
  testing:      { label: "Testing",      emoji: "🧪" },
  docker:       { label: "Docker",       emoji: "🐳" },
  devops:       { label: "DevOps",       emoji: "⚙️" },
  cloud:        { label: "Cloud",        emoji: "☁️" },
  redis:        { label: "Redis",        emoji: "⚡" },
  performance:  { label: "Performance",  emoji: "🚀" },
  mensajeria:   { label: "Mensajería",   emoji: "📨" },
  micro:        { label: "Microservicios",emoji: "🧩" },
  distribuidos: { label: "Distribuidos", emoji: "🌐" },
  observable:   { label: "Observabilidad",emoji: "📊" },
  websocket:    { label: "WebSockets",   emoji: "🔗" },
  graphql:      { label: "GraphQL",      emoji: "🧬" },
  ia:           { label: "IA",           emoji: "🤖" },
  design:       { label: "System Design",emoji: "🧠" },
  integraciones:{ label: "Integraciones",emoji: "🔌" },
  proyectos:    { label: "Proyectos",    emoji: "📦" }
};

/* ============================================================
   CURSOS
   Estructura de un curso:
   {
     id: "slug-unico",
     title, slug, level, category, techs[], duration, lessons,
     description, objectives[], requirements[], tags[],
     path: "cursos/slug/index.html",
     icon,
     modules: [
       { id, title, path: "modulo-XX/index.html", lessons: [ {id,title,path,duration,level,tags[]}, ... ] }
     ]
   }
   ============================================================ */
const courses = [
  {
    id: "fundamentos-backend",
    title: "Fundamentos de Backend",
    slug: "fundamentos-backend",
    level: "principiante",
    category: "backend",
    techs: ["Backend", "Web", "HTTP"],
    duration: "6 semanas",
    lessons: 24,
    icon: "🌱",
    description:
      "Aprende qué es el Backend, cómo funciona Internet, HTTP, la arquitectura web y los fundamentos que todo desarrollador Backend debe dominar desde el primer día.",
    objectives: [
      "Entender qué es el Backend y por qué existe",
      "Comprender cómo funciona Internet y HTTP",
      "Conocer la arquitectura cliente-servidor",
      "Dominar los formatos de comunicación",
      "Tener una base sólida para cualquier curso Backend"
    ],
    requirements: ["Ninguno. Solo ganas de aprender."],
    tags: ["backend", "fundamentos", "web", "http", "principiante"],
    path: "cursos/fundamentos-backend/index.html",
    modules: [
      {
        id: "modulo-01",
        title: "Introducción al Backend",
        path: "cursos/fundamentos-backend/modulo-01/index.html",
        lessons: [
          { id: "que-es-backend", title: "¿Qué es Backend?", path: "cursos/fundamentos-backend/modulo-01/que-es-backend.html", duration: "8 min", level: "principiante", tags: ["backend","concepto"] },
          { id: "backend-vs-frontend", title: "Backend vs Frontend", path: "cursos/fundamentos-backend/modulo-01/backend-vs-frontend.html", duration: "10 min", level: "principiante", tags: ["backend","frontend","concepto"] },
          { id: "que-hace-backend", title: "¿Qué hace un desarrollador Backend?", path: "cursos/fundamentos-backend/modulo-01/que-hace-un-desarrollador-backend.html", duration: "8 min", level: "principiante", tags: ["backend","rol"] },
          { id: "cliente-servidor", title: "Cliente-Servidor", path: "cursos/fundamentos-backend/modulo-01/cliente-servidor.html", duration: "12 min", level: "principiante", tags: ["backend","arquitectura","concepto"] },
          { id: "request-response", title: "Request y Response", path: "cursos/fundamentos-backend/modulo-01/request-response.html", duration: "10 min", level: "principiante", tags: ["backend","http","request","response"] },
          { id: "fullstack", title: "Full Stack", path: "cursos/fundamentos-backend/modulo-01/fullstack.html", duration: "8 min", level: "principiante", tags: ["backend","fullstack"] }
        ]
      },
      {
        id: "modulo-02",
        title: "Internet y la Web",
        path: "cursos/fundamentos-backend/modulo-02/index.html",
        lessons: [
          { id: "como-funciona-internet", title: "¿Cómo funciona Internet?", path: "cursos/fundamentos-backend/modulo-02/como-funciona-internet.html", duration: "12 min", level: "principiante", tags: ["internet","red"] }
        ]
      }
    ]
  },
  {
    id: "programacion",
    title: "Programación para Backend",
    slug: "programacion",
    level: "principiante",
    category: "programacion",
    techs: ["Lógica", "Algoritmos", "Estructuras"],
    duration: "8 semanas",
    lessons: 31,
    icon: "💻",
    description:
      "Domina la lógica de programación: variables, tipos de datos, control de flujo, funciones, estructuras de datos, POO y código profesional para escribir backend limpio en cualquier lenguaje. Los ejemplos usan PHP 8.",
    objectives: [
      "Pensar como programador y resolver problemas por pasos",
      "Dominar variables, tipos de datos, operadores y control de flujo",
      "Escribir funciones reutilizables y limpias",
      "Aplicar estructuras de datos y programación orientada a objetos",
      "Escribir código profesional: modular, legible y con manejo de errores"
    ],
    requirements: [
      "Haber completado el curso Fundamentos de Backend",
      "Un editor de código (VS Code) y PHP 8 instalado, o usar el simulador del navegador"
    ],
    tags: ["programacion", "logica", "algoritmos", "php", "principiante"],
    path: "cursos/programacion/index.html",
    modules: [
      {
        id: "modulo-01",
        title: "Fundamentos de programación",
        path: "cursos/programacion/modulo-01/index.html",
        lessons: [
          { id: "variables-y-constantes", title: "Variables y constantes", path: "cursos/programacion/modulo-01/variables-y-constantes.html", duration: "10 min", level: "principiante", tags: ["variables","constantes","php"] },
          { id: "tipos-de-datos", title: "Tipos de datos", path: "cursos/programacion/modulo-01/tipos-de-datos.html", duration: "12 min", level: "principiante", tags: ["tipos","string","int","bool"] },
          { id: "operadores", title: "Operadores y expresiones", path: "cursos/programacion/modulo-01/operadores.html", duration: "12 min", level: "principiante", tags: ["operadores","aritmetica","logica","comparacion"] },
          { id: "conversion-de-tipos", title: "Conversión de tipos", path: "cursos/programacion/modulo-01/conversion-de-tipos.html", duration: "10 min", level: "principiante", tags: ["casting","conversion","php"] },
          { id: "entrada-salida", title: "Entrada, salida y comentarios", path: "cursos/programacion/modulo-01/entrada-salida.html", duration: "10 min", level: "principiante", tags: ["io","comentarios","echo","readline"] }
        ]
      },
      {
        id: "modulo-02",
        title: "Control de flujo",
        path: "cursos/programacion/modulo-02/index.html",
        lessons: [
          { id: "condicionales", title: "Condicionales: if, else y elseif", path: "cursos/programacion/modulo-02/condicionales.html", duration: "12 min", level: "principiante", tags: ["if","else","elseif","condicional"] },
          { id: "condicional-switch", title: "La estructura switch", path: "cursos/programacion/modulo-02/condicional-switch.html", duration: "10 min", level: "principiante", tags: ["switch","match","php"] },
          { id: "bucles-while", title: "Bucles while y do-while", path: "cursos/programacion/modulo-02/bucles-while.html", duration: "10 min", level: "principiante", tags: ["while","do-while","bucle"] },
          { id: "bucles-for-foreach", title: "Bucles for y foreach", path: "cursos/programacion/modulo-02/bucles-for-foreach.html", duration: "12 min", level: "principiante", tags: ["for","foreach","bucle","arrays"] },
          { id: "break-continue", title: "break y continue: control fino de bucles", path: "cursos/programacion/modulo-02/break-continue.html", duration: "8 min", level: "principiante", tags: ["break","continue","bucles"] }
        ]
      },
      {
        id: "modulo-03",
        title: "Funciones",
        path: "cursos/programacion/modulo-03/index.html",
        lessons: [
          { id: "funciones", title: "Funciones: definir y retornar", path: "cursos/programacion/modulo-03/funciones.html", duration: "12 min", level: "principiante", tags: ["funciones","return","php"] },
          { id: "parametros-y-argumentos", title: "Parámetros y argumentos", path: "cursos/programacion/modulo-03/parametros-y-argumentos.html", duration: "12 min", level: "principiante", tags: ["parametros","argumentos","php"] },
          { id: "ambito-de-variables", title: "Ámbito (scope) de las variables", path: "cursos/programacion/modulo-03/ambito-de-variables.html", duration: "10 min", level: "intermedio", tags: ["scope","variables","php"] },
          { id: "funciones-anonimas-callbacks", title: "Funciones anónimas y callbacks", path: "cursos/programacion/modulo-03/funciones-anonimas-callbacks.html", duration: "12 min", level: "intermedio", tags: ["callbacks","closures","anonimas"] },
          { id: "recursividad", title: "Recursividad", path: "cursos/programacion/modulo-03/recursividad.html", duration: "12 min", level: "intermedio", tags: ["recursividad","recursion"] }
        ]
      },
      {
        id: "modulo-04",
        title: "Estructuras de datos",
        path: "cursos/programacion/modulo-04/index.html",
        lessons: [
          { id: "arrays", title: "Arrays: la base de los datos", path: "cursos/programacion/modulo-04/arrays.html", duration: "14 min", level: "principiante", tags: ["arrays","colecciones","php"] },
          { id: "arrays-asociativos", title: "Arrays asociativos (mapas)", path: "cursos/programacion/modulo-04/arrays-asociativos.html", duration: "12 min", level: "principiante", tags: ["asociativos","mapas","clave-valor"] },
          { id: "conjuntos", title: "Conjuntos y colecciones", path: "cursos/programacion/modulo-04/conjuntos.html", duration: "10 min", level: "intermedio", tags: ["conjuntos","set","colecciones"] },
          { id: "objetos", title: "Objetos y estructuras de datos", path: "cursos/programacion/modulo-04/objetos.html", duration: "14 min", level: "intermedio", tags: ["objetos","stdClass","datos"] },
          { id: "estructuras-anidadas", title: "Estructuras anidadas", path: "cursos/programacion/modulo-04/estructuras-anidadas.html", duration: "12 min", level: "intermedio", tags: ["anidado","json","arboles"] }
        ]
      },
      {
        id: "modulo-05",
        title: "Programación Orientada a Objetos",
        path: "cursos/programacion/modulo-05/index.html",
        lessons: [
          { id: "clases-y-objetos", title: "Clases y objetos", path: "cursos/programacion/modulo-05/clases-y-objetos.html", duration: "14 min", level: "intermedio", tags: ["clases","objetos","php"] },
          { id: "atributos-metodos-constructores", title: "Atributos, métodos y constructores", path: "cursos/programacion/modulo-05/atributos-metodos-constructores.html", duration: "14 min", level: "intermedio", tags: ["atributos","metodos","constructores"] },
          { id: "encapsulamiento", title: "Encapsulamiento: public, private y protected", path: "cursos/programacion/modulo-05/encapsulamiento.html", duration: "12 min", level: "intermedio", tags: ["encapsulamiento","public","private","protected"] },
          { id: "herencia", title: "Herencia", path: "cursos/programacion/modulo-05/herencia.html", duration: "12 min", level: "intermedio", tags: ["herencia","extends","padre","hijo"] },
          { id: "polimorfismo-abstraccion-interfaces", title: "Polimorfismo, abstracción e interfaces", path: "cursos/programacion/modulo-05/polimorfismo-abstraccion-interfaces.html", duration: "14 min", level: "avanzado", tags: ["polimorfismo","interfaces","abstract"] }
        ]
      },
      {
        id: "modulo-06",
        title: "Código profesional",
        path: "cursos/programacion/modulo-06/index.html",
        lessons: [
          { id: "modularizacion", title: "Modularización", path: "cursos/programacion/modulo-06/modularizacion.html", duration: "12 min", level: "intermedio", tags: ["modulos","include","require","organizacion"] },
          { id: "clean-code", title: "Clean Code", path: "cursos/programacion/modulo-06/clean-code.html", duration: "10 min", level: "intermedio", tags: ["clean-code","nombres","legibilidad"] },
          { id: "principios-solid", title: "Principios SOLID", path: "cursos/programacion/modulo-06/principios-solid.html", duration: "14 min", level: "avanzado", tags: ["solid","diseno","mantenibilidad"] },
          { id: "dry-kiss", title: "DRY y KISS", path: "cursos/programacion/modulo-06/dry-kiss.html", duration: "8 min", level: "intermedio", tags: ["dry","kiss","simplicidad"] },
          { id: "debugging", title: "Debugging y herramientas", path: "cursos/programacion/modulo-06/debugging.html", duration: "12 min", level: "intermedio", tags: ["debug","xdebug","trazas"] },
          { id: "manejo-de-errores", title: "Manejo de errores y excepciones", path: "cursos/programacion/modulo-06/manejo-de-errores.html", duration: "12 min", level: "intermedio", tags: ["try","catch","excepciones","errores"] }
        ]
      }
    ]
  },
  {
    id: "php",
    title: "PHP desde cero hasta avanzado",
    slug: "php",
    level: "intermedio",
    category: "backend",
    techs: ["PHP", "MySQL", "Composer", "PDO"],
    duration: "10 semanas",
    lessons: 15,
    icon: "🐘",
    description:
      "El curso completo de PHP: sintaxis, POO, MySQL, Composer, MVC, seguridad y desarrollo de APIs REST de nivel profesional.",
    objectives: ["Aprender PHP desde cero", "Construir APIs robustas con PHP"],
    requirements: ["Fundamentos de Backend", "Programación para Backend", "SQL"],
    tags: ["php","backend","api"],
    path: "cursos/php/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Introducción a PHP",
              path: "cursos/php/modulo-01/index.html",
              lessons: [
                {
                  id: "hola-mundo",
                  title: "Tu primer script: hola mundo",
                  path: "cursos/php/modulo-01/hola-mundo.html",
                  duration: "7 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "instalando-php-y-entorno",
                  title: "Instalando PHP y configurando el entorno",
                  path: "cursos/php/modulo-01/instalando-php-y-entorno.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "operadores-y-expresiones",
                  title: "Operadores y expresiones",
                  path: "cursos/php/modulo-01/operadores-y-expresiones.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "sintaxis-basica-y-etiquetas",
                  title: "Sintaxis básica y etiquetas PHP",
                  path: "cursos/php/modulo-01/sintaxis-basica-y-etiquetas.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "variables-constantes-y-tipos",
                  title: "Variables, constantes y tipos de datos",
                  path: "cursos/php/modulo-01/variables-constantes-y-tipos.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Control de flujo y funciones",
              path: "cursos/php/modulo-02/index.html",
              lessons: [
                {
                  id: "alcance-de-variables",
                  title: "Alcance de variables (scope)",
                  path: "cursos/php/modulo-02/alcance-de-variables.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "bucles-for-foreach-while",
                  title: "Bucles: for, foreach y while",
                  path: "cursos/php/modulo-02/bucles-for-foreach-while.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "condicionales-if-else-match",
                  title: "Condicionales: if, else y match",
                  path: "cursos/php/modulo-02/condicionales-if-else-match.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "funciones-definir-parametros-retorno",
                  title: "Funciones: definir, parámetros y retorno",
                  path: "cursos/php/modulo-02/funciones-definir-parametros-retorno.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "parametros-por-valor-y-referencia",
                  title: "Parámetros por valor y por referencia",
                  path: "cursos/php/modulo-02/parametros-por-valor-y-referencia.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Arrays y estructuras de datos",
              path: "cursos/php/modulo-03/index.html",
              lessons: [
                {
                  id: "archivos-y-json",
                  title: "Manipulación de archivos y JSON",
                  path: "cursos/php/modulo-03/archivos-y-json.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "arrays-indexados-y-asociativos",
                  title: "Arrays indexados y asociativos",
                  path: "cursos/php/modulo-03/arrays-indexados-y-asociativos.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "funciones-array-map-filter-reduce",
                  title: "Funciones útiles: array_map, filter y reduce",
                  path: "cursos/php/modulo-03/funciones-array-map-filter-reduce.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "recorriendo-arrays-con-foreach",
                  title: "Recorriendo arrays con foreach",
                  path: "cursos/php/modulo-03/recorriendo-arrays-con-foreach.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "strings-y-funciones-de-texto",
                  title: "Strings: funciones de texto y expresiones",
                  path: "cursos/php/modulo-03/strings-y-funciones-de-texto.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "nodejs",
    title: "Node.js desde cero hasta avanzado",
    slug: "nodejs",
    level: "intermedio",
    category: "backend",
    techs: ["Node.js", "Express", "npm"],
    duration: "10 semanas",
    lessons: 15,
    icon: "🟢",
    description:
      "Aprende JavaScript del lado del servidor: Node.js, npm, HTTP, Express, REST APIs y arquitectura escalable para el backend moderno.",
    objectives: ["Dominar Node.js", "Construir APIs con Express"],
    requirements: ["Fundamentos de Backend", "Programación para Backend"],
    tags: ["nodejs","javascript","express","backend"],
    path: "cursos/nodejs/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Introducción a Node.js",
              path: "cursos/nodejs/modulo-01/index.html",
              lessons: [
                {
                  id: "ejecutando-tu-primer-script",
                  title: "Ejecutando tu primer script",
                  path: "cursos/nodejs/modulo-01/ejecutando-tu-primer-script.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "el-event-loop",
                  title: "El Event Loop de Node.js",
                  path: "cursos/nodejs/modulo-01/el-event-loop.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "el-runtime-de-node",
                  title: "El runtime de Node: V8 y APIs nativas",
                  path: "cursos/nodejs/modulo-01/el-runtime-de-node.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "instalando-node-y-npm",
                  title: "Instalando Node.js y npm",
                  path: "cursos/nodejs/modulo-01/instalando-node-y-npm.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "modulos-core-path-fs-os",
                  title: "Módulos core: path, fs y os",
                  path: "cursos/nodejs/modulo-01/modulos-core-path-fs-os.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Módulos y npm",
              path: "cursos/nodejs/modulo-02/index.html",
              lessons: [
                {
                  id: "commonjs-y-es-modules",
                  title: "CommonJS y ES Modules",
                  path: "cursos/nodejs/modulo-02/commonjs-y-es-modules.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "creando-tus-propios-modulos",
                  title: "Creando tus propios módulos",
                  path: "cursos/nodejs/modulo-02/creando-tus-propios-modulos.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "dependencias-y-lockfile",
                  title: "Dependencias y lockfile",
                  path: "cursos/nodejs/modulo-02/dependencias-y-lockfile.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "npm-init-install-scripts",
                  title: "npm init, install y scripts",
                  path: "cursos/nodejs/modulo-02/npm-init-install-scripts.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "versionando-y-publicando-paquetes",
                  title: "Versionando y publicando paquetes",
                  path: "cursos/nodejs/modulo-02/versionando-y-publicando-paquetes.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Asincronía avanzada",
              path: "cursos/nodejs/modulo-03/index.html",
              lessons: [
                {
                  id: "async-await-y-try-catch",
                  title: "async/await y try/catch",
                  path: "cursos/nodejs/modulo-03/async-await-y-try-catch.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "callbacks",
                  title: "Callbacks",
                  path: "cursos/nodejs/modulo-03/callbacks.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "promesas-y-encadenamiento",
                  title: "Promesas y encadenamiento",
                  path: "cursos/nodejs/modulo-03/promesas-y-encadenamiento.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "promise-all-y-promise-race",
                  title: "Promise.all y Promise.race",
                  path: "cursos/nodejs/modulo-03/promise-all-y-promise-race.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "worker-threads",
                  title: "Worker Threads",
                  path: "cursos/nodejs/modulo-03/worker-threads.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "python",
    title: "Python para Backend",
    slug: "python",
    level: "basico",
    category: "backend",
    techs: ["Python", "Flask", "FastAPI"],
    duration: "8 semanas",
    lessons: 6,
    icon: "🐍",
    description: "Python aplicado al backend: sintaxis, POO, virtualenv, Flask y FastAPI para construir APIs modernas y rápidas.",
    objectives: ["Aprender Python para backend", "Construir APIs con FastAPI"],
    requirements: ["Fundamentos de Backend", "Programación para Backend"],
    tags: ["python","flask","fastapi","backend"],
    path: "cursos/python/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Introducción a Python",
              path: "cursos/python/modulo-01/index.html",
              lessons: [
                {
                  id: "comentarios-y-docstrings",
                  title: "Comentarios y docstrings",
                  path: "cursos/python/modulo-01/comentarios-y-docstrings.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "entrada-y-salida-de-datos",
                  title: "Entrada y salida de datos",
                  path: "cursos/python/modulo-01/entrada-y-salida-de-datos.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "instalando-python-y-el-interprete",
                  title: "Instalando Python y el intérprete",
                  path: "cursos/python/modulo-01/instalando-python-y-el-interprete.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "primer-script-y-consola-interactiva",
                  title: "Tu primer script y la consola interactiva",
                  path: "cursos/python/modulo-01/primer-script-y-consola-interactiva.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "variables-constantes-y-tipos",
                  title: "Variables, constantes y tipos de datos",
                  path: "cursos/python/modulo-01/variables-constantes-y-tipos.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3",
              path: "cursos/python/modulo-03/index.html",
              lessons: [
                {
                  id: "dicts-y-conjuntos",
                  title: "Dicts y conjuntos",
                  path: "cursos/python/modulo-03/dicts-y-conjuntos.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "bases-datos",
    title: "Bases de Datos",
    slug: "bases-datos",
    level: "principiante",
    category: "datos",
    techs: ["SQL", "MySQL", "PostgreSQL", "MongoDB"],
    duration: "8 semanas",
    lessons: 33,
    icon: "🗄️",
    description: "Modelado, normalización, índices, transacciones y las bases de datos relacionales y NoSQL que usa el backend real.",
    objectives: ["Entender cómo funcionan las bases de datos", "Modelar datos correctamente"],
    requirements: ["Programación para Backend"],
    tags: ["basededatos","sql","nosql","mysql","postgresql"],
    path: "cursos/bases-datos/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos",
              path: "cursos/bases-datos/modulo-01/index.html",
              lessons: [
                {
                  id: "claves-primarias-y-foraneas",
                  title: "Claves primarias y foráneas",
                  path: "cursos/bases-datos/modulo-01/claves-primarias-y-foraneas.html",
                  duration: "9 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "papel-de-la-base-de-datos",
                  title: "El papel de la base de datos en una aplicación",
                  path: "cursos/bases-datos/modulo-01/papel-de-la-base-de-datos.html",
                  duration: "7 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "que-es-una-base-de-datos",
                  title: "¿Qué es una base de datos?",
                  path: "cursos/bases-datos/modulo-01/que-es-una-base-de-datos.html",
                  duration: "8 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "sgbd",
                  title: "SGBD: sistemas de gestión de bases de datos",
                  path: "cursos/bases-datos/modulo-01/sgbd.html",
                  duration: "9 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "tablas-registros-columnas",
                  title: "Tablas, registros y columnas",
                  path: "cursos/bases-datos/modulo-01/tablas-registros-columnas.html",
                  duration: "9 min",
                  level: "principiante",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Modelado y diseño",
              path: "cursos/bases-datos/modulo-02/index.html",
              lessons: [
                {
                  id: "cardinalidad",
                  title: "Cardinalidad de las relaciones",
                  path: "cursos/bases-datos/modulo-02/cardinalidad.html",
                  duration: "10 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "diagramas-entidad-relacion",
                  title: "Dibujando diagramas entidad-relación",
                  path: "cursos/bases-datos/modulo-02/diagramas-entidad-relacion.html",
                  duration: "10 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "modelo-entidad-relacion",
                  title: "Modelo entidad-relación",
                  path: "cursos/bases-datos/modulo-02/modelo-entidad-relacion.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "primera-segunda-forma-normal",
                  title: "Primera y segunda forma normal",
                  path: "cursos/bases-datos/modulo-02/primera-segunda-forma-normal.html",
                  duration: "10 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "tercera-forma-normal-desnormalizacion",
                  title: "Tercera forma normal y desnormalización",
                  path: "cursos/bases-datos/modulo-02/tercera-forma-normal-desnormalizacion.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · SQL básico",
              path: "cursos/bases-datos/modulo-03/index.html",
              lessons: [
                {
                  id: "create-table",
                  title: "Creando tablas con CREATE TABLE",
                  path: "cursos/bases-datos/modulo-03/create-table.html",
                  duration: "9 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "delete-seguro",
                  title: "Borrado seguro con DELETE",
                  path: "cursos/bases-datos/modulo-03/delete-seguro.html",
                  duration: "10 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "insert-update",
                  title: "Insertando y modificando datos",
                  path: "cursos/bases-datos/modulo-03/insert-update.html",
                  duration: "10 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "order-limit",
                  title: "Ordenando y limitando resultados",
                  path: "cursos/bases-datos/modulo-03/order-limit.html",
                  duration: "9 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "select-where",
                  title: "Consultas SELECT y filtros WHERE",
                  path: "cursos/bases-datos/modulo-03/select-where.html",
                  duration: "10 min",
                  level: "principiante",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-04",
              title: "Módulo 4 · Relaciones y consultas",
              path: "cursos/bases-datos/modulo-04/index.html",
              lessons: [
                {
                  id: "group-by",
                  title: "Agrupación con GROUP BY",
                  path: "cursos/bases-datos/modulo-04/group-by.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "indices-rendimiento",
                  title: "Índices y rendimiento",
                  path: "cursos/bases-datos/modulo-04/indices-rendimiento.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "joins-inner-left-right",
                  title: "JOINs: inner, left y right",
                  path: "cursos/bases-datos/modulo-04/joins-inner-left-right.html",
                  duration: "12 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "relaciones-uno-muchos",
                  title: "Relaciones uno a muchos y muchos a muchos",
                  path: "cursos/bases-datos/modulo-04/relaciones-uno-muchos.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "subconsultas-basicas",
                  title: "Subconsultas básicas",
                  path: "cursos/bases-datos/modulo-04/subconsultas-basicas.html",
                  duration: "10 min",
                  level: "principiante",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-05",
              title: "Módulo 5 · Transacciones y concurrencia",
              path: "cursos/bases-datos/modulo-05/index.html",
              lessons: [
                {
                  id: "bloqueos-concurrencia",
                  title: "Bloqueos y concurrencia",
                  path: "cursos/bases-datos/modulo-05/bloqueos-concurrencia.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "niveles-aislamiento",
                  title: "Niveles de aislamiento",
                  path: "cursos/bases-datos/modulo-05/niveles-aislamiento.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "propiedades-acid",
                  title: "Propiedades ACID",
                  path: "cursos/bases-datos/modulo-05/propiedades-acid.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "transacciones",
                  title: "Transacciones: BEGIN, COMMIT y ROLLBACK",
                  path: "cursos/bases-datos/modulo-05/transacciones.html",
                  duration: "12 min",
                  level: "principiante",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-06",
              title: "Módulo 6 · MySQL y PostgreSQL",
              path: "cursos/bases-datos/modulo-06/index.html",
              lessons: [
                {
                  id: "backups-restauracion",
                  title: "Backups y restauración",
                  path: "cursos/bases-datos/modulo-06/backups-restauracion.html",
                  duration: "10 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "instalando-mysql",
                  title: "Instalando MySQL",
                  path: "cursos/bases-datos/modulo-06/instalando-mysql.html",
                  duration: "10 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "instalando-postgresql",
                  title: "Instalando PostgreSQL",
                  path: "cursos/bases-datos/modulo-06/instalando-postgresql.html",
                  duration: "10 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "mysql-vs-postgresql",
                  title: "MySQL vs PostgreSQL",
                  path: "cursos/bases-datos/modulo-06/mysql-vs-postgresql.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "usuarios-permisos-respaldos",
                  title: "Usuarios y permisos",
                  path: "cursos/bases-datos/modulo-06/usuarios-permisos-respaldos.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-07",
              title: "Módulo 7 · NoSQL",
              path: "cursos/bases-datos/modulo-07/index.html",
              lessons: [
                {
                  id: "crud-mongodb",
                  title: "CRUD en MongoDB",
                  path: "cursos/bases-datos/modulo-07/crud-mongodb.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "mongodb-documentos-colecciones",
                  title: "MongoDB: documentos y colecciones",
                  path: "cursos/bases-datos/modulo-07/mongodb-documentos-colecciones.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "que-es-nosql",
                  title: "¿Qué es NoSQL?",
                  path: "cursos/bases-datos/modulo-07/que-es-nosql.html",
                  duration: "11 min",
                  level: "principiante",
                  tags: []
                },
                {
                  id: "relacional-o-nosql",
                  title: "¿Relacional o NoSQL?",
                  path: "cursos/bases-datos/modulo-07/relacional-o-nosql.html",
                  duration: "10 min",
                  level: "principiante",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "sql",
    title: "SQL desde cero hasta experto",
    slug: "sql",
    level: "intermedio",
    category: "datos",
    techs: ["SQL", "Consultas", "Optimización"],
    duration: "8 semanas",
    lessons: 33,
    icon: "🗄️",
    description: "SELECT, JOINs, subconsultas, CTEs, ventanas, transacciones y optimización: SQL completo hasta nivel profesional.",
    objectives: ["Dominar SQL", "Escribir consultas optimizadas"],
    requirements: ["Bases de Datos"],
    tags: ["sql","consultas","basededatos"],
    path: "cursos/sql/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de SQL",
              path: "cursos/sql/modulo-01/index.html",
              lessons: [
                {
                  id: "instalando-motores-sql",
                  title: "Instalando MySQL o PostgreSQL",
                  path: "cursos/sql/modulo-01/instalando-motores-sql.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "order-limit",
                  title: "Ordenando y limitando resultados",
                  path: "cursos/sql/modulo-01/order-limit.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "que-es-sql-dialectos",
                  title: "Qué es SQL y sus dialectos",
                  path: "cursos/sql/modulo-01/que-es-sql-dialectos.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "select-basico",
                  title: "Tu primera consulta: SELECT básico",
                  path: "cursos/sql/modulo-01/select-basico.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "where",
                  title: "Filtrando con WHERE",
                  path: "cursos/sql/modulo-01/where.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Consultas avanzadas",
              path: "cursos/sql/modulo-02/index.html",
              lessons: [
                {
                  id: "funciones-agregacion",
                  title: "Funciones de agregación: COUNT, SUM, AVG",
                  path: "cursos/sql/modulo-02/funciones-agregacion.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "funciones-texto-fecha-numericas",
                  title: "Funciones de texto, fecha y numéricas",
                  path: "cursos/sql/modulo-02/funciones-texto-fecha-numericas.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "group-by",
                  title: "Agrupando con GROUP BY",
                  path: "cursos/sql/modulo-02/group-by.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "having",
                  title: "Filtrando grupos con HAVING",
                  path: "cursos/sql/modulo-02/having.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "operadores",
                  title: "Operadores de comparación y lógicos",
                  path: "cursos/sql/modulo-02/operadores.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · JOINs",
              path: "cursos/sql/modulo-03/index.html",
              lessons: [
                {
                  id: "cross-join-union",
                  title: "CROSS JOIN y JOINs con unión",
                  path: "cursos/sql/modulo-03/cross-join-union.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "inner-join",
                  title: "INNER JOIN",
                  path: "cursos/sql/modulo-03/inner-join.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "joins-multiples-tablas",
                  title: "JOINs con múltiples tablas",
                  path: "cursos/sql/modulo-03/joins-multiples-tablas.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "left-right-join",
                  title: "LEFT y RIGHT JOIN",
                  path: "cursos/sql/modulo-03/left-right-join.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "tablas-relacionadas-integridad",
                  title: "Tablas relacionadas e integridad referencial",
                  path: "cursos/sql/modulo-03/tablas-relacionadas-integridad.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-04",
              title: "Módulo 4 · Subconsultas y CTEs",
              path: "cursos/sql/modulo-04/index.html",
              lessons: [
                {
                  id: "ctes-recursivas",
                  title: "CTEs recursivas",
                  path: "cursos/sql/modulo-04/ctes-recursivas.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "ctes-with",
                  title: "CTEs con WITH",
                  path: "cursos/sql/modulo-04/ctes-with.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "subconsultas-correlacionadas",
                  title: "Subconsultas correlacionadas",
                  path: "cursos/sql/modulo-04/subconsultas-correlacionadas.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "subconsultas-escalares",
                  title: "Subconsultas escalares",
                  path: "cursos/sql/modulo-04/subconsultas-escalares.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "subconsultas-in",
                  title: "Subconsultas con IN",
                  path: "cursos/sql/modulo-04/subconsultas-in.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-05",
              title: "Módulo 5 · Funciones de ventana",
              path: "cursos/sql/modulo-05/index.html",
              lessons: [
                {
                  id: "introduccion-funciones-ventana",
                  title: "Introducción a funciones de ventana",
                  path: "cursos/sql/modulo-05/introduccion-funciones-ventana.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "over-partition-by",
                  title: "OVER con PARTITION BY",
                  path: "cursos/sql/modulo-05/over-partition-by.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "row-number-rank-dense-rank",
                  title: "ROW_NUMBER, RANK y DENSE_RANK",
                  path: "cursos/sql/modulo-05/row-number-rank-dense-rank.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "ventanas-moviles-acumulados",
                  title: "Ventanas móviles y acumulados",
                  path: "cursos/sql/modulo-05/ventanas-moviles-acumulados.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-06",
              title: "Módulo 6 · Optimización",
              path: "cursos/sql/modulo-06/index.html",
              lessons: [
                {
                  id: "como-lee-el-motor",
                  title: "Cómo lee el motor",
                  path: "cursos/sql/modulo-06/como-lee-el-motor.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "explain",
                  title: "Leer planes con EXPLAIN",
                  path: "cursos/sql/modulo-06/explain.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "indices-compuestos-cobertura",
                  title: "Índices compuestos y de cobertura",
                  path: "cursos/sql/modulo-06/indices-compuestos-cobertura.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "indices-creacion",
                  title: "Índices: crearlos y cuándo",
                  path: "cursos/sql/modulo-06/indices-creacion.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "optimizando-consultas-lentas",
                  title: "Optimizando consultas lentas",
                  path: "cursos/sql/modulo-06/optimizando-consultas-lentas.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-07",
              title: "Módulo 7 · SQL en el backend",
              path: "cursos/sql/modulo-07/index.html",
              lessons: [
                {
                  id: "buenas-practicas-sql-backend",
                  title: "Buenas prácticas SQL en backend",
                  path: "cursos/sql/modulo-07/buenas-practicas-sql-backend.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "consultas-preparadas",
                  title: "Consultas preparadas",
                  path: "cursos/sql/modulo-07/consultas-preparadas.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "migraciones",
                  title: "Migraciones de esquema",
                  path: "cursos/sql/modulo-07/migraciones.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "orms",
                  title: "ORMs en el backend",
                  path: "cursos/sql/modulo-07/orms.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "apis-rest",
    title: "APIs REST",
    slug: "apis-rest",
    level: "intermedio",
    category: "api",
    techs: ["REST", "HTTP", "JSON", "OpenAPI"],
    duration: "6 semanas",
    lessons: 28,
    icon: "🔌",
    description: "Diseña APIs REST profesionales: recursos, métodos, status codes, versionado, documentación con OpenAPI y validación.",
    objectives: ["Diseñar APIs REST correctas", "Documentar APIs con OpenAPI"],
    requirements: ["Fundamentos de Backend", "HTTP"],
    tags: ["api","rest","json","http","openapi"],
    path: "cursos/apis-rest/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de APIs",
              path: "cursos/apis-rest/modulo-01/index.html",
              lessons: [
                {
                  id: "anatomia-api-real",
                  title: "La anatomía de una API real",
                  path: "cursos/apis-rest/modulo-01/anatomia-api-real.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "clientes-consumidores-api",
                  title: "Clientes y consumidores de una API",
                  path: "cursos/apis-rest/modulo-01/clientes-consumidores-api.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "estilo-rest-historia",
                  title: "El estilo REST y su historia",
                  path: "cursos/apis-rest/modulo-01/estilo-rest-historia.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "que-es-una-api",
                  title: "¿Qué es una API y para qué sirve?",
                  path: "cursos/apis-rest/modulo-01/que-es-una-api.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "recursos-representaciones-json",
                  title: "Recursos y representaciones con JSON",
                  path: "cursos/apis-rest/modulo-01/recursos-representaciones-json.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · HTTP aplicado a REST",
              path: "cursos/apis-rest/modulo-02/index.html",
              lessons: [
                {
                  id: "cabeceras-peticion-respuesta",
                  title: "Cabeceras de petición y de respuesta",
                  path: "cursos/apis-rest/modulo-02/cabeceras-peticion-respuesta.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "codigos-estado",
                  title: "Códigos de estado del 1xx al 5xx",
                  path: "cursos/apis-rest/modulo-02/codigos-estado.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "content-type-content-disposition",
                  title: "Content-Type y Content-Disposition",
                  path: "cursos/apis-rest/modulo-02/content-type-content-disposition.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "metodos-http",
                  title: "Métodos HTTP: GET, POST, PUT, PATCH y DELETE",
                  path: "cursos/apis-rest/modulo-02/metodos-http.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "negociacion-contenido",
                  title: "Negociación de contenido",
                  path: "cursos/apis-rest/modulo-02/negociacion-contenido.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Diseño REST",
              path: "cursos/apis-rest/modulo-03/index.html",
              lessons: [
                {
                  id: "cache-etag-cache-control",
                  title: "Caché con ETag y Cache-Control",
                  path: "cursos/apis-rest/modulo-03/cache-etag-cache-control.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "estructura-errores-consistente",
                  title: "Estructura de errores consistente",
                  path: "cursos/apis-rest/modulo-03/estructura-errores-consistente.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "nombrando-recursos-plural",
                  title: "Nombrando recursos en plural",
                  path: "cursos/apis-rest/modulo-03/nombrando-recursos-plural.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "paginacion-filtros-query",
                  title: "Paginación y filtros por query",
                  path: "cursos/apis-rest/modulo-03/paginacion-filtros-query.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "versionado-url-headers",
                  title: "Versionado: URL vs headers",
                  path: "cursos/apis-rest/modulo-03/versionado-url-headers.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-04",
              title: "Módulo 4 · Implementación",
              path: "cursos/apis-rest/modulo-04/index.html",
              lessons: [
                {
                  id: "autenticacion-basica-api-keys",
                  title: "Autenticación básica y API keys",
                  path: "cursos/apis-rest/modulo-04/autenticacion-basica-api-keys.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "crud-recurso-completo",
                  title: "CRUD de un recurso completo",
                  path: "cursos/apis-rest/modulo-04/crud-recurso-completo.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "manejo-errores-centralizado",
                  title: "Manejo de errores centralizado",
                  path: "cursos/apis-rest/modulo-04/manejo-errores-centralizado.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "serializacion-respuestas-consistentes",
                  title: "Serialización y respuestas consistentes",
                  path: "cursos/apis-rest/modulo-04/serializacion-respuestas-consistentes.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "validacion-entrada-reglas",
                  title: "Validación de entrada y reglas",
                  path: "cursos/apis-rest/modulo-04/validacion-entrada-reglas.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-05",
              title: "Módulo 5 · Documentación",
              path: "cursos/apis-rest/modulo-05/index.html",
              lessons: [
                {
                  id: "definiendo-contrato-api",
                  title: "Definiendo el contrato de la API",
                  path: "cursos/apis-rest/modulo-05/definiendo-contrato-api.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "ejemplos-errores-sdks-generados",
                  title: "Ejemplos, errores y SDKs generados",
                  path: "cursos/apis-rest/modulo-05/ejemplos-errores-sdks-generados.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "que-es-openapi",
                  title: "¿Qué es OpenAPI?",
                  path: "cursos/apis-rest/modulo-05/que-es-openapi.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "swagger-ui-exploracion",
                  title: "Swagger UI: exploración de la API",
                  path: "cursos/apis-rest/modulo-05/swagger-ui-exploracion.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-06",
              title: "Módulo 6 · Calidad y seguridad",
              path: "cursos/apis-rest/modulo-06/index.html",
              lessons: [
                {
                  id: "cors-buenas-practicas-seguridad",
                  title: "CORS y buenas prácticas de seguridad",
                  path: "cursos/apis-rest/modulo-06/cors-buenas-practicas-seguridad.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "monitoreo-metricas-basicas",
                  title: "Monitoreo y métricas básicas",
                  path: "cursos/apis-rest/modulo-06/monitoreo-metricas-basicas.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "rate-limiting-abuso-api",
                  title: "Rate limiting y abuso de la API",
                  path: "cursos/apis-rest/modulo-06/rate-limiting-abuso-api.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-endpoints",
                  title: "Testing de endpoints",
                  path: "cursos/apis-rest/modulo-06/testing-endpoints.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "autenticacion",
    title: "Autenticación y Autorización",
    slug: "autenticacion",
    level: "intermedio",
    category: "auth",
    techs: ["JWT", "Sesiones", "OAuth", "RBAC"],
    duration: "6 semanas",
    lessons: 29,
    icon: "🔐",
    description: "Registro, login, passwords, sesiones, JWT, refresh tokens, roles, permisos y OAuth aplicados al backend.",
    objectives: ["Implementar autenticación segura", "Dominar JWT y sesiones"],
    requirements: ["APIs REST", "Seguridad básica"],
    tags: ["autenticacion","jwt","sesiones","oauth","seguridad"],
    path: "cursos/autenticacion/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de la Autenticación",
              path: "cursos/autenticacion/modulo-01/index.html",
              lessons: [
                {
                  id: "autenticacion-vs-autorizacion",
                  title: "Autenticación vs Autorización",
                  path: "cursos/autenticacion/modulo-01/autenticacion-vs-autorizacion.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "cookies-y-su-rol",
                  title: "Cookies y su rol en la web",
                  path: "cursos/autenticacion/modulo-01/cookies-y-su-rol.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "hashing-vs-encriptacion",
                  title: "Hashing vs encriptación",
                  path: "cursos/autenticacion/modulo-01/hashing-vs-encriptacion.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "identidad-y-estados-de-sesion",
                  title: "Identidad y estados de sesión",
                  path: "cursos/autenticacion/modulo-01/identidad-y-estados-de-sesion.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "modelo-de-amenazas-login",
                  title: "El modelo de amenazas del login",
                  path: "cursos/autenticacion/modulo-01/modelo-de-amenazas-login.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Registro y Login",
              path: "cursos/autenticacion/modulo-02/index.html",
              lessons: [
                {
                  id: "hashing-con-bcrypt",
                  title: "Hashing con bcrypt y password_hash",
                  path: "cursos/autenticacion/modulo-02/hashing-con-bcrypt.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "login-y-verificacion",
                  title: "Login y verificación de credenciales",
                  path: "cursos/autenticacion/modulo-02/login-y-verificacion.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "modelo-de-usuario-y-rol",
                  title: "Modelo de usuario y rol básico",
                  path: "cursos/autenticacion/modulo-02/modelo-de-usuario-y-rol.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "registro-y-validacion",
                  title: "Registro y validación de datos",
                  path: "cursos/autenticacion/modulo-02/registro-y-validacion.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "restablecimiento-de-contrasena",
                  title: "Restablecimiento de contraseña",
                  path: "cursos/autenticacion/modulo-02/restablecimiento-de-contrasena.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Sesiones del lado servidor",
              path: "cursos/autenticacion/modulo-03/index.html",
              lessons: [
                {
                  id: "cierre-de-sesion-y-revocacion",
                  title: "Cierre de sesión y revocación",
                  path: "cursos/autenticacion/modulo-03/cierre-de-sesion-y-revocacion.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "expiracion-y-renovacion",
                  title: "Expiración y renovación",
                  path: "cursos/autenticacion/modulo-03/expiracion-y-renovacion.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proteccion-de-la-cookie-de-sesion",
                  title: "Protección de la cookie de sesión",
                  path: "cursos/autenticacion/modulo-03/proteccion-de-la-cookie-de-sesion.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "sesiones-en-bd-y-redis",
                  title: "Sesiones en Bases de Datos y Redis",
                  path: "cursos/autenticacion/modulo-03/sesiones-en-bd-y-redis.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "sesiones-y-almacenamiento",
                  title: "Sesiones y almacenamiento",
                  path: "cursos/autenticacion/modulo-03/sesiones-y-almacenamiento.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-04",
              title: "Módulo 4 · JWT",
              path: "cursos/autenticacion/modulo-04/index.html",
              lessons: [
                {
                  id: "access-tokens-y-expiracion",
                  title: "Access tokens y expiración",
                  path: "cursos/autenticacion/modulo-04/access-tokens-y-expiracion.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "almacenamiento-seguro-en-el-cliente",
                  title: "Almacenamiento seguro en el cliente",
                  path: "cursos/autenticacion/modulo-04/almacenamiento-seguro-en-el-cliente.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "firmando-tokens-hs256-rs256",
                  title: "Firmando tokens: HS256 y RS256",
                  path: "cursos/autenticacion/modulo-04/firmando-tokens-hs256-rs256.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "que-es-un-jwt",
                  title: "¿Qué es un JWT y sus partes?",
                  path: "cursos/autenticacion/modulo-04/que-es-un-jwt.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "refresh-tokens-y-rotacion",
                  title: "Refresh tokens y rotación",
                  path: "cursos/autenticacion/modulo-04/refresh-tokens-y-rotacion.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-05",
              title: "Módulo 5 · Autorización y RBAC",
              path: "cursos/autenticacion/modulo-05/index.html",
              lessons: [
                {
                  id: "middleware-de-autorizacion",
                  title: "Middleware de autorización",
                  path: "cursos/autenticacion/modulo-05/middleware-de-autorizacion.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "permisos-y-claims",
                  title: "Permisos y claims",
                  path: "cursos/autenticacion/modulo-05/permisos-y-claims.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "protegiendo-rutas-y-funciones",
                  title: "Protegiendo rutas y funciones",
                  path: "cursos/autenticacion/modulo-05/protegiendo-rutas-y-funciones.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "roles-de-usuario",
                  title: "Roles de usuario",
                  path: "cursos/autenticacion/modulo-05/roles-de-usuario.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-06",
              title: "Módulo 6 · OAuth 2.0 y OIDC",
              path: "cursos/autenticacion/modulo-06/index.html",
              lessons: [
                {
                  id: "authorization-code-flow",
                  title: "Authorization code flow",
                  path: "cursos/autenticacion/modulo-06/authorization-code-flow.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integrando-un-proveedor-externo",
                  title: "Integrando un proveedor externo",
                  path: "cursos/autenticacion/modulo-06/integrando-un-proveedor-externo.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "oauth-actores-y-flujos",
                  title: "OAuth: actores y flujos",
                  path: "cursos/autenticacion/modulo-06/oauth-actores-y-flujos.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "openid-connect-id-tokens",
                  title: "OpenID Connect e id tokens",
                  path: "cursos/autenticacion/modulo-06/openid-connect-id-tokens.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "scopes-y-consentimiento",
                  title: "Scopes y consentimiento",
                  path: "cursos/autenticacion/modulo-06/scopes-y-consentimiento.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "seguridad",
    title: "Seguridad Backend",
    slug: "seguridad",
    level: "avanzado",
    category: "seguridad",
    techs: ["OWASP", "Injection", "Criptografía"],
    duration: "8 semanas",
    lessons: 33,
    icon: "🛡️",
    description: "Protege tu backend: SQL Injection, XSS, CSRF, CORS, manejo de secretos, rate limiting y las vulnerabilidades OWASP más críticas.",
    objectives: ["Conocer y prevenir vulnerabilidades", "Escribir código seguro"],
    requirements: ["Autenticación y Autorización"],
    tags: ["seguridad","owasp","pentesting","hardening"],
    path: "cursos/seguridad/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Modelo de Amenazas",
              path: "cursos/seguridad/modulo-01/index.html",
              lessons: [
                {
                  id: "minimo-privilegio-y-defensa-profunda",
                  title: "Mínimo privilegio y defensa profunda",
                  path: "cursos/seguridad/modulo-01/minimo-privilegio-y-defensa-profunda.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "modelado-de-amenazas",
                  title: "Modelado de amenazas",
                  path: "cursos/seguridad/modulo-01/modelado-de-amenazas.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "owasp-top-10",
                  title: "OWASP Top 10",
                  path: "cursos/seguridad/modulo-01/owasp-top-10.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "pilar-cia",
                  title: "La tríada CIA",
                  path: "cursos/seguridad/modulo-01/pilar-cia.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "superficies-de-ataque",
                  title: "Superficies de ataque",
                  path: "cursos/seguridad/modulo-01/superficies-de-ataque.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Inyecciones",
              path: "cursos/seguridad/modulo-02/index.html",
              lessons: [
                {
                  id: "consultas-preparadas",
                  title: "Consultas preparadas",
                  path: "cursos/seguridad/modulo-02/consultas-preparadas.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "explotando-una-consulta-vulnerable",
                  title: "Explotando una consulta vulnerable",
                  path: "cursos/seguridad/modulo-02/explotando-una-consulta-vulnerable.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "nosql-injection-mongodb",
                  title: "NoSQL Injection en MongoDB",
                  path: "cursos/seguridad/modulo-02/nosql-injection-mongodb.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "que-es-sql-injection",
                  title: "¿Qué es SQL Injection?",
                  path: "cursos/seguridad/modulo-02/que-es-sql-injection.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "validando-entrada-y-escapando-salida",
                  title: "Validando entrada y escapando salida",
                  path: "cursos/seguridad/modulo-02/validando-entrada-y-escapando-salida.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · XSS y CSRF",
              path: "cursos/seguridad/modulo-03/index.html",
              lessons: [
                {
                  id: "que-es-csrf",
                  title: "¿Qué es CSRF?",
                  path: "cursos/seguridad/modulo-03/que-es-csrf.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sanitizacion-y-escaping",
                  title: "Sanitización y escaping",
                  path: "cursos/seguridad/modulo-03/sanitizacion-y-escaping.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "security-headers-csp",
                  title: "Security headers y CSP",
                  path: "cursos/seguridad/modulo-03/security-headers-csp.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "tipos-de-xss",
                  title: "Tipos de XSS",
                  path: "cursos/seguridad/modulo-03/tipos-de-xss.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "tokens-csrf-y-cookies-samesite",
                  title: "Tokens CSRF y cookies SameSite",
                  path: "cursos/seguridad/modulo-03/tokens-csrf-y-cookies-samesite.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-04",
              title: "Módulo 4 · Criptografía",
              path: "cursos/seguridad/modulo-04/index.html",
              lessons: [
                {
                  id: "cifrado-simetrico-y-asimetrico",
                  title: "Cifrado simétrico y asimétrico",
                  path: "cursos/seguridad/modulo-04/cifrado-simetrico-y-asimetrico.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "firmas-digitales-y-hmac",
                  title: "Firmas digitales y HMAC",
                  path: "cursos/seguridad/modulo-04/firmas-digitales-y-hmac.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "funciones-hash-bcrypt-argon2",
                  title: "Funciones hash: bcrypt y argon2",
                  path: "cursos/seguridad/modulo-04/funciones-hash-bcrypt-argon2.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "gestion-segura-de-secretos",
                  title: "Gestión segura de secretos",
                  path: "cursos/seguridad/modulo-04/gestion-segura-de-secretos.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "tls-https-y-certificados",
                  title: "TLS, HTTPS y certificados",
                  path: "cursos/seguridad/modulo-04/tls-https-y-certificados.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-05",
              title: "Módulo 5 · Seguridad de APIs",
              path: "cursos/seguridad/modulo-05/index.html",
              lessons: [
                {
                  id: "autenticacion-y-autorizacion-por-capas",
                  title: "Autenticación y autorización por capas",
                  path: "cursos/seguridad/modulo-05/autenticacion-y-autorizacion-por-capas.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "cors-bien-configurado",
                  title: "CORS bien configurado",
                  path: "cursos/seguridad/modulo-05/cors-bien-configurado.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "logs-seguros",
                  title: "Logs seguros",
                  path: "cursos/seguridad/modulo-05/logs-seguros.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "rate-limiting",
                  title: "Rate limiting",
                  path: "cursos/seguridad/modulo-05/rate-limiting.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "validacion-estricta-de-entrada",
                  title: "Validación estricta de entrada",
                  path: "cursos/seguridad/modulo-05/validacion-estricta-de-entrada.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-06",
              title: "Módulo 6 · Hardening",
              path: "cursos/seguridad/modulo-06/index.html",
              lessons: [
                {
                  id: "actualizaciones-y-parches",
                  title: "Actualizaciones y parches",
                  path: "cursos/seguridad/modulo-06/actualizaciones-y-parches.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "configuracion-segura-servidor-web",
                  title: "Configuración segura del servidor web",
                  path: "cursos/seguridad/modulo-06/configuracion-segura-servidor-web.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "secretos-en-contenedores",
                  title: "Secretos en contenedores",
                  path: "cursos/seguridad/modulo-06/secretos-en-contenedores.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "usuarios-y-minimos-privilegios",
                  title: "Usuarios y mínimos privilegios",
                  path: "cursos/seguridad/modulo-06/usuarios-y-minimos-privilegios.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-07",
              title: "Módulo 7 · Auditoría",
              path: "cursos/seguridad/modulo-07/index.html",
              lessons: [
                {
                  id: "checklist-de-seguridad",
                  title: "Checklist de seguridad",
                  path: "cursos/seguridad/modulo-07/checklist-de-seguridad.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "monitorizacion-y-deteccion",
                  title: "Monitorización y detección",
                  path: "cursos/seguridad/modulo-07/monitorizacion-y-deteccion.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "pentesting-basico",
                  title: "Pentesting básico",
                  path: "cursos/seguridad/modulo-07/pentesting-basico.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "plan-de-respuesta-a-incidentes",
                  title: "Plan de respuesta a incidentes",
                  path: "cursos/seguridad/modulo-07/plan-de-respuesta-a-incidentes.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "git-github",
    title: "Git y GitHub",
    slug: "git-github",
    level: "basico",
    category: "git",
    techs: ["Git", "GitHub", "Colaboración"],
    duration: "4 semanas",
    lessons: 25,
    icon: "🐙",
    description: "Controla versiones de tu código: commits, branches, merge, rebase, pull requests y el flujo de trabajo profesional con Git y GitHub.",
    objectives: ["Dominar Git", "Colaborar con GitHub"],
    requirements: ["Ninguno"],
    tags: ["git","github","versionado"],
    path: "cursos/git-github/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de Git",
              path: "cursos/git-github/modulo-01/index.html",
              lessons: [
                {
                  id: "ciclo-de-vida-de-un-archivo",
                  title: "Ciclo de vida de un archivo",
                  path: "cursos/git-github/modulo-01/ciclo-de-vida-de-un-archivo.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "commits-buenos-y-mensajes",
                  title: "Commits buenos y mensajes",
                  path: "cursos/git-github/modulo-01/commits-buenos-y-mensajes.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "git-init-y-configuracion",
                  title: "git init y configuración",
                  path: "cursos/git-github/modulo-01/git-init-y-configuracion.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "que-es-git-github",
                  title: "¿Qué es Git y GitHub?",
                  path: "cursos/git-github/modulo-01/que-es-git-github.html",
                  duration: "9 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "staging-area-y-git-diff",
                  title: "Staging area y git diff",
                  path: "cursos/git-github/modulo-01/staging-area-y-git-diff.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Ramas y merges",
              path: "cursos/git-github/modulo-02/index.html",
              lessons: [
                {
                  id: "conflictos-y-como-resolverlos",
                  title: "Conflictos y cómo resolverlos",
                  path: "cursos/git-github/modulo-02/conflictos-y-como-resolverlos.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "crear-y-cambiar-ramas",
                  title: "Crear y cambiar de rama",
                  path: "cursos/git-github/modulo-02/crear-y-cambiar-ramas.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "git-merge-fusionando",
                  title: "git merge: fusionando trabajo",
                  path: "cursos/git-github/modulo-02/git-merge-fusionando.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "gitflow-y-estrategias",
                  title: "GitFlow y estrategias de flujo",
                  path: "cursos/git-github/modulo-02/gitflow-y-estrategias.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "ramas-por-que-y-para-que",
                  title: "Ramas: por qué y para qué",
                  path: "cursos/git-github/modulo-02/ramas-por-que-y-para-que.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · GitHub y remotos",
              path: "cursos/git-github/modulo-03/index.html",
              lessons: [
                {
                  id: "git-clone-y-pull",
                  title: "git clone y git pull",
                  path: "cursos/git-github/modulo-03/git-clone-y-pull.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "git-push-y-github",
                  title: "git push y GitHub",
                  path: "cursos/git-github/modulo-03/git-push-y-github.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "gitignore-y-archivos-grandes",
                  title: ".gitignore y archivos grandes",
                  path: "cursos/git-github/modulo-03/gitignore-y-archivos-grandes.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "ramas-remotas-tracking",
                  title: "Ramas remotas y tracking",
                  path: "cursos/git-github/modulo-03/ramas-remotas-tracking.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "remotos-y-git-remote",
                  title: "Remotos y git remote",
                  path: "cursos/git-github/modulo-03/remotos-y-git-remote.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-04",
              title: "Módulo 4 · Colaboración y PR",
              path: "cursos/git-github/modulo-04/index.html",
              lessons: [
                {
                  id: "forks-y-colaboradores",
                  title: "Forks y colaboradores",
                  path: "cursos/git-github/modulo-04/forks-y-colaboradores.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "issues-y-project-management",
                  title: "Issues y gestión de proyectos",
                  path: "cursos/git-github/modulo-04/issues-y-project-management.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "pull-requests",
                  title: "Pull requests",
                  path: "cursos/git-github/modulo-04/pull-requests.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "revisar-codigo-comments",
                  title: "Revisar código y comentarios",
                  path: "cursos/git-github/modulo-04/revisar-codigo-comments.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "trabajo-en-equipo-flujo",
                  title: "Trabajo en equipo y flujo diario",
                  path: "cursos/git-github/modulo-04/trabajo-en-equipo-flujo.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-05",
              title: "Módulo 5 · Git avanzado",
              path: "cursos/git-github/modulo-05/index.html",
              lessons: [
                {
                  id: "git-log-profundidad",
                  title: "git log en profundidad",
                  path: "cursos/git-github/modulo-05/git-log-profundidad.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "git-revert-y-reset",
                  title: "git revert y git reset",
                  path: "cursos/git-github/modulo-05/git-revert-y-reset.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "rebase-y-rewriting",
                  title: "Rebase y reescribir historia",
                  path: "cursos/git-github/modulo-05/rebase-y-rewriting.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "stash-y-worktrees",
                  title: "Stash y worktrees",
                  path: "cursos/git-github/modulo-05/stash-y-worktrees.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "tags-y-releases",
                  title: "Tags y releases",
                  path: "cursos/git-github/modulo-05/tags-y-releases.html",
                  duration: "10 min",
                  level: "basico",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "linux",
    title: "Linux y Terminal para Backend",
    slug: "linux",
    level: "basico",
    category: "sistemas",
    techs: ["Linux", "Bash", "SSH", "systemd"],
    duration: "5 semanas",
    lessons: 10,
    icon: "🐧",
    description: "Muévete con confianza en el servidor: filesystem, permisos, procesos, Bash, grep, curl, logs y administración básica de Linux.",
    objectives: ["Administrar un servidor Linux", "Usar la terminal con fluidez"],
    requirements: ["Ninguno"],
    tags: ["linux","bash","terminal","servidor"],
    path: "cursos/linux/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de Linux",
              path: "cursos/linux/modulo-01/index.html",
              lessons: [
                {
                  id: "apt-paquetes",
                  title: "Paquetes e instalación con apt",
                  path: "cursos/linux/modulo-01/apt-paquetes.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "distribuciones-linux",
                  title: "Distribuciones: Ubuntu, Debian y más",
                  path: "cursos/linux/modulo-01/distribuciones-linux.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "que-es-linux",
                  title: "¿Qué es Linux y por qué en el backend?",
                  path: "cursos/linux/modulo-01/que-es-linux.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "sistema-de-archivos",
                  title: "El sistema de archivos y su jerarquía",
                  path: "cursos/linux/modulo-01/sistema-de-archivos.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "usuarios-grupos-superusuario",
                  title: "Usuarios, grupos y superusuario",
                  path: "cursos/linux/modulo-01/usuarios-grupos-superusuario.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Navegación y archivos",
              path: "cursos/linux/modulo-02/index.html",
              lessons: [
                {
                  id: "chown-propietarios-y-grupos",
                  title: "Dueños de archivos: chown",
                  path: "cursos/linux/modulo-02/chown-propietarios-y-grupos.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "crear-archivos-y-directorios",
                  title: "Crear archivos y directorios",
                  path: "cursos/linux/modulo-02/crear-archivos-y-directorios.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "enlaces-y-wildcards",
                  title: "Enlaces simbólicos y comodines",
                  path: "cursos/linux/modulo-02/enlaces-y-wildcards.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "ls-cd-pwd",
                  title: "Navega con ls, cd y pwd",
                  path: "cursos/linux/modulo-02/ls-cd-pwd.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                },
                {
                  id: "permisos-rwx-chmod",
                  title: "Permisos rwx y chmod",
                  path: "cursos/linux/modulo-02/permisos-rwx-chmod.html",
                  duration: "8 min",
                  level: "basico",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "arquitectura",
    title: "Arquitectura de Software",
    slug: "arquitectura",
    level: "avanzado",
    category: "arquitectura",
    techs: ["MVC", "Clean", "Hexagonal", "DDD"],
    duration: "7 semanas",
    lessons: 32,
    icon: "🏗️",
    description: "Diseña sistemas mantenibles: monolito, capas, MVC, Service Layer, Repository, DI, SOLID, Clean Architecture y Hexagonal Architecture.",
    objectives: ["Diseñar arquitecturas limpias", "Aplicar SOLID en la práctica"],
    requirements: ["Programación para Backend"],
    tags: ["arquitectura","mvc","clean","solid","patrones"],
    path: "cursos/arquitectura/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de arquitectura",
              path: "cursos/arquitectura/modulo-01/index.html",
              lessons: [
                {
                  id: "arquitectura-m1-l5",
                  title: "Documentando decisiones con ADRs",
                  path: "cursos/arquitectura/modulo-01/adr-documentando-decisiones.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m1-l2",
                  title: "Requisitos y atributos de calidad",
                  path: "cursos/arquitectura/modulo-01/atributos-de-calidad.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m1-l4",
                  title: "Decisiones y trade-offs",
                  path: "cursos/arquitectura/modulo-01/decisiones-y-trade-offs.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m1-l1",
                  title: "¿Qué es arquitectura de software?",
                  path: "cursos/arquitectura/modulo-01/que-es-arquitectura-software.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m1-l3",
                  title: "El rol del arquitecto en el equipo",
                  path: "cursos/arquitectura/modulo-01/rol-del-arquitecto.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Estilos arquitectónicos",
              path: "cursos/arquitectura/modulo-02/index.html",
              lessons: [
                {
                  id: "arquitectura-m2-l3",
                  title: "Arquitectura en capas",
                  path: "cursos/arquitectura/modulo-02/arquitectura-en-capas.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m2-l4",
                  title: "Cliente-servidor y aplicaciones web",
                  path: "cursos/arquitectura/modulo-02/cliente-servidor-y-web.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m2-l1",
                  title: "Estilo monolítico",
                  path: "cursos/arquitectura/modulo-02/estilo-monolitico.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m2-l5",
                  title: "Módulos, paquetes y boundaries",
                  path: "cursos/arquitectura/modulo-02/modulos-paquetes-y-boundaries.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m2-l2",
                  title: "Monolito vs microservicios",
                  path: "cursos/arquitectura/modulo-02/monolito-vs-microservicios.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Patrones arquitectónicos",
              path: "cursos/arquitectura/modulo-03/index.html",
              lessons: [
                {
                  id: "arquitectura-m3-l5",
                  title: "El diagrama de dependencias",
                  path: "cursos/arquitectura/modulo-03/diagrama-de-dependencias.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m3-l4",
                  title: "Inyección de dependencias",
                  path: "cursos/arquitectura/modulo-03/inyeccion-de-dependencias.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m3-l1",
                  title: "MVC en la práctica",
                  path: "cursos/arquitectura/modulo-03/mvc-en-la-practica.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m3-l3",
                  title: "Repository y acceso a datos",
                  path: "cursos/arquitectura/modulo-03/repository-y-acceso-a-datos.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m3-l2",
                  title: "Service Layer",
                  path: "cursos/arquitectura/modulo-03/service-layer.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-04",
              title: "Módulo 4 · Principios de diseño",
              path: "cursos/arquitectura/modulo-04/index.html",
              lessons: [
                {
                  id: "arquitectura-m4-l1",
                  title: "Acoplamiento y cohesión",
                  path: "cursos/arquitectura/modulo-04/acoplamiento-y-cohesion.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m4-l4",
                  title: "DRY, KISS y YAGNI",
                  path: "cursos/arquitectura/modulo-04/dry-kiss-yagni.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m4-l5",
                  title: "Olores de diseño y deuda técnica",
                  path: "cursos/arquitectura/modulo-04/olores-de-diseno.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m4-l2",
                  title: "Principios SOLID",
                  path: "cursos/arquitectura/modulo-04/solid-principios.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m4-l3",
                  title: "SRP en el mundo real",
                  path: "cursos/arquitectura/modulo-04/srp-en-el-mundo-real.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-05",
              title: "Módulo 5 · Clean Architecture",
              path: "cursos/arquitectura/modulo-05/index.html",
              lessons: [
                {
                  id: "arquitectura-m5-l2",
                  title: "Las capas de Clean Architecture",
                  path: "cursos/arquitectura/modulo-05/capas-de-clean-architecture.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m5-l3",
                  title: "Casos de uso y entidades",
                  path: "cursos/arquitectura/modulo-05/casos-de-uso-y-entidades.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m5-l4",
                  title: "Conectando la infraestructura",
                  path: "cursos/arquitectura/modulo-05/conectando-la-infraestructura.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m5-l1",
                  title: "La regla de dependencia",
                  path: "cursos/arquitectura/modulo-05/regla-de-dependencia.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-06",
              title: "Módulo 6 · Hexagonal y DDD",
              path: "cursos/arquitectura/modulo-06/index.html",
              lessons: [
                {
                  id: "arquitectura-m6-l3",
                  title: "Agregados y value objects",
                  path: "cursos/arquitectura/modulo-06/agregados-y-value-objects.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m6-l4",
                  title: "Bounded contexts",
                  path: "cursos/arquitectura/modulo-06/bounded-contexts.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m6-l2",
                  title: "DDD: modelado táctico",
                  path: "cursos/arquitectura/modulo-06/ddd-modelado-tactico.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m6-l1",
                  title: "Arquitectura hexagonal: puertos y adaptadores",
                  path: "cursos/arquitectura/modulo-06/hexagonal-puertos-adaptadores.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-07",
              title: "Módulo 7 · En la práctica",
              path: "cursos/arquitectura/modulo-07/index.html",
              lessons: [
                {
                  id: "arquitectura-m7-l4",
                  title: "Comunicando decisiones al equipo",
                  path: "cursos/arquitectura/modulo-07/comunicando-decisiones-al-equipo.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m7-l3",
                  title: "De monólito a módulos",
                  path: "cursos/arquitectura/modulo-07/de-monolito-a-modulos.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m7-l2",
                  title: "Estrategias de evolución",
                  path: "cursos/arquitectura/modulo-07/estrategias-de-evolucion.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "arquitectura-m7-l1",
                  title: "Refactoring de arquitectura",
                  path: "cursos/arquitectura/modulo-07/refactoring-de-arquitectura.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "patrones",
    title: "Patrones de Diseño",
    slug: "patrones",
    level: "avanzado",
    category: "patrones",
    techs: ["GoF", "Repository", "DI"],
    duration: "5 semanas",
    lessons: 27,
    icon: "🧩",
    description: "Singleton, Factory, Builder, Strategy, Observer, Repository, Service, CQRS y los patrones que todo backend senior conoce.",
    objectives: ["Aplicar patrones correctamente", "Reconocer problemas y soluciones"],
    requirements: ["Arquitectura de Software"],
    tags: ["patrones","gof","diseno","cqrs"],
    path: "cursos/patrones/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de patrones",
              path: "cursos/patrones/modulo-01/index.html",
              lessons: [
                {
                  id: "patrones-m1-l2",
                  title: "El catálogo GOF",
                  path: "cursos/patrones/modulo-01/catalogo-gof.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m1-l4",
                  title: "Aprender patrones con cabeza",
                  path: "cursos/patrones/modulo-01/patrones-con-cabeza.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m1-l3",
                  title: "Patrones, principios y arquitectura",
                  path: "cursos/patrones/modulo-01/patrones-principios-arquitectura.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m1-l1",
                  title: "¿Qué es un patrón?",
                  path: "cursos/patrones/modulo-01/que-es-un-patron.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Patrones creacionales",
              path: "cursos/patrones/modulo-02/index.html",
              lessons: [
                {
                  id: "patrones-m2-l3",
                  title: "Abstract Factory",
                  path: "cursos/patrones/modulo-02/abstract-factory.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m2-l4",
                  title: "Builder",
                  path: "cursos/patrones/modulo-02/builder.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m2-l5",
                  title: "Eligiendo el patrón creacional",
                  path: "cursos/patrones/modulo-02/eligiendo-patron-creacional.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m2-l2",
                  title: "Factory Method",
                  path: "cursos/patrones/modulo-02/factory-method.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m2-l1",
                  title: "Singleton",
                  path: "cursos/patrones/modulo-02/singleton.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Patrones estructurales",
              path: "cursos/patrones/modulo-03/index.html",
              lessons: [
                {
                  id: "patrones-m3-l1",
                  title: "Adapter",
                  path: "cursos/patrones/modulo-03/adapter.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m3-l5",
                  title: "Composite",
                  path: "cursos/patrones/modulo-03/composite.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m3-l4",
                  title: "Decorator",
                  path: "cursos/patrones/modulo-03/decorator.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m3-l2",
                  title: "Facade",
                  path: "cursos/patrones/modulo-03/facade.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m3-l3",
                  title: "Proxy",
                  path: "cursos/patrones/modulo-03/proxy.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-04",
              title: "Módulo 4 · Patrones de comportamiento",
              path: "cursos/patrones/modulo-04/index.html",
              lessons: [
                {
                  id: "patrones-m4-l3",
                  title: "Command",
                  path: "cursos/patrones/modulo-04/command.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m4-l1",
                  title: "Observer y eventos",
                  path: "cursos/patrones/modulo-04/observer-y-eventos.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m4-l5",
                  title: "State",
                  path: "cursos/patrones/modulo-04/state.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m4-l2",
                  title: "Strategy",
                  path: "cursos/patrones/modulo-04/strategy.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m4-l4",
                  title: "Template Method",
                  path: "cursos/patrones/modulo-04/template-method.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-05",
              title: "Módulo 5 · Patrones de backend",
              path: "cursos/patrones/modulo-05/index.html",
              lessons: [
                {
                  id: "patrones-m5-l3",
                  title: "DTO y objetos de transferencia",
                  path: "cursos/patrones/modulo-05/dto-y-objetos-de-transferencia.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m5-l1",
                  title: "Repository y la capa de datos",
                  path: "cursos/patrones/modulo-05/repository-y-capa-de-datos.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m5-l2",
                  title: "Service Layer en acción",
                  path: "cursos/patrones/modulo-05/service-layer-en-accion.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m5-l4",
                  title: "Unit of Work y transacciones",
                  path: "cursos/patrones/modulo-05/unit-of-work-y-transacciones.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-06",
              title: "Módulo 6 · Patrones modernos",
              path: "cursos/patrones/modulo-06/index.html",
              lessons: [
                {
                  id: "patrones-m6-l4",
                  title: "Antipatrones clásicos",
                  path: "cursos/patrones/modulo-06/antipatrones-clasicos.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m6-l2",
                  title: "CQRS: lectura y escritura",
                  path: "cursos/patrones/modulo-06/cqrs-lectura-escritura.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m6-l1",
                  title: "Dependency Injection",
                  path: "cursos/patrones/modulo-06/dependency-injection.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "patrones-m6-l3",
                  title: "Event-driven y mensajería",
                  path: "cursos/patrones/modulo-06/event-driven-y-mensajeria.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "testing",
    title: "Testing Backend",
    slug: "testing",
    level: "avanzado",
    category: "testing",
    techs: ["Unit", "Integration", "E2E"],
    duration: "5 semanas",
    lessons: 29,
    icon: "🧪",
    description: "Unit testing, integration testing, E2E, mocks, stubs, fixtures, cobertura y pruebas automatizadas para tu backend.",
    objectives: ["Escribir tests de calidad", "Automatizar las pruebas"],
    requirements: ["APIs REST", "Arquitectura"],
    tags: ["testing","unit","integration","calidad"],
    path: "cursos/testing/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos del Testing",
              path: "cursos/testing/modulo-01/index.html",
              lessons: [
                {
                  id: "testing-m1-l4",
                  title: "Ciclo de vida de un test",
                  path: "cursos/testing/modulo-01/ciclo-de-vida-de-un-test.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m1-l5",
                  title: "Organizando los tests",
                  path: "cursos/testing/modulo-01/organizando-tests.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m1-l2",
                  title: "La pirámide de testing",
                  path: "cursos/testing/modulo-01/piramide-de-testing.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m1-l1",
                  title: "¿Qué es el testing?",
                  path: "cursos/testing/modulo-01/que-es-testing.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m1-l3",
                  title: "Tipos de pruebas",
                  path: "cursos/testing/modulo-01/tipos-de-pruebas.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Unit Testing",
              path: "cursos/testing/modulo-02/index.html",
              lessons: [
                {
                  id: "testing-m2-l2",
                  title: "Assertions y expectativas",
                  path: "cursos/testing/modulo-02/assertions-y-expectativas.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m2-l5",
                  title: "Dobles en práctica",
                  path: "cursos/testing/modulo-02/dobles-en-practica.html",
                  duration: "13 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m2-l3",
                  title: "Mocks, stubs y spies",
                  path: "cursos/testing/modulo-02/mocks-stubs-y-spies.html",
                  duration: "15 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m2-l1",
                  title: "Primer test con PHPUnit",
                  path: "cursos/testing/modulo-02/primer-test-phpunit.html",
                  duration: "14 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m2-l4",
                  title: "Testeando excepciones",
                  path: "cursos/testing/modulo-02/testeando-excepciones.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Tests de Integración",
              path: "cursos/testing/modulo-03/index.html",
              lessons: [
                {
                  id: "testing-m3-l4",
                  title: "Postgres con contenedores",
                  path: "cursos/testing/modulo-03/banco-postgres-y-contenedores.html",
                  duration: "15 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m3-l5",
                  title: "Pruebas contractuales",
                  path: "cursos/testing/modulo-03/pruebas-contractuales.html",
                  duration: "13 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m3-l2",
                  title: "Test data, fixtures y seeds",
                  path: "cursos/testing/modulo-03/test-data-fixtures-y-seeds.html",
                  duration: "14 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m3-l1",
                  title: "Testing de bases de datos",
                  path: "cursos/testing/modulo-03/testing-bases-de-datos.html",
                  duration: "16 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m3-l3",
                  title: "Testing HTTP y servicios externos",
                  path: "cursos/testing/modulo-03/testing-http-y-servicios-externos.html",
                  duration: "15 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-04",
              title: "Módulo 4 · Pruebas End-to-End",
              path: "cursos/testing/modulo-04/index.html",
              lessons: [
                {
                  id: "testing-m4-l3",
                  title: "E2E con Playwright sobre la API",
                  path: "cursos/testing/modulo-04/e2e-con-playwright-api.html",
                  duration: "13 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m4-l2",
                  title: "Flujos completos de API",
                  path: "cursos/testing/modulo-04/flujos-completos-api.html",
                  duration: "14 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m4-l4",
                  title: "Pruebas E2E en CI",
                  path: "cursos/testing/modulo-04/pruebas-e2e-en-ci.html",
                  duration: "14 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m4-l1",
                  title: "Supertest para tu API",
                  path: "cursos/testing/modulo-04/supertest-api.html",
                  duration: "14 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-05",
              title: "Módulo 5 · TDD y Buenas Prácticas",
              path: "cursos/testing/modulo-05/index.html",
              lessons: [
                {
                  id: "testing-m5-l4",
                  title: "Casos borde y errores",
                  path: "cursos/testing/modulo-05/casos-borde-y-errores.html",
                  duration: "13 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m5-l1",
                  title: "¿Qué es TDD?",
                  path: "cursos/testing/modulo-05/que-es-tdd.html",
                  duration: "13 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m5-l2",
                  title: "Red, Green, Refactor",
                  path: "cursos/testing/modulo-05/red-green-refactor.html",
                  duration: "15 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m5-l3",
                  title: "TDD aplicado a una API REST",
                  path: "cursos/testing/modulo-05/tdd-en-api-rest.html",
                  duration: "16 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m5-l5",
                  title: "TDD para corregir bugs",
                  path: "cursos/testing/modulo-05/tdd-para-corregir-bugs.html",
                  duration: "14 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-06",
              title: "Módulo 6 · Métricas y CI/CD",
              path: "cursos/testing/modulo-06/index.html",
              lessons: [
                {
                  id: "testing-m6-l1",
                  title: "Cobertura de código",
                  path: "cursos/testing/modulo-06/cobertura-de-codigo.html",
                  duration: "13 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m6-l2",
                  title: "Detectando regresiones",
                  path: "cursos/testing/modulo-06/detectando-regresiones.html",
                  duration: "13 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m6-l4",
                  title: "Tests en GitHub Actions",
                  path: "cursos/testing/modulo-06/integracion-con-github-actions.html",
                  duration: "14 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m6-l5",
                  title: "Tests en GitLab CI",
                  path: "cursos/testing/modulo-06/integracion-con-gitlab-ci.html",
                  duration: "13 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "testing-m6-l3",
                  title: "Limpiando tests inestables",
                  path: "cursos/testing/modulo-06/limpiando-tests-inestables.html",
                  duration: "13 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "docker",
    title: "Docker",
    slug: "docker",
    level: "intermedio",
    category: "docker",
    techs: ["Docker", "Compose", "Contenedores"],
    duration: "5 semanas",
    lessons: 28,
    icon: "🐳",
    description: "Empaqueta, distribuye y ejecuta tu backend en contenedores: imágenes, Dockerfile, volúmenes, redes y Docker Compose.",
    objectives: ["Contenerizar cualquier backend", "Orquestar con Compose"],
    requirements: ["Linux básico", "Un lenguaje de backend"],
    tags: ["docker","contenedores","devops"],
    path: "cursos/docker/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de Contenedores",
              path: "cursos/docker/modulo-01/index.html",
              lessons: [
                {
                  id: "docker-m1-l2",
                  title: "Contenedor vs máquina virtual",
                  path: "cursos/docker/modulo-01/contenedor-vs-maquina-virtual.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m1-l5",
                  title: "El ciclo de vida",
                  path: "cursos/docker/modulo-01/el-ciclo-de-vida.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m1-l3",
                  title: "Instalando Docker",
                  path: "cursos/docker/modulo-01/instalando-docker.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m1-l6",
                  title: "Limpieza y buenas prácticas",
                  path: "cursos/docker/modulo-01/limpieza-y-buenas-practicas.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m1-l4",
                  title: "Primeros comandos",
                  path: "cursos/docker/modulo-01/primeros-comandos.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m1-l1",
                  title: "¿Qué es un contenedor?",
                  path: "cursos/docker/modulo-01/que-es-un-contenedor.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Imágenes y Dockerfile",
              path: "cursos/docker/modulo-02/index.html",
              lessons: [
                {
                  id: "docker-m2-l2",
                  title: "Las capas de la imagen",
                  path: "cursos/docker/modulo-02/capas-de-imagen.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m2-l3",
                  title: "El build context y .dockerignore",
                  path: "cursos/docker/modulo-02/dockerignore.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m2-l4",
                  title: "Multi-stage builds",
                  path: "cursos/docker/modulo-02/multi-stage-builds.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m2-l5",
                  title: "Optimizando imágenes",
                  path: "cursos/docker/modulo-02/optimizando-imagenes.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m2-l6",
                  title: "Publicando en el registry",
                  path: "cursos/docker/modulo-02/publicando-en-el-registry.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m2-l1",
                  title: "¿Qué es un Dockerfile?",
                  path: "cursos/docker/modulo-02/que-es-un-dockerfile.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Volúmenes y Redes",
              path: "cursos/docker/modulo-03/index.html",
              lessons: [
                {
                  id: "docker-m3-l4",
                  title: "Bases de datos con volúmenes",
                  path: "cursos/docker/modulo-03/bases-de-datos-con-volumenes.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m3-l3",
                  title: "Bind mounts",
                  path: "cursos/docker/modulo-03/bind-mounts.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m3-l6",
                  title: "Comunicación entre contenedores",
                  path: "cursos/docker/modulo-03/comunicacion-entre-contenedores.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m3-l1",
                  title: "La persistencia de datos",
                  path: "cursos/docker/modulo-03/persistencia-de-datos.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m3-l5",
                  title: "Redes de Docker",
                  path: "cursos/docker/modulo-03/redes-de-docker.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m3-l2",
                  title: "Volúmenes nombrados",
                  path: "cursos/docker/modulo-03/volumenes-nombrados.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-04",
              title: "Módulo 4 · Docker Compose",
              path: "cursos/docker/modulo-04/index.html",
              lessons: [
                {
                  id: "docker-m4-l6",
                  title: "Entornos de desarrollo",
                  path: "cursos/docker/modulo-04/entornos-de-desarrollo.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m4-l5",
                  title: "Perfiles y debug",
                  path: "cursos/docker/modulo-04/perfiles-y-debug.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m4-l1",
                  title: "¿Qué es Docker Compose?",
                  path: "cursos/docker/modulo-04/que-es-docker-compose.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m4-l2",
                  title: "Servicios y dependencias",
                  path: "cursos/docker/modulo-04/servicios-y-dependencias.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m4-l3",
                  title: "Variables de entorno",
                  path: "cursos/docker/modulo-04/variables-de-entorno.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m4-l4",
                  title: "Volúmenes y redes en Compose",
                  path: "cursos/docker/modulo-04/volumenes-y-redes-en-compose.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-05",
              title: "Módulo 5 · Docker en el Backend",
              path: "cursos/docker/modulo-05/index.html",
              lessons: [
                {
                  id: "docker-m5-l2",
                  title: "API Node con Postgres",
                  path: "cursos/docker/modulo-05/api-node-con-postgres.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m5-l1",
                  title: "Dockerizando una API Node",
                  path: "cursos/docker/modulo-05/dockerizando-una-api-node.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m5-l4",
                  title: "Healthchecks y arranque",
                  path: "cursos/docker/modulo-05/healthchecks-y-arranque.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "docker-m5-l3",
                  title: "Redis como caché",
                  path: "cursos/docker/modulo-05/redis-como-cache.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "devops",
    title: "DevOps para Backend",
    slug: "devops",
    level: "avanzado",
    category: "devops",
    techs: ["CI/CD", "GitHub Actions", "Nginx"],
    duration: "6 semanas",
    lessons: 19,
    icon: "⚙️",
    description: "CI/CD con GitHub Actions, deployment, reverse proxy con Nginx, SSL, entornos variables, secretos y monitoreo.",
    objectives: ["Publicar con CI/CD", "Operar backend en producción"],
    requirements: ["Docker", "Git", "Linux"],
    tags: ["devops","cicd","deployment","github-actions"],
    path: "cursos/devops/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Introducción a DevOps",
              path: "cursos/devops/modulo-01/index.html",
              lessons: [
                {
                  id: "automatizacion-y-herramientas",
                  title: "Automatización y herramientas",
                  path: "cursos/devops/modulo-01/automatizacion-y-herramientas.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "ciclo-de-vida-del-software",
                  title: "Ciclo de vida del software",
                  path: "cursos/devops/modulo-01/ciclo-de-vida-del-software.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "principios-y-cultura-devops",
                  title: "Principios y cultura DevOps",
                  path: "cursos/devops/modulo-01/principios-y-cultura-devops.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "que-es-devops",
                  title: "¿Qué es DevOps?",
                  path: "cursos/devops/modulo-01/que-es-devops.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · GitHub Actions",
              path: "cursos/devops/modulo-03/index.html",
              lessons: [
                {
                  id: "deploy-con-actions",
                  title: "Despliegue con Actions",
                  path: "cursos/devops/modulo-03/deploy-con-actions.html",
                  duration: "13 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "jobs-y-steps",
                  title: "Jobs, steps y runners",
                  path: "cursos/devops/modulo-03/jobs-y-steps.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "secrets-y-variables",
                  title: "Secrets y variables",
                  path: "cursos/devops/modulo-03/secrets-y-variables.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "tests-lint-en-ci",
                  title: "Tests y linting en CI",
                  path: "cursos/devops/modulo-03/tests-lint-en-ci.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "workflows-y-triggers",
                  title: "Workflows y triggers",
                  path: "cursos/devops/modulo-03/workflows-y-triggers.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-05",
              title: "Módulo 5 · Despliegue Continuo (CD)",
              path: "cursos/devops/modulo-05/index.html",
              lessons: [
                {
                  id: "estrategias-de-despliegue",
                  title: "Estrategias de despliegue",
                  path: "cursos/devops/modulo-05/estrategias-de-despliegue.html",
                  duration: "14 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "introduccion-despliegue-continuo",
                  title: "Introducción al despliegue continuo",
                  path: "cursos/devops/modulo-05/introduccion-despliegue-continuo.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "monitoreo-de-despliegues",
                  title: "Monitoreo de despliegues",
                  path: "cursos/devops/modulo-05/monitoreo-de-despliegues.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "rollbacks-y-reversiones",
                  title: "Rollbacks y reversiones",
                  path: "cursos/devops/modulo-05/rollbacks-y-reversiones.html",
                  duration: "15 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "variables-de-entorno",
                  title: "Variables de entorno en producción",
                  path: "cursos/devops/modulo-05/variables-de-entorno.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-06",
              title: "Módulo 6 · DevOps en el Backend",
              path: "cursos/devops/modulo-06/index.html",
              lessons: [
                {
                  id: "despliegue-api-con-nginx",
                  title: "Despliegue completo: API con Nginx",
                  path: "cursos/devops/modulo-06/despliegue-api-con-nginx.html",
                  duration: "16 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "infraestructura-como-codigo",
                  title: "Infraestructura como código",
                  path: "cursos/devops/modulo-06/infraestructura-como-codigo.html",
                  duration: "14 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "logs-y-monitoreo-basico",
                  title: "Logs y monitoreo básico",
                  path: "cursos/devops/modulo-06/logs-y-monitoreo-basico.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "reverse-proxy-con-nginx",
                  title: "Reverse proxy con Nginx",
                  path: "cursos/devops/modulo-06/reverse-proxy-con-nginx.html",
                  duration: "13 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "ssl-https-con-lets-encrypt",
                  title: "SSL y HTTPS con Let's Encrypt",
                  path: "cursos/devops/modulo-06/ssl-https-con-lets-encrypt.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    slug: "cloud",
    level: "avanzado",
    category: "cloud",
    techs: ["AWS", "Azure", "IaaS", "PaaS"],
    duration: "7 semanas",
    lessons: 16,
    icon: "☁️",
    description: "Conceptos cloud, IaaS / PaaS / SaaS, VPS, AWS, Azure, Google Cloud, serverless, networking y seguridad en la nube.",
    objectives: ["Desplegar backend en la nube", "Elegir el servicio cloud correcto"],
    requirements: ["Docker", "DevOps básico"],
    tags: ["cloud","aws","azure","iaas","paas","serverless"],
    path: "cursos/cloud/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos del Cloud",
              path: "cursos/cloud/modulo-01/index.html",
              lessons: [
                {
                  id: "cli-y-consolas-de-cada-proveedor",
                  title: "CLIs y consolas de cada proveedor",
                  path: "cursos/cloud/modulo-01/cli-y-consolas-de-cada-proveedor.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "modelos-de-servicio-iaas-paas-saas",
                  title: "Modelos de servicio: IaaS, PaaS, SaaS",
                  path: "cursos/cloud/modulo-01/modelos-de-servicio-iaas-paas-saas.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "que-es-la-nube",
                  title: "¿Qué es la nube? Por qué domina el Backend",
                  path: "cursos/cloud/modulo-01/que-es-la-nube.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "regiones-y-zonas-de-disponibilidad",
                  title: "Regiones y zonas de disponibilidad",
                  path: "cursos/cloud/modulo-01/regiones-y-zonas-de-disponibilidad.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "vps-vs-serverless",
                  title: "VPS vs Serverless",
                  path: "cursos/cloud/modulo-01/vps-vs-serverless.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Amazon Web Services (AWS)",
              path: "cursos/cloud/modulo-02/index.html",
              lessons: [
                {
                  id: "ec2-maquinas-virtuales",
                  title: "EC2: máquinas virtuales",
                  path: "cursos/cloud/modulo-02/ec2-maquinas-virtuales.html",
                  duration: "13 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "iam-y-seguridad",
                  title: "IAM y seguridad",
                  path: "cursos/cloud/modulo-02/iam-y-seguridad.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "intro-a-aws",
                  title: "Introducción a AWS",
                  path: "cursos/cloud/modulo-02/intro-a-aws.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "lambda-functions",
                  title: "Lambda: funciones serverless",
                  path: "cursos/cloud/modulo-02/lambda-functions.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "rds-bases-de-datos",
                  title: "RDS: bases de datos gestionadas",
                  path: "cursos/cloud/modulo-02/rds-bases-de-datos.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "s3-almacenamiento",
                  title: "S3: almacenamiento de archivos",
                  path: "cursos/cloud/modulo-02/s3-almacenamiento.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-06",
              title: "Módulo 6 · Costos y Estrategia",
              path: "cursos/cloud/modulo-06/index.html",
              lessons: [
                {
                  id: "capa-gratuita-y-alertas",
                  title: "Capa gratuita y alertas de gasto",
                  path: "cursos/cloud/modulo-06/capa-gratuita-y-alertas.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "despliegue-api-en-la-nube",
                  title: "Despliegue de una API con estrategia",
                  path: "cursos/cloud/modulo-06/despliegue-api-en-la-nube.html",
                  duration: "14 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "equivalencias-entre-proveedores",
                  title: "Equivalencias entre AWS, GCP y Azure",
                  path: "cursos/cloud/modulo-06/equivalencias-entre-proveedores.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "modelo-de-precios",
                  title: "Entender el modelo de precios",
                  path: "cursos/cloud/modulo-06/modelo-de-precios.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "optimizacion-de-costos",
                  title: "Optimización de costos",
                  path: "cursos/cloud/modulo-06/optimizacion-de-costos.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "redis",
    title: "Redis y Caching",
    slug: "redis",
    level: "avanzado",
    category: "redis",
    techs: ["Redis", "Cache", "Pub/Sub", "Queues"],
    duration: "4 semanas",
    lessons: 13,
    icon: "⚡",
    description: "Redis para caching, sesiones, rate limiting, queues y pub/sub: acelera tu backend de forma masiva.",
    objectives: ["Usar Redis como cache", "Modelar datos con estructuras Redis"],
    requirements: ["Un lenguaje de backend"],
    tags: ["redis","cache","pubsub","queue"],
    path: "cursos/redis/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Introducción a Redis",
              path: "cursos/redis/modulo-01/index.html",
              lessons: [
                {
                  id: "cliente-python-redis-py",
                  title: "Cliente Python: redis-py",
                  path: "cursos/redis/modulo-01/cliente-python-redis-py.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "instalacion-y-cli",
                  title: "Instalación y CLI",
                  path: "cursos/redis/modulo-01/instalacion-y-cli.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "que-es-redis",
                  title: "¿Qué es Redis?",
                  path: "cursos/redis/modulo-01/que-es-redis.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "tipos-de-datos",
                  title: "Tipos de datos",
                  path: "cursos/redis/modulo-01/tipos-de-datos.html",
                  duration: "13 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "ttl-y-expiracion",
                  title: "TTL y expiración",
                  path: "cursos/redis/modulo-01/ttl-y-expiracion.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Estructuras de Datos",
              path: "cursos/redis/modulo-02/index.html",
              lessons: [
                {
                  id: "casos-reales",
                  title: "Casos reales",
                  path: "cursos/redis/modulo-02/casos-reales.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "hashes-en-profundidad",
                  title: "Hashes en profundidad",
                  path: "cursos/redis/modulo-02/hashes-en-profundidad.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "lists-y-colas",
                  title: "Lists y colas",
                  path: "cursos/redis/modulo-02/lists-y-colas.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sets-y-pertenencia",
                  title: "Sets y pertenencia",
                  path: "cursos/redis/modulo-02/sets-y-pertenencia.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sorted-sets-y-rankings",
                  title: "Sorted sets y rankings",
                  path: "cursos/redis/modulo-02/sorted-sets-y-rankings.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Caché y Rendimiento",
              path: "cursos/redis/modulo-03/index.html",
              lessons: [
                {
                  id: "cache-aside",
                  title: "Cache-aside",
                  path: "cursos/redis/modulo-03/cache-aside.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "rate-limiting",
                  title: "Rate limiting",
                  path: "cursos/redis/modulo-03/rate-limiting.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sesiones-en-redis",
                  title: "Sesiones en Redis",
                  path: "cursos/redis/modulo-03/sesiones-en-redis.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "performance",
    title: "Performance y Optimización",
    slug: "performance",
    level: "experto",
    category: "performance",
    techs: ["Profiling", "Índices", "CDN"],
    duration: "5 semanas",
    lessons: 15,
    icon: "🚀",
    description: "Profiling, caching, consultas SQL, índices, paginación, connection pooling y optimización de APIs de alto tráfico.",
    objectives: ["Acelerar APIs", "Optimizar bases de datos"],
    requirements: ["SQL avanzado", "Redis"],
    tags: ["performance","optimizacion","profiling"],
    path: "cursos/performance/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Medir rendimiento",
              path: "cursos/performance/modulo-01/index.html",
              lessons: [
                {
                  id: "performance-m1-l4",
                  title: "Benchmarking y perfiles",
                  path: "cursos/performance/modulo-01/benchmarking-y-perfiles.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "performance-m1-l5",
                  title: "Identificar cuellos de botella",
                  path: "cursos/performance/modulo-01/cuellos-de-botalla.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "performance-m1-l1",
                  title: "¿Qué es performance?",
                  path: "cursos/performance/modulo-01/que-es-performance-backend.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "performance-m1-l2",
                  title: "SLO y presupuesto de rendimiento",
                  path: "cursos/performance/modulo-01/slo-y-presupuesto-de-rendimiento.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "performance-m1-l3",
                  title: "Pruebas de carga",
                  path: "cursos/performance/modulo-01/test-de-carga.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Optimización",
              path: "cursos/performance/modulo-02/index.html",
              lessons: [
                {
                  id: "performance-m2-l1",
                  title: "Caching y estrategias",
                  path: "cursos/performance/modulo-02/caching-estrategias.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "performance-m2-l3",
                  title: "Concurrencia y asincronía",
                  path: "cursos/performance/modulo-02/concurrencia-y-asincronia.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "performance-m2-l4",
                  title: "Optimizar APIs",
                  path: "cursos/performance/modulo-02/optimizacion-de-apis.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "performance-m2-l2",
                  title: "Optimizar bases de datos",
                  path: "cursos/performance/modulo-02/optimizacion-de-bases-de-datos.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "performance-m2-l5",
                  title: "Optimizar I/O",
                  path: "cursos/performance/modulo-02/optimizacion-de-io.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Escalabilidad y despliegue",
              path: "cursos/performance/modulo-03/index.html",
              lessons: [
                {
                  id: "performance-m3-l3",
                  title: "Bases de datos a escala",
                  path: "cursos/performance/modulo-03/bases-de-datos-a-escala.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "performance-m3-l4",
                  title: "CDN y edge caching",
                  path: "cursos/performance/modulo-03/cdny-edge-caching.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "performance-m3-l1",
                  title: "Escalado vertical vs horizontal",
                  path: "cursos/performance/modulo-03/escalado-vertical-vs-horizontal.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "performance-m3-l5",
                  title: "Estrategia integral",
                  path: "cursos/performance/modulo-03/estrategia-de-rendimiento.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "performance-m3-l2",
                  title: "Load balancing",
                  path: "cursos/performance/modulo-03/load-balancing.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "mensajeria",
    title: "Mensajería y Sistemas Asíncronos",
    slug: "mensajeria",
    level: "experto",
    category: "mensajeria",
    techs: ["Queues", "RabbitMQ", "Kafka", "Workers"],
    duration: "5 semanas",
    lessons: 15,
    icon: "📨",
    description: "Jobs, workers, queues, message brokers (RabbitMQ, Kafka), retries, dead-letter queues e idempotencia.",
    objectives: ["Procesar tareas en segundo plano", "Integrar RabbitMQ y Kafka"],
    requirements: ["Redis", "Arquitectura"],
    tags: ["mensajeria","queues","rabbitmq","kafka","async"],
    path: "cursos/mensajeria/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de mensajería",
              path: "cursos/mensajeria/modulo-01/index.html",
              lessons: [
                {
                  id: "mensajeria-m1-l3",
                  title: "Brokers de mensajes",
                  path: "cursos/mensajeria/modulo-01/brokers-de-mensajes.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "mensajeria-m1-l2",
                  title: "Colas vs Pub/Sub",
                  path: "cursos/mensajeria/modulo-01/colas-vs-pubsub.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "mensajeria-m1-l5",
                  title: "Garantías de entrega",
                  path: "cursos/mensajeria/modulo-01/garantias-de-entrega.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "mensajeria-m1-l1",
                  title: "Mensajería asíncrona",
                  path: "cursos/mensajeria/modulo-01/mensajeria-asincrona.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "mensajeria-m1-l4",
                  title: "Mensajes vs eventos",
                  path: "cursos/mensajeria/modulo-01/mensajes-y-eventos.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · RabbitMQ y colas",
              path: "cursos/mensajeria/modulo-02/index.html",
              lessons: [
                {
                  id: "mensajeria-m2-l5",
                  title: "Colas prioritarias y TTL",
                  path: "cursos/mensajeria/modulo-02/colas-prioritarias.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "mensajeria-m2-l4",
                  title: "Consumidor resiliente",
                  path: "cursos/mensajeria/modulo-02/consumidor-resiliente.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "mensajeria-m2-l2",
                  title: "Exchanges y routing",
                  path: "cursos/mensajeria/modulo-02/exchanges-y-routing.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "mensajeria-m2-l1",
                  title: "RabbitMQ: conceptos",
                  path: "cursos/mensajeria/modulo-02/rabbitmq-conceptos.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "mensajeria-m2-l3",
                  title: "Workers y prefetch",
                  path: "cursos/mensajeria/modulo-02/workers-y-prefetch.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Kafka y event streaming",
              path: "cursos/mensajeria/modulo-03/index.html",
              lessons: [
                {
                  id: "mensajeria-m3-l4",
                  title: "Consumer groups y rebalanceo",
                  path: "cursos/mensajeria/modulo-03/consumer-groups.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "mensajeria-m3-l5",
                  title: "Event sourcing y sagas",
                  path: "cursos/mensajeria/modulo-03/event-sourcing-y-sagas.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "mensajeria-m3-l1",
                  title: "Kafka: conceptos",
                  path: "cursos/mensajeria/modulo-03/kafka-conceptos.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "mensajeria-m3-l3",
                  title: "Particiones y claves",
                  path: "cursos/mensajeria/modulo-03/particiones-y-claves.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "mensajeria-m3-l2",
                  title: "Productores y consumidores",
                  path: "cursos/mensajeria/modulo-03/productores-y-consumidores.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "microservicios",
    title: "Microservicios",
    slug: "microservicios",
    level: "experto",
    category: "micro",
    techs: ["API Gateway", "Service Discovery"],
    duration: "6 semanas",
    lessons: 15,
    icon: "🧩",
    description: "Divide tu sistema en microservicios: bounded contexts, service discovery, API Gateway, comunicación por eventos y resiliencia.",
    objectives: ["Diseñar microservicios", "Comunicar servicios de forma robusta"],
    requirements: ["Arquitectura", "Docker", "Mensajería"],
    tags: ["microservicios","gateway","distribuido"],
    path: "cursos/microservicios/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de microservicios",
              path: "cursos/microservicios/modulo-01/index.html",
              lessons: [
                {
                  id: "microservicios-antipatrones",
                  title: "Antipatrones comunes",
                  path: "cursos/microservicios/modulo-01/antipatrones.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "microservicios-bounded-context",
                  title: "Bounded contexts",
                  path: "cursos/microservicios/modulo-01/bounded-context.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "microservicios-como-dividir-servicios",
                  title: "Cómo dividir servicios",
                  path: "cursos/microservicios/modulo-01/como-dividir-servicios.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "microservicios-monolito-vs-microservicios",
                  title: "Monolito vs microservicios",
                  path: "cursos/microservicios/modulo-01/monolito-vs-microservicios.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "microservicios-que-son-microservicios",
                  title: "¿Qué son los microservicios?",
                  path: "cursos/microservicios/modulo-01/que-son-microservicios.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Comunicación",
              path: "cursos/microservicios/modulo-02/index.html",
              lessons: [
                {
                  id: "microservicios-api-gateway",
                  title: "API Gateway",
                  path: "cursos/microservicios/modulo-02/api-gateway.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "microservicios-comunicacion-asincrona",
                  title: "Comunicación asíncrona",
                  path: "cursos/microservicios/modulo-02/comunicacion-asincrona.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "microservicios-comunicacion-sincrona",
                  title: "Comunicación síncrona",
                  path: "cursos/microservicios/modulo-02/comunicacion-sincrona.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "microservicios-contratos-y-versionado",
                  title: "Contratos y versionado",
                  path: "cursos/microservicios/modulo-02/contratos-y-versionado.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "microservicios-service-discovery",
                  title: "Service discovery",
                  path: "cursos/microservicios/modulo-02/service-discovery.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Datos y resiliencia",
              path: "cursos/microservicios/modulo-03/index.html",
              lessons: [
                {
                  id: "microservicios-bases-de-datos-por-servicio",
                  title: "Bases de datos por servicio",
                  path: "cursos/microservicios/modulo-03/bases-de-datos-por-servicio.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "microservicios-circuit-breaker",
                  title: "Circuit breaker",
                  path: "cursos/microservicios/modulo-03/circuit-breaker.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "microservicios-despliegue-de-microservicios",
                  title: "Despliegue de microservicios",
                  path: "cursos/microservicios/modulo-03/despliegue-de-microservicios.html",
                  duration: "13 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "microservicios-resiliencia-y-reintentos",
                  title: "Resiliencia y reintentos",
                  path: "cursos/microservicios/modulo-03/resiliencia-y-reintentos.html",
                  duration: "12 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "microservicios-sagas-y-transacciones",
                  title: "Sagas y transacciones distribuidas",
                  path: "cursos/microservicios/modulo-03/sagas-y-transacciones.html",
                  duration: "13 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "sistemas-distribuidos",
    title: "Sistemas Distribuidos",
    slug: "sistemas-distribuidos",
    level: "experto",
    category: "distribuidos",
    techs: ["CAP", "Replicación", "Consenso"],
    duration: "7 semanas",
    lessons: 15,
    icon: "🌐",
    description: "Nodos, latencia, consistencia, CAP, replicación, sharding, consenso, tolerancia a fallos y alta disponibilidad.",
    objectives: ["Entender los sistemas distribuidos", "Diseñar sistemas tolerantes a fallos"],
    requirements: ["Microservicios", "Sistemas"],
    tags: ["distribuido","cap","replicacion","sharding","consenso"],
    path: "cursos/sistemas-distribuidos/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos",
              path: "cursos/sistemas-distribuidos/modulo-01/index.html",
              lessons: [
                {
                  id: "sistemas-distribuidos-bases-de-la-comunicacion",
                  title: "Comunicación entre nodos",
                  path: "cursos/sistemas-distribuidos/modulo-01/bases-de-la-comunicacion.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sistemas-distribuidos-consistencia-eventual",
                  title: "Consistencia eventual",
                  path: "cursos/sistemas-distribuidos/modulo-01/consistencia-eventual.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sistemas-distribuidos-modelos-de-fallos",
                  title: "Modelos de fallo",
                  path: "cursos/sistemas-distribuidos/modulo-01/modelos-de-fallos.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sistemas-distribuidos-que-es-un-sistema-distribuido",
                  title: "¿Qué es un sistema distribuido?",
                  path: "cursos/sistemas-distribuidos/modulo-01/que-es-un-sistema-distribuido.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sistemas-distribuidos-teorema-cap",
                  title: "Teorema CAP",
                  path: "cursos/sistemas-distribuidos/modulo-01/teorema-cap.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Replicación y consistencia",
              path: "cursos/sistemas-distribuidos/modulo-02/index.html",
              lessons: [
                {
                  id: "sistemas-distribuidos-consenso-distribuido",
                  title: "Consenso distribuido",
                  path: "cursos/sistemas-distribuidos/modulo-02/consenso-distribuido.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sistemas-distribuidos-quorum-y-recuperacion",
                  title: "Quorum y recuperación",
                  path: "cursos/sistemas-distribuidos/modulo-02/quorum-y-recuperacion.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sistemas-distribuidos-relojes-vectoriales",
                  title: "Relojes vectoriales y versiones",
                  path: "cursos/sistemas-distribuidos/modulo-02/relojes-vectoriales.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sistemas-distribuidos-replicacion",
                  title: "Replicación de datos",
                  path: "cursos/sistemas-distribuidos/modulo-02/replicacion.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sistemas-distribuidos-transacciones-distribuidas",
                  title: "Transacciones distribuidas",
                  path: "cursos/sistemas-distribuidos/modulo-02/transacciones-distribuidas.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Escalabilidad y casos reales",
              path: "cursos/sistemas-distribuidos/modulo-03/index.html",
              lessons: [
                {
                  id: "sistemas-distribuidos-casos-kafka-cassandra",
                  title: "Casos: Kafka, Cassandra, Redis cluster",
                  path: "cursos/sistemas-distribuidos/modulo-03/casos-kafka-cassandra.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sistemas-distribuidos-clusteres-y-bloques",
                  title: "Clústeres y coordinación",
                  path: "cursos/sistemas-distribuidos/modulo-03/clusteres-y-bloques.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sistemas-distribuidos-diseñar-un-sistema-distribuido",
                  title: "Diseñar un sistema distribuido",
                  path: "cursos/sistemas-distribuidos/modulo-03/diseñar-un-sistema-distribuido.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sistemas-distribuidos-manejo-de-fallos-graceful",
                  title: "Manejo de fallos graceful",
                  path: "cursos/sistemas-distribuidos/modulo-03/manejo-de-fallos-graceful.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "sistemas-distribuidos-sharding-y-particionamiento",
                  title: "Sharding y particionamiento",
                  path: "cursos/sistemas-distribuidos/modulo-03/sharding-y-particionamiento.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "observabilidad",
    title: "Observabilidad",
    slug: "observabilidad",
    level: "avanzado",
    category: "observable",
    techs: ["Logs", "Métricas", "Tracing"],
    duration: "5 semanas",
    lessons: 15,
    icon: "📊",
    description: "Logs, métricas, tracing, monitoring, health checks, alertas y dashboards para conocer tu sistema por dentro.",
    objectives: ["Implementar logs y métricas", "Detectar problemas antes que el usuario"],
    requirements: ["DevOps"],
    tags: ["observabilidad","logs","tracing","monitoring","alertas"],
    path: "cursos/observabilidad/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos",
              path: "cursos/observabilidad/modulo-01/index.html",
              lessons: [
                {
                  id: "observabilidad-m1-l3",
                  title: "Logs estructurados",
                  path: "cursos/observabilidad/modulo-01/logs-estructurados.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "observabilidad-m1-l2",
                  title: "Los tres pilares",
                  path: "cursos/observabilidad/modulo-01/los-tres-pilares.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "observabilidad-m1-l4",
                  title: "Métricas",
                  path: "cursos/observabilidad/modulo-01/metricas.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "observabilidad-m1-l1",
                  title: "¿Qué es la observabilidad?",
                  path: "cursos/observabilidad/modulo-01/que-es-observabilidad.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "observabilidad-m1-l5",
                  title: "Trazas distribuidas",
                  path: "cursos/observabilidad/modulo-01/trazas-distribuidas.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Herramientas",
              path: "cursos/observabilidad/modulo-02/index.html",
              lessons: [
                {
                  id: "observabilidad-m2-l3",
                  title: "ELK y OpenSearch",
                  path: "cursos/observabilidad/modulo-02/elk-stack.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "observabilidad-m2-l2",
                  title: "Grafana",
                  path: "cursos/observabilidad/modulo-02/grafana.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "observabilidad-m2-l5",
                  title: "Jaeger y Zipkin",
                  path: "cursos/observabilidad/modulo-02/jaeger-y-zipkin.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "observabilidad-m2-l4",
                  title: "OpenTelemetry",
                  path: "cursos/observabilidad/modulo-02/opentelemetry.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "observabilidad-m2-l1",
                  title: "Prometheus",
                  path: "cursos/observabilidad/modulo-02/prometheus.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Alertas y dashboards",
              path: "cursos/observabilidad/modulo-03/index.html",
              lessons: [
                {
                  id: "observabilidad-m3-l2",
                  title: "Alertas inteligentes",
                  path: "cursos/observabilidad/modulo-03/alertas-inteligentes.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "observabilidad-m3-l4",
                  title: "Dashboards efectivos",
                  path: "cursos/observabilidad/modulo-03/dashboards-efectivos.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "observabilidad-m3-l3",
                  title: "On-call y manejo de incidentes",
                  path: "cursos/observabilidad/modulo-03/on-call-y-incidentes.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "observabilidad-m3-l5",
                  title: "Profiling y correlación",
                  path: "cursos/observabilidad/modulo-03/profiling-de-produccion.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "observabilidad-m3-l1",
                  title: "SLOs, SLIs y SRE",
                  path: "cursos/observabilidad/modulo-03/slos-y-slis.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "websockets",
    title: "WebSockets y Tiempo Real",
    slug: "websockets",
    level: "avanzado",
    category: "websocket",
    techs: ["Sockets", "Eventos", "Chat"],
    duration: "4 semanas",
    lessons: 15,
    icon: "🔗",
    description: "Conexiones persistentes, eventos, chat, notificaciones en tiempo real, salas y presencia escalable.",
    objectives: ["Implementar backend en tiempo real", "Escalar WebSockets"],
    requirements: ["Node.js o Python", "Redis"],
    tags: ["websockets","tiempo-real","eventos","chat"],
    path: "cursos/websockets/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de WebSocket",
              path: "cursos/websockets/modulo-01/index.html",
              lessons: [
                {
                  id: "websockets-abrir-cerrar-conexion",
                  title: "Abrir y cerrar la conexión",
                  path: "cursos/websockets/modulo-01/abrir-cerrar-conexion.html",
                  duration: "7 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "websockets-el-protocolo-websocket",
                  title: "El protocolo WebSocket",
                  path: "cursos/websockets/modulo-01/el-protocolo-websocket.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "websockets-estado-de-la-conexion",
                  title: "Estados de la conexión",
                  path: "cursos/websockets/modulo-01/estado-de-la-conexion.html",
                  duration: "7 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "websockets-http-vs-websockets",
                  title: "HTTP vs WebSockets",
                  path: "cursos/websockets/modulo-01/http-vs-websockets.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "websockets-introduccion-a-websockets",
                  title: "Introducción a WebSockets",
                  path: "cursos/websockets/modulo-01/introduccion-a-websockets.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · WebSockets en Node.js",
              path: "cursos/websockets/modulo-02/index.html",
              lessons: [
                {
                  id: "websockets-autenticacion-por-token",
                  title: "Autenticación por token",
                  path: "cursos/websockets/modulo-02/autenticacion-por-token.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "websockets-broadcast-de-mensajes",
                  title: "Broadcast y salas",
                  path: "cursos/websockets/modulo-02/broadcast-de-mensajes.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "websockets-cliente-websocket-web",
                  title: "Cliente WebSocket en el navegador",
                  path: "cursos/websockets/modulo-02/cliente-websocket-web.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "websockets-servidor-websocket-node",
                  title: "Servidor WebSocket con Node",
                  path: "cursos/websockets/modulo-02/servidor-websocket-node.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "websockets-socket-io",
                  title: "Socket.IO",
                  path: "cursos/websockets/modulo-02/socket-io.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Escalar y asegurar WebSockets",
              path: "cursos/websockets/modulo-03/index.html",
              lessons: [
                {
                  id: "websockets-despliegue-tras-proxy",
                  title: "Despliegue tras proxy",
                  path: "cursos/websockets/modulo-03/despliegue-tras-proxy.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "websockets-escalado-horizontal",
                  title: "Escalado horizontal",
                  path: "cursos/websockets/modulo-03/escalado-horizontal.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "websockets-heartbeat-y-timeout",
                  title: "Heartbeat y timeouts",
                  path: "cursos/websockets/modulo-03/heartbeat-y-timeout.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "websockets-seguridad-en-websockets",
                  title: "Seguridad",
                  path: "cursos/websockets/modulo-03/seguridad-en-websockets.html",
                  duration: "11 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "websockets-sticky-sessions-y-adaptadores",
                  title: "Sticky sessions y adaptadores",
                  path: "cursos/websockets/modulo-03/sticky-sessions-y-adaptadores.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "graphql",
    title: "GraphQL",
    slug: "graphql",
    level: "avanzado",
    category: "graphql",
    techs: ["Schema", "Queries", "Resolvers"],
    duration: "4 semanas",
    lessons: 15,
    icon: "🧬",
    description: "Schema, types, queries, mutations, resolvers, autenticación, paginación y caché con GraphQL en tu backend.",
    objectives: ["Construir un API GraphQL", "Decidir cuándo usar GraphQL vs REST"],
    requirements: ["APIs REST"],
    tags: ["graphql","schema","queries","resolvers"],
    path: "cursos/graphql/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de GraphQL",
              path: "cursos/graphql/modulo-01/index.html",
              lessons: [
                {
                  id: "graphql-introspeccion-y-tools",
                  title: "Introspección y herramientas",
                  path: "cursos/graphql/modulo-01/introspeccion-y-tools.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "graphql-que-es-graphql",
                  title: "¿Qué es GraphQL?",
                  path: "cursos/graphql/modulo-01/que-es-graphql.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "graphql-queries-y-mutations",
                  title: "Queries y Mutations",
                  path: "cursos/graphql/modulo-01/queries-y-mutations.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "graphql-resolvers",
                  title: "Resolvers",
                  path: "cursos/graphql/modulo-01/resolvers.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "graphql-types-y-schema",
                  title: "Tipos y Schema",
                  path: "cursos/graphql/modulo-01/types-y-schema.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Implementación con Node.js",
              path: "cursos/graphql/modulo-02/index.html",
              lessons: [
                {
                  id: "graphql-apollo-server-basico",
                  title: "Apollo Server básico",
                  path: "cursos/graphql/modulo-02/apollo-server-basico.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "graphql-argumentos-y-variables",
                  title: "Argumentos y variables",
                  path: "cursos/graphql/modulo-02/argumentos-y-variables.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "graphql-errores-y-estados",
                  title: "Errores y validación",
                  path: "cursos/graphql/modulo-02/errores-y-estados.html",
                  duration: "8 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "graphql-mutations-validaciones",
                  title: "Mutations y validación",
                  path: "cursos/graphql/modulo-02/mutations-validaciones.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "graphql-servidor-express-graphql",
                  title: "Express + GraphQL",
                  path: "cursos/graphql/modulo-02/servidor-express-graphql.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Avanzado y producción",
              path: "cursos/graphql/modulo-03/index.html",
              lessons: [
                {
                  id: "graphql-dataloader-y-n-1",
                  title: "DataLoader y N+1",
                  path: "cursos/graphql/modulo-03/dataloader-y-n-1.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "graphql-federation-y-gateway",
                  title: "Federation y gateway",
                  path: "cursos/graphql/modulo-03/federation-y-gateway.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "graphql-fragmentos-y-uniones",
                  title: "Fragmentos, uniones e interfaces",
                  path: "cursos/graphql/modulo-03/fragmentos-y-uniones.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "graphql-seguridad-y-limitacion",
                  title: "Seguridad y limitación",
                  path: "cursos/graphql/modulo-03/seguridad-y-limitacion.html",
                  duration: "9 min",
                  level: "avanzado",
                  tags: []
                },
                {
                  id: "graphql-subscriptions",
                  title: "Subscriptions",
                  path: "cursos/graphql/modulo-03/subscriptions.html",
                  duration: "10 min",
                  level: "avanzado",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "backend-ia",
    title: "Backend para IA",
    slug: "backend-ia",
    level: "experto",
    category: "ia",
    techs: ["APIs de IA", "RAG", "Embeddings"],
    duration: "7 semanas",
    lessons: 15,
    icon: "🤖",
    description: "Integra modelos de IA en tu backend: API keys, streaming, embeddings, vector databases, RAG y arquitecturas con IA.",
    objectives: ["Construir backends con IA", "Implementar RAG"],
    requirements: ["Python", "APIs REST", "Redis"],
    tags: ["ia","rag","embeddings","vector","llm"],
    path: "cursos/backend-ia/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de IA",
              path: "cursos/backend-ia/modulo-01/index.html",
              lessons: [
                {
                  id: "backend-ia-apis-de-ia",
                  title: "APIs de IA",
                  path: "cursos/backend-ia/modulo-01/apis-de-ia.html",
                  duration: "9 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "backend-ia-embeddings-y-busqueda-semantica",
                  title: "Embeddings y búsqueda semántica",
                  path: "cursos/backend-ia/modulo-01/embeddings-y-busqueda-semantica.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "backend-ia-lenguaje-natural-y-llms",
                  title: "Lenguaje natural y LLMs",
                  path: "cursos/backend-ia/modulo-01/lenguaje-natural-y-llms.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "backend-ia-prompts-y-completions",
                  title: "Prompts y completions",
                  path: "cursos/backend-ia/modulo-01/prompts-y-completions.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "backend-ia-que-es-inteligencia-artificial",
                  title: "¿Qué es la IA en el backend?",
                  path: "cursos/backend-ia/modulo-01/que-es-inteligencia-artificial.html",
                  duration: "9 min",
                  level: "experto",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Features con IA",
              path: "cursos/backend-ia/modulo-02/index.html",
              lessons: [
                {
                  id: "backend-ia-agentes-y-tools",
                  title: "Agentes y herramientas",
                  path: "cursos/backend-ia/modulo-02/agentes-y-tools.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "backend-ia-finetuning-cuando-y-como",
                  title: "Fine-tuning: cuándo y cómo",
                  path: "cursos/backend-ia/modulo-02/finetuning-cuando-y-como.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "backend-ia-llm-integration-en-servicio",
                  title: "Integrar LLMs en un servicio",
                  path: "cursos/backend-ia/modulo-02/llm-integration-en-servicio.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "backend-ia-rag-basico",
                  title: "RAG básico",
                  path: "cursos/backend-ia/modulo-02/rag-basico.html",
                  duration: "12 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "backend-ia-streaming-de-respuestas",
                  title: "Streaming de respuestas",
                  path: "cursos/backend-ia/modulo-02/streaming-de-respuestas.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Producción de IA",
              path: "cursos/backend-ia/modulo-03/index.html",
              lessons: [
                {
                  id: "backend-ia-arquitecturas-de-ia-en-backend",
                  title: "Arquitecturas de IA en backend",
                  path: "cursos/backend-ia/modulo-03/arquitecturas-de-ia-en-backend.html",
                  duration: "11 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "backend-ia-evaluacion-y-monitoreo",
                  title: "Evaluación y monitoreo",
                  path: "cursos/backend-ia/modulo-03/evaluacion-y-monitoreo.html",
                  duration: "11 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "backend-ia-gestion-de-costos",
                  title: "Gestión de costos",
                  path: "cursos/backend-ia/modulo-03/gestion-de-costos.html",
                  duration: "11 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "backend-ia-seguridad-y-guardrails",
                  title: "Seguridad y guardrails",
                  path: "cursos/backend-ia/modulo-03/seguridad-y-guardrails.html",
                  duration: "12 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "backend-ia-versionado-de-modelos",
                  title: "Versionado de modelos",
                  path: "cursos/backend-ia/modulo-03/versionado-de-modelos.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "system-design",
    title: "System Design / Arquitectura de Sistemas",
    slug: "system-design",
    level: "experto",
    category: "design",
    techs: ["Load Balancing", "Sharding", "Alta Disponibilidad"],
    duration: "9 semanas",
    lessons: 15,
    icon: "🧠",
    description: "Requisitos, escalabilidad horizontal, load balancing, caching, CDN, replicación, sharding y diseño de sistemas de alto tráfico.",
    objectives: ["Diseñar sistemas de alto tráfico", "Resolver entrevistas de system design"],
    requirements: ["Sistemas Distribuidos", "Arquitectura"],
    tags: ["system-design","escalabilidad","alta-disponibilidad","distribuido"],
    path: "cursos/system-design/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos",
              path: "cursos/system-design/modulo-01/index.html",
              lessons: [
                {
                  id: "system-design-bloques-de-construccion",
                  title: "Bloques de construcción",
                  path: "cursos/system-design/modulo-01/bloques-de-construccion.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "system-design-estimaciones-de-capacidad",
                  title: "Estimaciones de capacidad",
                  path: "cursos/system-design/modulo-01/estimaciones-de-capacidad.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "system-design-modelado-de-datos",
                  title: "Modelado de datos",
                  path: "cursos/system-design/modulo-01/modelado-de-datos.html",
                  duration: "9 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "system-design-que-es-system-design",
                  title: "¿Qué es system design?",
                  path: "cursos/system-design/modulo-01/que-es-system-design.html",
                  duration: "8 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "system-design-requisitos-y-restricciones",
                  title: "Requisitos y restricciones",
                  path: "cursos/system-design/modulo-01/requisitos-y-restricciones.html",
                  duration: "9 min",
                  level: "experto",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Patrones",
              path: "cursos/system-design/modulo-02/index.html",
              lessons: [
                {
                  id: "system-design-arquitectura-en-capas",
                  title: "Arquitectura en capas",
                  path: "cursos/system-design/modulo-02/arquitectura-en-capas.html",
                  duration: "9 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "system-design-cola-y-eventos-patterns",
                  title: "Patrones de colas y eventos",
                  path: "cursos/system-design/modulo-02/cola-y-eventos-patterns.html",
                  duration: "9 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "system-design-consistencia-consenso",
                  title: "Consistencia y consenso",
                  path: "cursos/system-design/modulo-02/consistencia-consenso.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "system-design-dedicla-y-caching-patterns",
                  title: "Patrones de durabilidad y caché",
                  path: "cursos/system-design/modulo-02/dedicla-y-caching-patterns.html",
                  duration: "9 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "system-design-monolitica-vs-distribuida",
                  title: "Monolito vs distribuida",
                  path: "cursos/system-design/modulo-02/monolitica-vs-distribuida.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Diseño completo",
              path: "cursos/system-design/modulo-03/index.html",
              lessons: [
                {
                  id: "system-design-diseno-de-busqueda",
                  title: "Caso: búsqueda",
                  path: "cursos/system-design/modulo-03/diseno-de-busqueda.html",
                  duration: "11 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "system-design-diseno-de-un-chat",
                  title: "Caso: sistema de chat",
                  path: "cursos/system-design/modulo-03/diseno-de-un-chat.html",
                  duration: "11 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "system-design-diseno-de-un-feed",
                  title: "Caso: feed (newsfeed)",
                  path: "cursos/system-design/modulo-03/diseno-de-un-feed.html",
                  duration: "11 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "system-design-diseno-de-una-url-shortener",
                  title: "Caso: URL shortener",
                  path: "cursos/system-design/modulo-03/diseno-de-una-url-shortener.html",
                  duration: "11 min",
                  level: "experto",
                  tags: []
                },
                {
                  id: "system-design-presentar-tu-diseno",
                  title: "Presentar y comunicar",
                  path: "cursos/system-design/modulo-03/presentar-tu-diseno.html",
                  duration: "10 min",
                  level: "experto",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "integraciones",
    title: "Integración y Servicios Externos",
    slug: "integraciones",
    level: "intermedio",
    category: "integraciones",
    techs: ["Webhooks", "OAuth", "Pagos"],
    duration: "4 semanas",
    lessons: 15,
    icon: "🔌",
    description: "APIs externas, webhooks, pagos, correo, almacenamiento de archivos, OAuth e idempotencia con servicios de terceros.",
    objectives: ["Integrar servicios externos de forma segura"],
    requirements: ["APIs REST", "Autenticación"],
    tags: ["integraciones","webhooks","oauth","pagos","idempotencia"],
    path: "cursos/integraciones/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de integración",
              path: "cursos/integraciones/modulo-01/index.html",
              lessons: [
                {
                  id: "integraciones-gestion-de-apis-externas",
                  title: "Gestión de APIs externas",
                  path: "cursos/integraciones/modulo-01/gestion-de-apis-externas.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integraciones-patrones-de-integracion",
                  title: "Patrones de integración",
                  path: "cursos/integraciones/modulo-01/patrones-de-integracion.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integraciones-que-son-las-integraciones",
                  title: "¿Qué son las integraciones?",
                  path: "cursos/integraciones/modulo-01/que-son-las-integraciones.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integraciones-sdk-y-clientes",
                  title: "SDKs y clientes HTTP",
                  path: "cursos/integraciones/modulo-01/sdk-y-clientes.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integraciones-webhooks",
                  title: "Webhooks",
                  path: "cursos/integraciones/modulo-01/webhooks.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Integraciones prácticas",
              path: "cursos/integraciones/modulo-02/index.html",
              lessons: [
                {
                  id: "integraciones-email-y-notificaciones",
                  title: "Email y notificaciones",
                  path: "cursos/integraciones/modulo-02/email-y-notificaciones.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integraciones-mapa-y-geolocalizacion",
                  title: "Mapas y geolocalización",
                  path: "cursos/integraciones/modulo-02/mapa-y-geolocalizacion.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integraciones-pasarelas-de-pago",
                  title: "Pasarelas de pago",
                  path: "cursos/integraciones/modulo-02/pasarelas-de-pago.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integraciones-social-login-y-oauth",
                  title: "Social login y OAuth",
                  path: "cursos/integraciones/modulo-02/social-login-y-oauth.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integraciones-storage-y-crunch",
                  title: "Almacenamiento en la nube",
                  path: "cursos/integraciones/modulo-02/storage-y-crunch.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Robustez",
              path: "cursos/integraciones/modulo-03/index.html",
              lessons: [
                {
                  id: "integraciones-colas-para-tareas-lentas",
                  title: "Colas para tareas lentas",
                  path: "cursos/integraciones/modulo-03/colas-para-tareas-lentas.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integraciones-env-vars-y-secrets",
                  title: "Configuración y secretos",
                  path: "cursos/integraciones/modulo-03/env-vars-y-secrets.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integraciones-manejo-de-errores-reintentos",
                  title: "Errores y reintentos",
                  path: "cursos/integraciones/modulo-03/manejo-de-errores-reintentos.html",
                  duration: "12 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integraciones-monitoreo-de-integraciones",
                  title: "Monitoreo de integraciones",
                  path: "cursos/integraciones/modulo-03/monitoreo-de-integraciones.html",
                  duration: "10 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "integraciones-pruebas-de-integracion",
                  title: "Pruebas de integración",
                  path: "cursos/integraciones/modulo-03/pruebas-de-integracion.html",
                  duration: "11 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            }
          ]
  },
  {
    id: "proyectos",
    title: "Proyectos Backend",
    slug: "proyectos",
    level: "experto",
    category: "proyectos",
    techs: ["CRUD", "E-commerce", "Microservicios"],
    duration: "12 semanas",
    lessons: 15,
    icon: "📦",
    description: "Ruta completa de 16 proyectos: desde una API de tareas hasta arquitecturas de microservicios y sistemas de alto tráfico.",
    objectives: ["Construir un portafolio real"],
    requirements: ["Todo lo anterior"],
    tags: ["proyectos","portfolio","practica","crud"],
    path: "cursos/proyectos/index.html",
    modules:     [
            {
              id: "modulo-01",
              title: "Módulo 1 · Fundamentos de gestión",
              path: "cursos/proyectos/modulo-01/index.html",
              lessons: [
                {
                  id: "proyectos-ciclo-de-vida-del-software",
                  title: "Ciclo de vida del software",
                  path: "cursos/proyectos/modulo-01/ciclo-de-vida-del-software.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proyectos-estimacion-y-priorizacion",
                  title: "Estimación y priorización",
                  path: "cursos/proyectos/modulo-01/estimacion-y-priorizacion.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proyectos-metodologias-agiles",
                  title: "Metodologías ágiles",
                  path: "cursos/proyectos/modulo-01/metodologias-agiles.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proyectos-requisitos-y-aclaraciones",
                  title: "Requerimientos y aclaraciones",
                  path: "cursos/proyectos/modulo-01/requisitos-y-aclaraciones.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proyectos-scrum-para-backend",
                  title: "Scrum aplicado a backend",
                  path: "cursos/proyectos/modulo-01/scrum-para-backend.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-02",
              title: "Módulo 2 · Planificación y seguimiento",
              path: "cursos/proyectos/modulo-02/index.html",
              lessons: [
                {
                  id: "proyectos-deuda-tecnica",
                  title: "Deuda técnica",
                  path: "cursos/proyectos/modulo-02/deuda-tecnica.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proyectos-gestion-de-riesgos",
                  title: "Gestión de riesgos",
                  path: "cursos/proyectos/modulo-02/gestion-de-riesgos.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proyectos-gestion-de-tareas",
                  title: "Gestión de tareas",
                  path: "cursos/proyectos/modulo-02/gestion-de-tareas.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proyectos-planificacion-de-sprints",
                  title: "Planificación de sprints",
                  path: "cursos/proyectos/modulo-02/planificacion-de-sprints.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proyectos-seguimiento-y-medicion",
                  title: "Seguimiento y medición",
                  path: "cursos/proyectos/modulo-02/seguimiento-y-medicion.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            },
            {
              id: "modulo-03",
              title: "Módulo 3 · Comunicación y entrega",
              path: "cursos/proyectos/modulo-03/index.html",
              lessons: [
                {
                  id: "proyectos-calidad-y-verificacion",
                  title: "Calidad y verificación",
                  path: "cursos/proyectos/modulo-03/calidad-y-verificacion.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proyectos-code-review-y-colaboracion",
                  title: "Code review y colaboración",
                  path: "cursos/proyectos/modulo-03/code-review-y-colaboracion.html",
                  duration: "9 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proyectos-comunicacion-en-el-equipo",
                  title: "Comunicación en el equipo",
                  path: "cursos/proyectos/modulo-03/comunicacion-en-el-equipo.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proyectos-entornos-y-despliegue",
                  title: "Entornos y despliegue",
                  path: "cursos/proyectos/modulo-03/entornos-y-despliegue.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                },
                {
                  id: "proyectos-lanzamiento-y-postmortem",
                  title: "Lanzamientos y postmortem",
                  path: "cursos/proyectos/modulo-03/lanzamiento-y-postmortem.html",
                  duration: "8 min",
                  level: "intermedio",
                  tags: []
                }
              ]
            }
          ]
  }
];

/* ============================================================
   GLOSARIO
   { term, slug, definition, category, tags[] }
   ============================================================ */
const glossary = [
  { term: "API", slug: "api", category: "apis", definition: "Conjunto de reglas que permite a dos programas comunicarse entre sí. Expone funciones y datos de forma controlada." },
  { term: "Autenticación", slug: "autenticacion", category: "seguridad", definition: "Proceso de verificar que un usuario es quien dice ser (por ejemplo, con usuario y contraseña o JWT)." },
  { term: "Autorización", slug: "autorizacion", category: "seguridad", definition: "Proceso de decidir qué acciones puede realizar un usuario ya autenticado (roles, permisos, RBAC)." },
  { term: "Backend", slug: "backend", category: "backend", definition: "La parte de la aplicación que corre en el servidor: lógica de negocio, bases de datos, APIs y seguridad." },
  { term: "Cache", slug: "cache", category: "performance", definition: "Almacenamiento temporal de datos usados con frecuencia para acelerar las respuestas y reducir carga." },
  { term: "CDN", slug: "cdn", category: "red", definition: "Red de servidores distribuidos que entrega contenido estático desde el servidor más cercano al usuario." },
  { term: "Cliente", slug: "cliente", category: "backend", definition: "Programa o dispositivo que realiza peticiones al servidor (navegador, app móvil, otro servidor)." },
  { term: "Cookie", slug: "cookie", category: "web", definition: "Pequeño dato que el servidor envía al navegador y se guarda para recordar estado (sesiones, preferencias)." },
  { term: "CRUD", slug: "crud", category: "backend", definition: "Acrónimo de Create, Read, Update y Delete: las cuatro operaciones básicas sobre recursos de datos." },
  { term: "CSRF", slug: "csrf", category: "seguridad", definition: "Cross-Site Request Forgery: ataque que ejecuta acciones no solicitadas en nombre de un usuario autenticado." },
  { term: "DNS", slug: "dns", category: "red", definition: "Sistema de Nombres de Dominio: traduce nombres (ej. google.com) a direcciones IP." },
  { term: "Docker", slug: "docker", category: "devops", definition: "Plataforma para empaquetar aplicaciones y sus dependencias en contenedores ligeros y portables." },
  { term: "Endpoint", slug: "endpoint", category: "apis", definition: "Una URL concreta de una API que representa un recurso y recibe peticiones (ej. GET /api/users)." },
  { term: "HTTP", slug: "http", category: "web", definition: "Protocolo de Transferencia de Hipertexto: el lenguaje de comunicación entre cliente y servidor en la web." },
  { term: "Índice", slug: "indice", category: "basedatos", definition: "Estructura de datos que acelera la búsqueda de filas en una tabla a cambio de más escritura y espacio." },
  { term: "JWT", slug: "jwt", category: "seguridad", definition: "JSON Web Token: token firmado que transporta claims (identidad, roles) para autenticación sin estado." },
  { term: "JSON", slug: "json", category: "formatos", definition: "Formato de intercambio de datos ligero basado en texto, los pares clave-valor de JavaScript." },
  { term: "Middleware", slug: "middleware", category: "backend", definition: "Capa de software que procesa una petición antes de llegar a la ruta (auth, logs, validación, errors)." },
  { term: "Monolito", slug: "monolito", category: "arquitectura", definition: "Aplicación única donde toda la lógica corre como un solo proceso. Simple de empezar, difícil de escalar." },
  { term: "MVC", slug: "mvc", category: "arquitectura", definition: "Patrón Modelo-Vista-Controlador que separa datos, interfaz y control de la aplicación." },
  { term: "ORM", slug: "orm", category: "basedatos", definition: "Object-Relational Mapper: mapea tablas de base de datos a objetos del lenguaje para trabajar sin SQL crudo." },
  { term: "Query", slug: "query", category: "basedatos", definition: "Consulta a una base de datos para leer, insertar, actualizar o borrar información." },
  { term: "Rate Limiting", slug: "rate-limiting", category: "seguridad", definition: "Limitar el número de peticiones por usuario/IP en un período para prevenir abusos y ataques." },
  { term: "REST", slug: "rest", category: "apis", definition: "Estilo de arquitectura de APIs basado en recursos, métodos HTTP y URLs." },
  { term: "Servidor", slug: "servidor", category: "backend", definition: "Computadora o programa que escucha peticiones y responde con datos o acciones." },
  { term: "SQL", slug: "sql", category: "basedatos", definition: "Structured Query Language: lenguaje estándar para consultar y manipular bases de datos relacionales." },
  { term: "SSL/TLS", slug: "ssl", category: "seguridad", definition: "Protocolos que cifran la comunicación entre cliente y servidor (el candado de https)." },
  { term: "WebSocket", slug: "websocket", category: "tiempo-real", definition: "Protocolo que mantiene una conexión bidireccional abierta entre cliente y servidor para tiempo real." },
  { term: "XSS", slug: "xss", category: "seguridad", definition: "Cross-Site Scripting: inyección de scripts maliciosos que se ejecutan en el navegador de la víctima." }
];

/* ============================================================
   CHEATSHEETS
   ============================================================ */
const cheatsheets = [
  { id: "html", title: "HTML", path: "cheatsheets/html.html", category: "web", icon: "🌐" },
  { id: "css", title: "CSS", path: "cheatsheets/css.html", category: "web", icon: "🎨" },
  { id: "javascript", title: "JavaScript", path: "cheatsheets/javascript.html", category: "programacion", icon: "🟨" },
  { id: "php", title: "PHP", path: "cheatsheets/php.html", category: "backend", icon: "🐘" },
  { id: "nodejs", title: "Node.js", path: "cheatsheets/nodejs.html", category: "backend", icon: "🟢" },
  { id: "python", title: "Python", path: "cheatsheets/python.html", category: "backend", icon: "🐍" },
  { id: "sql", title: "SQL", path: "cheatsheets/sql.html", category: "basedatos", icon: "🗄️" },
  { id: "mysql", title: "MySQL", path: "cheatsheets/mysql.html", category: "basedatos", icon: "🐬" },
  { id: "postgresql", title: "PostgreSQL", path: "cheatsheets/postgresql.html", category: "basedatos", icon: "🐘" },
  { id: "git", title: "Git & GitHub", path: "cheatsheets/git.html", category: "git", icon: "🐙" },
  { id: "linux", title: "Linux", path: "cheatsheets/linux.html", category: "sistemas", icon: "🐧" },
  { id: "bash", title: "Bash", path: "cheatsheets/bash.html", category: "sistemas", icon: "💻" },
  { id: "docker", title: "Docker", path: "cheatsheets/docker.html", category: "devops", icon: "🐳" },
  { id: "rest", title: "REST APIs", path: "cheatsheets/rest.html", category: "apis", icon: "🔌" },
  { id: "http", title: "HTTP", path: "cheatsheets/http.html", category: "web", icon: "🔗" },
  { id: "regex", title: "Expresiones Regulares", path: "cheatsheets/regex.html", category: "web", icon: "🔤" }
];

/* Helpers públicos exportados */
const APP = {
  levels: APP_LEVELS,
  categories: APP_CATEGORIES,
  courses,
  glossary,
  cheatsheets,
  /* Devuelve todas las lecciones en un solo array plano */
  allLessons() {
    return this.courses.flatMap(c =>
      (c.modules || []).flatMap(m =>
        (m.lessons || []).map(l =>
          Object.assign({}, l, {
            course: c.id,
            courseTitle: c.title,
            module: m.id,
            moduleTitle: m.title,
            coursePath: c.path,
            modulePath: m.path,
            levelLabel: (this.levels[l.level] || {}).label || l.level,
            category: c.category,
            techs: c.techs,
            courseLessons: (c.modules || []).reduce((n, x) => n + (x.lessons || []).length, 0)
          })
        )
      )
    );
  },
  /* Encuentra la ruta de la siguiente/anterior lección */
  findLesson(id) {
    return this.allLessons().find(l => l.id === id);
  },
  findCourse(id) {
    return this.courses.find(c => c.id === id);
  },
  findModule(courseId, moduleId) {
    const c = this.findCourse(courseId);
    return c && (c.modules || []).find(m => m.id === moduleId);
  },
  /* Lista plana de todos los cursos para el footer/buscador */
  allCourses() {
    return this.courses;
  }
};

/* Exposición a window (para páginas que no usan módulos ES) */
if (typeof window !== "undefined") {
  window.APP = APP;
  window.courses = courses;
  window.glossary = glossary;
  window.cheatsheets = cheatsheets;
  /* Alias usados por sidebar.js, progress.js y search.js */
  window.COURSES = courses;
  window.APP_COURSES = courses;
}