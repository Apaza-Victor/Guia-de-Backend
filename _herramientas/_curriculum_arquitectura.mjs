export const COURSES = [
  {
    "slug": "arquitectura",
    "title": "Arquitectura de Software",
    "level": "avanzado",
    "modules": [
      {
        "id": "modulo-01",
        "n": 1,
        "t": "Fundamentos de arquitectura",
        "subtitle": "Antes de dibujar diagramas hay que entender qué es —y para qué sirve— la arquitectura: decisiones, atributos de calidad, el rol del arquitecto y los trade-offs que pagamos por cada elección.",
        "desc": "Antes de dibujar diagramas hay que entender qué es —y para qué sirve— la arquitectura: decisiones, atributos de calidad, el rol del arquitecto y los trade-offs que pagamos por cada elección.",
        "caption": "Antes de dibujar diagramas hay que entender qué es —y para qué sirve— la arquitectura: decisiones, atributos de calidad, el rol del arquitecto y los trade-offs que pagamos por cada elección.",
        "objectives": [
          "Definir qué es la arquitectura de software y diferenciarla del diseño de bajo nivel.",
          "Identificar los atributos de calidad y su impacto en las decisiones.",
          "Entender el rol del arquitecto dentro de un equipo real.",
          "Reconocer los trade-offs de toda decisión y documentarlos con ADRs."
        ],
        "lessons": [
          {
            "id": "que-es-arquitectura-software",
            "title": "¿Qué es arquitectura de software?",
            "duration": "8 min",
            "category": "concepto",
            "cardText": "Definición, componentes y la diferencia entre arquitectura y diseño.",
            "desc": "Definición, componentes y la diferencia entre arquitectura y diseño."
          },
          {
            "id": "atributos-de-calidad",
            "title": "Requisitos y atributos de calidad",
            "duration": "9 min",
            "category": "calidad",
            "cardText": "Rendimiento, escalabilidad, mantenibilidad: qué es lo que la arquitectura debe garantizar.",
            "desc": "Rendimiento, escalabilidad, mantenibilidad: qué es lo que la arquitectura debe garantizar."
          },
          {
            "id": "rol-del-arquitecto",
            "title": "El rol del arquitecto en el equipo",
            "duration": "8 min",
            "category": "rol",
            "cardText": "Responsabilidades, atribuciones y cómo se colabora con el resto del equipo.",
            "desc": "Responsabilidades, atribuciones y cómo se colabora con el resto del equipo."
          },
          {
            "id": "decisiones-y-trade-offs",
            "title": "Decisiones y trade-offs",
            "duration": "9 min",
            "category": "decisión",
            "cardText": "Toda decisión tiene precio: equilibrio entre consistencia, disponibilidad y simplicidad.",
            "desc": "Toda decisión tiene precio: equilibrio entre consistencia, disponibilidad y simplicidad."
          },
          {
            "id": "adr-documentando-decisiones",
            "title": "Documentando decisiones con ADRs",
            "duration": "8 min",
            "category": "documentación",
            "cardText": "Los Architecture Decision Records: cómo registrar contexto, decisión y consecuencias.",
            "desc": "Los Architecture Decision Records: cómo registrar contexto, decisión y consecuencias."
          }
        ]
      },
      {
        "id": "modulo-02",
        "n": 2,
        "t": "Estilos arquitectónicos",
        "subtitle": "Los grandes patrones de organización del sistema: monolito, capas, cliente-servidor y la delimitación de módulos y boundaries que mantienen el orden cuando el código crece.",
        "desc": "Los grandes patrones de organización del sistema: monolito, capas, cliente-servidor y la delimitación de módulos y boundaries que mantienen el orden cuando el código crece.",
        "caption": "Los grandes patrones de organización del sistema: monolito, capas, cliente-servidor y la delimitación de módulos y boundaries que mantienen el orden cuando el código crece.",
        "objectives": [
          "Entender el estilo monolítico y cuándo sigue siendo la mejor opción.",
          "Comparar monolito y microservicios con criterios reales de decisión.",
          "Aplicar la arquitectura en capas con sus reglas de dependencia.",
          "Delimitar módulos y boundaries para mantener el sistema mantenible."
        ],
        "lessons": [
          {
            "id": "estilo-monolitico",
            "title": "Estilo monolítico",
            "duration": "10 min",
            "category": "estilo",
            "cardText": "El monolito explicado: ventajas, límites y cuándo conviene.",
            "desc": "El monolito explicado: ventajas, límites y cuándo conviene."
          },
          {
            "id": "monolito-vs-microservicios",
            "title": "Monolito vs microservicios",
            "duration": "12 min",
            "category": "decisión",
            "cardText": "Cómo elegir entre un solo proceso y un conjunto de servicios.",
            "desc": "Cómo elegir entre un solo proceso y un conjunto de servicios."
          },
          {
            "id": "arquitectura-en-capas",
            "title": "Arquitectura en capas",
            "duration": "11 min",
            "category": "estilo",
            "cardText": "La separación presentación-núcleo-datos y sus reglas.",
            "desc": "La separación presentación-núcleo-datos y sus reglas."
          },
          {
            "id": "cliente-servidor-y-web",
            "title": "Cliente-servidor y aplicaciones web",
            "duration": "9 min",
            "category": "cliente-servidor",
            "cardText": "El modelo que sostiene toda la web y las APIs modernas.",
            "desc": "El modelo que sostiene toda la web y las APIs modernas."
          },
          {
            "id": "modulos-paquetes-y-boundaries",
            "title": "Módulos, paquetes y boundaries",
            "duration": "10 min",
            "category": "modularidad",
            "cardText": "Divisiones lógicas del código que evitan el spaghetti.",
            "desc": "Divisiones lógicas del código que evitan el spaghetti."
          }
        ]
      },
      {
        "id": "modulo-03",
        "n": 3,
        "t": "Patrones arquitectónicos",
        "subtitle": "Los ladrillos con los que se arma el sistema: MVC, service layer, repository, inyección de dependencias y el diagrama que muestra cómo se relacionan todas las piezas.",
        "desc": "Los ladrillos con los que se arma el sistema: MVC, service layer, repository, inyección de dependencias y el diagrama que muestra cómo se relacionan todas las piezas.",
        "caption": "Los ladrillos con los que se arma el sistema: MVC, service layer, repository, inyección de dependencias y el diagrama que muestra cómo se relacionan todas las piezas.",
        "objectives": [
          "Construir controladores delgados con MVC aplicado.",
          "Centralizar los casos de uso en un Service Layer.",
          "Abstraer el acceso a datos con el patrón Repository.",
          "Inyectar dependencias y dibujar el diagrama de dependencias del sistema."
        ],
        "lessons": [
          {
            "id": "mvc-en-la-practica",
            "title": "MVC en la práctica",
            "duration": "11 min",
            "category": "mvc",
            "cardText": "Modelo, vista y controlador: roles y las trampas comunes.",
            "desc": "Modelo, vista y controlador: roles y las trampas comunes."
          },
          {
            "id": "service-layer",
            "title": "Service Layer",
            "duration": "10 min",
            "category": "servicio",
            "cardText": "La capa que orquesta casos de uso y transacciones.",
            "desc": "La capa que orquesta casos de uso y transacciones."
          },
          {
            "id": "repository-y-acceso-a-datos",
            "title": "Repository y acceso a datos",
            "duration": "10 min",
            "category": "datos",
            "cardText": "Aislar la base de datos detrás de una interfaz limpia.",
            "desc": "Aislar la base de datos detrás de una interfaz limpia."
          },
          {
            "id": "inyeccion-de-dependencias",
            "title": "Inyección de dependencias",
            "duration": "11 min",
            "category": "di",
            "cardText": "Constructor injection, contenedores de DI y testabilidad.",
            "desc": "Constructor injection, contenedores de DI y testabilidad."
          },
          {
            "id": "diagrama-de-dependencias",
            "title": "El diagrama de dependencias",
            "duration": "9 min",
            "category": "arquitectura",
            "cardText": "Cómo dibujar y auditar el flujo de dependencias del sistema.",
            "desc": "Cómo dibujar y auditar el flujo de dependencias del sistema."
          }
        ]
      },
      {
        "id": "modulo-04",
        "n": 4,
        "t": "Principios de diseño",
        "subtitle": "De \"funciona\" a \"se sostiene\": los principios que guían las decisiones de diseño de todo buen backend.",
        "desc": "De \"funciona\" a \"se sostiene\": los principios que guían las decisiones de diseño de todo buen backend.",
        "caption": "De \"funciona\" a \"se sostiene\": los principios que guían las decisiones de diseño de todo buen backend.",
        "objectives": [],
        "lessons": [
          {
            "id": "acoplamiento-y-cohesion",
            "title": "Acoplamiento y cohesión",
            "duration": "10 min",
            "category": "lección",
            "cardText": "Principios de diseño",
            "desc": "Principios de diseño"
          },
          {
            "id": "solid-principios",
            "title": "Principios SOLID",
            "duration": "10 min",
            "category": "lección",
            "cardText": "Los 5 en una sola lección",
            "desc": "Los 5 en una sola lección"
          },
          {
            "id": "srp-en-el-mundo-real",
            "title": "SRP en el mundo real",
            "duration": "10 min",
            "category": "lección",
            "cardText": "Un motivo para cambiar, un solo trabajo",
            "desc": "Un motivo para cambiar, un solo trabajo"
          },
          {
            "id": "dry-kiss-yagni",
            "title": "DRY, KISS y YAGNI",
            "duration": "10 min",
            "category": "lección",
            "cardText": "Las tres reglas de oro de la simplicidad",
            "desc": "Las tres reglas de oro de la simplicidad"
          },
          {
            "id": "olores-de-diseno",
            "title": "Olores de diseño y deuda técnica",
            "duration": "10 min",
            "category": "lección",
            "cardText": "Cómo detectar el dolor antes de que rompa",
            "desc": "Cómo detectar el dolor antes de que rompa"
          }
        ]
      },
      {
        "id": "modulo-05",
        "n": 5,
        "t": "Clean Architecture",
        "subtitle": "El marco de Robert Martin para que el negocio sea el centro del sistema y los detalles (base de datos, framework, HTTP) solo orbiten alrededor.",
        "desc": "El marco de Robert Martin para que el negocio sea el centro del sistema y los detalles (base de datos, framework, HTTP) solo orbiten alrededor.",
        "caption": "El marco de Robert Martin para que el negocio sea el centro del sistema y los detalles (base de datos, framework, HTTP) solo orbiten alrededor.",
        "objectives": [],
        "lessons": [
          {
            "id": "regla-de-dependencia",
            "title": "La regla de dependencia",
            "duration": "10 min",
            "category": "lección",
            "cardText": "El corazón de Clean Architecture",
            "desc": "El corazón de Clean Architecture"
          },
          {
            "id": "capas-de-clean-architecture",
            "title": "Las capas de Clean Architecture",
            "duration": "10 min",
            "category": "lección",
            "cardText": "Círculos concéntricos y su propósito",
            "desc": "Círculos concéntricos y su propósito"
          },
          {
            "id": "casos-de-uso-y-entidades",
            "title": "Casos de uso y entidades",
            "duration": "10 min",
            "category": "lección",
            "cardText": "El negocio como centro del sistema",
            "desc": "El negocio como centro del sistema"
          },
          {
            "id": "conectando-la-infraestructura",
            "title": "Conectando la infraestructura",
            "duration": "10 min",
            "category": "lección",
            "cardText": "Persistencia, HTTP y adaptadores sin fuga",
            "desc": "Persistencia, HTTP y adaptadores sin fuga"
          }
        ]
      },
      {
        "id": "modulo-06",
        "n": 6,
        "t": "Hexagonal y DDD",
        "subtitle": "Dos enfoques que aterrizan la teoría: el hexágono que aísla el dominio y el diseño guiado por el negocio con perspectives claras.",
        "desc": "Dos enfoques que aterrizan la teoría: el hexágono que aísla el dominio y el diseño guiado por el negocio con perspectives claras.",
        "caption": "Dos enfoques que aterrizan la teoría: el hexágono que aísla el dominio y el diseño guiado por el negocio con perspectives claras.",
        "objectives": [],
        "lessons": [
          {
            "id": "hexagonal-puertos-adaptadores",
            "title": "Hexagonal: puertos y adaptadores",
            "duration": "10 min",
            "category": "lección",
            "cardText": "La app en el centro, el mundo en la periferia",
            "desc": "La app en el centro, el mundo en la periferia"
          },
          {
            "id": "ddd-modelado-tactico",
            "title": "DDD: modelado táctico",
            "duration": "10 min",
            "category": "lección",
            "cardText": "Entidades, value objects y el lenguaje del negocio",
            "desc": "Entidades, value objects y el lenguaje del negocio"
          },
          {
            "id": "agregados-y-value-objects",
            "title": "Agregados y value objects",
            "duration": "10 min",
            "category": "lección",
            "cardText": "Consistencia y riqueza del modelo",
            "desc": "Consistencia y riqueza del modelo"
          },
          {
            "id": "bounded-contexts",
            "title": "Bounded contexts",
            "duration": "10 min",
            "category": "lección",
            "cardText": "Cortar el mundo en contextos que sí dialogan",
            "desc": "Cortar el mundo en contextos que sí dialogan"
          }
        ]
      },
      {
        "id": "modulo-07",
        "n": 7,
        "t": "En la práctica",
        "subtitle": "Cierre del curso: cómo refactorizar sin miedo, evolucionar la arquitectura, modularizar un monólito y convencer con una narrativa clara.",
        "desc": "Cierre del curso: cómo refactorizar sin miedo, evolucionar la arquitectura, modularizar un monólito y convencer con una narrativa clara.",
        "caption": "Cierre del curso: cómo refactorizar sin miedo, evolucionar la arquitectura, modularizar un monólito y convencer con una narrativa clara.",
        "objectives": [],
        "lessons": [
          {
            "id": "refactoring-de-arquitectura",
            "title": "Refactoring de arquitectura",
            "duration": "10 min",
            "category": "lección",
            "cardText": "Mejorar sin reescribir, con red de seguridad",
            "desc": "Mejorar sin reescribir, con red de seguridad"
          },
          {
            "id": "estrategias-de-evolucion",
            "title": "Estrategias de evolución",
            "duration": "10 min",
            "category": "lección",
            "cardText": "De la deuda acumulada a la arquitectura objetivo",
            "desc": "De la deuda acumulada a la arquitectura objetivo"
          },
          {
            "id": "de-monolito-a-modulos",
            "title": "De monólito a módulos",
            "duration": "10 min",
            "category": "lección",
            "cardText": "Modularizar sin el apocalipsis de reescribir",
            "desc": "Modularizar sin el apocalipsis de reescribir"
          },
          {
            "id": "comunicando-decisiones-al-equipo",
            "title": "Comunicando decisiones al equipo",
            "duration": "10 min",
            "category": "lección",
            "cardText": "ADR y narración para la arquitectura",
            "desc": "ADR y narración para la arquitectura"
          }
        ]
      }
    ]
  }
];
