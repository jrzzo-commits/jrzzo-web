'use client';

export default function FrequencyPaperPrintButton() {
  return (
    <button
      type="button"
      className="frequency-whitepaper-print no-print"
      onClick={() => window.print()}
    >
      Print / Download PDF
    </button>
  );
}
