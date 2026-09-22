/* ============================================================
   Backend Academy — history.js
   Registro de lecciones visitadas (LocalStorage) con límite,
   y render de la página /historial/.
   ============================================================ */

const AppHistory = (() => {
  const MAX = 200;

  function add(entry) {
    const list = AppStorage.getJSON("history", []);
    const now = new Date().toISOString();
    list.unshift(Object.assign({ date: now }, entry));
    AppStorage.setJSON(
      "history",
      list
        .filter((x, i, arr) => arr.findIndex((y) => y.path === x.path) === i)
        .slice(0, MAX)
    );
  }

  function all() {
    return AppStorage.getJSON("history", []);
  }

  function clear() {
    AppStorage.setJSON("history", []);
  }

  function render() {
    const root = document.querySelector("[data-history-view]");
    if (!root) return;
    const items = all();
    if (!items.length) {
      root.innerHTML = AppHelpers.emptyState
        ? AppHelpers.emptyState("historial", "Aún no has visitado ninguna lección.")
        : "<p class='muted'>Aún no visitas ninguna lección.</p>";
      return;
    }
    root.innerHTML = items
      .map(
        (h) => `<article class="card card--compact">
          <div class="row space-between">
            <div class="lesson-meta">
              ${h.courseTitle ? `<span class="badge">${AppHelpers.escapeHtml(h.courseTitle)}</span>` : ""}
              ${h.module ? `<span class="badge badge--info">${AppHelpers.escapeHtml(h.module)}</span>` : ""}
            </div>
            <span class="card__meta" title="${AppHelpers.escapeHtml(h.date)}">${AppHelpers.timeAgo(h.date)}</span>
          </div>
          <h3 class="card__title">${AppHelpers.escapeHtml(h.title)}</h3>
          <div class="card__footer">
            <a class="btn btn--sm btn--ghost" href="${AppHelpers.asset(h.path)}">Reabrir <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </article>`
      )
      .join("");
  }

  function init() {
    const clearBtn = document.querySelector("[data-history-clear]");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        clear();
        render();
      });
    }
    render();
  }

  return { init, add, all, clear, render };
})();
