import type { ReactNode } from 'react';
import { MailReveal } from '../components/MailReveal';
import { Ph } from '../components/Ph';
import cii from '../assets/img/cii.webp';

/** Contenu de la page Mentions légales. Les `<Ph>` sont les champs à compléter. */
export const meta = {
  title: 'Mentions légales | Wajitech',
  description: "Mentions légales du site wajitech.fr : éditeur, hébergement, données personnelles et cookies.",
};

export const head = {
  label: 'Informations légales',
  title: 'Mentions légales',
  updated: 'Dernière mise à jour : novembre 2026',
};

const mail = <MailReveal className="link link-btn" label="afficher l'email" />;

export const blocks: { title: string; paragraphs: ReactNode[]; aside?: ReactNode }[] = [
  {
    title: 'Éditeur du site',
    paragraphs: [
      <>Wajitech, EURL au capital social de 1 500,00 €.</>,
      <>RCS Paris 907 755 136 (SIREN 907 755 136)</>,
      <>Contact : {mail}</>,
    ],
  },
  {
    title: 'Directeur de la publication',
    paragraphs: ['Wadi KIHEL, gérant de Wajitech.'],
  },
  {
    title: 'Hébergement',
    paragraphs: ['Hostinger International Ltd.', '61 Lordou Vironos Street, 6023 Larnaca, Chypre. hostinger.fr'],
  },
  {
    title: 'Assurance et agrément',
    paragraphs: [
      'Wajitech est assurée en responsabilité civile professionnelle.',
      "Wajitech est agréée au titre du Crédit d'impôt innovation (CII).",
    ],
    aside: <img src={cii} width={256} height={256} alt="Agrément Crédit d'impôt innovation" decoding="async" loading="lazy" />,
  },
  {
    title: 'Propriété intellectuelle',
    paragraphs: [
      'Les textes, visuels et la mise en page de ce site appartiennent à Wajitech, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite.',
      'Les logos des clients, écoles, organismes et outils cités appartiennent à leurs propriétaires respectifs. Ils sont reproduits à titre de référence.',
    ],
  },
  {
    title: 'Données personnelles',
    paragraphs: [
      'Ce site ne comporte aucun formulaire. Les informations que vous envoyez par email servent uniquement à répondre à votre demande. Elles ne sont ni cédées ni revendues.',
      <>Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à {mail}. Vous pouvez aussi adresser une réclamation à la CNIL (cnil.fr).</>,
    ],
  },
  {
    title: 'Cookies',
    paragraphs: [
      <>Ce site ne dépose aucun cookie publicitaire ni de mesure d'audience.</>,
    ],
  },
];
