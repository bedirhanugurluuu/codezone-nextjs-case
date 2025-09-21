'use client';

import Link from 'next/link';
import { Post } from '@/data/mockData';

interface TrendsProps {
  posts: Post[];
}

export default function Trends({ posts }: TrendsProps) {
  // Sadece trend olan postları filtrele
  const trendPosts = posts.filter(post => post.attributes.trends === true);

  if (trendPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-8 lg:py-30 trends-section">
      <div className="container">
        <div className="mb-8 flex items-center gap-4 trends-title">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-10 font-bold text-white font-saira-condensed">
            TRENDLER
          </h2>
          <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.44636 49.4423L5.49356 46.4895L25.5451 26.5067L37.0129 37.9745L53.5623 21.4251H44.8413V17.3049H60.4293V32.8929H56.3778V24.4466L36.9443 43.8801L25.4764 32.4123L8.44636 49.4423Z" fill="#F0E74D"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '40px 20px' }}>
          {trendPosts.map((post, index) => (
            <Link key={post._id} href={`/blog/${post.attributes.slug}`} className="trend-item" style={{ display: 'flex', gap: 'var(--16)', textDecoration: 'none' }}>
              <div 
                className="trend-number"
                style={{ 
                  fontFamily: '"Saira Condensed"',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  fontSize: 'var(--70)',
                  fontWeight: '700',
                  lineHeight: '0.88',
                  color: 'var(--gray)',
                  minWidth: 'var(--100)',
                  transition: '0.3s ease-in-out'
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="trend-content" style={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column'
              }}>
                <div 
                  className="trend-user"
                  style={{
                    fontSize: 'var(--16)',
                    fontWeight: '400',
                    fontFamily: 'Saira',
                    color: 'var(--white)',
                    marginBottom: 'var(--8)'
                  }}
                >
                  {post.attributes.authors}
                </div>
                <div 
                  className="trend-title"
                  style={{
                    paddingBottom: 'var(--20)',
                    marginBottom: 'var(--22)',
                    fontWeight: '800',
                    borderBottom: '1px solid var(--lightgray)'
                  }}
                >
                  <h5>
                    {post.attributes.title}
                  </h5>
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

        <div className="flex justify-center mt-12">
          <div className="button-wrapper">
            <button className="btn main">
              TÜMÜNÜ GÖR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
