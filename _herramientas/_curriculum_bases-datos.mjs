export const COURSES = [
  {
    "slug": "bases-datos",
    "title": "Bases de Datos",
    "level": "principiante",
    "modules": [
      {
        "id": "modulo-01",
        "n": 1,
        "t": "Fundamentos",
        "subtitle": "Qué es una base de datos, qué papel cumple dentro del backend y cómo se organiza la información en tablas, registros, columnas y claves.",
        "desc": "Qué es una base de datos, qué papel cumple dentro del backend y cómo se organiza la información en tablas, registros, columnas y claves.",
        "caption": "Qué es una base de datos, qué papel cumple dentro del backend y cómo se organiza la información en tablas, registros, columnas y claves.",
        "objectives": [
          "Definir qué es una base de datos y en qué se diferencia de una hoja de cálculo.",
          "Identificar los SGBD y los motores que se usan hoy en el backend.",
          "Leer un esquema de tablas, registros y columnas con naturalidad.",
          "Entender las claves primarias y foráneas y el concepto de integridad.",
          "Reconocer el papel de la base de datos dentro de una aplicación completa."
        ],
        "lessons": [
          {
            "id": "que-es-una-base-de-datos",
            "title": "¿Qué es una base de datos?",
            "duration": "8 min",
            "category": "concepto",
            "cardText": "El concepto esencial y los problemas que resuelve almacenar datos bien.",
            "desc": "El concepto esencial y los problemas que resuelve almacenar datos bien."
          },
          {
            "id": "sgbd",
            "title": "SGBD: sistemas de gestión de bases de datos",
            "duration": "9 min",
            "category": "concepto",
            "cardText": "El software que administra los datos: motores relacionales y NoSQL.",
            "desc": "El software que administra los datos: motores relacionales y NoSQL."
          },
          {
            "id": "tablas-registros-columnas",
            "title": "Tablas, registros y columnas",
            "duration": "9 min",
            "category": "modelo",
            "cardText": "Toda la organización de un modelo relacional en tres conceptos claros.",
            "desc": "Toda la organización de un modelo relacional en tres conceptos claros."
          },
          {
            "id": "claves-primarias-y-foraneas",
            "title": "Claves primarias y foráneas",
            "duration": "9 min",
            "category": "claves",
            "cardText": "Las claves que identifican cada fila y conectan unas tablas con otras.",
            "desc": "Las claves que identifican cada fila y conectan unas tablas con otras."
          },
          {
            "id": "papel-de-la-base-de-datos",
            "title": "El papel de la base de datos en una aplicación",
            "duration": "7 min",
            "category": "backend",
            "cardText": "Cómo se conecta la base de datos con el backend y qué pasa si falla.",
            "desc": "Cómo se conecta la base de datos con el backend y qué pasa si falla."
          }
        ]
      },
      {
        "id": "modulo-02",
        "n": 2,
        "t": "Modelado y diseño",
        "subtitle": "Diseña esquemas que resistan el paso del tiempo: entidades, relaciones, diagramas y las formas normales que eliminan la redundancia.",
        "desc": "Diseña esquemas que resistan el paso del tiempo: entidades, relaciones, diagramas y las formas normales que eliminan la redundancia.",
        "caption": "Diseña esquemas que resistan el paso del tiempo: entidades, relaciones, diagramas y las formas normales que eliminan la redundancia.",
        "objectives": [
          "Representar la realidad de un negocio con entidades, atributos y relaciones.",
          "Dibujar diagramas entidad-relación legibles por cualquier persona del equipo.",
          "Distinguir cardinalidades 1:1, 1:N y N:M y traducirlas a claves.",
          "Aplicar las formas normales para eliminar redundancia y anomalías.",
          "Decidir cuándo desnormalizar de forma consciente."
        ],
        "lessons": [
          {
            "id": "modelo-entidad-relacion",
            "title": "Modelo entidad-relación",
            "duration": "11 min",
            "category": "modelado",
            "cardText": "Entidades, atributos y relaciones: el plano lógico de tu base de datos.",
            "desc": "Entidades, atributos y relaciones: el plano lógico de tu base de datos."
          },
          {
            "id": "diagramas-entidad-relacion",
            "title": "Dibujando diagramas entidad-relación",
            "duration": "10 min",
            "category": "modelado",
            "cardText": "Notación Crow&#39;s Foot y cómo pasar de una conversación a un plano.",
            "desc": "Notación Crow&#39;s Foot y cómo pasar de una conversación a un plano."
          },
          {
            "id": "cardinalidad",
            "title": "Cardinalidad de las relaciones",
            "duration": "10 min",
            "category": "relaciones",
            "cardText": "Uno a uno, uno a muchos y muchos a muchos explicadas con ejemplos.",
            "desc": "Uno a uno, uno a muchos y muchos a muchos explicadas con ejemplos."
          },
          {
            "id": "primera-segunda-forma-normal",
            "title": "Primera y segunda forma normal",
            "duration": "10 min",
            "category": "normalización",
            "cardText": "Elimina repeticiones y dependencias parciales con 1FN y 2FN.",
            "desc": "Elimina repeticiones y dependencias parciales con 1FN y 2FN."
          },
          {
            "id": "tercera-forma-normal-desnormalizacion",
            "title": "Tercera forma normal y desnormalización",
            "duration": "11 min",
            "category": "normalización",
            "cardText": "3FN de verdad y los casos en los que conviene romper las reglas.",
            "desc": "3FN de verdad y los casos en los que conviene romper las reglas."
          }
        ]
      },
      {
        "id": "modulo-03",
        "n": 3,
        "t": "SQL básico",
        "subtitle": "El lenguaje de todas las bases relacionales: crear tablas, insertar, modificar, consultar, ordenar, limitar y borrar datos de forma segura.",
        "desc": "El lenguaje de todas las bases relacionales: crear tablas, insertar, modificar, consultar, ordenar, limitar y borrar datos de forma segura.",
        "caption": "El lenguaje de todas las bases relacionales: crear tablas, insertar, modificar, consultar, ordenar, limitar y borrar datos de forma segura.",
        "objectives": [
          "Crear estructuras con CREATE TABLE y tipos correctos.",
          "Insertar y modificar datos con INSERT y UPDATE.",
          "Consultar con SELECT y filtrar con WHERE.",
          "Ordenar y limitar resultados con ORDER BY y LIMIT.",
          "Borrar datos con DELETE, siempre de forma controlada."
        ],
        "lessons": [
          {
            "id": "create-table",
            "title": "Creando tablas con CREATE TABLE",
            "duration": "9 min",
            "category": "DDL",
            "cardText": "Tipos, restricciones y el diseño de una tabla profesional.",
            "desc": "Tipos, restricciones y el diseño de una tabla profesional."
          },
          {
            "id": "insert-update",
            "title": "Insertando y modificando datos",
            "duration": "10 min",
            "category": "DML",
            "cardText": "INSERT, UPDATE y los peligros de modificar sin WHERE.",
            "desc": "INSERT, UPDATE y los peligros de modificar sin WHERE."
          },
          {
            "id": "select-where",
            "title": "Consultas SELECT y filtros WHERE",
            "duration": "10 min",
            "category": "SELECT",
            "cardText": "Lee datos con condiciones, operadores y comodines.",
            "desc": "Lee datos con condiciones, operadores y comodines."
          },
          {
            "id": "order-limit",
            "title": "Ordenando y limitando resultados",
            "duration": "9 min",
            "category": "SELECT",
            "cardText": "ORDER BY, LIMIT, OFFSET y las páginas de resultados.",
            "desc": "ORDER BY, LIMIT, OFFSET y las páginas de resultados."
          },
          {
            "id": "delete-seguro",
            "title": "Borrado seguro con DELETE",
            "duration": "10 min",
            "category": "DML",
            "cardText": "DELETE, los borrados accidentales y las protecciones que evitarás.",
            "desc": "DELETE, los borrados accidentales y las protecciones que evitarás."
          }
        ]
      },
      {
        "id": "modulo-04",
        "n": 4,
        "t": "Relaciones y consultas",
        "subtitle": "Une tablas con JOINs, responde preguntas que viven en varios sitios, agrupa resultados con GROUP BY y acelera las búsquedas con índices.",
        "desc": "Une tablas con JOINs, responde preguntas que viven en varios sitios, agrupa resultados con GROUP BY y acelera las búsquedas con índices.",
        "caption": "Une tablas con JOINs, responde preguntas que viven en varios sitios, agrupa resultados con GROUP BY y acelera las búsquedas con índices.",
        "objectives": [
          "Representar las relaciones 1:N y N:M en el esquema físico.",
          "Combinar tablas con INNER, LEFT y RIGHT JOIN.",
          "Usar subconsultas para responder preguntas compuestas.",
          "Agrupar y resumir datos con GROUP BY y agregaciones.",
          "Crear índices y entender su impacto en el rendimiento."
        ],
        "lessons": [
          {
            "id": "relaciones-uno-muchos",
            "title": "Relaciones uno a muchos y muchos a muchos",
            "duration": "11 min",
            "category": "relaciones",
            "cardText": "Claves foráneas y tablas puente en el esquema físico real.",
            "desc": "Claves foráneas y tablas puente en el esquema físico real."
          },
          {
            "id": "joins-inner-left-right",
            "title": "JOINs: inner, left y right",
            "duration": "12 min",
            "category": "JOIN",
            "cardText": "Combina tablas y entiende qué filas devuelve cada tipo de JOIN.",
            "desc": "Combina tablas y entiende qué filas devuelve cada tipo de JOIN."
          },
          {
            "id": "subconsultas-basicas",
            "title": "Subconsultas básicas",
            "duration": "10 min",
            "category": "subconsulta",
            "cardText": "Consultas dentro de consultas para niveles de lógica extra.",
            "desc": "Consultas dentro de consultas para niveles de lógica extra."
          },
          {
            "id": "group-by",
            "title": "Agrupación con GROUP BY",
            "duration": "11 min",
            "category": "agregación",
            "cardText": "Resúmenes con COUNT, SUM, AVG por categoría o por día.",
            "desc": "Resúmenes con COUNT, SUM, AVG por categoría o por día."
          },
          {
            "id": "indices-rendimiento",
            "title": "Índices y rendimiento",
            "duration": "11 min",
            "category": "rendimiento",
            "cardText": "Qué es un índice, cuándo crearlo y cuánto acelera las consultas.",
            "desc": "Qué es un índice, cuándo crearlo y cuánto acelera las consultas."
          }
        ]
      },
      {
        "id": "modulo-05",
        "n": 5,
        "t": "Transacciones y concurrencia",
        "subtitle": "Entiende cómo las bases de datos protegen tus datos cuando varios usuarios escriben a la vez y por qué una transferencia bancaria nunca «pierde» dinero.",
        "desc": "Entiende cómo las bases de datos protegen tus datos cuando varios usuarios escriben a la vez y por qué una transferencia bancaria nunca «pierde» dinero.",
        "caption": "Entiende cómo las bases de datos protegen tus datos cuando varios usuarios escriben a la vez y por qué una transferencia bancaria nunca «pierde» dinero.",
        "objectives": [
          "Explicar las propiedades ACID y por qué importan.",
          "Escribir transacciones con BEGIN, COMMIT y ROLLBACK.",
          "Entender los bloqueos y sus problemas clásicos.",
          "Elegir el nivel de aislamiento adecuado en producción."
        ],
        "lessons": [
          {
            "id": "propiedades-acid",
            "title": "Propiedades ACID",
            "duration": "11 min",
            "category": "ACID",
            "cardText": "Las cuatro garantías que hacen fiable una base de datos.",
            "desc": "Las cuatro garantías que hacen fiable una base de datos."
          },
          {
            "id": "transacciones",
            "title": "Transacciones: BEGIN, COMMIT y ROLLBACK",
            "duration": "12 min",
            "category": "transacción",
            "cardText": "Agrupa operaciones y decide si se guardan todas o ninguna.",
            "desc": "Agrupa operaciones y decide si se guardan todas o ninguna."
          },
          {
            "id": "bloqueos-concurrencia",
            "title": "Bloqueos y concurrencia",
            "duration": "11 min",
            "category": "concurrencia",
            "cardText": "Cómo cooperan las transacciones y qué fallos famosos aparecen.",
            "desc": "Cómo cooperan las transacciones y qué fallos famosos aparecen."
          },
          {
            "id": "niveles-aislamiento",
            "title": "Niveles de aislamiento",
            "duration": "11 min",
            "category": "aislamiento",
            "cardText": "Read committed, repeatable read y serializable explicados.",
            "desc": "Read committed, repeatable read y serializable explicados."
          }
        ]
      },
      {
        "id": "modulo-06",
        "n": 6,
        "t": "MySQL y PostgreSQL",
        "subtitle": "Pon los dos motores relacionales más usados en marcha: instálalos, créales usuarios con permisos justos, compara sus fortalezas y diseña respaldos que funcionen.",
        "desc": "Pon los dos motores relacionales más usados en marcha: instálalos, créales usuarios con permisos justos, compara sus fortalezas y diseña respaldos que funcionen.",
        "caption": "Pon los dos motores relacionales más usados en marcha: instálalos, créales usuarios con permisos justos, compara sus fortalezas y diseña respaldos que funcionen.",
        "objectives": [
          "Instalar MySQL y PostgreSQL en tu máquina.",
          "Crear usuarios y conceder permisos mínimos.",
          "Comparar honestamente ambos motores con criterios técnicos.",
          "Elegir la estrategia de backups y practicar una restauración."
        ],
        "lessons": [
          {
            "id": "instalando-mysql",
            "title": "Instalando MySQL",
            "duration": "10 min",
            "category": "MySQL",
            "cardText": "Descarga, instala y configura MySQL Server en local.",
            "desc": "Descarga, instala y configura MySQL Server en local."
          },
          {
            "id": "usuarios-permisos-respaldos",
            "title": "Usuarios y permisos",
            "duration": "11 min",
            "category": "seguridad",
            "cardText": "CREATE USER, GRANT y el principio del mínimo privilegio.",
            "desc": "CREATE USER, GRANT y el principio del mínimo privilegio."
          },
          {
            "id": "instalando-postgresql",
            "title": "Instalando PostgreSQL",
            "duration": "10 min",
            "category": "PostgreSQL",
            "cardText": "Configura el servidor, roles con PGPASSWORD y psql.",
            "desc": "Configura el servidor, roles con PGPASSWORD y psql."
          },
          {
            "id": "mysql-vs-postgresql",
            "title": "MySQL vs PostgreSQL",
            "duration": "11 min",
            "category": "comparativa",
            "cardText": "Tabla comparativa real de cada motor y cuándo elegir uno.",
            "desc": "Tabla comparativa real de cada motor y cuándo elegir uno."
          },
          {
            "id": "backups-restauracion",
            "title": "Backups y restauración",
            "duration": "10 min",
            "category": "backup",
            "cardText": "mysqldump, pg_dump y la prueba de fuego: restaurar.",
            "desc": "mysqldump, pg_dump y la prueba de fuego: restaurar."
          }
        ]
      },
      {
        "id": "modulo-07",
        "n": 7,
        "t": "NoSQL",
        "subtitle": "Descubre el mundo más allá de las tablas: documentos, colecciones y escalabilidad horizontal, y aprende a decidir cuándo usar cada tipo.",
        "desc": "Descubre el mundo más allá de las tablas: documentos, colecciones y escalabilidad horizontal, y aprende a decidir cuándo usar cada tipo.",
        "caption": "Descubre el mundo más allá de las tablas: documentos, colecciones y escalabilidad horizontal, y aprende a decidir cuándo usar cada tipo.",
        "objectives": [
          "Definir qué es NoSQL y sus grandes familias.",
          "Trabajar con documentos y colecciones en MongoDB.",
          "Realizar operaciones CRUD básicas con la shell de MongoDB.",
          "Elegir con criterio entre relacional y NoSQL."
        ],
        "lessons": [
          {
            "id": "que-es-nosql",
            "title": "¿Qué es NoSQL?",
            "duration": "11 min",
            "category": "NoSQL",
            "cardText": "Clave-valor, documentos, columnas y grafos: panorama completo.",
            "desc": "Clave-valor, documentos, columnas y grafos: panorama completo."
          },
          {
            "id": "mongodb-documentos-colecciones",
            "title": "MongoDB: documentos y colecciones",
            "duration": "11 min",
            "category": "MongoDB",
            "cardText": "Entiende el modelo de datos flexible que triunfa en backend.",
            "desc": "Entiende el modelo de datos flexible que triunfa en backend."
          },
          {
            "id": "crud-mongodb",
            "title": "CRUD en MongoDB",
            "duration": "11 min",
            "category": "CRUD",
            "cardText": "insert, find, update y delete en el shell de MongoDB.",
            "desc": "insert, find, update y delete en el shell de MongoDB."
          },
          {
            "id": "relacional-o-nosql",
            "title": "¿Relacional o NoSQL?",
            "duration": "10 min",
            "category": "decisión",
            "cardText": "Criterios reales para decidir con qué modelo construir.",
            "desc": "Criterios reales para decidir con qué modelo construir."
          }
        ]
      }
    ]
  }
];
