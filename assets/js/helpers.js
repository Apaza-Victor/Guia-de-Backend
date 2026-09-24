/* ============================================================
   Backend Academy — helpers.js
   Utilidades compartidas por toda la plataforma:
   DOM, sanitización, tiempo, toasts, skeletons y plantillas.
   ============================================================ */

const AppHelpers = (() => {
  /* Resuelve una ruta relativa desde la raíz según la profundidad
     (usa data-root del body, fijado en todas las páginas) */
  function asset(name) {
    const root = (document.body && document.body.dataset.root) || "";
    return root + name;
  }

  /* Añade/quita la clase is-loading (skeleton) */
  function toggleSkeleton(el, on) {
    if (!el) return;
    if (on) el.classList.add("is-loading");
    else el.classList.remove("is-loading");
  }

  /* Quita todos los skeletons de la página (después del init) */
  function removeSkeletons() {
    document.querySelectorAll(".is-loading, .skeleton").forEach((el) => {
      el.classList.remove("is-loading");
      el.classList.remove("skeleton");
    });
  }

  /* Crear un elemento con clase(s) y contenido opcional */
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /* Escapar HTML para inyección segura en plantillas */
  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* Limitar llamadas: como mucho una cada wait ms */
  function throttle(fn, wait) {
    let last = 0;
    return function (...args) {
      const now = Date.now();
      if (now - last < wait) return;
      last = now;
      fn.apply(this, args);
    };
  }

  /* Retrasar llamadas hasta que pase wait ms desde la última */
  function debounce(fn, wait) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  /* "hace X días/horas/minutos" a partir de una fecha ISO */
  function timeAgo(iso) {
    if (!iso) return "";
    const date = new Date(iso);
    if (isNaN(date.getTime())) return "";
    const seconds = Math.max(0, Math.floor((Date.now() - date.getTime()) / 1000));
    if (seconds < 10) return "justo ahora";
    const units = [
      [31536000, "año"], [2592000, "mes"], [604800, "semana"], [86400, "día"],
      [3600, "hora"], [60, "minuto"]
    ];
    for (const [secs, label] of units) {
      const n = Math.floor(seconds / secs);
      if (n >= 1) return "hace " + n + " " + label + (n === 1 ? "" : "s");
    }
    return "hace " + seconds + " segundos";
  }

  /* Bloque HTML de estado vacío (para listas sin datos) */
  function emptyState(icon, msg) {
    return (
      '<div class="empty-state">' +
      (icon ? '<div class="empty-state__icon" aria-hidden="true">' + escapeHtml(icon) + "</div>" : "") +
      '<p class="empty-state__title">' + escapeHtml(msg || "Sin resultados") + "</p>" +
      "</div>"
    );
  }

  /* Notificación breve en pantalla */
  function showToast(msg) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove("is-visible"), 2200);
  }

  /* Inyectar header/footer dinámicos (si los datos lo requieren) */
  function injectChrome() {
    const headerEl = document.querySelector("[data-header]");
    const footerEl = document.querySelector("[data-footer]");
    if (headerEl) headerEl.innerHTML = templateEngine("header");
    if (footerEl) footerEl.innerHTML = templateEngine("footer");
    if (window.AppNav) AppNav.init();
    if (window.AppTheme) AppTheme.init();
  }

  function templateEngine(name) {
    if (name === "header") {
      return (
        '<div class="container site-header__inner">' +
        '<a class="brand" href="' + asset("index.html") + '">' +
        '<span class="brand__logo">⚙️</span>' +
        "<span>Backend Academy<small>Cursos</small></span></a>" +
        '<nav class="nav-main" aria-label="Navegación principal">' +
        '<a href="' + asset("index.html") + '">Inicio</a>' +
        '<a href="' + asset("secciones/roadmap/index.html") + '">Roadmap</a>' +
        '<a href="' + asset("secciones/aprender/index.html") + '">Aprender</a>' +
        '<a href="' + asset("secciones/practica/index.html") + '">Práctica</a>' +
        '<a href="' + asset("secciones/proyectos/index.html") + '">Proyectos</a>' +
        '<a href="' + asset("secciones/recursos/index.html") + '">Recursos</a>' +
        '<a href="' + asset("secciones/buscador/index.html") + '">Buscar</a></nav>' +
        '<div class="header-actions">' +
        '<button class="btn btn--icon btn--ghost theme-toggle" type="button" aria-label="Cambiar a tema oscuro">' +
        '<i data-mode="light" class="fa-solid fa-moon" aria-hidden="true"></i></button>' +
        "</div></div>"
      );
    }
    return "";
  }

  /* Buscar en un array de objetos por key */
  function findBy(arr, key, value) {
    return arr.find((item) => item[key] === value) || null;
  }

  /* Obtener nivel de una lección (de data.js) */
  function levelOfLesson(courseId, moduleId, lessonId) {
    if (typeof COURSES === "undefined") return null;
    const course = findBy(COURSES, "id", courseId);
    if (!course) return null;
    const mod = (course.modules || []).find((m) => m.id === moduleId);
    if (!mod) return null;
    return (mod.lessons || []).find((l) => l.id === lessonId) || null;
  }

  /* Copiar código a portapapeles con fallback */
  function copyText(textToCopy, done) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy).then(done).catch(() => legacyCopy(textToCopy, done));
    } else {
      legacyCopy(textToCopy, done);
    }
  }

  function legacyCopy(textToCopy, done) {
    const ta = document.createElement("textarea");
    ta.value = textToCopy;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
    } catch (e) { /* noop */ }
    document.body.removeChild(ta);
    done();
  }

  return {
    asset, el, findBy, levelOfLesson, copyText, toggleSkeleton,
    removeSkeletons, injectChrome, templateEngine,
    escapeHtml, throttle, debounce, timeAgo, emptyState, showToast
  };
})();

if (typeof window !== "undefined") {
  window.AppHelpers = AppHelpers;
}