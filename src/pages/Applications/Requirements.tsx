import { Img } from '@/components/Img';
import { SectionTitle } from '@/components/SectionTitle';
import { requirementCards, requirementsText } from '@/data/applications';
import { RevealSection, StaggerItem, StaggerList } from '@/components/Motion/Motion';

export function Requirements() {
  return (
    <RevealSection className="app-req">
      <SectionTitle align="center" eyebrow="CONSTRUCTION REQUIREMENTS" title="Every Project Has A Different Requirements" subtitle={requirementsText} className="app-title" />
      <StaggerList className="req-cards container">
        {requirementCards.map((c) => (
          <StaggerItem key={c.title} className="req-card">
            <p className="t-eyebrow">{c.label}</p>
            <div className="req-card__art"><Img name={c.image} alt="" fit="contain" /></div>
            <div className="req-card__text">
              <h3 className="t-h4">{c.title}</h3>
              <p className="t-body">{c.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerList>
    </RevealSection>
  );
}
