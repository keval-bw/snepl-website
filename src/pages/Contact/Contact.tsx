import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { QuoteSection } from '@/components/QuoteSection';
import { Ticker } from '@/components/Ticker';
import { directEmails, directPhones, offices } from '@/data/contact';
import { RevealSection, StaggerArticle, StaggerGroup, StaggerItem, StaggerList } from '@/components/Motion/Motion';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <PageHero
        image="contact-hero"
        shade="none"
        flipImage
        height={458}
        top={143}
        badge="Start a conversation"
        title={<>Let’s build<br />what’s next.</>}
        text="Tell us what you are building. Our team will help you find the right system, dimensions and next step."
      />
      <Ticker />

      <RevealSection className="contact-cards" aria-label="Contact details">
        <StaggerGroup className="contact-cards__offices">
          {offices.map((o) => (
            <StaggerArticle key={o.title} className="ccard">
              <header className="ccard__head">
                <span className="ccard__badge"><Icon name={o.icon} size={26} /></span>
                <h2>{o.title}</h2>
              </header>
              <p className="ccard__address"><Icon name="location" size={24} /><address>{o.address}</address></p>
            </StaggerArticle>
          ))}
        </StaggerGroup>

        <StaggerArticle className="ccard ccard--lines">
          <header className="ccard__head ccard__head--plain"><h2>Direct Lines</h2></header>
          <StaggerList className="ccard__lines">
            {directPhones.map((p) => (
              <StaggerItem key={p}><Icon name="phone" size={24} /><a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a></StaggerItem>
            ))}
            {directEmails.map((m) => (
              <StaggerItem key={m}><Icon name="mail" size={24} /><a href={`mailto:${m}`}>{m}</a></StaggerItem>
            ))}
          </StaggerList>
        </StaggerArticle>
      </RevealSection>

      <QuoteSection />
    </>
  );
}
