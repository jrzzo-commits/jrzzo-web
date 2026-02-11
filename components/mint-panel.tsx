'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { getContract, prepareContractCall, readContract } from 'thirdweb';
import { ConnectButton, TransactionButton, useActiveAccount } from 'thirdweb/react';
import { chain, client, collectionAddress } from '../lib/thirdweb';

const MAX_SUPPLY = 300n;

export default function MintPanel() {
  const account = useActiveAccount();
  const [status, setStatus] = useState('Connect wallet to mint.');
  const [minted, setMinted] = useState<bigint>(0n);

  const contract = useMemo(() => {
    if (!collectionAddress) return null;
    return getContract({
      client,
      chain,
      address: collectionAddress
    });
  }, []);

  const refreshMinted = useCallback(async () => {
    if (!contract) return;
    try {
      const total = await readContract({
        contract,
        method: 'function totalMinted() view returns (uint256)',
        params: []
      });
      setMinted(total);
    } catch {
      // Keep UI usable if contract read fails (bad address or pre-deploy state).
    }
  }, [contract]);

  useEffect(() => {
    void refreshMinted();
    const timer = setInterval(() => {
      void refreshMinted();
    }, 15000);

    return () => clearInterval(timer);
  }, [refreshMinted]);

  const supplyLeft = minted < MAX_SUPPLY ? MAX_SUPPLY - minted : 0n;

  if (!process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID) {
    return (
      <div className="detail-panel">
        <h3 style={{ marginTop: 0 }}>Mint</h3>
        <p className="muted" style={{ marginBottom: 0 }}>
          Missing <code>NEXT_PUBLIC_THIRDWEB_CLIENT_ID</code>. Add env vars in Vercel and redeploy.
        </p>
      </div>
    );
  }

  if (!contract) {
    return (
      <div className="detail-panel">
        <h3 style={{ marginTop: 0 }}>Mint</h3>
        <p className="muted" style={{ marginBottom: 0 }}>
          Missing <code>NEXT_PUBLIC_COLLECTION_ADDRESS</code>. Set your deployed contract address and redeploy.
        </p>
      </div>
    );
  }

  return (
    <div className="detail-panel">
      <h3 style={{ marginTop: 0 }}>Mint</h3>
      <p className="muted" style={{ marginTop: 4 }}>
        Base chain · Free mint · 1 per wallet initially
      </p>
      <p className="muted" style={{ marginTop: 4 }}>
        Minted: {minted.toString()} / {MAX_SUPPLY.toString()} · Left: {supplyLeft.toString()}
      </p>

      <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
        <ConnectButton
          client={client}
          chain={chain}
          connectButton={{
            label: account ? 'Wallet Connected' : 'Connect Wallet'
          }}
        />

        <TransactionButton
          transaction={() =>
            prepareContractCall({
              contract,
              method: 'function publicMint()',
              params: []
            })
          }
          onTransactionConfirmed={(receipt) => {
            setStatus(`Mint confirmed: ${receipt.transactionHash}`);
            void refreshMinted();
          }}
          onError={(error) => {
            setStatus(`Mint failed: ${error.message}`);
          }}
          style={{
            border: '1px solid rgba(248, 244, 240, 0.5)',
            background: '#d61f26',
            color: '#fff',
            padding: '0.65rem 1rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}
        >
          Mint Rzzodue
        </TransactionButton>
      </div>

      <p className="muted" style={{ marginTop: 12 }}>
        {account ? `Connected: ${account.address}` : 'Wallet not connected yet.'}
      </p>
      <p className="muted" style={{ marginTop: 6, wordBreak: 'break-word' }}>
        {status}
      </p>
    </div>
  );
}
