import Link from 'next/link';
import BrandLogo from '../../components/brand-logo';
import RealmGallery from '../../components/realm-gallery';

const editionSignals = [
  { id: 'day', src: '/open-editions/som1-day.jpg', width: 2580, height: 1924 },
  { id: 'night', src: '/open-editions/som1-night.jpg', width: 2016, height: 1504 }
];

export default function OpenEditionsPage() {
  return (
    <>
      <header className="site-header">
        <div className="header-wrap">
          <BrandLogo />
          <div className="header-actions">
            <a href="https://opensea.io/collection/som1" target="_blank" rel="noreferrer" className="nav-link">
              View on OpenSea
            </a>
            <Link href="/plots" className="nav-link">Plots</Link>
            <Link href="/rzzodue" className="nav-link">Enter Drop</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero reveal">
          <h1 className="hero-title">OPEN EDITIONS</h1>
          <p className="hero-subtitle">S.O.M.1 • JRZZO Archive</p>
          <p className="hero-copy">
            S.O.M.1 is an art concept exploring Nature through digital design drawings, photography, and artificial
            intelligence. The Shades of Midnight process was created over one year, and S.O.M.1 is the introduction piece by JRZZO.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="https://opensea.io/collection/som1" target="_blank" rel="noreferrer">
              OpenSea Collection
            </a>
            <Link href="/rzzodue" className="btn">Go To Rzzodue</Link>
          </div>
        </section>

        <section className="detail-panel reveal reveal-delay-1">
          <h2 className="section-title" style={{ marginTop: 0 }}>Collection Context</h2>
          <ul className="detail-list">
            <li>
              <strong>OpenSea:</strong>{' '}
              <a className="trust-link" href="https://opensea.io/collection/som1" target="_blank" rel="noreferrer">
                opensea.io/collection/som1
              </a>
            </li>
            <li><strong>Year:</strong> 2022</li>
            <li><strong>Theme:</strong> Nature vs Nurture • Order vs Chaos</li>
            <li><strong>Statement:</strong> We are all artists.</li>
          </ul>
          <p style={{ marginTop: '0.8rem' }}>
            The work explores the artist&apos;s journey into AI and Web3 through both the limits and chaos of human sight,
            where a dream world emerges in the city of the mind&apos;s eye.
          </p>
        </section>

        <h2 className="section-title reveal reveal-delay-2">Edition Visuals</h2>
        <section className="reveal reveal-delay-2">
          <RealmGallery
            realms={editionSignals}
            labelPrefix="S.O.M.1"
            hintText="Tap or click any artwork to open full image."
          />
        </section>
      </main>
    </>
  );
}
