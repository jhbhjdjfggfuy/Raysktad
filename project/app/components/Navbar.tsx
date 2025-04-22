import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Raysktad Energy"
                width={150}
                height={60}
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/sustainability" className="nav-link">Sustainability</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}