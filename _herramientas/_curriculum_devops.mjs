// _curriculum_devops.mjs
// Currículum del curso de DevOps para Backend.
// Exporta COURSES con todos los módulos y lecciones.
// Las lecciones existentes en disco se listan SIN body (no se regeneran);
// las nuevas (módulos 02, 04 y 07) llevan body completo (12 secciones estándar).

export const COURSES = [
  {
    slug: "devops",
    title: "DevOps para Backend",
    modules: [
      {
        id: "modulo-01",
        n: 1,
        t: "Introducción a DevOps",
        level: "avanzado",
        caption: "La cultura que une desarrollo y operaciones",
        desc: "Comprende qué es DevOps, cómo se relaciona con el ciclo de vida del software, sus principios culturales y las herramientas que lo hacen posible.",
        subtitle: "DevOps no es una herramienta: es una manera de trabajar.",
        objectives: [
          "Entender qué es DevOps y por qué transforma equipos de backend",
          "Ubicar DevOps dentro del ciclo de vida del software",
          "Aplicar los principios de colaboración, automatización y mejora continua",
          "Identificar la infraestructura de herramientas de un pipeline moderno"
        ],
        lessons: [
          { id: "que-es-devops", title: "¿Qué es DevOps?", duration: "12 min", level: "avanzado", category: "fundamentos", cardText: "DevOps une desarrollo y operaciones para entregar software de forma continua y confiable." },
          { id: "ciclo-de-vida-del-software", title: "Ciclo de vida del software", duration: "9 min", level: "avanzado", category: "fundamentos", cardText: "De la idea al despliegue: cada fase del ciclo y el rol de la automatización." },
          { id: "principios-y-cultura-devops", title: "Principios y cultura DevOps", duration: "10 min", level: "avanzado", category: "fundamentos", cardText: "Colaboración, empatía y mejora constante: la cultura detrás del pipeline." },
          { id: "automatizacion-y-herramientas", title: "Automatización y herramientas", duration: "8 min", level: "avanzado", category: "fundamentos", cardText: "El ecosistema de herramientas que automatiza build, test y despliegue." }
        ]
      },
      {
        id: "modulo-02",
        n: 2,
        t: "Control de versiones para operaciones",
        level: "intermedio",
        caption: "Git como columna vertebral de cada despliegue",
        desc: "Domina ramas, flujos de trabajo con Git, integración continua, entornos y versionado semántico para que tu código de producción sea reproducible.",
        subtitle: "Sin un buen control de versiones no hay entregas predecibles.",
        objectives: [
          "Versionar y gestionar ramas con Git con fluidez",
          "Comparar GitFlow y trunk-based para elegir tu estrategia",
          "Entender los fundamentos de la integración continua",
          "Diferenciar los entornos dev, staging y producción",
          "Aplicar versionado semántico y mantener changelogs claros"
        ],
        lessons: [
          {
            id: "versiones-y-ramas-git",
            title: "Versiones y ramas en Git",
            duration: "11 min",
            level: "intermedio",
            category: "git",
            cardText: "Aprende a versionar, crear ramas y fusionar cambios para que tu código siempre tenga historia clara.",
            desc: "Aprende a versionar, crear ramas y fusionar cambios con Git para operaciones reproducibles.",
            body: {
              intro: [
                "Git es la herramienta sobre la que se apoya casi todo el flujo DevOps: cada commit, rama o tag es una pieza de trazabilidad que conecta el código con su despliegue.",
                "En este módulo vamos a dejar de ver Git como un simple guardado de archivos y empezar a usarlo como un sistema de versionado orientado a operaciones, donde cada cambio queda registrado y es recuperable."
              ],
              def: {
                par: "El control de versiones registra los cambios de un proyecto a lo largo del tiempo. Con Git puedes trabajar en paralelo usando ramas, fusionar el trabajo final y volver atrás ante cualquier error sin perder trabajo.",
                porQue: "Porque cada despliegue se construye a partir de un estado del repositorio. Si ese estado no está bien versionado, es imposible saber qué exactamente se lanzó, quién lo cambió o cómo revertirlo.",
                cuando: "Úsalo desde el primer día de cualquier proyecto backend y en todas las operaciones: cada merge debe responder a una decisión de equipo, nunca a un impulso."
              },
              concepts: [
                "Commit: una instantánea del estado del proyecto con un mensaje claro.",
                "Rama (branch): una línea de trabajo paralela que no interfiere con main.",
                "Merge: fusión de una rama dentro de otra, integrando sus cambios.",
                "Conflicto: cuando dos ramas modifican las mismas líneas y Git pide una decisión.",
                "Tag: una marca inmutable que fija una versión concreta del repositorio."
              ],
              basic: {
                p: "El flujo más básico de operaciones: iniciar el repo, versionar el trabajo y crear y cambiar de rama. En este pequeño ejemplo montamos una rama de funcionalidad para no tocar la principal.",
                code: [
                  "git init",
                  "git add .",
                  'git commit -m "feat: agrega autenticacion basica"',
                  "git branch feature/login",
                  "git checkout feature/login",
                  "git branch"
                ],
                out: "* feature/login\n  main",
                lang: "bash"
              },
              intermediate: {
                p: "Cuando la rama de funcionalidad está lista, la integramos en main con un merge. Revisar el historial con git log --graph muestra el mapa real de ramas y fusiones del proyecto.",
                code: [
                  "git checkout main",
                  "git merge feature/login --no-ff",
                  "git log --oneline --graph --all",
                  "# Crea un tag para marcar la version 1.2.0",
                  'git tag -a v1.2.0 -m "Primera version con login"'
                ],
                caption: "Integración de una rama de funcionalidad",
                lang: "bash"
              },
              real: {
                p: "En un equipo backend real, cada tarea del tablero se corresponde con una rama corta que termina en un pull request. El historial resultante debe contar una historia clara y verificable.",
                ul: [
                  "Una rama por tarea, con el id del ticket en el nombre.",
                  "Mensajes de commit que expliquen el porqué, no solo el qué.",
                  "Tags semánticos en cada versión publicada.",
                  "Bloquear commits directos a main con reglas de protección."
                ],
                code: [
                  "git checkout -b feat/42-endpoint-pagos",
                  'git commit -m "feat(pagos): agrega endpoint de cobro"',
                  "git push origin feat/42-endpoint-pagos",
                  "git checkout main",
                  "git pull origin main",
                  "git tag v1.3.0",
                  "git push origin v1.3.0"
                ],
                nota: "Los mensajes de commit convencionales (feat, fix, chore, docs) permiten generar changelogs automáticos a partir del historial.",
                lang: "bash"
              },
              expl: [
                "Un commit correcto es pequeño, atómico y reversible: si algo falla en producción, revertir ese único commit debe bastar.",
                "Las ramas protegen a main de código a medio hacer. Nunca despliegues desde una rama de trabajo, siempre desde main o una release.",
                "El merge --no-ff conserva una marca visual de cuándo se integró la funcionalidad, muy útil para auditorías.",
                "Los tags son inmutables por convención: una vez publicado v1.3.0, esa referencia no se mueve jamás."
              ],
              errors: [
                "Detached HEAD: es un estado de Git que sólamente existe para inspeccionar; si haces commits ahí se pierden, así que crea una rama antes de editar.",
                "Conflicto de merge mal resuelto: nunca resuelvas conflictos a ciegas; abre el archivo y revisa ambas versiones.",
                "Commitear secretos: subir claves al repositorio deja una copia en el historial, aunque luego lo borres."
              ],
              tips: [
                "Mantén main siempre en estado desplegable.",
                "Usa git fetch antes de trabajar para no partir de una copia vieja.",
                "Escribe mensajes de commit en imperativo y en el idioma del equipo.",
                "Protege main con al menos una revisión y con estado de CI verde."
              ],
              exercise: [
                "Crea un repositorio, monta una rama feature/pagos, haz tres commits coherentes, fusiónala con --no-ff y etiqueta v1.0.0.",
                "Simula un fallo en producción: revierte el último commit con git revert y confirma que los demás siguen intactos."
              ],
              summary: [
                "Git registra cada cambio y permite trabajar en paralelo sin pisarse.",
                "Las ramas aíslan el trabajo y main se mantiene siempre estable.",
                "Los merges y tags inmutables generan la trazabilidad que el despliegue necesita.",
                "Un buen historial se lee como una historia: clara, reversible y auditada."
              ],
              lang: "bash",
              exampleFile: "ramas",
              desc: "Versiona con Git, crea ramas, fusiona y etiqueta versiones para operaciones reproducibles."
            }
          },
          {
            id: "gitflow-y-trunck",
            title: "GitFlow y trunk-based",
            duration: "12 min",
            level: "intermedio",
            category: "git",
            cardText: "Dos modelos de ramas opuestos: GitFlow para ciclos largos y trunk-based para entregas continuas.",
            desc: "Compara GitFlow y trunk-based y elige la estrategia de ramas correcta para tu equipo.",
            body: {
              intro: [
                "La forma en la que organizas las ramas define cuánta fricción hay en tus entregas. GitFlow y trunk-based representan dos filosofías muy distintas de integración.",
                "Elegir bien no es una cuestión de moda: depende del tamaño del equipo, de la frecuencia de releases y de la madurez de tu pipeline de CI/CD."
              ],
              def: {
                par: "GitFlow organiza las ramas en ejes paralelos (develop, feature, release y main) pensados para ciclos de release largos. El trunk-based, en cambio, integra todo el trabajo directamente sobre una rama principal corta y despliega desde ella varias veces al día.",
                porQue: "Porque la topología de ramas determina la velocidad de integración y la facilidad para hacer rollback. Un equipo que quiere CI/CD acelerada suele chocar con el overhead de GitFlow.",
                cuando: "Usa GitFlow cuando publiques versiones separadas con soporte largo. Usa trunk-based cuando quieras múltiples despliegues diarios con main siempre verde."
              },
              concepts: [
                "GitFlow: main, develop, feature/, release/ y hotfix/ con papeles fijos.",
                "Trunk-based: una sola rama principal con ramas de tarea muy cortas.",
                "Feature flags: permiten integrar a main código inacabado sin exponerlo.",
                "Main siempre verde: condición indispensable antes de cualquier merge en trunk-based.",
                "Hotfix: rama corta para corregir producción con la máxima urgencia."
              ],
              basic: {
                p: "En GitFlow la rutina es previsible: las funcionalidades nacen de develop y terminan de nuevo en develop, mientras que main solo recibe releases y hotfixes.",
                code: [
                  "git checkout -b feature/reporte-pagos develop",
                  'git commit -m "feat: agrega reporte de pagos"',
                  "git checkout develop",
                  "git merge feature/reporte-pagos",
                  "git checkout -b release/v1.2.0 develop",
                  "git checkout main",
                  "git merge release/v1.2.0",
                  'git tag v1.2.0 -m "Release 1.2.0"'
                ],
                out: "develop → feature → develop → release/v1.2.0 → main (tag v1.2.0)",
                lang: "bash"
              },
              intermediate: {
                p: "En trunk-based la regla es simple: la rama de tarea dura horas o días, y el merge a main dispara la construcción y el despliegue de forma automática.",
                code: [
                  "git checkout -b feat/ab-testing main",
                  'git commit -m "feat: agrega experimental al feature flag"',
                  "git push origin feat/ab-testing",
                  "# CI corre: lint, tests y build sobre la rama",
                  "git checkout main",
                  "git pull origin main",
                  "git merge feat/ab-testing",
                  "git push origin main"
                ],
                caption: "Rama de tarea corta en trunk-based",
                lang: "bash"
              },
              real: {
                p: "Un pipeline de GitHub Actions puede aplicar la política por rama: sobre pull requests corre la verificación y sobre main corre además el despliegue a staging y producción.",
                ul: [
                  "Las pull requests solo entran si main sigue verde.",
                  "Detectar fusiones huérfanas con checks obligatorios.",
                  "Feature flags para liberar al usuario decidido por el equipo.",
                  "Rama main como única fuente de verdad para producción."
                ],
                code: [
                  "on:",
                  "  push:",
                  "    branches: [main]",
                  "  pull_request:",
                  "    branches: [main]",
                  "jobs:",
                  "  ci:",
                  "    runs-on: ubuntu-latest",
                  "    steps:",
                  "      - uses: actions/checkout@v4",
                  "      - uses: actions/setup-node@v4",
                  "        with:",
                  "          node-version: 20",
                  "      - run: npm ci",
                  "      - run: npm test"
                ],
                nota: "Con protections sobre main (revisión obligatoria y checks requeridos) la rama principal nunca queda rota.",
                lang: "yaml"
              },
              expl: [
                "GitFlow brilla en proyectos con fechas de release claras y versiones mantenidas en paralelo.",
                "Trunk-based elimina la fase de integración tardía: el conflicto se descubre en minutos, no al final del sprint.",
                "El hotfix de GitFlow es una deuda cultural: con trunk-based, el arreglo es una rama corta igual que cualquier otra.",
                "Un equipo que despliega varias veces al día necesita main estable; GitFlow añade pasos de merge que lo complican."
              ],
              errors: [
                "Aplicar GitFlow con releases diarias: el overhead de release branches se convierte en fricción.",
                "Trunk-based sin tests ni feature flags: cada merge es una apuesta a ciegas.",
                "Ramas que duran semanas: son un monolito escondido que nadie ve."
              ],
              tips: [
                "Elige un solo modelo y documentarlo; mezclarlos a medias genera casi siempre caos.",
                "En trunk-based integra en tandas pequeñas, idealmente cada día.",
                "Usa branch protection en main para exigir revisión y CI verde.",
                "Empieza con trunk-based si despliegas varias veces por semana."
              ],
              exercise: [
                "Dibuja el flujo de ramas de tu equipo, marca las fricciones y propón el modelo que las resolvería.",
                "Configura una regla de protección sobre main que exija al menos una revisión y el estado de CI."
              ],
              summary: [
                "GitFlow separa ejes de trabajo para ciclos de release largos.",
                "El trunk-based integra todo en una rama principal siempre verde.",
                "La elección depende de la frecuencia de releases y de tu madurez CI/CD.",
                "Los feature flags y el branch protection viabilizan el trunk-based moderno."
              ],
              lang: "yaml",
              exampleFile: "workflow",
              desc: "Compara GitFlow y trunk-based para elegir el modelo de ramas de tu pipeline."
            }
          },
          {
            id: "integracion-continua-conceptos",
            title: "Integración continua: conceptos",
            duration: "12 min",
            level: "intermedio",
            category: "ci/cd",
            cardText: "Juntar el trabajo de todo el equipo y verificarlo de forma automática y frecuente.",
            desc: "Aprende los fundamentos de la integración continua: qué es, por qué importa y cómo se automatiza.",
            body: {
              intro: [
                "La integración continua (CI) es la práctica de fusionar a menudo el trabajo de todo el equipo y verificar cada integración de manera automática.",
                "En lugar de esperar al final del proyecto para unir ramas, cada push dispara una serie de comprobaciones que protegen a la rama principal."
              ],
              def: {
                par: "CI es el proceso automático que se ejecuta ante cada cambio: descarga el código, instala dependencias, compila, ejecuta tests, linting y análisis de seguridad. Si algo falla, el equipo lo sabe en minutos.",
                porQue: "Porque detectar un error cinco horas después de romperse es mucho más barato que detectarlo a los cinco días. La CI convierte los bugs en resueltos rápidos y mantiene a main siempre publicable.",
                cuando: "Actívala desde el primer commit de un proyecto y hazla obligatoria en el repositorio con checks protegidos."
              },
              concepts: [
                "Pipeline: la secuencia ordenada de pasos que verifica el código.",
                "Stage: cada fase del pipeline (instalar, testear, empaquetar).",
                "Runner: la máquina que ejecuta los jobs bajo demanda.",
                "Cache: almacenar dependencias para que las builds sean rápidas.",
                "Feedback: el resultado visible que llega al equipo (verde/rojo)."
              ],
              basic: {
                p: "Una sesión de CI reproducible empieza con el entorno limpio seguido de las instalación de dependencias y la ejecución de pruebas. Con npm esto se traduce en tres comandos.",
                code: [
                  "npm ci",
                  "npm run lint",
                  "npm test",
                  "npm run build"
                ],
                out: "Instalación de dependencias... OK\nLint: 0 errores\nTests: 42 passed\nBuild: generado en ./dist",
                lang: "bash"
              },
              intermediate: {
                p: "El mismo flujo, pero escrito como un job de GitHub Actions. Cada paso es un command que se ejecuta en un runner de ubuntu con Node 20.",
                code: [
                  "jobs:",
                  "  test:",
                  "    runs-on: ubuntu-latest",
                  "    steps:",
                  "      - uses: actions/checkout@v4",
                  "      - uses: actions/setup-node@v4",
                  "        with:",
                  "          node-version: 20",
                  "          cache: npm",
                  "      - run: npm ci",
                  "      - run: npm test"
                ],
                caption: "Job de integración continua con GitHub Actions",
                lang: "yaml"
              },
              real: {
                p: "Un pipeline de CI real separa la verificación por tipo de cambio y empaqueta artefactos que la etapa de despliegue consumirá después.",
                ul: [
                  "Job lint: calidad del código y estilo.",
                  "Job test: suite completa con cobertura.",
                  "Job build: genera el artefacto y lo sube como artifact.",
                  "Triggers: pull_request para ramas y push para main."
                ],
                code: [
                  "name: ci",
                  "on:",
                  "  pull_request:",
                  "  push:",
                  "    branches: [main]",
                  "jobs:",
                  "  test:",
                  "    runs-on: ubuntu-latest",
                  "    steps:",
                  "      - uses: actions/checkout@v4",
                  "      - run: npm ci",
                  "      - run: npm test",
                  "  build:",
                  "    needs: test",
                  "    runs-on: ubuntu-latest",
                  "    steps:",
                  "      - uses: actions/checkout@v4",
                  "      - run: npm ci",
                  "      - run: npm run build",
                  "      - uses: actions/upload-artifact@v4",
                  "        with:",
                  "          name: dist",
                  "          path: dist"
                ],
                nota: "Con needs: la etapa build solo corre si test terminó bien, así los artefactos malos jamás llegan a producción.",
                lang: "yaml"
              },
              expl: [
                "Los cambios pequeños y frecuentes hacen que cada error sea localizable.",
                "El runner empieza desde cero: la configuración es declarativa y reproducible.",
                "El cache de dependencias evita re-descargar miles de paquetes en cada ejecución.",
                "El feedback rojo inmediato es el mecanismo principal de corrección del equipo."
              ],
              errors: [
                "Tests que dependen de una base de datos local: sin isolación, el pipeline es inestable.",
                "Instalar con npm install y trabar la build en lock: usa npm ci para reproducibilidad.",
                "Ignorar un test intermitente (flaky): enmascara regresiones reales."
              ],
              tips: [
                "Haz que la CI bloquee el merge: revisión + checks obligatorios.",
                "Mide el tiempo de la build y reduce los sospechosos con caché.",
                "Testea sobre una copia limpia del entorno de producción.",
                "Pon un límite de tiempo por job para evitar runners colgados."
              ],
              exercise: [
                "Crea un flujo de trabajo de CI básico para un proyecto Node y haz que falle a propósito para ver el feedback.",
                "Agrega branch protection en main exigiendo los checks del pipeline recién creado."
              ],
              summary: [
                "CI verifica automáticamente cada integración del equipo.",
                "Un pipeline típico instala, prueba, compila y empaqueta.",
                "Los checks obligatorios protegen la rama principal.",
                "El ciclo de feedback corto es el verdadero valor de la práctica."
              ],
              lang: "yaml",
              exampleFile: "ci",
              desc: "Fundamentos de integración continua: pipelines, runners y el ciclo de feedback rápido."
            }
          },
          {
            id: "entornos-dev-staging-prod",
            title: "Entornos: dev, staging y producción",
            duration: "10 min",
            level: "intermedio",
            category: "despliegue",
            cardText: "Separar dev, staging y producción para que un problema nunca llegue directo a tus usuarios.",
            desc: "Aprende a organizar y configurar los entornos dev, staging y producción de tu backend.",
            body: {
              intro: [
                "Tener un único entorno donde todos prueban lo mismo es la receta del desastre en producción. Los equipos DevOps separan por lo menos tres entornos para validar cada cambio por etapas.",
                "La diferencia entre entornos no es solo la infraestructura: es el nivel de confianza que le tienes a cada cambio."
              ],
              def: {
                par: "Un entorno es una instancia completa del sistema (código, configuración, datos y servicios) pensada para una etapa del ciclo. dev es para desarrollo, staging replica producción con datos limpios y producción atiende a los usuarios reales.",
                porQue: "Porque cada etapa tiene riesgos y necesidades distintas: en dev primas velocidad, en staging fidelidad con lo real y en producción estabilidad y control.",
                cuando: "Diseña los tres entornos desde el primer día, aunque empieces en un solo servidor, y sácalos con la misma imagen para evitar el clásico funciona en mi máquina."
              },
              concepts: [
                "Configuración por entorno: variables que cambian según la etapa.",
                "Staging: espejo de producción con una réplica de datos.",
                "Promoción de artefactos: la misma imagen viaja de entorno en entorno.",
                "Aislamiento: cada entorno tiene credenciales y datos propios.",
                "Gate de promoción: la aprobación que permite pasar a la siguiente etapa."
              ],
              basic: {
                p: "La configuración por entorno se resuelve con variables de entorno. Un archivo .env por entorno mantiene los valores fuera del código y lista qué hay que definir.",
                code: [
                  "NODE_ENV=development",
                  "PORT=3000",
                  "DATABASE_URL=postgres://dev:dev@localhost:5432/app_dev",
                  "API_BASE_URL=http://localhost:3000",
                  "LOG_LEVEL=debug"
                ],
                out: "Cargado desde .env (nunca versionado)",
                lang: "ini"
              },
              intermediate: {
                p: "Las variables de staging deben ser tan parecidas a producción como sea posible, solo que con endpoints propios y datos de prueba. Promocionar la configuración en vez de reescribirla es la clave.",
                code: [
                  "NODE_ENV=staging",
                  "PORT=80",
                  "DATABASE_URL=postgres://app:pass@db-staging:5432/app_staging",
                  "API_BASE_URL=https://staging.midominio.com",
                  "LOG_LEVEL=info",
                  "FEATURE_NEW_PAYMENTS=true"
                ],
                caption: "Variables del entorno de staging",
                lang: "ini"
              },
              real: {
                p: "El flujo de promoción típico con contenedores: la imagen que se probó, se despliega. Publicamos la misma imagen en cada entorno y solo cambian las variables de runtime.",
                ul: [
                  "Se despliega dev automáticamente desde cada merge a main.",
                  "Staging se despliega a demanda o tras aprobación de QA.",
                  "Producción se despliega con aprobación y ventana de mantenimiento.",
                  "La imagen es idéntica: el código no se recompila por entorno."
                ],
                code: [
                  "docker build -t mi-api:v1.2.3 .",
                  "docker push registry.midominio.com/mi-api:v1.2.3",
                  "docker run -d --env-file .env.staging mi-api:v1.2.3",
                  "# tras validar staging...",
                  "docker run -d --env-file .env.production mi-api:v1.2.3"
                ],
                nota: "Si la imagen que validas en staging no es la misma que sube a producción, el entorno de pruebas pierde todo su valor.",
                lang: "bash"
              },
              expl: [
                "dev es desechable y veloz: reinicia, destruye y vuelve a crear sin miedo.",
                "staging atrapa los problemas de configuración y de integración antes de molestar a un usuario real.",
                "producción debe poder revertirse: mantén los últimos artefactos y su configuración a mano.",
                "Nunca escribas secretos en variables del repositorio; úsalos desde el gestor de secretos de tu proveedor."
              ],
              errors: [
                "Confundir staging con producción y hacer operaciones de escritura accidentales: dale a staging datos no sensibles.",
                "Configurar el API de producción con un token de desarrollo: cada entorno con sus credenciales.",
                "Promocionar código nuevo en vez de imágenes: reproduce exactamente lo probado."
              ],
              tips: [
                "Versiona el esquema de variables en un archivo .env.example.",
                "Usa el mismo proveedor y las mismas versiones en staging que en producción.",
                "Rotar secretos periódicamente y nunca imprimirlos en logs.",
                "Documenta quién y cómo se promueve cada entorno."
              ],
              exercise: [
                "Diseña los tres conjuntos de variables para una API que ahora mismo funciona solo localmente.",
                "Escribe el comando que despliega la misma imagen a staging y después a producción cambiando únicamente el archivo de entorno."
              ],
              summary: [
                "Cada entorno cumple un propósito: velocidad, fidelidad o estabilidad.",
                "La configuración vive en variables de entorno, nunca en el código.",
                "Se promueven artefactos idénticos entre entornos.",
                "Los secretos se gestionan con gestores y se rotan con disciplina."
              ],
              lang: "bash",
              exampleFile: "entornos",
              desc: "Organiza los entornos dev, staging y producción y aprende a promocionar artefactos idénticos."
            }
          },
          {
            id: "semver-y-registros-de-cambios",
            title: "Semver y changelogs",
            duration: "9 min",
            level: "intermedio",
            category: "git",
            cardText: "Versionado semántico y changelogs que cuentan qué cambió y por qué.",
            desc: "Aplica versionado semántico y escribe changelogs claros para tus APIs y servicios.",
            body: {
              intro: [
                "Una versión sin significado es un número arbitrario que no ayuda a nadie. El versionado semántico (SemVer) convierte cada número en información: qué tan grande es el cambio.",
                "El changelog acompaña a la versión: un documento donde quien consuma tu API entiende de un vistazo si puede actualizar sin romperse."
              ],
              def: {
                par: "SemVer usa MAJOR.MINOR.PATCH: PATCH corrige bugs sin cambiar el contrato, MINOR agrega funcionalidad retrocompatible y MAJOR introduce cambios que rompen compatibilidad.",
                porQue: "Porque tus consumidores necesitan saber si actualizar es gratuito (PATCH y MINOR) o implica migración (MAJOR). La confianza de una integración depende de esa señal.",
                cuando: "Aplícalo en cualquier artefacto que se consume: librerías, APIs públicas, imágenes de contenedores y despliegues de servicios."
              },
              concepts: [
                "MAJOR: cambios incompatibles hacia atrás.",
                "MINOR: nuevas funcionalidades retrocompatibles.",
                "PATCH: correcciones de bugs retrocompatibles.",
                "Pre-release: sufijos como -rc.1 o -beta.2 para versiones de prueba.",
                "Changelog: registro manual o automático de cambios por versión."
              ],
              basic: {
                p: "Con package.json de Node, npm cuida del número por ti: el comando version aumenta la parte correcta del semver y crea el commit y el tag correspondientes.",
                code: [
                  "npm version patch",
                  "npm version minor",
                  "npm version major"
                ],
                out: "v1.2.4 -> v1.2.5 (patch)\nv1.2.5 -> v1.3.0 (minor)\nv1.3.0 -> v2.0.0 (major)",
                lang: "bash"
              },
              intermediate: {
                p: "El número resultante queda reflejado en el manifiesto del proyecto y etiquetado en Git. Esa etiqueta es la referencia que usará el despliegue.",
                code: [
                  "version",
                  '"version": "1.3.0",'
                ],
                caption: "Versión en package.json",
                lang: "json"
              },
              real: {
                p: "Un changelog ordenado con el formato Keep a Changelog: la versión más reciente arriba, secciones por tipo de cambio y enlaces a los tickets de referencia.",
                ul: [
                  "Added: funcionalidades nuevas.",
                  "Changed: cambios en el comportamiento actual.",
                  "Deprecated: avisos de lo que dejará de soportarse.",
                  "Fixed: correcciones de errores."
                ],
                code: [
                  "# Changelog",
                  "## [2.0.0] - 2026-03-15",
                  "### Added",
                  "- Endpoint GET /v2/pagos con paginacion",
                  "### Changed",
                  "- Formato de respuestas JSON estandarizado",
                  "### Removed",
                  "- Soporte de la API v1 (deprecada desde 1.4.0)",
                  "## [1.4.0] - 2026-01-10",
                  "### Added",
                  "- Cabecera X-Request-Id de correlacion"
                ],
                nota: "Los changelogs generados desde mensajes de commit convencionales mantienen el historial al día sin esfuerzo manual.",
                lang: "text"
              },
              expl: [
                "PATCH no debe cambiar el contrato: cualquier usuario actualiza sin miedo.",
                "MINOR anuncia lo nuevo, pero no obliga a nada.",
                "MAJOR es un aviso de migración: documéntalo con guías de migración.",
                "El tag de Git debe existir siempre que el artefacto se publique."
              ],
              errors: [
                "Subir una MAJOR por un cambio de comportamiento apenas percibible: repetirlo desgasta la confianza.",
                "Publicar versión con el número anterior: verifica el tag antes de publicar.",
                "Changelog sin fechas ni contexto: es un histórico de nada."
              ],
              tips: [
                "Automatiza el bump con tools como standard-version o changesets.",
                "Publica el changelog junto con los artefactos del release.",
                "Indica siempre la fecha y el tipo de cambio de cada versión.",
                "Conecta cada cambio con su issue o pull request."
              ],
              exercise: [
                "Versionea una librería tuya de 1.4.2 a 1.5.0 con la funcionalidad adecuada y escribe el changelog.",
                "Deprecar un endpoint, publicarlo como 2.0.0 y redactar la guía de migración."
              ],
              summary: [
                "SemVer comunica el impacto de cada versión.",
                "PATCH es seguro, MINOR suma y MAJOR rompe.",
                "El changelog es la cara pública de tu historial.",
                "Automatiza el bump y vincula todo cambio a su origen."
              ],
              lang: "json",
              exampleFile: "package",
              desc: "Aplica versionado semántico (SemVer) y mantén changelogs claros en tus servicios."
            }
          }
        ]
      },
      {
        id: "modulo-03",
        n: 3,
        t: "GitHub Actions",
        level: "avanzado",
        caption: "Tus pipelines viven donde vive tu código",
        desc: "Domina GitHub Actions: workflows, ejecución por jobs y steps, secretos, integración de tests y el despliegue automatizado de tu backend.",
        subtitle: "Construye, verifica y despliega sin salir del repositorio.",
        objectives: [
          "Crear workflows con triggers bien definidos",
          "Organizar jobs, steps y runners de forma eficiente",
          "Proteger secretos y variables de repositorio",
          "Integrar tests y linting en el pipeline",
          "Automatizar despliegues con obra Actions"
        ],
        lessons: [
          { id: "workflows-y-triggers", title: "Workflows y triggers", duration: "12 min", level: "avanzado", category: "ci/cd", cardText: "Estructura de un workflow y los eventos que lo activan: push, PR, schedule y más." },
          { id: "jobs-y-steps", title: "Jobs, steps y runners", duration: "12 min", level: "avanzado", category: "ci/cd", cardText: "Organiza el trabajo en jobs paralelos con steps y runners que ejecuten cada pieza." },
          { id: "secrets-y-variables", title: "Secrets y variables", duration: "12 min", level: "avanzado", category: "ci/cd", cardText: "Guarda claves fuera del código con secrets y variables de repositorio." },
          { id: "tests-lint-en-ci", title: "Tests y linting en CI", duration: "11 min", level: "avanzado", category: "ci/cd", cardText: "Convierte tu suite de pruebas y linters en el portero del repositorio." },
          { id: "deploy-con-actions", title: "Despliegue con Actions", duration: "13 min", level: "avanzado", category: "ci/cd", cardText: "Pipeline completo que construye, publica y despliega tu API en producción." }
        ]
      },
      {
        id: "modulo-04",
        n: 4,
        t: "Contenedores y automatización",
        level: "intermedio",
        caption: "Empaquetar el servicio y automatizar el servidor",
        desc: "Construye imágenes con Docker, orquesta servicios con Compose, gestiona registros de imágenes y automatiza tareas del servidor con cron y scripts.",
        subtitle: "Si se construye una vez, se despliega mil veces igual.",
        objectives: [
          "Crear y optimizar imágenes con Docker",
          "Orquestar servicios multi-contenedor con Docker Compose",
          "Publicar y consumir imágenes desde un registro",
          "Automatizar tareas repetitivas del servidor",
          "Introducirte en la orquestación de contenedores a escala"
        ],
        lessons: [
          {
            id: "docker-para-devops",
            title: "Docker para DevOps",
            duration: "13 min",
            level: "intermedio",
            category: "docker",
            cardText: "Empaqueta tu backend en una imagen reproducible que se ejecuta igual en cualquier parte.",
            desc: "Aprende Docker para DevOps: imágenes, contenedores, build y multi-stage.",
            body: {
              intro: [
                "El problema clásico del backend es que funciona en tu máquina: versión distinta de Node, dependencias diferentes, entorno cambiado. Docker resuelve eso empaquetando la aplicación con todo lo que necesita.",
                "Desde el punto de vista de DevOps, un contenedor es el artefacto por excelencia: una unidad binaria, reproducible y lista para desplegarse en cualquier infraestructura."
              ],
              def: {
                par: "Docker empaqueta la aplicación y sus dependencias en una imagen inmutable. Cuando esa imagen se ejecuta, se convierte en contenedor aislado con su propio sistema de archivos, red y procesos.",
                porQue: "Porque la imagen es la garantía de que lo que probaste es exactamente lo que se despliega. Elimina los errores de entorno y simplifica el pipeline a nivel binario.",
                cuando: "Usa Docker tan pronto como tu proyecto tenga más de un par de dependencias o necesites replicar entornos entre dev y producción."
              },
              concepts: [
                "Imagen: plantilla inmutable con el sistema y las dependencias.",
                "Contenedor: instancia ejecutándose a partir de una imagen.",
                "Dockerfile: receta declarativa para construir la imagen.",
                "Layer: cada instrucción de la imagen, cacheable por separado.",
                "Entrypoint: proceso principal que se ejecuta al iniciar."
              ],
              basic: {
                p: "Un Dockerfile mínimo para una API Node: se parte de la imagen oficial, se define el directorio, se copia el código y se declara el comando de arranque.",
                code: [
                  "FROM node:20-alpine",
                  "WORKDIR /app",
                  "COPY package*.json ./",
                  "RUN npm ci --omit=dev",
                  "COPY . .",
                  "EXPOSE 3000",
                  "CMD [\"node\", \"src/server.js\"]"
                ],
                out: "IMAGEN: mi-api:1.0.0  CONTENEDOR: corriendo en http://localhost:3000",
                lang: "docker"
              },
              intermediate: {
                p: "Construir y ejecutar la imagen de forma rápida: la instrucción docker build genera la imagen y docker run la pone a escuchar. Las pruebas en local son inmediatas.",
                code: [
                  "docker build -t mi-api:1.0.0 .",
                  "docker run -d -p 3000:3000 --name api mi-api:1.0.0",
                  "docker ps",
                  "curl http://localhost:3000/health",
                  "docker logs api"
                ],
                caption: "Construir y ejecutar un contenedor",
                lang: "bash"
              },
              real: {
                p: "Las imágenes de producción usan multi-stage: un stage instala todo para compilar y otro copia solo lo necesario, dando imágenes minúsculas y seguras.",
                ul: [
                  "Stage build: instala dependencias y genera el artefacto.",
                  "Stage runtime: foto base liviana con solo lo indispensable.",
                  "Usuario no root para reducir superficie de ataque.",
                  "Etiquetar la imagen con el checksum o la versión exacta."
                ],
                code: [
                  "FROM node:20-alpine AS build",
                  "WORKDIR /app",
                  "COPY package*.json ./",
                  "RUN npm ci",
                  "COPY . .",
                  "RUN npm run build",
                  "FROM node:20-alpine AS runtime",
                  "WORKDIR /app",
                  "COPY --from=build /app/package*.json ./",
                  "RUN npm ci --omit=dev && npm cache clean --force",
                  "COPY --from=build /app/dist ./dist",
                  "RUN adduser -D appuser",
                  "USER appuser",
                  "EXPOSE 3000",
                  "CMD [\"node\", \"dist/server.js\"]"
                ],
                nota: "Cada instrucción crea una capa cacheable: ordena de lo menos cambiante a lo más cambiante para acelerar builds.",
                lang: "docker"
              },
              expl: [
                "Las imágenes se ejecutan con procesos aislados, sin la sobrecarga de una máquina virtual completa.",
                "El cache por capas hace que builds de código nuevo sean casi instantáneos.",
                "Multistage reduce el peso final: mejorar la velocidad de descarga y el ataque.",
                "Un contenedor debe correr un único proceso principal bien definido."
              ],
              errors: [
                "Guardar estados dentro del contenedor: la persistencia va en volúmenes, no en la capa de escritura.",
                "Ejecutar como root en producción: crea siempre un usuario sin privilegios.",
                "Copiar node_modules dentro de la imagen: instala en el build con npm ci."
              ],
              tips: [
                "Fija versiones exactas de imágenes base y de dependencias.",
                "Aprovecha buildkit y el cache para acelerar los builds.",
                "Escanéa las imágenes con herrramientas como trivy o docker scout.",
                "Etiqueta cada imagen con una referencia única e inmutable."
              ],
              exercise: [
                "Dockeriza una API Express sencilla con multi-stage y usuario no root.",
                "Compara el tamaño de la imagen con y sin el stage de build."
              ],
              summary: [
                "Docker empaqueta la app con su entorno en una imagen inmutable.",
                "Los contenedores reproducen exactamente lo probado.",
                "El multi-stage reduce tamaño y superficie de ataque.",
                "El cache por capas acelera las builds de tu pipeline."
              ],
              lang: "docker",
              exampleFile: "Dockerfile",
              desc: "Empaqueta tu backend en imágenes Docker reproducibles con multi-stage."
            }
          },
          {
            id: "docker-compose-multi-servicio",
            title: "Docker Compose multi-servicio",
            duration: "12 min",
            level: "intermedio",
            category: "docker",
            cardText: "Levanta la API, la base de datos y la caché con un solo comando reproducible.",
            desc: "Orquesta varios contenedores con Docker Compose para desarrollo y entornos pequeños.",
            body: {
              intro: [
                "Una API rara vez vive sola: necesita una base de datos, quizá una caché, tal vez un worker. Docker Compose declara todos esos servicios en un solo archivo.",
                "Con un comando, cualquier persona del equipo levanta la infraestructura completa, idéntica en todas las máquinas."
              ],
              def: {
                par: "Docker Compose define y ejecuta aplicaciones multi-contenedor mediante un archivo YAML (docker-compose.yml) donde cada servicio es una imagen, con sus redes, volúmenes y configuración.",
                porQue: "Porque el entorno de desarrollo pasa de ser un conjunto de instrucciones a un punto de entrada reproducible: docker compose up y todo está listo.",
                cuando: "Úsalo en desarrollo local, entornos de prueba y pequeños despliegues monohost; para orquestación distribuida real pasa a Kubernetes o similar."
              },
              concepts: [
                "Servicio: un contenedor con nombre dentro del archivo.",
                "Red: aislamiento y comunicación entre servicios.",
                "Volumen: persistencia de datos fuera de la vida del contenedor.",
                "Dependencia: declarar el orden de arranque con depends_on.",
                "Healthcheck: condición para saber cuándo un servicio está listo."
              ],
              basic: {
                p: "El archivo mínimo con una API y su base de datos: el servicio api expone el puerto hacia el host y la base de datos persiste en un volumen.",
                code: [
                  "services:",
                  "  api:",
                  "    build: .",
                  "    ports:",
                  "      - \"3000:3000\"",
                  "    env_file: .env",
                  "    depends_on:",
                  "      - db",
                  "  db:",
                  "    image: postgres:16-alpine",
                  "    environment:",
                  "      POSTGRES_PASSWORD: postgres",
                  "    volumes:",
                  "      - db-data:/var/lib/postgresql/data",
                  "volumes:",
                  "  db-data:"
                ],
                out: "Contenedores: api, db   Estado: healthy",
                lang: "yaml"
              },
              intermediate: {
                p: "Operar con Compose es listo: levantar todo, ver estados, seguir logs y detener sin destruir los volúmenes.",
                code: [
                  "docker compose up -d",
                  "docker compose ps",
                  "docker compose logs -f api",
                  "docker compose exec api sh",
                  "docker compose down"
                ],
                caption: "Comandos habituales de Docker Compose",
                lang: "bash"
              },
              real: {
                p: "Un backend con caché y worker: api, redis y un consumidor de cola. Cada servicio tiene su healthcheck, y la app espera a que la base esté sana antes de arrancar.",
                ul: [
                  "Red interna privada: los puertos de db y redis no salen al host.",
                  "Volumen para datos de la base y de la caché.",
                  "Variables de entorno centralizadas en manage.env",
                  "Healthcheck en cada servicio para orquestar el arranque."
                ],
                code: [
                  "services:",
                  "  api:",
                  "    build: .",
                  "    ports:",
                  "      - \"3000:3000\"",
                  "    env_file: manage.env",
                  "    depends_on:",
                  "      db:",
                  "        condition: service_healthy",
                  "  db:",
                  "    image: postgres:16-alpine",
                  "    environment:",
                  "      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}",
                  "    volumes:",
                  "      - pgdata:/var/lib/postgresql/data",
                  "    healthcheck:",
                  "      test: [\"CMD\", \"pg_isready\"]",
                  "      interval: 5s",
                  "      timeout: 3s",
                  "      retries: 5",
                  "  redis:",
                  "    image: redis:7-alpine",
                  "    volumes:",
                  "      - redisdata:/data",
                  "volumes:",
                  "  pgdata:",
                  "  redisdata:"
                ],
                nota: "Con condition: service_healthy, la API no intenta conectar hasta que la base responde, eliminando carreras de arranque.",
                lang: "yaml"
              },
              expl: [
                "Los servicios se comunican por nombre dentro de la red de Compose.",
                "Los volúmenes nominales sobreviven a docker compose down.",
                "Exponer al host solo lo necesario reduce el ataque.",
                "env_file centraliza la configuración sin duplicarla en el repositorio."
              ],
              errors: [
                "Exponer la base de datos al host con 5432:5432 en producción: déjalo solo en la red interna.",
                "Dependencias sin healthcheck: el arranque se convierte en lotería.",
                "Volúmenes con bind de directorio local: para datos reales usa volúmenes con nombre."
              ],
              tips: [
                "Comparte el archivo compose en el repositorio y env.example para el resto del equipo.",
                "Define versiones exactas de imágenes que uses.",
                "Pon límites de memoria y CPU a los servicios de desarrollo.",
                "Usa perfiles para levantar solo los servicios que necesitas."
              ],
              exercise: [
                "Crea un compose con API, PostgreSQL y Redis con healthchecks y volúmenes.",
                "Escribe el flujo de comandos para levantar, revisar logs y bajar sin perder datos."
              ],
              summary: [
                "Compose declara la infraestructura multi-servicio en YAML.",
                "Un comando levanta el entorno completo, reproducible.",
                "Los healthchecks ordenan correctamente el arranque.",
                "Los volúmenes aseguran la persistencia de datos."
              ],
              lang: "yaml",
              exampleFile: "docker-compose",
              desc: "Orquesta API, base de datos y caché con Docker Compose de forma reproducible."
            }
          },
          {
            id: "registro-de-imagenes",
            title: "Repositorios de imágenes",
            duration: "10 min",
            level: "intermedio",
            category: "docker",
            cardText: "Publica y consume imágenes desde un registro: Docker Hub, GHCR o privado.",
            desc: "Aprende a publicar y consumir imágenes de contenedor desde registros públicos y privados.",
            body: {
              intro: [
                "Una imagen en tu máquina todavía no es un artefacto de despliegue: lo es cuando vive en un registro, accesible desde cualquier servidor.",
                "El registro es el repositorio centralizado de imágenes: Docker Hub, GitHub Container Registry (GHCR) o uno privado de tu proveedor."
              ],
              def: {
                par: "Un registro es un servicio que almacena y distribuye imágenes. A él publicas con push y del que tus servidores hacen pull en cada despliegue.",
                porQue: "Porque el registro separa el momento de construir del momento de desplegar: el pipeline crea y sube, y la infraestructura baja la imagen exacta cuando la necesita.",
                cuando: "Configura un registro (privado si la imagen contiene lógica interna) en cuanto empieces a desplegar fuera de tu máquina."
              },
              concepts: [
                "Registro: almacén central de imágenes.",
                "Repositorio: colección de versiones de una misma imagen.",
                "Tag: etiqueta que referencia una versión concreta.",
                "Digest: hash único e inmutable de la imagen.",
                "Autenticación: token para publicar o leer registros privados."
              ],
              basic: {
                p: "Etiquetar correctamente es medio trabajo: la imagen se tagea con el registro, el repositorio, el nombre y la versión, y después se sube.",
                code: [
                  "docker tag mi-api:1.2.0 registry.midominio.com/mi-api:1.2.0",
                  "docker push registry.midominio.com/mi-api:1.2.0",
                  "docker pull registry.midominio.com/mi-api:1.2.0"
                ],
                out: "1.2.0: digest: sha256:9f86d081884c7d659a2feaa0c55ad015...",
                lang: "bash"
              },
              intermediate: {
                p: "Con GHCR el registro es GitHub: publicas la imagen asociada al mismo repositorio donde vive el código, con el token del pipeline como credencial.",
                code: [
                  "docker login ghcr.io -u mi-usuario -p ${GITHUB_TOKEN}",
                  "docker tag mi-api:1.2.0 ghcr.io/mi-org/mi-api:1.2.0",
                  "docker push ghcr.io/mi-org/mi-api:1.2.0"
                ],
                caption: "Publicar imagen en GitHub Container Registry",
                lang: "bash"
              },
              real: {
                p: "En el pipeline, la publicación del artefacto se convierte en un job: construye con el commit como tag único y sube a GHCR usando el token del workflow.",
                ul: [
                  "Tag único: el SHA del commit más el entorno.",
                  "Autenticación con token granulado por repositorio.",
                  "Retención de versiones para cumplir políticas.",
                  "Imágenes privadas o públicas según la política del proyecto."
                ],
                code: [
                  "jobs:",
                  "  publish:",
                  "    runs-on: ubuntu-latest",
                  "    permissions:",
                  "      contents: read",
                  "      packages: write",
                  "    steps:",
                  "      - uses: actions/checkout@v4",
                  "      - name: Login to GHCR",
                  "        uses: docker/login-action@v3",
                  "        with:",
                  "          registry: ghcr.io",
                  "          username: ${{ github.actor }}",
                  "          password: ${{ secrets.GITHUB_TOKEN }}",
                  "      - name: Build y push",
                  "        run: |",
                  "          docker build -t ghcr.io/mi-org/mi-api:${GITHUB_SHA::8} .",
                  "          docker push ghcr.io/mi-org/mi-api:${GITHUB_SHA::8}"
                ],
                nota: "Prefiere el digest o el SHA del commit sobre la etiqueta latest: latest no dice qué versión exacta estás desplegando.",
                lang: "yaml"
              },
              expl: [
                "El pull del despliegue es anónimo en registros públicos y autenticado en privados.",
                "El digest garantiza inmutabilidad: si alguien re-etiqueta, el digest cambia y se detecta.",
                "La retención y el escaneo de vulnerabilidades son políticas del registro.",
                "Los tokens granulares limitan el daño potencial de una credencial filtrada."
              ],
              errors: [
                "Usar latest como referencia de despliegue: un día se descarga una versión inesperada.",
                "Publicar secretos dentro de la imagen: el registro conserva la capa histórica.",
                "Compartir las credenciales del registro en archivos del repositorio."
              ],
              tips: [
                "Etiqueta siempre con versión + entorno y, de forma opcional, latest para conveniencia.",
                "Activa la retención de imágenes para controlar los costos.",
                "Escanea las imágenes al publicarlas y bloquea vulnerabilidades críticas.",
                "Usa un registro privado para imágenes con lógica de negocio interna."
              ],
              exercise: [
                "Publica la imagen de tu API en GHCR con un job de Actions y verifícala con docker pull.",
                "Revisa el digest de la imagen publicada y confírmala con docker inspect."
              ],
              summary: [
                "El registro centraliza y distribuye las imágenes del pipeline.",
                "El tag y el digest identifican las versiones publicadas.",
                "GHCR integra el registro con el repositorio de código.",
                "La inmutabilidad y el escaneo protegén las publicaciones."
              ],
              lang: "bash",
              exampleFile: "publicar",
              desc: "Publica y consume imágenes de contenedor desde registros como Docker Hub y GHCR."
            }
          },
          {
            id: "automatizacion-de-tareas",
            title: "Automatización de tareas del servidor",
            duration: "11 min",
            level: "intermedio",
            category: "automatización",
            cardText: "Backups, limpieza y pulsos programados con cron y scripts de servidor.",
            desc: "Automatiza tareas repetitivas del servidor: backups, limpieza y salud con cron.",
            body: {
              intro: [
                "Parte del trabajo DevOps no son despliegues: son tareas repetidas de mantenimiento, como backups, purga de logs o reportería. Hacerlas a mano garantiza que tarde o temprano se olvide alguna.",
                "El agendador de tareas del sistema, cron, las ejecuta con precisión de minutos y sin intervención humana."
              ],
              def: {
                par: "cron es el programador de tareas de Unix: cada entrada de la crontab define el momento (minuto, hora, día, mes, día de semana) y el comando a ejecutar.",
                porQue: "Porque la fiabilidad de operación se mide por lo que pasa cuando nadie mira: el buen backup es el que se hace solo y se verifica después.",
                cuando: "Utilízalo para tareas periódicas deterministas: copias de seguridad, rotación de logs, envío de métricas o limpieza de temporales."
              },
              concepts: [
                "crontab: la tabla de tareas programadas del usuario.",
                "Expresión cron: los cinco campos que definen la periodicidad.",
                "Log: registrar la salida de la tarea para poder auditarla.",
                "Exit code: el código de salida del script para detectar fallos.",
                "Redundancia: dos niveles de protección para tareas críticas."
              ],
              basic: {
                p: "La sintaxis de una entrada cron: minuto, hora, día del mes, mes y día de semana, seguidos del comando. El asterisco significa cada valor posible.",
                code: [
                  "# min  hour  dom  mon  dow  comando",
                  "30 2 * * * /usr/bin/docker compose -f /srv/api/compose.yml exec db pg_dump -U app app > /backups/api.sql"
                ],
                out: "Cada día a las 02:30 se genera la copia de la base de datos",
                lang: "bash"
              },
              intermediate: {
                p: "Un crontab real combina el backup diario, la rotación de logs semanal y la limpieza de temporales. Cada tarea redirige su log a un archivo con fecha.",
                code: [
                  "SHELL=/bin/bash",
                  "PATH=/usr/local/bin:/usr/bin:/bin",
                  "30 2 * * * /srv/scripts/backup_db.sh >> /var/log/backup.log 2>&1",
                  "0 4 * * 1 /srv/scripts/rotate_logs.sh >> /var/log/rotate.log 2>&1",
                  "0 5 * * * find /tmp -type f -mtime +7 -delete"
                ],
                caption: "Crontab con backups y mantenimiento",
                lang: "ini"
              },
              real: {
                p: "El script de backup con compresión y retención: genera un archivo con fecha, lo comprime y conserva solo los últimos diez. Cron solo llama a este script.",
                ul: [
                  "Backup diario de la PostgreSQL dentro del contenedor.",
                  "Compresión gzip para ahorrar disco.",
                  "Retención de 10 días con rotación automática.",
                  "Log con fecha y hora de cada ejecución."
                ],
                code: [
                  "#!/bin/bash",
                  "set -euo pipefail",
                  "DATE=$(date +%Y%m%d)",
                  "BACKUP_DIR=/backups",
                  "docker compose exec -T db pg_dump -U app app | gzip > ${BACKUP_DIR}/db_${DATE}.sql.gz",
                  "find ${BACKUP_DIR} -name 'db_*.sql.gz' -mtime +10 -delete",
                  "echo \"Backup completado: ${DATE}\""
                ],
                nota: "El backup solo sirve si la restauración está probada: agenda una restauración periódica en un entorno temporal.",
                lang: "bash"
              },
              expl: [
                "cron no espera confirmación: si el comando falla, la tarea termina con su código de salida.",
                "Redirigir la salida es imprescindible: sin log, las fallas quedan ocultas.",
                "Los scripts idempotentes (que se pueden repetir sin daño) son más seguros con cron.",
                "Para tareas de minutos usa timer de systemd por su robustez y sofisticación."
              ],
              errors: [
                "Olvidar redirigir la salida: los errores van al correo o se pierden.",
                "Backups en el mismo disco del servidor: un fallo del disco se lo lleva todo.",
                "Fechas de retención con mtime cuando los archivos se tocan accidentalmente."
              ],
              tips: [
                "Despliega los scripts de mantenimiento desde el repositorio, no ad-hoc.",
                "Monitorea los logs de cron y alerta si una tarea crítica falla.",
                "Prueba la restauración de tus backups al menos una vez al mes.",
                "Usa variables de entorno y paths absolutos dentro del crontab."
              ],
              exercise: [
                "Escribe un script de backup con rotación y programarlo para las 03:00 diarias.",
                "Simula el fallo de la tarea y confirma que el error aparece en el log."
              ],
              summary: [
                "cron ejecuta tareas periódicas con precisión de minutos.",
                "Los scripts idempotentes con logs visten las tareas de producción.",
                "Los backups requieren retención y restauración probada.",
                "La automatización convierte el mantenimiento en algo predecible."
              ],
              lang: "bash",
              exampleFile: "backup",
              desc: "Automatiza backups, limpieza y mantenimiento del servidor con cron y scripts."
            }
          },
          {
            id: "orquestacion-de-contenedores",
            title: "Orquestación de contenedores",
            duration: "14 min",
            level: "intermedio",
            category: "docker",
            cardText: "Escalar, tolerar fallos y coordinar contenedores más allá de un solo host.",
            desc: "Introducción a la orquestación de contenedores: de Docker Compose a Kubernetes.",
            body: {
              intro: [
                "Compose resuelve el host único. Cuando tu backend necesita escalar, sobrevivir a fallos de máquina o balancear tráfico entre réplicas, necesitas un orquestador.",
                "La orquestación coordina contenedores como un sistema: cuántas instancias, dónde, cómo se redescubren y cómo se actualizan sin cortar el servicio."
              ],
              def: {
                par: "Un orquestador gestiona el ciclo de vida de contenedores a través de múltiples servidores: decide dónde correr cada uno, detecta fallas, reinicia, escala y realiza actualizaciones continuas.",
                porQue: "Porque el estado deseado se declara y la plataforma converge hacia él: si un contenedor muere, otro lo reemplaza sin intervención humana.",
                cuando: "Escale tu despliegue a más de un par de servidores, necesites autoescala o tolerancia a fallos de máquina: ese es el momento de Kubernetes o una alternativa gestionada."
              },
              concepts: [
                "Nodo: una máquina (worker) donde se ejecutan contenedores.",
                "Deployment: la declaración del estado deseado de una app.",
                "Réplica: cada contenedor idéntico que atiende tráfico.",
                "Service: punto de entrada estable que balancea hacia las réplicas.",
                "Self-healing: la plataforma detecta y corrige fallas sola."
              ],
              basic: {
                p: "Antes de saltar a Kubernetes, cuántos host puedes escalar contenedores con Docker Swarm o con el balancer de Compose: el concepto de réplicas ya aparece aquí.",
                code: [
                  "docker compose up -d --scale api=3",
                  "docker service create --replicas 3 --publish 80:80 mi-api:1.2.0"
                ],
                out: "3 réplicas del servicio api repartiéndose el tráfico del puerto 80",
                lang: "bash"
              },
              intermediate: {
                p: "En Kubernetes el despliegue se declara con YAML: el Deployment define la imagen, el número de réplicas y la política de actualización.",
                code: [
                  "apiVersion: apps/v1",
                  "kind: Deployment",
                  "metadata:",
                  "  name: api",
                  "  labels:",
                  "    app: api",
                  "spec:",
                  "  replicas: 3",
                  "  selector:",
                  "    matchLabels:",
                  "      app: api",
                  "  template:",
                  "    metadata:",
                  "      labels:",
                  "        app: api",
                  "    spec:",
                  "      containers:",
                  "        - name: api",
                  "          image: registry.midominio.com/mi-api:1.2.0",
                  "          ports:",
                  "            - containerPort: 3000",
                  "          livenessProbe:",
                  "            httpGet:",
                  "              path: /health",
                  "              port: 3000"
                ],
                caption: "Deployment de Kubernetes para una API",
                lang: "yaml"
              },
              real: {
                p: "La línea de comando para operar: aplicar el despliegue, observar los contenedores y escalar bajo demanda. El orquestador ajusta el sistema al estado deseado.",
                ul: [
                  "kubectl apply aplica la declaración al clúster.",
                  "kubectl get pods confirma el estado de cada réplica.",
                  "kubectl scale cambia el número de réplicas.",
                  "kubectl rollout status sigue la actualización continua."
                ],
                code: [
                  "kubectl apply -f deployment.yaml",
                  "kubectl get pods",
                  "kubectl scale deployment api --replicas=5",
                  "kubectl rollout status deployment/api"
                ],
                nota: "La actualización continua de Kubernetes reemplaza las réplicas por tandas: el servicio nunca se interrumpe si la nueva versión pasa los healthchecks.",
                lang: "bash"
              },
              expl: [
                "La declaración del estado deseado es la pieza central: la plataforma converge hacia ella todo el tiempo.",
                "Los probes (liveness/readiness) son la señal de salud que el orquestador usa para reiniciar o apartar tráfico.",
                "El Service equilibra el tráfico entre réplicas, aunque los pods cambien de dirección.",
                "Kubernetes gestionado (EKS, AKS, GKE) quita la carga operativa del control plane."
              ],
              errors: [
                "Desplegar sin probes: el orquestador no sabe cuándo un pod sirve.",
                "Escalar sin límites y disparar costos: define recursos y autoscalado con umbrales.",
                "Tratar los pods como máquinas: son efímeros, el estado vive en servicios externos."
              ],
              tips: [
                "Empieza con Compose y salta al orquestador cuando la escala o la resiliencia lo exija.",
                "Declara recursos (cpu/memory) y límites en cada contenedor.",
                "Haz imágenes sin estado para que cualquier réplica sea intercambiable.",
                "Entra en los conceptos con un clúster local tipo minikube o kind."
              ],
              exercise: [
                "Escribe un Deployment con tres réplicas y un Service que balancee el puerto 80.",
                "Prueba la auto-reparación: elimina un pod y observa cómo la plataforma lo reemplaza."
              ],
              summary: [
                "La orquestación coordina contenedores entre múltiples servidores.",
                "El estado deseado se declara y la plataforma converge hacia él.",
                "Los probes y el Service permiten autoscalado y updates continuos.",
                "Escala empezando con Compose y avanza a Kubernetes cuando lo necesites."
              ],
              lang: "yaml",
              exampleFile: "deployment",
              desc: "Introducción a la orquestación de contenedores y los conceptos de Kubernetes."
            }
          }
        ]
      },
      {
        id: "modulo-05",
        n: 5,
        t: "Despliegue Continuo (CD)",
        level: "avanzado",
        caption: "De la validación a producción sin fricción",
        desc: "Aprende las estrategias de despliegue continuo, la gestión de variables de entorno, el monitoreo de releases y los rollbacks seguros.",
        subtitle: "Desplegar bien es tan importante como escribir bien.",
        objectives: [
          "Comprender la diferencia entre CD y entrega continua",
          "Aplicar estrategias de despliegue según el riesgo",
          "Gestionar variables y secretos en producción",
          "Monitorear el estado de cada despliegue",
          "Ejecutar rollbacks sin pánico ni caos"
        ],
        lessons: [
          { id: "introduccion-despliegue-continuo", title: "Introducción al despliegue continuo", duration: "9 min", level: "avanzado", category: "ci/cd", cardText: "La diferencia entre desplegar y entregar: tu pipeline hasta producción sin toques manuales." },
          { id: "estrategias-de-despliegue", title: "Estrategias de despliegue", duration: "14 min", level: "avanzado", category: "despliegue", cardText: "Blue-green, canary y rolling: cómo exponer una versión nueva con el mínimo riesgo." },
          { id: "variables-de-entorno", title: "Variables de entorno en producción", duration: "10 min", level: "avanzado", category: "despliegue", cardText: "Configura producción sin tocar código: variables, secretos y su rotación." },
          { id: "monitoreo-de-despliegues", title: "Monitoreo de despliegues", duration: "12 min", level: "avanzado", category: "observabilidad", cardText: "Detecta antes de que lo hagan tus usuarios: métricas y alertas tras cada release." },
          { id: "rollbacks-y-reversiones", title: "Rollbacks y reversiones", duration: "15 min", level: "avanzado", category: "despliegue", cardText: "Planifica el camino de vuelta: estrategias y automatización del rollback." }
        ]
      },
      {
        id: "modulo-06",
        n: 6,
        t: "DevOps en el Backend",
        level: "avanzado",
        caption: "Nginx, HTTPS e infraestructura como código",
        desc: "Despliega APIs reales detrás de Nginx con HTTPS, gestiona la infraestructura como código y monta el monitoreo básico de tus servicios.",
        subtitle: "La operación del backend en su forma más práctica.",
        objectives: [
          "Configurar Nginx como reverse proxy",
          "Asegurar tráfico con SSL/HTTPS mediante Let's Encrypt",
          "Gestionar infraestructura como código",
          "Recolectar logs y métricas básicas",
          "Desplegar una API completa con Nginx"
        ],
        lessons: [
          { id: "reverse-proxy-con-nginx", title: "Reverse proxy con Nginx", duration: "13 min", level: "avanzado", category: "nginx", cardText: "One entrada pública, varios servicios por detrás: el arte del proxy inverso." },
          { id: "ssl-https-con-lets-encrypt", title: "SSL y HTTPS con Let's Encrypt", duration: "12 min", level: "avanzado", category: "seguridad", cardText: "Certificados gratuitos, renovación automática y HTTPS sin excusas." },
          { id: "infraestructura-como-codigo", title: "Infraestructura como código", duration: "14 min", level: "avanzado", category: "nube", cardText: "Describe tu servidor, red y deps en archivos versionables y reproducibles." },
          { id: "logs-y-monitoreo-basico", title: "Logs y monitoreo básico", duration: "12 min", level: "avanzado", category: "observabilidad", cardText: "Un mínimo de visibilidad para saber siempre qué está pasando en tu API." },
          { id: "despliegue-api-con-nginx", title: "Despliegue completo: API con Nginx", duration: "16 min", level: "avanzado", category: "despliegue", cardText: "El proyecto que integra todo: build, prueba, deploy, proxy y HTTPS." }
        ]
      },
      {
        id: "modulo-07",
        n: 7,
        t: "Observabilidad y cultura DevOps",
        level: "avanzado",
        caption: "Ver, medir y operar como un equipo maduro",
        desc: "Cierra el curso con observabilidad orientada a objetivos, guardias on-call preparadas, documentación de runbooks y un mapa real de madurez DevOps para tu equipo.",
        subtitle: "El DevOps maduro se ve en cómo el equipo reacciona cuando algo sale mal.",
        objectives: [
          "Definir indicadores y SLOs para tu servicio",
          "Diseñar alertas y guardias on-call sostenibles",
          "Escribir documentación y runbooks accionables",
          "Evaluar y elevar la madurez DevOps del equipo"
        ],
        lessons: [
          {
            id: "observabilidad-y-slos",
            title: "Observabilidad y SLOs",
            duration: "13 min",
            level: "avanzado",
            category: "observabilidad",
            cardText: "Define SLIs, SLOs y presupuestos de error para decidir cuándo tu servicio es aceptable.",
            desc: "Define indicadores de servicio y SLOs para gobernar la calidad de tu backend.",
            body: {
              intro: [
                "Monitorear no basta: sin criterio, cualquier número puede parecer bueno o malo. La observabilidad orientada a objetivos responde con claridad a la pregunta central del equipo DevOps: ¿este servicio es aceptable?",
                "Para responderla usamos tres siglas: SLI (qué medimos), SLO (cuánto queremos) y presupuesto de error (cuánto margen queda)."
              ],
              def: {
                par: "Un SLI es un indicador objetivo de salud del servicio, como la disponibilidad o la latencia. Un SLO fija el umbral objetivo: por ejemplo, el 99.9 por ciento de las peticiones exitosas en 30 días.",
                porQue: "Porque el SLO convierte opiniones en pactos medibles entre el equipo, el negocio y los usuarios. Además guía la prioridad: si consumes el presupuesto de error, dejas las funcionalidades y arreglas disponibilidad.",
                cuando: "Define al menos un SLO por servicio crítico desde el primer despliegue serio, y revísalo con cada cambio grande de arquitectura."
              },
              concepts: [
                "SLI: métrica que refleja la calidad percibida (éxito, latencia).",
                "SLO: el objetivo pactado sobre un SLI.",
                "Presupuesto de error: el margen de falla aceptable en un periodo.",
                "Burn rate: velocidad a la que se consume el presupuesto.",
                "Multiwindow alerts: alertas que evitan ruido combinando ventanas."
              ],
              basic: {
                p: "Medir la experiencia real del usuario desde la terminal es el primer SLI: tiempo de respuesta y código de estado de las peticiones a tu API.",
                code: [
                  "curl -s -o /dev/null -w \"HTTP %{http_code} en %{time_total}s\\n\" https://api.midominio.com/health",
                  "for i in 1 2 3 4 5 6 7 8; do",
                  "  curl -s -o /dev/null -w \"%{http_code} %{time_total}\\n\" https://api.midominio.com/health",
                  "done"
                ],
                out: "HTTP 200 en 0.081s\nHTTP 200 en 0.079s\nHTTP 200 en 0.085s",
                lang: "bash"
              },
              intermediate: {
                p: "El SLO se expresa con datos: una promesa de 99.9 por ciento de disponibilidad al mes permite apenas un puñado de minutos de error. Ese número se define en un archivo de configuración versionable.",
                code: [
                  "budget: 99.9",
                  "window: 720h",
                  "sli:",
                  "  metric: http_requests_total",
                  "  success:",
                  "    - http_status =~ \"^2[0-9][0-9]$\"",
                  "  valid:",
                  "    - http_status =~ \"^[1-5][0-9][0-9]$\""
                ],
                caption: "Definición de SLO en YAML",
                lang: "yaml"
              },
              real: {
                p: "Los SLI y SLO se presentan detrás del dashboard: disponibilidad por peticiones exitosas y latencia por p90, y las alertas se disparan según la velocidad de consumo del presupuesto.",
                ul: [
                  "Disponibilidad: peticiones exitosas sobre totales (SLO 99.95%).",
                  "Latencia: p90 de la respuesta (SLO por debajo de 500 ms).",
                  "Fake requests: fallo sintético desde fuera de la red.",
                  "Burn rate rápida: alerta páginas si el presupuesto se agota en horas."
                ],
                code: [
                  "groups:",
                  "  - name: slo-api",
                  "    rules:",
                  "      - alert: HighErrorBurnRate",
                  "        expr: job:slo_errors:ratio_rate5m > 14.4",
                  "        labels:",
                  "          severity: page",
                  "        annotations:",
                  "          summary: \"El presupuesto de error se está agotando rápido\""
                ],
                nota: "Las alertas basadas en burn rate avisan cuando el presupuesto se consume a velocidad peligrosa, no solo cuando cruza el umbral.",
                lang: "yaml"
              },
              expl: [
                "Sin SLI no hay base para decidir si un cambio es una regresión o una mejora.",
                "El SLO es un pacto: define expectativas entre negocio y operaciones.",
                "El presupuesto de error se agota en un periodo, no es una métrica instantánea.",
                "La observabilidad se vuelve accionable cuando las gráficas tienen umbrales negociados."
              ],
              errors: [
                "Decir que el sistema está al 100 por ciento: la medición es de 99.9x y el 100 nunca se pacta.",
                "SLOs sin SLI definido: sin datos no hay pacto posible.",
                "Alertar sobre cada pico: ruido que desensibiliza al guardia."
              ],
              tips: [
                "Empieza con un SLO de disponibilidad y uno de latencia.",
                "Publica el SLO donde el equipo y el negocio lo vean.",
                "Revisa mensualmente el presupuesto consumido.",
                "Ajusta los SLO con datos, no con intuición."
              ],
              exercise: [
                "Define dos SLO para tu API (disponibilidad y latencia) con su presupuesto mensual.",
                "Calcula cuántos minutos de error permite cada uno en el mes."
              ],
              summary: [
                "SLI mide, SLO pacta y el presupuesto de error gobierna.",
                "La observabilidad accionable arranca con umbrales negociados.",
                "Las alertas de burn rate solo suenan cuando importa.",
                "Los SLO se revisan con datos y se comunican al negocio."
              ],
              lang: "yaml",
              exampleFile: "slo",
              desc: "Define SLIs, SLOs y presupuestos de error para tu servicio backend."
            }
          },
          {
            id: "alertas-y-on-call",
            title: "Alertas y guardias on-call",
            duration: "12 min",
            level: "avanzado",
            category: "observabilidad",
            cardText: "Alertas que significan algo y guardias preparadas para responder sin quemarse.",
            desc: "Diseña alertas accionables y rotaciones on-call sostenibles para tu equipo.",
            body: {
              intro: [
                "Una alerta ruidosa obliga a la guardia a ignorarla; una alerta crítica escondida le cuesta minutos de pantalla negra al servicio. El diseño del sistema de alertas define la calidad de tu turno.",
                "Y detrás de las alertas está el humano: la rotación on-call debe estar documentada, justa y preparada para responder sin agotarse."
              ],
              def: {
                par: "Una alerta es una notificación automática generada por una condición de monitoreo. On-call es el turno en el que alguien del equipo responde esas alertas y ejecuta el runbook de escalado.",
                porQue: "Porque la alerta correcta conecta el síntoma con la causa: cada alerta debe implicar una acción posible. Y un turno bien diseñado protege al servicio sin quemar personas.",
                cuando: "Diseña alertas paginables solo para lo que requiere intervención en minutos; el resto, basta un dashboard o una notificación no urgente."
              },
              concepts: [
                "Cardinalidad: alertas limitadas y significativas, no datos crudos.",
                "Route: hacia qué equipo o servicio va cada alerta.",
                "Escalado: qué pasa si la alerta no se reconoce a tiempo.",
                "Rotación: el calendario justo de los turnos on-call.",
                "Runbook: la guía paso a paso para responder una alerta."
              ],
              basic: {
                p: "Una regla de alerta simple en Prometheus: latencia media de las peticiones por encima de un segundo durante cinco minutos. Solo avisa la condición sostenida, no un pico aislado.",
                code: [
                  "groups:",
                  "  - name: latency",
                  "    rules:",
                  "      - alert: HighLatency",
                  "        expr: histogram_quantile(0.9, rate(http_request_duration_seconds_bucket[5m])) > 1",
                  "        for: 5m",
                  "        labels:",
                  "          severity: warning",
                  "        annotations:",
                  "          summary: \"Latencia p90 alta en la API\""
                ],
                out: "Se dispara si la p90 supera 1 s durante 5 minutos continuos",
                lang: "yaml"
              },
              intermediate: {
                p: "Alertmanager enruta cada alerta adonde corresponde: críticos al teléfono del turno, warnings a un canal silencioso, y definiciones claras de escalado si nadie responde.",
                code: [
                  "route:",
                  "  group_by: [alertname, job]",
                  "  routes:",
                  "    - matchers:",
                  "        - severity = \"page\"",
                  "      receiver: on-call-pager",
                  "receivers:",
                  "  - name: on-call-pager",
                  "    pagerduty_configs:",
                  "      - service_key: <secreto>"
                ],
                caption: "Rutas de Alertmanager",
                lang: "yaml"
              },
              real: {
                p: "La rotación on-call se define de forma explícita con sus reglas: quién está de guardia, cuándo comienza el turno y cuáles son los escalones si la alerta no se resuelve.",
                ul: [
                  "Guardia primaria y secundaria respaldando la primera.",
                  "Turnos de una semana con traspaso documentado.",
                  "Escalado tras 15 minutos sin respuesta al primer nivel.",
                  "Compensación y revisión de carga para evitar la fatiga."
                ],
                code: [
                  "schedule:",
                  "  - guardia: ana",
                  "    backup: bruno",
                  "    semana: 2026-W38",
                  "escalado:",
                  "  - nivel: 1",
                  "    rol: guardia_primaria",
                  "    tiempo: 0 min",
                  "  - nivel: 2",
                  "    rol: guardia_secundaria",
                  "    tiempo: 15 min",
                  "  - nivel: 3",
                  "    rol: lider_tecnico",
                  "    tiempo: 30 min"
                ],
                nota: "Cada alerta crítica debe tener un runbook enlazado en la propia notificación: sin plan de acción, la guardia improvise justo cuando no debe.",
                lang: "yaml"
              },
              expl: [
                "Una buena alerta se define por la acción que desencadena, no por el umbral.",
                "Menos paginaciones, mejor paginadas: cada una requiere respuesta en minutos.",
                "El escalado protege al servicio cuando la primera línea no responde.",
                "La rotación justa y con traspaso mantiene el equipo sano y el conocimiento compartido."
              ],
              errors: [
                "Alertar por cada 5xx único: el ruido oculta lo importante.",
                "Turnos sin backup ni descanso: el burnoute roba calidad al servicio.",
                "Sin runbooks: la alerta es un hueco en vez de una instrucción."
              ],
              tips: [
                "Evalúa cada alerta cada trimestre: elimina las que nunca fueron accionables.",
                "Deja que el propio servicio genere su simetría: alerta también en verde.",
                "Automatiza el traspaso de guardia y su documentación.",
                "Mide la salud del on-call: cantidad de páginas, falsos positivos, tiempo despierto."
              ],
              exercise: [
                "Revisa las alertas de tu servicio y escribe para cada una la acción esperada.",
                "Define una rotación on-call de una semana con primaria, segundaria y escalado."
              ],
              summary: [
                "Las alertas accionables exigen una acción clara tras cada aviso.",
                "Alertmanager enruta según severidad y equipo responsable.",
                "La rotación on-call se documenta, se reparte y se compensa.",
                "El runbook convierte cada alerta en una instrucción ejecutable."
              ],
              lang: "yaml",
              exampleFile: "alertas",
              desc: "Diseña alertas accionables, enrutamiento y rotaciones on-call sostenibles."
            }
          },
          {
            id: "documentacion-y-playbooks",
            title: "Documentación y runbooks",
            duration: "10 min",
            level: "avanzado",
            category: "documentación",
            cardText: "Convierte la memoria del equipo en documentación accionable con runbooks.",
            desc: "Escribe documentación técnica y runbooks accionables ante incidentes.",
            body: {
              intro: [
                "La primera pregunta de una guardia ante un incidente es: ¿esto ya pasó? Si la respuesta no está en un runbook, el conocimiento se recompra horas caras a alguien que ya lo resolvió.",
                "Documentar no es burocracia: es convertir la experiencia individual en capacidad del equipo."
              ],
              def: {
                par: "Un runbook es una guía operativa paso a paso para ejecutar una tarea o responder a un incidente concreto: síntomas, comandos, verificaciones y criterios de escalado.",
                porQue: "Porque los errores se repiten en patrones, y un runbook bien escrito reduce el tiempo de resolución de horas a minutos, además de igualar la actuación de cualquier guardia.",
                cuando: "Escribe runbooks para cada alerta paginable, cada tarea crítica de operación y cada procedimiento de recuperación antes de que el incidente lo exija."
              },
              concepts: [
                "Runbook: guía accionable para responder a un incidente o tarea.",
                "Playbook: colección de runbooks organizada por sistema.",
                "Síntomas: la entrada del runbook desde la observabilidad.",
                "Escalado: cuándo y a quién subir el problema.",
                "Postmortem: aprendizaje después del incidente, sin culpas."
              ],
              basic: {
                p: "La estructura de un runbook eficaz: contexto, síntomas, verificación, pasos y escalado. Un runbook corto y específico es mejor que uno largo y genérico.",
                code: [
                  "# Runbook: API con alto error rate",
                  "",
                  "## Sintomas",
                  "- Error 5xx en monotonía de la API",
                  "- Alert: HighErrorRate activa",
                  "",
                  "## Verificacion",
                  "1. kubectl get pods -n backend",
                  "2. kubectl logs -n backend -l app=api --tail=200",
                  "",
                  "## Pasos",
                  "1. Revisar últimos deploys en el canal de releases",
                  "2. Si el deploy fue reciente y sospechoso: rollback",
                  "",
                  "## Escalado",
                  "- Nivel 1: guardia de turno",
                  "- Nivel 2: lider de backend tras 15 min"
                ],
                lang: "text"
              },
              intermediate: {
                p: "La documentación se mantiene cerca del código: el repositorio guarda runbooks, diagramas y changelogs, con revisión por pull request como cualquier otro cambio técnico.",
                code: [
                  "docs/",
                  "  runbooks/",
                  "    api-alto-error-rate.md",
                  "    db-restauracion.md",
                  "    redis-reinicio-cluster.md",
                  "  arquitectura/",
                  "    system-overview.md",
                  "    despliegue-produccion.md"
                ],
                caption: "Estructura de documentación versionada",
                lang: "bash"
              },
              real: {
                p: "El runbook de restauración de base de datos es de los más importantes que existen: ante la caída crítica, la guardia ejecuta pasos verificados en vez de improvisar. Los comandos concretos salvan horas.",
                ul: [
                  "Comprobar el backup más reciente antes de tocar nada.",
                  "Apagar rautores de escritura para evitar más daño.",
                  "Restaurar en un entorno temporal y validar primero.",
                  "Promover la restauración validada a producción."
                ],
                code: [
                  "## Restauracion de PostgreSQL",
                  "",
                  "1. docker compose exec db pg_isready",
                  "2. docker compose cp backup.sql.gz db:/tmp/restore.sql.gz",
                  "3. docker compose exec db sh -c \"gunzip -c /tmp/restore.sql.gz | psql -U app app\"",
                  "4. docker compose exec db 'select count(*) from usuarios;'",
                  "",
                  "Validar siempre la integridad antes de anunciar el cierre del incidente."
                ],
                nota: "Un runbook sin fecha de revisión se pudre. Programa auditorías semestrales y prueba los procedimientos críticos en entornos de prueba.",
                lang: "text"
              },
              expl: [
                "El runbook empieza por los síntomas, exactamente lo que ve la alerta.",
                "Los pasos deben ser verificables: cada uno permite confirmar avance.",
                "La documentación versada evoluciona con el sistema que documenta.",
                "El postmortem sin culpables convierte cada incidente en mejora."
              ],
              errors: [
                "Runbooks desactualizados: peores que ninguno, porque generan confianza falsa.",
                "Documentación en soledad de nadie: sin dueño, se oxida.",
                "Conocimiento solo en la cabeza de la persona senior: riesgo mudo."
              ],
              tips: [
                "Enlaza cada runbook desde la alerta que lo necesita.",
                "Escribe pensando en la persona de guardia a las 3 de la mañana.",
                "Prueba los runbooks críticos en jornadas de caos controlado.",
                "Mide la fracción de incidentes resueltos sin necesidad de improvisar."
              ],
              exercise: [
                "Escribe el runbook del incidente más frecuente de tu API con síntomas, pasos y escalado.",
                "Revisa un runbook viejo, actualízalo y pásalo por revisión."
              ],
              summary: [
                "Los runbooks convierten la memoria individual en capacidad del equipo.",
                "La estructura eficaz va de los síntomas a la acción verificada.",
                "La documentación vive en el repositorio y se revisa como el código.",
                "Los procedimientos críticos se prueban y se auditan."
              ],
              lang: "text",
              exampleFile: "runbook",
              desc: "Escribe documentación técnica y runbooks accionables para tus operaciones."
            }
          },
          {
            id: "madurez-devops",
            title: "Madurez DevOps en el equipo",
            duration: "11 min",
            level: "avanzado",
            category: "cultura",
            cardText: "Un mapa para evaluar y elevar la madurez DevOps de tu equipo, no solo tus herramientas.",
            desc: "Evalúa y eleva la madurez DevOps de tu equipo más allá de las herramientas.",
            body: {
              intro: [
                "Instalar GitHub Actions y Docker no te convierte en un equipo DevOps: es una cuestión de cultura, procesos y feedback. La madurez se mide en cómo colaboran dev y ops y cuánta confianza tienen en cada despliegue.",
                "Al final del viaje no está la herramienta perfecta sino el equipo que reacciona, aprende y mejora continuamente."
              ],
              def: {
                par: "La madurez DevOps es el grado en que un equipo integra el desarrollo y las operaciones: automatización, feedback rápido, despliegues frecuentes y cultura de aprendizaje.",
                porQue: "Porque mide el avance real hacia entregas rápidas y confiables, más allá de adoptar herramientas sueltas. Un mapa honesto de madurez señala las próximas palancas de mejora.",
                cuando: "Evalúa la madurez periódicamente, por ejemplo cada seis meses, y úsala para decidir qué automatizar o qué proceso fortalecer a continuación."
              },
              concepts: [
                "Automatización: la repetitividad deja de ser manual.",
                "Feedback: tiempos de detección y de entrega de errores.",
                "Cultura: colaboración y confianza entre dev y ops.",
                "Medición: métricas DORA como lead time y MTTR.",
                "Aprendizaje: postmortems y experimentos sin culpa."
              ],
              basic: {
                p: "Antes de cualquier mejora, el inventario del punto de partida: ¿cuánto tarda un cambio en llegar a producción hoy? ¿y en detectarse una caída? Esas dos cifras miden tu madurez.",
                code: [
                  "echo \"Lead time: desde commit hasta prod\"",
                  "echo \"Menor de 1 hora: 10 puntos\"",
                  "echo \"MTTR: tiempo medio de restauracion\"",
                  "echo \"Recuperacion en minutos: 10 puntos\""
                ],
                out: "Diagnóstico inicial de velocidad y recuperación",
                lang: "bash"
              },
              intermediate: {
                p: "Un checklist de madurez practicado por niveles: cada área tiene puntos concretos como el despliegue manual frente al automático y el monitoreo pasivo frente al orientado a objetivos.",
                code: [
                  "areas:",
                  "  automatizacion:",
                  "    nivel1: \"despliegue manual por pasos\"",
                  "    nivel2: \"pipeline automatico en CI\"",
                  "    nivel3: \"deploy a prod autonomo y reversible\"",
                  "  feedback:",
                  "    nivel1: \"errores se detectan en horas\"",
                  "    nivel2: \"monitoreo en dashboards\"",
                  "    nivel3: \"alertas con SLO y runbooks\"",
                  "  cultura:",
                  "    nivel1: \"dev y ops aislados\"",
                  "    nivel2: \"revisiones y postmortem sin culpa\"",
                  "    nivel3: \"equipo incluido: devops como propiedad compartida\""
                ],
                caption: "Matriz de madurez por niveles",
                lang: "yaml"
              },
              real: {
                p: "El despliegue maduro se parece a una operación declarada: la misma imagen se promueve, el despliegue es reversible y el monitoreo orienta a objetivos confirma la buena salud antes de cerrar el incidente.",
                ul: [
                  "Despliegues bajo demanda y reversibles en minutos.",
                  "Métricas de disponibilidad y latencia en el panel del equipo.",
                  "Alertas con runbooks y escalado definido.",
                  "Postmortem sin culpa tras cada incidente relevante."
                ],
                code: [
                  "pipeline:",
                  "  test: npm test",
                  "  build: docker build -t mi-api:${SHA} .",
                  "  publish: docker push reg/mi-api:${SHA}",
                  "  deploy:",
                  "    staging: docker compose -f compose.staging.yml up -d",
                  "    prod: kubectl set image deploy/api api=reg/mi-api:${SHA}",
                  "  verify:",
                  "    - kubectl rollout status deploy/api",
                  "    - curl -f https://api.midominio.com/health"
                ],
                nota: "Un signo de madurez simple: cuántas veces al día puede tu equipo desplegar con total confianza. Ve de menos a más semana a semana.",
                lang: "yaml"
              },
              expl: [
                "La automatización elimina la fricción, pero sin feedback el equipo despliega rápido hacia el desastre.",
                "La cultura de postmortem sin culpa convierte los incidentes en mejoras.",
                "Medir con métricas DORA (lead time, frecuencia de deploy, MTTR, tasa de fallo) da una foto objetiva.",
                "La madurez no es un destino: es un ciclo de evaluar, priorizar, mejorar y volver a medir."
              ],
              errors: [
                "Creer que una herramienta basta: sin cultura, la herramienta se burocratiza.",
                "Medir la madurez una sola vez: la foto se estanca y olvida.",
                "Perseguir el 100 por ciento de automatización: hay decisiones que merecen ser humanas."
              ],
              tips: [
                "Haz una autoevaluación semestral con todo el equipo incluido.",
                "Prioriza las dos áreas con más impacto y trabajalas un ciclo.",
                "Comparte las métricas en las retrospectivas.",
                "Involucra dev y ops en cada cambio de proceso."
              ],
              exercise: [
                "Aplica el checklist de madurez a tu equipo y marca el nivel actual de cada área.",
                "Elige una mejora concreta para el próximo ciclo y define cómo medirás su efecto."
              ],
              summary: [
                "La madurez DevOps es cultura, feedback y automatización.",
                "Las métricas DORA dan una fotografía objetiva del avance.",
                "La evaluación periódica marca las siguientes palancas.",
                "El destino es un equipo que entrega rápido y mejora sin miedo."
              ],
              lang: "yaml",
              exampleFile: "madurez",
              desc: "Evalúa y eleva la madurez DevOps de tu equipo con métricas y checklist."
            }
          }
        ]
      }
    ]
  }
];