# wajitech.fr

Site vitrine statique (accueil + mentions légales). React + TypeScript **au build uniquement** :
les pages sont pré-rendues en HTML, le navigateur reçoit du HTML + CSS inliné et ~1 Ko de JS (menu mobile).

```bash
npm install
npm run dev        # développement
npm run build      # génère dist/
npm run preview    # teste dist/
npm run typecheck
```

## Modifier le contenu
- `src/content/site.ts` : email, LinkedIn, navigation, palette (`terracotta` | `ocre`)
- `src/content/home.ts` : tous les textes de l'accueil. `[À COMPLÉTER : …]` s'affiche en champ à remplir
- Email : jamais en clair dans le HTML (XOR + bouton « afficher l'email », `src/client/mail.ts`). Il suffit de changer `site.email`
- Expérience : calculée depuis `site.careerStart` (build + navigateur)
- SEO / IA : JSON-LD dans `src/entry-server.tsx`, `public/llms.txt`, `robots.txt`, `sitemap.xml`, `og.png`
- `src/content/legal.tsx` : mentions légales (les `<Ph>` sont à compléter)

## CSS (variables `--var`)
- `src/styles/tokens.css` : **le design system** (couleurs, typo, espacements, rayons, ombres). Autonome :
  il pourra être servi par `design.wajitech.fr/tokens.css` et remplacé ici par un `<link>` dans les deux `index.html`.
- `src/styles/site-tokens.css` : quelques variables propres au site
- `base.css` (reset, typo, grille, animations) · `components.css` · `sections.css`

## Performance
Polices auto-hébergées (latin, woff2, 2 préchargées), images WebP, CSS inliné, zéro framework côté client,
animations 100 % CSS (désactivées avec `prefers-reduced-motion`).

## Déploiement
Servir `dist/`. `/mentions-legales` correspond à `dist/mentions-legales/index.html` : le serveur doit servir
les index de dossier (par défaut sur nginx/Coolify static).
