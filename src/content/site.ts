/** Informations générales du site : un seul endroit à modifier. */
export const site = {
  name: 'Wajitech',
  url: 'https://wajitech.fr',
  email: 'contact@wajitech.fr',
  linkedin: 'https://www.linkedin.com/in/wadi-kihel-6575a47a/',
  year: 2026,
  /** Début de l'activité : sert au calcul automatique des années d'expérience. */
  careerStart: { year: 2016, month: 9 },
  legalLine: '© 2026 Wajitech EURL · Paris · Assurée RC Pro · Agréée CII',
  lang: 'fr',
  /** « terracotta » (par défaut) ou « ocre » : voir tokens.css */
  palette: 'terracotta' as 'terracotta' | 'ocre',
} as const;

export const nav = [
  { label: 'Références', href: '#clients' },
  { label: 'Services', href: '#missions' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const;

/** Années d'expérience complètes depuis septembre 2016 (recalculé à chaque build, puis côté navigateur). */
export function experienceYears(now = new Date()): number {
  const { year, month } = site.careerStart;
  return now.getFullYear() - year - (now.getMonth() + 1 < month ? 1 : 0);
}

/**
 * Email jamais écrit en clair dans le HTML : XOR avec une clé, en hexadécimal.
 * Le script le décode seulement après un clic (les robots qui lisent le HTML ne voient rien).
 */
export const mailKey = 'wj-7f3a91c2';
export const encodedMail = [...site.email]
  .map((ch, i) => (ch.charCodeAt(0) ^ mailKey.charCodeAt(i % mailKey.length)).toString(16).padStart(2, '0'))
  .join('');
