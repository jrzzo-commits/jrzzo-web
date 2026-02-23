'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { getContract, prepareContractCall, readContract } from 'thirdweb';
import { ConnectButton, TransactionButton, useActiveAccount } from 'thirdweb/react';
import { chain, client, collectionAddress } from '../lib/thirdweb';
import { isIpfsUri, toGatewayUrl } from '../lib/ipfs';

const MAX_SUPPLY = 300n;
const BASESCAN_TX = 'https://basescan.org/tx/';
const OPENSEA_V2_TOKEN = 'https://opensea.io/assets/base/0x442150db63Ba2b062Cc0D5936531dc6961E9B747/1';
const MAGIC_EDEN_PROFILE = 'https://magiceden.us/u/rzzodue';
const PREVIEW_TOKEN_ID = 1n;
const PREVIEW_RETRY_MS = 25000;
const PREVIEW_MAX_RETRIES = 12;

type PreviewState = 'loading' | 'loaded' | 'error';

function normalizeMintError(message: string): string {
  if (message.includes('WalletLimitReached')) return 'Wallet limit reached: max 2 mints per wallet right now.';
  if (message.includes('MintInactive')) return 'Mint is not active yet.';
  if (message.includes('SoldOut')) return 'Sold out.';
  if (message.includes('EnforcedPause')) return 'Mint is temporarily paused.';
  if (message.toLowerCase().includes('user rejected')) return 'Transaction cancelled in wallet.';
  return message;
}

function decodeDataJson(dataUri: string): unknown {
  const payload = dataUri.split(',')[1] ?? '';
  const binary = atob(payload);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  const decoded = new TextDecoder().decode(bytes);
  return JSON.parse(decoded);
}

async function preloadImage(url: string): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error('Image load failed.'));
    img.src = url;
  });
}

export default function MintPanel() {
  const account = useActiveAccount();
  const [status, setStatus] = useState('Mint closed. Collection sold out.');
  const [minted, setMinted] = useState<bigint>(0n);
  const [lastTxHash, setLastTxHash] = useState('');
  const [previewState, setPreviewState] = useState<PreviewState>('loading');
  const [previewUrl, setPreviewUrl] = useState('');
  const [previewNote, setPreviewNote] = useState('Live preview from V2 metadata.');

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

  const resolvePreviewUrl = useCallback(async (): Promise<string> => {
    if (!contract) throw new Error('Contract unavailable.');

    const tokenUriRaw = await readContract({
      contract,
      method: 'function tokenURI(uint256 tokenId) view returns (string)',
      params: [PREVIEW_TOKEN_ID]
    });

    const tokenUri = String(tokenUriRaw ?? '').trim();
    if (!tokenUri) throw new Error('Empty tokenURI.');

    if (tokenUri.startsWith('data:application/json;base64,')) {
      const parsed = decodeDataJson(tokenUri) as { image?: string };
      if (!parsed.image) throw new Error('Image field missing in data URI metadata.');
      return toGatewayUrl(parsed.image);
    }

    const tokenUriGateway = toGatewayUrl(tokenUri);
    if (tokenUriGateway.endsWith('.json') || isIpfsUri(tokenUri)) {
      const response = await fetch(tokenUriGateway, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Metadata fetch failed (${response.status}).`);
      const parsed = (await response.json()) as { image?: string };
      if (!parsed.image) throw new Error('Image field missing in metadata JSON.');
      return toGatewayUrl(parsed.image);
    }

    return tokenUriGateway;
  }, [contract]);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let attempts = 0;

    const run = async () => {
      if (!contract || cancelled) return;
      attempts += 1;

      try {
        setPreviewState('loading');
        const resolved = await resolvePreviewUrl();
        await preloadImage(resolved);
        if (cancelled) return;
        setPreviewUrl(resolved);
        setPreviewState('loaded');
        setPreviewNote('Live preview from V2 metadata.');
      } catch {
        if (cancelled) return;
        setPreviewState('error');
        setPreviewNote('Media indexing, retrying...');
        if (attempts < PREVIEW_MAX_RETRIES) {
          timer = setTimeout(run, PREVIEW_RETRY_MS);
        }
      }
    };

    void run();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [contract, resolvePreviewUrl]);

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
  const openSeaWallet = account ? `https://opensea.io/${account.address}` : '';

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
        Base chain · Mint closed · Sold out
      </p>
      <p className="muted" style={{ marginTop: 4 }}>
        Minted: {minted.toString()} / {MAX_SUPPLY.toString()} · Left: {supplyLeft.toString()}
      </p>
      {soldOut && (
        <p className="muted" style={{ marginTop: 6, color: '#fff', fontWeight: 700, letterSpacing: '0.04em' }}>
          Mint Closed - 300/300
        </p>
      )}
      <div className="mint-preview">
        {previewState === 'loaded' && previewUrl ? (
          <img
            src={previewUrl}
            alt="Rzzodue live token preview"
            className="mint-preview-image"
            onError={() => {
              setPreviewState('error');
              setPreviewNote('Media indexing, retrying...');
            }}
          />
        ) : (
          <div className="mint-preview-placeholder" role="status" aria-live="polite">
            <img src="/brand/jrzzo.svg" alt="JRZZO" className="mint-preview-logo" />
            <strong>RZZODUE</strong>
            <span>Preview loading</span>
          </div>
        )}
      </div>
      <p className="muted" style={{ marginTop: 6 }}>
        {previewNote} If marketplace indexing lags, branded placeholder is shown until media resolves.
      </p>
      <div className="mint-guide" aria-label="How to mint guide">
        <p className="mint-guide-kicker">Collector Guide</p>
        <p className="mint-guide-title">Sold Out &rarr; View Collection &rarr; Track on Marketplaces</p>
        <ul className="mint-guide-steps">
          <li>Primary mint is complete (300/300).</li>
          <li>Use links below for OpenSea and Magic Eden.</li>
          <li>If traits or images lag, refresh after indexing catches up.</li>
        </ul>
      </div>

      <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
        <ConnectButton
          client={client}
          chain={chain}
          connectButton={{
            label: account ? 'Wallet Connected' : 'Connect Wallet'
          }}
        />

        {!soldOut && (
          <TransactionButton
            transaction={() => {
              if (!account) throw new Error('Connect wallet first.');
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
            Mint Rzzodue
          </TransactionButton>
        )}
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 10, flexWrap: 'wrap' }}>
        <a className="nav-link" href={OPENSEA_V2_TOKEN} target="_blank" rel="noopener noreferrer">OpenSea (V2)</a>
        <a className="nav-link" href={MAGIC_EDEN_PROFILE} target="_blank" rel="noopener noreferrer">Magic Eden Profile</a>
        {openSeaWallet && (
          <a className="nav-link" href={openSeaWallet} target="_blank" rel="noopener noreferrer">Your OpenSea Profile</a>
        )}
      </div>

      <p className="muted" style={{ marginTop: 12 }}>
        {account ? `Connected: ${account.address}` : 'Wallet not connected yet.'}
      </p>
      <p className="muted" style={{ marginTop: 6, wordBreak: 'break-word' }}>
        {status}
      </p>
      <p className="muted" style={{ marginTop: 6 }}>
        V2 sold out with IPFS PNG metadata. V1 remains paused and deprecated.
      </p>
      <p className="muted" style={{ marginTop: 6 }}>
        OpenSea updates first; Magic Eden Base indexing can take a bit.
      </p>
      {txUrl && (
        <p className="muted" style={{ marginTop: 6, wordBreak: 'break-word' }}>
          Tx: <a href={txUrl} target="_blank" rel="noopener noreferrer">{lastTxHash}</a>
        </p>
      )}
    </div>
  );
}
