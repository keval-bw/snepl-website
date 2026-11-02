import { Img } from '@/components/Img';
import { SectionTitle } from '@/components/SectionTitle';
import { processSteps } from '@/data/manufacturing';
import { RevealSection, StaggerItem, StaggerList } from '@/components/Motion/Motion';

export function PlantGallery() {
  return (
    <RevealSection className="plant" aria-labelledby="plant-title">
      <div className="container">
        <SectionTitle
          align="center"
          eyebrow="Plant Gallery"
          title="Where the work takes shape."
          subtitle="Reference views of the factory, fabrication and welding environments behind our product systems."
          className="plant__title"
        />
      </div>
      <StaggerList as="ol" className="proc container">
        {processSteps.map((s, i) => {
          const imageLeft = i % 2 === 0;
          const image = <div className="proc__img"><Img name={s.image} alt="" /></div>;
          const card = (
            <div className={`proc__card ${imageLeft ? '' : 'proc__card--end'}`}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          );
          return (
            <StaggerItem key={s.n} className="proc__row">
              <div className={`proc__cell ${imageLeft ? 'proc__cell--start' : 'proc__cell--end'}`}>{imageLeft ? image : card}</div>
              <span className="proc__num">{s.n}</span>
              <div className={`proc__cell ${imageLeft ? 'proc__cell--start' : 'proc__cell--end'}`}>{imageLeft ? card : image}</div>
            </StaggerItem>
          );
        })}
      </StaggerList>
    </RevealSection>
  );
}
