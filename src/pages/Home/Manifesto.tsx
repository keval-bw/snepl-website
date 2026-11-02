import { Img } from '@/components/Img';
import { SectionTitle } from '@/components/SectionTitle';
import { resolveIcon } from '@/lib/assets';
import { chapters, type Chapter } from '@/data/home';
import { RevealSection, StaggerArticle, StaggerGroup } from '@/components/Motion/Motion';

function ChapterRow({ c }: { c: Chapter }) {
  const overlay = resolveIcon(c.overlay.name);
  const media = (
    <div className="chapter__media">
      <Img name={c.image} alt="" />
      {overlay && (
        <img src={overlay} alt="" aria-hidden="true" className="chapter__overlay"
          style={{ left: c.overlay.left, top: c.overlay.top, width: c.overlay.w, height: c.overlay.h }} />
      )}
    </div>
  );
  const text = (
    <div className="chapter__text">
      <p className="t-eyebrow">{c.eyebrow}</p>
      <h3 className="t-h3">{c.title}</h3>
      <p className="t-body">{c.text}</p>
    </div>
  );
  return (
    <StaggerArticle className={`chapter ${c.textFirst ? 'chapter--text-first' : ''}`}>
      {c.textFirst ? <>{text}{media}</> : <>{media}{text}</>}
    </StaggerArticle>
  );
}

export function Manifesto() {
  return (
    <RevealSection className="home-manifesto container">
      <SectionTitle
        eyebrow="The SNEPL Manifesto"
        title="Built on Steel. Backed by Discipline."
        subtitle="Three chapters that explain why India's contractors trust us to hold their ambition upright."
      />
      <StaggerGroup className="chapters">
        {chapters.map((c) => <ChapterRow key={c.eyebrow} c={c} />)}
      </StaggerGroup>
    </RevealSection>
  );
}
