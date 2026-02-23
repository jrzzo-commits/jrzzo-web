import Link from 'next/link';
import MintPanel from '../../components/mint-panel';
import RealmGallery from '../../components/realm-gallery';
import BrandLogo from '../../components/brand-logo';
import { collectionAddress } from '../../lib/thirdweb';

const realms = [
  { id: '6835', src: '/images/img_6835.jpg', width: 3500, height: 3500 },
  { id: '6831', src: '/images/img_6831.jpg', width: 3500, height: 3150 },
  { id: '6825', src: '/images/img_6825.jpg', width: 3477, height: 3500 },
  { id: '6827', src: '/images/img_6827.jpg', width: 3500, height: 3336 },
  { id: '6816', src: '/images/img_6816.jpg', width: 3500, height: 3150 }
];

const rarityBreakdown = [
  { tier: 'Legendary', count: 9, share: '3%' },
  { tier: 'Rare', count: 36, share: '12%' },
  { tier: 'Uncommon', count: 90, share: '30%' },
  { tier: 'Common', count: 165, share: '55%' }
];

const moodPools = [
  { tier: 'Legendary', moods: 'Twilight Cipher, Obsidian Bloom, Ghost Frequency, Nocturne Heat' },
  { tier: 'Rare', moods: 'Solar Drift, Echo Pulse, Neon Static, Monolith Calm, Twilight Cipher' },
  { tier: 'Core', moods: 'Desert Mirage, Duststorm Signal, Analog Ritual, Silent Orbit, Monolith Calm, Echo Pulse' }
];

export default function RzzoduePage() {
  const launchStatusLabel = 'Mint closed on Base mainnet';
  const contractHref = collectionAddress ? `https://basescan.org/address/${collectionAddress}` : '';
  const openseaHref = 'https://opensea.io/assets/base/0x442150db63Ba2b062Cc0D5936531dc6961E9B747/1';
  const magicEdenHref = 'https://magiceden.us/u/rzzodue';

  return (
    <>
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
            <a href="https://x.com/jrzzo_" target="_blank" rel="noopener noreferrer" className="nav-link nav-icon-link" aria-label="JRZZO on X">
              <svg className="x-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M18.9 2H22l-6.77 7.75L23 22h-6.1l-4.77-6.24L6.7 22H3.58l7.25-8.28L1 2h6.25l4.31 5.68L18.9 2Zm-1.07 18h1.69L6.33 3.9H4.52L17.83 20Z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero reveal">
          <h1 className="hero-title">RZZODUE</h1>
          <p className="hero-subtitle">300 On-Chain Portals • Sold Out • Instant Reveal Live</p>
          <p className="hero-time">300 / 300 Minted • Secondary Live</p>
          <p className="hero-copy">
            300 curated portals on Base with deterministic trait generation: rarity tiers, figure archetypes,
            figure numbers, signal strength, glyph count, and rarity-aware moods.
          </p>
          <div className="actions">
            <Link href="/whitepaper" className="btn">Read Whitepaper</Link>
          </div>
        </section>

        <section className="trust-bar reveal reveal-delay-1">
          <div className="trust-item">
            <span className="trust-label">Network</span>
            <span className="trust-value">Base Mainnet</span>
          </div>
          <div className="trust-item">
            <span className="trust-label">Supply</span>
            <span className="trust-value">300</span>
          </div>
          <div className="trust-item">
            <span className="trust-label">Status</span>
            <span className="trust-value">Sold Out</span>
          </div>
          <div className="trust-item">
            <span className="trust-label">Contract</span>
            {collectionAddress ? (
              <a className="trust-link" href={contractHref} target="_blank" rel="noopener noreferrer">
                {collectionAddress.slice(0, 8)}...{collectionAddress.slice(-6)}
              </a>
            ) : (
              <span className="trust-value">Set in env</span>
            )}
          </div>
        </section>
        <p className="muted" style={{ marginTop: 10 }}>
          Marketplace: <a className="trust-link" href={openseaHref} target="_blank" rel="noopener noreferrer">View on OpenSea</a>
          {' '}•{' '}
          <a className="trust-link" href={magicEdenHref} target="_blank" rel="noopener noreferrer">View on Magic Eden</a>
        </p>
        <p className="muted" style={{ marginTop: 12 }}>
          V2 is live on Base mainnet with IPFS PNG metadata. OpenSea updates first; Magic Eden Base indexing can lag briefly.
        </p>

        <section id="rarity-model" className="trait-grid reveal reveal-delay-1">
          <article className="detail-panel trait-panel">
            <h2 className="section-title" style={{ marginTop: 0 }}>Rarity Model</h2>
            <p>
              Finalized metadata is cohesive across all 300 tokens and locked to deterministic generation so rarity
              and traits remain stable across marketplaces.
            </p>
            <div className="rarity-grid">
              {rarityBreakdown.map((item) => (
                <div key={item.tier} className="rarity-card">
                  <span className="rarity-tier">{item.tier}</span>
                  <span className="rarity-count">{item.count}</span>
                  <span className="rarity-share">{item.share} of supply</span>
                </div>
              ))}
            </div>
          </article>
          <article className="detail-panel trait-panel">
            <h2 className="section-title" style={{ marginTop: 0 }}>Mood Engine</h2>
            <p>Every token has a generated mood, weighted by rarity tier.</p>
            <ul className="detail-list">
              {moodPools.map((item) => (
                <li key={item.tier}><strong>{item.tier}:</strong> {item.moods}</li>
              ))}
            </ul>
          </article>
        </section>

        <h2 id="gallery" className="section-title reveal reveal-delay-2">Realm Gallery</h2>
        <RealmGallery realms={realms} />
        <p className="muted" style={{ marginTop: 10 }}>
          Full minted set: {' '}
          <a className="trust-link" href="https://opensea.io/assets/base/0x442150db63Ba2b062Cc0D5936531dc6961E9B747/1" target="_blank" rel="noopener noreferrer">
            OpenSea contract view
          </a>
          {' '}•{' '}
          <a className="trust-link" href="https://magiceden.us/u/rzzodue" target="_blank" rel="noopener noreferrer">
            Magic Eden profile
          </a>
        </p>

        <section className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>The Story</h2>
          <p>
            Rzzodue translates physical plotted etches into on-chain portals. The release is designed as a free claim
            with optional physical redemption for the first 88 holders.
          </p>
          <p>
            Mint is complete and sold out. Reveal is instant through V2 metadata, with secondary links below for
            collectors following the collection.
          </p>
          <ul className="detail-list">
            <li><strong>Supply:</strong> 300 capped</li>
            <li><strong>Mint:</strong> Complete (300 / 300)</li>
            <li><strong>Physical Redemption:</strong> First 88 holders</li>
            <li><strong>Trait Set:</strong> Series, Edition, Variant, Rarity Tier, Rarity Score, Mood</li>
            <li><strong>Identity Traits:</strong> Figure Archetype, Figure Number, Signal Strength, Glyph Count</li>
            <li><strong>Provenance:</strong> Commit-reveal fairness plus fixed IPFS metadata for final PNG artwork</li>
            <li><strong>Launch:</strong> {launchStatusLabel}</li>
            <li><strong>Reveal:</strong> Live on V2 metadata</li>
          </ul>
        </section>

        <section className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>Project Signals</h2>
          <p>Core campaign marks directly tied to the Rzzodue release.</p>
          <div className="signal-grid">
            <article className="signal-card">
              <img src="/rzzodue-brand/agents-reversed.jpg" alt="Agents reversed the silence mark" />
              <span className="signal-tag">Agents Reversed</span>
            </article>
            <article className="signal-card">
              <img src="/rzzodue-brand/300-portals.jpg" alt="300 portals campaign mark" />
              <span className="signal-tag">300 Portals</span>
            </article>
          </div>
        </section>

        <section id="mint-panel" style={{ marginTop: '1rem' }} className="reveal reveal-delay-2">
          <MintPanel />
          <p className="footer-note">
            Follow launch updates on{' '}
            <a href="https://x.com/jrzzo_" target="_blank" rel="noopener noreferrer">@jrzzo_</a>
            {' '}•{' '}
            <Link href="/whitepaper">Whitepaper</Link>
            {' '}• jrzzo.com/rzzodue
          </p>
        </section>
      </main>

      <div className="sticky-mint-cta">
        <a href="#mint-panel" className="btn btn-primary">Sold Out</a>
      </div>
    </>
  );
}
