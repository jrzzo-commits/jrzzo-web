import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="header-wrap">
          <Link href="/" className="logo">JRZZO</Link>
          <Link href="/rzzodue" className="nav-link">Enter Drop</Link>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h1 className="hero-title">RZZODUE</h1>
          <p className="hero-subtitle">Code x Art x Tech • Desert Signal Collection</p>
          <p className="hero-copy">
            From plotted ink silence to on-chain signal. 300 desert-born realms with coordinates, timestamps,
            pen precision, and paper history. Launch page is now live and ready for mint integrations.
          </p>
          <div className="actions">
            <Link href="/rzzodue" className="btn btn-primary">Open Rzzodue</Link>
            <a href="https://jrzzo.com" className="btn">jrzzo.com</a>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-value">300</div>
              <div className="stat-label">Total Supply</div>
            </div>
            <div className="stat">
              <div className="stat-value">FREE</div>
              <div className="stat-label">Mint Price</div>
            </div>
            <div className="stat">
              <div className="stat-value">88</div>
              <div className="stat-label">Physical Redemptions</div>
            </div>
            <div className="stat">
              <div className="stat-value">BASE</div>
              <div className="stat-label">Network</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
