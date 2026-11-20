import { rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, createServer, type Plugin, type ViteDevServer } from 'vite';

/**
 * Pré-rendu statique : les composants React sont rendus en HTML au build.
 * Le navigateur reçoit du HTML + CSS pur, sans React (JS total < 1 Ko).
 * Les templates index.html / mentions-legales/index.html contiennent
 * <!--app-head--> et <!--app-body--> qui sont remplacés par le rendu.
 */
/** /mentions-legales -> /mentions-legales/index.html (dev et preview ; en production le serveur sert le dossier). */
const cleanUrls = (req: { url?: string }, _res: unknown, next: () => void) => {
  if (req.url === '/mentions-legales') req.url = '/mentions-legales/index.html';
  next();
};

function prerender(): Plugin {
  let ssr: ViteDevServer | undefined;
  let isBuild = false;
  return {
    name: 'wajitech:prerender',
    configResolved(cfg) { isBuild = cfg.command === 'build'; },
    configureServer(server) {
      ssr = server;
      server.middlewares.use(cleanUrls);
    },
    configurePreviewServer(server) { server.middlewares.use(cleanUrls); },
    async buildStart() {
      if (!isBuild || ssr) return;
      ssr = await createServer({
        configFile: false,
        appType: 'custom',
        logLevel: 'silent',
        server: { middlewareMode: true, hmr: false, watch: null },
        optimizeDeps: { noDiscovery: true },
      });
    },
    async closeBundle() { if (isBuild) await ssr?.close(); },
    transformIndexHtml: {
      order: 'pre',
      async handler(html, ctx) {
        const { render } = await ssr!.ssrLoadModule('/src/entry-server.tsx');
        const page = ctx.path.includes('mentions-legales') ? 'legal' : 'home';
        const out = render(page);
        return html
          .replace('<!--app-head-->', out.head)
          .replace('<!--app-body-->', out.body)
          .replace('<html ', `<html data-palette="${out.palette}" `);
      },
    },
  };
}

/** Production : CSS inlinée dans le HTML (zéro requête bloquante) + préchargement des 2 polices critiques. */
function inlineCriticalAssets(): Plugin {
  const inlined = new Set<string>();
  let outDir = 'dist';
  return {
    name: 'wajitech:inline-critical',
    apply: 'build',
    enforce: 'post',
    configResolved(cfg) { outDir = resolve(cfg.root, cfg.build.outDir); },
    closeBundle() { for (const f of inlined) rmSync(resolve(outDir, f), { force: true }); },
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle ?? {};
        html = html.replace(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g, (m, href: string) => {
          const asset = bundle[href.replace(/^\//, '')];
          if (!asset || asset.type !== 'asset') return m;
          inlined.add(asset.fileName);
          return `<style>${asset.source}</style>`;
        });
        html = html.replace(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/g, (m, src: string) => {
          const chunk = bundle[src.replace(/^\//, '')];
          if (!chunk || chunk.type !== 'chunk') return m;
          inlined.add(chunk.fileName);
          return `<script type="module">${chunk.code}</script>`;
        });
        const preload = Object.keys(bundle)
          .filter((f) => /\/(archivo|inter-tight)-[\w-]+\.woff2$/.test(f))
          .map((f) => `<link rel="preload" href="/${f}" as="font" type="font/woff2" crossorigin>`)
          .join('');
        return html.replace('</head>', `${preload}</head>`);
      },
    },
  };
}

export default defineConfig({
  plugins: [prerender(), inlineCriticalAssets()],
  build: {
    target: 'es2022',
    cssMinify: 'lightningcss',
    assetsInlineLimit: 0,
    rollupOptions: {
      input: { main: 'index.html', 'mentions-legales': 'mentions-legales/index.html' },
    },
  },
});
