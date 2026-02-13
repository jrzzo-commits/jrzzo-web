import Link from 'next/link';
import BrandLogo from '../../components/brand-logo';

export default function FrequencyPaperPage() {
  return (
    <div className="page-theme page-theme-research-hub">
      <header className="site-header no-print">
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
            <a href="/research/frequency-atlas-research-paper.pdf" download="frequency-atlas-research-paper.pdf" className="nav-link">Download PDF</a>
          </div>
        </div>
      </header>

      <main className="main frequency-paper-wrap">
        <section className="hero reveal no-print">
          <h1 className="hero-title">FREQUENCY PAPER</h1>
          <p className="hero-subtitle">Frequency Atlas Research Document</p>
          <p className="hero-copy">
            Opened from the Research section. Use the button below to download the official PDF.
          </p>
          <div className="actions">
            <a href="/research/frequency-atlas-research-paper.pdf" download="frequency-atlas-research-paper.pdf" className="btn btn-primary">
              Download PDF
            </a>
            <Link href="/research" className="btn">Back to Research</Link>
          </div>
        </section>

        <section className="detail-panel reveal reveal-delay-1 frequency-paper-view">
          <iframe
            src="/research/frequency-atlas-research-paper.pdf#view=FitH"
            title="Frequency Atlas Research Paper"
            className="frequency-paper-frame"
          />
        </section>
      </main>
    </div>
  );
}
