import { QuoteSection } from '@/components/QuoteSection';
import { Ticker } from '@/components/Ticker';
import { HomeHero } from './HomeHero';
import { Manifesto } from './Manifesto';
import { ProductFamilies } from './ProductFamilies';
import { WhySnepl } from './WhySnepl';
import { ProductCategories } from './ProductCategories';
import { Industries } from './Industries';

export default function Home() {
  return (
    <>
      <HomeHero />
      <Ticker />
      <Manifesto />
      <ProductFamilies />
      <WhySnepl />
      <ProductCategories />
      <Industries />
      <QuoteSection />
    </>
  );
}
