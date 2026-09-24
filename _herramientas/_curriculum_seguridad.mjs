export const COURSES = [
  {
    "slug": "seguridad",
    "title": "Seguridad Backend",
    "level": "avanzado",
    "modules": [
      {
        "id": "modulo-01",
        "n": 1,
        "t": "Modelo de Amenazas",
        "subtitle": "Antes de defenderte necesitas saber qué proteger: la tríada CIA, tus superficies de ataque, el OWASP Top 10 y cómo pensar las amenazas de tu sistema.",
        "desc": "Antes de defenderte necesitas saber qué proteger: la tríada CIA, tus superficies de ataque, el OWASP Top 10 y cómo pensar las amenazas de tu sistema.",
        "caption": "Antes de defenderte necesitas saber qué proteger: la tríada CIA, tus superficies de ataque, el OWASP Top 10 y cómo pensar las amenazas de tu sistema.",
        "objectives": [
          "Aplicar la tríada confidencialidad, integridad, disponibilidad.",
          "Enumerar tus superficies de ataque.",
          "Conocer y priorizar el OWASP Top 10.",
          "Modelar amenazas de tu sistema con STRIDE.",
          "Aplicar mínimo privilegio y defensa en profundidad."
        ],
        "lessons": [
          {
            "id": "pilar-cia",
            "title": "La tríada CIA",
            "duration": "9 min",
            "category": "cia",
            "cardText": "Confidencialidad, integridad y disponibilidad como brújula.",
            "desc": "Confidencialidad, integridad y disponibilidad como brújula."
          },
          {
            "id": "superficies-de-ataque",
            "title": "Superficies de ataque",
            "duration": "10 min",
            "category": "ataque",
            "cardText": "Todos los puntos en los que alguien puede tocarte.",
            "desc": "Todos los puntos en los que alguien puede tocarte."
          },
          {
            "id": "owasp-top-10",
            "title": "OWASP Top 10",
            "duration": "11 min",
            "category": "owasp",
            "cardText": "Los diez riesgos más comunes en aplicaciones web.",
            "desc": "Los diez riesgos más comunes en aplicaciones web."
          },
          {
            "id": "modelado-de-amenazas",
            "title": "Modelado de amenazas",
            "duration": "11 min",
            "category": "stride",
            "cardText": "Piensa como atacante con el modelo STRIDE.",
            "desc": "Piensa como atacante con el modelo STRIDE."
          },
          {
            "id": "minimo-privilegio-y-defensa-profunda",
            "title": "Mínimo privilegio y defensa profunda",
            "duration": "8 min",
            "category": "principios",
            "cardText": "Dos principios que reducen el impacto de cualquier fallo.",
            "desc": "Dos principios que reducen el impacto de cualquier fallo."
          }
        ]
      },
      {
        "id": "modulo-02",
        "n": 2,
        "t": "Inyecciones",
        "subtitle": "La entrada es el punto de entrada: cómo se inyecta SQL y NoSQL, cómo explotarlo en tu propia app para entenderlo y cómo cerrarlo con consultas preparadas y validación.",
        "desc": "La entrada es el punto de entrada: cómo se inyecta SQL y NoSQL, cómo explotarlo en tu propia app para entenderlo y cómo cerrarlo con consultas preparadas y validación.",
        "caption": "La entrada es el punto de entrada: cómo se inyecta SQL y NoSQL, cómo explotarlo en tu propia app para entenderlo y cómo cerrarlo con consultas preparadas y validación.",
        "objectives": [
          "Explicar cómo funciona la inyección SQL.",
          "Detectar y explotar una consulta vulnerable en local.",
          "Blindar tus consultas con prepared statements.",
          "Reconocer la inyección NoSQL en MongoDB.",
          "Validar entrada y escapar salida por principio."
        ],
        "lessons": [
          {
            "id": "que-es-sql-injection",
            "title": "¿Qué es SQL Injection?",
            "duration": "10 min",
            "category": "sqli",
            "cardText": "El código que viaja donde debería haber datos.",
            "desc": "El código que viaja donde debería haber datos."
          },
          {
            "id": "explotando-una-consulta-vulnerable",
            "title": "Explotando una consulta vulnerable",
            "duration": "11 min",
            "category": "sqli",
            "cardText": "Intenta romperla en local para entenderla de verdad.",
            "desc": "Intenta romperla en local para entenderla de verdad."
          },
          {
            "id": "consultas-preparadas",
            "title": "Consultas preparadas",
            "duration": "10 min",
            "category": "pdo",
            "cardText": "La defensa definitiva: parámetros, no concatenación.",
            "desc": "La defensa definitiva: parámetros, no concatenación."
          },
          {
            "id": "nosql-injection-mongodb",
            "title": "NoSQL Injection en MongoDB",
            "duration": "10 min",
            "category": "nosql",
            "cardText": "Los operadores de Mongo también se inyectan.",
            "desc": "Los operadores de Mongo también se inyectan."
          },
          {
            "id": "validando-entrada-y-escapando-salida",
            "title": "Validando entrada y escapando salida",
            "duration": "10 min",
            "category": "input",
            "cardText": "Confía en lo que entra solo tras coprobar; envía lo que sale escapado.",
            "desc": "Confía en lo que entra solo tras coprobar; envía lo que sale escapado."
          }
        ]
      },
      {
        "id": "modulo-03",
        "n": 3,
        "t": "XSS y CSRF",
        "subtitle": "Los dos ataques que siguen envenenando el navegador del usuario: inyección de scripts en tu página y peticiones disfrazadas. Aprende a bloquearlos con escaping, tokens y cabeceras.",
        "desc": "Los dos ataques que siguen envenenando el navegador del usuario: inyección de scripts en tu página y peticiones disfrazadas. Aprende a bloquearlos con escaping, tokens y cabeceras.",
        "caption": "Los dos ataques que siguen envenenando el navegador del usuario: inyección de scripts en tu página y peticiones disfrazadas. Aprende a bloquearlos con escaping, tokens y cabeceras.",
        "objectives": [
          "Distinguir XSS reflejado, almacenado y DOM.",
          "Sanitizar y escapar para HTML y atributos.",
          "Entender CSRF y cuándo un GET no basta.",
          "Proteger con tokens CSRF y cookies SameSite.",
          "Endurecer con headers: CSP, X-Frame-Options."
        ],
        "lessons": [
          {
            "id": "tipos-de-xss",
            "title": "Tipos de XSS",
            "duration": "11 min",
            "category": "xss",
            "cardText": "Reflejado, almacenado y DOM: dónde vive cada uno.",
            "desc": "Reflejado, almacenado y DOM: dónde vive cada uno."
          },
          {
            "id": "sanitizacion-y-escaping",
            "title": "Sanitización y escaping",
            "duration": "11 min",
            "category": "xss",
            "cardText": "Limpia en el borde y escapa en la salida para cada contexto.",
            "desc": "Limpia en el borde y escapa en la salida para cada contexto."
          },
          {
            "id": "que-es-csrf",
            "title": "¿Qué es CSRF?",
            "duration": "9 min",
            "category": "csrf",
            "cardText": "Una petición que viaja con la identidad del usuario sin su permiso.",
            "desc": "Una petición que viaja con la identidad del usuario sin su permiso."
          },
          {
            "id": "tokens-csrf-y-cookies-samesite",
            "title": "Tokens CSRF y cookies SameSite",
            "duration": "11 min",
            "category": "csrf",
            "cardText": "La doble barrera: token por formulario y la cookie bien marcada.",
            "desc": "La doble barrera: token por formulario y la cookie bien marcada."
          },
          {
            "id": "security-headers-csp",
            "title": "Security headers y CSP",
            "duration": "10 min",
            "category": "headers",
            "cardText": "Cabeceras que cortan el XSS en la puerta: CSP, referrer, frames.",
            "desc": "Cabeceras que cortan el XSS en la puerta: CSP, referrer, frames."
          }
        ]
      },
      {
        "id": "modulo-04",
        "n": 4,
        "t": "Criptografía",
        "subtitle": "Las matemáticas que protegen tus datos en reposo y en tránsito: funciones hash para contraseñas, cifrado simétrico y asimétrico, TLS, firmas digitales y secretos bien guardados.",
        "desc": "Las matemáticas que protegen tus datos en reposo y en tránsito: funciones hash para contraseñas, cifrado simétrico y asimétrico, TLS, firmas digitales y secretos bien guardados.",
        "caption": "Las matemáticas que protegen tus datos en reposo y en tránsito: funciones hash para contraseñas, cifrado simétrico y asimétrico, TLS, firmas digitales y secretos bien guardados.",
        "objectives": [
          "Elegir bcrypt o argon2 para contraseñas.",
          "Cifrar datos en reposo con AES y autenticar.",
          "Explicar TLS, HTTPS y certificados.",
          "Distinguir firmas digitales y HMAC.",
          "Gestionar secretos fuera del código."
        ],
        "lessons": [
          {
            "id": "funciones-hash-bcrypt-argon2",
            "title": "Funciones hash: bcrypt y argon2",
            "duration": "10 min",
            "category": "hash",
            "cardText": "Por qué MD5 no sirve y cómo blindar contraseñas.",
            "desc": "Por qué MD5 no sirve y cómo blindar contraseñas."
          },
          {
            "id": "cifrado-simetrico-y-asimetrico",
            "title": "Cifrado simétrico y asimétrico",
            "duration": "11 min",
            "category": "cipher",
            "cardText": "AES para datos, RSA/EC para llaves y como se complementan.",
            "desc": "AES para datos, RSA/EC para llaves y como se complementan."
          },
          {
            "id": "tls-https-y-certificados",
            "title": "TLS, HTTPS y certificados",
            "duration": "11 min",
            "category": "tls",
            "cardText": "Del certificado a la cadena de confianza: cómo viaja tu tráfico cifrado.",
            "desc": "Del certificado a la cadena de confianza: cómo viaja tu tráfico cifrado."
          },
          {
            "id": "firmas-digitales-y-hmac",
            "title": "Firmas digitales y HMAC",
            "duration": "11 min",
            "category": "firma",
            "cardText": "Integridad y autenticidad de tus datos y tus tokens.",
            "desc": "Integridad y autenticidad de tus datos y tus tokens."
          },
          {
            "id": "gestion-segura-de-secretos",
            "title": "Gestión segura de secretos",
            "duration": "11 min",
            "category": "secretos",
            "cardText": "Ni claves en el repo ni en el código: variables, vaults y rotación.",
            "desc": "Ni claves en el repo ni en el código: variables, vaults y rotación."
          }
        ]
      },
      {
        "id": "modulo-05",
        "n": 5,
        "t": "Seguridad de APIs",
        "subtitle": "Las APIs exponen tu aplicación al mundo entero: capas de autorización, límites de tasa, CORS correcto, entradas estrictas y logs sin datos sensibles.",
        "desc": "Las APIs exponen tu aplicación al mundo entero: capas de autorización, límites de tasa, CORS correcto, entradas estrictas y logs sin datos sensibles.",
        "caption": "Las APIs exponen tu aplicación al mundo entero: capas de autorización, límites de tasa, CORS correcto, entradas estrictas y logs sin datos sensibles.",
        "objectives": [
          "Autorización en capas (gateway, router, acción).",
          "Limitar tasa por IP, llave y usuario.",
          "CORS blanca, estrecha y bien razonada.",
          "Validación estricta en cada entrada.",
          "Logs útiles y limpios de datos sensibles."
        ],
        "lessons": [
          {
            "id": "autenticacion-y-autorizacion-por-capas",
            "title": "Autenticación y autorización por capas",
            "duration": "11 min",
            "category": "authz",
            "cardText": "Verificar quién eres y qué puedes hacer, en cada frontera.",
            "desc": "Verificar quién eres y qué puedes hacer, en cada frontera."
          },
          {
            "id": "rate-limiting",
            "title": "Rate limiting",
            "duration": "11 min",
            "category": "api",
            "cardText": "El bozal que frena bots, fuerza bruta y abuso.",
            "desc": "El bozal que frena bots, fuerza bruta y abuso."
          },
          {
            "id": "cors-bien-configurado",
            "title": "CORS bien configurado",
            "duration": "11 min",
            "category": "cors",
            "cardText": "Permitir solo lo necesario con origen, métodos y headers exactos.",
            "desc": "Permitir solo lo necesario con origen, métodos y headers exactos."
          },
          {
            "id": "validacion-estricta-de-entrada",
            "title": "Validación estricta de entrada",
            "duration": "11 min",
            "category": "entrada",
            "cardText": "Fallar temprano, fallar claro, nunca confiar en el cliente.",
            "desc": "Fallar temprano, fallar claro, nunca confiar en el cliente."
          },
          {
            "id": "logs-seguros",
            "title": "Logs seguros",
            "duration": "11 min",
            "category": "logs",
            "cardText": "Registrar lo que importa sin escribir contraseñas ni tokens.",
            "desc": "Registrar lo que importa sin escribir contraseñas ni tokens."
          }
        ]
      },
      {
        "id": "modulo-06",
        "n": 6,
        "t": "Hardening",
        "subtitle": "Endurecer el sistema operativo y el despliegue: servidor web sin info inútil, usuarios mínimos, parches al día y secretos que jamás entran en la imagen del contenedor.",
        "desc": "Endurecer el sistema operativo y el despliegue: servidor web sin info inútil, usuarios mínimos, parches al día y secretos que jamás entran en la imagen del contenedor.",
        "caption": "Endurecer el sistema operativo y el despliegue: servidor web sin info inútil, usuarios mínimos, parches al día y secretos que jamás entran en la imagen del contenedor.",
        "objectives": [
          "Servidor web sin detalles y con límites.",
          "Usuarios y procesos con mínimos privilegios.",
          "Actualizar y parchear sin miedo.",
          "Secretos fuera de la imagen Docker."
        ],
        "lessons": [
          {
            "id": "configuracion-segura-servidor-web",
            "title": "Configuración segura del servidor web",
            "duration": "11 min",
            "category": "nginx",
            "cardText": "Ocultar versiones, limitar tipos y tamaños, y cerrar métodos.",
            "desc": "Ocultar versiones, limitar tipos y tamaños, y cerrar métodos."
          },
          {
            "id": "usuarios-y-minimos-privilegios",
            "title": "Usuarios y mínimos privilegios",
            "duration": "11 min",
            "category": "so",
            "cardText": "Correr cada servicio con el usuario que solo necesita lo suyo.",
            "desc": "Correr cada servicio con el usuario que solo necesita lo suyo."
          },
          {
            "id": "actualizaciones-y-parches",
            "title": "Actualizaciones y parches",
            "duration": "11 min",
            "category": "ops",
            "cardText": "Mantener la cadena entera al día con ventanas seguras.",
            "desc": "Mantener la cadena entera al día con ventanas seguras."
          },
          {
            "id": "secretos-en-contenedores",
            "title": "Secretos en contenedores",
            "duration": "11 min",
            "category": "docker",
            "cardText": "Por qué el ENV en Dockerfile es una mala idea y qué usar.",
            "desc": "Por qué el ENV en Dockerfile es una mala idea y qué usar."
          }
        ]
      },
      {
        "id": "modulo-07",
        "n": 7,
        "t": "Auditoría",
        "subtitle": "El buen cierre: detectar señales de ataque, saber responder si ocurren y probar tu propia seguridad con pentesting básico y un checklist final.",
        "desc": "El buen cierre: detectar señales de ataque, saber responder si ocurren y probar tu propia seguridad con pentesting básico y un checklist final.",
        "caption": "El buen cierre: detectar señales de ataque, saber responder si ocurren y probar tu propia seguridad con pentesting básico y un checklist final.",
        "objectives": [
          "Monitorizar y detectar señales tempranas.",
          "Responder ante un incidente con un plan.",
          "Probar la seguridad con pentesting básico.",
          "Auditar tu app con una checklist completa."
        ],
        "lessons": [
          {
            "id": "monitorizacion-y-deteccion",
            "title": "Monitorización y detección",
            "duration": "11 min",
            "category": "ops",
            "cardText": "Métricas, logs con alertas y señales que avisan antes de romper.",
            "desc": "Métricas, logs con alertas y señales que avisan antes de romper."
          },
          {
            "id": "plan-de-respuesta-a-incidentes",
            "title": "Plan de respuesta a incidentes",
            "duration": "11 min",
            "category": "ir",
            "cardText": "Detectar, contener, erradicar, recuperar y aprender.",
            "desc": "Detectar, contener, erradicar, recuperar y aprender."
          },
          {
            "id": "pentesting-basico",
            "title": "Pentesting básico",
            "duration": "11 min",
            "category": "test",
            "cardText": "Piensa como atacante con herramientas comunes y éticas.",
            "desc": "Piensa como atacante con herramientas comunes y éticas."
          },
          {
            "id": "checklist-de-seguridad",
            "title": "Checklist de seguridad",
            "duration": "11 min",
            "category": "audit",
            "cardText": "El resumen auditable de todo el curso en una lista.",
            "desc": "El resumen auditable de todo el curso en una lista."
          }
        ]
      }
    ]
  }
];
