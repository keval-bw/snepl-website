import { SectionTitle } from '@/components/SectionTitle';
import { requirementsText, systemRows } from '@/data/applications';
import { RevealSection, StaggerDiv, StaggerGroup } from '@/components/Motion/Motion';

export function SystemTable() {
  return (
    <RevealSection className="app-systems">
      <SectionTitle align="center" eyebrow="SYSTEM APPLICATIONS" title="One System Multiple Applications" subtitle={requirementsText} className="app-title" />
      <div className="systable" role="table" aria-label="SNEPL systems and their applications">
        <div className="systable__head" role="row">
          <span role="columnheader">SNEPL Engineered System</span>
          <span role="columnheader">Function</span>
          <span role="columnheader">On-Site Application Deployment</span>
        </div>
        <StaggerGroup className="systable__body" role="rowgroup">
          {systemRows.map((r) => (
            <StaggerDiv key={r.system} className="systable__row" role="row">
              <div className="systable__system" role="cell">
                <span className="systable__idx">{r.index}</span>
                <i className="systable__dot" aria-hidden="true" />
                <span className="systable__name">{r.system}</span>
              </div>
              <div role="cell"><span className="tag">{r.function}</span></div>
              <p role="cell">{r.deployment}</p>
            </StaggerDiv>
          ))}
        </StaggerGroup>
      </div>
    </RevealSection>
  );
}
