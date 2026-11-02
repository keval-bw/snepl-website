import { Link } from 'react-router-dom';
import { Icon, type IconName } from '@/components/Icon';
import { Logo } from '@/components/Logo';
import { contactInfo, footerColumns } from '@/data/navigation';
import './Footer.css';

const socials: { name: IconName; label: string }[] = [
  { name: 'instagram', label: 'Instagram' },
  { name: 'facebook', label: 'Facebook' },
  { name: 'x', label: 'Twitter' },
  { name: 'linkedin', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <Logo variant="footer" />
          <p className="site-footer__about">
            Engineering reliable solutions for roads, bridges, and large-scale infrastructure projects across India.
          </p>
          <ul className="site-footer__social">
            {socials.map((s) => (
              <li key={s.name}>
                <a href="#" aria-label={s.label}><Icon name={s.name} size={20} /></a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__cols">
          {footerColumns.map((col) => (
            <div key={col.title} className="site-footer__col">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="site-footer__col site-footer__col--contact">
            <h3>Contact</h3>
            <ul>
              <li><Icon name="phone" size={22} /><a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a></li>
              <li><Icon name="mail" size={22} /><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="site-footer__legal">
        <p>Privacy Policy | Terms &amp; Condition</p>
      </div>
    </footer>
  );
}
