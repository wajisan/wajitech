import type { ReactNode } from 'react';
import { site } from './site';
import { Ph } from '../components/Ph';

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

const mail = <a className="link" href={`mailto:${site.email}`}>{site.email}</a>;

export const blocks: { title: string; paragraphs: ReactNode[] }[] = [
  {
    title: 'Éditeur du site',
    paragraphs: [
      <>Wajitech, EURL au capital de <Ph>capital</Ph> €.</>,
      <>Siège social : <Ph>adresse complète</Ph>, Paris.</>,
      <>RCS Paris <Ph>numéro</Ph> · SIREN <Ph /> · TVA intracommunautaire <Ph /></>,
      <>Contact : {mail}</>,
    ],
  },
  {
    title: 'Directeur de la publication',
    paragraphs: [<><Ph>prénom et nom</Ph>, gérant de Wajitech.</>],
  },
  {
    title: 'Hébergement',
    paragraphs: [<Ph>nom de l'hébergeur du serveur</Ph>, <Ph>adresse et téléphone de l'hébergeur</Ph>],
  },
  {
    title: 'Assurance et agrément',
    paragraphs: [
      <>Wajitech est assurée en responsabilité civile professionnelle auprès de <Ph>nom de l'assureur</Ph>.</>,
      "Wajitech est agréée au titre du Crédit d'impôt innovation (CII).",
    ],
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
      <>Ce site ne dépose aucun cookie publicitaire ni de mesure d'audience. <Ph>à modifier si un outil de statistiques est ajouté</Ph></>,
    ],
  },
];
