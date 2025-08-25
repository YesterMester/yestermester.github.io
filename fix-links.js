// ./Assets/fix-links.js
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    // helper: skip external / anchors / protocols
    const isExternal = (u) => /^(https?:|mailto:|tel:|#|javascript:)/i.test(u);

    // detect if current page is inside the emulator folder (adjust folder name if needed)
    const pathParts = (location.pathname || "").split("/").filter(Boolean);
    const IN_EMU = pathParts.includes("gba1.0");

    // Which filenames should always be treated as site-root pages (force to "/file")
    const FORCE_ROOT_FILES = new Set([
      "index.html",
      "gnext-pg.html",
      "games.html",
      "games2.html",
      "about.html",
      "privacy-policy.html",
      "changelog.html"
    ]);

    document.querySelectorAll("a[href]").forEach(a => {
      const raw = a.getAttribute("href");
      if (!raw) return;
      const href = raw.trim();
      if (isExternal(href)) return; // leave external links alone

      let newHref = href;

      // 1) Collapse repeated emulator folder sequences "gba1.0/gba1.0/..." -> "/gba1.0/..."
      //    This handles links that accidentally duplicated the folder multiple times.
      newHref = newHref.replace(/(\/?gba1\.0\/)+/g, "/gba1.0/");

      // 2) If we are *inside* /gba1.0/, remove a leading emulator folder so links don't become
      //    /gba1.0/gba1.0/target. Example:
      //      current page: /gba1.0/...
      //      bad link: "gba1.0/nes" or "./gba1.0/nes"  -> becomes "nes" (relative to /gba1.0/)
      if (IN_EMU) {
        newHref = newHref.replace(/^(\.\/|\/)?gba1\.0\//, "");
      }

      // 3) If after normalization the file part is a site-level page (back button), force root path
      //    So e.g. "gnext-pg.html" -> "/gnext-pg.html" regardless of current folder.
      const parts = newHref.split("/");
      const filename = parts[parts.length - 1].toLowerCase();
      if (FORCE_ROOT_FILES.has(filename)) {
        newHref = "/" + filename;
      }

      // 4) Apply the change if it differs
      if (newHref !== href) {
        a.setAttribute("href", newHref);
      }
    });

    // 5) Force the top-left title/logo anchor(s) that include 'yester' in their text to point to site root.
    //    This is intentionally broad so any variant of the title anchor is covered.
    document.querySelectorAll("a").forEach(a => {
      const text = (a.textContent || "").trim().toLowerCase();
      if (!text) return;
      // match "yester" (covers "Yester's UBG", "Yester's Unblocked Site", etc.)
      if (text.includes("yester")) {
        a.setAttribute("href", "/index.html");
      }
    });
  });
})();
