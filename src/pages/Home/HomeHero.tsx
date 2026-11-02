import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Img } from '@/components/Img';
import { StatsBar } from '@/components/StatsBar';
import { motion, useReducedMotion } from 'framer-motion';
import { entranceItemVariants, entranceVariants } from '@/components/Motion/Motion';
import { heroStats } from '@/data/home';
import './Home.css';

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="home-hero">
      <div className="home-hero__frame">
        <div className="home-hero__bg">
          <Img name="home-hero" alt="" priority />
          <div className="home-hero__shade" />
        </div>
        <motion.div
          className="home-hero__content"
          variants={reduceMotion ? undefined : entranceVariants}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <div className="home-hero__copy">
            <motion.p className="home-hero__badge" variants={reduceMotion ? undefined : entranceItemVariants}><Icon name="security-check" size={16} />Estd. 1984 · Manufacturer Since 2008</motion.p>
            <motion.h1 className="t-h1" variants={reduceMotion ? undefined : entranceItemVariants}>Engineered Support For<br />Modern Construction</motion.h1>
            <motion.p className="home-hero__lead" variants={reduceMotion ? undefined : entranceItemVariants}>
              Manufacturing 1,600+ tones monthly across 4 high-capacity facilities spanning 90,000 sq. ft. the trusted support-structure partner for high-rises, bridges and infrastructure megaprojects.
            </motion.p>
          </div>
          <motion.div className="home-hero__actions" variants={reduceMotion ? undefined : entranceItemVariants}>
            <Button to="/products">Catalogue</Button>
            <Button to="/contact" variant="light">Talk To Engineer</Button>
          </motion.div>
        </motion.div>
        <StatsBar items={heroStats} countUp />
      </div>
    </section>
  );
}
