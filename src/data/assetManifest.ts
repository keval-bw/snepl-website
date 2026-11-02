/**
 * Every raster image used by the design, keyed by a stable name.
 * To replace a placeholder, drop a file named `<key>.(webp|jpg|png|svg)`
 * into src/assets/images. <Img name="<key>" /> picks it up automatically.
 * Sizes are the Figma frame sizes (desktop, 1x); `node` is the Figma node id.
 */
export interface AssetSpec {
  w: number;
  h: number;
  node: string;
  radius?: number;
}

export const assetManifest = {
  // Shared
  'logo-header': { w: 185, h: 47, node: '1:151' },
  'logo-footer': { w: 201, h: 51, node: '1:463' },
  // Home
  'home-hero': { w: 1420, h: 800, node: '1:149' },
  'home-chapter-1': { w: 517, h: 344, node: '1:298', radius: 10 },
  'home-chapter-2': { w: 517, h: 344, node: '1:310', radius: 10 },
  'home-chapter-3': { w: 517, h: 344, node: '1:314', radius: 10 },
  'home-family-scaffolding': { w: 747, h: 521, node: '1:320', radius: 10 },
  // Same source photo as -accessories (Figma crops one tall image into two tiles); this is the top crop.
  'home-family-formwork': { w: 483, h: 256, node: '1:321', radius: 10 },
  'home-family-accessories': { w: 483, h: 255, node: '1:322', radius: 10 },
  'home-category-scaffolding': { w: 615, h: 255, node: '1:335', radius: 10 },
  'home-category-centering': { w: 615, h: 255, node: '1:343', radius: 10 },
  'home-category-formwork': { w: 615, h: 255, node: '1:352', radius: 10 },
  'home-category-accessories': { w: 615, h: 255, node: '1:360', radius: 10 },
  'home-category-equipment': { w: 1240, h: 255, node: '1:368', radius: 10 },
  'home-cta-bg': { w: 1440, h: 454, node: '1:400' },
  // Home: industries carousel (11 cards, 312 x 415)
  'industry-industrial-projects': { w: 312, h: 415, node: '1:65', radius: 10 },
  'industry-commercial-construction': { w: 312, h: 415, node: '1:67', radius: 10 },
  'industry-highways': { w: 312, h: 415, node: '1:69', radius: 10 },
  'industry-railways-structure': { w: 312, h: 415, node: '1:71', radius: 10 },
  'industry-metro-projects': { w: 312, h: 415, node: '1:73', radius: 10 },
  'industry-bridges-flyover': { w: 312, h: 415, node: '1:75', radius: 10 },
  'industry-facade-external-works': { w: 312, h: 415, node: '1:77', radius: 10 },
  'industry-electrical-plumbing-works': { w: 312, h: 415, node: '1:79', radius: 10 },
  'industry-renovation-restoration': { w: 312, h: 415, node: '1:81', radius: 10 },
  'industry-shipbuilding-oil-refineries': { w: 312, h: 415, node: '1:83', radius: 10 },
  'industry-event-temporary-structures': { w: 312, h: 415, node: '1:85', radius: 10 },
  // About
  'about-infra': { w: 517, h: 344, node: '1:695', radius: 10 },
  'about-banner': { w: 1440, h: 573, node: '1:746' },
  'about-difference-logo': { w: 246, h: 69, node: '1:904' },
  // Manufacturing
  'mfg-intro': { w: 630, h: 419, node: '1:1375', radius: 10 },
  'mfg-step-1': { w: 512, h: 272, node: 'mfg-step-1', radius: 10 },
  'mfg-step-2': { w: 512, h: 272, node: 'mfg-step-2', radius: 10 },
  'mfg-step-3': { w: 512, h: 272, node: 'mfg-step-3', radius: 10 },
  'mfg-step-4': { w: 512, h: 272, node: 'mfg-step-4', radius: 10 },
  'mfg-step-5': { w: 512, h: 272, node: 'mfg-step-5', radius: 10 },
  'mfg-step-6': { w: 512, h: 272, node: 'mfg-step-6', radius: 10 },
  'mfg-step-7': { w: 512, h: 272, node: 'mfg-step-7', radius: 10 },
  'mfg-step-8': { w: 512, h: 272, node: 'mfg-step-8', radius: 10 },
  'mfg-step-9': { w: 512, h: 272, node: 'mfg-step-9', radius: 10 },
  // Applications (200 x 120 line illustrations)
  'app-illustration-access': { w: 200, h: 120, node: '1:2449' },
  'app-illustration-support': { w: 200, h: 120, node: '1:2467' },
  'app-illustration-forming': { w: 200, h: 120, node: '1:2488' },
  // Page heroes
  'about-hero': { w: 1420, h: 620, node: '1:557' },
  'manufacturing-hero': { w: 1420, h: 620, node: '1:1143' },
  'products-hero': { w: 1420, h: 458, node: '1:1613' },
  'applications-hero': { w: 1420, h: 620, node: '1:2208' },
  'contact-hero': { w: 1420, h: 458, node: '1:2604' },
} satisfies Record<string, AssetSpec>;

/** Product cards (image 296.5 x 222.4). Slug doubles as asset key `product-<slug>`. */
export const PRODUCT_IMAGE_SIZE = { w: 296.5, h: 222.4 } as const;
export const productSlugs = [
  'ms-adjustable-props', 'cuplock-system', 'h-frame', 'ms-platform',
  'scaffolding-ladder', 'telescopic-span', 'centering-plates', 'wallform',
  'round-and-box', 'adjustable-modular-box', 'haunch', 'girder',
  'crash-barrier', 'shuttering-plywood', 'bracing-tubes', 'pipe-bracing',
  'tie-rods', 'column-clamps', 'safety-brackets', 'wall-brackets', 'wheelbarrows', 'concrete-trays',
] as const;

export type AssetKey = keyof typeof assetManifest | `product-${(typeof productSlugs)[number]}`;

export function getAssetSpec(key: string): AssetSpec | undefined {
  if (key in assetManifest) return (assetManifest as Record<string, AssetSpec>)[key];
  if (key.startsWith('product-')) return { ...PRODUCT_IMAGE_SIZE, node: key };
  return undefined;
}
