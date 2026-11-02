import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import './StatsBar.css';
import { StaggerItem, StaggerList } from '@/components/Motion/Motion';

export interface Stat { value: string; label: string }

function CountUpValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const match = /^([\d,]+)(.*)$/.exec(value);
  const target = match ? Number(match[1].replace(/,/g, '')) : Number.NaN;
  const suffix = match?.[2] ?? '';
  const formattedCount = useTransform(count, (current) => `${Math.round(current).toLocaleString('en-US')}${suffix}`);

  useEffect(() => {
    if (!isInView || !Number.isFinite(target)) return;
    if (reduceMotion) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, { duration: 1.25, ease: 'easeOut' });
    return () => controls.stop();
  }, [count, isInView, reduceMotion, target]);

  if (!match) return <span className="t-stat">{value}</span>;
  return (
    <motion.span ref={ref} className="t-stat" aria-label={value} aria-live="off">
      {formattedCount}
    </motion.span>
  );
}

export function StatsBar({ items, tone = 'glass', countUp = false }: { items: readonly Stat[]; tone?: 'glass' | 'accent'; countUp?: boolean }) {
  return (
    <StaggerList revealOnView className={`stats-bar stats-bar--${tone}`}>
      {items.map((s) => (
        <StaggerItem key={s.label} className="stats-bar__item">
          {countUp ? <CountUpValue value={s.value} /> : <span className="t-stat">{s.value}</span>}
          <span className="stats-bar__label">{s.label}</span>
        </StaggerItem>
      ))}
    </StaggerList>
  );
}
