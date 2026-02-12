import Link from 'next/link';
import BrandLogo from '../../components/brand-logo';

export default function WhitepaperPage() {
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
            <Link href="/rzzodue" className="nav-link">Enter Drop</Link>
            <Link href="/open-editions" className="nav-link">Open Editions</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero reveal">
          <h1 className="hero-title">RZZODUE WHITEPAPER</h1>
          <p className="hero-subtitle">v1.0 • Base Mainnet</p>
          <p className="hero-copy">
            Rzzodue is a 300-token art collection that combines curated visual source material, deterministic metadata,
            and commit-reveal integrity for transparent launch operations and long-term provenance.
          </p>
        </section>

        <section className="detail-panel reveal reveal-delay-1">
          <h2 className="section-title" style={{ marginTop: 0 }}>Collection Parameters</h2>
          <ul className="detail-list">
            <li><strong>Supply:</strong> 300 fixed</li>
            <li><strong>Mint:</strong> 0 ETH</li>
            <li><strong>Wallet Rule:</strong> 1 per wallet initially</li>
            <li><strong>Redemption:</strong> first 88 tokens are redemption eligible</li>
          </ul>
        </section>

        <section className="detail-panel reveal reveal-delay-1">
          <h2 className="section-title" style={{ marginTop: 0 }}>Trait and Rarity Model</h2>
          <ul className="detail-list">
            <li><strong>Legendary:</strong> 9 (3%)</li>
            <li><strong>Rare:</strong> 36 (12%)</li>
            <li><strong>Uncommon:</strong> 90 (30%)</li>
            <li><strong>Common:</strong> 165 (55%)</li>
            <li><strong>Core Traits:</strong> Series, Edition, Variant, Rarity Tier, Rarity Score, Mood</li>
            <li><strong>Identity Traits:</strong> Figure Archetype, Figure Number, Signal Strength, Glyph Count</li>
          </ul>
        </section>

        <section className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>Security and Launch Integrity</h2>
          <ul className="detail-list">
            <li><strong>Guardrails:</strong> Ownable, Pausable, ReentrancyGuard</li>
            <li><strong>Reveal Fairness:</strong> pre-mint commitment with post-mint seed/salt finalization</li>
            <li><strong>Hard Stops:</strong> no mint if CIDs missing, commitment missing, or contract mismatch</li>
            <li><strong>Network:</strong> Base Mainnet</li>
          </ul>
        </section>

        <section className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>Legal Notice</h2>
          <p>
            This whitepaper is informational only and is not financial, investment, tax, or legal advice. NFTs are
            volatile digital assets. No promises are made regarding future market value, liquidity, or profit.
          </p>
          <p>
            Token ownership does not grant equity, governance, or revenue rights unless explicitly stated in official
            project terms.
          </p>
        </section>
      </main>
    </>
  );
}
