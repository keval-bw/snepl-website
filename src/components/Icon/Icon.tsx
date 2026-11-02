import { resolveIcon } from '@/lib/assets';

export type IconName = 'instagram' | 'facebook' | 'x' | 'linkedin' | 'phone' | 'mail' | 'arrow-up-right' | 'chevron-down' | 'security-check' | 'shield-check' | 'building' | 'drone' | 'arrow-right' | 'target' | 'eye' | 'our-mission' | 'our-vision' | 'factory' | 'manufacture' | 'cog' | 'square-arrow-right' | 'understand' | 'engineer' | 'deliver' | 'material preparation' | 'fabrication & welding' | 'inspection checkpoints' | 'dispatch planning' | 'search' | 'share' | 'close' | 'call-circle' | 'mail-circle' | 'location';

/* Stand-in glyphs. Drop the Figma SVG as src/assets/icons/<name>.svg to override. */
const glyphs: Partial<Record<IconName, JSX.Element>> = {
  instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></>),
  facebook: <path fill="currentColor" d="M12 2a10 10 0 0 0-1.6 19.87v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 12 2z" />,
  x: <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" d="M4 4l16 16M20 4L4 20" />,
  linkedin: (<><path fill="currentColor" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" fill="currentColor" /><circle cx="4" cy="4" r="2" fill="currentColor" /></>),
  phone: <path fill="currentColor" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />,
  mail: (<><rect x="2" y="4" width="20" height="16" rx="2" fill="currentColor" /><path d="M3 7l9 6 9-6" fill="none" stroke="#fff" strokeWidth="1.6" /></>),
  'chevron-down': <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />,
  'security-check': (<><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" /><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8.5 12l2.5 2.5 4.5-5" /></>),
  'shield-check': (<><path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" /><path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M8.5 12l2.5 2.5 4.5-5" /></>),
  building: (<g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M5 21V4h9v17M14 9h5v12M3 21h18M8 8h3M8 12h3M8 16h3" /></g>),
  drone: (<g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="9.5" y="10" width="5" height="4" rx="1" /><path d="M9.5 11L5 7M14.5 11L19 7M9.5 13L5 17M14.5 13L19 17" /><circle cx="4" cy="6" r="2" /><circle cx="20" cy="6" r="2" /><circle cx="4" cy="18" r="2" /><circle cx="20" cy="18" r="2" /></g>),
  'arrow-right': <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />,
  target: (<g fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></g>),
  eye: (<g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></g>),
  factory: <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" d="M3 21V10l6 3V10l6 3V5h4v16H3zM8 17h2M13 17h2" />,
  manufacture: <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" d="M3 21V10l6 3V10l6 3V5h4v16H3zM8 17h2M13 17h2" />,
  cog: (<g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="3.5" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" /></g>),
  'square-arrow-right': (<g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 12h8M12.5 8.5l3.5 3.5-3.5 3.5" /></g>),
  understand: (<g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3h6v1M8.5 13l2.5 2.5 4.5-5" /></g>),
  engineer: (<g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="2.5" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M10 10.5L6.5 7.5M14 10.5l3.5-3M10 13.5l-3.5 3M14 13.5l3.5 3" /></g>),
  deliver: (<g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M2 6h12v10H2zM14 9h4l3 3v4h-7" /><circle cx="6.5" cy="17.5" r="2" fill="#fff" /><circle cx="17.5" cy="17.5" r="2" fill="#fff" /></g>),
  search: (<g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></g>),
  share: (<g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" /></g>),
  close: <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M5 5l14 14M19 5L5 19" />,
  'call-circle': (<><circle cx="12" cy="12" r="11.2" fill="#25d366" stroke="#f4f4f4" strokeWidth="1.2" /><path fill="#fff" d="M16.9 15.3v1.6a1 1 0 0 1-1.1 1 9.9 9.9 0 0 1-4.3-1.5 9.7 9.7 0 0 1-3-3 9.9 9.9 0 0 1-1.5-4.4 1 1 0 0 1 1-1.1h1.6a1 1 0 0 1 1 .9c.1.5.2.9.4 1.4a1 1 0 0 1-.2 1l-.7.7a8 8 0 0 0 3 3l.7-.7a1 1 0 0 1 1-.2c.5.2.9.3 1.4.4a1 1 0 0 1 .9 1z" /></>),
  'mail-circle': (<><defs><linearGradient id="mailg" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#ea3c3c" /><stop offset="1" stopColor="#e52a2a" /></linearGradient></defs><circle cx="12" cy="12" r="11.2" fill="url(#mailg)" stroke="#f4f4f4" strokeWidth="1.2" /><path fill="none" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" d="M6.5 8.5h11v7h-11zM6.8 8.8l5.2 4 5.2-4" /></>),
  location: (<g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.6" /></g>),
  'arrow-up-right': <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />,
};

interface Props { name: IconName; size?: number; className?: string }

export function Icon({ name, size = 20, className }: Props) {
  const src = resolveIcon(name);
  if (src) return <img src={src} width={size} height={size} alt="" aria-hidden="true" className={className} />;
  const glyph = glyphs[name];
  if (!glyph) throw new Error(`Missing SVG asset or fallback glyph for icon "${name}"`);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      {glyph}
    </svg>
  );
}
