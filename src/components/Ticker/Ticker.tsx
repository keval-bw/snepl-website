import { tickerItems } from '@/data/ticker';
import './Ticker.css';

function Set({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="ticker__set" aria-hidden={hidden || undefined}>
      {tickerItems.map((t) => (
        <li key={t} className="ticker__item"><i className="ticker__dot" />{t}</li>
      ))}
    </ul>
  );
}

/** Navy marquee strip shared by Home and About. Content is wider than the canvas in Figma, so it scrolls. */
export function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__track"><Set /><Set hidden /></div>
    </div>
  );
}
