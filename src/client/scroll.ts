/**
 * Défilement adouci à la molette (~0,5 Ko).
 * Les molettes de souris font des sauts de ~100 px : on les interpole sur quelques images pour un glissé continu.
 * Les trackpads (déjà fluides), le zoom, le clavier, les ancres et « réduire les animations » restent natifs.
 */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse = matchMedia('(pointer: coarse)').matches;

if (!reduce && !coarse) {
  let target = scrollY;
  let raf = 0;
  const max = () => document.documentElement.scrollHeight - innerHeight;

  const tick = () => {
    const diff = target - scrollY;
    if (Math.abs(diff) < 1) { scrollTo({ top: target, behavior: 'instant' }); raf = 0; return; }
    // Pas minimal de 1 px : le navigateur arrondit les positions, sinon l'animation s'arrête quelques pixels trop tôt.
    const step = Math.max(1, Math.abs(diff) * 0.14) * Math.sign(diff);
    scrollTo({ top: scrollY + step, behavior: 'instant' });
    raf = requestAnimationFrame(tick);
  };

  addEventListener('wheel', (e) => {
    // Trackpad (petits deltas en pixels), zoom (ctrl) ou défilement horizontal : comportement natif.
    const mouseWheel = e.deltaMode === 1 || (e.deltaMode === 0 && Math.abs(e.deltaY) >= 50 && Number.isInteger(e.deltaY));
    if (e.ctrlKey || e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY) || !mouseWheel) return;
    // Zones qui défilent elles-mêmes (rien dans ce site pour l'instant) : on les laisse faire.
    for (let el = e.target instanceof Element ? e.target : null; el && el !== document.documentElement; el = el.parentElement) {
      const o = getComputedStyle(el).overflowY;
      if ((o === 'auto' || o === 'scroll') && el.scrollHeight > el.clientHeight) return;
    }
    e.preventDefault();
    if (!raf) target = scrollY;
    const delta = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY;
    target = Math.min(max(), Math.max(0, target + delta));
    if (!raf) raf = requestAnimationFrame(tick);
  }, { passive: false });

  // Ancres, clavier, barre de défilement : on resynchronise la cible.
  addEventListener('scroll', () => { if (!raf) target = scrollY; }, { passive: true });
}
