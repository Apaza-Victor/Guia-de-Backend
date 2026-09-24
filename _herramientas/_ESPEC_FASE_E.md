# _ESPEC_FASE_E.md — Currículum de los 11 cursos pendientes

> Documento de especificación para la FASE E: completar los 11 cursos que solo tienen landing.
> Cada curso tendrá **3 módulos** con **5 lecciones cada uno** (15 lecciones por curso, 165 en total).
> Los subagentes crean SOLO los archivos HTML. El registro en `assets/js/data.js` lo hace el agente principal después de verificar en disco (para evitar corrupción por edición paralela).

---

## 0. Plantilla canónica (leer ANTES de generar)

Copiar EXACTAMENTE la estructura del curso `arquitectura` (completo y validado).

- **Landing del curso** (YA EXISTE, no tocar): `cursos/<slug>/index.html` — `data-root="."`
- **Índice de módulo**: `cursos/<slug>/modulo-0X/index.html` — `data-root="../../../"`, `<body data-sidebar="course" data-course="<slug>" data-module="0X" data-root="../../../">`, título `<h1>Módulo X · <nombre></h1>`, CSS/JS con `../../../assets/...`
- **Lección**: `cursos/<slug>/modulo-0X/<leccion>.html` — `<html lang="es" data-theme="light" data-lesson-id="<slug>-<leccion>">`, `<body data-root="../../../">`, scripts finales en este orden EXACTO:

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
<script src="../../../assets/js/main.js"></script>
```

Estructura interna de la lección (ver `cursos/arquitectura/modulo-01/que-es-arquitectura-software.html`):
`header (breadcrumb ../../../...)` → `.lesson-hero` (h1 + objetivo + duración + dificultad) → `.lesson-content` (sections h2) → `.exercise` → `.summary` → `.related-lessons` → `.lesson-prevnext` → `footer` → scripts.

**Cada lección necesita contenido REAL** (no lorem): definiciones, ejemplos con `<pre><code>` (JS/Python/JSON), listas, al menos 2-3 bloques de código, con `data-language`. OJO: el atributo de idioma en los bloques de código es `data-language="javascript"` / `"python"` / `"json"` / `"bash"`. El botón de copiar lo agrega `code.js` automáticamente con la clase `.code-block`.

Ver este ejemplo real de bloque de código (copiar el patrón):

```html
<pre class="code-block"><code class="language-javascript" data-language="javascript">const ws = new WebSocket('ws://localhost:8080');
ws.onmessage = (msg) => console.log('Recibido:', msg.data);
</code></pre>
```

## 1. websockets — WebSockets y Tiempo Real (`cursos/websockets/`)

### modulo-01 · Fundamentos de WebSocket (webpage: conexión)
| archivo | título | tema |
|---|---|---|
| `modulo-01/index.html` | Módulo 1 · Fundamentos de WebSocket | índice del módulo |
| `modulo-01/introduccion-a-websockets.html` | Introducción a WebSockets | qué son, full-duplex, protocolo ws:// y wss:// |
| `modulo-01/http-vs-websockets.html` | HTTP vs WebSockets | diferencias, polling/long-polling vs push |
| `modulo-01/el-protocolo-websocket.html` | El protocolo WebSocket | handshake HTTP Upgrade, marcos (frames), RFC 6455 |
| `modulo-01/abrir-cerrar-conexion.html` | Abrir y cerrar la conexión | eventos open/close/error, códigos de cierre |
| `modulo-01/estado-de-la-conexion.html` | Estados de la conexión | CONNECTING/OPEN/CLOSING/CLOSED, readyState |

### modulo-02 · Implementación con Node.js
| archivo | título | tema |
|---|---|---|
| `modulo-02/index.html` | Módulo 2 · WebSockets en Node.js | índice del módulo |
| `modulo-02/servidor-websocket-node.html` | Servidor WebSocket con Node | ws / uWebSockets, server básico |
| `modulo-02/broadcast-de-mensajes.html` | Broadcast y salas | rooms, broadcast, envío a grupos |
| `modulo-02/autenticacion-por-token.html` | Autenticación por token | validar JWT en el handshake, middleware |
| `modulo-02/socket-io.html` | Socket.IO | diferencia con ws, eventos, rooms, reconnection |
| `modulo-02/cliente-websocket-web.html` | Cliente WebSocket en el navegador | API WebSocket, envoy/análisis, reconnection manual |

### modulo-03 · Escalado, seguridad y despliegue
| archivo | título | tema |
|---|---|---|
| `modulo-03/index.html` | Módulo 3 · Escalar y asegurar WebSockets | índice del módulo |
| `modulo-03/escalado-horizontal.html` | Escalado horizontal | múltiples nodos, sticky sessions, Redis pub/sub |
| `modulo-03/sticky-sessions-y-adaptadores.html` | Sticky sessions y adaptadores | session affinity, Redis adapter, socket.io-redis |
| `modulo-03/seguridad-en-websockets.html` | Seguridad | wss://, validar origen, rate limiting, sanitizar |
| `modulo-03/heartbeat-y-timeout.html` | Heartbeat y timeouts | ping/pong, reconexión, tolerancia a fallos |
| `modulo-03/despliegue-tras-proxy.html` | Despliegue tras proxy | nginx/HAProxy, timeout de proxy, WAF |

## 2. mensajeria — Sistemas de Mensajería (`cursos/mensajeria/`)

### modulo-01 · Fundamentos de mensajería asíncrona
| archivo | título | tema |
|---|---|---|
| `modulo-01/index.html` | Módulo 1 · Fundamentos de mensajería | índice |
| `modulo-01/mensajeria-asincrona.html` | Mensajería asíncrona | colas, productores/consumidores, desacople |
| `modulo-01/colas-vs-pubsub.html` | Colas vs Pub/Sub | punto a punto vs topic/brotecast |
| `modulo-01/brokers-de-mensajes.html` | Brokers de mensajes | RabbitMQ, Kafka, Redis Streams, AWS SQS/SNS |
| `modulo-01/mensajes-y-eventos.html` | Mensajes vs eventos | mensaje dirigido vs evento de dominio |
| `modulo-01/garantias-de-entrega.html` | Garantías de entrega | at-most/at-least/exactly-once, ACK, redelivery |

### modulo-02 · Colas y workers con RabbitMQ
| archivo | título | tema |
|---|---|---|
| `modulo-02/index.html` | Módulo 2 · RabbitMQ y colas | índice |
| `modulo-02/rabbitmq-conceptos.html` | RabbitMQ: conceptos | exchanges, queues, bindings, routing keys |
| `modulo-02/exchanges-y-routing.html` | Exchanges y routing | direct, fanout, topic, headers |
| `modulo-02/workers-y-prefetch.html` | Workers y prefetch | cola de trabajo, round-robin, QoS |
| `modulo-02/consumidor-resiliente.html` | Consumidor resiliente | ack/nack, dead-letter queue, retries |
| `modulo-02/colas-prioritarias.html` | Colas prioritarias y TTL | prioridad, message TTL, colas delayed |

### modulo-03 · Kafka y arquitecturas de eventos
| archivo | título | tema |
|---|---|---|
| `modulo-03/index.html` | Módulo 3 · Kafka y event streaming | índice |
| `modulo-03/kafka-conceptos.html` | Kafka: conceptos | topics, partitions, offsets, brokers |
| `modulo-03/productores-y-consumidores.html` | Productores y consumidores | producer API, consumer groups, commit |
| `modulo-03/particiones-y-claves.html` | Particiones y claves | hashing, orden por clave, partición |
| `modulo-03/consumer-groups.html` | Consumer groups y rebalanceo | balanceo de carga, rebalancing, lag |
| `modulo-03/event-sourcing-y-sagas.html` | Event sourcing y sagas | patrones distribuidos sobre eventos |

## 3. microservicios — Microservicios (`cursos/microservicios/`)

### modulo-01 · Del monolito a los microservicios
| archivo | título | tema |
|---|---|---|
| `modulo-01/index.html` | Módulo 1 · Fundamentos de microservicios | índice |
| `modulo-01/que-son-microservicios.html` | ¿Qué son los microservicios? | definición, principios, 12-factor |
| `modulo-01/monolito-vs-microservicios.html` | Monolito vs microservicios | ventajas/desventajas, cuándo migrar |
| `modulo-01/bounded-context.html` | Bounded contexts | DDD, límites de dominio, contextos acotados |
| `modulo-01/como-dividir-servicios.html` | Cómo dividir servicios | por dominio, por capacidad, granularidad |
| `modulo-01/antipatrones.html` | Antipatrones comunes | servicio distribuido pero monote de base de datos, nano servicios |

### modulo-02 · Comunicación entre servicios
| archivo | título | tema |
|---|---|---|
| `modulo-02/index.html` | Módulo 2 · Comunicación | índice |
| `modulo-02/comunicacion-sincrona.html` | Comunicación síncrona | REST, gRPC, HTTP, timeouts |
| `modulo-02/comunicacion-asincrona.html` | Comunicación asíncrona | colas, eventos, broker, sagas |
| `modulo-02/api-gateway.html` | API Gateway | patrón BFF, agregación, auth centralizada |
| `modulo-02/service-discovery.html` | Service discovery | registro de servicios, DNS, client-side |
| `modulo-02/contratos-y-versionado.html` | Contratos y versionado | versionado de API, contrato compartido, AVRO/protobuf |

### modulo-03 · Datos, resiliencia y despliegue
| archivo | título | tema |
|---|---|---|
| `modulo-03/index.html` | Módulo 3 · Datos y resiliencia | índice |
| `modulo-03/bases-de-datos-por-servicio.html` | Base de datos por servicio | fragmentación, ownership de datos, transacciones |
| `modulo-03/sagas-y-transacciones.html` | Sagas y transacciones distribuidas | coreografía, orquestación, compensación |
| `modulo-03/resiliencia-y-reintentos.html` | Resiliencia y reintentos | timeouts, retries, backoff, debes retry |
| `modulo-03/circuit-breaker.html` | Circuit breaker | estado cerrado/abierto/medio-abierto |
| `modulo-03/despliegue-de-microservicios.html` | Despliegue | Docker, Kubernetes, CI/CD, canary |

## 4. observabilidad — Observabilidad (`cursos/observabilidad/`)

### modulo-01 · Pillares de la observabilidad
| archivo | título | tema |
|---|---|---|
| `modulo-01/index.html` | Módulo 1 · Fundamentos | índice |
| `modulo-01/que-es-observabilidad.html` | ¿Qué es la observabilidad? | definición, por qué importa, vs monitoreo |
| `modulo-01/los-tres-pilares.html` | Los tres pilares | logs, métricas, traces |
| `modulo-01/logs-estructurados.html` | Logs estructurados | formato JSON, niveles, correlación, logroscope |
| `modulo-01/metricas.html` | Métricas | tipos (counter, gauge, histogram), RED/USE |
| `modulo-01/trazas-distribuidas.html` | Trazas distribuidas | spans, traceId, propagación de contexto, OpenTelemetry |

### modulo-02 · Implementación con herramientas
| archivo | título | tema |
|---|---|---|
| `modulo-02/index.html` | Módulo 2 · Herramientas | índice |
| `modulo-02/prometheus.html` | Prometheus | scraping, métricas, PromQL básico |
| `modulo-02/grafana.html` | Grafana | dashboards, datasources, alertas |
| `modulo-02/elk-stack.html` | ELK + OpenSearch | Logstash, Elasticsearch, Kibana |
| `modulo-02/opentelemetry.html` | OpenTelemetry | instrumentación, SDK, exporters, W3C context |
| `modulo-02/jaeger-y-zipkin.html` | Jaeger y Zipkin | trazado distribuido, ejemplos |

### modulo-03 · Alertas, dashboards y cultura
| archivo | título | tema |
|---|---|---|
| `modulo-03/index.html` | Módulo 3 · Alertas y dashboards | índice |
| `modulo-03/slos-y-slis.html` | SLOs, SLIs y SRE | objetivos de nivel de servicio |
| `modulo-03/alertas-inteligentes.html` | Alertas inteligentes | cardinalidad, umbrales, alert fatigue |
| `modulo-03/on-call-y-incidentes.html` | On-call y manejo de incidentes | runbook, escalamiento, postmortem |
| `modulo-03/dashboards-efectivos.html` | Dashboards efectivos | qué medir, RED/USE/USES, diseño |
| `modulo-03/profiling-de-produccion.html` | Profiling y correllación | traza-métrica-log correlación, semconv |

## 5. performance — Performance Backend (`cursos/performance/`)

### modulo-01 · Medir el rendimiento
| archivo | título | tema |
|---|---|---|
| `modulo-01/index.html` | Módulo 1 · Medir rendimiento | índice |
| `modulo-01/que-es-performance-backend.html` | ¿Qué es performance? | latencia, throughput, p50/p95/p99 |
| `modulo-01/slo-y-presupuesto-de-rendimiento.html` | SLO y presupuesto de rendimiento | objetivos, capacity planning |
| `modulo-01/test-de-carga.html` | Pruebas de carga | k6, LOCUST, JMeter, escenarios |
| `modulo-01/benchmarking-y-perfiles.html` | Benchmarking y perfiles | herramientas de perfilado, flame graphs |
| `modulo-01/cuellos-de-botella.html` | Identificar cuellos de botella | CPU, memoria, IO, red, análisis |

### modulo-02 · Optimizar el código y datos
| archivo | título | tema |
|---|---|---|
| `modulo-02/index.html` | Módulo 2 · Optimización | índice |
| `modulo-02/caching-estrategias.html` | Caching y estrategias | Redis, CDN, cache-aside/through-put, invalidation |
| `modulo-02/optimizacion-de-bases-de-datos.html` | Optimizar bases de datos | índices, query plans, N+1, pooling |
| `modulo-02/concurrencia-y-asincronia.html` | Concurrencia y asincronía | async, threading, event loop, límites |
| `modulo-02/optimizacion-de-apis.html` | Optimizar APIs | paginación, batch, compression gzip/br |
| `modulo-02/optimizacion-de-io.html` | Optimizar I/O | I/O síncrono vs async, buffering, streaming |

### modulo-03 · Escalar y despliegue
| archivo | título | tema |
|---|---|---|
| `modulo-03/index.html` | Módulo 3 · Escalabilidad y despliegue | índice |
| `modulo-03/escalado-vertical-vs-horizontal.html` | Escalado vertical vs horizontal | escala, replicación, stateless |
| `modulo-03/load-balancing.html` | Load balancing | round-robin, least-connections, sticky |
| `modulo-03/bases-de-datos-a-escala.html` | Bases de datos a escala | réplicas de lectura, sharding, particionado |
| `modulo-03/cdny-edge-caching.html` | CDN y edge caching | content delivery, cache headers |
| `modulo-03/estrategia-de-rendimiento.html` | Estrategia integral | medir→optimizar→escalar, presupuestos, revisión |

## 6. proyectos — Gestión de Proyectos Backend (`cursos/proyectos/`)

### modulo-01 · Fundamentos de gestión
| archivo | título | tema |
|---|---|---|
| `modulo-01/index.html` | Módulo 1 · Fundamentos de gestión | índice |
| `modulo-01/ciclo-de-vida-del-software.html` | Ciclo de vida del software | fases, requerimientos, diseño, desarrollo |
| `modulo-01/metodologias-agiles.html` | Metodologías ágiles | Scrum, Kanban, XP, por qué ágil en backend |
| `modulo-01/scrum-para-backend.html` | Scrum aplicado a backend | sprints, ceremonias, historias técnicas |
| `modulo-01/requisitos-y-aclaraciones.html` | Requerimientos y aclaraciones | user stories, criterios de aceptación, AC |
| `modulo-01/estimacion-y-priorizacion.html` | Estimación y priorización | story points, planning poker, MoSCoW |

### modulo-02 · Planificación y seguimiento
| archivo | título | tema |
|---|---|---|
| `modulo-02/index.html` | Módulo 2 · Planificación | índice |
| `modulo-02/planificacion-de-sprints.html` | Planificación de sprints | sprint planning, capacidad, breakdown |
| `modulo-02/gestion-de-tareas.html` | Gestión de tareas | tickets, estados, wip, kanban board |
| `modulo-02/seguimiento-y-medicion.html` | Seguimiento y medición | burndown/velocity, dailys, revisión |
| `modulo-02/gestion-de-riesgos.html` | Gestión de riesgos | riesgos técnicos, deuda técnica, mitigación |
| `modulo-02/deuda-tecnica.html` | Deuda técnica | tipos, cuándo asumir, refactoring |

### modulo-03 · Comunicación, calidad y entrega
| archivo | título | tema |
|---|---|---|
| `modulo-03/index.html` | Módulo 3 · Comunicación y entrega | índice |
| `modulo-03/comunicacion-en-el-equipo.html` | Comunicación en el equipo | sync/async, documentar decisiones (ADR) |
| `modulo-03/code-review-y-colaboracion.html` | Code review y colaboración | PR, pair programming, estándares |
| `modulo-03/calidad-y-verificacion.html` | Calidad y verificación | CI, tester en backend, cobertura |
| `modulo-03/entornos-y-despliegue.html` | Entornos y despliegue | dev/staging/prod, deploy, rollback |
| `modulo-03/lanzamiento-y-postmortem.html` | Lanzamientos y postmortem | release, feature flags, retrospectiva, postmortem |

## 7. system-design — System Design (`cursos/system-design/`)

### modulo-01 · Fundamentos de diseño de sistemas
| archivo | título | tema |
|---|---|---|
| `modulo-01/index.html` | Módulo 1 · Fundamentos | índice |
| `modulo-01/que-es-system-design.html` | ¿Qué es system design? | objetivos, arquitecturas, entrevistas |
| `modulo-01/requisitos-y-restricciones.html` | Requisitos y restricciones | funcionales/no funcionales, requerimientos |
| `modulo-01/estimaciones-de-capacidad.html` | Estimaciones de capacidad | QPS, almacenamiento, ancho de banda |
| `modulo-01/bloques-de-construccion.html` | Bloques de construcción | LB, cache, colas, CDN, DB |
| `modulo-01/modelado-de-datos.html` | Modelado de datos | entidades, relaciones, redundancia |

### modulo-02 · Patrones y arquitecturas clásicas
| archivo | título | tema |
|---|---|---|
| `modulo-02/index.html` | Módulo 2 · Patrones | índice |
| `modulo-02/arquitectura-en-capas.html` | Arquitectura en capas | presentación/negocio/datos |
| `modulo-02/monolitica-vs-distribuida.html` | Monolito vs distribuida | trade-offs, cuando elegir cada una |
| `modulo-02/cola-y-eventos-patterns.html` | Patrones de colas y eventos | priority, dead letter, fanout |
| `modulo-02/dedicla-y-caching-patterns.html` | Patrones de durabilidad y cache | read-through, write-through, CDN |
| `modulo-02/consistencia-consenso.html` | Consistencia y consenso | CAP, consistencia eventual, Raft/Paxos |

### modulo-03 · Diseñar un sistema completo
| archivo | título | tema |
|---|---|---|
| `modulo-03/index.html` | Módulo 3 · Diseño completo | índice |
| `modulo-03/diseño-de-una-url-shortener.html` | Caso: URL shortener | diseño paso a paso |
| `modulo-03/diseño-de-un-chat.html` | Caso: sistema de chat | websockets, historial, escalabilidad |
| `modulo-03/diseño-de-un-feed.html` | Caso: feed (newsfeed) | fan-out, cache, algoritmos |
| `modulo-03/diseño-de-busqueda.html` | Caso: búsqueda | índice invertido, relevancia, boost |
| `modulo-03/presentar-tu-diseño.html` | Presentar y comunicar | entrevista de system design, diagramas, trade-offs |

## 8. sistemas-distribuidos — Sistemas Distribuidos (`cursos/sistemas-distribuidos/`)

### modulo-01 · Fundamentos
| archivo | título | tema |
|---|---|---|
| `modulo-01/index.html` | Módulo 1 · Fundamentos | índice |
| `modulo-01/que-es-un-sistema-distribuido.html` | ¿Qué es un sistema distribuido? | definición, fallas parciales, no reloj global |
| `modulo-01/modelos-de-fallos.html` | Modelos de fallo | crash, omisión, temporización, bizantino |
| `modulo-01/teorema-cap.html` | Teorema CAP | consistencia, disponibilidad, partición |
| `modulo-01/consistencia-eventual.html` | Consistencia eventual | convergencia, réplicas, quorum |
| `modulo-01/bases-de-la-comunicacion.html` | Comunicación entre nodos | RPC, idempotencia, at-most/at-least |

### modulo-02 · Replicación y consistencia
| archivo | título | tema |
|---|---|---|
| `modulo-02/index.html` | Módulo 2 · Replicación | índice |
| `modulo-02/replicacion.html` | Replicación de datos | leader-follower, multi-leader, leaderless |
| `modulo-02/quorum-y-recuperacion.html` | Quorum y recuperación | W/R, read repair, hinted handoff |
| `modulo-02/relojes-vectoriales.html` | Relojes vectoriales y versiones | orden causal, versioning, DFS |
| `modulo-02/consenso-distribuido.html` | Consenso distribuido | Raft, Paxos, elección de líder |
| `modulo-02/transacciones-distribuidas.html` | Transacciones distribuidas | 2PC, sagas, compensación |

### modulo-03 · Escalabilidad y casos reales
| archivo | título | tema |
|---|---|---|
| `modulo-03/index.html` | Módulo 3 · Escalabilidad y casos | índice |
| `modulo-03/sharding-y-particionamiento.html` | Sharding y particionamiento | rango, hash, consistencia, reequilibrio |
| `modulo-03/clusteres-y-bloques.html` | Clústeres y coordinación | ZooKeeper, etcd, lock distribuido |
| `modulo-03/manejo-de-fallos-graceful.html` | Manejo de fallos graceful | failover, retry, degradación, chaos |
| `modulo-03/casos-kafka-cassandra.html` | Casos: Kafka, Cassandra, Redis cluster | cómo resuelven replicación/consistencia |
| `modulo-03/diseñar-un-sistema-distribuido.html` | Diseñar un sistema distribuido | checklist, decisiones, evaluación |

## 9. backend-ia — Backend para IA (`cursos/backend-ia/`)

### modulo-01 · Fundamentos de IA aplicada al backend
| archivo | título | tema |
|---|---|---|
| `modulo-01/index.html` | Módulo 1 · Fundamentos de IA | índice |
| `modulo-01/que-es-inteligencia-artificial.html` | ¿Qué es la IA en el backend? | ML/DL/LLM, rol del backend |
| `modulo-01/lenguaje-natural-y-llms.html` | Lenguaje natural y LLMs | tokens, embeddings, generación |
| `modulo-01/apis-de-ia.html` | APIs de IA | OpenAI, Claude, Gemini, llamadas |
| `modulo-01/prompts-y-completions.html` | Prompts y completions | system/user, temperatura, tokens |
| `modulo-01/embeddings-y-busqueda-semantica.html` | Embeddings y búsqueda semántica | vectores, similitud coseno, RAG |

### modulo-02 · Construir features con IA
| archivo | título | tema |
|---|---|---|
| `modulo-02/index.html` | Módulo 2 · Features con IA | índice |
| `modulo-02/llm-integration-en-servicio.html` | Integrar LLMs en un servicio | capa de cliente, retries, streaming |
| `modulo-02/rag-basico.html` | RAG básico | chunking, vector DB, recuperación |
| `modulo-02/finetuning-cuando-y-como.html` | Fine-tuning: cuándo y cómo | vs RAG, dataset, evaluación |
| `modulo-02/streaming-de-respuestas.html` | Streaming de respuestas | SSE, tokens en streaming para UX |
| `modulo-02/agentes-y-tools.html` | Agentes y herramientas | function calling, tool loop, orquestación |

### modulo-03 · Costos, seguridad y producción
| archivo | título | tema |
|---|---|---|
| `modulo-03/index.html` | Módulo 3 · Producción de IA | índice |
| `modulo-03/gestion-de-costos.html` | Gestión de costos | tokens, caching, rate limits, presupuesto |
| `modulo-03/seguridad-y-guardrails.html` | Seguridad y guardrails | prompt injection, PII, moderación |
| `modulo-03/evaluacion-y-monitoreo.html` | Evaluación y monitoreo | métricas, eval sets, observabilidad LLM |
| `modulo-03/versionado-de-modelos.html` | Versionado de modelos | model registry, A/B, canary, rollback |
| `modulo-03/arquitecturas-de-ia-en-backend.html` | Arquitecturas de IA en backend | chatbot, asistente, pipeline, despliegue |

## 10. graphql — GraphQL (`cursos/graphql/`)

### modulo-01 · Fundamentos de GraphQL
| archivo | título | tema |
|---|---|---|
| `modulo-01/index.html` | Módulo 1 · Fundamentos | índice |
| `modulo-01/que-es-graphql.html` | ¿Qué es GraphQL? | query language, beneficio, comparación REST |
| `modulo-01/types-y-schema.html` | Tipos y Schema | tipos escalares, tipos objeto, SDL |
| `modulo-01/queries-y-mutations.html` | Queries y Mutations | consulta, argumentos, aliases, mutaciones |
| `modulo-01/resolvers.html` | Resolvers | campo→función, context, parent |
| `modulo-01/introspeccion-y-tools.html` | Introspección y herramientas | playground, GraphiQL, self-documenting |

### modulo-02 · Implementación con Node.js
| archivo | título | tema |
|---|---|---|
| `modulo-02/index.html` | Módulo 2 · Implementación | índice |
| `modulo-02/apollo-server-basico.html` | Apollo Server básico | esquema, resolvers, servidor |
| `modulo-02/servidor-express-graphql.html` | Express + GraphQL | middleware, context, integrar DB |
| `modulo-02/argumentos-y-variables.html` | Argumentos y variables | operaciones, variables, validación |
| `modulo-02/errores-y-estados.html` | Errores y validación | caminos de error, extensiones, instalación |
| `modulo-02/mutations-validaciones.html` | Mutations y validación | input types, validar, transacciones |

### modulo-03 · Avanzado y producción
| archivo | título | tema |
|---|---|---|
| `modulo-03/index.html` | Módulo 3 · Avanzado | índice |
| `modulo-03/subscriptions.html` | Subscriptions | WebSocket, eventos en tiempo real |
| `modulo-03/fragmentos-y-uniones.html` | Fragmentos, uniones e interfaces | reutilización, polimorfismo |
| `modulo-03/dataloader-y-n-1.html` | DataLoader y N+1 | batching, caching por request |
| `modulo-03/seguridad-y-limitacion.html` | Seguridad y limitación | depth, aliases, complejidad, auth |
| `modulo-03/federation-y-gateway.html` | Federation y gateway | supergraph, subgraphs, gateways |

## 11. integraciones — Integraciones y Servicios Externos (`cursos/integraciones/`)

### modulo-01 · Fundamentos de integración
| archivo | título | tema |
|---|---|---|
| `modulo-01/index.html` | Módulo 1 · Fundamentos | índice |
| `modulo-01/que-son-las-integraciones.html` | ¿Qué son las integraciones? | definición, tipos, valor del negocio |
| `modulo-01/patrones-de-integracion.html` | Patrones de integración | EIP, adapter, mapper, orchestration |
| `modulo-01/webhooks.html` | Webhooks | qué son, firma, reintentos, vs polling |
| `modulo-01/sdk-y-clientes.html` | SDKs y clientes HTTP | SDK oficial, clientes, wrapping |
| `modulo-01/gestion-de-apis-externas.html` | Gestión de APIs externas | rate limits, quotas, contratos |

### modulo-02 · Integraciones comunes
| archivo | título | tema |
|---|---|---|
| `modulo-02/index.html` | Módulo 2 · Integraciones prácticas | índice |
| `modulo-02/pasarelas-de-pago.html` | Pasarelas de pago | Stripe/PayPal, sesión de pago, webhook |
| `modulo-02/email-y-notificaciones.html` | Email y notificaciones | SMTP/API, SendGrid, templates |
| `modulo-02/storage-y-crunch.html` | Almacenamiento en la nube | AWS S3, signed URLs, CDN |
| `modulo-02/social-login-y-oauth.html` | Social login y OAuth | OAuth2/OIDC, flujo, refresh |
| `modulo-02/mapa-y-geolocalizacion.html` | Mapas y geolocalización | Google Maps API, geocoding |

### modulo-03 · Robusteza y producción
| archivo | título | tema |
|---|---|---|
| `modulo-03/index.html` | Módulo 3 · Robustez | índice |
| `modulo-03/manejo-de-errores-reintentos.html` | Errores y reintentos | codigos HTTP, retry, jitter, idempotencia |
| `modulo-03/colas-para-tareas-lentas.html` | Colas para tareas lentes | async jobs, workers, estado |
| `modulo-03/env-vars-y-secrets.html` | Configuración y secretos | env vars, secret manager, .env |
| `modulo-03/pruebas-de-integracion.html` | Pruebas de integración | mocks, sandbox, testcontainers |
| `modulo-03/monitoreo-de-integraciones.html` | Monitoreo y observabilidad de integraciones | logs, métricas, alertas, SLA |

---

## Reglas transversales
1. Contenido 100% en español, real y útil; sin lorem ipsum ni placeholders `{{...}}`.
2. Mínimo 2-3 bloques de código con `data-language` por lección.
3. `data-root="../../../"` en lecciones y módulos; `data-root="."` en la landing (que ya existe, NO tocar).
4. `data-sidebar="course" data-course="<slug>" data-module="0X"` en módulo; `data-lesson-id="<slug>-<archivo-sin-.html>"` en lecciones.
5. Rutas al CSS/JS con `../../../assets/...`; enlaces internos entre lecciones del módulo con el nombre de archivo relativo.
6. `lesson-prevnext`: "Anterior" → lección previa (o `index.html` del módulo), "Siguiente" → siguiente lección (o `../modulo-0X/index.html`/`../index.html` cierre).
7. Footer con nav "Curso actual" listando los 3 módulos (`../modulo-0X/index.html` a nivel módulo; `../../../assets/...` a nivel lección).
8. NO editar `assets/js/data.js`. El agente principal registra módulos/lecciones tras validar la existencia de archivos.
