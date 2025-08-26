// ./Assets/starfield-universal.js
(function () {
  'use strict';

  // Prevent double init
  if (window.__YUBG_STARFIELD_INIT__) return;
  window.__YUBG_STARFIELD_INIT__ = true;

  // ----------------------------
  // Config (via globals optional)
  // ----------------------------
  const START_PAGES = window.YUBG_PAGE_ALLOWLIST || null;   // e.g. ['/games','/about','/privacy-policy','/gba1.0/']
  const MAX_DPR     = Math.max(1, Math.min( window.YUBG_STAR_MAX_DPR || 1.75, 3 ));
  const BASE_COUNT  = window.YUBG_STAR_COUNT || 520;        // visual density
  const TRAIL_ALPHA = (typeof window.YUBG_STAR_TRAIL_ALPHA === 'number')
                      ? window.YUBG_STAR_TRAIL_ALPHA : 0.28; // 0..1 (higher = shorter trails)
  const SHOOT_RATE  = (typeof window.YUBG_SHOOT_RATE === 'number')
                      ? window.YUBG_SHOOT_RATE : 0.009;     // chance per frame
  const DISABLE_SHOOTING = !!window.YUBG_DISABLE_SHOOTING;
  const TINT        = window.YUBG_STAR_TINT || null;        // e.g. 'rgba(255,0,0,0.08)'

  const shouldRunHere = () => {
    if (!START_PAGES) return true;
    const p = location.pathname.toLowerCase();
    return START_PAGES.some(frag => p.includes(frag));
  };

  function start() {
    if (!shouldRunHere()) return;

    // Keep backgrounds transparent so the canvas shows correctly
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-yubg', 'starfield');
    styleEl.textContent = `
      html, body { background: transparent !important; }
      [data-webstudio-embed], .webstudio-embed, .w-embed, [data-ws-embed] { background: transparent !important; }
    `;
    document.head.appendChild(styleEl);

    // Remove older/star canvases not from this script
    document.querySelectorAll('canvas[id*="star"], canvas[data-star], #star-canvas, #starfield-canvas')
      .forEach(el => { if (!el.hasAttribute('data-yubg')) el.remove(); });

    // Already mounted?
    if (document.getElementById('yubg-starfield-host')) return;

    // Host (behind UI)
    const host = document.createElement('div');
    host.id = 'yubg-starfield-host';
    Object.assign(host.style, {
      position: 'fixed',
      inset: '0',
      pointerEvents: 'none',
      zIndex: '0'
    });
    document.body.prepend(host);

    // Canvas
    const cvs = document.createElement('canvas');
    cvs.id = 'yubg-starfield-canvas';
    cvs.setAttribute('data-yubg', '1');
    Object.assign(cvs.style, { width: '100%', height: '100%' });
    host.appendChild(cvs);
    const ctx = cvs.getContext('2d', { alpha: true, desynchronized: true });

    // Optional tint overlay
    if (TINT) {
      const tintEl = document.createElement('div');
      Object.assign(tintEl.style, {
        position: 'absolute',
        inset: '0',
        background: TINT,
        pointerEvents: 'none',
        zIndex: '1'
      });
      host.appendChild(tintEl);
    }

    // --------------------------------
    // Sizing / HiDPI (clamped for perf)
    // --------------------------------
    const DPR = () => Math.max(1, Math.min(window.devicePixelRatio || 1, MAX_DPR));
    let vw = 0, vh = 0, dpr = DPR();
    function fit() {
      vw = window.innerWidth  || document.documentElement.clientWidth  || 800;
      vh = window.innerHeight || document.documentElement.clientHeight || 600;
      dpr = DPR();
      const w = Math.floor(vw * dpr);
      const h = Math.floor(vh * dpr);
      if (cvs.width !== w || cvs.height !== h) {
        cvs.width = w; cvs.height = h;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
      }
    }
    fit();
    window.addEventListener('resize', fit, { passive: true });

    // --------------------------------
    // Pre-rendered star sprites (fast)
    // --------------------------------
    function makeStarSprite(radiusPx) {
      const size = Math.ceil(radiusPx * 6);
      const spr = document.createElement('canvas');
      spr.width = spr.height = size;
      const sctx = spr.getContext('2d');
      const g = sctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
      // Soft white glow; slight blue tint at edge for depth
      g.addColorStop(0.0, 'rgba(255,255,255,1)');
      g.addColorStop(0.6, 'rgba(255,255,255,0.25)');
      g.addColorStop(1.0, 'rgba(170,200,255,0)');
      sctx.fillStyle = g;
      sctx.beginPath();
      sctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
      sctx.fill();
      return spr;
    }
    const SPRITES = [
      makeStarSprite(0.7),  // small
      makeStarSprite(1.2),  // medium
      makeStarSprite(1.9)   // large
    ];

    // -------------------
    // Star field particles
    // -------------------
    // Typed arrays for cache-friendly updates
    let countTarget = BASE_COUNT;
    const MAX_STARS = Math.max(200, Math.min(1400, BASE_COUNT * 2));
    const X  = new Float32Array(MAX_STARS);
    const Y  = new Float32Array(MAX_STARS);
    const VX = new Float32Array(MAX_STARS);
    const VY = new Float32Array(MAX_STARS);
    const SZ = new Uint8Array(MAX_STARS);   // sprite index 0..2
    const DP = new Float32Array(MAX_STARS); // depth 0..1
    const TW = new Float32Array(MAX_STARS); // twinkle phase
    let starsAlive = 0;

    function randRange(a, b) { return a + Math.random() * (b - a); }

    function spawnStar(i) {
      X[i]  = Math.random() * vw;
      Y[i]  = Math.random() * vh;
      const depth = Math.random(); // 0..1
      const speed = 0.08 + depth * 0.42; // gentle drift
      const ang   = Math.random() * Math.PI * 2;
      VX[i] = Math.cos(ang) * speed;
      VY[i] = Math.sin(ang) * speed;
      DP[i] = depth;
      SZ[i] = (depth < 0.33) ? 0 : (depth < 0.72 ? 1 : 2);
      TW[i] = Math.random() * Math.PI * 2;
    }

    function ensurePopulation(n) {
      n = Math.min(n, MAX_STARS);
      while (starsAlive < n) { spawnStar(starsAlive++); }
      // Softly shrink by just reducing alive count; rest get overwritten later
      if (starsAlive > n) starsAlive = n;
    }
    ensurePopulation(countTarget);

    // ---------------
    // Shooting stars
    // ---------------
    const SHOOT_POOL_MAX = 6;
    const shoots = [];
    function spawnShoot() {
      if (shoots.length >= SHOOT_POOL_MAX) return;
      // enter from top-left area heading down-right
      const fromTop = Math.random() < 0.6;
      const x = fromTop ? Math.random() * vw : -50;
      const y = fromTop ? -20 : Math.random() * (vh * 0.5);
      const speed = randRange(6, 9);
      const angle = randRange(Math.PI * 0.08, Math.PI * 0.25); // gentle down-right
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      shoots.push({
        x, y, vx, vy,
        life: 0,
        maxLife: randRange(45, 80),
        len: randRange(180, 320)
      });
    }

    // -----------
    // Interaction
    // -----------
    const mouse = { x: -1e6, y: -1e6 };
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    window.addEventListener('mouseleave', () => { mouse.x = -1e6; mouse.y = -1e6; }, { passive: true });
    window.addEventListener('touchmove', (e) => {
      const t = e.touches && e.touches[0]; if (!t) return;
      mouse.x = t.clientX; mouse.y = t.clientY;
    }, { passive: true });

    // Keep body/html transparent if something tries to paint white later
    const ensureTransparent = () => {
      const html = document.documentElement;
      const body = document.body;
      if (html) html.style.setProperty('background', 'transparent', 'important');
      if (body) body.style.setProperty('background', 'transparent', 'important');
    };
    ensureTransparent();
    const bgKeepAlive = setInterval(ensureTransparent, 1200);

    // If host gets removed by a re-render, re-attach it
    const mo = new MutationObserver(() => {
      if (!document.body.contains(host)) {
        document.body.prepend(host);
        ensureTransparent();
      }
    });
    mo.observe(document.body, { childList: true });

    // -------------
    // Render/Animate
    // -------------
    let lastT = performance.now();
    let fpsEMA = 60;

    function drawFrame(ts) {
      // Pause updates when hidden (saves CPU/GPU)
      if (document.hidden) {
        requestAnimationFrame(drawFrame);
        return;
      }

      const dt = Math.min(80, ts - lastT); // clamp delta to avoid huge jumps
      lastT = ts;

      // Simple FPS estimator
      const instFPS = 1000 / Math.max(16.6, dt);
      fpsEMA = fpsEMA * 0.9 + instFPS * 0.1;

      // Adaptive population (keeps things smooth)
      if (fpsEMA < 50 && countTarget > BASE_COUNT * 0.7) countTarget -= 8;
      else if (fpsEMA > 58 && countTarget < BASE_COUNT * 1.15) countTarget += 4;
      ensurePopulation(Math.round(countTarget));

      // Trails (low alpha clear)
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = `rgba(0,0,0,${TRAIL_ALPHA})`;
      ctx.fillRect(0, 0, vw, vh);

      // Stars (twinkle & drift)
      const repelR = 110;
      const repelR2 = repelR * repelR;
      const dtScale = dt * 0.06; // tune drift speed
      for (let i = 0; i < starsAlive; i++) {
        // drift
        X[i] += VX[i] * dtScale * (0.6 + DP[i]); // depth influences speed a bit
        Y[i] += VY[i] * dtScale * (0.6 + DP[i]);

        // wrap
        if (X[i] < -5) X[i] = vw + 5;
        if (X[i] > vw + 5) X[i] = -5;
        if (Y[i] < -5) Y[i] = vh + 5;
        if (Y[i] > vh + 5) Y[i] = -5;

        // repel
        const dx = X[i] - mouse.x;
        const dy = Y[i] - mouse.y;
        const d2 = dx*dx + dy*dy;
        if (d2 < repelR2) {
          const d = Math.sqrt(d2) || 1;
          const f = (repelR - d) / repelR;
          X[i] += (dx / d) * f * 1.5;
          Y[i] += (dy / d) * f * 1.5;
        }

        // twinkle phase
        TW[i] += 0.015 + DP[i] * 0.02;

        // draw sprite with subtle twinkle brightness
        const sprite = SPRITES[SZ[i]];
        const twk = 0.85 + Math.sin(TW[i]) * 0.15; // 0.7..1.0
        ctx.globalAlpha = 0.85 * twk;
        const half = sprite.width * 0.5;
        ctx.drawImage(sprite, X[i] - half, Y[i] - half);
      }
      ctx.globalAlpha = 1;

      // Shooting stars (additive blend, bright trail)
      if (!DISABLE_SHOOTING && Math.random() < SHOOT_RATE) spawnShoot();
      ctx.globalCompositeOperation = 'lighter';
      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i];
        s.life += 1;
        s.x += s.vx;
        s.y += s.vy;
        const lifeT = 1 - (s.life / s.maxLife);
        if (lifeT <= 0 || s.x < -100 || s.y > vh + 100 || s.x > vw + 200) {
          shoots.splice(i, 1);
          continue;
        }
        const tailX = s.x - s.vx * (s.len * 0.18);
        const tailY = s.y - s.vy * (s.len * 0.18);

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255,255,255,${0.9 * lifeT})`);
        grad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // star head
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, 0.3 * lifeT)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';

      requestAnimationFrame(drawFrame);
    }
    requestAnimationFrame(drawFrame);

    // Public tiny API
    window.YUBG_STARFIELD_API = {
      destroy() {
        clearInterval(bgKeepAlive);
        mo.disconnect();
        host.remove();
        const s = document.querySelector('style[data-yubg="starfield"]');
        if (s) s.remove();
        delete window.__YUBG_STARFIELD_INIT__;
      },
      setTint(color) {
        window.YUBG_STAR_TINT = color;
        location.reload();
      },
      setDensity(n) {
        window.YUBG_STAR_COUNT = n|0;
        // will adapt in next frames
      }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
