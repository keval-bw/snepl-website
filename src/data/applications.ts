import type { AssetKey } from './assetManifest';

// Copy verbatim from Figma (the table's "01" index repeats on every row in the design).
export const requirementsText =
  'Construction environments demand systems that are adaptable, reliable and practical to deploy. SNEPL provides engineered systems for access, support, forming and staging across a wide range of construction activities.';

export const requirementCards: readonly { label: string; title: string; text: string; image: AssetKey }[] = [
  { label: 'ELEVATION & PLATFORMS', title: 'Access', text: 'Safe and adaptable systems for working at height and creating temporary work platforms.', image: 'app-illustration-access' },
  { label: 'LOAD TRANSFER & SHORING', title: 'Support', text: 'Reliable temporary support for slabs, beams and structural construction activities.', image: 'app-illustration-support' },
  { label: 'PROFILE & GEOMETRY', title: 'Forming', text: 'Controlled and repeatable systems for shaping concrete structures and components.', image: 'app-illustration-forming' },
];

export const processPhases = [
  { n: '1', title: 'Understand', text: 'Identify the structural, access or forming requirement.', phase: 'PHASE 01 // SITE ASSESSMENT' },
  { n: '2', title: 'Select', text: 'Choose the appropriate SNEPL system for the application.', phase: 'PHASE 02 // SYSTEM MATCHING' },
  { n: '3', title: 'Configure', text: 'Adapt dimensions, arrangement and system configuration to project requirements.', phase: 'PHASE 03 // LAYOUT & SIZING' },
  { n: '4', title: 'Deploy', text: 'Put the system into practical use on site.', phase: 'PHASE 04 // ON-SITE EXECUTION' },
] as const;

export const systemRows: readonly { index: string; system: string; function: string; deployment: string }[] = [
  { index: '01', system: 'Cuplock', function: 'Access & Staging', deployment: 'Access / Scaffolding / Staging' },
  { index: '01', system: 'H Frame', function: 'Access & Staging', deployment: 'Working Platforms / Wall Plastering / High-Slab Staging' },
  { index: '01', system: 'Adjustable Props', function: 'Support', deployment: 'Beam & Slab Support' },
  { index: '01', system: 'Centering Plates', function: 'Support & Forming', deployment: 'RCC Slab Construction' },
  { index: '01', system: 'Girder Shuttering', function: 'Forming', deployment: 'Girder / Bridge / Infrastructure Forming' },
  { index: '01', system: 'Crash Barrier Shuttering', function: 'Forming', deployment: 'Highway Barrier Construction' },
];
