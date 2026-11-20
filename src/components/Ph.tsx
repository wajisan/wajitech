import type { ReactNode } from 'react';

/** Champ « [À COMPLÉTER : …] » : à remplacer par le vrai contenu avant la mise en ligne. */
export function Ph({ children, dark }: { children?: ReactNode; dark?: boolean }) {
  return <span className={dark ? 'ph dark' : 'ph'}>[À COMPLÉTER{children ? <> : {children}</> : null}]</span>;
}

/** Transforme les « [À COMPLÉTER : …] » d'une chaîne en champs <Ph>. */
export function withPlaceholders(text: string, dark?: boolean): ReactNode {
  return text.split(/(\[À COMPLÉTER[^\]]*\])/).map((part, i) => {
    const m = part.match(/^\[À COMPLÉTER(?: : ([^\]]*))?\]$/);
    return m ? <Ph key={i} dark={dark}>{m[1]}</Ph> : part;
  });
}
