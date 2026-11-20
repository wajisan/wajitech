import { Shell } from '../components/Shell';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Decor } from '../components/Img';
import { withPlaceholders } from '../components/Ph';
import { site } from '../content/site';
import * as c from '../content/home';

import palmShadow from '../assets/img/palm-shadow.webp';
import palmLight from '../assets/img/palm-filigrane.webp';
import argile from '../assets/img/argile.webp';
import cii from '../assets/img/cii.webp';

export function Home() {
  return (
    <Shell>
      <Nav />
      <main>
        <Hero />
        <Clients />
        <Positioning />
        <Schools />
        <Approach />
        <Formats />
        <Setup />
        <Method />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </Shell>
  );
}

function Hero() {
  const { hero } = c;
  const lines = hero.title;
  return (
    <section id="top" className="hero">
      <Decor src={palmShadow} w={1100} h={1067} className="hero-palm" eager />
      <div className="wrap hero-inner">
        <div className="hero-top intro">
          <p className="mono">{hero.eyebrow}</p>
          <a className="dispo" href="#contact"><span className="dot-plan" />{hero.badge}</a>
        </div>
        <h1 className="disp h-hero">
          {lines.map((l, i) => (
            <span key={l} className={`line l${i + 1}`}><span className={i === lines.length - 1 ? 'acc' : undefined}>{l}</span></span>
          ))}
        </h1>
        <div className="cols hero-lead-row">
          <p className="hero-sub lite intro i2">{hero.lead} <span className="mute">{hero.leadMuted}</span></p>
          <div className="hero-ctas intro i3">
            <a className="btn btn-fill" href="#contact">{hero.cta}</a>
            <a className="text-link" href="#references">{hero.more}</a>
          </div>
        </div>
        <ul className="cols stats intro i4">
          {hero.stats.map((s) => (
            <li key={s.label} className="stat">
              <span className="mono">{s.label}</span>
              {s.seal ? (
                <span className="stat-cii">
                  <span className="disp stat-v">{s.value}</span>
                  <img src={cii} width={256} height={256} alt="Agrément Crédit d'impôt innovation" decoding="async" loading="lazy" />
                </span>
              ) : (
                <span className="disp stat-v">{s.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Clients() {
  const { clients } = c;
  return (
    <section aria-label="Principaux clients" className="clients-section">
      <div className="wrap stack-y stack-y--tight">
        <div className="cols sec-head reveal">
          <h2 className="lite h-sec">{clients.title}<span className="acc">.</span></h2>
        </div>
        <ul className="clients">
          {clients.items.map((it, i) => (
            <li key={it.logo} className={`client-cell${it.top ? ' top' : ''} reveal${i % 3 === 1 ? ' r2' : i % 3 === 2 ? ' r3' : ''}`}>
              <span className={`client-logo ${it.logo}`} role="img" aria-label={it.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Positioning() {
  const p = c.positioning;
  return (
    <section id="references" className="section" style={{ paddingBottom: 'clamp(88px, 9cqi, 144px)' }}>
      <div className="wrap stack-y">
        <div className="cols sec-head reveal">
          <h2 className="lite h-sec">{p.title} <span className="mute">{p.titleMuted}</span></h2>
        </div>
        <div className="esn reveal">
          <p className="mono label">{p.referencedLabel}</p>
          <ul className="esn-list">{p.referenced.map((n) => <li key={n}>{n}</li>)}</ul>
        </div>
        <div className="refs">
          {p.pillars.map((it, i) => (
            <article key={it.n} className={`card pillar reveal${i === 1 ? ' r2' : i === 2 ? ' r3' : ''}`}>
              {i === 0 && <Decor src={palmShadow} w={1100} h={1067} className="card-palm" />}
              <div className="card-top"><span className="role">{it.n}</span></div>
              <div className="card-body">
                <h3 className="disp card-name">{it.title}</h3>
                <p className="fact">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schools() {
  const s = c.schools;
  return (
    <section className="schools" aria-label="Formation">
      <div className="wrap reveal">
        <p className="lite">{s.text}</p>
        <div className="school-logos">
          {s.logos.map((l) => <span key={l.logo} className={`client-logo ${l.logo}`} role="img" aria-label={l.name} />)}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const a = c.approach;
  return (
    <section className="quote grain section" aria-label="Approche">
      <Decor src={palmLight} w={1000} h={971} className="quote-palm par2" />
      <div className="wrap quote-grid">
        <div className="quote-body reveal">
          <p className="mono">{a.label}</p>
          <blockquote>
            <p className="lite quote-text">{a.before}<em>{a.emphasis}</em>{a.after}</p>
          </blockquote>
          <p className="quote-more">{a.more}</p>
        </div>
        <div className="quote-arch reveal r2"><Decor src={argile} w={900} h={1200} /></div>
      </div>
    </section>
  );
}

function Formats() {
  const f = c.formats;
  return (
    <section id="missions" className="section">
      <div className="wrap stack-y">
        <div className="cols sec-head reveal">
          <p className="mono label sec-label">{f.label}</p>
          <h2 className="lite h-sec">{f.title}</h2>
        </div>
        <div className="missions">
          {f.items.map((it, i) => (
            <article key={it.n} className={`mission reveal${i % 2 ? ' r2' : ''}`}>
              <span className="mono">{it.n}</span>
              <h3 className="disp">{it.title}</h3>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const Plus = () => <span className="plus" aria-hidden="true">+</span>;

function Setup() {
  const s = c.setup;
  return (
    <section className="section" aria-label="Setup du moment" style={{ paddingTop: 0 }}>
      <div className="wrap stack-y stack-y--tight">
        <div className="cols sec-head reveal">
          <p className="mono label sec-label">{s.label}</p>
          <h2 className="lite h-sec">{s.title}<span className="acc">.</span></h2>
        </div>
        <div className="setup reveal">
          <div className="setup-row">
            <span className="mono">Outils</span>
            <div className="chain">
              {s.tools.map((t, i) => (
                <span key={t.name} style={{ display: 'contents' }}>
                  {i > 0 && <Plus />}
                  <span className="tool">
                    {t.iconOnly
                      ? <span className={`tool-ico ${t.icon}`} role="img" aria-label={t.name} />
                      : <><span className={`tool-ico ${t.icon}`} aria-hidden="true" />{t.name}</>}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div className="setup-row">
            <span className="mono">Stack</span>
            <div className="chain">
              {s.stack.map((t, i) => (
                <span key={t} style={{ display: 'contents' }}>{i > 0 && <Plus />}<span className="tag">{t}</span></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const m = c.method;
  return (
    <section className="section" aria-label="Méthode" style={{ paddingTop: 0 }}>
      <div className="wrap stack-y">
        <div className="cols sec-head reveal">
          <p className="mono label sec-label">{m.label}</p>
          <h2 className="lite h-sec">{m.title}<span className="acc">.</span></h2>
        </div>
        <ol className="cols steps">
          {m.steps.map((s, i) => (
            <li key={s.n} className={`step reveal${i === 1 ? ' r2' : i === 2 ? ' r3' : ''}`} style={{ gridColumn: i + 2 }}>
              <span className="disp num">{s.n}</span>
              <h3 className="disp">{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  const f = c.faq;
  return (
    <section id="faq" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap stack-y">
        <div className="cols sec-head reveal">
          <p className="mono label" style={{ paddingTop: 27, alignSelf: 'start' }}>{f.label}</p>
          <div className="faq">
            {f.items.map((q) => (
              <details key={q.q} className="qa" open={'open' in q ? q.open : undefined}>
                <summary>{q.q}</summary>
                <p>{withPlaceholders(q.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const k = c.contact;
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="contact-card reveal">
          <Decor src={palmLight} w={1000} h={971} className="contact-palm" />
          <div className="contact-inner">
            <p className="mono">{k.label}</p>
            <h2 className="disp h-contact">{k.title[0]}<br /><span className="acc">{k.title[1]}</span></h2>
            <div className="contact-ctas">
              <a className="btn btn-fill btn-lg" href={`mailto:${site.email}`}>{k.mailCta}</a>
              <a className="btn btn-ghost-light btn-lg btn-linkedin" href={site.linkedin}><span className="in" aria-hidden="true">in</span>{k.linkedinCta}</a>
            </div>
            <p className="mono small">{k.line}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
