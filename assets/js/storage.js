/* ============================================================
   Backend Academy — storage.js
   Utilidades de persistencia: LocalStorage seguro con fallback.
   ============================================================ */

const AppStorage = (() => {
  const PREFIX = "backend-academy:";

  /* Memoria en caso de que LocalStorage no esté disponible */
  const fallback = new Map();

  function available() {
    try {
      const k = PREFIX + "test";
      window.localStorage.setItem(k, "1");
      window.localStorage.removeItem(k);
      return true;
    } catch (e) {
      return false;
    }
  }

  function getJSON(key, fallbackValue) {
    try {
      if (available()) {
        const raw = window.localStorage.getItem(PREFIX + key);
        return raw === null ? fallbackValue : JSON.parse(raw);
      }
      return fallback.has(PREFIX + key)
        ? JSON.parse(fallback.get(PREFIX + key))
        : fallbackValue;
    } catch (e) {
      return fallbackValue;
    }
  }

  function setJSON(key, value) {
    try {
      if (available()) {
        window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
      } else {
        fallback.set(PREFIX + key, JSON.stringify(value));
      }
    } catch (e) {
      /* quota o modo privado: ignorar */
    }
  }

  function remove(key) {
    try {
      if (available()) {
        window.localStorage.removeItem(PREFIX + key);
      } else {
        fallback.delete(PREFIX + key);
      }
    } catch (e) { /* noop */ }
  }

  function get(key, fallbackValue) {
    try {
      if (available()) {
        const v = window.localStorage.getItem(PREFIX + key);
        return v === null ? fallbackValue : v;
      }
      return fallback.has(PREFIX + key) ? fallback.get(PREFIX + key) : fallbackValue;
    } catch (e) { return fallbackValue; }
  }

  function set(key, value) {
    try {
      if (available()) {
        window.localStorage.setItem(PREFIX + key, String(value));
      } else {
        fallback.set(PREFIX + key, String(value));
      }
    } catch (e) { /* noop */ }
  }

  return {
    get, set, getJSON, setJSON, remove, available
  };
})();

if (typeof window !== "undefined") {
  window.AppStorage = AppStorage;
}