import Link from 'next/link';
import BrandLogo from '../../components/brand-logo';
import SpotifyVisualizer from '../../components/spotify-visualizer';

export default function VisualizerPage() {
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
            <Link href="/music-whitepaper" className="nav-link">Music Whitepaper</Link>
            <Link href="/rzzodue" className="nav-link">Enter Drop</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero reveal">
          <h1 className="hero-title">VISUALIZER</h1>
          <p className="hero-subtitle">Music Research Lab • UMAP + t-SNE</p>
          <p className="hero-copy">
            Play with the Spotify Audio Universe demo, inspect track neighborhoods, and move from exploration to serious analysis.
            For full methods and formal writeup, read the dedicated music whitepaper.
          </p>
          <div className="actions">
            <Link href="/music-whitepaper" className="btn btn-primary">Read Music Whitepaper</Link>
            <Link href="/research" className="btn">Back to Research</Link>
          </div>
        </section>

        <SpotifyVisualizer />
      </main>
    </div>
  );
}
