import { Img } from '@/components/Img';
import { SectionTitle } from '@/components/SectionTitle';
import { resolveIcon } from '@/lib/assets';
import { RevealSection, StaggerDiv, StaggerGroup } from '@/components/Motion/Motion';

export function ProductFamilies() {
  const mark = resolveIcon('home-family-formwork-mark');
  return (
    <RevealSection className="home-families">
      <div className="container">
        <SectionTitle
          eyebrow="Product families"
          title="Systems that carry the load."
          subtitle="Three chapters that explain why India's contractors trust us to hold their ambition upright."
        />
        <StaggerGroup className="families">
          <StaggerDiv className="family family--tall">
            <div className="family__media"><Img name="home-family-scaffolding" alt="" /></div>
            <div className="family__shade" />
            <div className="family__label family__label--sm">
              <p className="family__eyebrow">Scaffolding systems</p>
              <p className="family__title">Access. Stability. Control.</p>
            </div>
          </StaggerDiv>
          <StaggerDiv className="family family--navy">
            <div className="family__media"><Img name="home-family-formwork" alt="" /></div>
            {mark && <img src={mark} alt="" aria-hidden="true" className="family__mark" />}
            <div className="family__label" style={{ width: 249 }}>
              <p className="family__eyebrow">Formwork Systems</p>
              <p className="family__title">Precision in every pour.</p>
            </div>
          </StaggerDiv>
          <StaggerDiv className="family">
            <div className="family__media"><Img name="home-family-accessories" alt="" /></div>
            <div className="family__shade" />
            <div className="family__label" style={{ width: 360 }}>
              <p className="family__eyebrow">Site accessories</p>
              <p className="family__title">Details that<br />make a difference.</p>
            </div>
          </StaggerDiv>
        </StaggerGroup>
      </div>
    </RevealSection>
  );
}
