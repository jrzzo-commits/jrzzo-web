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
    <div className="page-theme page-theme-home">
      <header className="site-header">
        <div className="header-wrap">
          <BrandLogo />
          <div className="header-actions">
            <Link href="/" className="nav-link nav-home-link" aria-label="Home">
              <svg className="home-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 3.2 3.6 10v10.8h6.2v-6.7h4.4v6.7h6.2V10L12 3.2Zm0-2.2 10.8 8.8v13H12v-6.7h0v6.7H1.2v-13L12 1Z" />
              </svg>
              <span className="nav-home-text">Home</span>
            </Link>
            <Link href="/open-editions" className="nav-link">Open Editions</Link>
            <Link href="/plots" className="nav-link">Plots</Link>
            <Link href="/research" className="nav-link">Research</Link>
            <a href="#submissions" className="nav-link">Submissions</a>
            <Link href="/rzzodue" className="nav-link">Enter Drop</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero home-hero reveal">
          <div className="home-hero-copy">
            <h1 className="hero-title">RZZODUE</h1>
            <p className="hero-subtitle">Code x Art x Tech • Desert Signal Collection • Sold Out</p>
            <p className="hero-copy">
              From plotted ink silence to on-chain signal. 300 curated realms on Base with rarity, mood, and provenance
              structure built for clean marketplace indexing and long-term collector narrative.
            </p>
            <div className="actions">
              <Link href="/rzzodue" className="btn btn-primary">View Rzzodue</Link>
              <Link href="/research" className="btn">Open Research</Link>
              <a href="https://x.com/jrzzo_" className="btn" target="_blank" rel="noopener noreferrer">X @jrzzo_</a>
              <a href="https://warpcast.com/jrzzo" className="btn" target="_blank" rel="noopener noreferrer">Farcaster @jrzzo</a>
            </div>
          </div>
          <article className="home-feature-card">
            <Image src="/brand/img_6886.jpg" alt="JRZZO featured studio signal" width={1000} height={1000} />
            <div className="home-feature-caption">
              <strong>Current Release:</strong> Rzzodue on Base • Sold Out (300/300)
            </div>
          </article>
        </section>

        <div className="stats reveal reveal-delay-1">
          <div className="stat">
            <div className="stat-value">300</div>
            <div className="stat-label">Total Supply</div>
          </div>
          <div className="stat">
            <div className="stat-value">SOLD</div>
            <div className="stat-label">Mint Status</div>
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

        <section className="detail-panel reveal reveal-delay-1">
          <h2 className="section-title" style={{ marginTop: 0 }}>Projects</h2>
          <p>Primary collection hub with gallery and rarity access points.</p>
          <div className="project-grid">
            <article className="project-card">
              <h3>Rzzodue</h3>
              <p>Sold out on Base. 300 portals with live metadata and rarity structure.</p>
              <div className="actions" style={{ marginTop: '0.6rem' }}>
                <Link href="/rzzodue#gallery" className="btn btn-primary">Open Gallery</Link>
                <Link href="/rzzodue#rarity-model" className="btn">View Rarities</Link>
                <a className="btn" href="https://opensea.io/assets/base/0x442150db63Ba2b062Cc0D5936531dc6961E9B747/1" target="_blank" rel="noopener noreferrer">
                  OpenSea Token View
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="open-editions" className="detail-panel reveal reveal-delay-1">
          <h2 className="section-title" style={{ marginTop: 0 }}>Open Editions</h2>
          <p>
            S.O.M.1 (Shades of Midnight) is JRZZO&apos;s 2022 introduction piece, blending digital design drawings,
            photography, and artificial intelligence into a single nature-focused concept.
          </p>
          <ul className="detail-list">
            <li>
              <strong>Previous Open Edition:</strong>{' '}
              <a className="trust-link" href="https://opensea.io/collection/som1" target="_blank" rel="noopener noreferrer">
                opensea.io/collection/som1
              </a>
            </li>
            <li><strong>Year:</strong> 2022</li>
            <li><strong>Concept:</strong> Nature vs Nurture • Order vs Chaos</li>
          </ul>
        </section>

        <section className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>Research Lab</h2>
          <p>
            Active research programs powering JRZZO publication work, visual studies, and data-backed creative direction.
          </p>
          <ul className="detail-list">
            <li><strong>Scope:</strong> Frequency Atlas protocols + Spotify Audio Universe mapping</li>
            <li><strong>Outputs:</strong> Interactive visualizers, publication-ready papers, and exportable visuals</li>
            <li><strong>Cadence:</strong> Ongoing releases in the dedicated Research Hub</li>
          </ul>
          <div className="actions" style={{ marginTop: '0.9rem' }}>
            <Link href="/research" className="btn btn-primary">Open Research Hub</Link>
            <Link href="/music-whitepaper" className="btn">Read Music Whitepaper</Link>
          </div>
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
    </div>
  );
}
