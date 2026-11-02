import { Img } from '@/components/Img';
import { industries } from '@/data/home';
import { RevealSection } from '@/components/Motion/Motion';

export function Industries() {
  return (
    <RevealSection className="home-industries" aria-labelledby="industries-title">
      <h2 id="industries-title" className="t-h2">Built For Demanding Projects</h2>
      <div className="industries__viewport">
        <div className="industries__track">
          {[false, true].map((duplicate) => (
            <ul
              key={duplicate ? 'duplicate' : 'primary'}
              className="industries__group"
              aria-label={duplicate ? undefined : 'Industries we serve'}
              aria-hidden={duplicate || undefined}
            >
              {industries.map((i) => (
                <li key={i.label} className="industry">
                  <div className="industry__media"><Img name={i.image} alt="" /></div>
                  <div className="industry__shade" />
                  <p className="industry__label">{i.label}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
