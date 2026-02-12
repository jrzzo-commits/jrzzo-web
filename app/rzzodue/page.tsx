import Image from 'next/image';
import Link from 'next/link';
import Countdown from '../../components/countdown';
import MintPanel from '../../components/mint-panel';
import { collectionAddress } from '../../lib/thirdweb';

const realms = [
  { id: '6835', src: '/images/img_6835.jpg', width: 3500, height: 3500 },
  { id: '6831', src: '/images/img_6831.jpg', width: 3500, height: 3150 },
  { id: '6825', src: '/images/img_6825.jpg', width: 3477, height: 3500 },
  { id: '6827', src: '/images/img_6827.jpg', width: 3500, height: 3336 },
  { id: '6816', src: '/images/img_6816.jpg', width: 3500, height: 3150 }
];

export default function RzzoduePage() {
  const launchUtc = '2026-02-16T13:00:00Z';
  const launchEtLabel = 'Monday, February 16, 2026 at 8:00 AM ET';
  const contractHref = collectionAddress ? `https://basescan.org/address/${collectionAddress}` : '';

  return (
    <>
      <header className="site-header">
        <div className="header-wrap">
          <Link href="/" className="logo">JRZZO</Link>
          <div className="header-actions">
            <a href="https://x.com/jrzzo_" target="_blank" rel="noreferrer" className="nav-link">@jrzzo_</a>
            <Link href="/" className="nav-link">Back</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h1 className="hero-title">RZZODUE</h1>
          <p className="hero-subtitle">300 On-Chain Portals • Mint opens in <Countdown /></p>
          <p className="hero-time">Mint opens {launchEtLabel} • {launchUtc}</p>
          <p className="hero-copy">
            Each realm carries source signal from Marfa, Mojave, and Death Valley. Trait stack includes pen gauge,
            paper weight, plot duration, hatch density, and mood.
          </p>
        </section>

        <section className="trust-bar">
          <div className="trust-item">
            <span className="trust-label">Network</span>
            <span className="trust-value">Base Mainnet</span>
          </div>
          <div className="trust-item">
            <span className="trust-label">Supply</span>
            <span className="trust-value">300</span>
          </div>
          <div className="trust-item">
            <span className="trust-label">Mint Rule</span>
            <span className="trust-value">Free • 1/Wallet</span>
          </div>
          <div className="trust-item">
            <span className="trust-label">Contract</span>
            {collectionAddress ? (
              <a className="trust-link" href={contractHref} target="_blank" rel="noreferrer">
                {collectionAddress.slice(0, 8)}...{collectionAddress.slice(-6)}
              </a>
            ) : (
              <span className="trust-value">Set in env</span>
            )}
          </div>
        </section>

        <h2 className="section-title">Realm Gallery</h2>
        <section className="gallery">
          {realms.map((realm) => (
            <article className="gallery-card" key={realm.id}>
              <Image src={realm.src} alt={`Realm ${realm.id}`} width={realm.width} height={realm.height} />
              <div className="tag">Realm #{realm.id}</div>
            </article>
          ))}
        </section>

        <section className="detail-panel">
          <h2 className="section-title" style={{ marginTop: 0 }}>The Story</h2>
          <p>
            Rzzodue translates physical plotted etches into on-chain portals. The release is designed as a free claim
            with optional physical redemption for the first 88 holders.
          </p>
          <p>
            Launch is locked for {launchEtLabel}. Mint controls below are live-ready for the Base deployment and update
            supply progress in real time.
          </p>
          <ul className="detail-list">
            <li><strong>Supply:</strong> 300 capped</li>
            <li><strong>Mint:</strong> 0 ETH with sponsored flow</li>
            <li><strong>Physical Redemption:</strong> First 88 holders</li>
            <li><strong>Format:</strong> On-chain SVG traits + provenance metadata</li>
            <li><strong>Launch:</strong> {launchEtLabel}</li>
          </ul>
        </section>

        <section style={{ marginTop: '1rem' }}>
          <MintPanel />
          <p className="footer-note">
            Follow launch updates on{' '}
            <a href="https://x.com/jrzzo_" target="_blank" rel="noreferrer">@jrzzo_</a>
            {' '}• jrzzo.com/rzzodue
          </p>
        </section>
      </main>
    </>
  );
}
