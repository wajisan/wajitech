import { renderToStaticMarkup } from 'react-dom/server';
import { Home } from './pages/Home';
import { Legal } from './pages/Legal';
import { site } from './content/site';
import * as home from './content/home';
import * as legal from './content/legal';

export type PageId = 'home' | 'legal';

const pages = {
  home: { Component: Home, meta: home.meta, path: '/' },
  legal: { Component: Legal, meta: legal.meta, path: '/mentions-legales' },
};

/** Données structurées (schema.org) : lues par Google et les assistants IA. Jamais d'email en clair. */
function jsonLd(id: PageId, url: string) {
  const org = {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: 'Wajitech EURL',
    url: site.url + '/',
    logo: `${site.url}/favicon.svg`,
    image: `${site.url}/og.png`,
    description: home.meta.description,
    areaServed: [{ '@type': 'City', name: 'Paris' }, 'FR', 'Worldwide'],
    address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
    knowsAbout: [...home.setup.stack.map((t) => t.name), 'Développement full stack', 'Pilotage technique', 'Audit technique', 'Formation'],
    foundingDate: `${site.careerStart.year}-${String(site.careerStart.month).padStart(2, '0')}`,
    makesOffer: home.formats.items.map((f) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: f.title, description: f.text },
    })),
  };
  const graph: object[] = [
    org,
    { '@type': 'WebSite', '@id': `${site.url}/#website`, url: site.url + '/', name: site.name, inLanguage: 'fr-FR', publisher: { '@id': org['@id'] } },
  ];
  if (id === 'home') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: home.faq.items.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.a } })),
    });
  } else {
    graph.push({ '@type': 'WebPage', '@id': `${url}#webpage`, url, name: legal.meta.title, isPartOf: { '@id': `${site.url}/#website` }, inLanguage: 'fr-FR' });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** Rend une page en HTML statique (appelé au build par vite.config.ts, jamais dans le navigateur). */
export function render(id: PageId) {
  const { Component, meta, path } = pages[id];
  const url = site.url + (path === '/' ? '/' : path);
  const head = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:locale" content="fr_FR">`,
    `<meta property="og:site_name" content="${site.name}">`,
    `<meta property="og:title" content="${esc(meta.title)}">`,
    `<meta property="og:description" content="${esc(meta.description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${site.url}/og.png">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Wajitech, développeur full stack et pilotage technique freelance">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(meta.title)}">`,
    `<meta name="twitter:description" content="${esc(meta.description)}">`,
    `<meta name="twitter:image" content="${site.url}/og.png">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`,
    `<meta name="author" content="Wajitech">`,
    `<link rel="alternate" hreflang="fr" href="${url}">`,
    `<link rel="alternate" hreflang="x-default" href="${url}">`,
    `<link rel="alternate" type="text/plain" href="${site.url}/llms.txt" title="llms.txt">`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd(id, url))}</script>`,
  ].join('\n    ');
  return { head, body: renderToStaticMarkup(<Component />), palette: site.palette };
}
