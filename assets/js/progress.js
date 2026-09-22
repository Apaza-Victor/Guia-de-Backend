/* ============================================================
   Backend Academy — progress.js
   Sistema de progreso: completar lecciones, progreso por
   módulo/curso/global, y persistencia vía LocalStorage.
   ============================================================ */

const AppProgress = (() => {
  function completedSet() {
    const c = AppStorage.getJSON("completedLessons", []);
    return new Set(Array.isArray(c) ? c : []);
  }

  function saveSet(set) {
    AppStorage.setJSON("completedLessons", Array.from(set));
  }

  function isLessonCompleted(lessonId) {
    return completedSet().has(lessonId);
  }

  function toggleLesson(lessonId) {
    const set = completedSet();
    if (set.has(lessonId)) set.delete(lessonId);
    else set.add(lessonId);
    saveSet(set);
    AppStorage.publish("progress.change");
    return set.has(lessonId);
  }

  function completeLesson(lessonId, lesson) {
    const completed = toggleLesson(lessonId);
    completeSync(lessonId, lesson);
    return completed;
  }

  function completeSync(lessonId, lesson) {
    if (!lesson || !completed.some((l) => l.id === lessonId)) {
      if (lesson && lesson.course) {
        const today = new Date().toISOString().slice(0, 10);
        const history = AppStorage.getJSON("history", []);
        history.unshift({
          lessonId, courseId: lesson.course, moduleId: lesson.module,
          title: lesson.title, path: lesson.path,
          date: today, type: "lesson"
        });
        AppStorage.setJSON("history", history.slice(0, 200));
      }
    }
  }

  /* Private helpers */
  function totalLessonsFor(courseId) {
    let n = 0;
    (window.COURSES || []).forEach((c) => {
      if (courseId && c.id !== courseId) return;
      (c.modules || []).forEach((m) => {
        n += (m.lessons || []).filter((l) => l && l.id).length;
      });
    });
    return n;
  }

  function completedIn(courseId) {
    const set = completedSet();
    let n = 0;
    (window.COURSES || []).forEach((c) => {
      if (courseId && c.id !== courseId) return;
      (c.modules || []).forEach((m) => {
        (m.lessons || []).forEach((l) => {
          if (l && l.id && set.has(l.id)) n++;
        });
      });
    });
    return n;
  }

  function moduleCompleted(courseId, moduleId) {
    const set = completedSet();
    const c = (window.COURSES || []).find((x) => x.id === courseId);
    if (!c) return 0;
    const m = (c.modules || []).find((x) => x.id === moduleId);
    if (!m) return 0;
    return m.lessons.filter((l) => l && l.id && set.has(l.id)).length;
  }

  function moduleTotal(courseId, moduleId) {
    const c = (window.COURSES || []).find((x) => x.id === courseId);
    if (!c) return 0;
    const m = (c.modules || []).find((x) => x.id === moduleId);
    return m ? m.lessons.filter((l) => l && l.id).length : 0;
  }

  function percent(done, total) {
    return total ? Math.round((done / total) * 100) : 0;
  }

  function globalPercent() {
    const total = totalLessonsFor();
    return total ? Math.round((completedIn() / total) * 100) : 0;
  }

  function coursePercent(courseId) {
    return percent(completedIn(courseId), totalLessonsFor(courseId));
  }

  /* Renderiza todas las barras de progreso con [data-progress] */
  function renderAll() {
    document.querySelectorAll("[data-progress]").forEach((bar) => {
      const courseId = bar.getAttribute("data-progress");
      const fill = bar.querySelector("[data-progress-fill]");
      const label = bar.querySelector("[data-progress-label]");
      const pct = courseId ? coursePercent(courseId) : globalPercent();
      if (fill) fill.style.width = pct + "%";
      if (label) label.textContent = pct + "%";
      if (bar.getAttribute("aria-label")) {
        bar.setAttribute("aria-label", "Progreso: " + pct + "%");
      }
    });
  }

  function onLessonPage() {
    const page = document.querySelector("[data-lesson-id]");
    if (!page) return;
    const lessonId = page.getAttribute("data-lesson-id");
    const toggle = document.querySelector(".complete-toggle input");
    if (toggle) {
      const done = isLessonCompleted(lessonId);
      toggle.checked = done;
      const label = document.querySelector(".complete-toggle");
      if (label) {
        label.setAttribute("aria-label", done ? "Lección completada" : "Marcar lección como completada");
      }
    }
  }

  function bindToggle(lessonId) {
    const form = document.querySelector(".complete-toggle");
    if (!form) return;
    form.addEventListener("change", (e) => {
      if (e.target.matches("input")) {
        const done = toggleLesson(lessonId);
        document.querySelectorAll("[data-lesson-id]").forEach((el) => {
          el.setAttribute("data-completed", done ? "true" : "false");
        });
        renderSidebarCheck();
      }
    });
  }

  function renderSidebarCheck() {
    document.querySelectorAll(".lesson-link[data-lesson-id]").forEach((link) => {
      const id = link.getAttribute("data-lesson-id");
      const done = isLessonCompleted(id);
      link.classList.toggle("is-done", done);
      const check = link.querySelector(".check");
      if (check) check.innerHTML = done ? "✔" : "";
    });
  }

  function init() {
    renderAll();
    const page = document.querySelector("[data-lesson-id]");
    if (page) {
      const lessonId = page.getAttribute("data-lesson-id");
      onLessonPage();
      bindToggle(lessonId);
    }
  }

  return {
    init, isLessonCompleted, toggleLesson, completeLesson,
    globalPercent, coursePercent, moduleCompleted, moduleTotal,
    percent, totalLessonsFor, completedIn, renderAll
  };
})();