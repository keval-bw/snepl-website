import { Link } from 'react-router-dom';
import { Img } from '@/components/Img';

interface Props { variant: 'header' | 'footer'; asLink?: boolean }

const size = { header: { w: 185, h: 47 }, footer: { w: 201, h: 51 } } as const;

export function Logo({ variant, asLink = true }: Props) {
  const { w, h } = size[variant];
  const art = (
    <div style={{ width: w, height: h, flexShrink: 0 }}>
      <Img name={variant === 'header' ? 'logo-header' : 'logo-footer'} alt="SNEPL - Shree Neelkanth Engineers Pvt Ltd" fit="contain" />
    </div>
  );
  return asLink ? <Link to="/" aria-label="SNEPL home">{art}</Link> : art;
}
