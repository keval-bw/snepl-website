/** Resolves real images dropped into src/assets/images by basename. */
const files = import.meta.glob('/src/assets/images/*.{webp,jpg,jpeg,png,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const byKey: Record<string, string> = {};
for (const [path, url] of Object.entries(files)) {
  const key = path.split('/').pop()!.replace(/\.[^.]+$/, '');
  byKey[key] = url;
}

export const resolveAsset = (key: string): string | undefined => byKey[key];

const iconFiles = import.meta.glob('/src/assets/icons/*.svg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const iconByKey: Record<string, string> = {};
const normalizeIconKey = (key: string): string => key.toLowerCase().replace(/[^a-z0-9]/g, '');
for (const [path, url] of Object.entries(iconFiles)) iconByKey[normalizeIconKey(path.split('/').pop()!.replace(/\.svg$/, ''))] = url;
const iconAliases: Record<string, string> = {
  x: 'twitter-alt',
  linkedin: 'linkedin-svgrepo-com 1',
};
export const resolveIcon = (key: string): string | undefined =>
  iconByKey[normalizeIconKey(iconAliases[key] ?? key)];
