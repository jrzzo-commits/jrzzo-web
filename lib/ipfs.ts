const PINATA_GATEWAY_BASE = 'https://gateway.pinata.cloud/ipfs/';

export function isIpfsUri(value: string): boolean {
  return value.startsWith('ipfs://');
}

export function toGatewayUrl(value: string): string {
  if (!value) return '';
  if (!isIpfsUri(value)) return value;
  return `${PINATA_GATEWAY_BASE}${value.replace('ipfs://', '')}`;
}
