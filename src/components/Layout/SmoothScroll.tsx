import { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import Lenis from 'lenis';

export function SmoothScroll() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.2,
      smoothWheel: true,
    });

    return () => lenis.destroy();
  }, [reduceMotion]);

  return null;
}
