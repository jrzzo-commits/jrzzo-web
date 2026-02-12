import Image from 'next/image';
import Link from 'next/link';

export default function BrandLogo() {
  return (
    <Link href="/" className="logo" aria-label="jrzzo home">
      <Image src="/brand/jrzzo.svg" alt="JRZZO" width={200} height={62} className="logo-mark" priority />
    </Link>
  );
}
