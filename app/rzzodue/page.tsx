import Image from 'next/image';
import Link from 'next/link';
import Countdown from '../../components/countdown';
import MintPanel from '../../components/mint-panel';

const realms = [
  { id: '6835', src: '/images/img_6835.jpg', width: 3500, height: 3500 },
  { id: '6831', src: '/images/img_6831.jpg', width: 3500, height: 3150 },
  { id: '6825', src: '/images/img_6825.jpg', width: 3477, height: 3500 },
  { id: '6827', src: '/images/img_6827.jpg', width: 3500, height: 3336 },
  { id: '6816', src: '/images/img_6816.jpg', width: 3500, height: 3150 }
];

export default function RzzoduePage() {
  return (
    <>
      <header className="site-header">
        <div className="header-wrap">
          <Link href="/" className="logo">JRZZO</Link>
          <Link href="/" className="nav-link">Back</Link>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h1 className="hero-title">RZZODUE</h1>
          <p className="hero-subtitle">300 On-Chain Portals • Mint opens in <Countdown /></p>
          <p className="hero-copy">
            Each realm carries source signal from Marfa, Mojave, and Death Valley. Trait stack includes pen gauge,
            paper weight, plot duration, hatch density, and mood.
          </p>
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
            This page is now ready for wallet connection and contract mint wiring. Current mint controls are scaffolded
            below and can be connected to your Base deployment.
          </p>
          <ul className="detail-list">
            <li><strong>Supply:</strong> 300 capped</li>
            <li><strong>Mint:</strong> 0 ETH with sponsored flow</li>
            <li><strong>Physical Redemption:</strong> First 88 holders</li>
            <li><strong>Format:</strong> On-chain SVG traits + provenance metadata</li>
            <li><strong>Launch:</strong> February 16, 2026</li>
          </ul>
        </section>

        <section style={{ marginTop: '1rem' }}>
          <MintPanel />
          <p className="footer-note">AI made me do this • jrzzo.com/rzzodue</p>
        </section>
      </main>
    </>
  );
}
