// ./Assets/starfield-universal.js
(function () {
  if (window.__YUBG_STARFIELD_INIT__) return;
  window.__YUBG_STARFIELD_INIT__ = true;

  const START_PAGES = (window.YUBG_PAGE_ALLOWLIST || null);
  const shouldRunHere = () => {
    if (!START_PAGES) return true;
    const p = location.pathname.toLowerCase();
    return START_PAGES.some((frag) => p.includes(frag));
  };

  const start = () => {
    if (!shouldRunHere()) return;

    // Transparent background
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-yubg", "starfield");
    styleEl.textContent = `
      html, body { background: transparent !important; }
      [data-webstudio-embed], .webstudio-embed, .w-embed, [data-ws-embed] { background: transparent !important; }
    `;
    document.head.appendChild(styleEl);

    // Remove older canvases
    document.querySelectorAll(
      'canvas[id*="star"], canvas[data-star], #star-canvas, #starfield-canvas'
    ).forEach((el) => { if (!el.hasAttribute('data-yubg')) el.remove(); });

    if (document.getElementById("yubg-starfield-host")) return;

    // Host
    const host = document.createElement("div");
    host.id = "yubg-starfield-host";
    host.style.position = "fixed";
    host.style.inset = "0";
    host.style.pointerEvents = "none";
    host.style.zIndex = "0";
    document.body.prepend(host);

    // Canvas
    const cvs = document.createElement("canvas");
    cvs.id = "yubg-starfield-canvas";
    cvs.setAttribute("data-yubg", "1");
    cvs.style.width = "100%";
    cvs.style.height = "100%";
    host.appendChild(cvs);
    const ctx = cvs.getContext("2d");

    // Optional tint
    const tint = window.YUBG_STAR_TINT || null;
    if (tint) {
      const tintEl = document.createElement("div");
      tintEl.style.position = "absolute";
      tintEl.style.inset = "0";
      tintEl.style.background = tint;
      tintEl.style.pointerEvents = "none";
      host.appendChild(tintEl);
    }

    // HiDPI scaling
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

    // ⭐ Star settings (DENSLY PACKED)
    const COUNT = window.YUBG_STAR_COUNT || 450; // was 220 → now ~double for density
    const stars = Array.from({ length: COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 0.5 + Math.random() * 1.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    // Shooting stars
    const shootingStars = [];
    function spawnShootingStar() {
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight * 0.4; // top half only
      const length = 400 + Math.random() * 200;
      shootingStars.push({
        x: startX,
        y: startY,
        vx: -6 - Math.random() * 4,
        vy: 2 + Math.random() * 2,
        life: 0,
        maxLife: 60 + Math.random() * 30,
        length,
      });
    }
    setInterval(() => {
      if (Math.random() < 0.3) spawnShootingStar(); // more frequent
    }, 3000);

    // Mouse repel
    const mouse = { x: null, y: null };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Keep transparent
    const ensureTransparent = () => {
      const html = document.documentElement;
      const body = document.body;
      html && html.style.setProperty("background", "transparent", "important");
      body && body.style.setProperty("background", "transparent", "important");
    };
    ensureTransparent();
    const bgKeepAlive = setInterval(ensureTransparent, 1000);

    // MutationObserver safety
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

      // Trails fade — slower fade so dense stars "hang" longer
      ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
      ctx.fillRect(0, 0, w, h);

      // Stars
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;

        if (mouse.x != null) {
          const dx = s.x - mouse.x, dy = s.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 110 * 110) {
            const d = Math.sqrt(d2) || 1;
            s.x += (dx / d) * 1.2;
            s.y += (dy / d) * 1.2;
          }
        }

        if (s.x < 0) s.x += w;
        if (s.x > w) s.x -= w;
        if (s.y < 0) s.y += h;
        if (s.y > h) s.y -= h;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }

      // Shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const sh = shootingStars[i];
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life++;

        const alpha = 1 - sh.life / sh.maxLife;
        if (alpha <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        const grad = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx * sh.length, sh.y - sh.vy * sh.length);
        grad.addColorStop(0, `rgba(255,255,255,${alpha})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x - sh.vx * sh.length, sh.y - sh.vy * sh.length);
        ctx.stroke();
      }

      requestAnimationFrame(tick);
    }
    tick();

    // API
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
