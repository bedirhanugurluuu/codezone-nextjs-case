'use client';

import Image from 'next/image';
import Link from 'next/link';
import { mockPosts } from '@/data/mockData';
import Header from './Header';
import ExploreBlog from './ExploreBlog';
import Footer from './Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Blog() {
  const sidebarPosts = mockPosts.slice(0, 4);
  const swiperPosts = mockPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#121212]">
      <Header darkBackground={true} />

      <div className="header-space"></div>

      <section id='blog' className="py-12 md:py-20 bg-cover bg-center bg-no-repeat">
        <div className="container">
          <div className="breadcrumbs text-black mb-2 md:mb-4">
             <nav className="flex items-center space-x-2 text-md uppercase">
                <Link 
                 href="/"
                >
                  Anasayfa
                </Link>
               <span>
                 <svg width="9" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M1.38477 8.1958L5.22656 4.354L1.38477 0.512207" stroke="#121212" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </span>
               <span className="text-black">Blog</span>
            </nav>
          </div>

          <h1 className="blog-title">BLOG</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="lg:col-span-2">
              <div className="relative">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{
                    clickable: true
                  }}
                  className="blog-swiper"
                >
                  {swiperPosts.map((post) => (
                    <SwiperSlide key={post._id}>
                      <Link href={`/blog/${post.attributes.slug}`}>
                        <div className="relative group cursor-pointer">
                          <div className="relative aspect-video mb-6 overflow-hidden">
                            <Image
                              src={post.attributes.img}
                              alt={post.attributes.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                              <h2 className="text-white text-xl md:text-3xl font-bold font-saira-condensed leading-tight">
                                {post.attributes.title}
                              </h2>
                            </div>
                          </div>

                          <div className="max-w-2xl">
                            <p className="blog-slider-text text-black text-base leading-relaxed line-clamp-4">
                              {post.attributes.content}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
              </div>
            </div>

            <div className="space-y-6 blog-news-right">

              {sidebarPosts.map((post) => (
                <Link key={post._id} href={`/blog/${post.attributes.slug}`}>
                  <div className="flex space-x-4 group cursor-pointer">
                    <div className="blog-news-image relative flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={post.attributes.img}
                        alt={post.attributes.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-black text-2xl font-bold font-saira-condensed uppercase leading-tight line-clamp-2 group-hover:text-yellow-500 transition-colors">
                        {post.attributes.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ExploreBlog />

      <Footer />
    </div>
  );
}
