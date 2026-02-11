import type { Metadata } from 'next';
import { Bebas_Neue, Work_Sans } from 'next/font/google';
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
  description: '300 on-chain desert realms. Free mint on Base.',
  openGraph: {
    title: 'Rzzodue | jrzzo.com',
    description: '300 on-chain desert realms. Free mint on Base.',
    url: 'https://jrzzo.com',
    siteName: 'jrzzo'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${workSans.variable}`}>{children}</body>
    </html>
  );
}
