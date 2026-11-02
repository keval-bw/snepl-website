import type { IconName } from '@/components/Icon';

// Copy verbatim from Figma.
export const offices: readonly { icon: IconName; title: string; address: string }[] = [
  { icon: 'building', title: 'Corporate Office', address: '401, Cello The Plaza, V P Road, Vile Parle West, Mumbai 400056' },
  { icon: 'factory', title: 'Factory', address: 'Plot No. F5, C14, F2 & F63, Nagapur MIDC, Ahilyanagar 414111' },
];

export const directPhones = ['+91 97690 81820', '+91 93723 90494', '+91 87888 28121'] as const;
export const directEmails = ['info@snepl.in', 'shreeneelkanthsteel@yahoo.com'] as const;
