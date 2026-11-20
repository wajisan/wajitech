import type { ReactNode } from 'react';
import { encodedMail, mailKey } from '../content/site';

/**
 * Bouton « faire apparaître l'email » : l'adresse n'existe pas dans le HTML.
 * Au clic, src/client/mail.ts la reconstruit et remplace le bouton par un lien mailto.
 */
export function MailReveal({ className, label, children }: { className?: string; label: string; children?: ReactNode }) {
  return (
    <>
      <button type="button" className={className} data-mail={encodedMail} data-key={mailKey}>{label}</button>
      <noscript> {children ?? "(JavaScript requis pour afficher l'email)"}</noscript>
    </>
  );
}
