/** Révèle l'email au clic (décodage XOR) : l'adresse n'est jamais dans le HTML servi. */
const decode = (hex: string, key: string) =>
  (hex.match(/../g) ?? []).map((h, i) => String.fromCharCode(parseInt(h, 16) ^ key.charCodeAt(i % key.length))).join('');

const ICON_COPY = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2.5"/><path d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15"/></svg>';
const ICON_OK = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

const writeClipboard = async (text: string) => {
  try { await navigator.clipboard.writeText(text); return true; } catch {
    const t = document.createElement('textarea');
    t.value = text; t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.append(t); t.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch { /* ignoré */ }
    t.remove();
    return ok;
  }
};

document.addEventListener('click', (e) => {
  const btn = (e.target as Element).closest<HTMLButtonElement>('button[data-mail]');
  if (!btn) return;
  const mail = decode(btn.dataset.mail!, btn.dataset.key!);

  // Le bouton d'origine devient une « pastille » qui garde son style : [adresse | icône copier].
  const chip = document.createElement('span');
  chip.className = `${btn.className} mail-chip`;
  if (btn.classList.contains('btn')) { chip.style.minWidth = `${btn.offsetWidth}px`; chip.style.justifyContent = 'center'; }

  const a = document.createElement('a');
  a.href = `mailto:${mail}`;
  a.textContent = mail;

  const copy = document.createElement('button');
  copy.type = 'button';
  copy.className = 'copy-btn';
  copy.title = "Copier l'adresse email";
  copy.setAttribute('aria-label', "Copier l'adresse email");
  copy.innerHTML = ICON_COPY;
  let timer: number | undefined;
  copy.addEventListener('click', async () => {
    const ok = await writeClipboard(mail);
    copy.innerHTML = ok ? ICON_OK : ICON_COPY;
    copy.dataset.state = ok ? 'done' : 'fail';
    copy.setAttribute('aria-label', ok ? 'Adresse copiée' : 'Copie impossible');
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      copy.innerHTML = ICON_COPY; delete copy.dataset.state;
      copy.setAttribute('aria-label', "Copier l'adresse email");
    }, 2000);
  });

  chip.append(a, copy);
  btn.replaceWith(chip);
  a.focus();
  // Le bouton s'insère replié puis s'ouvre : la pastille s'agrandit en douceur.
  void chip.offsetWidth;
  requestAnimationFrame(() => { copy.dataset.in = ''; });
});

/** Années d'expérience : mises à jour à l'ouverture de la page (le build fournit déjà la bonne valeur). */
document.querySelectorAll<HTMLElement>('[data-since]').forEach((el) => {
  const [y, m] = el.dataset.since!.split('-').map(Number);
  const d = new Date();
  el.textContent = `${d.getFullYear() - y - (d.getMonth() + 1 < m ? 1 : 0)} ans+`;
});
