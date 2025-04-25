'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Contact', path: '/contact' },
  ];

  const linkClasses = (path: string) =>
    `font-medium transition duration-300 ${
      pathname === path
        ? 'text-white underline underline-offset-4'
        : 'text-white hover:text-gray-200'
    }`;

  return (
    <nav className="bg-orange-100/30 backdrop-blur-md shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo2.png"
                alt="Raysktad Energy"
                width={150}
                height={100}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ label, path }) => (
              <Link key={path} href={path} className={linkClasses(path)}>
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-orange-500/90 shadow-md py-4 px-4 space-y-3">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={linkClasses(path)}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
