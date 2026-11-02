import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from './SmoothScroll';

export function Layout() {
  const { pathname } = useLocation();
  const page = pathname.split('/')[1] ?? ''; // /products and /products/:slug are the same page
  const reduceMotion = useReducedMotion();
  useEffect(() => { window.scrollTo(0, 0); }, [page]);
  return (
    <div style={{ position: 'relative' }}>
      <SmoothScroll />
      <Header />
      <motion.main
        key={page}
        id="main"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Suspense fallback={null}><Outlet /></Suspense>
      </motion.main>
      <Footer />
    </div>
  );
}
