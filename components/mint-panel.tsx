'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { getContract, prepareContractCall, readContract } from 'thirdweb';
import { ConnectButton, TransactionButton, useActiveAccount } from 'thirdweb/react';
import { chain, client, collectionAddress } from '../lib/thirdweb';

const MAX_SUPPLY = 300n;
const BASESCAN_TX = 'https://basescan.org/tx/';

function normalizeMintError(message: string): string {
  if (message.includes('WalletLimitReached')) return 'Wallet limit reached: max 1 mint per wallet right now.';
  if (message.includes('MintInactive')) return 'Mint is not active yet.';
  if (message.includes('SoldOut')) return 'Sold out.';
  if (message.includes('EnforcedPause')) return 'Mint is temporarily paused.';
  if (message.toLowerCase().includes('user rejected')) return 'Transaction cancelled in wallet.';
  return message;
}

export default function MintPanel() {
  const account = useActiveAccount();
  const [status, setStatus] = useState('Connect wallet to mint.');
  const [minted, setMinted] = useState<bigint>(0n);
  const [lastTxHash, setLastTxHash] = useState('');

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
  const soldOut = supplyLeft === 0n;
  const mintDisabled = !account || soldOut;
  const txUrl = lastTxHash ? `${BASESCAN_TX}${lastTxHash}` : '';
  const shareText = `I minted Rzzodue on Base. Free mint, 300 supply, first 88 redemption eligible.`;
  const shareTarget = encodeURIComponent('https://jrzzo.com/rzzodue');
  const shareX = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${shareTarget}`;
  const shareFarcaster = `https://warpcast.com/~/compose?text=${encodeURIComponent(`${shareText} https://jrzzo.com/rzzodue`)}`;

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
      {soldOut && (
        <p className="muted" style={{ marginTop: 4, color: '#f8f4f0' }}>
          Sold out.
        </p>
      )}

      <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
        <ConnectButton
          client={client}
          chain={chain}
          connectButton={{
            label: account ? 'Wallet Connected' : 'Connect Wallet'
          }}
        />

        <TransactionButton
          transaction={() => {
            if (!account) throw new Error('Connect wallet first.');
            if (soldOut) throw new Error('Sold out.');
            return prepareContractCall({
              contract,
              method: 'function publicMint()',
              params: []
            });
          }}
          onTransactionConfirmed={(receipt) => {
            setLastTxHash(receipt.transactionHash);
            setStatus(`Mint confirmed.`);
            void refreshMinted();
          }}
          onError={(error) => {
            setStatus(`Mint failed: ${normalizeMintError(error.message)}`);
          }}
          style={{
            border: '1px solid rgba(248, 244, 240, 0.5)',
            background: mintDisabled ? '#7b2a2d' : '#d61f26',
            color: '#fff',
            padding: '0.65rem 1rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: mintDisabled ? 'not-allowed' : 'pointer',
            opacity: mintDisabled ? 0.65 : 1
          }}
        >
          {soldOut ? 'Sold Out' : 'Mint Rzzodue'}
        </TransactionButton>
      </div>

      <p className="muted" style={{ marginTop: 12 }}>
        {account ? `Connected: ${account.address}` : 'Wallet not connected yet.'}
      </p>
      <p className="muted" style={{ marginTop: 6, wordBreak: 'break-word' }}>
        {status}
      </p>
      {txUrl && (
        <p className="muted" style={{ marginTop: 6, wordBreak: 'break-word' }}>
          Tx: <a href={txUrl} target="_blank" rel="noopener noreferrer">{lastTxHash}</a>
        </p>
      )}
      {txUrl && (
        <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
          <a className="nav-link" href={shareX} target="_blank" rel="noopener noreferrer">Share on X</a>
          <a className="nav-link" href={shareFarcaster} target="_blank" rel="noopener noreferrer">Share on Farcaster</a>
        </div>
      )}
    </div>
  );
}
