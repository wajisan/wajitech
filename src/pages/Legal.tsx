import { Shell } from '../components/Shell';
import { Logo } from '../components/Logo';
import { site } from '../content/site';
import { head, blocks } from '../content/legal';

export function Legal() {
  return (
    <Shell>
      <header className="nav">
        <nav className="nav-inner" aria-label="Navigation">
          <Logo href="/" label="Wajitech, retour à l'accueil" />
          <a className="btn btn-ghost btn-sm" href="/">← Retour au site</a>
        </nav>
      </header>
      <main className="legal">
        <div className="wrap stack-y">
          <div className="cols legal-head">
            <p className="mono">{head.label}</p>
            <div className="legal-title">
              <h1 className="disp">{head.title}<span className="acc">.</span></h1>
              <p className="mono">{head.updated}</p>
            </div>
          </div>
          <div>
            {blocks.map((b) => (
              <section key={b.title} className="block">
                <h2>{b.title}</h2>
                <div className="txt">{b.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="wrap legal-foot">
          <span className="mono">{site.legalLine}</span>
          <a className="btn btn-ghost btn-sm" href="/">← Retour au site</a>
        </div>
      </footer>
    </Shell>
  );
}
