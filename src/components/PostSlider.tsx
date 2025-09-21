'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PostCard from './PostCard';
import { Post } from '@/data/mockData';

interface PostSliderProps {
  posts: Post[];
  title: string;
  showNavigation?: boolean;
  autoplay?: boolean;
}

export default function PostSlider({ 
  posts, 
  title, 
  showNavigation = true, 
  autoplay = true 
}: PostSliderProps) {
  return (
    <section className="py-8 lg:py-12">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            {title}
          </h2>
          <div className="w-20 h-1 bg-red-500 rounded"></div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={showNavigation}
          pagination={{ clickable: true }}
          autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="post-slider"
        >
          {posts.map((post) => (
            <SwiperSlide key={post._id}>
              <PostCard post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .post-slider .swiper-button-next,
        .post-slider .swiper-button-prev {
          color: #ef4444;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 50%;
          width: 44px;
          height: 44px;
        }
        
        .post-slider .swiper-button-next:after,
        .post-slider .swiper-button-prev:after {
          font-size: 18px;
        }
        
        .post-slider .swiper-pagination-bullet {
          background: #6b7280;
          opacity: 1;
        }
        
        .post-slider .swiper-pagination-bullet-active {
          background: #ef4444;
        }
        
        .post-slider .swiper-pagination {
          bottom: -40px;
        }
      `}</style>
    </section>
  );
}
