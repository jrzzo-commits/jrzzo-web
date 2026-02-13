import Link from 'next/link';
import BrandLogo from '../../components/brand-logo';

export default function FrequencyAtlasPage() {
  return (
    <div className="page-theme page-theme-visualizer">
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
            <Link href="/research" className="nav-link">Research</Link>
            <Link href="/frequency-paper" className="nav-link">Frequency Paper</Link>
            <Link href="/rzzodue" className="nav-link">Enter Drop</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero reveal">
          <h1 className="hero-title">FREQUENCY ATLAS</h1>
          <p className="hero-subtitle">Neuro-Oscillatory Intervention Project</p>
          <p className="hero-copy">
            Frequency Atlas research overview page. Open the live visualizer in its own section, or read the full paper.
          </p>
        </section>

        <section className="detail-panel reveal reveal-delay-1">
          <h2 className="section-title" style={{ marginTop: 0 }}>Frequency Atlas Summary</h2>
          <ul className="detail-list">
            <li><strong>Visualizer:</strong> Live intervention explorer with frequency-band response modeling.</li>
            <li><strong>Frequency Whitepaper:</strong> Formal Frequency Atlas research paper with embedded reader + downloadable PDF.</li>
            <li><strong>Export Path:</strong> Direct PDF download for publication, sharing, and archive use.</li>
            <li><strong>Research Scope:</strong> 150+ studies with intervention evidence and combined protocol patterns.</li>
          </ul>
          <div className="actions" style={{ marginTop: '0.8rem' }}>
            <Link href="/frequency-atlas-visualizer" className="btn btn-primary">Open Visualizer</Link>
            <Link href="/frequency-paper" className="btn">Read Frequency Paper</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
