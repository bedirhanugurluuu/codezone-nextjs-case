'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section className="relative">
      {isMobile ? (
        // Mobile: Sadece ilk görsel, Swiper yok
        <div className="relative w-full hero-wrapper overflow-hidden">
          <div className="hero-image-0">
            <Image
              src="/hero-1.png"
              alt="Hero Image 1"
              fill
              className="object-contain"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                inset: '0px',
                objectFit: 'contain',
                color: 'transparent'
              }}
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="container hero-content-text px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-left">
                <h1 className="uppercase text-white">
                  TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET
                </h1>
                <p className="text-white" style={{marginBottom: 'calc(var(--1) * 25)'}}>Lorem ipsum dolor sit amet</p>
                <div className="button-wrapper">
                  <button className="btn main yellow z-10">
                    Devamını Oku
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop: Normal Swiper
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={false}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          className="h-full"
        >
        {[
          { src: '/hero-1.png', alt: 'Hero Image 1' },
          { src: '/hero-2.png', alt: 'Hero Image 2' }
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full hero-wrapper overflow-hidden">
              <div 
                className={`hero-image-${index}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    objectFit: 'contain',
                    color: 'transparent'
                  }}
                  priority
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-end">
                <div className="container hero-content-text px-4 sm:px-6 lg:px-8 w-full">
                  <div 
                    className="text-left"
                  >
                    <h1 
                      className={`uppercase ${index === 0 ? 'text-white' : 'text-black'}`}
                    >
                      TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET
                    </h1>
                    <p className={`${index === 0 ? 'text-white' : 'text-black'}`} style={{marginBottom: 'calc(var(--1) * 25)'}}>Lorem ipsum dolor sit amet</p>
                    <div className="button-wrapper">
                      <button className="btn main yellow z-10">
                        Devamını Oku
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
      )}
      
      {/* Custom Navigation Arrows - Sadece desktop'ta */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="container px-4 sm:px-6 lg:px-8 h-full relative">
            <button className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 z-10 pointer-events-auto" style={{ left: '-60px' }}>
            <svg width="32" height="32" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 13.3232H1" stroke="white" strokeWidth="1.7648" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.0001 1.32324L1.00008 13.3232L13.0001 25.3232" stroke="white" strokeWidth="1.7648" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
            <button className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 z-10 pointer-events-auto" style={{ right: '-60px' }}>
            <svg width="32" height="32" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13.3232H25" stroke="white" strokeWidth="1.7648" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.9999 1.32324L24.9999 13.3232L12.9999 25.3232" stroke="white" strokeWidth="1.7648" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}