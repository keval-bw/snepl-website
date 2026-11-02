import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Img } from '@/components/Img';
import { entranceItemVariants, entranceVariants } from '@/components/Motion/Motion';
import type { AssetKey } from '@/data/assetManifest';
import './PageHero.css';

interface Props {
  image: AssetKey;
  badge?: string;
  title: ReactNode;
  text?: string;
  height?: number;
  top?: number;
  /** Which side the navy fade darkens: 'left' (About) or 'right' (Manufacturing). */
  shade?: 'left' | 'left-soft' | 'right' | 'none';
  flipImage?: boolean;
  /** Width of the text block in px (Figma: 560 on most pages, 500 on Applications). */
  width?: number;
  children?: ReactNode;
}

/** Inner-page hero: rounded-off 1420-wide image at (10,10) with a navy fade and a left text block. */
export function PageHero({ image, badge, title, text, height = 620, top = 204, shade = 'left', flipImage = false, width = 560, children }: Props) {
  const reduceMotion = useReducedMotion();
  return (
    <section className="page-hero">
      <div className="page-hero__frame" style={{ ['--hero-h' as string]: `${height}px`, ['--hero-top' as string]: `${top}px`, ['--hero-w' as string]: `${width}px` }}>
        <div className={`page-hero__bg ${flipImage ? 'is-flipped' : ''}`}><Img name={image} alt="" priority /><div className={`page-hero__shade page-hero__shade--${shade}`} /></div>
        <motion.div
          className="page-hero__content"
          variants={reduceMotion ? undefined : entranceVariants}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          {badge && <motion.p className="page-hero__badge" variants={reduceMotion ? undefined : entranceItemVariants}>{badge}</motion.p>}
          <motion.h1 className="t-h1" variants={reduceMotion ? undefined : entranceItemVariants}>{title}</motion.h1>
          {text && <motion.p className="page-hero__text" variants={reduceMotion ? undefined : entranceItemVariants}>{text}</motion.p>}
          {children && <motion.div variants={reduceMotion ? undefined : entranceItemVariants}>{children}</motion.div>}
        </motion.div>
      </div>
    </section>
  );
}
