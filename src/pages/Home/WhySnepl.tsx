import { Icon } from '@/components/Icon';
import { SectionTitle } from '@/components/SectionTitle';
import { whyCards } from '@/data/home';
import { RevealSection, StaggerItem, StaggerList } from '@/components/Motion/Motion';

export function WhySnepl() {
  return (
    <RevealSection className="home-why">
      <div className="container home-why__inner">
        <SectionTitle
          tone="light"
          eyebrow="Why SNEPL"
          title="A manufacturing mindset. A project-first approach."
          subtitle="We bring industrial engineering discipline to every component, every connection and every deadline."
          className="home-why__title"
        />
        <StaggerList className="why-cards">
          {whyCards.map((c) => (
            <StaggerItem key={c.title} className="why-card">
              <span className="why-card__icon"><Icon name={c.icon} size={34} /></span>
              <div className="why-card__body">
                <h3 className="t-h4">{c.title}</h3>
                <p className="t-body">{c.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </RevealSection>
  );
}
