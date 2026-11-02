import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import './Button.css';

const MotionLink = motion.create(Link);

interface ArrowProps { to: string; children: string; className?: string; size?: 'md' | 'lg'; tone?: 'accent' | 'light'; onClick?: () => void }

/** Small accent chip with an arrow (also used inside cards). */
export function ArrowChip({ filled = false }: { filled?: boolean }) {
  return (
    <span className={`arrow-chip ${filled ? 'arrow-chip--accent' : ''}`}>
      <Icon name="arrow-up-right" size={22} />
    </span>
  );
}

/** Primary button with white arrow chip (Figma "Get A Quote", "Explore All Products"). */
export function ArrowButton({ to, children, className = '', size = 'md', tone = 'accent', onClick }: ArrowProps) {
  return (
    <MotionLink
      to={to}
      className={`arrow-btn arrow-btn--${size} arrow-btn--${tone} ${className}`}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <span>{children}</span>
      <ArrowChip filled={tone === 'light'} />
    </MotionLink>
  );
}

interface BtnProps { to: string; children: string; variant?: 'primary' | 'light'; className?: string }

/** Plain 10px-padded button (Figma hero "Catalogue" / "Talk To Engineer"). */
export function Button({ to, children, variant = 'primary', className = '' }: BtnProps) {
  return (
    <MotionLink
      to={to}
      className={`btn btn--${variant} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </MotionLink>
  );
}
