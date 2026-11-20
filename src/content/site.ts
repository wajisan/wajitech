/** Informations générales du site : un seul endroit à modifier. */
export const site = {
  name: 'Wajitech',
  url: 'https://wajitech.fr',
  email: 'contact@wajitech.fr',
  linkedin: 'https://www.linkedin.com/',
  year: 2026,
  legalLine: '© 2026 Wajitech EURL · Paris · Assurée RC Pro · Agréée CII',
  lang: 'fr',
  /** « terracotta » (par défaut) ou « ocre » : voir tokens.css */
  palette: 'terracotta' as 'terracotta' | 'ocre',
} as const;

export const nav = [
  { label: 'Positionnement', href: '#references' },
  { label: 'Formats', href: '#missions' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const;
