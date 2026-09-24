// _curriculum_cloud.mjs
// Currículum del curso de Cloud Computing para Backend.
// Exporta COURSES con todos los módulos y lecciones.
// Las lecciones existentes en disco (módulos 01, 02 y 06) se listan SIN body
// (no se regeneran); las nuevas (módulos 03, 04, 05 y 07) llevan body completo
// con las 12 secciones estándar.

export const COURSES = [
  {
    slug: "cloud",
    title: "Cloud Computing",
    modules: [
      {
        id: "modulo-01",
        n: 1,
        t: "Fundamentos del Cloud",
        level: "avanzado",
        caption: "Los conceptos que sostienen todo lo demás",
        desc: "Comprende qué es la nube, los modelos de servicio IaaS, PaaS y SaaS, las regiones y zonas de disponibilidad, y las herramientas de cada proveedor para empezar con bases sólidas.",
        subtitle: "Antes de desplegar nada, entiende cómo piensa la nube.",
        objectives: [
          "Explicar qué es la nube y por qué domina el backend",
          "Diferenciar IaaS, PaaS y SaaS con ejemplos reales",
          "Entender regiones y zonas de disponibilidad",
          "Comparar VPS y serverless para elegir el modelo",
          "Manejar las CLIs y consolas de cada proveedor"
        ],
        lessons: [
          { id: "que-es-la-nube", title: "¿Qué es la nube? Por qué domina el Backend", duration: "9 min", level: "avanzado", category: "fundamentos", cardText: "La nube convirtió la infraestructura en un servicio bajo demanda: por eso domina el backend moderno." },
          { id: "modelos-de-servicio-iaas-paas-saas", title: "Modelos de servicio: IaaS, PaaS, SaaS", duration: "12 min", level: "avanzado", category: "fundamentos", cardText: "Dónde empieza y termina tu responsabilidad en cada modelo de servicio de la nube." },
          { id: "regiones-y-zonas-de-disponibilidad", title: "Regiones y zonas de disponibilidad", duration: "10 min", level: "avanzado", category: "fundamentos", cardText: "Dónde corre tu código, qué es una zona y por qué la ubicación define latencia y resiliencia." },
          { id: "vps-vs-serverless", title: "VPS vs Serverless", duration: "12 min", level: "avanzado", category: "fundamentos", cardText: "Máquina virtual constante o código que escala a demanda: cuándo elegir cada modelo." },
          { id: "cli-y-consolas-de-cada-proveedor", title: "CLIs y consolas de cada proveedor", duration: "10 min", level: "avanzado", category: "fundamentos", cardText: "aws, az y gcloud: el mismo ritmo (login, contexto, crear, listar) en las tres grandes nubes." }
        ]
      },
      {
        id: "modulo-02",
        n: 2,
        t: "Amazon Web Services (AWS)",
        level: "avanzado",
        caption: "Los servicios que sostienen al backend por defecto",
        desc: "Domina los servicios fundamentales de AWS para backend: máquinas virtuales EC2, almacenamiento S3, bases de datos gestionadas RDS, funciones serverless Lambda y seguridad IAM.",
        subtitle: "AWS tiene la mayor cobertura de servicios: aprende el núcleo.",
        objectives: [
          "Crear y gestionar máquinas virtuales con EC2",
          "Almacenar y servir archivos con S3",
          "Desplegar bases de datos gestionadas con RDS",
          "Escribir funciones serverless con Lambda",
          "Proteger el acceso con IAM y menor privilegio"
        ],
        lessons: [
          { id: "intro-a-aws", title: "Introducción a AWS", duration: "10 min", level: "avanzado", category: "aws", cardText: "Una cuenta, cientos de servicios: la estructura de AWS y el patrón de backend que lo sostiene." },
          { id: "ec2-maquinas-virtuales", title: "EC2: máquinas virtuales", duration: "13 min", level: "avanzado", category: "aws", cardText: "Levanta servidores con EC2: instancias, AMIs, tipos y los conceptos del IaaS clásico." },
          { id: "s3-almacenamiento", title: "S3: almacenamiento de archivos", duration: "10 min", level: "avanzado", category: "aws", cardText: "Buckets, objetos y políticas: el almacenamiento de archivos escalable de AWS." },
          { id: "rds-bases-de-datos", title: "RDS: bases de datos gestionadas", duration: "11 min", level: "avanzado", category: "aws", cardText: "PostgreSQL, MySQL y más, con backups y réplicas gestionadas por AWS." },
          { id: "lambda-functions", title: "Lambda: funciones serverless", duration: "12 min", level: "avanzado", category: "aws", cardText: "Código que corre solo cuando hay evento: el serverless de referencia de AWS." },
          { id: "iam-y-seguridad", title: "IAM y seguridad", duration: "9 min", level: "avanzado", category: "aws", cardText: "Usuarios, roles y políticas: controla quién puede hacer qué en tu cuenta." }
        ]
      },
      {
        id: "modulo-03",
        n: 3,
        t: "Microsoft Azure",
        level: "intermedio",
        caption: "La nube empresarial de Microsoft",
        desc: "Aprende Azure desde la perspectiva del backend: suscripciones y resource groups, App Service como PaaS, Functions serverless, bases de datos gestionadas y Blob Storage.",
        subtitle: "Azure gana terreno en el backend corporativo: conócela de primera mano.",
        objectives: [
          "Organizar recursos con suscripciones y resource groups",
          "Desplegar APIs con App Service",
          "Crear funciones serverless con Azure Functions",
          "Gestionar datos con Azure SQL y Cosmos DB",
          "Almacenar archivos con Blob Storage"
        ],
        lessons: [
          {
            id: "intro-a-azure",
            title: "Introducción a Azure",
            duration: "10 min",
            level: "intermedio",
            category: "azure",
            cardText: "Azure agrupa todo en suscripciones y resource groups: la estructura de entrada a la nube de Microsoft.",
            desc: "Introducción a Azure: suscripciones, resource groups y primeros pasos con la CLI az.",
            body: {
              intro: [
                "Azure es la nube pública de Microsoft y una de las tres grandes que sostienen el backend moderno. Su fortaleza histórica viene del mundo corporativo de Windows y Office, pero hoy ofrece exactamente el mismo tipo de servicios Linux, contenedores y serverless que sus competidores.",
                "Para un backend, Azure interesa sobre todo por su ecosistema PaaS, por la gestión de identidades a través de Entra ID y por niveles de entrada muy competitivos en servicios como Functions o Blob Storage."
              ],
              def: {
                par: "Azure es un conjunto de más de doscientos servicios de infraestructura y plataforma ofrecidos por Microsoft con pago por uso. Los recursos se agrupan en resource groups dentro de una suscripción, y todo se gestiona desde el portal, la CLI az o las APIs.",
                porQue: "Porque muchos clientes corporativos ya viven en el ecosistema Microsoft y Azure les permite desplegar backend sin cambiar de proveedor, con identidad y compliance comunes.",
                cuando: "Úsalo cuando el equipo ya trabaja con tecnologías Microsoft, necesites integración con Entra ID para SSO corporativo o las licencias existentes de SQL Server reduzcan el costo total."
              },
              concepts: [
                "Susbscripción: el contenedor de facturación que agrupa todos tus recursos.",
                "Resource group: carpeta lógica donde viven los recursos de un proyecto.",
                "Región: el datacenter físico de Azure como westeurope o eastus.",
                "Portal de Azure: la consola web para gestionar todo el ecosistema.",
                "Azure CLI (az): la herramienta de línea de comandos multiplataforma."
              ],
              basic: {
                p: "La rutina de acceso más básica: iniciar sesión, listar las suscripciones y preparar el terreno creando un resource group. Todo lo demás se crea dentro de ese grupo.",
                code: [
                  "az login",
                  "az account list --output table",
                  'az account set --subscription "Mi-Suscripcion"',
                  "az group create --name rg-api-backend --location westeurope"
                ],
                out: "LOCATION      NAME\nwesteurope    rg-api-backend",
                lang: "bash"
              },
              intermediate: {
                p: "Cada servicio se crea con un comando az seguido del tipo de recurso. Por ejemplo, una cuenta de almacenamiento necesita un nombre único global y tags que ayuden a imputar costos.",
                code: [
                  "az storage account create \\",
                  "  --name midominioarchivos \\",
                  "  --resource-group rg-api-backend \\",
                  "  --location westeurope \\",
                  "  --sku Standard_LRS \\",
                  "  --tags proyecto=midomini api=backend"
                ],
                caption: "Crear una cuenta de almacenamiento de Azure",
                lang: "bash"
              },
              real: {
                p: "En producción los recursos se declaran para poder reproducirlos. Con Terraform declaramos el resource group y la cuenta de almacenamiento, y todo queda versionado en el repositorio.",
                ul: [
                  "La infraestructura vive en código y se revisa con pull requests.",
                  "Los recursos se etiquetan para imputar costos por proyecto.",
                  "Los secretos se referencian desde variables y no se escriben en el código.",
                  "El mismo plan se aplica a desarrollo, staging y producción."
                ],
                code: [
                  'resource "azurerm_resource_group" "main" {',
                  '  name     = "rg-api-backend"',
                  '  location = "westeurope"',
                  "}",
                  'resource "azurerm_storage_account" "archivos" {',
                  '  name                     = "midominioarchivos"',
                  '  resource_group_name      = azurerm_resource_group.main.name',
                  '  location                 = azurerm_resource_group.main.location',
                  '  account_tier             = "Standard"',
                  '  account_replication_type = "LRS"',
                  "  tags = {",
                  '    proyecto = "midomini"',
                  "  }",
                  "}"
                ],
                nota: "Declara la infraestructura como código siempre que puedas: los clics en el portal no se auditan tan fácilmente ni se reproducen solos.",
                lang: "yaml"
              },
              expl: [
                "Cada recurso vive dentro de un resource group y de una suscripción: esa jerarquía define qué se crea, dónde y con qué presupuesto.",
                "Las regiones de Azure no tienen todas el mismo catálogo de servicios: verifica la disponibilidad antes de comprometerte con una.",
                "La CLI az funciona igual en macOS, Linux y Windows, lo que facilita la automatización y los scripts.",
                "Empezar con servicios PaaS evita pagar máquinas virtuales que todavía no necesitas."
              ],
              errors: [
                "Crear recursos sueltos sin resource group: termina siendo imposible auditar qué pertenece a qué proyecto.",
                "Elegir una región sin revisar la disponibilidad del servicio que vas a usar.",
                "Meter credenciales en los scripts de la CLI en vez de usar Service Principal o managed identity."
              ],
              tips: [
                "Usa nombres únicos globales para recursos como las cuentas de almacenamiento.",
                "Agrega tags (proyecto, entorno, owner) desde el primer día.",
                "Activa el presupuesto y las alertas de gasto antes de crear el primer recurso de pago.",
                "Empieza con los niveles gratuitos o las SKU básicas mientras aprendes."
              ],
              exercise: [
                "Crea tu suscripción, un resource group y una cuenta de almacenamiento con az, y lista todo con az resource list.",
                "Derriba lo creado con az group delete --name rg-api-backend --yes --no-wait y confirma el borrado."
              ],
              summary: [
                "Azure agrupa los recursos en suscripciones y resource groups.",
                "La CLI az y el portal gestionan todo el ecosistema.",
                "Los servicios PaaS son el punto de entrada recomendado para backend.",
                "Declarar la infraestructura en código la hace auditable y reproducible."
              ],
              lang: "bash",
              exampleFile: "main",
              desc: "Introducción a Azure: suscripciones, resource groups y primeros pasos con la CLI az."
            }
          },
          {
            id: "azure-app-service",
            title: "App Service: PaaS para APIs",
            duration: "12 min",
            level: "intermedio",
            category: "azure",
            cardText: "Entrega tu código o contenedor y Azure opera el servidor: HTTPS, escalado y slots incluidos.",
            desc: "Despliega APIs como PaaS con Azure App Service: planes, settings, slots y escalado.",
            body: {
              intro: [
                "App Service es el producto PaaS de Azure para aplicaciones web y APIs. Le entregas el código o un contenedor, y Azure se encarga del servidor, del TLS, del escalado y de los despliegues por slots.",
                "Para un backend es la vía rápida de pasar de un proyecto Node, Python o .NET a una URL pública con HTTPS sin administrar ninguna máquina."
              ],
              def: {
                par: "App Service ejecuta tu aplicación sobre un plan de servicio que define la potencia de las máquinas subyacentes. Puedes subir código de Node, Python, .NET, Java o contenedores Docker, con despliegues por Git, ZIP o CI/CD.",
                porQue: "Porque elimina la capa de administración de servidor: parches, TLS y reinicios los hace la plataforma, y el escalado pasa a ser manual o automático con un par de comandos.",
                cuando: "Úsalo para APIs monolíticas o microservicios que no exigen control total del runtime y quieren certificados HTTPS, slots y escalado con el mínimo esfuerzo."
              },
              concepts: [
                "App Service Plan: la unidad de capacidad que se factura.",
                "Slot de despliegue: entorno con el mismo hostname base, ideal para staging.",
                "Deployment: Git, ZIP, container registry o CI/CD.",
                "App Settings: variables de entorno gestionadas por la plataforma.",
                "Autoescalado: escalar por CPU, memoria o programación."
              ],
              basic: {
                p: "Con una API Node, desplegar es casi automático. El plan gratuito permite probar sin gastar, y el comando de creación devuelve la URL pública.",
                code: [
                  "az appservice plan create --name plan-api-dev \\",
                  "  --resource-group rg-api-backend --sku F1",
                  "az webapp create --name api-backend-demo \\",
                  "  --plan plan-api-dev \\",
                  "  --resource-group rg-api-backend \\",
                  '  --runtime "NODE:20-lts"',
                  "az webapp show --name api-backend-demo \\",
                  "  --resource-group rg-api-backend --query defaultHostName"
                ],
                out: "https://api-backend-demo.azurewebsites.net",
                lang: "bash"
              },
              intermediate: {
                p: "Las variables de entorno se gestionan como App Settings, y con un solo comando se guarda la cadena de conexión de la base o el estado de una función experimental.",
                code: [
                  "az webapp config appsettings set \\",
                  "  --name api-backend-demo \\",
                  "  --resource-group rg-api-backend \\",
                  '  --settings DATABASE_URL=postgres://usuario:clave@db-host:5432/api \\',
                  "             FEATURE_NEW_PAYMENTS=true"
                ],
                caption: "Configurar variables de entorno en App Service",
                lang: "bash"
              },
              real: {
                p: "El patrón de producción con slots: despliegas la nueva versión al slot staging, la validas y ejecutas un swap que la convierte en producción en segundos. Si algo falla, el swap inverso revierte el cambio al instante.",
                ul: [
                  "El slot staging comparte plan, costo y configuración base.",
                  "El swap intercambia configuraciones y variables de forma controlada.",
                  "El rollback es otro swap: no se redeploya nada.",
                  "El autoescalado se configura sobre el plan, no sobre cada app."
                ],
                code: [
                  "az webapp deployment slot create \\",
                  "  --name api-backend-demo \\",
                  "  --resource-group rg-api-backend --slot staging",
                  "az webapp deploy --name api-backend-demo --slot staging \\",
                  "  --resource-group rg-api-backend --src-path dist.zip --type zip",
                  "az webapp deployment slot swap \\",
                  "  --name api-backend-demo \\",
                  "  --resource-group rg-api-backend \\",
                  "  --slot staging --target-slot production"
                ],
                nota: "El swap de slots es la estrategia blue-green nativa de App Service: producción y la versión nueva conviven sin cortes.",
                lang: "bash"
              },
              expl: [
                "El plan define la capacidad; la app solo consume de ese plan.",
                "Los App Settings son la forma correcta de configurar sin tocar código.",
                "Los slots hacen del despliegue una operación reversible de segundos.",
                "El autoescalado horizontal replica la app en más instancias del plan."
              ],
              errors: [
                "Crear un plan por cada app: dispara costos de instancias ociosas.",
                "Subir secretos en el código o en el archivo de configuración versionado.",
                "Desplegar directo a producción sin slot de staging cuando el riesgo importa."
              ],
              tips: [
                "Empieza con el plan gratuito o B1 y sube de tamaño solo cuando lo necesites.",
                "Configura las App Settings en el portal o la CLI, nunca en el repositorio.",
                "Usa el slot staging y el swap incluso en equipos pequeños.",
                "Habilita los logs de la app para diagnosticar en caliente."
              ],
              exercise: [
                "Despliega tu API Express o FastAPI en App Service con el plan gratuito y visita su URL HTTPS.",
                "Crea un slot staging, cambia una variable en él y haz un swap: observa el cambio de comportamiento sin redeployar."
              ],
              summary: [
                "App Service es PaaS para APIs: tú subes código o contenedor, Azure opera el servidor.",
                "Los App Settings centralizan la configuración por entorno.",
                "Los slots permiten despliegues blue-green reversibles.",
                "El escalado se configura en el plan y puede ser automático."
              ],
              lang: "bash",
              exampleFile: "appservice",
              desc: "Despliega APIs como PaaS con Azure App Service: planes, settings, slots y escalado."
            }
          },
          {
            id: "azure-functions",
            title: "Functions: serverless en Azure",
            duration: "12 min",
            level: "intermedio",
            category: "azure",
            cardText: "Código que se ejecuta solo cuando llega un evento, con facturación por ejecución real.",
            desc: "Crea funciones serverless en Azure: triggers HTTP, bindings y patrones de cola.",
            body: {
              intro: [
                "Azure Functions es el servicio serverless de Microsoft: ejecutas una función que solo existe cuando hay un evento que la llama, y el escalado es tan automático como invisible.",
                "Para un backend es la pieza ideal de lógica por evento: webhooks, procesadores de cola, regeneración de archivos o endpoints de bajo tráfico, sin pagar por servidores ociosos."
              ],
              def: {
                par: "Azure Functions ejecuta código en C#, JavaScript, Python, Java o PowerShell en respuesta a triggers: HTTP, temporizadores, mensajes de cola, blobs nuevos o eventos de Event Grid. El consumo se factura por ejecución y por tiempo de memoria usado.",
                porQue: "Porque el modelo serverless convierte el costo en proporcional al uso: si nadie llama, no cobra. Además elimina la administración de máquinas y versiones de runtime.",
                cuando: "Úsalo para lógica disponible bajo demanda con latencia tolerable y tareas orientadas a eventos. Para APIs con tráfico constante, un App Service o contenedor suele ser más rentable."
              },
              concepts: [
                "Trigger: el evento que ejecuta la función (HTTP, timer, queue, blob).",
                "Binding: conexión declarativa a entradas y salidas (Cosmos DB, Storage, Service Bus).",
                "Plan consumption: factura por ejecución sin servidor reservado.",
                "Function app: el contenedor lógico que agrupa varias funciones.",
                "Cold start: la latencia de arranque cuando la función llevaba inactiva."
              ],
              basic: {
                p: "Crear una Function App con la CLI es directo: se necesita una cuenta de almacenamiento y el plan de consumo, que factura solo por uso.",
                code: [
                  "az functionapp create --name func-api-demo \\",
                  "  --resource-group rg-api-backend \\",
                  "  --storage-account midominioarchivos \\",
                  "  --consumption-plan-location westeurope \\",
                  "  --functions-version 4 \\",
                  "  --runtime node"
                ],
                out: "Function App creada con plan de consumo (pay-per-use)",
                lang: "bash"
              },
              intermediate: {
                p: "La función HTTP más simple recibe el objeto req y devuelve una respuesta JSON. Con la Function App creada, este archivo index.js ya es un endpoint funcional.",
                code: [
                  "module.exports = async function (context, req) {",
                  "  const nombre = req.query.nombre || req.body?.nombre || 'mundo';",
                  "  context.res = {",
                  "    status: 200,",
                  "    body: { mensaje: 'Hola ' + nombre + ' desde Azure Functions' }",
                  "  };",
                  "};"
                ],
                caption: "Handler HTTP en Node.js",
                lang: "js"
              },
              real: {
                p: "El caso real: una cola de Service Bus dispara una función que normaliza el evento y lo escribe en Cosmos DB. La función declara sus bindings y nunca ve el código del otro servicio.",
                ul: [
                  "El trigger de cola garantiza reintentos ante fallos.",
                  "El binding de salida escribe en Cosmos sin SDK manual.",
                  "Cada ejecución es independiente y escala de forma horizontal.",
                  "El plan de consumo solo cobra cuando la cola entrega mensajes."
                ],
                code: [
                  "module.exports = async function (context, myQueueItem) {",
                  "  const normalizado = {",
                  "    id: myQueueItem.id,",
                  "    estado: myQueueItem.estado ? 'procesado' : 'pendiente',",
                  "    recibido: new Date().toISOString()",
                  "  };",
                  "  context.bindings.documento = normalizado;",
                  "};"
                ],
                nota: "Con bindings de salida, la función declara qué escribir y dónde; Azure se encarga de la integración con el servicio destino.",
                lang: "js"
              },
              expl: [
                "El plan de consumo escala desde cero instancias: todo depende de los triggers.",
                "Los bindings eliminan el boilerplate de conectarse a servicios externos.",
                "El cold start importa en APIs síncronas; para procesos de cola es irrelevante.",
                "Las funciones están pensadas para ser cortas y sin estado."
              ],
              errors: [
                "Escribir funciones largas que acumulan estado: serverless exige lógica efímera.",
                "Usar Functions para tráfico constante: el costo por ejecución supera al de un PaaS.",
                "Olvidar los reintentos de cola y duplicar procesamientos: diseña handlers idempotentes."
              ],
              tips: [
                "Mantén las funciones pequeñas y con un único motivo de ejecución.",
                "Diseña los handlers para ser idempotentes ante reintentos.",
                "Usa Application Insights para ver trazas y cold starts.",
                "Define el tiempo de espera y la memoria desde el plan cuando la carga lo pida."
              ],
              exercise: [
                "Crea una función HTTP en Node que devuelva JSON y pruébala desde el navegador.",
                "Agrega un trigger de temporizador que registre la hora y observa las ejecuciones en el portal."
              ],
              summary: [
                "Azure Functions ejecuta código por evento y cobra por ejecución.",
                "Los triggers y bindings conectan la función con el ecosistema.",
                "La lógica efímera y sin estado es la regla del modelo serverless.",
                "El cold start y los reintentos condicionan el diseño de la función."
              ],
              lang: "js",
              exampleFile: "index",
              desc: "Crea funciones serverless en Azure: triggers HTTP, bindings y patrones de cola."
            }
          },
          {
            id: "azure-sql-database",
            title: "Azure SQL Database y Cosmos DB",
            duration: "11 min",
            level: "intermedio",
            category: "azure",
            cardText: "Relacional gestionado o NoSQL global: las bases de datos de Azure explicadas.",
            desc: "Bases de datos gestionadas en Azure: Azure SQL Database y Cosmos DB para backend.",
            body: {
              intro: [
                "La base de datos gestionada es uno de los mayores ahorros de operación: Azure SQL Database y Cosmos DB administran backups, parches, réplicas y escalado por ti.",
                "Aquí verás cuándo elegir relacional (Azure SQL) y cuándo NoSQL (Cosmos DB), y cómo conectar tu API a ambos sin convertir la migración en una odisea."
              ],
              def: {
                par: "Azure SQL Database es la versión PaaS de SQL Server: el mismo SQL estándar con backups automáticos, alta disponibilidad y escala de CPU y almacenamiento. Cosmos DB es una base NoSQL multi-modelo que replica globalmente con un SLA de latencia.",
                porQue: "Porque delegar la base de datos al proveedor elimina el trabajo más delicado de la operación diaria: backups, réplicas, parches de seguridad y alta disponibilidad pasan a ser responsabilidad de la plataforma.",
                cuando: "Elige Azure SQL para datos relacionales con transacciones ACID y consultas complejas. Elige Cosmos DB para lecturas escalables, datos documentales y aplicaciones distribuidas globalmente."
              },
              concepts: [
                "DTU / vCore: las unidades de capacidad que pagas en Azure SQL.",
                "Backup automático: copias gestionadas con restauración en un punto del tiempo.",
                "Cosmos DB: base NoSQL con replicación multi-región y SLA.",
                "Contenedor (Cosmos): unidad de escala con su propia partición y throughput.",
                "Connection string: la cadena que tu API usa para conectarse."
              ],
              basic: {
                p: "Crear el servidor y la base de datos con la CLI: el servidor agrupa las bases y gestiona el acceso, mientras la base define su nivel de servicio y backups.",
                code: [
                  "az sql server create \\",
                  "  --name svpdemo \\",
                  "  --resource-group rg-api-backend \\",
                  "  --location westeurope \\",
                  "  --admin-user adminbackend \\",
                  "  --admin-password 'Clave-Segura-2026!'",
                  "az sql db create \\",
                  "  --resource-group rg-api-backend \\",
                  "  --server svpdemo \\",
                  "  --name apibackend \\",
                  "  --service-objective S0"
                ],
                out: "Servidor svpdemo con base apibackend (S0, backups automáticos activos)",
                lang: "bash"
              },
              intermediate: {
                p: "Con Node y la cadena de conexión, tu API habla directamente con SQL Server usando las mismas consultas del SQL clásico.",
                code: [
                  'const sql = require("mssql");',
                  "const config = {",
                  '  user: "adminbackend",',
                  "  password: process.env.SQL_PASSWORD,",
                  '  server: "svpdemo.database.windows.net",',
                  '  database: "apibackend",',
                  '  options: { encrypt: true, trustServerCertificate: false }',
                  "};",
                  "async function crearUsuario(nombre, email) {",
                  "  const pool = await sql.connect(config);",
                  "  await pool.request()",
                  '    .input("nombre", sql.NVarChar, nombre)',
                  '    .input("email", sql.NVarChar, email)',
                  '    .query("INSERT INTO usuarios (nombre, email) VALUES (@nombre, @email)");',
                  "}"
                ],
                caption: "Conexión a Azure SQL desde Node.js",
                lang: "js"
              },
              real: {
                p: "El mismo modelo de datos en Cosmos DB: creas la cuenta, la base y el contenedor, y tu endpoint puede leer con latencias de milisegundos desde cualquier región.",
                ul: [
                  "La cuenta define las regiones donde se replica.",
                  "El contenedor agrupa documentos JSON con su propio throughput.",
                  "La partitionKey decide cómo se reparte la escala.",
                  "El SDK de Node ofrece consultas estilo MongoDB o la SQL de Cosmos."
                ],
                code: [
                  "az cosmosdb create \\",
                  "  --name cosmos-demo \\",
                  "  --resource-group rg-api-backend \\",
                  "  --locations regionName=westeurope failoverPriority=0 \\",
                  "  --kind MongoDB",
                  "az cosmosdb sql database create --name apidb \\",
                  "  --account-name cosmos-demo --resource-group rg-api-backend",
                  "az cosmosdb sql container create \\",
                  "  --account-name cosmos-demo --database-name apidb \\",
                  "  --resource-group rg-api-backend --name usuarios \\",
                  '  --partition-key-path "/email" --throughput 400'
                ],
                nota: "La elección clave está en el dato, no en la tendencia: transacciones fuertes en SQL, documentos de lectura intensiva en Cosmos.",
                lang: "bash"
              },
              expl: [
                "Azure SQL te da ACID, SQL estándar y backups sin administrar la máquina.",
                "Cosmos DB ofrece replicación y latencia global a cambio de consistencia configurable.",
                "La partición en Cosmos define el límite práctico de escala de tu colección.",
                "Ambos exponen connection strings que tu API consume como variables de entorno."
              ],
              errors: [
                "Elegir Cosmos para datos relacionales con joins y transacciones complejas.",
                "Exponer la cadena de conexión con credenciales en el repositorio o en el frontend.",
                "Crear contenedores Cosmos con una partición mala y pagar throughput desperdiciado."
              ],
              tips: [
                "Empieza con la DTU más baja para desarrollo y sube a vCore por demanda.",
                "Usa variables de entorno para la cadena de conexión y rota la clave a menudo.",
                "Configura la restauración en un punto del tiempo y prueba una restauración real.",
                "En Cosmos, define la partitionKey pensando en el mayor volumen de lecturas."
              ],
              exercise: [
                "Crea una base Azure SQL, conéctala desde Node y haz un INSERT con parámetros.",
                "Crea una cuenta Cosmos, un contenedor e inserta y lee tres documentos."
              ],
              summary: [
                "Azure SQL Database ofrece SQL Server gestionado con backups automáticos.",
                "Cosmos DB es NoSQL multi-modelo con replicación y latencia global.",
                "La elección depende de la estructura del dato y del patrón de acceso.",
                "Las cadenas de conexión se gestionan como secretos, nunca en el código."
              ],
              lang: "js",
              exampleFile: "db",
              desc: "Bases de datos gestionadas en Azure: Azure SQL Database y Cosmos DB para backend."
            }
          },
          {
            id: "azure-blob-storage",
            title: "Blob Storage y almacenamiento",
            duration: "9 min",
            level: "intermedio",
            category: "azure",
            cardText: "Objetos binarios escalables con URLs y acceso firmado: el S3 de Azure.",
            desc: "Almacenamiento de objetos en Azure: containers, blobs y SAS tokens.",
            body: {
              intro: [
                "Los archivos de una aplicación (imágenes, PDFs, respaldos) casi nunca deben vivir en el disco de tu servidor. El blob storage ofrece almacenamiento de objetos escalable, barato y con URLs compartidas.",
                "Es el servicio equivalente a S3 dentro de Azure, y la mayoría de las APIs lo usan para subir, servir y firmar archivos sin cargar el servidor."
              ],
              def: {
                par: "Azure Blob Storage guarda objetos binarios dentro de containers. Cada blob tiene una URL, se puede acceder de forma anónima o con firmas de acceso compartido (SAS), y se organiza en niveles de acceso según la frecuencia de lectura.",
                porQue: "Porque el almacenamiento de objetos se separa del cómputo: tu API entrega o descarga archivos sin almacenarlos localmente, lo que simplifica el autoescalado y los despliegues.",
                cuando: "Úsalo para imágenes, documentos, vídeos, respaldos y logs, cualquier binario que deba persistir más allá de la vida del contenedor o la VM."
              },
              concepts: [
                "Containers: colección con nombre de blobs.",
                "Blob: el objeto individual (block, append o page).",
                "Nivel de acceso: hot, cool y archive según uso.",
                "SAS token: firma de acceso compartido temporal y limitada.",
                "URL pública: endpoint HTTPS para servir contenido estático."
              ],
              basic: {
                p: "Subir un archivo es directo: creas la cuenta y el container, y usas el comando upload para dejar el binario accesible.",
                code: [
                  "az storage account create --name midominioarchivos \\",
                  "  --resource-group rg-api-backend \\",
                  "  --location westeurope --sku Standard_GRS",
                  "az storage container create --name avatares \\",
                  "  --account-name midominioarchivos \\",
                  "  --auth-mode login --public-access none",
                  "az storage blob upload --file foto.png \\",
                  "  --container-name avatares \\",
                  "  --name usuarios/42.png --auth-mode login"
                ],
                out: "Blob usuarios/42.png subido en el container avatares",
                lang: "bash"
              },
              intermediate: {
                p: "Para compartir el archivo sin hacerlo público, generamos un SAS token con expiración. La URL resultante solo sirve durante el tiempo pactado y con el permiso indicado.",
                code: [
                  "end=$(date -u -d '1 hour' +%Y-%m-%dT%H:%MZ)",
                  "az storage blob generate-sas \\",
                  "  --account-name midominioarchivos \\",
                  "  --container-name avatares \\",
                  "  --name usuarios/42.png \\",
                  "  --permissions r \\",
                  "  --expiry $end"
                ],
                caption: "Generar SAS token de lectura por una hora",
                lang: "bash"
              },
              real: {
                p: "Desde Node, el flujo de un avatar: la API genera un SAS de subida, el cliente sube directamente al blob y después la API genera otro SAS de lectura para mostrarlo. El servidor nunca manipula el binario.",
                ul: [
                  "La subida directa al blob ahorra ancho de banda y CPU del servidor.",
                  "Los SAS limitan el alcance por archivo, permiso y tiempo.",
                  "El access tier archive baja muchísimo el costo de respaldos.",
                  "Los containers pueden servir contenido estático por CDN."
                ],
                code: [
                  'const { BlobServiceClient } = require("@azure/storage-blob");',
                  "const client = BlobServiceClient.fromConnectionString(",
                  "  process.env.AZURE_STORAGE_CONNECTION",
                  ");",
                  'const container = client.getContainerClient("avatares");',
                  'const blob = container.getBlobClient("usuarios/42.png");',
                  "const sas = blob.generateSasUrl({",
                  '  permissions: "r",',
                  "  expiresOn: new Date(Date.now() + 3600 * 1000)",
                  "});"
                ],
                nota: "Prefiere pasar el SAS al cliente y que el propio navegador haga la subida: tu API solo emite la firma.",
                lang: "js"
              },
              expl: [
                "El blob storage escala sin máquinas: pagas por GB y por operaciones.",
                "Los SAS son la forma segura de compartir acceso sin exponer credenciales.",
                "El nivel de acceso elegido impacta directo en el costo mensual.",
                "Separar binarios del cómputo permite escalar la API sin copiar archivos."
              ],
              errors: [
                "Guardar archivos en el filesystem del contenedor: se pierden al redeployar.",
                "Servir archivos desde la API en vez de desde blob más CDN.",
                "Generar SAS con expiración muy larga o permisos de escritura innecesarios."
              ],
              tips: [
                "Configura lifecycle rules para pasar blobs viejos a cool o archive automáticamente.",
                "Sirve contenido estático por CDN para menos latencia.",
                "Nombra los blobs con prefijos jerárquicos tipo carpeta.",
                "Rota las claves de la cuenta y usa managed identity cuando sea posible."
              ],
              exercise: [
                "Sube tres archivos a un container con diferentes niveles de acceso y comprueba sus URLs.",
                "Genera un SAS de lectura con expiración de 5 minutos y confirma que falla después."
              ],
              summary: [
                "Blob Storage es el almacenamiento de objetos de Azure.",
                "Los containers y los SAS controlan la accesibilidad de cada archivo.",
                "El access tier regula el costo según la frecuencia de lectura.",
                "Servir binarios desde blob más CDN descarga el servidor de tu API."
              ],
              lang: "js",
              exampleFile: "storage",
              desc: "Almacenamiento de objetos en Azure: containers, blobs y SAS tokens."
            }
          }
        ]
      },
      {
        id: "modulo-04",
        n: 4,
        t: "Google Cloud Platform",
        level: "intermedio",
        caption: "Contenedores serverless y datos modernos",
        desc: "Aprende Google Cloud desde la perspectiva del backend: proyectos y contexto gcloud, Compute Engine, Cloud Functions, Cloud Run y el almacenamiento con Storage y Firestore.",
        subtitle: "GCP brilla donde el contenedor y el dato importan.",
        objectives: [
          "Organizar recursos con proyectos y contexto gcloud",
          "Crear máquinas virtuales con Compute Engine",
          "Escribir funciones serverless con Cloud Functions",
          "Desplegar contenedores con Cloud Run",
          "Almacenar archivos y datos con Storage y Firestore"
        ],
        lessons: [
          {
            id: "intro-a-gcp",
            title: "Introducción a Google Cloud",
            duration: "10 min",
            level: "intermedio",
            category: "gcp",
            cardText: "Todo en GCP empieza por un proyecto: la unidad de organización, facturación y permisos.",
            desc: "Introducción a Google Cloud: proyectos, contexto gcloud y primeras unidades de infraestructura.",
            body: {
              intro: [
                "Google Cloud Platform (GCP) se destaca en el backend por su tier gratuito generoso, su red global de baja latencia y productos modernos como Cloud Run y Cloud Functions.",
                "Sus comandos gcloud siguen la misma lógica de los competidores, con la particularidad de que el proyecto, la región y la zona se configuran como contexto."
              ],
              def: {
                par: "GCP organiza todo alrededor de proyectos: un proyecto agrupa recursos, presupuesto y permisos. La CLI gcloud configura un contexto por defecto que evita repetir región y zona en cada comando.",
                porQue: "Porque su tier gratuito permite probar servicios reales sin gastar, y su red global y BigQuery lo hacen fuerte en datos y contenedores.",
                cuando: "Úsalo cuando priorices contenedores sin administrar, datos y análisis, y un plan gratuito que aguante el uso de aprendizaje y de un backend pequeño."
              },
              concepts: [
                "Proyecto: unidad de organización, facturación y permisos de GCP.",
                "Región/zona: dónde corren tus recursos (europe-west1, us-central1-a).",
                "gcloud: CLI oficial con contexto configurable.",
                "Quotas: límites de consumo por proyecto para controlar gasto.",
                "Cloud Console: la consola web de GCP."
              ],
              basic: {
                p: "La instalación y el primer contexto: autenticarse, crear un proyecto y configurar la región y zona que usarán todos los comandos posteriores.",
                code: [
                  "gcloud auth login",
                  'gcloud projects create mi-proyecto-backend --name="API Backend"',
                  "gcloud config set project mi-proyecto-backend",
                  "gcloud config set compute/region europe-west1",
                  "gcloud config set compute/zone europe-west1-b"
                ],
                out: "Configuración actualizada: proyecto, región y zona definidas",
                lang: "bash"
              },
              intermediate: {
                p: "Con el proyecto configurado, la exploración es inmediata: qué servicios están habilitados, qué regiones existen y qué proyectos tiene la cuenta.",
                code: [
                  "gcloud services list --enabled",
                  "gcloud compute regions list",
                  "gcloud projects list"
                ],
                caption: "Explorar servicios y regiones del proyecto",
                lang: "bash"
              },
              real: {
                p: "La infraestructura se declara con Terraform: el provider google usa el proyecto y su región para desplegar los recursos de forma reproducible.",
                ul: [
                  "Los proyectos aíslan el gasto y los permisos por equipo.",
                  "Las quotas protegen tu cuenta del uso accidental.",
                  "La red VPC se comparte entre los recursos del mismo proyecto.",
                  "El precio de la salida de datos (egress) importa al diseñar."
                ],
                code: [
                  'provider "google" {',
                  '  project = "mi-proyecto-backend"',
                  '  region  = "europe-west1"',
                  "}",
                  'resource "google_storage_bucket" "archivos" {',
                  '  name     = "mi-proyecto-backend-archivos"',
                  '  location = "EU"',
                  "}"
                ],
                nota: "gcloud config set define un contexto por defecto: cada comando queda más corto y menos propenso a error.",
                lang: "yaml"
              },
              expl: [
                "El proyecto es el centro de gravedad de GCP: facturación, permisos y red.",
                "El contexto de gcloud reduce la repetición de parámetros.",
                "Las quotas evitan sorpresas de gasto, pero también limitan despliegues grandes.",
                "El tier gratuito cubre un tráfico real para APIs de aprendizaje."
              ],
              errors: [
                "Crear recursos sin proyecto dedicado y mezclar entornos.",
                "Olvidar configurar la región y crear todo en la zona por defecto.",
                "Confiar en el contexto configurado cuando los scripts corren en silencio."
              ],
              tips: [
                "Crea un proyecto por aplicación o entorno (dev, staging, prod).",
                "Configura presupuesto y alertas desde la primera semana.",
                "Usa gcloud config list para saber qué contexto está activo.",
                "Revisa las quotas antes de desplegar cargas grandes."
              ],
              exercise: [
                "Crea un proyecto, configura el contexto de gcloud y lista los servicios habilitados.",
                "Crea un bucket de Cloud Storage, sube un archivo y verifícalo con gcloud storage ls."
              ],
              summary: [
                "GCP organiza los recursos en proyectos con facturación y permisos propios.",
                "gcloud configura un contexto que simplifica los comandos.",
                "Las quotas y presupuestos controlan el gasto.",
                "La infraestructura se declara con Terraform de forma reproducible."
              ],
              lang: "bash",
              exampleFile: "main",
              desc: "Introducción a Google Cloud: proyectos, contexto gcloud y primeras unidades de infraestructura."
            }
          },
          {
            id: "gcp-compute-engine",
            title: "Compute Engine y VM",
            duration: "11 min",
            level: "intermedio",
            category: "gcp",
            cardText: "Máquinas virtuales con control total y autoscalado basado en plantillas.",
            desc: "Máquinas virtuales en Compute Engine: instancias, plantillas, grupos y autoscalado.",
            body: {
              intro: [
                "Compute Engine es el IaaS de Google Cloud: máquinas virtuales sobre las que instalas cualquier sistema operativo. Es la base para cuando necesitas control total o un servicio sin alternativa gestionada.",
                "Conviene conocerla aunque elijas usarla poco: saber crear, conectar y destruir una VM te da las llaves de toda la infraestructura de datacenter de GCP."
              ],
              def: {
                par: "Compute Engine entrega VM con tipos de máquina (e2, n2, c3) y sistemas operativos del marketplace. Incluye discos persistentes, snapshots y plantillas que permiten crear flotas idénticas para autoescalado.",
                porQue: "Porque a veces lo gestionado no alcanza: necesidades de kernel, software que exige una VM, o la familiaridad de un servidor tradicional. Además, el e2-micro de la tier gratuita permite aprender sin gastar.",
                cuando: "Úsala para servicios que necesitan control del sistema operativo, cargas por lotes por tiempo limitado, o como máquina constante cuando el tráfico justifica pagar IaaS."
              },
              concepts: [
                "Instancia: la VM con su tipo de máquina, sistema operativo y disco.",
                "Familia de máquinas: e2 (equilibrada), n2 (memoria), c3 (cómputo).",
                "Disco persistente: almacenamiento de bloque que sobrevive a la VM.",
                "Snapshot: imagen del disco para backups y clonación.",
                "Startup script: script que se ejecuta al arrancar la instancia."
              ],
              basic: {
                p: "Crear y conectar una VM desde la línea de comandos: tipo de máquina, sistema operativo y zona configurada, y en menos de un minuto tienes una máquina lista para SSH.",
                code: [
                  "gcloud compute instances create api-vm \\",
                  "  --machine-type e2-micro \\",
                  "  --image-family ubuntu-2204-lts \\",
                  "  --image-project ubuntu-os-cloud \\",
                  "  --tags http-server",
                  "gcloud compute ssh api-vm"
                ],
                out: "Instancia api-vm en running. SSH conectado.",
                lang: "bash"
              },
              intermediate: {
                p: "Para desplegar una API sin fricción creamos una regla de firewall y añadimos el tag correspondiente a la instancia, y luego obtenemos su IP externa.",
                code: [
                  "gcloud compute firewall-rules create allow-http \\",
                  "  --allow tcp:80 \\",
                  "  --target-tags http-server",
                  "gcloud compute instances add-tags api-vm --tags http-server",
                  "gcloud compute instances describe api-vm \\",
                  '  --format="value(networkInterfaces[0].accessConfigs[0].natIP)"'
                ],
                caption: "Abrir el puerto 80 y obtener la IP externa",
                lang: "bash"
              },
              real: {
                p: "En producción se usan plantillas de instancia y grupos gestionados: la plantilla describe la VM y el grupo mantiene el número deseado de réplicas, que el autoscaler ajusta según la carga.",
                ul: [
                  "La plantilla describe la VM (imagen, disco, startup script).",
                  "El managed instance group mantiene el número deseado de réplicas.",
                  "El autoscaler ajusta réplicas según métricas de carga.",
                  "El balanceador reparte las peticiones entre las réplicas."
                ],
                code: [
                  "gcloud compute instance-templates create plantilla-api \\",
                  "  --machine-type e2-micro \\",
                  "  --image-family ubuntu-2204-lts --image-project ubuntu-os-cloud \\",
                  "  --metadata startup-script='apt-get update && apt-get install -y nginx'",
                  "gcloud compute instance-groups managed create api-grupo \\",
                  "  --template plantilla-api --size 2 \\",
                  "  --zones europe-west1-b,europe-west1-c",
                  "gcloud compute instance-groups managed set-autoscaling api-grupo \\",
                  "  --max-num-replicas 5 --min-num-replicas 1 \\",
                  "  --target-cpu-utilization 0.6"
                ],
                nota: "El autoscaler decide el número de VM según la CPU media; por eso las aplicaciones en VM deben ser stateless.",
                lang: "bash"
              },
              expl: [
                "La VM es la unidad IaaS: control total del sistema, pero con todo el mantenimiento a tu cargo.",
                "Los grupos gestionados más autoscaler replican el patrón de AWS Auto Scaling.",
                "Las aplicaciones deben ser stateless para que cualquier réplica sea reemplazable.",
                "El e2-micro cubre el tier gratuito: útil para aprender y hostings de bajo tráfico."
              ],
              errors: [
                "Dejar VMs corriendo sin uso: el costo es por segundo, pero se acumula.",
                "Escalar por CPU sin acotar réplicas: cada réplica nueva es un costo.",
                "Configurar a mano dentro de la VM sin scripts: pierdes reproducibilidad."
              ],
              tips: [
                "Usa startup scripts o imágenes personalizadas para configurar la VM.",
                "Define los discos con snapshots y un backup programado.",
                "Etiqueta las instancias para imputar costos y organizar.",
                "Detén la VM cuando no la uses: deja de facturar cómputo."
              ],
              exercise: [
                "Crea la VM e2-micro, abre el puerto 80, instala nginx y visita su IP.",
                "Crea una plantilla con startup script, un grupo de dos réplicas y un autoscaler."
              ],
              summary: [
                "Compute Engine es el IaaS de GCP: VM con control total.",
                "Las plantillas y los grupos gestionados automatizan la flota.",
                "El autoscaler ajusta las réplicas según CPU.",
                "Las aplicaciones stateless hacen reemplazable cada instancia."
              ],
              lang: "bash",
              exampleFile: "instances",
              desc: "Máquinas virtuales en Compute Engine: instancias, plantillas, grupos y autoscalado."
            }
          },
          {
            id: "gcp-cloud-functions",
            title: "Cloud Functions: serverless",
            duration: "12 min",
            level: "intermedio",
            category: "gcp",
            cardText: "Código que se ejecuta por evento en Node, Python o Go, sin servidores visibles.",
            desc: "Funciones serverless en Google Cloud: triggers HTTP y eventos con Cloud Functions.",
            body: {
              intro: [
                "Cloud Functions es el serverless de Google Cloud: código en Node.js, Python, Go o Java que se ejecuta ante eventos, sin servidores visibles ni factura por inactividad.",
                "Es la opción ideal de lógica por evento para el backend de GCP, sobre todo porque se integra de forma nativa con Storage, Pub/Sub y Firestore."
              ],
              def: {
                par: "Cloud Functions ejecuta funciones en respuesta a triggers HTTP, Cloud Pub/Sub, Cloud Storage, Firestore o Eventarc. Se asocia a una región, escala automáticamente y cobra por milisegundos de cálculo.",
                porQue: "Porque desaparece el concepto de instancia: la unidad es la invocación. La latencia de arranque es baja y la integración con el ecosistema Google es nativa.",
                cuando: "Úsala para webhooks, procesamiento de eventos, endpoints de bajo tráfico y tareas derivadas de cambios en almacenamiento. Para APIs con API Gateway y tráfico sostenido, considera Cloud Run."
              },
              concepts: [
                "Trigger HTTP: función HTTPS expuesta a internet.",
                "Trigger de evento: Pub/Sub, Storage o Firestore disparan la ejecución.",
                "Región: la función vive en una región concreta.",
                "Gen 2: el runtime moderno con Cloud Events y mejores límites.",
                "Invocación: cada ejecución es facturada y registrada."
              ],
              basic: {
                p: "El handler mínimo en Python: una función que recibe la petición HTTP y devuelve un objeto JSON. Eso es todo lo que sabe la función del servidor.",
                code: [
                  "def nuevo_usuario(request):",
                  "    datos = request.get_json(silent=True) or {}",
                  "    nombre = datos.get('nombre', 'mundo')",
                  "    return {'mensaje': f'Hola {nombre} desde Google Cloud'}"
                ],
                out: "curl .../nuevo-usuario?nombre=ana → {mensaje: 'Hola ana desde Google Cloud'}",
                lang: "python"
              },
              intermediate: {
                p: "Publicarla es un solo comando: gcloud empaqueta, sube y responde con la URL HTTPS lista para probar.",
                code: [
                  "gcloud functions deploy nuevo-usuario \\",
                  "  --runtime python312 \\",
                  "  --trigger-http \\",
                  "  --allow-unauthenticated",
                  "curl https://europe-west1-mi-proyecto.cloudfunctions.net/nuevo-usuario \\",
                  '  -d \'{"nombre": "ana"}\''
                ],
                caption: "Publicar la función y probarla con curl",
                lang: "bash"
              },
              real: {
                p: "El patrón de evento: cuando un archivo se sube a Cloud Storage, la función se dispara con sus metadatos y enlaza el documento en Firestore. Pub/Sub y Eventarc entregan el evento con reintentos.",
                ul: [
                  "El evento de Storage trae el nombre del archivo y el bucket.",
                  "La función crea la entrada en Firestore de forma transaccional.",
                  "Los reintentos automáticos garantizan la consistencia final.",
                  "El tráfico de eventos no paga instancias ociosas."
                ],
                code: [
                  "import functions_framework",
                  "@functions_framework.cloud_event",
                  "def archivo_subido(event):",
                  "    datos = event.data",
                  "    bucket = datos['bucket']",
                  "    archivo = datos['name']",
                  "    print(f'Nuevo archivo {archivo} en {bucket}')",
                  "    procesado = procesar_archivo(bucket, archivo)",
                  "    guardar_en_firestore(archivo, procesado)"
                ],
                nota: "Para que el evento dispare la función, súbela con --trigger-bucket=gs://mi-bucket y los cambios en esa cubeta la invocan automáticamente.",
                lang: "python"
              },
              expl: [
                "El costo se paga por invocación y milisegundos, no por instancia.",
                "El flujo orientado a eventos de GCP pasa por Pub/Sub y triggers de Storage.",
                "Las funciones deben mantenerse cortas y sin estado.",
                "Cloud Functions Gen 2 ofrece más concurrencia y mayores límites."
              ],
              errors: [
                "Usar estado en memoria entre invocaciones: la función puede reutilizar o no el proceso.",
                "Exponer funciones de pago público sin autenticación cuando no corresponde.",
                "Diseñar flujos síncronos y lentos que deberían ser colas."
              ],
              tips: [
                "Mantén el tiempo de ejecución bajo y revisa los límites de memoria.",
                "Agrega observabilidad con Cloud Logging y Cloud Trace.",
                "Usa funciones orientadas a eventos para desacoplar servicios.",
                "Define timeout y reintentos según la criticidad del procesamiento."
              ],
              exercise: [
                "Despliega una Cloud Function HTTP en Python y pruébala con curl.",
                "Conecta un bucket de Storage a la función para que procese cada archivo subido."
              ],
              summary: [
                "Cloud Functions ejecuta código por evento y cobra por invocación.",
                "Los triggers HTTP cubren endpoints ligeros de backend.",
                "Los eventos de Storage y Pub/Sub automatizan flujos.",
                "La lógica efímera y observada es la regla de oro del serverless."
              ],
              lang: "python",
              exampleFile: "main",
              desc: "Funciones serverless en Google Cloud: triggers HTTP y eventos con Cloud Functions."
            }
          },
          {
            id: "gcp-cloud-run",
            title: "Cloud Run: contenedores serverless",
            duration: "12 min",
            level: "intermedio",
            category: "gcp",
            cardText: "Tu contenedor escalado a cero y a cientos de instancias según la demanda.",
            desc: "Contenedores serverless con Cloud Run: despliegue, escala a cero y splits de tráfico.",
            body: {
              intro: [
                "Cloud Run es posiblemente el producto más querido por los desarrolladores de backend: toma tu contenedor, escálalo a cero cuando nadie lo usa y a cientos de instancias bajo pico.",
                "Une lo mejor del serverless (sin servidores, costo bajo demanda) con lo mejor de los contenedores (control del runtime y portabilidad)."
              ],
              def: {
                par: "Cloud Run ejecuta contenedores sin estado sobre una plataforma gestionada: levanta instancias desde cero, escala a demanda, aplica HTTPS automático y cobra solo por el tiempo de cómputo real.",
                porQue: "Porque el mismo Dockerfile que corre en tu máquina corre en producción igual, sin reescribir nada. Donde en otros modelos hay servidores, aquí se declara la imagen y Cloud Run opera.",
                cuando: "Usa Cloud Run para APIs y microservicios que no necesitan administrar el sistema operativo y quieren escalar a cero. Para colas largas o acceso continuo al filesystem, considera Compute Engine."
              },
              concepts: [
                "Revisión: cada versión de tu contenedor desplegada.",
                "Service: el endpoint estable que enruta a la revisión activa.",
                "Instancia: unidad de cómputo con CPU y memoria.",
                "Scale to zero: el servicio duerme cuando no hay peticiones.",
                "Min/Max instances: límites que controlan latencia y costo."
              ],
              basic: {
                p: "Desplegar un contenedor propio es un comando: enviamos la imagen y Cloud Run crea el servicio con HTTPS y una URL pública. La primera petición sufre un pequeño cold start.",
                code: [
                  "gcloud run deploy mi-api \\",
                  "  --image gcr.io/mi-proyecto/mi-api:v1 \\",
                  "  --region europe-west1 \\",
                  "  --allow-unauthenticated",
                  "curl https://mi-api-xxxxxx-europe-west1.run.app/health"
                ],
                out: "OK\nLatencia de frío inicial: ~500ms (siguientes < 50ms)",
                lang: "bash"
              },
              intermediate: {
                p: "Si ya tienes tu app en un Dockerfile, Cloud Build la construye por ti y Cloud Run la despliega en el mismo paso: contenedor sin servidores que administrar.",
                code: [
                  "gcloud builds submit --tag gcr.io/mi-proyecto/mi-api:v1",
                  "gcloud run deploy mi-api \\",
                  "  --image gcr.io/mi-proyecto/mi-api:v1 \\",
                  "  --region europe-west1 \\",
                  "  --min-instances 0 \\",
                  "  --max-instances 10 \\",
                  "  --cpu 1 --memory 512Mi"
                ],
                caption: "Construir y desplegar con Cloud Build + Cloud Run",
                lang: "bash"
              },
              real: {
                p: "Producción: revisiones y tráfico. Cloud Run permite repartir el tráfico entre dos revisiones (canary), activar una nueva revisión al 5% y hacer rollback instantáneo al 100% de la anterior.",
                ul: [
                  "Cada despliegue crea una revisión inmutable.",
                  "El split de tráfico permite pruebas canary sin cambiar infraestructura.",
                  "Los healthchecks eliminan revisiones enfermas automáticamente.",
                  "La autenticación con IAM protege los servicios internos."
                ],
                code: [
                  "gcloud run services update-traffic mi-api \\",
                  "  --region europe-west1 \\",
                  "  --to-revisions mi-api-00007=95,mi-api-00008=5",
                  "# si la revision 08 falla:",
                  "gcloud run services update-traffic mi-api \\",
                  "  --region europe-west1 \\",
                  "  --to-latest=false --to-revisions mi-api-00007=100"
                ],
                nota: "El split de tráfico por revisión es la herramienta nativa de canary y rollback de Cloud Run.",
                lang: "bash"
              },
              expl: [
                "Escalar a cero implica que el costo llegue a cero cuando el servicio está quieto.",
                "El cold start convive con scale to zero: mide y decide si fijas min-instances.",
                "Las revisiones inmutables hacen que cada despliegue sea reversible.",
                "El tráfico por porcentaje permite canary sin balanceador adicional."
              ],
              errors: [
                "Desplegar contenedores con estado interno: Cloud Run replica instancias efímeras.",
                "Fijar min-instances altos sin necesidad: pagas instancias siempre encendidas.",
                "Ignorar el cold start en APIs críticas: valida la latencia antes de confiar."
              ],
              tips: [
                "Cuidado con las conexiones a base: cada instancia mantiene su propio pool.",
                "Usa max-instances para acotar costos ante picos anómalos.",
                "Mide el cold start y ajusta min-instances si tu SLO de latencia lo exige.",
                "Sirve tráfico interno con la autenticación de IAM."
              ],
              exercise: [
                "Despliega una API en Cloud Run, mide el cold start y pruébala con 50 peticiones concurrentes.",
                "Haz dos despliegues y reparte el tráfico 90/10 entre la revisión vieja y la nueva."
              ],
              summary: [
                "Cloud Run ejecuta contenedores serverless con escala a cero.",
                "El costo es proporcional al tiempo de cómputo real.",
                "Las revisiones y el split de tráfico permiten canary y rollback.",
                "Es el modelo natural para APIs y microservicios sin estado."
              ],
              lang: "bash",
              exampleFile: "run",
              desc: "Contenedores serverless con Cloud Run: despliegue, escala a cero y splits de tráfico."
            }
          },
          {
            id: "gcp-storage-y-firestore",
            title: "Storage y Firestore",
            duration: "10 min",
            level: "intermedio",
            category: "gcp",
            cardText: "Objetos binarios en buckets y documentos en tiempo real con Firestore.",
            desc: "Datos en Google Cloud: Cloud Storage para archivos y Firestore para documentos.",
            body: {
              intro: [
                "Dos servicios hacen el trabajo de datos en GCP: Cloud Storage para objetos binarios y Firestore para datos documentales en tiempo real.",
                "Con ellos montas el patrón típico del backend: archivos en el bucket, datos de la app en Firestore y contenido servido por CDN."
              ],
              def: {
                par: "Cloud Storage guarda objetos con URLs y niveles de acceso, ideal para imágenes, backups y contenido estático. Firestore es una base documental NoSQL con sincronización en tiempo real y consultas flexibles.",
                porQue: "Porque cada tipo de dato tiene su almacenaje adecuado: los binarios viven en buckets con egress controlado, y los documentos de la app en Firestore con latencias de milisegundos.",
                cuando: "Usa Storage para todo binario y Firestore para datos que la app lee y escribe con frecuencia. Si necesitas SQL y ACID, usa Cloud SQL."
              },
              concepts: [
                "Bucket: contenedor de objetos de Cloud Storage.",
                "Objeto: cada archivo con metadatos y URL de acceso.",
                "Colección (Firestore): agrupación de documentos.",
                "Documento: unidad de datos con id propio.",
                "Escucha en tiempo real: la app recibe cambios sin polling."
              ],
              basic: {
                p: "Subir un objeto a Cloud Storage y listarlo: buckets, objetos y permisos se gestionan con la CLI o el SDK.",
                code: [
                  "gcloud storage buckets create gs://mi-proyecto-avatares --location EU",
                  "gcloud storage cp foto.png gs://mi-proyecto-avatares/usuarios/42.png",
                  "gcloud storage objects list gs://mi-proyecto-avatares"
                ],
                out: "usuarios/42.png\nfoto.png",
                lang: "bash"
              },
              intermediate: {
                p: "Firestore guarda documentos JSON por colección. El atributo de tiempo real se activa con listeners: los clientes se suscriben y reciben los cambios al instante.",
                code: [
                  "from google.cloud import firestore",
                  "db = firestore.Client(project='mi-proyecto-backend')",
                  "doc = db.collection('usuarios').document('42')",
                  "doc.set({'nombre': 'Ana', 'email': 'ana@example.com'})",
                  "snap = doc.get()",
                  "print(snap.to_dict())"
                ],
                caption: "Escribir y leer un documento en Firestore",
                lang: "python"
              },
              real: {
                p: "Backend del lado de los datos: la app sube un avatar directamente al bucket con una firma temporal y los metadatos del usuario se leen desde Firestore. Ningún servidor intermedio copia los bytes.",
                ul: [
                  "Los archivos suben directo al bucket con firmas expedidas por tu API.",
                  "Firestore guarda únicamente los metadatos.",
                  "Los listeners sincronizan los cambios en la UI en tiempo real.",
                  "Las reglas de seguridad de Firestore limitan el acceso por documento."
                ],
                code: [
                  "gcloud storage sign-url gs://mi-proyecto-avatares \\",
                  "  --object usuarios/42.png \\",
                  "  --http-method PUT \\",
                  "  --expires-in 300"
                ],
                nota: "El bucket y Firestore tienen reglas de seguridad propias: no confíes en ocultar datos, limita los accesos explícitamente.",
                lang: "bash"
              },
              expl: [
                "Cloud Storage separa el binario del cómputo y la URL se sirve por CDN.",
                "Firestore ofrece consultas y tiempo real sin esquema.",
                "Los niveles de almacenamiento bajan el costo de los datos viejos con lifecycle rules.",
                "Las reglas de seguridad del Firestore y los IAM del bucket definen el acceso."
              ],
              errors: [
                "Subir binarios a través de tu API en vez de usar una subida firmada: duplica ancho de banda.",
                "Usar Firestore para datos con transacciones complejas: prefiere Cloud SQL.",
                "Olvidar las reglas de seguridad y dejar documentos públicos."
              ],
              tips: [
                "Elige la clase de almacenamiento según la frecuencia de acceso.",
                "Configura lifecycle rules para degradar objetos viejos automáticamente.",
                "Diseña colecciones que sigan el patrón de acceso real de la app.",
                "Agrega índices compuestos en Firestore para consultas frecuentes."
              ],
              exercise: [
                "Sube un archivo a un bucket, genera una URL firmada de descarga y comparte el acceso.",
                "Crea una colección de usuarios en Firestore, escribe tres documentos y lee con una consulta."
              ],
              summary: [
                "Cloud Storage guarda objetos binarios con URLs y niveles de costo.",
                "Firestore ofrece documentos NoSQL con sincronización en tiempo real.",
                "Los binarios se suben directo desde el cliente con firmas.",
                "Las reglas de seguridad protegen los datos antes que la lógica."
              ],
              lang: "python",
              exampleFile: "data",
              desc: "Datos en Google Cloud: Cloud Storage para archivos y Firestore para documentos."
            }
          }
        ]
      },
      {
        id: "modulo-05",
        n: 5,
        t: "Redes, seguridad y alta disponibilidad",
        level: "avanzado",
        caption: "Diseñar para que nada se caiga y nada se filtre",
        desc: "Domina las redes en la nube, la seguridad y compliance, el IAM con menor privilegio, los backups, las estrategias de migración y la tolerancia a fallos que sostienen un backend profesional.",
        subtitle: "Lo que separa un backend frágil de uno bien diseñado.",
        objectives: [
          "Diseñar VPC, subredes y security groups",
          "Aplicar seguridad y compliance con responsabilidad compartida",
          "Configurar IAM con el principio de menor privilegio",
          "Implementar backups y alta disponibilidad",
          "Elegir la estrategia de migración adecuada",
          "Diseñar sistemas tolerantes a fallos"
        ],
        lessons: [
          {
            id: "vpc-y-redes-en-la-nube",
            title: "VPC y redes en la nube",
            duration: "13 min",
            level: "avanzado",
            category: "redes",
            cardText: "Subredes, IPs y security groups: la primera línea de defensa de tu backend.",
            desc: "Diseño de redes en la nube: VPC, subredes, security groups y aislamiento de datos.",
            body: {
              intro: [
                "La red es la infraestructura invisible: subredes, IPs, balanceadores y reglas de firewall deciden quién habla con quién. Una VPC bien diseñada es la primera línea de seguridad de tu backend en la nube.",
                "Aunque los conceptos son iguales en AWS, GCP y Azure, cada proveedor los nombra distinto; aquí usamos ejemplos de AWS y la traducción se aplica en los otros."
              ],
              def: {
                par: "Una VPC (Virtual Private Cloud) es tu red privada virtual dentro del datacenter del proveedor: subredes públicas y privadas, IPs, tablas de rutas y security groups. Lo interno se comunica por IP privada y solo lo necesario sale a internet.",
                porQue: "Porque el aislamiento define tu postura de seguridad: bases de datos sin IP pública, un balanceador que recibe el tráfico y aplicaciones que solo hablan por red interna reducen drásticamente la superficie de ataque.",
                cuando: "Diseña la VPC desde el primer despliegue: subredes privadas para datos, públicas para el balanceador y reglas de acceso mínimo para cada componente."
              },
              concepts: [
                "VPC: la red virtual que aísla tus recursos.",
                "Subred (subnet): segmento con su propio rango IP público o privado.",
                "Security group: firewall por instancia que permite o deniega.",
                "NACL: firewall por subred, la segunda capa de control.",
                "Internet Gateway / NAT: puertas de salida controlada a internet."
              ],
              basic: {
                p: "Con AWS, la unidad de red es la VPC. Crear la VPC con su rango y una subred es lo primero; después se anexan las reglas.",
                code: [
                  "aws ec2 create-vpc --cidr-block 10.0.0.0/16",
                  "aws ec2 create-subnet --vpc-id vpc-0a1b2c3d \\",
                  "  --cidr-block 10.0.1.0/24",
                  "aws ec2 describe-vpcs"
                ],
                out: "VPC vpc-0a1b2c3d creada en us-east-1",
                lang: "bash"
              },
              intermediate: {
                p: "El aislamiento real llega con los security groups: un grupo para el balanceador que abre el 443 y grupos para la app que solo aceptan tráfico del balanceador. Así la base de datos jamás ve internet.",
                code: [
                  "aws ec2 create-security-group \\",
                  "  --group-name sg-api --description \"Solo desde el LB\" \\",
                  "  --vpc-id vpc-0a1b2c3d",
                  "aws ec2 authorize-security-group-ingress \\",
                  "  --group-id sg-0api123 \\",
                  "  --protocol tcp --port 3000 \\",
                  "  --source-group sg-0lb456"
                ],
                caption: "Security group que solo acepta tráfico del balanceador",
                lang: "bash"
              },
              real: {
                p: "Un patrón típico de backend privado: front en subred pública tras el balanceador, app en subred privada y base de datos en otra privada, sin IP pública en datos. Terraform lo declara y todo queda versionado.",
                ul: [
                  "El balanceador vive en la subred pública y termina el TLS.",
                  "La app escala en privada y solo recibe del load balancer.",
                  "La base de datos no tiene IP pública: solo red interna.",
                  "El acceso operativo se hace por bastion o VPN."
                ],
                code: [
                  'resource "aws_vpc" "principal" {',
                  '  cidr_block = "10.0.0.0/16"',
                  "}",
                  'resource "aws_subnet" "priv_a" {',
                  "  vpc_id            = aws_vpc.principal.id",
                  '  cidr_block        = "10.0.1.0/24"',
                  '  availability_zone = "us-east-1a"',
                  "}",
                  'resource "aws_security_group" "api" {',
                  "  vpc_id = aws_vpc.principal.id",
                  "}",
                  'resource "aws_security_group_rule" "desde_lb" {',
                  '  type                     = "ingress"',
                  "  from_port                = 3000",
                  "  to_port                  = 3000",
                  '  protocol                 = "tcp"',
                  "  security_group_id        = aws_security_group.api.id",
                  "  source_security_group_id = aws_security_group.lb.id",
                  "}"
                ],
                nota: "En GCP las reglas equivalentes viven en firewall-rules por red; en Azure en network security groups (NSG) ligados a la subred.",
                lang: "yaml"
              },
              expl: [
                "La IP privada evita exponer recursos que nadie necesita desde internet.",
                "Un security group describe el acceso mínimo de cada componente.",
                "El balanceador centraliza el TLS y reparte el tráfico.",
                "El bastion o VPN permiten operar sin abrir puertos públicos innecesarios."
              ],
              errors: [
                "Asignar IPs públicas a bases de datos y Redis.",
                "Poner todo en una única subred pública por simplicidad.",
                "Permitir 0.0.0.0/0 en puertos de administración como el 22 o el 3389."
              ],
              tips: [
                "Diseña tres subredes mínimo: pública, app y datos.",
                "Usa security groups referenciados entre sí, no rangos abiertos.",
                "Aplica el menor acceso y agrega reglas solo cuando se necesiten.",
                "Revisa los denials con las herramientas de auditoría del proveedor."
              ],
              exercise: [
                "Crea una VPC con una subred pública y una privada, y un security group para la app.",
                "Dibuja el flujo de tráfico de tu backend y enumera cada regla de firewall necesaria."
              ],
              summary: [
                "La VPC aísla tus recursos en la red del proveedor.",
                "Las subredes públicas y privadas ordenan el tráfico.",
                "Los security groups son el firewall mínimo por componente.",
                "El aislamiento por red es tu primera línea de seguridad."
              ],
              lang: "bash",
              exampleFile: "network",
              desc: "Diseño de redes en la nube: VPC, subredes, security groups y aislamiento de datos."
            }
          },
          {
            id: "seguridad-y-compliance",
            title: "Seguridad y compliance",
            duration: "12 min",
            level: "avanzado",
            category: "seguridad",
            cardText: "La responsabilidad compartida: qué asegura la plataforma y qué aseguras tú.",
            desc: "Seguridad y compliance en la nube: responsabilidad compartida, cifrado y auditoría.",
            body: {
              intro: [
                "La seguridad en la nube se divide claramente: la plataforma asegura lo físico y lo virtual, y tu equipo es responsable de configuración, identidades, datos y prácticas.",
                "El modelo de responsabilidad compartida es la primera idea que debes interiorizar antes de tocar un recurso."
              ],
              def: {
                par: "En el modelo de responsabilidad compartida, el proveedor asegura el hardware, la red y los hipervisores, mientras que tú respondes por el acceso, los datos, las configuraciones de los servicios y la aplicación.",
                porQue: "Porque casi todos los incidentes en la nube vienen de configuraciones (buckets públicos, claves expuestas) más que de la plataforma. Saber qué parte toca a quién define dónde poner el esfuerzo.",
                cuando: "Tenlo en la cabeza desde el día uno: cada bucket, base de datos o función responde a qué parte del modelo."
              },
              concepts: [
                "Responsabilidad compartida: quién asegura qué en cada servicio.",
                "Encryption in transit: TLS para todo el tráfico.",
                "Encryption at rest: datos cifrados en disco con claves gestionadas.",
                "Compliance: estándares como SOC 2, ISO 27001 o GDPR que certifican.",
                "Auditoría: registros de acciones (CloudTrail, Azure Monitor, Cloud Audit Logs)."
              ],
              basic: {
                p: "El punto de partida es el inventario: con CloudTrail de AWS activado, cada acción sobre tu cuenta queda registrada y consultable por API.",
                code: [
                  "aws cloudtrail create-trail --name trail-principal \\",
                  "  --s3-bucket-name mi-registros",
                  "aws cloudtrail start-logging --name trail-principal",
                  "aws cloudtrail lookup-events \\",
                  "  --lookup-attributes AttributeKey=EventName,AttributeValue=CreateBucket"
                ],
                out: "9 registros encontrados en los últimos 90 días",
                lang: "bash"
              },
              intermediate: {
                p: "La encriptación at rest se activa por servicio; S3, RDS y EBS la tienen integrada con claves gestionadas. Con una política, obligas a que todo bucket nuevo esté cifrado.",
                code: [
                  'resource "aws_s3_bucket" "datos" {',
                  '  bucket = "mi-bucket-seguro"',
                  "  server_side_encryption_configuration {",
                  "    rule {",
                  "      apply_server_side_encryption_by_default {",
                  '        sse_algorithm = "AES256"',
                  "      }",
                  "    }",
                  "  }",
                  "}"
                ],
                caption: "Forzar cifrado at rest en S3 con Terraform",
                lang: "yaml"
              },
              real: {
                p: "La auditoría no sirve si nadie la lee: las buenas prácticas disparan alertas cuando se crea un bucket público o se expone una política demasiado amplia.",
                ul: [
                  "CloudTrail registra cada llamada a la API de AWS.",
                  "La rotación de claves reduce la ventana de una credencial filtrada.",
                  "Los escaneos de dependencias entran en el pipeline de CI.",
                  "Los estándares de compliance se verifican con GDPR, SOC 2 e ISO 27001."
                ],
                code: [
                  "aws s3api get-bucket-acl --bucket mi-bucket-seguro",
                  "# detecta acceso público no previsto:",
                  "aws s3api get-bucket-policy-status --bucket mi-bucket-seguro"
                ],
                nota: "La mayoría de las fugas no son exploits sofisticados: son un bucket con acceso público por un error de configuración.",
                lang: "bash"
              },
              expl: [
                "El proveedor nunca es responsable de tus configuraciones.",
                "Cifrar en tránsito y en reposo es el mínimo no negociable.",
                "Los logs de auditoría existen para que puedas detectar anomalías.",
                "La compliance se certifica, pero la responsabilidad operativa sigue siendo tuya."
              ],
              errors: [
                "Confiar en que la nube es segura por defecto sin configurar nada.",
                "Crear buckets públicos para pruebas y olvidarlos en producción.",
                "Compartir tokens de larga duración en equipos compartidos."
              ],
              tips: [
                "Activa la auditoría desde el primer recurso.",
                "Usa los marcos de referencia del proveedor como AWS Well-Architected.",
                "Rota y revoca las credenciales que no se usen.",
                "Corre scanners de configuración en CI (Checkov, tfsec)."
              ],
              exercise: [
                "Activa CloudTrail, crea un bucket y revisa el registro de la acción.",
                "Escribe una política Terraform que obligue a cifrado en un bucket."
              ],
              summary: [
                "La seguridad en la nube es responsabilidad compartida.",
                "Cifrar en tránsito y en reposo es el estándar mínimo.",
                "La auditoría continua detecta errores de configuración.",
                "Los buckets públicos y las claves filtradas causan la mayoría de incidentes."
              ],
              lang: "bash",
              exampleFile: "security",
              desc: "Seguridad y compliance en la nube: responsabilidad compartida, cifrado y auditoría."
            }
          },
          {
            id: "iam-y-menor-privilegio",
            title: "IAM y menor privilegio",
            duration: "11 min",
            level: "avanzado",
            category: "seguridad",
            cardText: "Políticas y roles: quién puede hacer qué, y solo eso.",
            desc: "Identidad y acceso en la nube: políticas IAM, roles y el principio de menor privilegio.",
            body: {
              intro: [
                "Las credenciales del backend se gestionan con IAM: usuarios, roles, políticas y la regla de oro del menor privilegio.",
                "Una política IAM mal escrita puede exponer tu cuenta entera; bien escrita, limita el daño de cualquier clave que se filtre."
              ],
              def: {
                par: "IAM define quién (identidad) puede hacer qué (acción) sobre qué (recurso). Las políticas asignan permisos concretos y los roles agrupan políticas reutilizables para humanos o máquinas.",
                porQue: "Porque una clave con permisos de administrador convierte cualquier fuga en una cuenta comprometida. Limitar permisos por servicio y recurso reduce drásticamente el radio de explosión.",
                cuando: "Aplica menor privilegio para todo: cada instancia, función o desarrollador tiene solo los permisos que necesita, ni uno más."
              },
              concepts: [
                "Identidad (usuario o rol): quién ejecuta la acción.",
                "Política: documento JSON que autoriza o deniega acciones.",
                "Acción: recurso concreto como s3:PutObject o ec2:RunInstances.",
                "Recurso: ARN que acota dónde se aplica el permiso.",
                "Menor privilegio: el conjunto mínimo posible de permisos."
              ],
              basic: {
                p: "La política JSON es el corazón de IAM. Este ejemplo permite leer un bucket concreto y nada más: ni listar todos los buckets, ni escribir, ni tocar otros servicios.",
                code: [
                  "{",
                  '  "Version": "2012-10-17",',
                  '  "Statement": [',
                  "    {",
                  '      "Effect": "Allow",',
                  '      "Action": "s3:GetObject",',
                  '      "Resource": "arn:aws:s3:::mi-bucket-seguro/*"',
                  "    }",
                  "  ]",
                  "}"
                ],
                out: "Permiso de lectura de un solo bucket",
                lang: "json"
              },
              intermediate: {
                p: "En vez de pegar la política a cada usuario, la agrupas en un rol y el usuario o servicio la asume. Las instancias EC2 usan instance profiles y Lambda sus roles, sin claves embebidas.",
                code: [
                  "aws iam create-policy --name backend-s3-read \\",
                  "  --policy-document file://politica.json",
                  "aws iam attach-role-policy \\",
                  "  --role-name rol-api \\",
                  "  --policy-arn arn:aws:iam::123456789012:policy/backend-s3-read"
                ],
                caption: "Adjuntar una política a un rol",
                lang: "bash"
              },
              real: {
                p: "El diseño real separa roles por servicio: la API solo sabe leer su bucket y la función serverless solo procesa su cola. Un rol humano de admin existe solo para emergencias y con MFA.",
                ul: [
                  "Cada servicio tiene un rol propio con solo sus acciones.",
                  "Las claves de larga duración se reemplazan por roles temporales.",
                  "El MFA se exige en las cuentas administrativas.",
                  "Las políticas se revisan en auditorías periódicas."
                ],
                code: [
                  "{",
                  '  "Version": "2012-10-17",',
                  '  "Statement": [',
                  "    {",
                  '      "Effect": "Allow",',
                  '      "Action": ["s3:GetObject", "s3:PutObject"],',
                  '      "Resource": [',
                  '        "arn:aws:s3:::mi-bucket-seguro/entrada/*",',
                  '        "arn:aws:s3:::mi-bucket-seguro/procesado/*"',
                  "      ]",
                  "    }",
                  "  ]",
                  "}"
                ],
                nota: "En GCP el equivalente son los roles y roles personalizados; en Azure, los roles de Entra ID y las managed identities.",
                lang: "json"
              },
              expl: [
                "El menor privilegio es proporcional al riesgo: nadie sobra.",
                "Los roles temporales eliminan la necesidad de claves de larga duración.",
                "La política se evalúa contra cada operación, no contra toda la cuenta.",
                "La revisión periódica encuentra permisos abandonados."
              ],
              errors: [
                "Dar Action * en una política por si acaso.",
                "Hardcodear claves de AWS en el código o en variables compartidas.",
                "Reutilizar la misma identidad de administrador para todo el equipo."
              ],
              tips: [
                "Empieza sin permisos y agrégalos cuando un flujo real los pida.",
                "Usa roles de servicio en vez de claves embebidas.",
                "Exige MFA en todas las cuentas con acceso administrativo.",
                "Audita periódicamente con herramientas como IAM Access Analyzer."
              ],
              exercise: [
                "Escribe una política que permita listar y leer solo un bucket, y pruébala creando un rol.",
                "Reemplaza una clave embebida por un rol asumible y confirma que nada cambia funcionalmente."
              ],
              summary: [
                "IAM controla quién puede hacer qué sobre qué recurso.",
                "Las políticas se acotan a acciones y recursos concretos.",
                "Los roles de servicio reemplazan a las claves embebidas.",
                "El menor privilegio reduce el daño de cada fuga de credenciales."
              ],
              lang: "json",
              exampleFile: "policy",
              desc: "Identidad y acceso en la nube: políticas IAM, roles y el principio de menor privilegio."
            }
          },
          {
            id: "backups-y-alta-disponibilidad",
            title: "Backups y alta disponibilidad",
            duration: "12 min",
            level: "avanzado",
            category: "alta-disponibilidad",
            cardText: "Copias restaurables, réplicas multi-AZ y un plan de recuperación que se prueba.",
            desc: "Backups, alta disponibilidad y recuperación ante desastres en la nube.",
            body: {
              intro: [
                "Una base sin backup no es un dato: es una esperanza. La alta disponibilidad la complementa: que el servicio no se caiga aunque falle una máquina, una zona o una región.",
                "Aquí verás los tres niveles de protección: snapshot de backup, réplica multi-AZ y recuperación ante desastres (DR)."
              ],
              def: {
                par: "Backup es una copia restaurable de tus datos en otro lugar. Alta disponibilidad es el diseño que evita el corte de servicio ante un fallo local. Disaster recovery es el plan para recuperar el servicio completo en otra región tras un desastre.",
                porQue: "Porque los fallos son estadística: discos, máquinas y hasta regiones fallan. Con backups restaurables, alta disponibilidad automática y DR documentado, un incidente pasa de perdida a recuperación en horas.",
                cuando: "Activa backups desde el día uno, alta disponibilidad en cuanto el tráfico importe y un plan de DR cuando tengas un SLA que cumplir."
              },
              concepts: [
                "Snapshot: copia instantánea del disco, restaurable.",
                "Multi-AZ: réplica en otra zona de disponibilidad.",
                "RPO (Recovery Point Objective): cuántos datos puedes perder.",
                "RTO (Recovery Time Objective): cuánto tardas en recuperarte.",
                "Failover: la transición automática al respaldo."
              ],
              basic: {
                p: "El primer paso es organizar la restauración: RDS con backups automáticos y snapshots manuales. Cada copia tiene una retención configurable.",
                code: [
                  "aws rds modify-db-instance \\",
                  "  --db-instance-identifier mi-base \\",
                  "  --backup-retention-period 14",
                  "aws rds create-db-snapshot \\",
                  "  --db-instance-identifier mi-base \\",
                  "  --db-snapshot-identifier mi-base-pre-migracion"
                ],
                out: "Backups automáticos de 14 días + snapshot manual creado",
                lang: "bash"
              },
              intermediate: {
                p: "La alta disponibilidad nativa: una réplica multi-AZ en otra zona, con failover automático. Si la primaria se cae, la réplica toma el control sin cambiar el endpoint.",
                code: [
                  'resource "aws_db_instance" "base" {',
                  "  multi_az   = true",
                  '  engine     = "postgres"',
                  '  instance_class = "db.t3.medium"',
                  "  allocated_storage = 50",
                  "  backup_retention_period = 14",
                  "}"
                ],
                caption: "Base de datos multi-AZ con Terraform",
                lang: "yaml"
              },
              real: {
                p: "El plan DR completo: backups replicados y la posibilidad de levantar la infraestructura en otra región. La prueba periódica de restauración (el drill) es tan importante como el backup mismo.",
                ul: [
                  "RPO: el máximo de datos que aceptas perder.",
                  "RTO: el tiempo máximo fuera de servicio que toleras.",
                  "Los backups se replican a otra región.",
                  "El drill de restauración se agenda al menos trimestralmente."
                ],
                code: [
                  "aws rds restore-db-instance-from-db-snapshot \\",
                  "  --db-instance-identifier mi-base-restaurada \\",
                  "  --db-snapshot-identifier mi-base-pre-migracion",
                  "aws rds describe-db-instances \\",
                  "  --db-instance-identifier mi-base-restaurada \\",
                  "  --query 'DBInstances[0].DBInstanceStatus'"
                ],
                nota: "Un backup que no se ha restaurado nunca es un rumor: prueba los drills y documenta los tiempos reales.",
                lang: "bash"
              },
              expl: [
                "El backup te protege de la pérdida de datos; la alta disponibilidad de la pérdida de servicio.",
                "Multi-AZ cubre fallos de zona; la replicación a otra región cubre desastres.",
                "RPO y RTO definen qué tan bueno tiene que ser tu plan.",
                "Los drills revelan que la restauración real siempre tarda más de lo estimado."
              ],
              errors: [
                "Configurar backups sin probar jamás la restauración.",
                "Confundir réplica con copia de seguridad: no son lo mismo.",
                "Guardar los backups en el mismo disco o la misma región que los datos."
              ],
              tips: [
                "Fija una retención mínima de 14 días y snapshots antes de migraciones.",
                "Activa multi-AZ en las bases con tráfico productivo.",
                "Replica los backups a otra región para el caso de desastre.",
                "Programa y mide los drills de restauración."
              ],
              exercise: [
                "Crea un snapshot de tu base, borra un dato y restaura desde el snapshot.",
                "Define el RPO y RTO de tu propio proyecto y escribe el plan de recuperación."
              ],
              summary: [
                "El backup protege los datos; la alta disponibilidad protege el servicio.",
                "Multi-AZ da failover automático ante fallos de zona.",
                "RPO y RTO guían el diseño del plan de recuperación.",
                "Los drills periódicos convierten el plan en práctica probada."
              ],
              lang: "bash",
              exampleFile: "backup",
              desc: "Backups, alta disponibilidad y recuperación ante desastres en la nube."
            }
          },
          {
            id: "migracion-a-la-nube",
            title: "Estrategias de migración",
            duration: "11 min",
            level: "avanzado",
            category: "migración",
            cardText: "Rehost, replatform o refactor: cómo mover sistemas sin reinventar todo.",
            desc: "Estrategias de migración a la nube: rehost, replatform y refactor paso a paso.",
            body: {
              intro: [
                "Migrar a la nube no es copiar los archivos: es elegir una estrategia de traslado con riesgo controlado para cada sistema.",
                "Las 7 Rs de migración (retire, retain, rehost, relocate, replatform, refactor, repurchase) ordenan el proceso y evitan reescribir todo por inercia."
              ],
              def: {
                par: "La migración sigue una de las estrategias: rehost (levantar la misma VM), replatform (cambiar a gestionado sin reescribir demasiado), refactor (reescribir para serverless o contenedores) o repurchase (pasar a SaaS).",
                porQue: "Porque migrar no es un fin: el fin es entregar valor con menos operación y más resiliencia. Elegir la estrategia antes de mover reduce sorpresas de costos y de compatibilidad.",
                cuando: "Usa rehost cuando el tiempo apremia, replatform cuando quieras menos mantenimiento sin reescribir, y refactor cuando el sistema ya esté listo para cloud-native."
              },
              concepts: [
                "Rehost: lift & shift, la misma VM en la nube.",
                "Replatform: cambiar solo la plataforma (base gestionada, balanceador).",
                "Refactor: rediseñar la app para servicios nativos.",
                "Repurchase: sustituir por un SaaS.",
                "Assessment: inventario previo de sistemas, dependencias y costos."
              ],
              basic: {
                p: "El primer paso no es técnico: es el inventario. Listar servidores, versiones y dependencias define qué mover primero y con qué estrategia.",
                code: [
                  "# inventario rápido con AWS Systems Manager",
                  "aws ssm describe-instance-information",
                  "aws ec2 describe-instances --query 'Reservations[].Instances[].Tags'"
                ],
                out: "12 instancias, 3 entornos, 2 bases PostgreSQL",
                lang: "bash"
              },
              intermediate: {
                p: "El rehost es el camino más directo: exportas la VM, la subes como imagen y la levantas igual en la nube. Rápido y de bajo riesgo para empezar.",
                code: [
                  "aws ec2 import-image --disk-containers file://containers.json",
                  "aws ec2 describe-import-image-tasks",
                  "# con la imagen lista, se lanza una instancia equivalente",
                  "aws ec2 run-instances --image-id ami-0a1b2c3d \\",
                  "  --instance-type t3.medium"
                ],
                caption: "Lift & shift hacia EC2",
                lang: "bash"
              },
              real: {
                p: "La decisión de replatform versus refactor se toma por caso: la base de datos pasa a gestionada casi sin cambios y la app se empaqueta en contenedores, mientras el endpoint antiguo sigue vivo redirigiendo tráfico.",
                ul: [
                  "La base se mueve a RDS sin reescribir consultas.",
                  "La app se empaqueta en un contenedor gradualmente.",
                  "El DNS se cambia cuando la nueva versión pasa las pruebas.",
                  "Los picos se absorben primero con autoscalado."
                ],
                code: [
                  "# mover la base PostgreSQL a RDS",
                  "aws rds create-db-instance \\",
                  "  --engine postgres --db-instance-identifier mi-base \\",
                  "  --db-instance-class db.t3.medium --allocated-storage 50",
                  "# migrar los datos con pg_dump",
                  "pg_dump -h origen -U app app | psql -h mi-base.rds.amazonaws.com -U app app"
                ],
                nota: "El refactor (serverless, contenedores) aporta lo mejor, pero es el de mayor riesgo: hazlo después del rehost o replatform, cuando el sistema ya está en la nube.",
                lang: "bash"
              },
              expl: [
                "Migrar primero lo trivial reduce el riesgo global del proyecto.",
                "Replatform suele aportar gran parte del valor con poco esfuerzo.",
                "Los flips de DNS y blue-green hacen el corte casi imperceptible.",
                "Refactorizar sobre datos ya migrados aísla el riesgo de la reescritura."
              ],
              errors: [
                "Reescribir todo a serverless en la primera semana de migración.",
                "Migrar datos sin validar la integridad después de la carga.",
                "Olvidar los TTL largos de DNS en la ventana de corte de producción."
              ],
              tips: [
                "Empieza con un piloto no crítico y mide con métricas reales.",
                "Mueve los datos con ventanas de mantenimiento y verificación.",
                "Documenta el mapa de dependencias entre servidores.",
                "Deja el entorno antiguo vivo hasta confirmar la estabilidad."
              ],
              exercise: [
                "Haz el assessment de tu propio sistema: qué moverías primero y con qué estrategia.",
                "Escribe el plan de corte de una base de datos crítica con DNS, backups y drill."
              ],
              summary: [
                "La migración elige estrategia antes de mover nada.",
                "Rehost es rápido; replatform ofrece valor con poco riesgo.",
                "Refactor es el objetivo último, pero después de migrar.",
                "Los flips de DNS y la validación hacen el corte seguro."
              ],
              lang: "bash",
              exampleFile: "migrate",
              desc: "Estrategias de migración a la nube: rehost, replatform y refactor paso a paso."
            }
          },
          {
            id: "tolerancia-a-fallos-y-redundancia",
            title: "Tolerancia a fallos y redundancia",
            duration: "12 min",
            level: "avanzado",
            category: "alta-disponibilidad",
            cardText: "Redundancia, healthchecks y failover: el servicio sigue aunque se caiga una pieza.",
            desc: "Tolerancia a fallos y redundancia: healthchecks, failover y autoscaling resistente.",
            body: {
              intro: [
                "En la nube los fallos son esperables, no excepcionales: un disco falla, una zona se degrada, un balanceador puede caer. El diseño tolerante a fallos asume ese fracaso y lo neutraliza.",
                "Redundancia y failover son sus dos herramientas: instancias repetidas, bases con réplicas y healthchecks que aíslan lo enfermo."
              ],
              def: {
                par: "La tolerancia a fallos es la capacidad de seguir dando servicio cuando un componente falla, gracias a la redundancia (copias activas) y a la detección automática (healthchecks, circuit breakers).",
                porQue: "Porque el usuario no distingue entre tu fallo y tu recuperación: solo nota que el servicio no responde. El diseño tolerante hace que los fallos individuales pasen desapercibidos.",
                cuando: "Diseñalo desde la arquitectura, no como parche: instancias detrás de un balanceador, bases con réplica y cada componente con su healthcheck real."
              },
              concepts: [
                "Redundancia: varias copias activas del mismo componente.",
                "Failover: el respaldo toma el control automáticamente.",
                "Healthcheck: sonda que decide si un recurso está sano.",
                "Circuit breaker: corta el tráfico a un componente que falla repetidamente.",
                "Idempotencia: repetir una operación no causa efectos dobles."
              ],
              basic: {
                p: "El patrón mínimo es un grupo de instancias detrás de un balanceador con healthcheck. El grupo reparte el tráfico y reemplaza la instancia que no responde.",
                code: [
                  "aws autoscaling create-auto-scaling-group \\",
                  "  --auto-scaling-group-name asg-api \\",
                  "  --launch-template LaunchTemplateName=plantilla-api \\",
                  "  --min-size 2 --max-size 6 \\",
                  "  --vpc-zone-identifier subnet-aaaa,subnet-bbbb",
                  "aws autoscaling put-scaling-policy \\",
                  "  --auto-scaling-group-name asg-api \\",
                  "  --policy-name escalar-cpu --scaling-adjustment 1 \\",
                  "  --cooldown 120"
                ],
                out: "2 instancias mínimas, healthcheck del balanceador activo",
                lang: "bash"
              },
              intermediate: {
                p: "El healthcheck de la app es lo que decide la salud real: un endpoint /health que verifica la conexión a la base, no solo que el proceso responde.",
                code: [
                  "app.get('/health', async (req, res) => {",
                  "  try {",
                  "    await db.query('SELECT 1');",
                  "    res.json({ status: 'ok' });",
                  "  } catch (err) {",
                  "    res.status(503).json({ status: 'degradado' });",
                  "  }",
                  "});"
                ],
                caption: "Healthcheck con dependencia real en Express",
                lang: "js"
              },
              real: {
                p: "El circuito completo: balanceador repartiendo tráfico entre instancias de dos zonas, base multi-AZ y cola de reintentos para el trabajo asíncrono. Cada pieza puede fallar sin tumbar el conjunto.",
                ul: [
                  "El balanceador retira instancias sin healthcheck verde.",
                  "Cada zona de disponibilidad sostiene su propio conjunto sano.",
                  "La base multi-AZ conmuta sin cambiar el endpoint.",
                  "La cola de trabajo reintenta los mensajes sin pérdida."
                ],
                code: [
                  'resource "aws_lb_target_group" "api" {',
                  "  port     = 3000",
                  '  protocol = "HTTP"',
                  "  health_check {",
                  '    path = "/health"',
                  "    interval = 30",
                  "    healthy_threshold = 2",
                  "    unhealthy_threshold = 2",
                  "  }",
                  "}"
                ],
                nota: "El healthcheck debe validar el servicio de verdad: sin la base, el /health devuelve 503 y el balanceador retira la instancia.",
                lang: "yaml"
              },
              expl: [
                "La redundancia sin healthcheck es teatro: necesitas saber qué copia está viva.",
                "El failover automático de la base lo hace la plataforma, pero lo validas tú.",
                "El circuit breaker evita que un servicio lento apague todo el backend.",
                "La idempotencia de los workers protege las colas de reintentos."
              ],
              errors: [
                "Escalar para rendimiento, no para fallos: réplicas sin healthcheck real.",
                "Hacer healthchecks que solo responden 200 sin tocar dependencias.",
                "Colas con reintentos ilimitados y workers no idempotentes."
              ],
              tips: [
                "Distribuye las instancias en al menos dos zonas.",
                "Diseña /health con las dependencias que importan.",
                "Configura timeouts y reintentos en el balanceador.",
                "Prueba el failover a propósito: apaga la zona primaria en staging."
              ],
              exercise: [
                "Monta un grupo de autoescalado con dos zonas y healthcheck, y apaga una instancia para observar el reemplazo.",
                "Escribe el /health de tu API y haz que falle al cortar la base."
              ],
              summary: [
                "La tolerancia a fallos asume que las piezas fallan.",
                "Redundancia, healthcheck y failover son el trío básico.",
                "El balanceador y el autoescalado hacen el trabajo automático.",
                "Las colas y la idempotencia protegen el trabajo asíncrono."
              ],
              lang: "bash",
              exampleFile: "faults",
              desc: "Tolerancia a fallos y redundancia: healthchecks, failover y autoscaling resistente."
            }
          }
        ]
      },
      {
        id: "modulo-06",
        n: 6,
        t: "Costos y Estrategia",
        level: "avanzado",
        caption: "Entender, controlar y optimizar el gasto en la nube",
        desc: "Gestiona el costo de tu backend en la nube: capas gratuitas, alertas de gasto, modelos de precios, optimización, equivalencias entre proveedores y el despliegue de una API con estrategia.",
        subtitle: "La nube se paga por el uso: tú decides cuánto.",
        objectives: [
          "Usar la capa gratuita y configurar alertas de gasto",
          "Entender el modelo de precios de los servicios",
          "Optimizar costos con buenas prácticas",
          "Comparar servicios equivalentes entre AWS, GCP y Azure",
          "Desplegar una API con estrategia de costos"
        ],
        lessons: [
          { id: "capa-gratuita-y-alertas", title: "Capa gratuita y alertas de gasto", duration: "10 min", level: "avanzado", category: "costos", cardText: "Empieza sin gastar y activa presupuestos que te avisen antes de la sorpresa." },
          { id: "modelo-de-precios", title: "Entender el modelo de precios", duration: "11 min", level: "avanzado", category: "costos", cardText: "Cómputo, almacenamiento y egress: cómo se calcula una factura de nube." },
          { id: "optimizacion-de-costos", title: "Optimización de costos", duration: "12 min", level: "avanzado", category: "costos", cardText: "Reserved instances, autoescalado, derechos de uso y destructores de gasto." },
          { id: "equivalencias-entre-proveedores", title: "Equivalencias entre AWS, GCP y Azure", duration: "11 min", level: "avanzado", category: "costos", cardText: "Traduce servicios entre las tres nubes: EC2, Compute Engine y Azure VM." },
          { id: "despliegue-api-en-la-nube", title: "Despliegue de una API con estrategia", duration: "14 min", level: "avanzado", category: "despliegue", cardText: "El flujo completo: de cero a una API en producción sin gastar de más." }
        ]
      },
      {
        id: "modulo-07",
        n: 7,
        t: "Serverless y arquitecturas nativas",
        level: "avanzado",
        caption: "Diseñar para la nube, no para el datacenter",
        desc: "Cierra el curso con los patrones de producción serverless, API Gateway y CDN, arquitecturas event-driven, infraestructura como código en la nube y el diseño cloud-native completo.",
        subtitle: "El backend que escala, sobrevive y se opera solo.",
        objectives: [
          "Operar serverless en producción con patrones maduros",
          "Diseñar la entrada con API Gateway y CDN",
          "Construir arquitecturas event-driven",
          "Declarar la infraestructura como código",
          "Aplicar los principios del diseño cloud-native"
        ],
        lessons: [
          {
            id: "serverless-en-produccion",
            title: "Serverless en producción",
            duration: "13 min",
            level: "avanzado",
            category: "serverless",
            cardText: "Más allá de la función: colas, límites de concurrencia y observabilidad.",
            desc: "Patrones de serverless en producción: colas, límites de concurrencia y observabilidad.",
            body: {
              intro: [
                "Serverless no es solo escribir funciones: es operar en producción sin servidores, con patrones claros para latencia, estado y errores.",
                "El cambio mental más importante: tu aplicación es un conjunto de eventos, no un conjunto de procesos corriendo."
              ],
              def: {
                par: "Serverless en producción significa aplicaciones compuestas de funciones y servicios gestionados, sin servidores que administrar. El proveedor ejecuta el código bajo demanda y tú pagas por uso.",
                porQue: "Porque elimina la operación de máquinas y, bien usado, reduce costos: no hay instancias ociosas y el escalado es automático.",
                cuando: "Úsalo cuando el tráfico sea variable, quieras enfocarte en lógica y no en infraestructura, y las latencias toleren el cold start."
              },
              concepts: [
                "Cold start: el costo de latencia de la primera invocación tras la pausa.",
                "Idempotencia: la función puede repetirse sin efectos dobles.",
                "Throttling: los límites de concurrencia del proveedor.",
                "Observabilidad: métricas y logs de cada ejecución.",
                "Stateless: el estado vive en servicios externos."
              ],
              basic: {
                p: "El contrato de una función de producción: entrada, proceso, salida; sin estado en memoria, con logs y con un timeout razonable.",
                code: [
                  "export const handler = async (event) => {",
                  "  const cuerpo = JSON.parse(event.body || '{}');",
                  "  const resultado = await procesar(cuerpo);",
                  "  console.log('procesado', cuerpo.id);",
                  "  return {",
                  "    statusCode: 200,",
                  "    body: JSON.stringify(resultado)",
                  "  };",
                  "};"
                ],
                out: "200 OK · registro en CloudWatch",
                lang: "js"
              },
              intermediate: {
                p: "El patrón de producción en la cola: la API publica el mensaje en SQS y una función procesa los eventos. El desacople permite reintentos y escala independiente.",
                code: [
                  "const { SQSClient, SendMessageCommand } = require('@aws-sdk/client-sqs');",
                  "const sqs = new SQSClient({ region: 'us-east-1' });",
                  "export const publicar = async (event) => {",
                  "  await sqs.send(new SendMessageCommand({",
                  "    QueueUrl: process.env.QUEUE_URL,",
                  "    MessageBody: JSON.stringify(event.body)",
                  "  }));",
                  "  return { statusCode: 202, body: 'aceptado' };",
                  "};"
                ],
                caption: "Publicar en una cola SQS desde una función",
                lang: "js"
              },
              real: {
                p: "En producción gestionas concurrencia, tiempo y observabilidad: límites por función, alarmas de error y tableros de latencia. La plataforma hace el resto.",
                ul: [
                  "El límite de concurrencia evita que una función dispare costos.",
                  "Las métricas de invocaciones y errores disparan alarmas.",
                  "Los logs se estructuran en JSON para poder buscar.",
                  "Los dead letters de la cola capturan mensajes que fallaron."
                ],
                code: [
                  "# límite de concurrencia de la función Lambda",
                  "aws lambda put-function-concurrency \\",
                  "  --function-name mi-api \\",
                  "  --reserved-concurrent-executions 200",
                  "# alarma sobre una métrica de errores",
                  "aws cloudwatch put-metric-alarm \\",
                  "  --alarm-name errores-api \\",
                  "  --metric-name Errors --namespace AWS/Lambda --statistic Sum \\",
                  "  --period 300 --evaluation-periods 2 --threshold 10 \\",
                  "  --comparison-operator GreaterThanThreshold"
                ],
                nota: "El dead-letter queue (DLQ) de SQS recoge lo que no se pudo procesar: el fallo no se pierde, se investiga.",
                lang: "bash"
              },
              expl: [
                "El cold start se mitiga con warmup o min-concurrency si el SLO lo exige.",
                "La idempotencia de los handlers hace seguros los reintentos.",
                "La concurrencia es el botón de control de costos del serverless.",
                "La observabilidad por capas (métricas, logs, trazas) no se negocia."
              ],
              errors: [
                "No poner límite de concurrencia y dejar abierto el grifo de costos.",
                "Handlers que cambian estado en memoria y fallan en repetidoras.",
                "Llamar a la función desde el frontend con la API key embebida."
              ],
              tips: [
                "Mantén el payload y el código mínimo para reducir el tiempo de ejecución.",
                "Diseña los reintentos con una estrategia exponencial y dead letters.",
                "Haz los handlers idempotentes con el id del evento.",
                "Monitorea el ratio de errores, no solo las invocaciones."
              ],
              exercise: [
                "Publica un mensaje a una cola SQS con una función y procesa los eventos con otra.",
                "Configura un límite de concurrencia y una alarma de errores en una función real."
              ],
              summary: [
                "Serverless en producción exige patrones de eventos, no solo funciones.",
                "El estado vive fuera de la función.",
                "La concurrencia y las alarmas controlan costos y salud.",
                "Los DLQ y la idempotencia hacen seguros los reintentos."
              ],
              lang: "js",
              exampleFile: "handler",
              desc: "Patrones de serverless en producción: colas, límites de concurrencia y observabilidad."
            }
          },
          {
            id: "api-gateway-y-cdn",
            title: "API Gateway y CDN",
            duration: "12 min",
            level: "avanzado",
            category: "serverless",
            cardText: "La puerta de entrada de tu API serverless y el contenido servido desde el edge.",
            desc: "API Gateway y CDN: puerta de entrada serverless, throttling y caché en el edge.",
            body: {
              intro: [
                "API Gateway es la puerta de entrada de tu backend serverless: autentica, limita, versiona y enruta cada petición sin que tu función toque el HTTP crudo.",
                "El CDN distribuye el contenido estático cerca del usuario y protege el origen con caché y reglas de edge."
              ],
              def: {
                par: "API Gateway expone endpoints HTTP que conectan con funciones o servicios de backend: valida, autentica, limita la velocidad y factura por petición. El CDN cachea respuestas en el edge, reduciendo latencia y carga del origin.",
                porQue: "Porque separar la entrada de la lógica da control centralizado: throttling, WAF, versionado de rutas y paneles de uso. Y cada byte servido desde el edge es costo y latencia menos en tu origen.",
                cuando: "Usa API Gateway desde el primer endpoint serverless, y CDN para contenido estático, respuestas que toleran caché y descarga de archivos públicos."
              },
              concepts: [
                "Endpoint: la ruta expuesta por el gateway.",
                "Autorización: IAM, token JWT o API keys en el gateway.",
                "Throttling: límites por clave y por segundo.",
                "Edge: la red de servidores del CDN cerca del usuario.",
                "Caché: el TTL que controla la frescura de las respuestas."
              ],
              basic: {
                p: "Con la API HTTP v2 de Amazon API Gateway, el endpoint queda definido por su ruta y su integración: aquí, una ruta GET que conecta con la función Lambda.",
                code: [
                  "aws apigatewayv2 create-api --name mi-api --protocol-type HTTP",
                  "aws apigatewayv2 create-route \\",
                  '  --api-id abc123 --route-key "GET /saludo" \\',
                  "  --target integrations/xyz",
                  "aws apigatewayv2 create-stage --api-id abc123 --stage-name prod"
                ],
                out: "API HTTP v2 creada con ruta GET /saludo",
                lang: "bash"
              },
              intermediate: {
                p: "Con SAM y CloudFormation, el gateway completo se declara en YAML: la ruta, la integración con Lambda y los límites de throttling. La función y el gateway se despliegan juntos.",
                code: [
                  "Api:",
                  '  Type: AWS::Serverless::Api',
                  "  Properties:",
                  "    StageName: prod",
                  "    MethodSettings:",
                  '      - HttpMethod: "*"',
                  '        ResourcePath: "/*"',
                  "        ThrottlingBurstLimit: 100",
                  "        ThrottlingRateLimit: 50",
                  "SaludoFunction:",
                  '  Type: AWS::Serverless::Function',
                  "  Properties:",
                  "    Events:",
                  "      GetSaludo:",
                  "        Type: Api",
                  "        Properties:",
                  "          Path: /saludo",
                  "          Method: get"
                ],
                caption: "Plantilla SAM: gateway + función con throttling",
                lang: "yaml"
              },
              real: {
                p: "El CDN protege y acelera: CloudFront se configura con behaviors para servir estáticos del bucket y reenviar las rutas de la API al origin. El resultado: menos costo de egress y mejor latencia.",
                ul: [
                  "El comportamiento por path decide qué responde el edge y qué reenvía al origin.",
                  "Las TTL cortas mantienen frescos los datos dinámicos.",
                  "CloudFront soporta bytes range para archivos grandes.",
                  "El WAF se asocia al CDN para filtrar antes de tocar la API."
                ],
                code: [
                  'resource "aws_cloudfront_distribution" "cdn" {',
                  "  origin {",
                  "    domain_name = aws_s3_bucket.front.bucket_regional_domain_name",
                  "    origin_id   = \"s3-front\"",
                  "  }",
                  '  default_cache_behavior {',
                  "    target_origin_id       = \"s3-front\"",
                  "    viewer_protocol_policy = \"redirect-to-https\"",
                  "    cache_policy_id        = \"id-politica-estatica\"",
                  "  }",
                  "}"
                ],
                nota: "La caché del CDN añade una capa de latencia pensada: las APIs dinámicas usan TTL cortos o se envían con Cache-Control: no-store.",
                lang: "yaml"
              },
              expl: [
                "El gateway centraliza autenticación, throttling y facturación de la API.",
                "El CDN mueve el contenido cerca del usuario y descarga el origin.",
                "El WAF frente al edge bloquea antes de que la carga llegue a la función.",
                "Edge + gateway + function es el núcleo de la web moderna."
              ],
              errors: [
                "Cachear respuestas dinámicas con TTL largos y servir datos viejos.",
                "Exponer la función Lambda directa a internet sin gateway ni throttle.",
                "Mezclar estático y dinámico sin política de caché por endpoint."
              ],
              tips: [
                "Expide las API keys desde el gateway, no desde el frontend.",
                "Configura TTL por recurso: corto para API, largo para estáticos.",
                "Habilita HSTS y redirección a HTTPS en el edge.",
                "Monitorea el hit ratio de caché del CDN."
              ],
              exercise: [
                "Crea una API HTTP v2 con una ruta y una función, y prueba el throttling subiendo la carga.",
                "Monta CloudFront frente a un bucket estático y verifica el hit ratio con dos peticiones."
              ],
              summary: [
                "API Gateway es la puerta centralizada de tu backend serverless.",
                "El CDN sirve desde el edge y protege el origin.",
                "Throttling, WAF y caché se controlan por configuración.",
                "Edge + gateway + function sostiene la web moderna."
              ],
              lang: "yaml",
              exampleFile: "template",
              desc: "API Gateway y CDN: puerta de entrada serverless, throttling y caché en el edge."
            }
          },
          {
            id: "arquitecturas-event-driven",
            title: "Arquitecturas event-driven",
            duration: "13 min",
            level: "avanzado",
            category: "serverless",
            cardText: "Colas, topics y eventos que desacoplan productores de consumidores.",
            desc: "Arquitecturas event-driven: colas, topics, fan-out y patrones asíncronos.",
            body: {
              intro: [
                "El backend clásico pregunta (request/response); el event-driven avisa. Cada acción publica un evento y los servicios reaccionan de forma asíncrona sin acoplarse entre sí.",
                "Es el patrón que escala los sistemas de pago, comercio y analítica: colas, topics y suscripciones desacoplan productores y consumidores."
              ],
              def: {
                par: "Una arquitectura event-driven usa eventos transportados por brokers como SQS, SNS o EventBridge. El productor publica sin saber quién consumirá, y cada consumidor procesa a su ritmo.",
                porQue: "Porque desacoplar productores y consumidores elimina los cuellos de botella síncronos: tu API responde rápido y el trabajo pesado ocurre después, con reintentos y paralelismo.",
                cuando: "Úsala para procesos de fondo, integraciones múltiples sobre un mismo hecho y cargas explosivas que hay que amortiguar con una cola."
              },
              concepts: [
                "Evento: un hecho del sistema con datos congelados.",
                "Productor: publica sin conocer al consumidor.",
                "Consumidor: procesa eventos a su ritmo y escala.",
                "Broker: el bus que entrega (SQS, SNS, EventBridge).",
                "Fan-out: un evento publicado a muchos consumidores a la vez."
              ],
              basic: {
                p: "El patrón mínimo con SQS: la API publica y un worker consume. El productor no espera a que el procesamiento termine: solo deja el mensaje en la cola.",
                code: [
                  "# crear la cola y publicar un mensaje",
                  "aws sqs create-queue --queue-name pedidos",
                  "aws sqs send-message \\",
                  "  --queue-url https://sqs.us-east-1.amazonaws.com/123456789012/pedidos \\",
                  '  --message-body \'{"pedido_id": "P-1001", "monto": 59.00}\''
                ],
                out: "MD5OfMessageBody: 8d2f… (mensaje aceptado)",
                lang: "bash"
              },
              intermediate: {
                p: "El fan-out con SNS: un evento central se publica a un topic y cada suscripción recibe su copia: notificaciones, analítica y seguimiento, cada una a su ritmo.",
                code: [
                  "aws sns create-topic --name pedidos",
                  "aws sns subscribe --topic-arn arn:aws:sns:us-east-1:123456789012:pedidos \\",
                  "  --protocol lambda \\",
                  "  --notification-endpoint arn:aws:lambda:us-east-1:123456789012:function:analista",
                  "aws sns publish --topic-arn arn:aws:sns:us-east-1:123456789012:pedidos \\",
                  '  --message \'{"evento": "pedido_pagado", "id": "P-1001"}\''
                ],
                caption: "Fan-out con SNS hacia una función",
                lang: "bash"
              },
              real: {
                p: "La tabla de eventos con EventBridge: varios servicios escuchan el mismo evento de negocio y reaccionan: registrar la venta, enviar la factura, actualizar inventario. Agregar consumidores nuevos no toca al productor.",
                ul: [
                  "EventBridge filtra y enruta por patrón del evento.",
                  "Las integraciones con Lambda, SQS y Step Functions se conectan sin código.",
                  "Los eventos se reenvían a colas para procesamiento por lotes.",
                  "La retención y la repetición hacen el sistema auditable."
                ],
                code: [
                  "events:",
                  "  cobrado:",
                  "    type: event_bridge",
                  "    config:",
                  "      pattern:",
                  "        source:",
                  "          - \"pedidos.service\"",
                  "        detail-type:",
                  "          - \"pedido.cobrado\"",
                  "    targets:",
                  "      - tipo: funcion",
                  "        id: registrar-venta",
                  "      - tipo: cola",
                  "        id: inventario"
                ],
                nota: "El evento con datos congelados es clave: el consumidor procesa con la información del momento, sin depender de consultas que ya cambiaron.",
                lang: "yaml"
              },
              expl: [
                "El desacople entre productor y consumidor da escala y resiliencia.",
                "El broker amortigua los picos: nadie muere, solo espera en cola.",
                "El fan-out multiplica el valor de cada evento sin tocar al emisor.",
                "La retención del broker permite reprocesar y auditar."
              ],
              errors: [
                "Crear acoplamientos: llamar síncronamente entre servicios que deberían hablar por cola.",
                "Encadenar eventos en un flujo frágil que nunca termina.",
                "Publicar eventos sin id: es imposible deduplicar en el consumidor."
              ],
              tips: [
                "Dale a cada evento un id y una versión de esquema.",
                "Usa colas para trabajo con backpressure y topics para notificaciones.",
                "Haz los consumidores idempotentes: repetición sin efectos dobles.",
                "Visualiza el flujo con trazas distribuidas."
              ],
              exercise: [
                "Monta SQS con una función que procese 100 mensajes y verifica el paralelismo.",
                "Publica un evento en SNS hacia dos consumidores y observa su copia independiente."
              ],
              summary: [
                "El event-driven desacopla mediante colas y topics.",
                "El productor publica sin conocer al consumidor.",
                "El fan-out reparte un evento a múltiples servicios.",
                "Idempotencia y eventos versionados hacen estable el sistema."
              ],
              lang: "bash",
              exampleFile: "events",
              desc: "Arquitecturas event-driven: colas, topics, fan-out y patrones asíncronos."
            }
          },
          {
            id: "infraestructura-como-codigo-cloud",
            title: "Infraestructura como código en la nube",
            duration: "13 min",
            level: "avanzado",
            category: "iac",
            cardText: "Describe tu nube en archivos versionados: plan, apply y módulos con Terraform.",
            desc: "Infraestructura como código en la nube con Terraform: plan, apply y módulos.",
            body: {
              intro: [
                "Infraestructura como código (IaC) es describir toda tu nube en archivos versionados: VPCs, instancias, bases, funciones y políticas, en lugar de clics en la consola.",
                "Terraform, CloudFormation y los templates de Azure hacen que tu infraestructura se revise, se replique y se despliegue como si fuera código de aplicación."
              ],
              def: {
                par: "IaC declara el estado deseado de tu infraestructura en configuración. La herramienta compara ese estado con el real y aplica solo la diferencia de forma reproducible.",
                porQue: "Porque la infraestructura por clics no se puede auditar, reproducir ni versionar. Con IaC, un entorno nuevo se levanta con un plan y un apply, y muere el funciona en mi consola.",
                cuando: "Adóptala desde el primer recurso: los proyectos sin IaC, al crecer, se convierten en infraestructura invisible donde nadie sabe qué existe."
              },
              concepts: [
                "Estado deseado: la declaración de lo que debe existir.",
                "Plan/Apply: el ciclo de revisar el cambio antes de aplicarlo.",
                "Declarativo: no dices cómo, dices qué.",
                "Módulo: pieza reutilizable de infraestructura.",
                "State file: el registro que Terraform compara contra la realidad."
              ],
              basic: {
                p: "El ciclo de Terraform: init prepara el proveedor, plan muestra lo que cambiará sin tocar nada, y apply ejecuta exactamente lo planeado.",
                code: [
                  "terraform init",
                  "terraform plan",
                  "terraform apply --auto-approve"
                ],
                out: "Plan: 3 añadir, 0 cambiar, 0 destruir",
                lang: "bash"
              },
              intermediate: {
                p: "Un módulo de infraestructura con variables: la región, el nombre y el entorno se parametrizan y el mismo archivo sirve para dev y producción.",
                code: [
                  'variable "environment" {}',
                  'variable "region" { default = "us-east-1" }',
                  'resource "aws_s3_bucket" "datos" {',
                  '  bucket = "app-${var.environment}-datos"',
                  "}",
                  'resource "aws_db_instance" "base" {',
                  '  engine = "postgres"',
                  '  multi_az = var.environment == "prod" ? true : false',
                  "}"
                ],
                caption: "Módulo Terraform parametrizado por entorno",
                lang: "yaml"
              },
              real: {
                p: "El flujo profesional: pull request con el cambio de infraestructura, revisión automática con formato y lint, plan que todos comentan y apply en el pipeline solo desde main.",
                ul: [
                  "El plan se genera en CI y se publica en la revisión.",
                  "El apply solo dispara desde la rama principal.",
                  "Los módulos separan red, datos y app.",
                  "El state se guarda remoto para trabajar en equipo."
                ],
                code: [
                  "terraform {",
                  '  backend "s3" {',
                  '    bucket = "mi-tfstate-backend"',
                  '    key    = "prod/network"',
                  '    region = "us-east-1"',
                  "  }",
                  "}",
                  "provider \"aws\" {}"
                ],
                nota: "El state remoto con lock evita que dos personas apliquen cambios a la vez; el local se pierde y genera caos.",
                lang: "yaml"
              },
              expl: [
                "El plan hace seguro el cambio: siempre ves qué se añade, cambia o destruye.",
                "El state remoto habilita la colaboración y la auditoría.",
                "Los módulos reducen la repetición entre entornos y proyectos.",
                "Los checks de CI convierten la revisión de infraestructura en rutina."
              ],
              errors: [
                "Aplicar cambios de infraestructura sin plan ni revisión.",
                "Guardar el state local: se pierde la referencia de lo que existe.",
                "Mezclar recursos creados a mano con IaC: Terraform querrá destruirlos."
              ],
              tips: [
                "Empieza declarando lo que ya tienes, no desde cero.",
                "Usa workspaces o carpetas por entorno con variables separadas.",
                "Bloquea el apply en la revisión con un gate.",
                "Destruye de forma controlada en los entornos de prueba."
              ],
              exercise: [
                "Declara un bucket y una base en Terraform, genera el plan y comenta los cambios.",
                "Parametriza el módulo para que el mismo archivo cree dev y producción."
              ],
              summary: [
                "IaC describe la infraestructura en archivos versionables.",
                "El plan y el apply hacen el cambio controlado y auditable.",
                "El state remoto habilita el trabajo en equipo.",
                "Los módulos y la revisión con CI profesionalizan el flujo."
              ],
              lang: "bash",
              exampleFile: "main",
              desc: "Infraestructura como código en la nube con Terraform: plan, apply y módulos."
            }
          },
          {
            id: "diseno-nube-nativa",
            title: "Diseño cloud-native",
            duration: "12 min",
            level: "avanzado",
            category: "arquitectura",
            cardText: "Stateless, gestionado y desplegado en continuo: cómo piensa el backend moderno.",
            desc: "Diseño cloud-native: principios, patrones y decisiones de arquitectura moderna.",
            body: {
              intro: [
                "El diseño cloud-native aprovecha la nube como si fuera su plataforma de nacimiento: contenedores, serverless, datos gestionados y automatización total, en lugar de replicar el datacenter antiguo.",
                "No es una colección de servicios: es una forma de pensar donde el escalado, la resiliencia y la operación se deciden antes de escribir la primera función."
              ],
              def: {
                par: "Una aplicación cloud-native es stateless, empaquetada en contenedores o funciones, configurada por variables, observada por defecto y desplegada con pipelines. Usa servicios gestionados para datos, colas y caché en lugar de instalarlos en máquinas.",
                porQue: "Porque el escalado horizontal y la resiliencia salen del modelo: cada instancia es efímera y la plataforma sustituye las fallas, mientras el costo se ajusta al uso real.",
                cuando: "Sigue el diseño cloud-native desde el inicio en la nube: stateless primero, gestionado cuando exista y VM solo cuando no haya alternativa."
              },
              concepts: [
                "Stateless: la lógica no guarda estado; el estado vive en servicios externos.",
                "Escalado horizontal: más instancias cuando sube la carga.",
                "Twelve-factor: los principios de configuración, logs y entorno.",
                "Despliegue continuo: cada cambio a main llega a producción automatizado.",
                "Managed services: el proveedor opera lo que no es tu core."
              ],
              basic: {
                p: "El esqueleto de una app cloud-native: código sin estado, configuración por variables y arranque limpio en cualquier entorno.",
                code: [
                  "export const createApp = () => {",
                  "  const app = express();",
                  "  app.use(express.json());",
                  "  app.get('/health', (req, res) => res.json({ ok: true }));",
                  "  return app;",
                  "};",
                  "if (require.main === module) {",
                  "  const app = createApp();",
                  "  app.listen(process.env.PORT || 3000);",
                  "}"
                ],
                out: "App sin estado lista para empaquetar en contenedor",
                lang: "js"
              },
              intermediate: {
                p: "El despliegue continuo se declara con un pipeline: sobre cada push a main, se construye la imagen y se despliega automáticamente en Cloud Run o el equivalente de tu proveedor.",
                code: [
                  "name: deploy",
                  "on:",
                  "  push:",
                  "    branches: [main]",
                  "jobs:",
                  "  deploy:",
                  "    runs-on: ubuntu-latest",
                  "    steps:",
                  "      - uses: actions/checkout@v4",
                  "      - run: docker build -t mi-api .",
                  "      - run: docker push gcr.io/mi-proyecto/mi-api",
                  "      - run: gcloud run deploy mi-api --image gcr.io/mi-proyecto/mi-api"
                ],
                caption: "Pipeline de despliegue continuo",
                lang: "yaml"
              },
              real: {
                p: "El patrón final: API en contenedor o serverless, datos gestionados, cola de trabajo, caché y observabilidad. Cada pieza escala por su lado y ninguna guarda estado.",
                ul: [
                  "La API es stateless y escala por duplicidad.",
                  "Los datos viven en servicios gestionados.",
                  "Los procesos pesados pasan por colas con workers.",
                  "La observabilidad está presente desde el primer día."
                ],
                code: [
                  "graph TD",
                  "  Usuario --> CDN",
                  "  CDN --> API",
                  "  API --> BaseDeDatos",
                  "  API --> Cola",
                  "  Cola --> Worker",
                  "  Worker --> BaseDeDatos"
                ],
                nota: "Cloud-native no es un proveedor: es un conjunto de decisiones que aplican igual en AWS, GCP o Azure.",
                lang: "text"
              },
              expl: [
                "Cada réplica idéntica hace el escalado y el fallback automático.",
                "Los managed services reducen tu operación a configuración.",
                "La observabilidad por defecto detecta problemas antes que los usuarios.",
                "El despliegue continuo y el stateless hacen reversibles los cambios."
              ],
              errors: [
                "Portar una app con estado en disco a contenedores y escalarla.",
                "Instalar PostgreSQL y Redis en una VM cuando hay alternativas gestionadas.",
                "Guardar configuración en el código y no en variables de entorno."
              ],
              tips: [
                "Empieza con serverless o contenedor y deja las VMs para la excepción.",
                "Sigue los 12 factores: puerto, configuración, logs y proceso sin estado.",
                "Haz los despliegues reversibles desde el inicio.",
                "Mide cold start, latencia y costo antes de rediseñar."
              ],
              exercise: [
                "Reescribe un servicio tuyo para que sea stateless y define dónde viviría cada estado.",
                "Dibuja el diagrama completo de un backend cloud-native con sus servicios gestionados."
              ],
              summary: [
                "Cloud-native usa la nube como plataforma, no como datacenter.",
                "Stateless + escalado horizontal = resiliencia automática.",
                "Los managed services y la observabilidad reducen la operación.",
                "Cada decisión de diseño se toma antes de la primera línea."
              ],
              lang: "yaml",
              exampleFile: "deploy",
              desc: "Diseño cloud-native: principios, patrones y decisiones de arquitectura moderna."
            }
          }
        ]
      }
    ]
  }
];