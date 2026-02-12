'use client';

import { useEffect, useMemo, useState } from 'react';

function format(ms: number): string {
  if (ms <= 0) return 'Live';
  const totalSeconds = Math.floor(ms / 1000);
  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${d}d ${h}h ${m}m ${s}s`;
}

export default function Countdown() {
  const target = useMemo(() => {
    const raw = process.env.NEXT_PUBLIC_MINT_START || '2026-02-16T13:00:00Z';
    return new Date(raw).getTime();
  }, []);

  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  return <span>{format(target - now)}</span>;
}
