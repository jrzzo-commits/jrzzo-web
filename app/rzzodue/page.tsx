import Link from 'next/link';
import Countdown from '../../components/countdown';
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
  const launchUtc = '2026-02-16T13:00:00Z';
  const launchEtLabel = 'Monday, February 16, 2026 at 8:00 AM ET';
  const contractHref = collectionAddress ? `https://basescan.org/address/${collectionAddress}` : '';

  return (
    <>
      <header className="site-header">
        <div className="header-wrap">
          <BrandLogo />
          <div className="header-actions">
            <Link href="/open-editions" className="nav-link">Open Editions</Link>
            <Link href="/plots" className="nav-link">Plots</Link>
            <a href="https://x.com/jrzzo_" target="_blank" rel="noreferrer" className="nav-link nav-icon-link" aria-label="JRZZO on X">
              <svg className="x-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M18.9 2H22l-6.77 7.75L23 22h-6.1l-4.77-6.24L6.7 22H3.58l7.25-8.28L1 2h6.25l4.31 5.68L18.9 2Zm-1.07 18h1.69L6.33 3.9H4.52L17.83 20Z" />
              </svg>
            </a>
            <Link href="/" className="nav-link">Back</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero reveal">
          <h1 className="hero-title">RZZODUE</h1>
          <p className="hero-subtitle">300 On-Chain Portals • Mint opens in <Countdown /></p>
          <p className="hero-time">Mint opens {launchEtLabel} • {launchUtc}</p>
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

        <section className="trait-grid reveal reveal-delay-1">
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

        <h2 className="section-title reveal reveal-delay-2">Realm Gallery</h2>
        <RealmGallery realms={realms} />

        <section className="detail-panel reveal reveal-delay-2">
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
            <li><strong>Trait Set:</strong> Series, Edition, Variant, Rarity Tier, Rarity Score, Mood</li>
            <li><strong>Identity Traits:</strong> Figure Archetype, Figure Number, Signal Strength, Glyph Count</li>
            <li><strong>Provenance:</strong> Source Set + Source Asset embedded in metadata</li>
            <li><strong>Launch:</strong> {launchEtLabel}</li>
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
            <a href="https://x.com/jrzzo_" target="_blank" rel="noreferrer">@jrzzo_</a>
            {' '}•{' '}
            <Link href="/whitepaper">Whitepaper</Link>
            {' '}• jrzzo.com/rzzodue
          </p>
        </section>
      </main>

      <div className="sticky-mint-cta">
        <a href="#mint-panel" className="btn btn-primary">Mint Now</a>
      </div>
    </>
  );
}
