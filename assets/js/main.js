/* ============================================================
   Backend Academy — main.js
   Orquestador global: inyecta chrome (header/sidebar/footer),
   inicializa módulos y cierra skeletons.
   ============================================================ */

(function () {
  if (typeof window.AppStorage === "undefined") {
    console.warn("main.js: AppStorage no cargado");
  }
  if (typeof window.AppTheme === "undefined") {
    console.warn("main.js: AppTheme no cargado");
  }

  function documentReady() {
    return (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    );
  }

  function init() {
    try {
      if (window.AppTheme) AppTheme.init();
      if (window.AppNav) AppNav.init();
      if (window.AppProgress) AppProgress.init();
      if (window.AppSidebar) AppSidebar?.init();
      if (window.AppToc) AppToc?.init();
      if (window.AppCode) AppCode?.init();
      if (window.AppSearch) AppSearch?.init();
      if (window.AppFavorites) AppFavorites?.init();
      if (window.AppHistory) AppHistory?.init();
      AppHelpers.removeSkeletons && AppHelpers.removeSkeletons();
    } catch (err) {
      console.error("main.js init:", err);
    }
  }

  if (documentReady()) {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();