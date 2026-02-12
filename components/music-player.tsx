'use client';

import { useMemo, useRef, useState } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isOn, setIsOn] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [error, setError] = useState('');

  const label = useMemo(() => (isOn ? 'Pause Audio' : 'Play Audio'), [isOn]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isOn) {
      audio.pause();
      setIsOn(false);
      return;
    }

    setError('');
    try {
      await audio.play();
      setIsOn(true);
    } catch {
      setError('Tap again to enable audio.');
    }
  };

  return (
    <div className={`music-player${expanded ? ' is-open' : ''}`}>
      <audio ref={audioRef} src="/music/freeway-0308252ab.mp3" loop preload="none" />
      <div className="music-head">
        <button type="button" className="music-expand" onClick={() => setExpanded((prev) => !prev)}>
          {expanded ? 'Hide Music' : 'Music'}
        </button>
        <button type="button" className="music-toggle" onClick={toggle}>
          {label}
        </button>
      </div>
      {expanded ? (
        <>
          <p className="music-credit">
            Made with GOFD stems from the Ghost of Frank Dukes NFT project. JRZZO credits prior work experience with
            Adam Feeney (Ging).
          </p>
          {error ? <p className="music-error">{error}</p> : null}
        </>
      ) : null}
    </div>
  );
}
