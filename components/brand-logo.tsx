import Link from 'next/link';

export default function BrandLogo() {
  return (
    <Link href="/" className="logo" aria-label="jrzzo home">
      <img src="/brand/jrzzo.svg" alt="JRZZO" className="logo-mark" />
    </Link>
  );
}
