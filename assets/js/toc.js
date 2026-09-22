/* ============================================================
   Backend Academy - toc.js
   Indice "En esta pagina" a partir de h2/h3/h4 con scrollspy.
   ============================================================ */

const AppToc = (() => {
  const OFFSET = 90;
  const WAIT = 120;

  function esc(value) {
    if (AppHelpers && AppHelpers.escapeHtml) return AppHelpers.escapeHtml(value);
    return String(value == null ? "" : value);
  }

  function throttle(fn, wait) {
    if (AppHelpers && AppHelpers.throttle) return AppHelpers.throttle(fn, wait);
    let last = 0;
    return function () {
      const now = Date.now();
      if (now - last < wait) return;
      last = now;
      fn.apply(this, arguments);
    };
  }

  function buildFrom(scope) {
    const root = scope || document.querySelector(".lesson-content") || document;
    return Array.prototype.map.call(root.querySelectorAll("h2[id], h3[id], h4[id]"), function (h) {
      return { id: h.id, text: h.textContent.trim(), level: h.tagName, tag: h.tagName };
    });
  }

  function linkClass(level) {
    return level === "H3" ? " toc__link--h3" : level === "H4" ? " toc__link--h4" : "";
  }

  function itemClass(level) {
    return level === "H3" ? " toc__item--child" : level === "H4" ? " toc__item--grandchild" : "";
  }

  function renderList(root, items) {
    if (!root || !items.length) return;
    root.innerHTML =
      '<ul class="toc__list">' +
      items.map(function (i) {
        return (
          '<li class="toc__item' + itemClass(i.level) + '">' +
          '<a class="toc__link' + linkClass(i.level) + '" href="#' + i.id + '" data-toc-target="' + i.id + '">' +
          esc(i.text) + '</a></li>'
        );
      }).join("") +
      '</ul>';
  }

  function scrollSpy(items) {
    if (!items.length) return;
    const links = Array.prototype.slice.call(document.querySelectorAll("[data-toc-target]"));
    const tick = throttle(function () {
      const y = window.scrollY + OFFSET;
      let active = "";
      items.forEach(function (i) {
        const el = document.getElementById(i.id);
        if (el && el.offsetTop <= y) active = i.id;
      });
      links.forEach(function (a) {
        const is = a.getAttribute("data-toc-target") === active;
        a.classList.toggle("is-active", is);
        a.parentNode.classList.toggle("toc__item--active", is);
      });
    }, WAIT);
    window.addEventListener("scroll", tick);
    tick();
  }

  function init() {
    const scope = document.querySelector(".lesson-content") || document.body;
    const items = buildFrom(scope);
    const root = document.querySelector("[data-toc]") || document.querySelector("[data-toc-list]");
    renderList(root, items);
    scrollSpy(items);
  }

  return { init, buildFrom };
})();