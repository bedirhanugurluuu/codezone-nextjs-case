'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface FavoriteItem {
  id: number;
  artist: string;
  song: string;
  image: string;
  spotifyUrl: string;
  rank: number;
}

const favoriteItems: FavoriteItem[] = [
  {
    id: 1,
    artist: "50 CENT",
    song: "CURTIS",
    image: "/fav/50cent.png",
    spotifyUrl: "#!",
    rank: 1
  },
  {
    id: 2,
    artist: "SNOPP DOGG",
    song: "ALGORITHM",
    image: "/fav/snoop.png",
    spotifyUrl: "#!",
    rank: 2
  },
  {
    id: 3,
    artist: "50 CENT",
    song: "CURTIS",
    image: "/fav/50cent.png",
    spotifyUrl: "#!",
    rank: 3
  },
  {
    id: 4,
    artist: "50 CENT",
    song: "CURTIS",
    image: "/fav/50cent.png",
    spotifyUrl: "#!",
    rank: 4
  },
  {
    id: 5,
    artist: "50 CENT",
    song: "CURTIS",
    image: "/fav/50cent.png",
    spotifyUrl: "#!",
    rank: 5
  }
];

export default function Favorites() {
  const [progress, setProgress] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    // Loop'ta realIndex kullan, toplam slide sayısına böl
    const currentIndex = swiper.realIndex;
    const totalSlides = favoriteItems.length;
    const progressPercent = ((currentIndex % totalSlides) / totalSlides) * 100;
    setProgress(progressPercent);
  };

  return (
    <section className="favorites-section">
      {/* Logos */}
      <div className="fav-logos">
        <div className="youtube">
            <Image
                src="/fav/youtube-fav.svg"
                alt="Rapkology"
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
            />
        </div>
        <div className="spotify">
          <Image
            src="/fav/spotify-fav.svg"
            alt="Rapkology"
            fill
            className="object-cover"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: '0px',
              objectFit: 'cover',
              color: 'transparent'
            }}
          />
        </div>
      </div>

       {/* Container */}
       <div className="fav-container">
        {/* Title - 1440px container içinde */}
        <div className="month-fav" style={{paddingLeft:"calc(var(--100))", paddingTop:"calc(var(--60))"}}>
          <div className="fav-title">
            <h2>AYIN FAVORİLERİ</h2>
          </div>
        </div>

        {/* Swiper Area - Container dışında */}
        <div className="swiper-area">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={40}
            slidesPerView={3}
            navigation={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="favorites-swiper"
            onSlideChange={handleSlideChange}
          >
            {favoriteItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-item">
                  <a 
                    target="_blank" 
                    className="swiper-image" 
                    href={item.spotifyUrl}
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={item.image}
                      alt="Rapkology"
                      title="Rapkology"
                      fill
                      className="object-cover"
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        inset: '0px',
                        color: 'transparent'
                      }}
                    />
                  </a>
                  <div className="swiper-content">
                    <div className="info">
                      Top 5 <span> ({item.rank}. Sıra)</span>
                    </div>
                    <div className="song">
                      <span>{item.artist}</span>
                      <p style={{fontWeight: 800}}>{item.song}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Bar */}
          <div className="progress-bar">
            <span style={{ width: `${progress}%` }}></span>
          </div>
        </div>
      </div>
    </section>
  );
}
