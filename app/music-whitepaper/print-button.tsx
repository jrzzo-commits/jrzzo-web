'use client';

export default function PrintButton() {
  return (
    <button type="button" className="music-whitepaper-print no-print" onClick={() => window.print()}>
      Download PDF
    </button>
  );
}
