import { Logo } from './Logo';
import { MailReveal } from './MailReveal';
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
          <MailReveal className="foot-link" label="Afficher l'email" />
          <a className="foot-link" href="/mentions-legales">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
}
