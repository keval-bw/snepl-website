import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { getAssetSpec, type AssetKey } from '@/data/assetManifest';
import { resolveAsset } from '@/lib/assets';

interface Props {
  name: AssetKey;
  alt?: string;
  className?: string;
  fit?: 'cover' | 'contain';
  priority?: boolean;
}

/** Renders the real asset when present in src/assets/images, otherwise a sized placeholder. */
export function Img({ name, alt = '', className = '', fit = 'cover', priority = false }: Props) {
  const src = resolveAsset(name);
  const spec = getAssetSpec(name);
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={spec?.w}
        height={spec?.h}
        style={{ objectFit: fit, borderRadius: spec?.radius, width: '100%', height: '100%' }}
        ref={priority ? (element) => element?.setAttribute('fetchpriority', 'high') : undefined}
        loading={priority ? 'eager' : 'lazy'}
      />
    );
  }
  return (
    <ImagePlaceholder name={name} width={spec?.w} height={spec?.h} radius={spec?.radius} className={className} />
  );
}
