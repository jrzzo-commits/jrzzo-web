import Link from 'next/link';
import BrandLogo from '../../components/brand-logo';
import FrequencyAtlasVisualizer from '../../components/frequency-atlas-visualizer';

export default function ResearchPage() {
  return (
    <div className="page-theme page-theme-research-hub">
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
            <Link href="/rzzodue" className="nav-link">Enter Drop</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero reveal">
          <h1 className="hero-title">RESEARCH</h1>
          <p className="hero-subtitle">Music Lab + Publishing Track</p>
          <p className="hero-copy">
            Central hub for interactive research and long-form papers with direct access to live demos and publication-ready documents.
          </p>
        </section>

        <section className="detail-panel reveal reveal-delay-1">
          <h2 className="section-title" style={{ marginTop: 0 }}>Current Research • Frequency Atlas</h2>
          <ul className="detail-list">
            <li><strong>Visualizer:</strong> Live intervention explorer with frequency-band response modeling.</li>
            <li><strong>Research Scope:</strong> 150+ studies with intervention evidence and combined protocol patterns.</li>
            <li><strong>Paper:</strong> Formal Frequency Atlas paper with downloadable PDF.</li>
          </ul>
          <div className="actions" style={{ marginTop: '0.8rem' }}>
            <Link href="/frequency-paper" className="btn btn-primary">Read Frequency Paper</Link>
          </div>
          <FrequencyAtlasVisualizer />
        </section>

        <section className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>Current Research • Spotify Audio Universe</h2>
          <ul className="detail-list">
            <li><strong>Visualizer:</strong> Interactive 25,000-track canvas with UMAP/t-SNE views.</li>
            <li><strong>Music Whitepaper:</strong> Visualizing Musical Similarity Through Dimensionality Reduction.</li>
            <li><strong>Export Path:</strong> PNG output for publication and social distribution.</li>
          </ul>
          <div className="actions" style={{ marginTop: '0.8rem' }}>
            <Link href="/visualizer" className="btn btn-primary">Open Visualizer</Link>
            <Link href="/music-whitepaper" className="btn">Read Music Whitepaper</Link>
          </div>
        </section>

        <section className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>Future Research</h2>
          <p>still reseaching... future reseach pending.</p>
        </section>
      </main>
    </div>
  );
}
