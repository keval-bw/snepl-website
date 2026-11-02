import { Icon } from '@/components/Icon';
import { processDetails } from '@/data/manufacturing';
import { RevealSection, StaggerItem, StaggerList } from '@/components/Motion/Motion';

export function ProcessDetails() {
  return (
    <RevealSection className="mfg-details">
      <div className="container mfg-details__inner">
        <div className="mfg-details__text">
          <p className="t-eyebrow">Process details</p>
          <h2 className="t-h2">Clear work.<br />Clear handoffs.</h2>
          <p>The brochure does not specify machine models or standard lead times, so those details are confirmed per project rather than guessed.</p>
        </div>
        <StaggerList className="mfg-details__cards">
          {processDetails.map((d) => (
            <StaggerItem key={d.title} className="detail">
              <span className="detail__icon"><Icon name={d.icon} size={40} /></span>
              <div className="detail__body">
                <h3 className="t-h4">{d.title}</h3>
                <p className="t-body">{d.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </RevealSection>
  );
}
