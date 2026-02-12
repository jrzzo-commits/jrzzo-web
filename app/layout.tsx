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
  title: 'Rzzodue | jrzzo.com',
  description: '300 on-chain desert realms. Free mint on Base. Launch: Feb 16, 2026 at 8:00 AM ET.',
  openGraph: {
    title: 'Rzzodue | jrzzo.com',
    description: '300 on-chain desert realms. Free mint on Base. Launch: Feb 16, 2026 at 8:00 AM ET.',
    url: 'https://jrzzo.com',
    siteName: 'jrzzo'
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
