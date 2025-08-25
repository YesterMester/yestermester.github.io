// fixCanvas.js
// ./Assets/starfield-universal.js
(function () {
  // Prevent double init
  if (window.__YUBG_STARFIELD_INIT__) return;
  window.__YUBG_STARFIELD_INIT__ = true;

  const START_PAGES = (window.YUBG_PAGE_ALLOWLIST || null);
  const shouldRunHere = () => {
    if (!START_PAGES) return true; // run everywhere unless allowlist is provided
    const p = location.pathname.toLowerCase();
    return START_PAGES.some((frag) => p.includes(frag));
  };

  const start = () => {
    if (!shouldRunHere()) return;

    // Keep page backgrounds transparent so the canvas shows above them
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-yubg", "starfield");
    styleEl.textContent = `
      html, body { background: transparent !important; }
      /* Try to neutralize common embed wrappers */
      [data-webstudio-embed], .webstudio-embed, .w-embed, [data-ws-embed] { background: transparent !important; }
    `;
    document.head.appendChild(styleEl);

    // Remove any other star canvases injected by older code
    document.querySelectorAll(
      'canvas[id*="star"], canvas[data-star], #star-canvas, #starfield-canvas'
    ).forEach((el) => { if (!el.hasAttribute('data-yubg')) el.remove(); });

    // If we already mounted a host, stop
    if (document.getElementById("yubg-starfield-host")) return;

    // Host holds the canvas + optional tint, sits behind everything, but above transparent body
    const host = document.createElement("div");
    host.id = "yubg-starfield-host";
    host.style.position = "fixed";
    host.style.inset = "0";
    host.style.pointerEvents = "none";
    host.style.zIndex = "0"; // above transparent body background
    document.body.prepend(host);

    // Canvas
    const cvs = document.createElement("canvas");
    cvs.id = "yubg-starfield-canvas";
    cvs.setAttribute("data-yubg", "1");
    cvs.style.width = "100%";
    cvs.style.height = "100%";
    host.appendChild(cvs);
    const ctx = cvs.getContext("2d");

    // Optional tint overlay: set window.YUBG_STAR_TINT = 'rgba(r,g,b,a)' before loading this script
    const tint = window.YUBG_STAR_TINT || null;
    if (tint) {
      const tintEl = document.createElement("div");
      tintEl.style.position = "absolute";
      tintEl.style.inset = "0";
      tintEl.style.background = tint;
      tintEl.style.pointerEvents = "none";
      host.appendChild(tintEl);
    }

    // Handle HiDPI correctly so stars stay crisp
    const DPR = () => Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    function fit() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const r = DPR();
      cvs.width = Math.floor(w * r);
      cvs.height = Math.floor(h * r);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(r, r);
    }
    fit();
    window.addEventListener("resize", fit);

    // Generate stars
    const COUNT = window.YUBG_STAR_COUNT || 220;
    const stars = Array.from({ length: COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 0.5 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    // Mouse repel
    const mouse = { x: null, y: null };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Keep body & html transparent if something tries to repaint white later
    const ensureTransparent = () => {
      const html = document.documentElement;
      const body = document.body;
      html && html.style.setProperty("background", "transparent", "important");
      body && body.style.setProperty("background", "transparent", "important");
    };
    ensureTransparent();
    const bgKeepAlive = setInterval(ensureTransparent, 1000);

    // If host gets removed by a re-render, re-attach it
    const mo = new MutationObserver(() => {
      if (!document.body.contains(host)) {
        document.body.prepend(host);
        ensureTransparent();
      }
    });
    mo.observe(document.body, { childList: true });

    // Animate
    function tick() {
      const w = window.innerWidth, h = window.innerHeight;

      // Paint black space
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);

      // Stars
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;

        // gentle repel near cursor
        if (mouse.x != null) {
          const dx = s.x - mouse.x, dy = s.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 110 * 110) {
            const d = Math.sqrt(d2) || 1;
            s.x += (dx / d) * 1.5;
            s.y += (dy / d) * 1.5;
          }
        }

        // wrap
        if (s.x < 0) s.x += w;
        if (s.x > w) s.x -= w;
        if (s.y < 0) s.y += h;
        if (s.y > h) s.y -= h;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }

      requestAnimationFrame(tick);
    }
    tick();

    // Expose a tiny API if you ever need to tweak from console
    window.YUBG_STARFIELD_API = {
      destroy() {
        clearInterval(bgKeepAlive);
        mo.disconnect();
        host.remove();
        const s = document.querySelector('style[data-yubg="starfield"]');
        s && s.remove();
        delete window.__YUBG_STARFIELD_INIT__;
      },
      setTint(color) {
        window.YUBG_STAR_TINT = color;
        location.reload();
      }
    };
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
