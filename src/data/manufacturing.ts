import type { IconName } from '@/components/Icon';
import type { AssetKey } from './assetManifest';

// Copy verbatim from Figma.
export const processSteps: readonly { n: string; title: string; text: string; image: AssetKey }[] = [
  { n: '01', title: 'Raw material procurement', text: 'Quality steel sourced to meet production requirements.', image: 'mfg-step-1' },
  { n: '02', title: 'Raw Material Inspection', text: 'Every material is checked before entering production.', image: 'mfg-step-2' },
  { n: '03', title: 'Cutting & Sizing', text: 'Steel is precisely cut to required dimensions.', image: 'mfg-step-3' },
  { n: '04', title: 'Fabrication & Forming', text: 'Components are shaped and fabricated with precision.', image: 'mfg-step-4' },
  { n: '05', title: 'Welding & Assembly', text: 'Components are securely welded and assembled into systems.', image: 'mfg-step-5' },
  { n: '06', title: 'Surface Treatment & Finishing', text: 'Components are treated for protection, durability and finish.', image: 'mfg-step-6' },
  { n: '07', title: 'Quality Inspection & Testing', text: 'Finished products undergo rigorous quality and dimensional checks.', image: 'mfg-step-7' },
  { n: '08', title: 'Packing & Storage', text: 'Approved products are safely packed and systematically stored.', image: 'mfg-step-8' },
  { n: '09', title: 'Dispatch of Finished Goods', text: 'Finished systems are securely loaded and prepared for delivery.', image: 'mfg-step-9' },
];

export const rhythmSteps = [
  { n: '01', title: 'Understand', text: 'We begin with the application, dimensions and requirements of the system being manufactured.' },
  { n: '02', title: 'Engineer', text: 'Materials, components and fabrication methods are considered around the intended application.' },
  { n: '03', title: 'Control', text: 'Production follows defined stages with attention to dimensional accuracy, workmanship and material quality.' },
  { n: '04', title: 'Deliver', text: 'Finished systems are prepared to move from manufacturing floor to construction site ready for use.' },
] as const;
export const processDetails: readonly { icon: IconName; title: string; text: string }[] = [
  { icon: 'material preparation', title: 'Material preparation', text: 'Tube, sheet, plate and steel accessories move through controlled preparation before fabrication.' },
  { icon: 'fabrication & welding', title: 'Fabrication & welding', text: 'High-quality welding supports product strength, longevity and reliable site performance.' },
  { icon: 'inspection checkpoints', title: 'Inspection checkpoints', text: 'Teams review dimensions, finish, stability and readiness before products leave the plant.' },
  { icon: 'dispatch planning', title: 'Dispatch planning', text: 'Lead times are confirmed against product family, custom sizing and order volume.' },
];
