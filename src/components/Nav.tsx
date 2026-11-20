import { Logo } from './Logo';
import { nav } from '../content/site';

export function Nav() {
  return (
    <header className="nav">
      <nav className="nav-inner" aria-label="Navigation principale">
        <Logo href="#top" label="Wajitech, retour en haut" />
        <div className="nav-links">
          {nav.map((l) => <a key={l.href} className="nav-link" href={l.href}>{l.label}</a>)}
        </div>
        <a className="btn btn-fill btn-sm nav-cta" href="#contact">Me contacter</a>
        <button className="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
          <svg className="i-open" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 9h16M4 15h16" /></svg>
          <svg className="i-close" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
      </nav>
      <div className="mobile-menu" id="mobile-menu" hidden>
        {nav.map((l) => <a key={l.href} className="nav-link" href={l.href}>{l.label}</a>)}
        <a className="btn btn-fill" href="#contact">Me contacter</a>
      </div>
    </header>
  );
}
