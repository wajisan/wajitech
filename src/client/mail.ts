/** Révèle l'email au clic (décodage XOR) : l'adresse n'est jamais dans le HTML servi. */
const decode = (hex: string, key: string) =>
  (hex.match(/../g) ?? []).map((h, i) => String.fromCharCode(parseInt(h, 16) ^ key.charCodeAt(i % key.length))).join('');

document.addEventListener('click', (e) => {
  const btn = (e.target as Element).closest<HTMLButtonElement>('button[data-mail]');
  if (!btn) return;
  const mail = decode(btn.dataset.mail!, btn.dataset.key!);
  const a = document.createElement('a');
  a.href = `mailto:${mail}`;
  a.textContent = mail;
  a.className = btn.className;
  if (btn.classList.contains('btn')) { a.style.minWidth = `${btn.offsetWidth}px`; a.style.justifyContent = 'center'; }
  btn.replaceWith(a);
  a.focus();
});

/** Années d'expérience : mises à jour à l'ouverture de la page (le build fournit déjà la bonne valeur). */
document.querySelectorAll<HTMLElement>('[data-since]').forEach((el) => {
  const [y, m] = el.dataset.since!.split('-').map(Number);
  const d = new Date();
  el.textContent = `${d.getFullYear() - y - (d.getMonth() + 1 < m ? 1 : 0)} ans+`;
});
