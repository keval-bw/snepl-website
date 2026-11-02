import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@/components/Icon';
import { Img } from '@/components/Img';
import type { Product } from '@/data/products';
import './ProductCard.css';

const MotionLink = motion.create(Link);

/** Product tile (Figma 296.5px wide: 4:3 image, tag chip, title, divider, "Request For Quote"). */
export function ProductCard({ product }: { product: Product }) {
  return (
    <MotionLink
      to={`/products/${product.slug}`}
      className="product-card"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <div className="product-card__media"><Img name={product.image} alt={product.name} /></div>
      <div className="product-card__body">
        <div className="product-card__text">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <hr />
        <span className="product-card__cta">Request For Quote<Icon name="arrow-right" size={22} /></span>
      </div>
      <span className="product-card__tag">{product.tag}</span>
    </MotionLink>
  );
}
