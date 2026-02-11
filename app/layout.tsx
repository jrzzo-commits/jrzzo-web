import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'jrzzo.com | Rzzodue',
  description: 'Rzzodue mint site on Base. 300 desert-born on-chain SVG NFTs.',
  openGraph: {
    title: 'Rzzodue by jrzzo',
    description: '300 on-chain SVG NFTs. Minting on Base.',
    url: 'https://jrzzo.com',
    siteName: 'jrzzo.com'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
