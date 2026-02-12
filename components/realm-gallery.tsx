'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Realm = {
  id: string;
  src: string;
  width: number;
  height: number;
};

type Props = {
  realms: Realm[];
  labelPrefix?: string;
  hintText?: string;
};

export default function RealmGallery({
  realms,
  labelPrefix = 'Realm',
  hintText = 'Tap or click any image to view full size.'
}: Props) {
  const [active, setActive] = useState<Realm | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <p className="gallery-hint">{hintText}</p>
      <section className="gallery">
        {realms.map((realm) => (
          <button
            type="button"
            className="gallery-card gallery-trigger"
            key={realm.id}
            onClick={() => setActive(realm)}
            aria-label={`Open full image for ${labelPrefix} ${realm.id}`}
          >
            <Image src={realm.src} alt={`${labelPrefix} ${realm.id}`} width={realm.width} height={realm.height} />
            <div className="tag">{labelPrefix} #{realm.id}</div>
          </button>
        ))}
      </section>

      {mounted && active
        ? createPortal(
            <div className="lightbox-backdrop" onClick={() => setActive(null)} role="presentation">
              <div
                className="lightbox-panel"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={`${labelPrefix} ${active.id} full image`}
              >
                <div className="lightbox-header">
                  <span className="lightbox-title">{labelPrefix} #{active.id}</span>
                  <button type="button" className="lightbox-close" onClick={() => setActive(null)}>
                    Close
                  </button>
                </div>
                <div className="lightbox-image-wrap">
                  <Image
                    src={active.src}
                    alt={`${labelPrefix} ${active.id} full size`}
                    width={active.width}
                    height={active.height}
                    className="lightbox-image"
                    priority
                  />
                </div>
              </div>
            </div>
            ,
            document.body
          )
        : null}
    </>
  );
}
