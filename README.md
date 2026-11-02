# SNEPL website

React + Vite + TypeScript + React Router. Source of truth: Figma file `W0HD30UaGl7K1ZoBCjZmQz`.

    npm install
    npm run dev       # http://localhost:5173
    npm run build

## Routes
`/` Home, `/about`, `/manufacturing`, `/products`, `/products/:slug` (product dialog over Products), `/applications`, `/contact`.

## Replacing placeholders
Every image is a named placeholder at its exact Figma size. Drop a file named `<key>.webp|jpg|png|avif|svg`
into `src/assets/images/` and `<Img name="<key>" />` uses it automatically (no code change).

### Photos and illustrations (`src/assets/images/`)
| key | size (px) |
|---|---|
| `logo-header` | 185 x 47 |
| `logo-footer` | 201 x 51 |
| `home-hero` | 1420 x 800 |
| `home-chapter-1` | 517 x 344 |
| `home-chapter-2` | 517 x 344 |
| `home-chapter-3` | 517 x 344 |
| `home-family-scaffolding` | 747 x 521 |
| `home-family-formwork` | 483 x 256 |
| `home-family-accessories` | 483 x 255 |
| `home-category-scaffolding` | 615 x 255 |
| `home-category-centering` | 615 x 255 |
| `home-category-formwork` | 615 x 255 |
| `home-category-accessories` | 615 x 255 |
| `home-category-equipment` | 1240 x 255 |
| `home-cta-bg` | 1440 x 454 |
| `industry-industrial-projects` | 312 x 415 |
| `industry-commercial-construction` | 312 x 415 |
| `industry-highways` | 312 x 415 |
| `industry-railways-structure` | 312 x 415 |
| `industry-metro-projects` | 312 x 415 |
| `industry-bridges-flyover` | 312 x 415 |
| `industry-facade-external-works` | 312 x 415 |
| `industry-electrical-plumbing-works` | 312 x 415 |
| `industry-renovation-restoration` | 312 x 415 |
| `industry-shipbuilding-oil-refineries` | 312 x 415 |
| `industry-event-temporary-structures` | 312 x 415 |
| `about-infra` | 517 x 344 |
| `about-banner` | 1440 x 573 |
| `about-difference-logo` | 246 x 69 |
| `mfg-intro` | 630 x 419 |
| `mfg-step-1` | 512 x 272 |
| `mfg-step-2` | 512 x 272 |
| `mfg-step-3` | 512 x 272 |
| `mfg-step-4` | 512 x 272 |
| `mfg-step-5` | 512 x 272 |
| `mfg-step-6` | 512 x 272 |
| `mfg-step-7` | 512 x 272 |
| `mfg-step-8` | 512 x 272 |
| `mfg-step-9` | 512 x 272 |
| `app-illustration-access` | 200 x 120 |
| `app-illustration-support` | 200 x 120 |
| `app-illustration-forming` | 200 x 120 |
| `about-hero` | 1420 x 620 |
| `manufacturing-hero` | 1420 x 620 |
| `products-hero` | 1420 x 458 |
| `applications-hero` | 1420 x 620 |
| `contact-hero` | 1420 x 458 |
| `product-ms-adjustable-props` | 296.5 x 222.4 |
| `product-cuplock-system` | 296.5 x 222.4 |
| `product-h-frame` | 296.5 x 222.4 |
| `product-ms-platform` | 296.5 x 222.4 |
| `product-scaffolding-ladder` | 296.5 x 222.4 |
| `product-telescopic-span` | 296.5 x 222.4 |
| `product-centering-plates` | 296.5 x 222.4 |
| `product-wallform` | 296.5 x 222.4 |
| `product-round-and-box` | 296.5 x 222.4 |
| `product-adjustable-modular-box` | 296.5 x 222.4 |
| `product-haunch` | 296.5 x 222.4 |
| `product-girder` | 296.5 x 222.4 |
| `product-crash-barrier` | 296.5 x 222.4 |
| `product-shuttering-plywood` | 296.5 x 222.4 |
| `product-bracing-tubes` | 296.5 x 222.4 |
| `product-pipe-bracing` | 296.5 x 222.4 |
| `product-tie-rods` | 296.5 x 222.4 |
| `product-column-clamps` | 296.5 x 222.4 |
| `product-safety-brackets` | 296.5 x 222.4 |
| `product-wheelbarrows` | 296.5 x 222.4 |
| `product-concrete-trays` | 296.5 x 222.4 |

### Optional decorative overlays (render only if the file exists)
`home-chapter-1-overlay.svg`, `home-chapter-2-overlay.svg`, `home-chapter-3-overlay.svg`,
`home-family-formwork-mark.svg`, `about-infra-watermark.svg`  (all in `src/assets/icons/`).
The big "SNEPL" mark behind the quote form is built in (`src/components/QuoteSection/Watermark.tsx`).

### Icons (`src/assets/icons/<name>.svg` overrides the built-in stand-in)
instagram, facebook, x, linkedin, phone, mail, arrow-up-right, arrow-right, chevron-down, security-check, shield-check,
building, drone, target, eye, factory, cog, square-arrow-right, understand, engineer, deliver, parquet, welding-mask,
inspect, search, share, close, call-circle, mail-circle, location.

## Data you may want to change
- `src/data/products.ts`: add a `detail` (title, MOQ, features, details) per product to fill the product dialog.
- `src/data/applications.ts`: the table's `index` is "01" on every row (as in Figma).
- `src/data/quote.ts`, `src/data/products.ts` (`quoteUnits`): dropdown options not specified in Figma.
- The quote form and product dialog have no backend; `onSubmit` just prevents default.
