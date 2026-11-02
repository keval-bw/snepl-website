import { PageHero } from '@/components/PageHero';
import { QuoteSection } from '@/components/QuoteSection';
import { Ticker } from '@/components/Ticker';
import { Intro } from './Intro';
import { PlantGallery } from './PlantGallery';
import { Rhythm } from './Rhythm';
import { ProcessDetails } from './ProcessDetails';
import './Manufacturing.css';

export default function Manufacturing() {
  return (
    <>
      <PageHero
        image="manufacturing-hero"
        shade="right"
        flipImage
        badge="How We Make It"
        title={<>Manufacturing with<br />purpose.</>}
        text="From raw steel to site-ready systems, every stage is shaped by engineering discipline, safety and accountability."
      />
      <Ticker />
      <Intro />
      <PlantGallery />
      <Rhythm />
      <ProcessDetails />
      <QuoteSection />
    </>
  );
}
