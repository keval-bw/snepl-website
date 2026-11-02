import { useEffect, useId, useRef, useState } from 'react';
import { Icon } from '@/components/Icon';
import { Img } from '@/components/Img';
import { contactInfo } from '@/data/navigation';
import { quoteUnits, type Product } from '@/data/products';
import './ProductModal.css';

function formatLabel(label: string) {
  return label
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isSimpleValue(value: unknown) {
  return value === null || ['string', 'number', 'boolean'].includes(typeof value);
}

function ProductDataValue({ value }: { value: unknown }) {
  if (Array.isArray(value)) {
    if (!value.length) return null;

    const records = value.filter(isRecord);
    if (records.length === value.length && records.every((record) => Object.values(record).every(isSimpleValue))) {
      const columns = [...new Set(records.flatMap((record) => Object.keys(record)))];
      return (
        <div className="pmodal__data-table-wrap">
          <table className="pmodal__data-table">
            <thead><tr>{columns.map((column) => <th key={column} scope="col">{formatLabel(column)}</th>)}</tr></thead>
            <tbody>
              {records.map((record, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column) => <td key={column}><ProductDataValue value={record[column]} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <ul className="pmodal__data-list">
        {value.map((item, index) => <li key={index}><ProductDataValue value={item} /></li>)}
      </ul>
    );
  }

  if (isRecord(value)) {
    return (
      <dl className="pmodal__data-spec">
        {Object.entries(value).map(([key, item]) => (
          <div key={key}><dt>{formatLabel(key)}</dt><dd><ProductDataValue value={item} /></dd></div>
        ))}
      </dl>
    );
  }

  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (value === null || value === undefined) return '—';
  return String(value);
}

function getCatalogueField(product: Product, field: string) {
  return Object.entries(product.catalogue).find(([key]) => key === field)?.[1];
}

function getProductData(product: Product) {
  return Object.entries(product.catalogue).filter(
    ([key, value]) => !['id', 'name', 'description', 'catalogue_category'].includes(key) && value !== null && value !== undefined,
  );
}

interface Props { product: Product; onClose: () => void }

/** Product detail dialog (Figma "Product Detail": 963x640 white card over a 47% black scrim). */
export function ProductModal({ product, onClose }: Props) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [shared, setShared] = useState(false);
  const catalogueName = getCatalogueField(product, 'name');
  const catalogueDescription = getCatalogueField(product, 'description');
  const title = typeof catalogueName === 'string' ? catalogueName : product.name;
  const description = typeof catalogueDescription === 'string' ? catalogueDescription : product.description;
  const productData = getProductData(product);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const f = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button, input, select, textarea');
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prevOverflow; opener?.focus?.(); };
  }, [onClose]);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title, url });
      else { await navigator.clipboard.writeText(url); setShared(true); setTimeout(() => setShared(false), 1800); }
    } catch { /* user cancelled */ }
  };

  return (
    <div className="pmodal" data-lenis-prevent onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={dialogRef} className="pmodal__dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close product details">
          <Icon name="close" size={20} />
        </button>

        <div className="pmodal__card">
          <div className="pmodal__overview">
            <div className="pmodal__media"><Img name={product.image} alt={product.name} /></div>

            <div className="pmodal__info">
              <div className="pmodal__head">
                <div className="pmodal__title-row">
                  <h2 id={titleId}>{title}</h2>
                  <button type="button" className="pmodal__share" onClick={share} aria-label={shared ? 'Link copied' : 'Share this product'}>
                    <Icon name="share" size={18} />
                  </button>
                </div>
                <p className="pmodal__summary">{description}</p>
              </div>

              <form className="pmodal__qty" onSubmit={(e) => e.preventDefault()}>
                <div className="pfield">
                  <label htmlFor="pm-qty">Quantity</label>
                  <input id="pm-qty" name="quantity" type="number" min="1" inputMode="numeric" placeholder="ex. 500" />
                </div>
                <div className="pfield">
                  <label htmlFor="pm-unit">Unit</label>
                  <div className="pselect">
                    <select id="pm-unit" name="unit" defaultValue="">
                      <option value="" disabled>ex. Pieces</option>
                      {quoteUnits.map((u) => <option key={u} value={u}>{u}</option>)}
                    </select>
                    <Icon name="chevron-down" size={16} />
                  </div>
                </div>
              </form>

              <div className="pmodal__actions">
                <a className="pbtn" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}><Icon name="call-circle" size={24} />Request A Call</a>
                <a className="pbtn pbtn--soft" href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(`Inquiry: ${title}`)}`}><Icon name="mail-circle" size={24} />Send Inquiry</a>
              </div>
            </div>
          </div>

          <div className="pmodal__details">
            {productData.map(([key, value]) => (
              <section className="pmodal__section" key={key}>
                <h3>{formatLabel(key)}</h3>
                <ProductDataValue value={value} />
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
