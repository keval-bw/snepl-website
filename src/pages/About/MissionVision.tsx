import { Icon } from '@/components/Icon';
import { missionVision } from '@/data/about';
import { StaggerArticle, StaggerSection } from '@/components/Motion/Motion';

export function MissionVision() {
  return (
    <StaggerSection className="mv" aria-label="Mission and vision">
      {missionVision.map((c) => (
        <StaggerArticle key={c.title} className={`mv__card ${c.dark ? 'mv__card--dark' : ''}`}>
          <span className="mv__icon"><Icon name={c.icon} size={c.icon === 'target' ? 42 : 37} /></span>
          <div className="mv__body">
            <h2>{c.title}</h2>
            <p>{c.text}</p>
          </div>
        </StaggerArticle>
      ))}
    </StaggerSection>
  );
}
