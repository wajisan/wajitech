import { Logo } from './Logo';
import { site } from '../content/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <div className="footer-brand">
          <Logo href="#top" label="Wajitech, retour en haut" small />
          <span className="mono">{site.legalLine}</span>
        </div>
        <div className="footer-links">
          <a className="foot-link" href={site.linkedin}>LinkedIn</a>
          <a className="foot-link" href={`mailto:${site.email}`}>Email</a>
          <a className="foot-link" href="/mentions-legales">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
}
