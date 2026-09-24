/* ============================================================
   Backend Academy — code.js
   Bloques de código: resaltado de sintaxis ligero, números de
   línea, botón copiar, feedback y autotítulo de lenguaje.
   ============================================================ */

const AppCode = (() => {
  const LANG_LABELS = {
    php: "PHP", python: "Python", js: "JavaScript", javascript: "JavaScript",
    node: "Node.js", sql: "SQL", mysql: "MySQL", postgresql: "PostgreSQL",
    bash: "Bash", sh: "Shell", dockerfile: "Dockerfile", yaml: "YAML",
    json: "JSON", xml: "XML", html: "HTML", css: "CSS", text: "texto",
    rest: "API REST", http: "HTTP", docker: "Docker", redis: "Redis"
  };

  /* Alias de lenguaje → familia de resaltado */
  const ALIASES = {
    js: "javascript",
    node: "javascript",
    sh: "bash",
    docker: "dockerfile",
    mysql: "sql",
    postgresql: "sql",
  };

  /* Grupo con nombre de regex → clase CSS de token */
  const CLS = {
    com: "tok-com", str: "tok-str", num: "tok-num",
    key: "tok-key", fn: "tok-fn", pro: "tok-pro",
    sel: "tok-sel", tag: "tok-tag", att: "tok-att",
    var: "tok-var", con: "tok-con"
  };

  const KW = {
    javascript:
      "async await break case catch class const continue debugger default delete do else export extends finally for from function get if import in instanceof let new of return set static super switch this throw try typeof undefined var void while with yield null true false",
    python:
      "and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield None True False self print",
    php:
      "require require_once include include_once function return if else elseif endif endforeach endfor endwhile switch case default break continue class extends public private protected static new use namespace true false null echo print",
    sql:
      "SELECT INSERT UPDATE DELETE FROM WHERE AND OR NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES CREATE TABLE ALTER DROP INDEX JOIN INNER LEFT RIGHT OUTER FULL ON GROUP BY ORDER ASC DESC LIMIT OFFSET UNION DISTINCT AS IN LIKE BETWEEN IS VALUES INTO SET HAVING ALL ANY EXISTS BEGIN END COMMIT",
    bash:
      "echo printf read if then else elif fi for do done while until case esac function export local return source set shift cd ls pwd mkdir rm cp mv touch chmod chown sudo apt yum brew install unzip tar curl wget grep sed awk exit true false",
    redis:
      "SET GET DEL EXPIRE TTL INCR INCRBY DECR DECRBY LPUSH RPUSH LPOP RPOP LRANGE LTRIM LLEN SADD SREM SMEMBERS SISMEMBER EXISTS TYPE KEYS FLUSHALL FLUSHDB PING SELECT HSET HGET HGETALL HDEL HEXISTS HKEYS HLEN ZADD ZRANGE ZREM SCAN MGET MSET MULTI EXEC DISCARD",
    dockerfile:
      "FROM RUN CMD ENTRYPOINT COPY ADD WORKDIR ENV EXPOSE LABEL VOLUME USER ARG ONBUILD STOPSIGNAL SHELL HEALTHCHECK",
    nginx:
      "server location listen server_name root index proxy_pass proxy_set_header upstream include error_page rewrite return if try_files deny allow ssl http https",
    json: "true false null",
    yaml: "true false null yes no on off",
    http: "GET POST PUT PATCH DELETE OPTIONS HEAD CONNECT HTTP URI IRI",
    rest: "GET POST PUT PATCH DELETE OPTIONS HEAD HTTP",
  };

  const escR = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escHtml = (s) =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  function langName(lang) {
    return LANG_LABELS[String(lang).toLowerCase()] || String(lang).toUpperCase() || "Código";
  }

  /* Reglas de token por lenguaje */
  function rulesFor(lang) {
    if (lang === "css") {
      return [
        `(?<com>\\/\\*[\\s\\S]*?\\*\\/)`,
        `(?<sel>[.#]?[\\w.#:-]+(?=\\s*\\{))`,
        `(?<pro>[a-z-]+(?=\\s*:))`,
        `(?<str>"(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*')`,
        `(?<num>#?\\b[\\da-f]*(?:\\.\\d+)?(?:px|rem|em|%|vh|vw|s|ms)?\\b)`,
      ];
    }
    if (lang === "html" || lang === "xml") {
      return [
        `(?<com><!--[\\s\\S]*?-->)`,
        `(?<tag><\\/?[A-Za-z][\\w-]*(?:\\s[^>]*)?>)`,
        `(?<att>[A-Za-z-]+(?==))`,
        `(?<str>"[^"]*"|'[^']*')`,
      ];
    }

    const rules = [];
    if (["bash", "sh", "python", "dockerfile", "nginx", "redis", "yaml", "env", "ini"].includes(lang)) {
      rules.push(`(?<com>#[^\\n]*)`);
    } else {
      rules.push(`(?<com>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)`);
    }
    rules.push(`(?<str>"(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*'|\`(?:[^\`\\\\]|\\\\.)*\`)`);
    if (lang === "json") rules.push(`(?<pro>"[^"]+"(?=\\s*:))`);
    if (lang === "yaml") rules.push(`(?<pro>^\\s*[A-Za-z_][\\w.-]*(?=\\s*:))`);
    if (lang === "ini" || lang === "env") rules.push(`(?<pro>^\\s*[A-Za-z_][\\w]*\\s*=)`);
    if (lang === "bash" || lang === "sh") rules.push(`(?<var>\\$[A-Za-z_][\\w]*)`);
    rules.push(`(?<num>\\b\\d+(?:\\.\\d+)?\\b)`);
    const kw = KW[lang];
    if (kw) rules.push(`(?<key>\\b(?:${kw.split(" ").map(escR).join("|")})\\b)`);
    rules.push(`(?<fn>[A-Za-z_$][\\w$]*(?=\\s*\\())`);
    if (lang === "python") rules.push(`(?<con>\\b[A-Z][A-Z_]+\\b)`);
    return rules;
  }

  function highlight(src, lang) {
    const es = escHtml(src);
    let body = es;

    if (lang && lang !== "text" && lang !== "texto") {
      const rules = rulesFor(lang);
      if (rules) {
        const re = new RegExp(rules.join("|"), "gm");
        let out = "";
        let last = 0;
        for (const m of es.matchAll(re)) {
          if (m.index > last) out += es.slice(last, m.index);
          const grp = m.groups || {};
          for (const [name, cls] of Object.entries(CLS)) {
            if (grp[name] !== undefined) {
              out += `<span class="${cls}">${grp[name]}</span>`;
              break;
            }
          }
          last = m.index + m[0].length;
        }
        out += es.slice(last);
        body = out;
      }
    }

    /* Líneas numeradas */
    const lines = body.split("\n");
    if (lines.length && lines[lines.length - 1] === "") lines.pop();
    return lines
      .map((ln) => `<span class="code-ln"><span class="code-ln__num"></span><span class="code-ln__text">${ln || " "}</span></span>`)
      .join("");
  }

  function langFromBlock(block, pre, codeEl) {
    if (codeEl) {
      for (const cls of codeEl.classList) {
        if (cls.startsWith("language-")) return cls.slice("language-".length);
      }
    }
    if (pre && pre.dataset.lang) return pre.dataset.lang;
    if (block.classList.contains("code-block")) {
      const cap = block.querySelector(".code-block__lang");
      if (cap) return String(cap.textContent.trim()).toLowerCase();
    }
    return "texto";
  }

  function setupBlock(block) {
    const pre = (block.classList.contains("code-block") ? block.querySelector("pre") : block) || block;
    const codeEl = pre.tagName === "CODE" ? pre : pre.querySelector("code");

    const raw = langFromBlock(block, pre, codeEl);
    const real = ALIASES[raw.toLowerCase()] || raw.toLowerCase();

    /* Resaltado */
    if (codeEl && !codeEl.dataset.highlighted) {
      const src = codeEl.textContent;
      codeEl.dataset.highlighted = "1";
      codeEl.innerHTML = highlight(src, real);
      if (pre) pre.dataset.src = src;
      const body = block.classList.contains("code-block")
        ? block.querySelector(".code-block__body")
        : (pre && pre.parentElement) || null;
      if (body) body.classList.add("has-lines");
    }

    /* Botón copiar (si aún no existe) */
    const existing = block.querySelector("[data-copy], .code-block__copy, .copy-btn");
    if (!existing) {
      const copyBtn = document.createElement("button");
      copyBtn.className = "btn btn--icon btn--sm copy-btn";
      copyBtn.type = "button";
      copyBtn.setAttribute("aria-label", "Copiar código");
      copyBtn.innerHTML = `<i class="fa-solid fa-copy" aria-hidden="true"></i>`;
      copyBtn.addEventListener("click", () => {
        copyCode(pre && pre.dataset.src ? pre.dataset.src : pre.innerText, copyBtn);
      });

      if (block.classList.contains("code-block")) {
        const bar = block.querySelector(".code-block__header");
        attach(block, bar, copyBtn);
      } else {
        attach(block, null, copyBtn);
      }
    }
  }

  function attach(block, bar, btn) {
    block.style.position = "relative";
    if (bar) {
      bar.insertAdjacentElement("beforeend", btn);
    } else {
      block.appendChild(btn);
    }
    const feedback = document.createElement("span");
    feedback.className = "copy-btn__feedback";
    feedback.textContent = "✓ Copiado";
    btn.appendChild(feedback);
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

  return { init, showToast, setupBlock };
})();

if (typeof window !== "undefined") {
  window.AppCode = AppCode;
}