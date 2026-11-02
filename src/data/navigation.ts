export const navLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'About Us', to: '/about' },
  { label: 'Manufacturing', to: '/manufacturing' },
  { label: 'Products', to: '/products' },
  { label: 'Applications', to: '/applications' },
  { label: 'Contact', to: '/contact' },
] as const;

export const footerColumns = [
  { title: 'Company', links: [
    { label: 'About', to: '/about' },
    { label: 'Manufacturing', to: '/manufacturing' },
    { label: 'Contact Us', to: '/contact' },
  ] },
  { title: 'Products', links: [
    { label: 'Scaffolding', to: '/products' },
    { label: 'Centering', to: '/products' },
    { label: 'Formwork', to: '/products' },
    { label: 'Accessories', to: '/products' },
    { label: 'Equipment', to: '/products' },
  ] },
  { title: 'Resources', links: [
    { label: 'Catalogue', to: '/products' },
    { label: 'FAQ', to: '/contact' },
  ] },
] as const;

export const contactInfo = { phone: '+91 63448 32659', email: 'info@snepl.in' } as const;

/** Routes whose Figma header uses the navy-tinted bar (About). Others use the white-10% glass bar. */
export const headerNavyRoutes: readonly string[] = ['/about'];
