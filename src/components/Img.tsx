/** Image décorative (palmes, grain, arche) : jamais lue par les lecteurs d'écran, chargée en différé. */
export function Decor({ src, w, h, className, eager }: { src: string; w: number; h: number; className?: string; eager?: boolean }) {
  return (
    <img
      className={className}
      src={src}
      width={w}
      height={h}
      alt=""
      aria-hidden="true"
      decoding="async"
      loading={eager ? undefined : 'lazy'}
      fetchPriority={eager ? 'low' : undefined}
    />
  );
}
