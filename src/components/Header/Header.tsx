import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ArrowButton } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { headerNavyRoutes, navLinks } from '@/data/navigation';
import './Header.css';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const updateScrolled = () => {
      const nextScrolled = window.scrollY > 24;
      if (nextScrolled === scrolledRef.current) return;
      scrolledRef.current = nextScrolled;
      setScrolled(nextScrolled);
    };
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);
  const inner = pathname !== '/';

  return (
    <header className={`site-header ${headerNavyRoutes.includes(pathname) ? 'site-header--navy' : ''} ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container">
        <div className={`site-header__bar ${open ? 'is-open' : ''}`}>
          <Logo variant="header" />
          <nav id="primary-nav" className="site-header__nav" aria-label="Primary">
            <ul>
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={'end' in l ? l.end : false}>{l.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ArrowButton to="/contact" className="site-header__cta" tone={inner ? 'light' : 'accent'}>Get A Quote</ArrowButton>
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
            <i /><i /><i />
          </button>
        </div>
      </div>
    </header>
  );
}
