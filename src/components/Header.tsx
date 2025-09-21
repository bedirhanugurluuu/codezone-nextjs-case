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
            {/* Search butonu - sadece desktop'ta görünür */}
            <button className="p-2 text-white hover:text-yellow-500 transition-colors cursor-pointer hidden md:block mr-2">
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.530762 7.09286C0.579199 6.79389 0.616913 6.49277 0.678292 6.1963C1.00293 4.62903 1.77682 3.30302 2.98257 2.21539C4.01787 1.28191 5.2288 0.666403 6.61574 0.3936C8.25447 0.0709687 9.84032 0.237662 11.3618 0.923432C12.8763 1.60634 14.0381 2.66062 14.8515 4.07052C15.3825 4.99074 15.6887 5.98086 15.7737 7.03622C15.9005 8.61102 15.5474 10.0754 14.717 11.4308C14.64 11.5566 14.6818 11.6154 14.7687 11.6997C16.1449 13.0304 17.5178 14.3639 18.8929 15.6953C19.3629 16.1506 19.5459 16.679 19.3425 17.3077C19.0353 18.2566 17.7522 18.6259 16.9606 17.9931C16.8563 17.91 16.7558 17.8218 16.6604 17.7293C15.3245 16.4359 13.9882 15.1425 12.6567 13.8445C12.5535 13.7437 12.4851 13.7373 12.3661 13.8154C11.4569 14.4109 10.4552 14.7948 9.3737 14.9507C7.27907 15.2526 5.35415 14.822 3.64406 13.595C1.96576 12.3912 0.969655 10.7726 0.615065 8.78094C0.580678 8.58915 0.558493 8.39522 0.530762 8.20199C0.530762 7.8324 0.530762 7.46281 0.530762 7.09286ZM13.3219 7.64277C13.3237 4.88678 11.0043 2.64198 8.16166 2.64772C5.31791 2.65381 3.00809 4.86742 3.00993 7.63165C3.01141 10.4282 5.31015 12.6278 8.15981 12.6389C11.0013 12.6496 13.32 10.3988 13.3219 7.64277Z" fill="currentColor"/>
              </svg>
            </button>

            {/* Giriş butonu - hem desktop hem mobilde görünür */}
            <button
              className="btn light hidden md:block mr-4"
              style={{
                padding: 'var(--15) var(--50)',
                fontSize: isScrolled 
                  ? 'calc(var(--10) * 1.4 * 4 / 5)' 
                  : 'var(--14)'
              }}
            >
              GİRİŞ YAP
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
                GİRİŞ YAP
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="h-px bg-gray-800"></div>
    </header>
  );
}
