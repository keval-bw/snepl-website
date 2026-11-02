import { SectionTitle } from '@/components/SectionTitle';
import { processPhases } from '@/data/applications';
import { RevealSection, StaggerItem, StaggerList } from '@/components/Motion/Motion';

export function ProcessSteps() {
  return (
    <RevealSection className="app-process">
      <div className="container app-process__inner">
        <SectionTitle
          tone="light"
          eyebrow="APPLICATION PROCESS"
          title="From Requirement To Application"
          subtitle="We bring industrial engineering discipline to every component, every connection and every deadline."
          className="app-process__title"
        />
        <StaggerList as="ol" className="phases">
          {processPhases.map((s) => (
            <StaggerItem key={s.n} className="phase">
              <span className="phase__num" aria-hidden="true">{s.n}</span>
              <div className="phase__body">
                <h3 className="t-h4">{s.title}</h3>
                <p className="t-body">{s.text}</p>
              </div>
              <span className="tag">{s.phase}</span>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </RevealSection>
  );
}
