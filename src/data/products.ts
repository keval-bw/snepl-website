import type { AssetKey } from './assetManifest';
import { productSlugs } from './assetManifest';
import catalogueProducts from './productCatalogue.json';

export type ProductSlug = (typeof productSlugs)[number];
export type CategoryId = 'scaffolding' | 'centering' | 'formwork' | 'tubes' | 'accessories';
type CatalogueProduct = (typeof catalogueProducts)[number];

export interface Product {
  slug: ProductSlug;
  name: string;
  description: string;
  category: CategoryId;
  tag: string;
  image: AssetKey;
  catalogue: CatalogueProduct;
}

/** Filter chips, in Figma order. */
export const productFilters: readonly { id: CategoryId | 'all'; label: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'scaffolding', label: 'Scaffolding' },
  { id: 'centering', label: 'Centering & Shoring' },
  { id: 'formwork', label: 'Formwork Systems' },
  { id: 'tubes', label: 'Tubes & Couplers' },
  { id: 'accessories', label: 'Accessories' },
];

const catalogueById = new Map(catalogueProducts.map((product) => [product.id, product]));

const p = (
  slug: ProductSlug,
  name: string,
  description: string,
  category: CategoryId,
  tag: string,
  catalogueId: string,
): Product => {
  const catalogue = catalogueById.get(catalogueId);
  if (!catalogue) throw new Error(`Missing product catalogue data for "${catalogueId}"`);
  return { slug, name, description, category, tag, image: `product-${slug}`, catalogue };
};

export const products: readonly Product[] = [
  p('ms-adjustable-props', 'MS Adjustable Props', 'Telescopic steel props for slab & beam support', 'centering', 'Centering & Shorting', 'ms-adjustable-props'),
  p('cuplock-system', 'Cuplock System', 'Multipurpose steel scaffolding & staging system', 'scaffolding', 'Scaffolding', 'cuplock-system'),
  p('h-frame', 'H Frame', 'Welded frame sets for masonry & slab centering', 'scaffolding', 'Scaffolding', 'h-frame'),
  p('ms-platform', 'MS Platform / MS Plank', 'Steel working platforms for safe access', 'scaffolding', 'Scaffolding', 'ms-platform-plank'),
  p('scaffolding-ladder', 'Scaffolding Ladder', 'Built-in stairs & handrails for high-reach tasks', 'scaffolding', 'Scaffolding', 'scaffolding-ladder'),
  p('telescopic-span', 'MS Adjustable Telescopic Span', 'Self-supporting expandable spans for slabs', 'centering', 'Centering & Shorting', 'ms-adjustable-telescopic-span'),
  p('centering-plates', 'Centering Plates', 'Reusable steel plates for RCC slab forming', 'centering', 'Centering & Shorting', 'centering-plates'),
  p('wallform', 'Wallform Panels', 'Modular panels for walls & retaining structures', 'formwork', 'Formwork Systems', 'wallform-panels'),
  p('round-and-box', 'Round & Box Columns', 'Precision moulds for architectural columns', 'formwork', 'Formwork Systems', 'round-and-box-columns'),
  p('adjustable-modular-box', 'Adjustable Modular Box Columns', 'One set, many column sizes', 'formwork', 'Formwork Systems', 'adjustable-modular-box-columns'),
  p('haunch', 'Haunch Plates', 'Sloped forms for bridge deck haunches', 'formwork', 'Formwork Systems', 'haunch-plate'),
  p('girder', 'Girder Shuttering', 'Engineered formwork for bridges & heavy infra', 'formwork', 'Formwork Systems', 'girder-shuttering'),
  p('crash-barrier', 'Crash Barrier Formwork', 'Precision moulds for highway safety barriers', 'formwork', 'Formwork Systems', 'crash-barrier'),
  p('shuttering-plywood', 'Shuttering Plywood Plates', 'Steel-framed ply panels for drain shuttering', 'formwork', 'Formwork Systems', 'shuttering-plywood-plates'),
  p('bracing-tubes', 'Bracing Tubes', 'IS-standard tubes for bracing & support', 'tubes', 'Tube & Couplers', 'bracing-tubes'),
  p('pipe-bracing', 'Pipe Bracing Couplers & Clamps', 'Forged & pressed fittings for tube scaffolding', 'tubes', 'Tube & Couplers', 'pipe-bracing-couplers-clamps'),
  p('tie-rods', 'Tie Rods & Formwork Accessories', 'Anchoring hardware for formwork integrity', 'accessories', 'Accessories', 'tie-rod-accessories'),
  p('column-clamps', 'Column Clamps - Shikanja & MS Waller', 'Durable, versatile, easy to use', 'accessories', 'Accessories', 'column-clamps'),
  p('safety-brackets', 'Safety Brackets', 'Beam, slab & wall brackets for site safety', 'accessories', 'Accessories', 'safety-brackets'),
  p('wall-brackets', 'Wall Brackets', 'Bracket variants for construction site requirements', 'accessories', 'Accessories', 'wall-brackets'),
  p('wheelbarrows', 'Industrial Wheelbarrows', 'Durable, efficient, multiple designs', 'accessories', 'Accessories', 'wheelbarrows'),
  p('concrete-trays', 'Concrete Trays', 'Heavy-duty, corrosion-resistant mortar trays', 'accessories', 'Accessories', 'concrete-tray'),
];

export const quoteUnits = ['Pieces', 'Sets', 'Tonnes'] as const; // Figma shows only the "ex. Pieces" placeholder

export const getProduct = (slug: string | undefined) => products.find((x) => x.slug === slug);
