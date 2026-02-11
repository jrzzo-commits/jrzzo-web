import { createThirdwebClient } from 'thirdweb';
import { base } from 'thirdweb/chains';

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID ?? '';
const rawAddress = process.env.NEXT_PUBLIC_COLLECTION_ADDRESS ?? '';

// Keep builds from failing before env vars are configured.
const safeClientId = clientId || 'placeholder-client-id';

export const client = createThirdwebClient({
  clientId: safeClientId
});

export const chain = base;

export const collectionAddress = rawAddress && rawAddress.startsWith('0x')
  ? (rawAddress as `0x${string}`)
  : undefined;
