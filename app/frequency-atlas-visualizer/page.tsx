import Link from 'next/link';
import BrandLogo from '../../components/brand-logo';
import FrequencyAtlasVisualizer from '../../components/frequency-atlas-visualizer';

export default function FrequencyAtlasVisualizerPage() {
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
            <Link href="/frequency-atlas" className="nav-link">Frequency Atlas</Link>
            <Link href="/frequency-paper" className="nav-link">Frequency Paper</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero reveal">
          <h1 className="hero-title">FREQUENCY ATLAS VISUALIZER</h1>
          <p className="hero-subtitle">Live Intervention Explorer</p>
          <p className="hero-copy">
            Interactive atlas for intervention effects across frequency bands with evidence quality, key findings,
            and protocol synergy views.
          </p>
          <div className="actions">
            <Link href="/frequency-paper" className="btn btn-primary">Read Frequency Paper</Link>
            <Link href="/frequency-atlas" className="btn">Back to Frequency Atlas</Link>
          </div>
        </section>

        <section className="detail-panel reveal reveal-delay-1">
          <h2 className="section-title" style={{ marginTop: 0 }}>Visualizer</h2>
          <FrequencyAtlasVisualizer />
        </section>
      </main>
    </div>
  );
}
