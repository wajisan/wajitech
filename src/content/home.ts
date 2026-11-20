/**
 * Contenu de la page d'accueil.
 * Modifiez les textes ici : aucune connaissance de React n'est nécessaire.
 * Un texte entre crochets « [À COMPLÉTER : ...] » s'affiche comme un champ à remplir.
 */
export const meta = {
  title: 'Wajitech | Développeur full stack & pilotage technique freelance, Paris et remote',
  description:
    "Partenaire tech indépendant à Paris et en remote. Renfort d'équipe, pilotage technique, audit et formation. EURL française, assurée RC Pro, référencée auprès de plusieurs ESN. Contactez-nous.",
};

export const hero = {
  eyebrow: 'Wajitech EURL · Paris & remote',
  badge: 'Référencé auprès de plusieurs ESN',
  /** Lignes du titre ; la dernière passe en couleur d'accent. */
  title: ['Renforcer', 'votre équipe', 'et votre code.'],
  lead: "Une expertise full stack et de pilotage technique, pensée pour s'intégrer à vos équipes sans friction.",
  leadMuted: "À l'aise avec les décideurs comme avec les développeurs, quel que soit le contexte.",
  cta: 'Me contacter',
  more: 'Découvrir →',
  stats: [
    { label: 'Structure', value: 'EURL · RC Pro' },
    { label: 'Agrément', value: 'CII', seal: true },
    { label: 'Localisation', value: 'Paris' },
    { label: 'Remote', value: 'Worldwide' },
  ],
};

export const clients = {
  title: "Ils m'ont fait confiance",
  /** `logo` = nom de la classe CSS lg-* (voir sections.css) */
  items: [
    { name: "L'Oréal", logo: 'lg-loreal', top: true },
    { name: 'Free', logo: 'lg-free', top: true },
    { name: 'Qobuz', logo: 'lg-qobuz', top: true },
    { name: 'AP-HP, Assistance Publique Hôpitaux de Paris', logo: 'lg-aphp', top: true },
    { name: 'MAAF', logo: 'lg-maaf' },
    { name: 'Lilo', logo: 'lg-lilo' },
    { name: 'Groupe Accelis', logo: 'lg-accelis' },
    { name: 'Fokal Studio', logo: 'lg-fokal' },
  ],
};

export const positioning = {
  title: "À l'aise partout où la technique rencontre l'humain.",
  titleMuted: 'Chaque environnement a sa culture, ses outils et ses enjeux.',
  referencedLabel: 'Référencement',
  referenced: ['Comet', 'Crème de la Crème', 'Le Hibou', 'Talent.io', 'Easy Partner', 'Klanik'],
  pillars: [
    { n: '01', title: 'Adaptabilité', text: "Nouvelle stack, nouvelle équipe, nouvelle culture : une intégration rapide, quel que soit l'environnement." },
    { n: '02', title: 'Polyvalence', text: 'Du développement au pilotage technique, de la décision à l\'exécution. Un seul interlocuteur, plusieurs registres.' },
    { n: '03', title: 'Aisance', text: 'Un dialogue fluide avec les équipes techniques, produit, métier et direction. Les sujets complexes deviennent simples à décider.' },
  ],
};

export const schools = {
  text: 'Diplômé de deux grandes écoles : EPITECH et Beijing Jiaotong University.',
  logos: [
    { name: 'EPITECH', logo: 'lg-epitech' },
    { name: 'Beijing Jiaotong University', logo: 'lg-bjtu' },
  ],
};

export const approach = {
  label: '02 · Approche',
  before: 'Avant de coder, je prends le temps de ',
  emphasis: 'comprendre',
  after: ' le besoin.',
  more: "Un CTO, un responsable métier et un Comex n'ont pas besoin du même niveau de détail. L'explication s'adapte à la décision que chacun doit prendre.",
};

export const formats = {
  label: '03 · Formats',
  title: 'Des formats pour chaque besoin.',
  items: [
    { n: '01', title: "Renfort d'équipe", text: 'Une compétence supplémentaire, opérationnelle rapidement.' },
    { n: '02', title: 'Pilotage technique', text: "Cadrage, coordination et accompagnement d'équipe sur la durée d'un projet ou d'une transition." },
    { n: '03', title: 'Audit & conseil', text: 'Un regard extérieur et structuré sur vos applications, vos choix ou votre organisation.' },
    { n: '04', title: 'Formation', text: 'Un accompagnement sur mesure pour faire monter vos équipes en compétence.' },
  ],
};

export const setup = {
  label: 'Bonus',
  title: 'Mon setup du moment',
  tools: [
    { name: 'opencode', icon: 'ti-opencode', iconOnly: true },
    { name: 'Coolify', icon: 'ti-coolify' },
    { name: 'OpenRouter', icon: 'ti-openrouter' },
    { name: 'GitHub', icon: 'ti-github' },
  ],
  stack: ['React', 'TypeScript', 'Vite', 'Bun', 'Node.js'],
};

export const method = {
  label: '04 · Démarrage',
  title: 'Simple, dès le départ',
  steps: [
    { n: '01', title: 'Échange', text: 'Vous partagez votre contexte, on voit ensemble si le fit est bon.' },
    { n: '02', title: 'Cadrage', text: 'Périmètre, format, modalités : validés avant de démarrer.' },
    { n: '03', title: 'Démarrage', text: 'Une intégration fluide, dans vos outils et vos rituels.' },
  ],
};

export const faq = {
  label: '05 · Questions fréquentes',
  items: [
    { q: 'Travaillez-vous en direct ou via une ESN ?', a: 'Les deux, selon votre organisation.' },
    { q: 'Quelle est votre structure ?', a: 'EURL de droit français, assurée en responsabilité civile professionnelle. Attestations sur demande. [À COMPLÉTER : SIREN, conditions de paiement]' },
    { q: 'Comment gérez-vous la confidentialité ?', a: 'Discrétion totale sur les contextes clients. NDA et politiques de sécurité appliqués dès le premier jour.' },
    { q: 'Quelle est votre disponibilité ?', open: true, a: 'Actuellement engagé sur une mission, avec une disponibilité à partir de 2028. Si votre besoin est plus proche, contactez-moi quand même : je peux vous orienter.' },
  ],
};

export const contact = {
  label: '06 · Contact',
  title: ['Un projet ?', 'Parlons-en.'],
  mailCta: 'Écrire à contact@wajitech.fr',
  linkedinCta: 'LinkedIn',
  line: 'EURL française · RC Pro · Référencé auprès de plusieurs ESN · Paris & remote',
};
