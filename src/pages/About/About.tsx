import { PageHero } from '@/components/PageHero';
import { QuoteSection } from '@/components/QuoteSection';
import { StatsBar } from '@/components/StatsBar';
import { Ticker } from '@/components/Ticker';
import { aboutStats } from '@/data/about';
import { MissionVision } from './MissionVision';
import { Timeline } from './Timeline';
import { Infrastructure } from './Infrastructure';
import { Approach } from './Approach';
import { Banner } from './Banner';
import { Difference } from './Difference';
import './About.css';

export default function About() {
  return (
    <>
      <PageHero
        image="about-hero"
        badge="About SNEPL"
        title="Four Decades of Steel, One Standard."
        text="Shree Neelkanth Engineers Pvt Ltd has grown from a sheet metal trading house into one of India's dependable manufacturers of scaffolding, centering, shuttering and formwork systems."
      />
      <Ticker />
      <MissionVision />
      <Timeline />
      <div className="about-stats"><StatsBar items={aboutStats} tone="accent" /></div>
      <Infrastructure />
      <Approach />
      <Banner />
      <Difference />
      <QuoteSection />
    </>
  );
}
