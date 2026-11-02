import { Icon } from '@/components/Icon';
import { Img } from '@/components/Img';
import { principles } from '@/data/about';
import { RevealSection, StaggerItem, StaggerList } from '@/components/Motion/Motion';

export function Difference() {
  return (
    <RevealSection className="difference">
      <div className="difference__head">
        <p className="t-eyebrow">The Snepvl Difference</p>
        <h2 className="t-h2">Built On Principles.<br />Driven By Performance</h2>
      </div>
      <div className="difference__row">
        <div className="difference__logo"><Img name="about-difference-logo" alt="SNEPL" fit="contain" /></div>
        <StaggerList className="difference__cards">
          {principles.map((p) => (
            <StaggerItem key={p.title} className="principle">
              <span className="principle__icon"><Icon name="shield-check" size={34} /></span>
              <div className="principle__body">
                <h3>{p.title}</h3>
                <p className="t-body">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </RevealSection>
  );
}
