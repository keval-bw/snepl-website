import { Icon } from '@/components/Icon';
import { Img } from '@/components/Img';
import { resolveIcon } from '@/lib/assets';
import { infraPoints } from '@/data/about';
import { RevealSection, StaggerItem, StaggerList } from '@/components/Motion/Motion';

export function Infrastructure() {
  const mark = resolveIcon('about-infra-watermark');
  return (
    <RevealSection className="infra">
      <div className="container infra__inner">
        <div className="infra__media"><Img name="about-infra" alt="" /></div>
        <div className="infra__text">
          <div className="infra__head">
            <p className="t-eyebrow infra__eyebrow">Manufacturing Infrastructure</p>
            <h2 className="t-h3">Capacity That Keeps Sites Moving</h2>
          </div>
          <StaggerList className="infra__list">
            {infraPoints.map((p) => (
              <StaggerItem key={p.text}>
                <span className="infra__chip"><Icon name={p.icon} size={24} /></span>
                <p>{p.text}</p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
        {mark && <img src={mark} alt="" aria-hidden="true" className="infra__mark" />}
      </div>
    </RevealSection>
  );
}
