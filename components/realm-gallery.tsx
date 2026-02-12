'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Realm = {
  id: string;
  src: string;
  width: number;
  height: number;
};

export default function RealmGallery({ realms }: { realms: Realm[] }) {
  const [active, setActive] = useState<Realm | null>(null);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [active]);

  return (
    <>
      <p className="gallery-hint">Tap or click any realm to view full image.</p>
      <section className="gallery">
        {realms.map((realm) => (
          <button
            type="button"
            className="gallery-card gallery-trigger"
            key={realm.id}
            onClick={() => setActive(realm)}
            aria-label={`Open full image for Realm ${realm.id}`}
          >
            <Image src={realm.src} alt={`Realm ${realm.id}`} width={realm.width} height={realm.height} />
            <div className="tag">Realm #{realm.id}</div>
          </button>
        ))}
      </section>

      {active && (
        <div className="lightbox-backdrop" onClick={() => setActive(null)} role="presentation">
          <div
            className="lightbox-panel"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Realm ${active.id} full image`}
          >
            <div className="lightbox-header">
              <span className="lightbox-title">Realm #{active.id}</span>
              <button type="button" className="lightbox-close" onClick={() => setActive(null)}>
                Close
              </button>
            </div>
            <div className="lightbox-image-wrap">
              <Image
                src={active.src}
                alt={`Realm ${active.id} full size`}
                width={active.width}
                height={active.height}
                className="lightbox-image"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
