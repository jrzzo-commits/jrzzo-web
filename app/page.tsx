import Image from 'next/image';
import Link from 'next/link';
import BrandLogo from '../components/brand-logo';

const brandSignals = [
  { id: '6886', src: '/brand/img_6886.jpg', width: 1000, height: 1000 },
  { id: '6887', src: '/brand/img_6887.jpg', width: 1000, height: 1000 },
  { id: '6551', src: '/brand/img_6551.jpg', width: 1000, height: 1000 }
];

const submissions = [
  { id: '6558', src: '/submissions/img_6558.jpg', width: 1400, height: 2000 },
  { id: '6548', src: '/submissions/img_6548.png', width: 1400, height: 2000 },
  { id: '6549', src: '/submissions/img_6549.jpg', width: 1400, height: 2000 },
  { id: '6556', src: '/submissions/img_6556.jpg', width: 1400, height: 2000 },
  { id: '6557', src: '/submissions/img_6557.jpg', width: 1400, height: 2000 }
];

const rzzodueVideos = [
  { id: 'feb11', src: '/videos/rzzodue/feb-11.mp4', label: 'Rzzodue Process • Feb 11, 2026' },
  { id: 'feb6', src: '/videos/rzzodue/feb-6.mp4', label: 'Rzzodue Process • Feb 6, 2026' }
];

const submissionVideos = [
  { id: 'jan27', src: '/videos/submissions/jan-27.mp4', label: 'Contest Submission • Jan 27, 2026' }
];

const plotSignals = [
  { id: '7690', src: '/plots/img_7690.jpg', width: 2751, height: 2712 },
  { id: '7691', src: '/plots/img_7691.jpg', width: 2723, height: 2752 },
  { id: '7700', src: '/plots/img_7700.jpg', width: 2764, height: 3480 }
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="header-wrap">
          <BrandLogo />
          <div className="header-actions">
            <Link href="/open-editions" className="nav-link">Open Editions</Link>
            <Link href="/plots" className="nav-link">Plots</Link>
            <a href="#submissions" className="nav-link">Submissions</a>
            <Link href="/rzzodue" className="nav-link">Enter Drop</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero home-hero reveal">
          <div className="home-hero-copy">
            <h1 className="hero-title">RZZODUE</h1>
            <p className="hero-subtitle">Code x Art x Tech • Desert Signal Collection</p>
            <p className="hero-copy">
              From plotted ink silence to on-chain signal. 300 curated realms on Base with rarity, mood, and provenance
              structure built for clean marketplace indexing and long-term collector narrative.
            </p>
            <div className="actions">
              <Link href="/rzzodue" className="btn btn-primary">Open Rzzodue</Link>
              <a href="https://x.com/jrzzo_" className="btn" target="_blank" rel="noreferrer">X @jrzzo_</a>
              <a href="https://warpcast.com/jrzzo" className="btn" target="_blank" rel="noreferrer">Farcaster @jrzzo</a>
            </div>
          </div>
          <article className="home-feature-card">
            <Image src="/brand/img_6886.jpg" alt="JRZZO featured studio signal" width={1000} height={1000} />
            <div className="home-feature-caption">
              <strong>Current Release:</strong> Rzzodue on Base • 300 supply
            </div>
          </article>
        </section>

        <div className="stats reveal reveal-delay-1">
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

        <section id="open-editions" className="detail-panel reveal reveal-delay-1">
          <h2 className="section-title" style={{ marginTop: 0 }}>Open Editions</h2>
          <p>
            S.O.M.1 (Shades of Midnight) is JRZZO&apos;s 2022 introduction piece, blending digital design drawings,
            photography, and artificial intelligence into a single nature-focused concept.
          </p>
          <ul className="detail-list">
            <li>
              <strong>Previous Open Edition:</strong>{' '}
              <a className="trust-link" href="https://opensea.io/collection/som1" target="_blank" rel="noreferrer">
                opensea.io/collection/som1
              </a>
            </li>
            <li><strong>Year:</strong> 2022</li>
            <li><strong>Concept:</strong> Nature vs Nurture • Order vs Chaos</li>
          </ul>
        </section>

        <section className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>Studio Signals</h2>
          <p>Recent brand captures from the JRZZO studio language.</p>
          <div className="signal-grid">
            {brandSignals.map((item) => (
              <article className="signal-card" key={item.id}>
                <Image src={item.src} alt={`Studio signal ${item.id}`} width={item.width} height={item.height} />
                <span className="signal-tag">Signal #{item.id}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>Plots</h2>
          <p>Pen-plot discipline archive produced in 2022 and expanded through recent studies feeding the JRZZO visual language.</p>
          <div className="signal-grid">
            {plotSignals.map((item) => (
              <article className="signal-card" key={item.id}>
                <Image src={item.src} alt={`Plot signal ${item.id}`} width={item.width} height={item.height} />
                <span className="signal-tag">Plot #{item.id}</span>
              </article>
            ))}
          </div>
          <div className="actions" style={{ marginTop: '0.9rem' }}>
            <Link href="/plots" className="btn">Open Full Plots Tab</Link>
          </div>
        </section>

        <section className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>Rzzodue Videos</h2>
          <p>Project process videos tied to the active Rzzodue drop narrative.</p>
          <div className="video-grid">
            {rzzodueVideos.map((item) => (
              <article className="video-card" key={item.id}>
                <video controls playsInline preload="metadata" className="video-el">
                  <source src={item.src} type="video/mp4" />
                </video>
                <span className="video-label">{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="submissions" className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>Recent Submissions</h2>
          <p>Selected entries from current creative submissions and contest work.</p>
          <div className="submission-grid">
            {submissions.map((item) => (
              <article className="submission-card" key={item.id}>
                <Image src={item.src} alt={`Submission ${item.id}`} width={item.width} height={item.height} />
                <span className="signal-tag">Submission #{item.id}</span>
              </article>
            ))}
          </div>
          <div className="video-grid single-video" style={{ marginTop: '0.9rem' }}>
            {submissionVideos.map((item) => (
              <article className="video-card" key={item.id}>
                <video controls playsInline preload="metadata" className="video-el">
                  <source src={item.src} type="video/mp4" />
                </video>
                <span className="video-label">{item.label}</span>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
