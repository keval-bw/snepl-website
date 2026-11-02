import type { AssetKey } from './assetManifest';
import type { IconName } from '@/components/Icon';

// Copy is verbatim from Figma (including its typos, e.g. "tones").
export const heroStats = [
  { value: '40+', label: 'Years Industry Presence' },
  { value: '4', label: 'Manufacturing  Facilities' },
  { value: '90K+', label: 'SQ. FT. Factory Footprint' },
  { value: '1,600', label: 'Monthly Output Capacity' },
  { value: '20+', label: 'Certified Product Lines' },
] as const;

export interface Chapter {
  eyebrow: string; title: string; text: string; image: AssetKey; textFirst?: boolean;
  overlay: { name: string; left: number; top: number; w: number; h: number };
}
export const chapters: readonly Chapter[] = [
  {
    eyebrow: 'Chapter 01', title: 'A Legacy Forged in Steel', image: 'home-chapter-1',
    text: 'Forty years in business as a sheet metal trader gave us an unmatched understanding of steel its grades, its behavior, its supply chain. That heritage is the foundation everything at SNEPL stands on.',
    overlay: { name: 'home-chapter-1-overlay', left: 388, top: 0, w: 222, h: 344 },
  },
  {
    eyebrow: 'Chapter 02', title: 'Manufacturing Might Since 2008', image: 'home-chapter-2', textFirst: true,
    text: 'We entered manufacturing in 2008 with shuttering, scaffolding, staging and accessories. Today, 4 production plants spread over 90,000 sq. ft. deliver an edge in capacity, lower lead times and competitive rates.',
    overlay: { name: 'home-chapter-2-overlay', left: -97, top: -2, w: 237, h: 346 },
  },
  {
    eyebrow: 'Chapter 03', title: 'Engineering Discipline', image: 'home-chapter-3',
    text: 'Industrial engineering principles and rigorous safety procedures for workers and machines ensure high throughput and less wastage resulting in 1,600 tonnes of monthly production and superior quality material.',
    overlay: { name: 'home-chapter-3-overlay', left: 344, top: -8, w: 245, h: 360 },
  },
];

export const whyCards: readonly { icon: IconName; title: string; text: string }[] = [
  { icon: 'shield-check', title: 'Standards-led', text: 'Products engineered with IS 1161:2014 and IS 1239 standards in mind.' },
  { icon: 'building', title: 'Built at scale', text: 'Four production plants and 90,000+ sq. ft. of manufacturing capacity.' },
  { icon: 'drone', title: 'Built around you', text: 'Custom sizes and project-fit fabrication for real site requirements.' },
];

export const categoryTiles: readonly { label: string; image: AssetKey; wide?: boolean }[] = [
  { label: 'Scaffolding', image: 'home-category-scaffolding' },
  { label: 'Centering', image: 'home-category-centering' },
  { label: 'Formwork', image: 'home-category-formwork' },
  { label: 'Accessories', image: 'home-category-accessories' },
  { label: 'Construction Equipment', image: 'home-category-equipment', wide: true },
];

export const industries: readonly { label: string; image: AssetKey }[] = [
  { label: 'Industrial Projects', image: 'industry-industrial-projects' },
  { label: 'Commercial Construction', image: 'industry-commercial-construction' },
  { label: 'Highways', image: 'industry-highways' },
  { label: 'Railways Structure', image: 'industry-railways-structure' },
  { label: 'Metro Projects', image: 'industry-metro-projects' },
  { label: 'Bridges & Flyover', image: 'industry-bridges-flyover' },
  { label: 'Facade & External Works', image: 'industry-facade-external-works' },
  { label: 'Electrical & Plumbing Works', image: 'industry-electrical-plumbing-works' },
  { label: 'Renovation & Restoration', image: 'industry-renovation-restoration' },
  { label: 'Shipbuilding & Oil Refineries', image: 'industry-shipbuilding-oil-refineries' },
  { label: 'Event & Temporary Structures', image: 'industry-event-temporary-structures' },
];
