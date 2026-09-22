/* ============================================================
   Backend Academy — favorites.js
   Marca/desmarca favoritos (LocalStorage) y sincroniza
   cualquier botón con data-fav="lessonId" en la página.
   ============================================================ */

const AppFavorites = (() => {
  function toggle(id) {
    const favs = AppStorage.getJSON("favorites", []);
    const idx = favs.indexOf(id);
    if (idx > -1) favs.splice(idx, 1);
    else favs.push(id);
    AppStorage.setJSON("favorites", favs);
    syncButtons();
    AppProgress.debouncedRender && AppProgress.debouncedRender();
    return idx === -1;
  }

  function isFavorite(id) {
    return AppStorage.getJSON("favorites", []).includes(id);
  }

  function list() {
    return AppStorage.getJSON("favorites", []);
  }

  /* Actualiza todos los botones de favorito visibles */
  function syncButtons() {
    document.querySelectorAll("[data-fav]").forEach((btn) => {
      const id = btn.getAttribute("data-fav");
      const on = isFavorite(id);
      btn.classList.toggle("is-fav", on);
      btn.setAttribute("aria-pressed", String(on));
      btn.innerHTML = on
        ? '<i class="fa-solid fa-heart" aria-hidden="true"></i><span class="sr-only">Quitar de favoritos</span>'
        : '<i class="fa-regular fa-heart" aria-hidden="true"></i><span class="sr-only">Guardar en favoritos</span>';
    });
  }

  function init() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-fav]");
      if (!btn) return;
      e.preventDefault();
      const lessonId = btn.getAttribute("data-fav");
      const was = !isFavorite(lessonId);
      const now = toggle(lessonId);
      AppHelpers.showToast && AppHelpers.showToast(
        now ? "⭐ Guardado en favoritos" : "Quitado de favoritos"
      );
    });
    syncButtons();
  }

  return { init, toggle, isFavorite, list, syncButtons };
})();
