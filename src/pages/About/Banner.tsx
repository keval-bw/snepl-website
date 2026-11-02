import { Img } from '@/components/Img';
import { RevealSection } from '@/components/Motion/Motion';

export function Banner() {
  return (
    <RevealSection className="about-banner" aria-label="Supporting the structures that move India forward">
      <div className="about-banner__bg"><Img name="about-banner" alt="" /><div className="about-banner__shade" /></div>
      <h2 className="about-banner__title">
        <span>SUPPORTING THE STRUCTURES</span>
        <span>THAT <strong>MOVE INDIA FORWARD.</strong></span>
      </h2>
      <p className="about-banner__text">Scaffolding, centering, shuttering and formwork systems for demanding construction and infrastructure applications.</p>
    </RevealSection>
  );
}
