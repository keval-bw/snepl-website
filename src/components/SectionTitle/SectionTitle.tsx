import './SectionTitle.css';

interface Props { eyebrow?: string; title: string; subtitle?: string; tone?: 'dark' | 'light'; align?: 'left' | 'center'; className?: string }

/** Eyebrow, title, grey subtitle stack (Figma gap 18 / 14). */
export function SectionTitle({ eyebrow, title, subtitle, tone = 'dark', align = 'left', className = '' }: Props) {
  return (
    <div className={`section-title section-title--${tone} section-title--${align} ${className}`}>
      {eyebrow && <p className="t-eyebrow section-title__eyebrow">{eyebrow}</p>}
      <div className="section-title__text">
        <h2 className="t-h2">{title}</h2>
        {subtitle && <p className="t-body">{subtitle}</p>}
      </div>
    </div>
  );
}
