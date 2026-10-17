'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: '🏠 Dashboard' },
    { href: '/spatial', label: '🗺️ Peta Spasial' },
    { href: '/temporal', label: '📈 Analisis Temporal' },
    { href: '/impact', label: '💥 Dampak & Mitigasi' },
    { href: '/docs', label: '📄 Dokumentasi' },
    { href: '/qrcode', label: '🔗 QR Code' },
  ];

  return (
    <nav className="bg-gradient-to-r from-dark to-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl hover:text-primary transition">
            🏔️ Jejak di Lereng
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded hover:bg-gray-700 transition text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl hover:text-primary transition"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded hover:bg-gray-700 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
