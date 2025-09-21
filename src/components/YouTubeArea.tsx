'use client';

import Image from 'next/image';

export default function TwitchArea() {
  return (
    <div className="hero-tw-area">
      <div className="hero-bg-crowd">
        <Image
          src="/hero/crowd.webp"
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
      
      <div className="hero-twoverlay">
        <Image
          src="/hero/shape.svg"
          alt="Rapkology"
          fill
          className="object-cover"
          style={{
            position: 'absolute',
            inset: '0px',
            objectFit: 'cover',
            color: 'transparent'
          }}
        />
      </div>
      
      <section className="twitch-section">
        <div className="twitch-container">
          <div className="twitch-content">
            <div className="twitch-logo">
              <a target="_blank" href="https://www.twitch.tv/rapkology">
                <Image
                  src="/hero/twitch-vertical.svg"
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
              </a>
            </div>
            <div className="twitch-text">
              <h5>Takip <br/><span>Et</span></h5>
            </div>
          </div>
          <a target="_blank" className="follow" href="https://www.twitch.tv/rapkology">
            <Image
              src="/hero/follow.svg"
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
          </a>
        </div>
      </section>
      
      <div className="hero-bg-shape">
        <Image
          src="/hero/shape.svg"
          alt="Rapkology"
          fill
          className="object-contain"
          style={{
            position: 'absolute',
            inset: '0px',
            objectFit: 'contain',
            color: 'transparent'
          }}
        />
      </div>
    </div>
  );
}
