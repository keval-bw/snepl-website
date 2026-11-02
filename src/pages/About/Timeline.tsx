import { SectionTitle } from '@/components/SectionTitle';
import { timeline } from '@/data/about';
import { RevealSection, StaggerItem, StaggerList } from '@/components/Motion/Motion';

export function Timeline() {
  return (
    <RevealSection className="about-timeline" aria-labelledby="timeline-title">
      <div className="container about-timeline__head">
        <SectionTitle
          align="center"
          eyebrow="Company Timeline"
          title="From Trader to Manufacturer"
          subtitle="Four chapters that show why India's contractors rely on us to support their ambitions, backed by years of company experience."
        />
      </div>
      <div className="about-timeline__band">
        <StaggerList as="ol" className="tl container">
          {timeline.map((e) => {
            const year = <span className="tl__year">{e.year}</span>;
            const body = (
              <div className="tl__body">
                <h3>{e.title}</h3>
                <p className="tl__card">{e.text}</p>
              </div>
            );
            return (
              <StaggerItem key={e.year} className={`tl__entry tl__entry--year-${e.yearSide}`}>
                <div className="tl__cell tl__cell--l">{e.yearSide === 'left' ? year : body}</div>
                <span className="tl__node" aria-hidden="true"><i /></span>
                <div className="tl__cell tl__cell--r">{e.yearSide === 'left' ? body : year}</div>
              </StaggerItem>
            );
          })}
        </StaggerList>
      </div>
    </RevealSection>
  );
}
