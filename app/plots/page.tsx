import Link from 'next/link';
import BrandLogo from '../../components/brand-logo';
import RealmGallery from '../../components/realm-gallery';

const plots = [
  { id: '7690', src: '/plots/img_7690.jpg', width: 2751, height: 2712 },
  { id: '7691', src: '/plots/img_7691.jpg', width: 2723, height: 2752 },
  { id: '7692', src: '/plots/img_7692.jpg', width: 2734, height: 2756 },
  { id: '7694', src: '/plots/img_7694.jpg', width: 2751, height: 2756 },
  { id: '7695', src: '/plots/img_7695.jpg', width: 2756, height: 2757 },
  { id: '7698', src: '/plots/img_7698.jpg', width: 2744, height: 2757 },
  { id: '7699', src: '/plots/img_7699.jpg', width: 2757, height: 2742 },
  { id: '7700', src: '/plots/img_7700.jpg', width: 2764, height: 3480 }
];

export default function PlotsPage() {
  return (
    <>
      <header className="site-header">
        <div className="header-wrap">
          <BrandLogo />
          <div className="header-actions">
            <Link href="/rzzodue" className="nav-link">Enter Drop</Link>
            <Link href="/open-editions" className="nav-link">Open Editions</Link>
            <Link href="/" className="nav-link">Home</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero reveal">
          <h1 className="hero-title">PLOTS</h1>
          <p className="hero-subtitle">Pen Plot Discipline</p>
          <p className="hero-copy">
            Archive of focused pen plot works that built JRZZO drawing discipline. This gallery shares the same
            interaction system as Rzzodue samples for a consistent experience across the site.
          </p>
        </section>

        <h2 className="section-title reveal reveal-delay-1">Pen Plot Gallery</h2>
        <section className="reveal reveal-delay-2">
          <RealmGallery
            realms={plots}
            labelPrefix="Plot"
            hintText="Tap or click any plot to open full image."
          />
        </section>
      </main>
    </>
  );
}
