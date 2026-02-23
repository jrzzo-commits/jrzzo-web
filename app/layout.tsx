import type { Metadata } from 'next';
import { Bebas_Neue, Work_Sans } from 'next/font/google';
import Providers from './providers';
import MusicPlayer from '../components/music-player';
import './globals.css';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas'
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-work'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jrzzo.com'),
  title: {
    default: 'JRZZO',
    template: '%s | JRZZO'
  },
  description: 'Rzzodue sold out on Base (300/300). Instant reveal live with final PNG metadata.',
  icons: {
    icon: '/brand/jrzzo.svg',
    shortcut: '/brand/jrzzo.svg',
    apple: '/brand/jrzzo-vector.png'
  },
  openGraph: {
    title: 'JRZZO',
    description: 'Rzzodue sold out on Base (300/300). Instant reveal live with final PNG metadata.',
    url: 'https://jrzzo.com',
    siteName: 'JRZZO',
    images: ['/brand/jrzzo-vector.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JRZZO',
    description: 'Rzzodue sold out on Base (300/300). Instant reveal live with final PNG metadata.',
    images: ['/brand/jrzzo-vector.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${workSans.variable}`}>
        <Providers>
          {children}
          <MusicPlayer />
        </Providers>
      </body>
    </html>
  );
}
