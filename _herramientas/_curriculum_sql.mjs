export const COURSES = [
  {
    "slug": "sql",
    "title": "SQL desde cero hasta experto",
    "level": "intermedio",
    "modules": [
      {
        "id": "modulo-01",
        "n": 1,
        "t": "Fundamentos de SQL",
        "subtitle": "Requisito previo: el curso de Bases de Datos. Aquí activas tu motor, entiendes el idioma y escribes tus primeras consultas: SELECT, WHERE, ORDER BY y LIMIT.",
        "desc": "Requisito previo: el curso de Bases de Datos. Aquí activas tu motor, entiendes el idioma y escribes tus primeras consultas: SELECT, WHERE, ORDER BY y LIMIT.",
        "caption": "Requisito previo: el curso de Bases de Datos. Aquí activas tu motor, entiendes el idioma y escribes tus primeras consultas: SELECT, WHERE, ORDER BY y LIMIT.",
        "objectives": [
          "Explicar qué es SQL y por qué cada motor tiene dialectos.",
          "Instalar y arrancar tu motor de bases de datos.",
          "Escribir consultas SELECT completas.",
          "Filtrar con WHERE y ordenar con ORDER BY / LIMIT."
        ],
        "lessons": [
          {
            "id": "que-es-sql-dialectos",
            "title": "Qué es SQL y sus dialectos",
            "duration": "8 min",
            "category": "SQL",
            "cardText": "El idioma común de las bases relacionales y sus variantes.",
            "desc": "El idioma común de las bases relacionales y sus variantes."
          },
          {
            "id": "instalando-motores-sql",
            "title": "Instalando MySQL o PostgreSQL",
            "duration": "8 min",
            "category": "instalación",
            "cardText": "Tu motor listo para practicar hoy mismo.",
            "desc": "Tu motor listo para practicar hoy mismo."
          },
          {
            "id": "select-basico",
            "title": "Tu primera consulta: SELECT básico",
            "duration": "9 min",
            "category": "SELECT",
            "cardText": "Leer columnas y filas con la instrucción más usada.",
            "desc": "Leer columnas y filas con la instrucción más usada."
          },
          {
            "id": "where",
            "title": "Filtrando con WHERE",
            "duration": "9 min",
            "category": "WHERE",
            "cardText": "Quédate con las filas que cumplen tus condiciones.",
            "desc": "Quédate con las filas que cumplen tus condiciones."
          },
          {
            "id": "order-limit",
            "title": "Ordenando y limitando resultados",
            "duration": "8 min",
            "category": "ORDER",
            "cardText": "ORDER BY, LIMIT y OFFSET para top y paginaciones.",
            "desc": "ORDER BY, LIMIT y OFFSET para top y paginaciones."
          }
        ]
      },
      {
        "id": "modulo-02",
        "n": 2,
        "t": "Consultas avanzadas",
        "subtitle": "Deja de ver filas sueltas y empieza a ver resúmenes: agrega, cuenta, agrupa y filtra grupos. El salto al análisis de datos.",
        "desc": "Deja de ver filas sueltas y empieza a ver resúmenes: agrega, cuenta, agrupa y filtra grupos. El salto al análisis de datos.",
        "caption": "Deja de ver filas sueltas y empieza a ver resúmenes: agrega, cuenta, agrupa y filtra grupos. El salto al análisis de datos.",
        "objectives": [
          "Dominar operadores de comparación y lógicos, incluidos los de NULL.",
          "Resumir datos con COUNT, SUM, AVG, MIN y MAX.",
          "Agrupar con GROUP BY y filtrar grupos con HAVING.",
          "Manejar funciones de texto, fecha y numéricas."
        ],
        "lessons": [
          {
            "id": "operadores",
            "title": "Operadores de comparación y lógicos",
            "duration": "10 min",
            "category": "operadores",
            "cardText": "=, &lt;&gt;, &gt;, &lt;, IS NULL y los tres estados del booleano.",
            "desc": "=, &lt;&gt;, &gt;, &lt;, IS NULL y los tres estados del booleano."
          },
          {
            "id": "funciones-agregacion",
            "title": "Funciones de agregación",
            "duration": "11 min",
            "category": "agregación",
            "cardText": "COUNT, SUM, AVG, MIN y MAX para resumir columnas.",
            "desc": "COUNT, SUM, AVG, MIN y MAX para resumir columnas."
          },
          {
            "id": "group-by",
            "title": "Agrupando con GROUP BY",
            "duration": "10 min",
            "category": "GROUP BY",
            "cardText": "Convierte filas en grupos y haz reportes por categoría.",
            "desc": "Convierte filas en grupos y haz reportes por categoría."
          },
          {
            "id": "having",
            "title": "Filtrando grupos con HAVING",
            "duration": "11 min",
            "category": "HAVING",
            "cardText": "El WHERE de los grupos: condiciones sobre agregaciones.",
            "desc": "El WHERE de los grupos: condiciones sobre agregaciones."
          },
          {
            "id": "funciones-texto-fecha-numericas",
            "title": "Funciones de texto, fecha y numéricas",
            "duration": "10 min",
            "category": "funciones",
            "cardText": "El kit de herramientas para limpiar y transformar datos.",
            "desc": "El kit de herramientas para limpiar y transformar datos."
          }
        ]
      },
      {
        "id": "modulo-03",
        "n": 3,
        "t": "JOINs",
        "subtitle": "Monolito editorial de los datos: las preguntas de negocio casi nunca viven en una sola tabla. Aquí aprendes a combinarlas con precisión.",
        "desc": "Monolito editorial de los datos: las preguntas de negocio casi nunca viven en una sola tabla. Aquí aprendes a combinarlas con precisión.",
        "caption": "Monolito editorial de los datos: las preguntas de negocio casi nunca viven en una sola tabla. Aquí aprendes a combinarlas con precisión.",
        "objectives": [
          "Comprender la integridad referencial y las claves.",
          "Dominar INNER y LEFT/RIGHT JOIN.",
          "Resolver casos con CROSS JOIN y UNION.",
          "Combinar tres o más tablas con tablas puente."
        ],
        "lessons": [
          {
            "id": "tablas-relacionadas-integridad",
            "title": "Tablas relacionadas e integridad referencial",
            "duration": "11 min",
            "category": "integridad",
            "cardText": "Claves primarias, foráneas y las reglas de borrado.",
            "desc": "Claves primarias, foráneas y las reglas de borrado."
          },
          {
            "id": "inner-join",
            "title": "INNER JOIN",
            "duration": "11 min",
            "category": "INNER",
            "cardText": "La coincidencia exacta: las filas que viven en las dos tablas.",
            "desc": "La coincidencia exacta: las filas que viven en las dos tablas."
          },
          {
            "id": "left-right-join",
            "title": "LEFT y RIGHT JOIN",
            "duration": "11 min",
            "category": "LEFT/RIGHT",
            "cardText": "Todo de un lado y lo que coincida del otro (con NULL).",
            "desc": "Todo de un lado y lo que coincida del otro (con NULL)."
          },
          {
            "id": "cross-join-union",
            "title": "CROSS JOIN y JOINs con unión",
            "duration": "11 min",
            "category": "CROSS/UNION",
            "cardText": "Producto cartesiano y la combinación vertical con UNION.",
            "desc": "Producto cartesiano y la combinación vertical con UNION."
          },
          {
            "id": "joins-multiples-tablas",
            "title": "JOINs con múltiples tablas",
            "duration": "11 min",
            "category": "N:M puente",
            "cardText": "Tres o más tablas conectadas, con tablas puente de por medio.",
            "desc": "Tres o más tablas conectadas, con tablas puente de por medio."
          }
        ]
      },
      {
        "id": "modulo-04",
        "n": 4,
        "t": "Subconsultas y CTEs",
        "subtitle": "Consultas dentro de consultas: resuelve problemas por etapas y escribe SQL legible con WITH, incluso para árboles.",
        "desc": "Consultas dentro de consultas: resuelve problemas por etapas y escribe SQL legible con WITH, incluso para árboles.",
        "caption": "Consultas dentro de consultas: resuelve problemas por etapas y escribe SQL legible con WITH, incluso para árboles.",
        "objectives": [
          "Usar subconsultas escalares y con IN.",
          "Distinguir correlacionadas y el costo real.",
          "Escribir CTEs y refactorizar consultas complejas.",
          "Recorrer jerarquías con CTEs recursivas."
        ],
        "lessons": [
          {
            "id": "subconsultas-escalares",
            "title": "Subconsultas escalares",
            "duration": "10 min",
            "category": "escalar",
            "cardText": "Un valor único devuelto en el SELECT o el WHERE.",
            "desc": "Un valor único devuelto en el SELECT o el WHERE."
          },
          {
            "id": "subconsultas-in",
            "title": "Subconsultas con IN",
            "duration": "10 min",
            "category": "IN",
            "cardText": "Listas de valores generadas por otra consulta.",
            "desc": "Listas de valores generadas por otra consulta."
          },
          {
            "id": "subconsultas-correlacionadas",
            "title": "Subconsultas correlacionadas",
            "duration": "11 min",
            "category": "correlacionada",
            "cardText": "Cuando la interna mira a la externa (y su precio).",
            "desc": "Cuando la interna mira a la externa (y su precio)."
          },
          {
            "id": "ctes-with",
            "title": "CTEs con WITH",
            "duration": "10 min",
            "category": "CTE",
            "cardText": "Consulta nombrada y reutilizable: orden en el caos.",
            "desc": "Consulta nombrada y reutilizable: orden en el caos."
          },
          {
            "id": "ctes-recursivas",
            "title": "CTEs recursivas",
            "duration": "11 min",
            "category": "recursión",
            "cardText": "Árboles y jerarquías: categorías y dependencias infinitas.",
            "desc": "Árboles y jerarquías: categorías y dependencias infinitas."
          }
        ]
      },
      {
        "id": "modulo-05",
        "n": 5,
        "t": "Funciones de ventana",
        "subtitle": "Rangos, rankings y promedios móviles sin perder el detalle: cálculo sobre ventanas de filas, no sobre grupos enteros.",
        "desc": "Rangos, rankings y promedios móviles sin perder el detalle: cálculo sobre ventanas de filas, no sobre grupos enteros.",
        "caption": "Rangos, rankings y promedios móviles sin perder el detalle: cálculo sobre ventanas de filas, no sobre grupos enteros.",
        "objectives": [
          "Entender la diferencia entre GROUP BY y ventana.",
          "Dominar ROW_NUMBER, RANK y DENSE_RANK.",
          "Usar OVER con PARTITION BY y ORDER BY.",
          "Calcular acumulados y promedios móviles."
        ],
        "lessons": [
          {
            "id": "introduccion-funciones-ventana",
            "title": "Introducción a funciones de ventana",
            "duration": "12 min",
            "category": "fundamentos",
            "cardText": "Qué es una ventana y en qué se diferencia de GROUP BY.",
            "desc": "Qué es una ventana y en qué se diferencia de GROUP BY."
          },
          {
            "id": "row-number-rank-dense-rank",
            "title": "ROW_NUMBER, RANK y DENSE_RANK",
            "duration": "12 min",
            "category": "ranking",
            "cardText": "Numerar resultados y posiciones con empates.",
            "desc": "Numerar resultados y posiciones con empates."
          },
          {
            "id": "over-partition-by",
            "title": "OVER con PARTITION BY",
            "duration": "12 min",
            "category": "PARTITION",
            "cardText": "La ventana por partes: cálculos por categoría.",
            "desc": "La ventana por partes: cálculos por categoría."
          },
          {
            "id": "ventanas-moviles-acumulados",
            "title": "Ventanas móviles y acumulados",
            "duration": "12 min",
            "category": "frames",
            "cardText": "Sumas corrientes, promedios móviles y frames heredados.",
            "desc": "Sumas corrientes, promedios móviles y frames heredados."
          }
        ]
      },
      {
        "id": "modulo-06",
        "n": 6,
        "t": "Optimización",
        "subtitle": "Tu consulta es lenta. Antes de tirar el servidor por la ventana: entendamos qué decide el motor, y cómo los índices lo fabrican rápido.",
        "desc": "Tu consulta es lenta. Antes de tirar el servidor por la ventana: entendamos qué decide el motor, y cómo los índices lo fabrican rápido.",
        "caption": "Tu consulta es lenta. Antes de tirar el servidor por la ventana: entendamos qué decide el motor, y cómo los índices lo fabrican rápido.",
        "objectives": [
          "Entender el pipeline del motor y el optimizador.",
          "Leer los planes con EXPLAIN.",
          "Crear índices y saber cuándo NO.",
          "Dominar compuestos, cobertura y FULL TABLE SCAN."
        ],
        "lessons": [
          {
            "id": "como-lee-el-motor",
            "title": "Cómo lee el motor",
            "duration": "11 min",
            "category": "pipeline",
            "cardText": "Parseo, plan y ejecución: el viaje de tu SELECT.",
            "desc": "Parseo, plan y ejecución: el viaje de tu SELECT."
          },
          {
            "id": "explain",
            "title": "Leer planes con EXPLAIN",
            "duration": "11 min",
            "category": "EXPLAIN",
            "cardText": "Las columnas que importan y los planes que asustan.",
            "desc": "Las columnas que importan y los planes que asustan."
          },
          {
            "id": "indices-creacion",
            "title": "Índices: crearlos y cuándo",
            "duration": "11 min",
            "category": "índices",
            "cardText": "Estructura, CREATE INDEX y coste de escritura.",
            "desc": "Estructura, CREATE INDEX y coste de escritura."
          },
          {
            "id": "indices-compuestos-cobertura",
            "title": "Índices compuestos y de cobertura",
            "duration": "11 min",
            "category": "cobertura",
            "cardText": "Claves de varias columnas y consultas sin ir a la tabla.",
            "desc": "Claves de varias columnas y consultas sin ir a la tabla."
          },
          {
            "id": "optimizando-consultas-lentas",
            "title": "Optimizando consultas lentas",
            "duration": "11 min",
            "category": "cacería",
            "cardText": "Del EXPLAIN a la solución: el flujo completo.",
            "desc": "Del EXPLAIN a la solución: el flujo completo."
          }
        ]
      },
      {
        "id": "modulo-07",
        "n": 7,
        "t": "SQL en el backend",
        "subtitle": "El SQL cobra sentido cuando vive dentro de una API: seguridad con consultas preparadas, ORM, evolución del esquema y el decálogo del backend.",
        "desc": "El SQL cobra sentido cuando vive dentro de una API: seguridad con consultas preparadas, ORM, evolución del esquema y el decálogo del backend.",
        "caption": "El SQL cobra sentido cuando vive dentro de una API: seguridad con consultas preparadas, ORM, evolución del esquema y el decálogo del backend.",
        "objectives": [
          "Escribir consultas preparadas contra la inyección SQL.",
          "Entender qué es un ORM y sus límites.",
          "Evolucionar esquemas con migraciones.",
          "Aplicar el decálogo del SQL en backend."
        ],
        "lessons": [
          {
            "id": "consultas-preparadas",
            "title": "Consultas preparadas",
            "duration": "11 min",
            "category": "seguridad",
            "cardText": "Parámetros en vez de concatenar: la barrera anti-inyección.",
            "desc": "Parámetros en vez de concatenar: la barrera anti-inyección."
          },
          {
            "id": "orms",
            "title": "ORMs en el backend",
            "duration": "12 min",
            "category": "ORM",
            "cardText": "Modelar en código, mapear objetos; cuándo brilla y cuándo arde.",
            "desc": "Modelar en código, mapear objetos; cuándo brilla y cuándo arde."
          },
          {
            "id": "migraciones",
            "title": "Migraciones de esquema",
            "duration": "11 min",
            "category": "migraciones",
            "cardText": "Versionar la base de datos como si fuese código fuente.",
            "desc": "Versionar la base de datos como si fuese código fuente."
          },
          {
            "id": "buenas-practicas-sql-backend",
            "title": "Buenas prácticas SQL en backend",
            "duration": "11 min",
            "category": "decálogo",
            "cardText": "El decálogo que separa el SQL con oficio del que tira el stack.",
            "desc": "El decálogo que separa el SQL con oficio del que tira el stack."
          }
        ]
      }
    ]
  }
];
