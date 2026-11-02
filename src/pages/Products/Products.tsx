import { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { ProductCard } from '@/components/ProductCard';
import { ProductModal } from '@/components/ProductModal';
import { QuoteSection } from '@/components/QuoteSection';
import { Ticker } from '@/components/Ticker';
import { getProduct, productFilters, products, type CategoryId } from '@/data/products';
import { RevealSection } from '@/components/Motion/Motion';
import './Products.css';

export default function Products() {
  const [category, setCategory] = useState<CategoryId | 'all'>('all');
  const [query, setQuery] = useState('');
  const { slug } = useParams();
  const navigate = useNavigate();
  const open = getProduct(slug);
  const close = useCallback(() => navigate('/products', { preventScrollReset: true }), [navigate]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) => (category === 'all' || p.category === category) && (!q || `${p.name} ${p.description}`.toLowerCase().includes(q)),
    );
  }, [category, query]);

  return (
    <>
      <PageHero
        image="products-hero"
        shade="none"
        flipImage
        height={458}
        top={143}
        badge="The product range"
        title={<>One catalogue.<br />Every application.</>}
        text="From the first support to the final pour, our systems are designed to work together on demanding sites."
      />
      <Ticker />

      <RevealSection className="container products-browse" aria-labelledby="browse-title">
        <div className="products-browse__head">
          <p className="t-eyebrow">Browse &amp; Filter</p>
          <h2 id="browse-title" className="t-h2">Find Your System</h2>
        </div>

        <div className="filter-bar">
          <label className="filter-bar__search">
            <Icon name="search" size={18} />
            <span className="visually-hidden">Search products</span>
            <input type="search" placeholder="Search products" value={query} onChange={(e) => setQuery(e.target.value)} />
          </label>
          <div className="filter-bar__chips" role="group" aria-label="Filter by category">
            {productFilters.map((f) => (
              <button key={f.id} type="button" className={`chip ${category === f.id ? 'is-active' : ''}`} aria-pressed={category === f.id} onClick={() => setCategory(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {visible.length ? (
          <ul className="product-grid">
            {visible.map((p) => <li key={p.slug}><ProductCard product={p} /></li>)}
          </ul>
        ) : (
          <p className="product-grid__empty" role="status">No products match your search.</p>
        )}
      </RevealSection>

      <QuoteSection />
      {open && <ProductModal product={open} onClose={close} />}
    </>
  );
}
