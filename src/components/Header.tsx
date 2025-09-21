'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  darkBackground?: boolean;
}

export default function Header({ darkBackground = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkBackground 
          ? 'bg-[#121212]'
          : isScrolled 
            ? 'bg-[rgba(18,18,18,0.6)] backdrop-blur-md' 
            : 'bg-transparent'
      }`}
    >
      <div className="container px-0 xl:px-0 lg:px-5">
        <div className="flex items-center py-3">
          <Link href="/" className={`flex items-center logo-container ${isScrolled ? 'scrolled' : ''}`}
              style={{
                width: 'calc(var(--dsm-10) * 18.2)',
                aspectRatio: '235 / 59'
              }}>
              <Image 
                src="/logo.svg" 
                alt="Rapkology Logo"
                width={235}
                height={59}
                className="transition-all duration-300 ease-in-out"
                priority
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
          </Link>

          <div style={{ width: 'var(--100)' }}></div>

          <nav className="hidden md:flex items-center gap-30 uppercase">
            <Link 
              href="/" 
              className="text-white hover:text-red-500 transition-all duration-300 ease-in-out font-medium font-saira"
              style={{
                fontSize: isScrolled 
                  ? 'calc(var(--10) * 1.4 * 4 / 5)' 
                  : 'var(--14)'
              }}
            >
              Ana Sayfa
            </Link>
            <a 
              href="#" 
              className="text-white hover:text-red-500 transition-all duration-300 ease-in-out font-medium font-saira"
              style={{
                fontSize: isScrolled 
                  ? 'calc(var(--10) * 1.4 * 4 / 5)' 
                  : 'var(--14)'
              }}
            >
              Videolar
            </a>
            <a 
              href="#" 
              className="text-white hover:text-red-500 transition-all duration-300 ease-in-out font-medium font-saira"
              style={{
                fontSize: isScrolled 
                  ? 'calc(var(--10) * 1.4 * 4 / 5)' 
                  : 'var(--14)'
              }}
            >
              Müzik
            </a>
            <Link 
              href="/blog" 
              className="text-white hover:text-red-500 transition-all duration-300 ease-in-out font-medium font-saira"
              style={{
                fontSize: isScrolled 
                  ? 'calc(var(--10) * 1.4 * 4 / 5)' 
                  : 'var(--14)'
              }}
            >
              Haberler
            </Link>
            <a 
              href="#" 
              className="text-white hover:text-red-500 transition-all duration-300 ease-in-out font-medium font-saira"
              style={{
                fontSize: isScrolled 
                  ? 'calc(var(--10) * 1.4 * 4 / 5)' 
                  : 'var(--14)'
              }}
            >
              Hakkımızda
            </a>
          </nav>

          <div className="flex-1"></div>

          <div className="flex items-center">
            {/* İletişim butonu - sadece desktop'ta görünür */}
            <button
              className="btn light hidden md:block mr-4"
              style={{
                padding: 'var(--15) var(--50)',
                fontSize: isScrolled 
                  ? 'calc(var(--10) * 1.4 * 4 / 5)' 
                  : 'var(--14)'
              }}
            >
              İletişim
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden hamburger ml-4 p-2 ${isMenuOpen ? 'active' : ''}`}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden nav-mobile-container ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-mobile-wrapper px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block py-2 text-white hover:text-red-500 transition-colors font-medium font-saira"
              >
                Ana Sayfa
              </Link>
              <a
                href="#"
                className="block py-2 text-white hover:text-red-500 transition-colors font-medium font-saira"
              >
                Videolar
              </a>
              <a
                href="#"
                className="block py-2 text-white hover:text-red-500 transition-colors font-medium font-saira"
              >
                Müzik
              </a>
              <Link
                href="/blog"
                className="block py-2 text-white hover:text-red-500 transition-colors font-medium font-saira"
              >
                Haberler
              </Link>
              <a
                href="#"
                className="block py-2 text-white hover:text-red-500 transition-colors font-medium font-saira"
              >
                Hakkımızda
              </a>

              <button
                className="btn light w-full mt-4"
                style={{
                  padding: 'var(--15) var(--50)',
                  fontSize: 'var(--14)'
                }}
              >
                İletişim
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="h-px bg-gray-800"></div>
    </header>
  );
}
