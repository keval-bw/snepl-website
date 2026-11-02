import { Icon } from '@/components/Icon';
import { SectionTitle } from '@/components/SectionTitle';
import { StepCards } from '@/components/StepCards';
import { approachSteps } from '@/data/about';
import { RevealSection } from '@/components/Motion/Motion';

export function Approach() {
  const items = approachSteps.map((s) => ({ lead: <Icon name={s.icon} size={60} />, title: s.title, text: s.text }));
  return (
    <RevealSection className="approach">
      <SectionTitle
        align="center"
        eyebrow="Our Approach"
        title="From Requirement to Reliable Solution"
        subtitle="Every project starts with understanding requirements. We blend engineering, manufacturing, and safety focus to provide practical scaffolding and formwork solutions tailored to construction needs."
        className="approach__title"
      />
      <div className="approach__row">
        <StepCards items={items} chipIcon={<Icon name="arrow-right" size={22} />} />
      </div>
    </RevealSection>
  );
}
