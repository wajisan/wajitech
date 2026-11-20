export function LogoMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M7 16 L19 47 L32 25 L44 47" fill="none" stroke="var(--night)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect className="logo-bar" x="50" y="14" width="7" height="34" rx="1.5" fill="var(--ocre)" />
    </svg>
  );
}

/** Monogramme + mot-symbole. `href` pointe vers le haut de page ou l'accueil. */
export function Logo({ href, label, small }: { href: string; label: string; small?: boolean }) {
  return (
    <a className={small ? 'logo logo--sm' : 'logo'} href={href} aria-label={label}>
      <LogoMark size={small ? 24 : 30} />
      <span className="logo-word">wajitech</span>
    </a>
  );
}
