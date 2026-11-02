import { Icon } from '@/components/Icon';
import { SectionTitle } from '@/components/SectionTitle';
import { StepCards } from '@/components/StepCards';
import { rhythmSteps } from '@/data/manufacturing';
import { RevealSection } from '@/components/Motion/Motion';

export function Rhythm() {
  const items = rhythmSteps.map((s) => ({ lead: <span className="step__num">{s.n}</span>, title: s.title, text: s.text }));
  return (
    <RevealSection className="rhythm">
      <SectionTitle
        align="center"
        eyebrow="Our production rhythm"
        title="Manufacturing Built Around the Details"
        subtitle="Every component begins with a clear understanding of how it will perform on site. Our manufacturing approach focuses on controlled fabrication, practical engineering and attention to the details that influence strength, fit and usability."
        className="rhythm__title"
      />
      <div className="rhythm__row">
        <StepCards items={items} chipIcon={<Icon name="arrow-right" size={22} />} />
      </div>
    </RevealSection>
  );
}
