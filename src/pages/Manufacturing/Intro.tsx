import { ArrowButton } from '@/components/Button';
import { Img } from '@/components/Img';
import { RevealSection } from '@/components/Motion/Motion';

export function Intro() {
  return (
    <RevealSection className="container mfg-intro">
      <div className="mfg-intro__media"><Img name="mfg-intro" alt="" /></div>
      <div className="mfg-intro__text">
        <p className="t-eyebrow">Made in india</p>
        <h2 className="t-h3">Scale is useful.<br />Control is essential.</h2>
        <p className="mfg-intro__lead">Our four production plants and 90,000+ sq. ft. footprint give SNEPL the capacity to serve high-volume requirements without losing sight of the detail.</p>
        <p className="t-body">We build for contractors, consultants and infrastructure teams that need dependable supply, project-fit sizes and products ready for the worksite.</p>
        <div><ArrowButton to="/contact" size="lg">Discuss Your Requirement</ArrowButton></div>
      </div>
    </RevealSection>
  );
}
