/** Seul JavaScript du site : ouverture / fermeture du menu mobile (< 400 octets). */
const btn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
  const set = (open: boolean) => {
    btn.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => { if ((e.target as Element).closest('a')) set(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
}

/** « FAQ » : les questions sont amenées au centre de l'écran (et non collées sous la navbar). */
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest<HTMLAnchorElement>('a[href="#faq"]');
  const faq = document.getElementById('faq');
  if (!a || !faq) return;
  e.preventDefault();
  faq.scrollIntoView({ block: 'center', behavior: 'smooth' });
  history.pushState(null, '', '#faq');
});
