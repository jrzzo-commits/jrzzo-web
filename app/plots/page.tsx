import Link from 'next/link';
import BrandLogo from '../../components/brand-logo';
import RealmGallery from '../../components/realm-gallery';

const plots = [
  { id: '7679', src: '/plots/img_7679.jpg', width: 2701, height: 3043 },
  { id: '7680', src: '/plots/img_7680.jpg', width: 2319, height: 3166 },
  { id: '7681', src: '/plots/img_7681.jpg', width: 2779, height: 2829 },
  { id: '7682', src: '/plots/img_7682.jpg', width: 2751, height: 3046 },
  { id: '7685', src: '/plots/img_7685.jpg', width: 2598, height: 2628 },
  { id: '7686', src: '/plots/img_7686.jpg', width: 2572, height: 2997 },
  { id: '7687', src: '/plots/img_7687.jpg', width: 2862, height: 2901 },
  { id: '7688', src: '/plots/img_7688.jpg', width: 2834, height: 2876 },
  { id: '7689', src: '/plots/img_7689.jpg', width: 2800, height: 2249 },
  { id: '7690', src: '/plots/img_7690.jpg', width: 2751, height: 2712 },
  { id: '7691', src: '/plots/img_7691.jpg', width: 2663, height: 2636 },
  { id: '7692', src: '/plots/img_7692.jpg', width: 2766, height: 2835 },
  { id: '7694', src: '/plots/img_7694.jpg', width: 2618, height: 2709 },
  { id: '7695', src: '/plots/img_7695.jpg', width: 2636, height: 2748 },
  { id: '7698', src: '/plots/img_7698.jpg', width: 2758, height: 2933 },
  { id: '7699', src: '/plots/img_7699.jpg', width: 2564, height: 3548 },
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
            Archive of focused pen-plot works produced in 2022 and expanded since, building JRZZO drawing discipline.
            This gallery uses the same full-image lightbox behavior as the Rzzodue samples for clean mobile and desktop viewing.
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
