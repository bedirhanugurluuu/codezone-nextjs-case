'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Post } from '@/data/mockData';

interface ExploreProps {
  posts: Post[];
}

export default function Explore({ posts }: ExploreProps) {
  const [gridView, setGridView] = useState('single'); // 'single', 'two'
  const [activeTag, setActiveTag] = useState('Tümü');

  // Tüm unique tag'leri al
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => {
      post.attributes.tags.forEach(tag => tags.add(tag));
    });
    return ['Tümü', ...Array.from(tags)];
  }, [posts]);

  // Aktif tag'e göre filtrelenmiş postlar
  const filteredPosts = useMemo(() => {
    if (activeTag === 'Tümü') return posts;
    return posts.filter(post => post.attributes.tags.includes(activeTag));
  }, [posts, activeTag]);

  return (
    <section className="py-20 lg:py-40">
      <div className="container">
        <div className='content-area flex flex-col md:block'>
          <div>
            <div className="mb-8 flex justify-between items-center">
              <div className="content-area-header-left flex items-center gap-4">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white font-saira-condensed">
                  KEŞFET
                </h2>
                <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.3849 42.5032L31.907 32.8768L41.5334 13.3547L22.0113 22.9811L12.3849 42.5032ZM26.9928 30.588C26.2299 30.588 25.5904 30.3299 25.0743 29.8138C24.5582 29.2977 24.3001 28.6582 24.3001 27.8953C24.3001 27.1323 24.5582 26.4928 25.0743 25.9767C25.5904 25.4606 26.2299 25.2026 26.9928 25.2026C27.7558 25.2026 28.3953 25.4606 28.9114 25.9767C29.4275 26.4928 29.6855 27.1323 29.6855 27.8953C29.6855 28.6582 29.4275 29.2977 28.9114 29.8138C28.3953 30.3299 27.7558 30.588 26.9928 30.588ZM26.9928 54.8223C23.3128 54.8223 19.8347 54.1154 16.5586 52.7018C13.2825 51.2881 10.4215 49.3583 7.97563 46.9125C5.52976 44.4666 3.6 41.6056 2.18633 38.3295C0.77266 35.0534 0.0658264 31.5753 0.0658264 27.8953C0.0658264 24.1704 0.77266 20.6699 2.18633 17.3937C3.6 14.1176 5.52976 11.2678 7.97563 8.84441C10.4215 6.42098 13.2825 4.50243 16.5586 3.08876C19.8347 1.6751 23.3128 0.968262 26.9928 0.968262C30.7177 0.968262 34.2182 1.6751 37.4944 3.08876C40.7705 4.50243 43.6203 6.42098 46.0437 8.84441C48.4671 11.2678 50.3857 14.1176 51.7993 17.3937C53.213 20.6699 53.9198 24.1704 53.9198 27.8953C53.9198 31.5753 53.213 35.0534 51.7993 38.3295C50.3857 41.6056 48.4671 44.4666 46.0437 46.9125C43.6203 49.3583 40.7705 51.2881 37.4944 52.7018C34.2182 54.1154 30.7177 54.8223 26.9928 54.8223ZM26.9928 50.7832C33.3656 50.7832 38.7734 48.5505 43.2163 44.0851C47.6593 39.6197 49.8808 34.2231 49.8808 27.8953C49.8808 21.5225 47.6593 16.1147 43.2163 11.6717C38.7734 7.22879 33.3656 5.00731 26.9928 5.00731C20.665 5.00731 15.2684 7.22879 10.803 11.6717C6.33757 16.1147 4.10488 21.5225 4.10488 27.8953C4.10488 34.2231 6.33757 39.6197 10.803 44.0851C15.2684 48.5505 20.665 50.7832 26.9928 50.7832Z" fill="#F0E74D"/>
                </svg>
              </div>

              <div className="content-area-header flex items-center gap-4">
                <button 
                  onClick={() => {/* Search functionality can be added here */}}
                  className="p-2 text-white hover:text-yellow-500 transition-colors cursor-pointer "
                >
                  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.530762 7.09286C0.579199 6.79389 0.616913 6.49277 0.678292 6.1963C1.00293 4.62903 1.77682 3.30302 2.98257 2.21539C4.01787 1.28191 5.2288 0.666403 6.61574 0.3936C8.25447 0.0709687 9.84032 0.237662 11.3618 0.923432C12.8763 1.60634 14.0381 2.66062 14.8515 4.07052C15.3825 4.99074 15.6887 5.98086 15.7737 7.03622C15.9005 8.61102 15.5474 10.0754 14.717 11.4308C14.64 11.5566 14.6818 11.6154 14.7687 11.6997C16.1449 13.0304 17.5178 14.3639 18.8929 15.6953C19.3629 16.1506 19.5459 16.679 19.3425 17.3077C19.0353 18.2566 17.7522 18.6259 16.9606 17.9931C16.8563 17.91 16.7558 17.8218 16.6604 17.7293C15.3245 16.4359 13.9882 15.1425 12.6567 13.8445C12.5535 13.7437 12.4851 13.7373 12.3661 13.8154C11.4569 14.4109 10.4552 14.7948 9.3737 14.9507C7.27907 15.2526 5.35415 14.822 3.64406 13.595C1.96576 12.3912 0.969655 10.7726 0.615065 8.78094C0.580678 8.58915 0.558493 8.39522 0.530762 8.20199C0.530762 7.8324 0.530762 7.46281 0.530762 7.09286ZM13.3219 7.64277C13.3237 4.88678 11.0043 2.64198 8.16166 2.64772C5.31791 2.65381 3.00809 4.86742 3.00993 7.63165C3.01141 10.4282 5.31015 12.6278 8.15981 12.6389C11.0013 12.6496 13.32 10.3988 13.3219 7.64277Z" fill="white"/>
                  </svg>
                </button>
                <button 
                  onClick={() => setGridView('single')}
                  className={`p-2 transition-colors cursor-pointer hidden md:block ${gridView === 'single' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'}`}
                >
                  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.294495" y="0.119629" width="24.0033" height="3.75257" rx="1.43424" fill="white"/>
                      <rect x="0.294495" y="7.87231" width="24.0033" height="3.75257" rx="1.43424" fill="white"/>
                      <rect x="0.294495" y="15.6248" width="24.0033" height="3.75257" rx="1.43424" fill="white"/>
                  </svg>
                </button>
                <button
                  onClick={() => setGridView('two')}
                  className={`p-2 transition-colors cursor-pointer hidden md:block ${gridView === 'two' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'}`}
                >
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.950256" y="0.119629" width="9.9111" height="3.75257" rx="1.43424" fill="white"/>
                        <rect x="0.950256" y="15.6248" width="9.9111" height="3.75257" rx="1.43424" fill="white"/>
                        <rect x="14.0928" y="0.119629" width="9.9111" height="3.75257" rx="1.43424" fill="white"/>
                        <rect x="0.950256" y="7.87207" width="9.9111" height="3.75257" rx="1.43424" fill="white"/>
                        <rect x="14.0928" y="7.87207" width="9.9111" height="3.75257" rx="1.43424" fill="white"/>
                        <rect x="14.0928" y="15.625" width="9.9111" height="3.75257" rx="1.43424" fill="white"/>
                    </svg>
                </button>
              </div>
            </div>

            <div className="block md:hidden mb-8">
              <div style={{ 
                color: 'var(--white)'
              }}>
                <h3 style={{ 
                  fontFamily: 'Saira Condensed',
                  fontSize: 'var(--38)',
                  fontWeight: '700',
                  marginBottom: 'var(--20)',
                  textTransform: 'uppercase'
                }}>
                  NE GÖRMEK İSTERSİN?
                </h3>
                
                <div className='content-area-tabs' style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  {allTags.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTag(tab)}
                      onMouseEnter={(e) => {
                        (e.target as HTMLButtonElement).style.backgroundColor = 'var(--yellow)';
                        (e.target as HTMLButtonElement).style.color = 'var(--dark)';
                        (e.target as HTMLButtonElement).style.borderColor = 'var(--yellow)';
                      }}
                      onMouseLeave={(e) => {
                        if (tab !== activeTag) {
                          (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                          (e.target as HTMLButtonElement).style.color = 'var(--white)';
                          (e.target as HTMLButtonElement).style.borderColor = 'var(--white)';
                        }
                      }}
                      style={{
                        backgroundColor: tab === activeTag ? 'var(--yellow)' : 'transparent',
                        color: tab === activeTag ? 'var(--dark)' : 'var(--white)',
                        borderColor: tab === activeTag ? 'var(--yellow)' : 'var(--white)'
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div 
              className={`explore-posts ${gridView === 'two' ? 'grid-view grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-10 md:gap-y-15' : 'block'}`}
            >
              {filteredPosts.slice(0, 6).map((post) => (
                <a 
                  key={post._id} 
                  href="#" 
                  className="explore-item"
                  style={{ 
                    marginBottom: gridView === 'two' ? '0' : 'var(--60)',
                    textDecoration: 'none'
                  }}
                >
                  {gridView === 'two' && (
                    <div className="post-author-grid" style={{
                      fontSize: 'var(--16)',
                      fontWeight: '400',
                      color: 'var(--white)',
                      marginBottom: 'var(--10)',
                    }}>
                      {post.attributes.authors}
                    </div>
                  )}

                  <div className="post-img-area">
                    <div className="post-img">
                      <Image
                        src={post.attributes.img}
                        alt={post.attributes.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span style={{color: '#404040'}}>
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  <div className="post-content">
                    {gridView === 'single' && (
                      <div className="post-author">
                        {post.attributes.authors}
                      </div>
                    )}

                    <div className="post-title">
                      <h3 style={{
                        fontSize: 'var(--18)',
                        color: 'var(--white)',
                        fontFamily: 'Saira Condensed',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        lineHeight: '1.2',
                        margin: 0,
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {post.attributes.content}
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
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ 
              color: 'var(--white)',
              position: 'sticky',
              top: '20px'
            }}>
              <h3 className="footer-title" style={{ 
                fontFamily: 'Saira Condensed',
                fontSize: 'var(--38)',
                fontWeight: '700',
                marginBottom: 'var(--20)',
                textTransform: 'uppercase'
              }}>
                NE GÖRMEK İSTERSİN?
              </h3>

              <div className="footer-tabs" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {allTags.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTag(tab)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: tab === activeTag ? 'var(--yellow)' : 'transparent',
                      color: tab === activeTag ? 'var(--dark)' : 'var(--white)',
                      border: `1px solid ${tab === activeTag ? 'var(--yellow)' : 'var(--white)'}`,
                      fontSize: 'var(--14)',
                      fontWeight: '400',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLButtonElement).style.backgroundColor = 'var(--yellow)';
                      (e.target as HTMLButtonElement).style.color = 'var(--dark)';
                      (e.target as HTMLButtonElement).style.borderColor = 'var(--yellow)';
                    }}
                    onMouseLeave={(e) => {
                      if (tab !== activeTag) {
                        (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                        (e.target as HTMLButtonElement).style.color = 'var(--white)';
                        (e.target as HTMLButtonElement).style.borderColor = 'var(--white)';
                      }
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="footer-newsletter" style={{ marginTop: 'var(--40)' }}>
                <h3 style={{ 
                  fontFamily: 'Saira Condensed',
                  fontSize: 'var(--24)',
                  fontWeight: '700',
                  marginBottom: 'var(--20)',
                  textTransform: 'uppercase'
                }}>
                  GELİŞMELERDEN İLK SEN HABERDAR OL!
                </h3>
                
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <input
                    type="email"
                    placeholder="Email"
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      color: 'var(--white)',
                      border: 'none',
                      borderBottom: '1px solid #3B3B3B',
                      padding: '12px 110px 12px 20px',
                      fontSize: 'var(--16)',
                      fontFamily: 'Saira Condensed',
                      outline: 'none'
                    }}
                  />
                  <button
                    style={{
                      position: 'absolute',
                      right: '0',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'var(--yellow)',
                      fontSize: 'var(--16)',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      textTransform: 'uppercase'
                    }}
                  >
                    GÖNDER
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1L15 8L8 15M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="footer-social" style={{ margin: 'var(--30) 0' }}>
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center'
                }}>
                  <div style={{
                    cursor: 'pointer'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0725 29.7229V16.8029H15.3825L16.2025 11.4529H11.0725V7.98287C11.0725 6.52287 11.7925 5.09287 14.0825 5.09287H16.4125V0.552871C16.4125 0.552871 14.2925 0.192871 12.2725 0.192871C8.05254 0.192871 5.29254 2.75287 5.29254 7.38287V11.4529H0.602539V16.8029H5.29254V29.7229H11.0725Z" fill="#F0E74D"/>
                    </svg>
                  </div>

                  <div style={{
                    cursor: 'pointer'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.4315 3.46606C26.5715 3.85606 25.6115 4.09606 24.6915 4.24606C25.1315 4.17606 25.7815 3.37606 26.0415 3.04606C26.4415 2.55606 26.7615 1.98606 26.9515 1.38606C26.9715 1.33606 26.9915 1.27606 26.9515 1.24606C26.8915 1.22606 26.8515 1.23606 26.8015 1.25606C25.7615 1.81606 24.6915 2.21606 23.5415 2.50606C23.4515 2.52606 23.3815 2.50606 23.3215 2.44606C23.2215 2.33606 23.1415 2.23606 23.0315 2.15606C22.5515 1.74606 22.0415 1.42606 21.4515 1.18606C20.6915 0.876061 19.8515 0.746061 19.0315 0.796061C18.2315 0.846061 17.4415 1.07606 16.7415 1.44606C16.0315 1.81606 15.3915 2.33606 14.8915 2.95606C14.3715 3.60606 13.9815 4.36606 13.7915 5.16606C13.6015 5.94606 13.6115 6.71606 13.7315 7.50606C13.7515 7.63606 13.7315 7.65606 13.6215 7.63606C9.15153 6.96606 5.44153 5.37606 2.44153 1.94606C2.31153 1.79606 2.24153 1.79606 2.13153 1.95606C0.811534 3.92606 1.45153 7.09606 3.10153 8.65606C3.32153 8.86606 3.55153 9.07606 3.79153 9.26606C3.70153 9.28606 2.61153 9.16606 1.63153 8.65606C1.50153 8.57606 1.43154 8.61606 1.42154 8.76606C1.41154 8.97606 1.42153 9.17606 1.46153 9.40606C1.71153 11.4061 3.10153 13.2561 4.99153 13.9761C5.22153 14.0761 5.46153 14.1561 5.71153 14.1961C5.28153 14.2861 4.83153 14.3561 3.59153 14.2661C3.44153 14.2361 3.38153 14.3161 3.44153 14.4661C4.37153 17.0061 6.38153 17.7561 7.89153 18.1861C8.09153 18.2261 8.29153 18.2261 8.49153 18.2661C8.48153 18.2861 8.47153 18.2861 8.46153 18.3061C7.96153 19.0661 6.23153 19.6361 5.42154 19.9161C3.95153 20.4261 2.36153 20.6561 0.811534 20.5061C0.561534 20.4661 0.511532 20.4761 0.441532 20.5061C0.371532 20.5461 0.441531 20.6061 0.511531 20.6761C0.831531 20.8861 1.14153 21.0661 1.47153 21.2461C2.46153 21.7661 3.48153 22.1861 4.55153 22.4761C10.0915 24.0061 16.3315 22.8861 20.4915 18.7461C23.7615 15.4961 24.9015 11.0261 24.9015 6.53606C24.9015 6.35606 25.1115 6.26606 25.2315 6.16606C26.0815 5.52606 26.7715 4.76606 27.4015 3.90606C27.5415 3.71606 27.5415 3.54606 27.5415 3.47606V3.45606C27.5415 3.38606 27.5415 3.40606 27.4315 3.45606" fill="#F0E74D"/>
                    </svg>
                  </div>

                  <div style={{
                    cursor: 'pointer'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.8483 2.73285C25.7283 1.76285 23.4983 1.06285 21.1983 0.672852C20.9083 1.18285 20.5783 1.86285 20.3483 2.42285C17.9083 2.06285 15.4183 2.06285 12.9783 2.42285C12.7183 1.82285 12.4283 1.24285 12.1083 0.672852C9.80829 1.06285 7.56829 1.75285 5.44829 2.73285C1.24829 8.99285 0.108301 15.1028 0.678301 21.1129C3.1383 22.9429 5.8983 24.3329 8.8383 25.2329C9.4983 24.3329 10.0783 23.3929 10.5883 22.3929C9.6383 22.0329 8.7183 21.5929 7.8383 21.0829C8.0683 20.9129 8.28831 20.7329 8.49831 20.5629C13.6683 23.0029 19.6583 23.0029 24.8183 20.5629C25.0383 20.7429 25.2683 20.9229 25.4883 21.0929C24.6083 21.6129 23.6883 22.0529 22.7283 22.4129C23.2283 23.4029 23.8183 24.3529 24.4783 25.2429C27.4183 24.3529 30.1783 22.9629 32.6383 21.1229C33.2983 14.1529 31.4883 8.09285 27.8383 2.73285M11.2883 17.4329C9.69832 17.4329 8.38829 15.9729 8.38829 14.1829C8.38829 12.3929 9.66832 10.9229 11.2883 10.9229C12.9083 10.9229 14.1983 12.3829 14.1883 14.1729C14.1683 15.9629 12.9083 17.4329 11.2883 17.4329ZM21.9983 17.4329C20.4083 17.4329 19.0983 15.9729 19.0983 14.1829C19.0983 12.3929 20.3783 10.9229 21.9983 10.9229C23.6183 10.9229 24.9083 12.3829 24.8983 14.1729C24.8783 15.9629 23.6183 17.4329 21.9983 17.4329Z" fill="#F0E74D"/>
                    </svg>
                  </div>

                  <div style={{
                    cursor: 'pointer'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0903 0.639648C8.52539 0.639648 0.772095 8.39294 0.772095 17.9579C0.772095 27.5228 8.52539 35.2761 18.0903 35.2761C27.6553 35.2761 35.4086 27.5228 35.4086 17.9579C35.4086 8.39294 27.6573 0.639648 18.0903 0.639648ZM26.0318 25.6181C25.7216 26.1269 25.0557 26.2882 24.5469 25.9759C20.4811 23.4921 15.3625 22.9296 9.33401 24.3069C8.75288 24.4393 8.17381 24.0753 8.04145 23.4942C7.90909 22.913 8.27101 22.334 8.85421 22.2016C15.4514 20.694 21.1098 21.3434 25.6761 24.1332C26.1849 24.4455 26.3462 25.1094 26.0339 25.6181H26.0318ZM28.1516 20.9029C27.7607 21.5378 26.9294 21.7384 26.2945 21.3475C21.6392 18.4852 14.5435 17.658 9.03621 19.329C8.32271 19.5441 7.56786 19.1429 7.35071 18.4294C7.13563 17.7159 7.53891 16.9631 8.25033 16.746C14.5394 14.8371 22.3589 15.7616 27.7049 19.0478C28.3398 19.4386 28.5404 20.27 28.1496 20.9049L28.1516 20.9029ZM28.3336 15.9911C22.7518 12.676 13.5426 12.372 8.2131 13.9892C7.35691 14.2477 6.45315 13.7659 6.19257 12.9097C5.93406 12.0535 6.41593 11.1497 7.27212 10.8891C13.3895 9.03198 23.5604 9.38976 29.986 13.2054C30.7574 13.6624 31.0097 14.6572 30.5527 15.4245C30.0977 16.1938 29.1009 16.4482 28.3336 15.9911Z" fill="#F0E74D"/>
                    </svg>
                  </div>

                  <div style={{
                    cursor: 'pointer'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.4114 0.871826C23.5529 1.07487 23.7682 0.967197 23.9436 0.97335C25.971 1.06564 28.0015 1.1364 30.0196 1.38867C32.7454 1.72709 34.1267 3.03151 34.5328 5.74804C35.065 9.29214 35.0835 12.8547 34.8958 16.4234C34.822 17.8355 34.7051 19.2384 34.4436 20.632C34.019 22.8994 32.6039 24.2376 30.3088 24.5084C26.5309 24.9575 22.7315 24.9914 18.9382 25.0345C15.0526 25.0775 11.167 24.9729 7.28757 24.7176C6.40769 24.6591 5.52782 24.5668 4.66026 24.4069C2.7713 24.0592 1.46072 22.8009 1.05155 20.9212C0.725446 19.4322 0.639305 17.9155 0.519322 16.4019C0.507017 16.2419 0.60854 16.045 0.408569 15.925V9.99049C0.60854 9.87051 0.507017 9.67362 0.519322 9.51364C0.626999 8.17845 0.719293 6.84019 0.943876 5.5173C1.36228 3.04074 2.76822 1.70863 5.25709 1.38867C7.23834 1.1364 9.22882 1.07487 11.2193 0.976426C11.3947 0.967197 11.61 1.07795 11.7485 0.871826H23.4114V0.871826ZM14.3081 7.80927V18.1062C17.3107 16.3803 20.2549 14.6883 23.2668 12.9562C20.2395 11.2149 17.3015 9.52902 14.3081 7.80927Z" fill="#F0E74D"/>
                    </svg>
                  </div>
                </div>

                <div style={{ margin: 'var(--50) 0 var(--30)' }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px'
                  }}>
                    {[
                      { name: 'Ana Sayfa', href: '/' },
                      { name: 'Videolar', href: '#' },
                      { name: 'Haberler', href: '/blog' },
                      { name: 'Röportajlar', href: '#' },
                      { name: 'İletişim', href: '#' }
                    ].map((navItem, index) => (
                      <a
                        key={index}
                        href={navItem.href}
                        style={{
                          color: 'var(--white)',
                          textDecoration: 'none',
                          fontSize: 'var(--16)',
                          fontWeight: '400',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLAnchorElement).style.color = 'var(--yellow)';
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLAnchorElement).style.color = 'var(--white)';
                        }}
                      >
                        {navItem.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div style={{ margin: 'var(--20) 0 0 0' }}>
                  <p style={{
                    color: 'var(--gray)',
                    fontSize: 'var(--14)',
                    fontWeight: '400',
                    margin: 0
                  }}>
                    © RAPKOLOGY All Rights Are Reserved 2022.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
