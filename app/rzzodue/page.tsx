import Link from 'next/link';
import Countdown from '../../components/countdown';
import MintPanel from '../../components/mint-panel';

export default function RzzoduePage() {
  return (
    <main className="main">
      <section className="card" style={{ padding: 28 }}>
        <p className="kicker">Rzzodue</p>
        <h1 style={{ margin: '8px 0 6px', fontSize: 42 }}>Desert-Born On-Chain SVGs</h1>
        <p className="muted">Mint opens: <Countdown /></p>
        <div style={{ marginTop: 16 }}>
          <Link href="/" className="button">Back</Link>
        </div>
      </section>

      <section className="grid grid-2" style={{ marginTop: 16 }}>
        <MintPanel />
        <div className="card">
          <p className="kicker">Traits</p>
          <ul className="muted" style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
            <li>Pen Gauge</li>
            <li>Paper Weight</li>
            <li>Plot Duration</li>
            <li>Size</li>
            <li>Origin Biome</li>
            <li>Hatch Density</li>
            <li>Mood</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
