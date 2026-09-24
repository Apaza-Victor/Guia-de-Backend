/* ============================================================
   Backend Academy — sidebar.js
   Sidebar de curso: genera la navegación de módulos y lecciones
   a partir de data.js. Colapsable, responsive, marca completados
   y resalta la lección activa.
   ============================================================ */

const AppSidebar = (() => {
  function courseById(courseId) {
    return (window.APP_COURSES || window.COURSES || []).find((c) => c.id === courseId);
  }

  /* Genera el sidebar completo para un curso */
  function renderCourseSidebar(courseId, currentLessonId) {
    const root = document.querySelector('[data-sidebar="course"]');
    if (!root) return;
    const course = courseById(courseId);
    if (!course) return;

    root.innerHTML = "";

    /* Cabecera: resumen del curso + progreso */
    const header = document.createElement("div");
    header.className = "sidebar__head";
    header.innerHTML = `
      <div class="sidebar__head-top">
        <span class="sidebar__head-icon">${course.icon || "📘"}</span>
        <div>
          <p class="sidebar__eyebrow">CURSO</p>
          <h2 class="sidebar__head-title">${AppHelpers.escapeHtml(course.title)}</h2>
        </div>
      </div>
      <div class="progress" data-progress="${course.id}">
        <div class="progress__bar"><div class="progress__fill" style="width:0%"></div></div>
        <span class="progress__label">0%</span>
      </div>`;
    root.appendChild(header);

    const nav = document.createElement("nav");
    nav.className = "sidebar__nav";
    nav.setAttribute("aria-label", "Módulos y lecciones del curso");

    (course.modules || []).forEach((mod, mi) => {
      const section = document.createElement("section");
      section.className = "sidebar__group";

      const mt = mod.title || ("Módulo " + (mi + 1));
      const less = mod.lessons || [];
      const done = less.filter((l) => AppProgress.isLessonCompleted(l.id)).length;

      const btn = document.createElement("button");
      btn.className = "sidebar__group-btn" + (mi === 0 ? " is-open" : "");
      btn.type = "button";
      btn.setAttribute("aria-expanded", mi === 0 ? "true" : "false");
      btn.innerHTML = `
        <span>${AppHelpers.escapeHtml(mt)}</span>
        <span class="sidebar__group-meta">${done}/${less.length}</span>
        <i class="fa-solid fa-chevron-down sidebar__group-chev" aria-hidden="true"></i>`;
      btn.addEventListener("click", () => {
        const open = btn.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      });

      const list = document.createElement("ul");
      list.className = "sidebar__links";
      list.hidden = mi !== 0;

      less.forEach((l) => {
        if (!l || !l.id) return;
        const li = document.createElement("li");
        const isActive = l.id === currentLessonId;
        const isDone = AppProgress.isLessonCompleted(l.id);
        li.innerHTML = `
          <a class="sidebar__link${isActive ? " is-active" : ""}${isDone ? " is-done" : ""}"
             data-lesson-id="${l.id}" href="${AppHelpers.escapeHtml(l.path)}">
            <span class="sidebar__check" aria-hidden="true">${isDone ? "✓" : ""}</span>
            ${AppHelpers.escapeHtml(l.title)}
            <span class="sidebar__dur">${l.duration || ""}</span>
          </a>`;
        list.appendChild(li);
      });

      section.appendChild(btn);
      section.appendChild(list);
      nav.appendChild(section);
    });

    root.appendChild(nav);
    AppProgress.renderSidebarChecks && AppProgress.renderSidebarChecks();
  }

  /* Renderiza el sidebar de la sección "Aprender" (todas las categorías) */
  function renderLearnSidebar(activeCategory) {
    const root = document.querySelector('[data-sidebar="learn"]');
    if (!root) return;
    const cats = window.APP_CATEGORIES || {};
    root.innerHTML = "";
    const h = document.createElement("p");
    h.className = "sidebar__eyebrow";
    h.textContent = "APRENDER";
    root.appendChild(h);

    const nav = document.createElement("nav");
    nav.className = "sidebar__nav";
    nav.setAttribute("aria-label", "Categorías de aprendizaje");

    Object.keys(cats).forEach((key) => {
      const cat = cats[key];
      const a = document.createElement("a");
      a.className = "sidebar__link " + (activeCategory === key ? "is-active" : "");
      a.href = AppHelpers.asset("secciones/aprender/index.html?cat=" + key);
      a.innerHTML = `<span>${cat.emoji}</span> ${cat.label}`;
      nav.appendChild(a);
    });
    root.appendChild(nav);
  }

  function init() {
    const courseSidebar = document.querySelector('[data-sidebar="course"]');
    if (courseSidebar) {
      const courseId = courseSidebar.getAttribute("data-course");
      const current = courseSidebar.getAttribute("data-current");
      renderCourseSidebar(courseId, current);
      return;
    }
    const learnSidebar = document.querySelector('[data-sidebar="learn"]');
    if (learnSidebar) {
      renderLearnSidebar(learnSidebar.getAttribute("data-active"));
    }
  }

  return { init, renderCourseSidebar, renderLearnSidebar };
})();

if (typeof window !== "undefined") {
  window.AppSidebar = AppSidebar;
}