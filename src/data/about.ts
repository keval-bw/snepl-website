import type { IconName } from '@/components/Icon';
import type { Stat } from '@/components/StatsBar';

// Copy verbatim from Figma (incl. "Snepvl" typo in the Difference eyebrow).
export const aboutStats: readonly Stat[] = [
  { value: '40+', label: 'Years Industry Presence' },
  { value: '4', label: 'Manufacturing  Facilities' },
  { value: '90K+', label: 'SQ. FT. Factory Footprint' },
  { value: '1,600', label: 'Monthly Output Capacity' },
  { value: '20+', label: 'Certified Product Lines' },
];

export const missionVision: readonly { icon: IconName; title: string; text: string; dark?: boolean }[] = [
  { icon: 'target', title: 'Our Mission', text: 'To design, manufacture, and deliver high-quality steel scaffolding and formwork systems that empower construction professionals with robust, cost-effective, and safe support structures committed to engineering excellence, on-time delivery, and customer satisfaction, while upholding the highest standards.' },
  { icon: 'eye', dark: true, title: 'Our Vision', text: 'Our ambition is to become a worldwide leader in steel scaffolding and formwork solutions. We prioritize continuous innovation and unwavering reliability in all products. Sustainability lies at the heart of everything we create, ensuring our solutions support environmental responsibility. We are dedicated to enhancing safety and efficiency.' },
];

/** yearSide: which side of the centre line the year badge sits on. */
export const timeline: readonly { year: string; title: string; text: string; yearSide: 'left' | 'right' }[] = [
  { year: '1984', yearSide: 'left', title: 'The Trading Years Begin', text: 'Shree Neelkanth begins as a sheet metal trader building four decades of deep material knowledge and supplier trust. ' },
  { year: '2008', yearSide: 'right', title: 'Entering Manufacturing', text: 'We step into the manufacturing horizon with shuttering, scaffolding, staging and accessories built for Indian site conditions.' },
  { year: 'Today', yearSide: 'left', title: '4 Plants, 90,000 Sq. Ft.', text: 'Four production plants across India dedicated exclusively to manufacturing, delivering capacity, lower lead times and competitive rates.' },
  { year: 'Ahead', yearSide: 'right', title: '1,600 T Every Month', text: 'Industrial engineering principles and safety procedures keep throughput high and wastage low month after month.' },
];

export const infraPoints: readonly { icon: IconName; text: string }[] = [
  { icon: 'factory', text: '4 production plants in India, spread over 90,000 sq. ft. exclusively for manufacturing' },
  { icon: 'cog', text: 'Industrial engineering principles with safety procedures for workers and machines' },
  { icon: 'square-arrow-right', text: 'High throughput, less wastage 1,600 tonnes of monthly production tonnage' },
];

export const approachSteps: readonly { icon: IconName; title: string; text: string }[] = [
  { icon: 'understand', title: 'Understand', text: "We identify the project's requirements, application and specific construction needs." },
  { icon: 'engineer', title: 'Engineer', text: 'We develop the appropriate scaffolding, centering, shuttering or formwork solution around those requirements.' },
  { icon: 'manufacture', title: 'Manufacture', text: 'Our manufacturing capabilities enable high-throughput production with a focus on material quality and reduced wastage.' },
  { icon: 'deliver', title: 'Deliver', text: 'We focus on reliable service and on-time delivery to support project requirements.' },
];
export const principles: readonly { title: string; text: string }[] = [
  { title: 'ENGINEERING EXCELLENCE', text: 'Applying engineering principles to create practical and reliable construction systems.' },
  { title: 'MANUFACTURING CAPABILITY', text: 'Manufacturing at scale with infrastructure designed for efficient production and consistent output.' },
  { title: 'SAFETY & QUALITY', text: 'Maintaining a strong focus on safety procedures, material quality and reducing unnecessary wastage.' },
  { title: 'CUSTOMER COMMITMENT', text: 'Working toward reliable service, timely delivery and solutions aligned with customer requirements.' },
];
