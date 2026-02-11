'use client';

import { useState } from 'react';

export default function MintPanel() {
  const [status, setStatus] = useState('Ready');

  const connectWallet = () => {
    setStatus('Wallet connection placeholder. Next: integrate thirdweb.');
  };

  const mint = () => {
    setStatus('Mint placeholder. Next: wire contract write + sponsored tx flow.');
  };

  return (
    <div className="card">
      <p className="kicker">Mint</p>
      <h3 style={{ marginTop: 8 }}>Rzzodue Genesis (300)</h3>
      <p className="muted">Base chain · Free mint · 1 per wallet (initial)</p>
      <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
        <button className="button" onClick={connectWallet}>Connect Wallet</button>
        <button className="button button-primary" onClick={mint}>Mint</button>
      </div>
      <p className="muted" style={{ marginTop: 12 }}>{status}</p>
    </div>
  );
}
