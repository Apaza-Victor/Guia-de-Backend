/* ============================================================
   Backend Academy - search.js
   Buscador global: construye el indice desde data.js, tokeniza
   la consulta y puntua los resultados por relevancia.
   ============================================================ */

const AppSearch = (() => {
  const MIN_LEN = 2;
  const TOP = 30;

  function courses() {
    return window.COURSES || window.APP_COURSES || [];
  }

  function cheatsheets() {
    return window.CHEATSHEETS || window.cheatsheets || [];
  }

  function glossary() {
    return window.GLOSSARY || window.glossary || [];
  }

  function esc(value) {
    if (AppHelpers && AppHelpers.escapeHtml) return AppHelpers.escapeHtml(value);
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function asset(name) {
    if (AppHelpers && AppHelpers.asset) return AppHelpers.asset(name);
    return "assets/" + name;
  }

  function debounce(fn, wait) {
    if (AppHelpers && AppHelpers.debounce) return AppHelpers.debounce(fn, wait);
    let timer = null;
    return function () {
      const self = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () { fn.apply(self, args); }, wait);
    };
  }

  function normalize(value) {
    return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u030c]/g, "");
  }

  function tokenize(query) {
    return normalize(query).split(/[^a-z0-9]+/).filter(function (t) { return t.length >= MIN_LEN; });
  }

  function buildIndex() {
    const items = [];
    courses().forEach(function (c) {
      items.push({
        kind: "curso",
        title: c.title,
        path: c.path,
        tags: (c.tags || []).concat(c.techs || [], c.category || []),
        emoji: c.icon || "book",
        description: c.description || "",
        course: c.title
      });
      (c.modules || []).forEach(function (m) {
        (m.lessons || []).forEach(function (l) {
          items.push({
            kind: "leccion",
            title: l.title,
            path: l.path || m.path,
            tags: (l.tags || []).concat(c.title, c.id, m.title),
            emoji: c.icon || "book-open",
            description: l.description || c.description || "",
            course: c.title
          });
        });
      });
    });
    cheatsheets().forEach(function (s) {
      items.push({
        kind: "cheatsheet",
        title: s.title,
        path: s.path,
        tags: (s.tags || []).concat(s.category || []),
        emoji: s.icon || "list-check",
        description: s.description || "",
        course: ""
      });
    });
    glossary().forEach(function (g) {
      items.push({
        kind: "glosario",
        title: g.term,
        path: g.slug ? "glosario/index.html?t=" + encodeURIComponent(g.slug) : "glosario/index.html",
        tags: [g.category || "glosario"],
        emoji: "book",
        description: g.definition || g.description || "",
        course: ""
      });
    });
    return items;
  }

  function haystack(item) {
    return normalize([item.title, item.description, item.course, (item.tags || []).join(" "), item.kind].filter(Boolean).join(" "));
  }

  function score(item, toks) {
    if (!toks.length) return 0;
    const hay = haystack(item);
    const title = normalize(item.title || "");
    let total = 0;
    toks.forEach(function (t) {
      if (hay.indexOf(t) === -1) return;
      total += t.length;
      if (title.indexOf(t) !== -1) total += t.length * 2;
    });
    return hay.indexOf(toks[0]) === -1 ? 0 : total;
  }

  function weight(kind) {
    return kind === "curso" ? 100 : kind === "leccion" ? 60 : kind === "cheatsheet" ? 30 : 20;
  }

  function search(query) {
    const toks = tokenize(String(query || "").trim());
    if (toks.length < 1) return [];
    return buildIndex()
      .map(function (it) { return { s: score(it, toks) * weight(it.kind), it: it }; })
      .filter(function (x) { return x.s > 0; })
      .sort(function (a, b) { return b.s - a.s; })
      .slice(0, TOP)
      .map(function (x) { return x.it; });
  }

  function card(item) {
    return (
      '<a class="card card--link" href="' + asset(item.path) + '">' +
      '<div class="card__top">' +
      '<span class="card__icon" aria-hidden="true">' + esc(item.emoji) + '</span>' +
      '<span class="tag">' + esc(item.kind) + '</span>' +
      '</div>' +
      '<h3 class="card__title">' + esc(item.title) + '</h3>' +
      (item.course ? '<p class="card__text">' + esc(item.course) + '</p>' : "") +
      (item.description ? '<p class="card__text">' + esc(item.description).slice(0, 140) + '</p>' : "") +
      '</a>'
    );
  }

  function render(container, q) {
    if (!container) return;
    const results = search(q);
    if (!results.length) {
      container.innerHTML =
        '<div class="empty-state">' +
        '<div class="empty-state__icon" aria-hidden="true">search</div>' +
        '<p class="empty-state__title">Sin resultados</p>' +
        '<p class="empty-state__text">Prueba con terminos mas cortos, genericos o en ingles: api, sql, auth, docker.</p>' +
        '</div>';
      return;
    }
    container.innerHTML =
      '<p class="search-summary"><strong>' + results.length + '</strong> resultado' +
      (results.length === 1 ? "" : "s") + ' para &laquo;' + esc(q) + '&raquo;</p>' +
      '<div class="grid-2">' + results.map(card).join("") + '</div>';
  }

  function bind(container) {
    const input = document.querySelector("[data-search-input]");
    if (!input) return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    input.value = q;
    if (q.trim()) render(container, q);
    input.addEventListener("input", debounce(function () {
      render(container, input.value);
    }, 180));
  }

  function init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
      return;
    }
    const container = document.querySelector("[data-search-results]");
    if (container) bind(container);
  }

  return { init, search };
})();