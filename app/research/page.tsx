import Link from 'next/link';
import BrandLogo from '../../components/brand-logo';

const plannedResearch = [
  'Real Spotify API ingest mode for authenticated playlist and liked-track analysis.',
  'Comparative model benchmark: UMAP vs t-SNE vs PCA on the same feature slices.',
  'Temporal analysis layer for release-year drift and genre migration trends.',
  'Hybrid curation mode combining audio features with manual artist mood boards.',
  'Collector-facing soundtrack generator mapped to Rzzodue trait archetypes.'
];

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
            Central hub for interactive music research and long-form papers. This tab is designed to grow with future
            studies while keeping each research stream clear and serious for readers.
          </p>
          <div className="actions">
            <Link href="/visualizer" className="btn btn-primary">Open Visualizer</Link>
            <Link href="/music-whitepaper" className="btn">Read Music Whitepaper</Link>
          </div>
        </section>

        <section className="detail-panel reveal reveal-delay-1">
          <h2 className="section-title" style={{ marginTop: 0 }}>Current Research</h2>
          <ul className="detail-list">
            <li><strong>Spotify Audio Universe Visualizer:</strong> Interactive 25,000-track canvas with UMAP/t-SNE views.</li>
            <li><strong>Music Whitepaper:</strong> Visualizing Musical Similarity Through Dimensionality Reduction.</li>
            <li><strong>Export Path:</strong> PNG output for publication and social distribution.</li>
          </ul>
        </section>

        <section className="detail-panel reveal reveal-delay-2">
          <h2 className="section-title" style={{ marginTop: 0 }}>Planned Research Additions</h2>
          <ul className="detail-list">
            {plannedResearch.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
