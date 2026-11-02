import type { FormEvent } from 'react';
import { Icon } from '@/components/Icon';
import { Img } from '@/components/Img';
import { Watermark } from './Watermark';
import { quoteCategories } from '@/data/quote';
import './QuoteSection.css';
import { RevealSection } from '@/components/Motion/Motion';

function Field({ id, label, className = '', children }: { id: string; label: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={`field ${className}`}>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

/** "Have A Project To Build?" section with the quote form. Shared by every page. */
export function QuoteSection() {
  // No backend is specified in the design; wire this to your endpoint.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <RevealSection className="quote" aria-labelledby="quote-title">
      <header className="quote__head">
        <h2 id="quote-title" className="t-h2">Have A Project To Build?</h2>
        <p>Let&apos;s engineer the right solution.</p>
      </header>

      <div className="quote__stage">
        <div className="quote__bg">
          <Img name="home-cta-bg" />
          <div className="quote__shade" />
        </div>
        <Watermark />

        <form className="quote__card" onSubmit={onSubmit}>
          <div className="quote__row">
            <Field id="q-phone" label="Phone"><input id="q-phone" name="phone" type="tel" placeholder="Ex. 87457 XXXXX" autoComplete="tel" /></Field>
            <Field id="q-name" label="Name"><input id="q-name" name="name" type="text" placeholder="Ex. Satyam Shah" autoComplete="name" /></Field>
          </div>
          <div className="quote__row">
            <Field id="q-company" label="Company Name"><input id="q-company" name="company" type="text" placeholder="Ex. Sutex Infra" autoComplete="organization" /></Field>
            <Field id="q-email" label="Email ID"><input id="q-email" name="email" type="email" placeholder="Ex. sat12@xyz.com" autoComplete="email" /></Field>
          </div>
          <div className="quote__row quote__row--wide-gap">
            <Field id="q-category" label="Select Product Category">
              <div className="select">
                <select id="q-category" name="category" defaultValue="">
                  <option value="" disabled>Select Category</option>
                  {quoteCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <Icon name="chevron-down" size={24} />
              </div>
            </Field>
            <Field id="q-pin" label="Delivery Pin code"><input id="q-pin" name="pincode" type="text" inputMode="numeric" placeholder="Ex. 384001" autoComplete="postal-code" /></Field>
          </div>
          <Field id="q-req" label="Project Requirements" className="field--full">
            <textarea id="q-req" name="requirements" placeholder="Tell us about your project, sizes, drawings or BOQ…" />
          </Field>
          <button type="submit" className="quote__submit">Submit</button>
        </form>
      </div>
    </RevealSection>
  );
}
