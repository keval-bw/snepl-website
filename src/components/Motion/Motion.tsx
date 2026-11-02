import type { ComponentPropsWithoutRef } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

export const entranceVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.02 } },
};

export const entranceItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.02 } },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
};

const viewport = { once: true, amount: 0.05, margin: '0px 0px 240px 0px' };

function useRevealProps() {
  const reduceMotion = useReducedMotion();
  return {
    initial: reduceMotion ? false : 'hidden',
    whileInView: reduceMotion ? undefined : 'visible',
    viewport,
    variants: revealVariants,
  };
}

function useStaggerProps() {
  const reduceMotion = useReducedMotion();
  return {
    initial: reduceMotion ? false : 'hidden',
    whileInView: reduceMotion ? undefined : 'visible',
    viewport,
    variants: staggerContainerVariants,
  };
}

type SafeElementProps<Tag extends keyof JSX.IntrinsicElements> = Omit<
  ComponentPropsWithoutRef<Tag>,
  'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onDrag' | 'onDragStart' | 'onDragEnd'
>;
type RevealSectionProps = SafeElementProps<'section'>;
type RevealDivProps = SafeElementProps<'div'>;
type RevealArticleProps = SafeElementProps<'article'>;

export function RevealSection({ children, ...props }: RevealSectionProps) {
  return <motion.section {...props} {...useRevealProps()}>{children}</motion.section>;
}

export function RevealDiv({ children, ...props }: RevealDivProps) {
  return <motion.div {...props} {...useRevealProps()}>{children}</motion.div>;
}

export function RevealArticle({ children, ...props }: RevealArticleProps) {
  return <motion.article {...props} {...useRevealProps()}>{children}</motion.article>;
}

export function StaggerSection({ children, ...props }: SafeElementProps<'section'>) {
  return <motion.section {...props} {...useStaggerProps()}>{children}</motion.section>;
}

type StaggerListProps = Omit<SafeElementProps<'ul'>, 'as'> & {
  as?: 'ul' | 'ol';
  revealOnView?: boolean;
};

export function StaggerList({ as = 'ul', revealOnView = false, children, ...props }: StaggerListProps) {
  const viewProps = useStaggerProps();
  const revealProps = revealOnView ? viewProps : { variants: staggerContainerVariants };
  if (as === 'ol') return <motion.ol {...props} {...revealProps}>{children}</motion.ol>;
  return <motion.ul {...props} {...revealProps}>{children}</motion.ul>;
}

export function StaggerItem({ children, ...props }: SafeElementProps<'li'>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.li
      {...props}
      variants={reduceMotion ? undefined : staggerItemVariants}
    >
      {children}
    </motion.li>
  );
}

export function StaggerDiv({ children, ...props }: SafeElementProps<'div'>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      {...props}
      variants={reduceMotion ? undefined : staggerItemVariants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerArticle({ children, ...props }: SafeElementProps<'article'>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      {...props}
      variants={reduceMotion ? undefined : staggerItemVariants}
    >
      {children}
    </motion.article>
  );
}

export function StaggerGroup({ children, ...props }: SafeElementProps<'div'>) {
  return <motion.div {...props} variants={staggerContainerVariants}>{children}</motion.div>;
}
