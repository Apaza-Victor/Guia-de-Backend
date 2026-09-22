/* ============================================================
   Backend Academy — code.js
   Bloques de código: resaltado ligero, copiar, feedback,
   scroll horizontal interno y autotítulo de lenguaje.
   ============================================================ */

const AppCode = (() => {
  const LANG_LABELS = {
    php: "PHP", python: "Python", js: "JavaScript", javascript: "JavaScript",
    node: "Node.js", sql: "SQL", mysql: "MySQL", postgresql: "PostgreSQL",
    bash: "Bash", sh: "Shell", dockerfile: "Dockerfile", yaml: "YAML",
    json: "JSON", xml: "XML", html: "HTML", css: "CSS", text: "texto",
    rest: "API REST", http: "HTTP", docker: "Docker", redis: "Redis"
  };

  function langName(lang) {
    return LANG_LABELS[String(lang).toLowerCase()] || String(lang).toUpperCase() || "Código";
  }

  function init() {
    document.querySelectorAll("pre[data-lang], .code-block").forEach(setupBlock);

    /* Botones copiar delegados (también los generados dinámicamente) */
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-copy]");
      if (!btn) return;
      const code = btn.getAttribute("data-copy");
      copyCode(code, btn);
    });
  }

  function setupBlock(block) {
    let pre = block;
    let lang = "texto";
    if (block.classList.contains("code-block")) {
      pre = block.querySelector("pre");
      lang = pre ? pre.getAttribute("data-lang") || "texto" : "texto";
    } else {
      lang = block.getAttribute("data-lang") || "texto";
    }

    const copyBtn = document.createElement("button");
    copyBtn.className = "btn btn--icon btn--sm copy-btn";
    copyBtn.type = "button";
    copyBtn.setAttribute("aria-label", "Copiar código");
    copyBtn.innerHTML = `<i class="fa-solid fa-copy" aria-hidden="true"></i>`;
    copyBtn.addEventListener("click", () => {
      const code = pre.innerText;
      copyCode(code, copyBtn);
    });

    if (block.classList.contains("code-block")) {
      const bar = block.querySelector(".code-block__header");
      block.style.position = "relative";
      bar && bar.insertAdjacentElement("beforeend", copyBtn);
    } else {
      block.style.position = "relative";
      block.appendChild(copyBtn);
    }

    /* Feedback + toast */
    const feedback = document.createElement("span");
    feedback.className = "copy-btn__feedback";
    feedback.textContent = "✓ Copiado";
    copyBtn.appendChild(feedback);
  }

  function copyCode(code, btn) {
    AppHelpers.copyText(code, () => {
      btn.classList.add("is-copied");
      const fb = btn.querySelector(".copy-btn__feedback");
      if (fb) fb.style.opacity = "1";
      showToast("Código copiado al portapapeles");
      setTimeout(() => {
        btn.classList.remove("is-copied");
        if (fb) fb.style.opacity = "0";
      }, 1800);
    });
  }

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

  return { init, showToast };
})();