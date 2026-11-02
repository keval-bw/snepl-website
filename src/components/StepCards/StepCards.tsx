import type { ReactNode } from 'react';
import { StaggerItem, StaggerList } from '@/components/Motion/Motion';
import './StepCards.css';

export interface StepItem { lead: ReactNode; title: string; text: string }

/** Row of bordered cards with hand-placed arrow chips between them (Figma About "Approach", Manufacturing "rhythm"). */
export function StepCards({ items, chipIcon }: { items: readonly StepItem[]; chipIcon: ReactNode }) {
  return (
    <div className="step-cards">
      <StaggerList as="ol" className="step-cards__list">
        {items.map((s, i) => (
          <StaggerItem key={s.title} className={`step ${i % 2 ? 'step--alt' : ''}`}>
            {s.lead}
            <div className="step__body">
              <h3 className="t-h4">{s.title}</h3>
              <p className="t-body">{s.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerList>
      <div
        className="step-cards__arrows"
        style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
        aria-hidden="true"
      >
        {items.slice(1).map((item, index) => (
          <span key={item.title} className="step-cards__chip" style={{ gridColumn: index + 1 }}>
            {chipIcon}
          </span>
        ))}
      </div>
    </div>
  );
}
