import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="main">
      <section className="card" style={{ padding: 28 }}>
        <p className="kicker">jrzzo.com</p>
        <h1 style={{ margin: '10px 0 8px', fontSize: 52, lineHeight: 1.03 }}>Code x Art x Tech</h1>
        <p className="muted" style={{ maxWidth: 680 }}>
          Plotting silence. AI made me do this. Rzzodue is a 300-piece on-chain SVG release rooted in desert coordinates and physical plotter history.
        </p>
        <div style={{ marginTop: 18 }}>
          <Link href="/rzzodue" className="button button-primary">Enter Rzzodue Drop</Link>
        </div>
      </section>

      <section className="grid grid-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Drop Facts</p>
          <p>Supply: 300</p>
          <p>Chain: Base</p>
          <p>Mint: Free + sponsored flow</p>
          <p>Physicals: First 88 redemption eligible</p>
        </article>
        <article className="card">
          <p className="kicker">Next</p>
          <p className="muted">This starter is live-ready. Next step is wiring wallet connection, contract read/write, and map/provenance UI.</p>
        </article>
      </section>
    </main>
  );
}
