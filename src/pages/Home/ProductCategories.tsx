import { Link } from 'react-router-dom';
import { ArrowButton, ArrowChip } from '@/components/Button';
import { Img } from '@/components/Img';
import { categoryTiles } from '@/data/home';
import { RevealSection, StaggerItem, StaggerList } from '@/components/Motion/Motion';

export function ProductCategories() {
  return (
    <RevealSection className="home-categories container">
      <div className="home-categories__head">
        <h2 className="t-h2">One Engineering Partner. Multiple Construction Systems</h2>
        <ArrowButton to="/products" size="lg">Explore All Products</ArrowButton>
      </div>
      <StaggerList className="cat-grid">
        {categoryTiles.map((t) => (
          <StaggerItem key={t.label} className={t.wide ? 'cat-grid__wide' : undefined}>
            <Link to="/products" className="cat-tile">
              <div className="cat-tile__media"><Img name={t.image} alt="" /></div>
              <div className="cat-tile__shade" />
              <span className="cat-tile__label t-card-title">{t.label}</span>
              <ArrowChip filled />
            </Link>
          </StaggerItem>
        ))}
      </StaggerList>
    </RevealSection>
  );
}
