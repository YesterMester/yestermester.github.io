// ./Assets/fix-links.js
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    // 1. General fix for duplicated folders (gba1.0/gba1.0/, nes/nes/, etc.)
    document.querySelectorAll("a[href]").forEach(a => {
      let href = a.getAttribute("href");
      if (!href) return;

      // Fix duplicated folder paths (gba1.0/gba1.0 → gba1.0)
      href = href.replace(/\/([^/]+)\/\1\//g, "/$1/");

      // 2. Fix emulator back buttons (strip leading emulator folder)
      // Example: gba1.0/gnext-pg.html → /gnext-pg.html
      href = href.replace(/^([^/]+)\//, "/");

      a.setAttribute("href", href);
    });

    // 3. Force the site title/logo button to always go to index.html
    // (Assumes it has an id or class like #title-btn or .title-btn – adjust as needed)
    const titleBtn = document.querySelector("#title-btn, .title-btn, .site-title, #logo");
    if (titleBtn && titleBtn.tagName === "A") {
      titleBtn.setAttribute("href", "/index.html");
    }
  });
})();
