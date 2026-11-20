import type { ReactNode } from 'react';

/** Conteneur racine (.wj) + grille de fond visible. */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="wj">
      <div className="gridlines" aria-hidden="true">
        <div className="wrap"><div className="cols"><span /><span /><span /><span /></div></div>
      </div>
      {children}
    </div>
  );
}
