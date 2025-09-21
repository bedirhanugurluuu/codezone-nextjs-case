'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mockPosts } from '@/data/mockData';

export default function ExploreBlog() {
  const [gridView, setGridView] = useState('four'); // 'four', 'two', 'list'
  const [activeTab, setActiveTab] = useState('Haftanın Videoları');
  const [visibleCount, setVisibleCount] = useState(4);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    mockPosts.forEach(post => {
      post.attributes.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  const filteredPosts = useMemo(() => {
    return mockPosts.filter(post => 
      post.attributes.tags.includes(activeTab)
    );
  }, [activeTab]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section className="blog-tabs-section py-20 lg:pb-20 lg:py-40">
      <div className="container">
        <div className='content-area-blog'>
          <div>
            <div className="mb-8 flex justify-between items-center">
               <div className="content-area-header-left flex items-center gap-4">
                 <h2 className="font-bold text-white font-saira-condensed">
                   KEŞFET
                 </h2>
                <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.3849 42.5032L31.907 32.8768L41.5334 13.3547L22.0113 22.9811L12.3849 42.5032ZM26.9928 30.588C26.2299 30.588 25.5904 30.3299 25.0743 29.8138C24.5582 29.2977 24.3001 28.6582 24.3001 27.8953C24.3001 27.1323 24.5582 26.4928 25.0743 25.9767C25.5904 25.4606 26.2299 25.2026 26.9928 25.2026C27.7558 25.2026 28.3953 25.4606 28.9114 25.9767C29.4275 26.4928 29.6855 27.1323 29.6855 27.8953C29.6855 28.6582 29.4275 29.2977 28.9114 29.8138C28.3953 30.3299 27.7558 30.588 26.9928 30.588ZM26.9928 54.8223C23.3128 54.8223 19.8347 54.1154 16.5586 52.7018C13.2825 51.2881 10.4215 49.3583 7.97563 46.9125C5.52976 44.4666 3.6 41.6056 2.18633 38.3295C0.77266 35.0534 0.0658264 31.5753 0.0658264 27.8953C0.0658264 24.1704 0.77266 20.6699 2.18633 17.3937C3.6 14.1176 5.52976 11.2678 7.97563 8.84441C10.4215 6.42098 13.2825 4.50243 16.5586 3.08876C19.8347 1.6751 23.3128 0.968262 26.9928 0.968262C30.7177 0.968262 34.2182 1.6751 37.4944 3.08876C40.7705 4.50243 43.6203 6.42098 46.0437 8.84441C48.4671 11.2678 50.3857 14.1176 51.7993 17.3937C53.213 20.6699 53.9198 24.1704 53.9198 27.8953C53.9198 31.5753 53.213 35.0534 51.7993 38.3295C50.3857 41.6056 48.4671 44.4666 46.0437 46.9125C43.6203 49.3583 40.7705 51.2881 37.4944 52.7018C34.2182 54.1154 30.7177 54.8223 26.9928 54.8223ZM26.9928 50.7832C33.3656 50.7832 38.7734 48.5505 43.2163 44.0851C47.6593 39.6197 49.8808 34.2231 49.8808 27.8953C49.8808 21.5225 47.6593 16.1147 43.2163 11.6717C38.7734 7.22879 33.3656 5.00731 26.9928 5.00731C20.665 5.00731 15.2684 7.22879 10.803 11.6717C6.33757 16.1147 4.10488 21.5225 4.10488 27.8953C4.10488 34.2231 6.33757 39.6197 10.803 44.0851C15.2684 48.5505 20.665 50.7832 26.9928 50.7832Z" fill="#F0E74D"/>
                </svg>
              </div>

               <div className="content-area-header flex items-center gap-4">
                 <button 
                   onClick={() => setGridView('list')}
                   className={`p-2 transition-colors cursor-pointer ${gridView === 'list' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'}`}
                 >
                   <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0.530762 7.09286C0.579199 6.79389 0.616913 6.49277 0.678292 6.1963C1.00293 4.62903 1.77682 3.30302 2.98257 2.21539C4.01787 1.28191 5.2288 0.666403 6.61574 0.3936C8.25447 0.0709687 9.84032 0.237662 11.3618 0.923432C12.8763 1.60634 14.0381 2.66062 14.8515 4.07052C15.3825 4.99074 15.6887 5.98086 15.7737 7.03622C15.9005 8.61102 15.5474 10.0754 14.717 11.4308C14.64 11.5566 14.6818 11.6154 14.7687 11.6997C16.1449 13.0304 17.5178 14.3639 18.8929 15.6953C19.3629 16.1506 19.5459 16.679 19.3425 17.3077C19.0353 18.2566 17.7522 18.6259 16.9606 17.9931C16.8563 17.91 16.7558 17.8218 16.6604 17.7293C15.3245 16.4359 13.9882 15.1425 12.6567 13.8445C12.5535 13.7437 12.4851 13.7373 12.3661 13.8154C11.4569 14.4109 10.4552 14.7948 9.3737 14.9507C7.27907 15.2526 5.35415 14.822 3.64406 13.595C1.96576 12.3912 0.969655 10.7726 0.615065 8.78094C0.580678 8.58915 0.558493 8.39522 0.530762 8.20199C0.530762 7.8324 0.530762 7.46281 0.530762 7.09286ZM13.3219 7.64277C13.3237 4.88678 11.0043 2.64198 8.16166 2.64772C5.31791 2.65381 3.00809 4.86742 3.00993 7.63165C3.01141 10.4282 5.31015 12.6278 8.15981 12.6389C11.0013 12.6496 13.32 10.3988 13.3219 7.64277Z" fill="currentColor"/>
                   </svg>
                 </button>
 
                 <button
                   onClick={() => setGridView('two')}
                   className={`p-2 transition-colors cursor-pointer hidden md:block ${gridView === 'two' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'}`}
                 >
                   <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect x="0.294495" y="0.119629" width="24.0033" height="3.75257" rx="1.43424" fill="currentColor"/>
                     <rect x="0.294495" y="7.87231" width="24.0033" height="3.75257" rx="1.43424" fill="currentColor"/>
                     <rect x="0.294495" y="15.6248" width="24.0033" height="3.75257" rx="1.43424" fill="currentColor"/>
                   </svg>
                 </button>
 
                 <button 
                   onClick={() => setGridView('four')}
                   className={`p-2 transition-colors cursor-pointer hidden md:block ${gridView === 'four' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'}`}
                 >
                   <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect x="0.950256" y="0.119629" width="9.9111" height="3.75257" rx="1.43424" fill="currentColor"/>
                     <rect x="0.950256" y="15.6248" width="9.9111" height="3.75257" rx="1.43424" fill="currentColor"/>
                     <rect x="14.0928" y="0.119629" width="9.9111" height="3.75257" rx="1.43424" fill="currentColor"/>
                     <rect x="0.950256" y="7.87207" width="9.9111" height="3.75257" rx="1.43424" fill="currentColor"/>
                     <rect x="14.0928" y="7.87207" width="9.9111" height="3.75257" rx="1.43424" fill="currentColor"/>
                     <rect x="14.0928" y="15.625" width="9.9111" height="3.75257" rx="1.43424" fill="currentColor"/>
                   </svg>
                 </button>
               </div>
            </div>

            <div className="mb-8">
              <div className='content-area-tabs' style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                 {allTags.map((tag, index) => (
                   <button
                     key={index}
                     className={`footer-tab-button ${activeTab === tag ? 'active' : ''}`}
                     onClick={() => {
                       setActiveTab(tag);
                       setVisibleCount(4);
                     }}
                       style={{
                         backgroundColor: activeTab === tag ? 'var(--yellow)' : 'transparent',
                         color: activeTab === tag ? 'var(--dark)' : 'var(--white)',
                         fontWeight: activeTab === tag ? '700' : '400',
                         border: `1px solid ${activeTab === tag ? 'var(--yellow)' : 'var(--white)'}`,
                       }}
                     onMouseEnter={(e) => {
                       if (activeTab !== tag) {
                         (e.target as HTMLButtonElement).style.backgroundColor = 'var(--yellow)';
                         (e.target as HTMLButtonElement).style.color = 'var(--dark)';
                         (e.target as HTMLButtonElement).style.borderColor = 'var(--yellow)';
                       }
                     }}
                     onMouseLeave={(e) => {
                       if (activeTab !== tag) {
                         (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                         (e.target as HTMLButtonElement).style.color = 'var(--white)';
                         (e.target as HTMLButtonElement).style.borderColor = 'var(--white)';
                       }
                     }}
                   >
                     {tag}
                   </button>
                 ))}
              </div>
            </div>

             <div 
               className={`explore-posts ${
                 gridView === 'four' 
                   ? 'four grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' 
                   : gridView === 'two'
                   ? 'two grid grid-cols-1 sm:grid-cols-2 gap-8'
                   : 'list block space-y-8'
               }`}
             >
              {visiblePosts.map((post) => (
                <Link 
                  key={post._id} 
                  href={`/blog/${post.attributes.slug}`} 
                  className="explore-item group flex flex-col"
                  style={{ 
                    textDecoration: 'none'
                  }}
                >
                  <div className="post-img-area mb-4">
                    <div className="post-img relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={post.attributes.img}
                        alt={post.attributes.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                     <span className="text-gray-300 text-sm mt-2 block">
                       {new Date(post.createdAt).toLocaleDateString('tr-TR', {
                         year: 'numeric',
                         month: 'long',
                         day: 'numeric'
                       })}
                     </span>
                   </div>

                   <div className="post-content">
                     <div className="post-author text-gray-300 text-sm mb-2">
                       {post.attributes.authors[0]}
                     </div>

                     <div className="post-title mb-3">
                       <h3 className="text-white text-lg font-bold font-saira-condensed uppercase leading-tight line-clamp-2">
                         {post.attributes.title}
                       </h3>
                     </div>

                     <div className="show-more">
                        <div 
                            style={{
                            position: 'relative',
                            fontSize: 'var(--16)',
                            width: 'fit-content',
                            textTransform: 'capitalize',
                            color: 'var(--white)',
                            paddingRight: 'var(--40)',
                            textDecoration: 'none',
                            transition: '0.3s ease-in-out',
                            cursor: 'pointer'
                            }}
                        >
                            Daha Fazla Oku
                        </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {hasMorePosts && (
              <div className="text-center w-full flex justify-center pt-8">
                <button
                  onClick={handleLoadMore}
                  className="btn main text-black px-8 py-3 font-bold uppercase"
                >
                  Daha Fazla
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
