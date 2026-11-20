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
  ].join('\n    ');
  return { head, body: renderToStaticMarkup(<Component />), palette: site.palette };
}
