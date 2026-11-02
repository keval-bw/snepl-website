import { PageHero } from '@/components/PageHero';
import { QuoteSection } from '@/components/QuoteSection';
import { Ticker } from '@/components/Ticker';
import { Requirements } from './Requirements';
import { ProcessSteps } from './ProcessSteps';
import { SystemTable } from './SystemTable';
import './Applications.css';

export default function Applications() {
  return (
    <>
      <PageHero
        image="applications-hero"
        shade="left-soft"
        top={206}
        width={500}
        badge="Applications"
        title="Engineered Around The Way You Build"
        text="From temporary access and structural support to concrete forming and staging, SNEPL systems are designed around the practical requirements of construction."
      />
      <Ticker />
      <Requirements />
      <ProcessSteps />
      <SystemTable />
      <QuoteSection />
    </>
  );
}
