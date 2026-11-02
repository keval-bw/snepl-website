import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Layout } from '@/components/Layout';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Manufacturing = lazy(() => import('@/pages/Manufacturing'));
const Products = lazy(() => import('@/pages/Products'));
const Applications = lazy(() => import('@/pages/Applications'));
const Contact = lazy(() => import('@/pages/Contact'));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="manufacturing" element={<Manufacturing />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<Products />} />
          <Route path="applications" element={<Applications />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}
