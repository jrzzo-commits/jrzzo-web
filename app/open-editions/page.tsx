import Image from 'next/image';
import Link from 'next/link';

const editionSignals = [
  { id: '6887', src: '/brand/img_6887.jpg', width: 1000, height: 1000 },
  { id: '6551', src: '/brand/img_6551.jpg', width: 1000, height: 1000 },
  { id: '6886', src: '/brand/img_6886.jpg', width: 1000, height: 1000 }
];

export default function OpenEditionsPage() {
  return (
    <>
      <header className="site-header">
        <div className="header-wrap">
          <Link href="/" className="logo">JRZZO</Link>
          <div className="header-actions">
            <a href="https://opensea.io/collection/som1" target="_blank" rel="noreferrer" className="nav-link">
              View on OpenSea
            </a>
            <Link href="/rzzodue" className="nav-link">Enter Drop</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero reveal">
          <h1 className="hero-title">OPEN EDITIONS</h1>
          <p className="hero-subtitle">JRZZO Archive</p>
          <p className="hero-copy">
            Previous JRZZO open edition release and continuity archive. Use this as historical provenance context ahead
            of current and future drops.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="https://opensea.io/collection/som1" target="_blank" rel="noreferrer">
              OpenSea Collection
            </a>
            <Link href="/rzzodue" className="btn">Go To Rzzodue</Link>
          </div>
        </section>

        <section className="detail-panel reveal reveal-delay-1">
          <h2 className="section-title" style={{ marginTop: 0 }}>Collection Link</h2>
          <ul className="detail-list">
            <li>
              <strong>OpenSea:</strong>{' '}
              <a className="trust-link" href="https://opensea.io/collection/som1" target="_blank" rel="noreferrer">
                opensea.io/collection/som1
              </a>
            </li>
          </ul>
        </section>

        <section className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>Edition Signals</h2>
          <div className="signal-grid">
            {editionSignals.map((item) => (
              <article className="signal-card" key={item.id}>
                <Image src={item.src} alt={`Edition signal ${item.id}`} width={item.width} height={item.height} />
                <span className="signal-tag">Edition #{item.id}</span>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
