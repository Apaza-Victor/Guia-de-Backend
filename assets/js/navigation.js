/* ============================================================
   Backend Academy — navigation.js
   Navegación reusable a nivel de página:
   · TOC automático (En esta página) desde las h2/h3 del contenido
   · Scrollspy con resaltado
   · Breadcrumb desde <script type="application/json" data-breadcrumb>
   · Menú móvil (drawer) y cierre con Esc / overlay
   · Botón volver arriba
   ============================================================ */

const AppNav = (() => {
  function qs(sel) { return document.querySelector(sel); }
  function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }

  function cube(root) { return root ? root.getAttribute("data-theme") || "" : ""; }

  /* ================= Breadcrumb ================= */
  function buildBreadcrumb() {
    const root = qs("[data-page-head]");
    if (!root) return;
    const dataNode = qs('script[type="application/json"][data-breadcrumb]');
    let items = [];
    if (dataNode) {
      try { items = JSON.parse(dataNode.textContent || "[]"); } catch (e) { items = []; }
    }

    let crumbs = items.map((it, i) => {
      const last = i === items.length - 1;
      if (!it) return "";
      const label = AppHelpers && AppHelpers.escapeHtml ? AppHelpers.escapeHtml(it.label) : (it.label || "");
      if (last || !it.href) {
        return '<span class="crumb crumb--current" aria-current="page">' + label + "</span>";
      }
      return '<a class="crumb" href="' + (AppHelpers && AppHelpers.asset ? AppHelpers.asset(it.href) : it.href) + '">' + label + "</a>";
    });

    if (!crumbs.length) {
      crumbs = ['<a class="crumb" href="' + (AppHelpers && AppHelpers.asset ? AppHelpers.asset("index.html") : "../index.html") + '">Inicio</a>'];
    }
    const nav = document.createElement("nav");
    nav.className = "breadcrumb-line";
    nav.setAttribute("aria-label", "Ruta de navegación");
    nav.innerHTML = '<ol class="breadcrumb-line__list">' + crumbs.map((c) => "<li>" + c + "</li>").join('') + "</ol>";
    root.insertBefore(nav, root.firstChild);
  }

  /* ================= TOC ================= */
  function buildToc() {
    const holder = qs("[data-toc]");
    if (!holder) return;
    const content = qs(".lesson-content, [data-toc-target]");
    if (!content) {
      holder.remove();
      return;
    }
    const headings = qsa("h2[id], h3[id]", content);
    if (!headings.length) {
      holder.remove();
      return;
    }
    const list = document.createElement("ul");
    list.className = "toc-list";
    headings.forEach((h) => {
      const li = document.createElement("li");
      li.className = "toc-list__item" + (h.tagName === "H3" ? " toc-list__item--sub" : "");
      const a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        h.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", "#" + h.id);
      });
      li.appendChild(a);
      list.appendChild(li);
    });
    holder.appendChild(list);
    return headings;
  }

  /* ================= Scrollspy ================= */
  function scrollSpy(headings) {
    if (!headings || !headings.length) return;
    const links = qsa('.toc-list__item a[href^="#"]');
    if (!links.length) return;
    const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    const onScroll = AppHelpers && AppHelpers.throttle
      ? AppHelpers.throttle(() => tick(), 120)
      : tick;
    function tick() {
      const y = window.scrollY + 96;
      let current = "";
      headings.forEach((h) => { if (h.offsetTop <= y) current = h.id; });
      links.forEach((a) => a.parentNode.classList.remove("is-active"));
      if (current && map.has(current)) map.get(current).parentNode.classList.add("is-active");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
  }

  /* ================= Menú móvil ================= */
  function ensureMobileMenu() {
    const headerInner = qs(".site-header__inner");
    const nav = qs(".nav-main");
    if (!headerInner || !nav || qs("[data-menu-toggle]")) return;

    nav.dataset.drawer = "";
    nav.classList.add("nav-main--drawer");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "menu-toggle btn btn--icon btn--ghost";
    btn.dataset.menuToggle = "";
    btn.setAttribute("aria-label", "Abrir menú de navegación");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", "drawer");
    btn.innerHTML =
      '<span class="menu-toggle__bars" aria-hidden="true">' +
      '<span class="menu-toggle__bar"></span>' +
      '<span class="menu-toggle__bar"></span>' +
      '<span class="menu-toggle__bar"></span>' +
      "</span>";
    headerInner.insertBefore(btn, nav);

    if (!qs("[data-menu-overlay]")) {
      const overlay = document.createElement("div");
      overlay.className = "nav-overlay";
      overlay.dataset.menuOverlay = "";
      document.body.appendChild(overlay);
    }
  }

  function mobileMenu() {
    const btn = qs("[data-menu-toggle]");
    const overlay = qs("[data-menu-overlay]");
    const drawer = qs("[data-drawer]");
    if (!btn || !drawer) return;
    function open() {
      document.body.classList.add("has-open-drawer");
      drawer.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      if (overlay) overlay.classList.add("is-visible");
    }
    function close() {
      document.body.classList.remove("has-open-drawer");
      drawer.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      if (overlay) overlay.classList.remove("is-visible");
    }
    btn.addEventListener("click", () =>
      drawer.classList.contains("is-open") ? close() : open()
    );
    if (overlay) overlay.addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
    qsa("[data-drawer] a").forEach((a) => a.addEventListener("click", close));
  }

  /* ================= Volver arriba ================= */
  function backToTop() {
    const btn = qs("[data-back-to-top]");
    if (!btn) return;
    const onScroll = () =>
      btn.classList.toggle("is-visible", window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    btn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* ================= Prev / Next ================= */
  function prevNext() {
    const box = qs("[data-prev-next]");
    if (!box) return;
    const lessonId = document.documentElement.getAttribute("data-lesson-id");
    if (!lessonId || typeof window.COURSES === "undefined") return;
    const flat = [];
    window.COURSES.forEach((c) => {
      (c.modules || []).forEach((m) =>
        (m.lessons || []).forEach((l) =>
          flat.push(
            Object.assign({}, l, {
              courseId: c.id,
              coursePath: c.path,
              courseTitle: c.title
            })
          )
        )
      );
    });
    const idx = flat.findIndex((l) => l.id === lessonId);
    if (idx < 0) return;
    const prev = idx > 0 ? flat[idx - 1] : null;
    const next = idx < flat.length - 1 ? flat[idx + 1] : null;
    const base = AppHelpers && AppHelpers.asset ? AppHelpers.asset : (p) => p;
    box.innerHTML =
      (prev
        ? '<a class="pn pn--prev" href="' + base(prev.path) + '"><span class="pn__tag">← Anterior</span><span class="pn__title">' + prev.title + "</span></a>"
        : '<span class="pn pn--prev is-empty"><span class="pn__tag">← Anterior</span></span>') +
      (next
        ? '<a class="pn pn--next" href="' + base(next.path) + '"><span class="pn__tag">Siguiente →</span><span class="pn__title">' + next.title + "</span></a>"
        : '<span class="pn pn--next is-empty"><span class="pn__tag">Siguiente →</span></span>');
  }

  let inited = false;
  function init() {
    if (inited) return;
    inited = true;
    buildBreadcrumb();
    const headings = buildToc();
    scrollSpy(headings);
    ensureMobileMenu();
    mobileMenu();
    backToTop();
    prevNext();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  return { init };
})();

if (typeof window !== "undefined") {
  window.AppNav = AppNav;
}
