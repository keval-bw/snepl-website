import './ImagePlaceholder.css';

interface Props {
  name: string;
  width?: number;
  height?: number;
  radius?: number;
  className?: string;
}

/** Visible stand-in that keeps the exact Figma box until the real image is supplied. */
export function ImagePlaceholder({ name, width, height, radius, className = '' }: Props) {
  const ratio = width && height ? `${width} / ${height}` : undefined;
  return (
    <div
      className={`img-placeholder ${className}`}
      role="img"
      aria-label={`Placeholder for ${name}`}
      data-asset={name}
      style={{ aspectRatio: ratio, borderRadius: radius }}
    >
      <span>{name}</span>
      {width && height && <small>{Math.round(width)} x {Math.round(height)}</small>}
    </div>
  );
}
