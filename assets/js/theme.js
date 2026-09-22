/* ============================================================
   Backend Academy — theme.js
   Modo claro / oscuro + prefers-color-scheme + LocalStorage.
   ============================================================ */

const AppTheme = (() => {
  const KEY = "theme";

  function current() {
    return AppStorage.get(KEY, "auto");
  }

  function resolved() {
    const saved = current();
    if (saved === "light" || saved === "dark") return saved;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function apply() {
    const value = resolved();
    document.documentElement.setAttribute("data-theme", value);
    document.documentElement.setAttribute(
      "color-scheme",
      value
    );
    const cb = document.querySelector(".theme-toggle");
    if (cb) {
      const icon = cb.querySelector("[data-mode]");
      if (icon) {
        cb.innerHTML = value === "dark"
          ? '<i data-mode="dark" class="fa-solid fa-sun" aria-hidden="true"></i>'
          : '<i data-mode="light" class="fa-solid fa-moon" aria-hidden="true"></i>';
      }
      cb.setAttribute("aria-label", value === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    }
  }

  function setPreference(value) {
    AppStorage.set(KEY, value); // "light" | "dark" | "auto"
    apply();
    // emite evento para que la página reaccione (gráficos, etc.)
    if (typeof window.CustomEvent === "function") {
      window.dispatchEvent(new CustomEvent("themechange", { detail: { value: resolved() } }));
    }
  }

  function toggle() {
    setPreference(resolved() === "dark" ? "light" : "dark");
  }

  function init() {
    apply();
    const cb = document.querySelector(".theme-toggle");
    if (cb) {
      cb.addEventListener("click", (e) => {
        e.preventDefault();
        toggle();
      });
    }
    if (window.matchMedia) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => {
        if (current() === "auto") apply();
      };
      if (typeof mq.addEventListener === "function") mq.addEventListener("change", handler);
    }
  }

  return {
    init, apply, toggle, current, setPreference, resolved
  };
})();

if (typeof window !== "undefined") {
  window.AppTheme = AppTheme;
}