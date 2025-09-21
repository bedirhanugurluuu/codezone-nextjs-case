'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Post, mockPosts } from '@/data/mockData';
import Header from './Header';
import TrendsBlog from './TrendsBlog';

interface BlogPostProps {
  post: Post;
}

export default function BlogPost({ post }: BlogPostProps) {
  // Content'i yarıya böl
  const contentWords = post.attributes.content.split(' ');
  const midPoint = Math.floor(contentWords.length / 2);
  const firstHalf = contentWords.slice(0, midPoint).join(' ');
  const secondHalf = contentWords.slice(midPoint).join(' ');

  return (
    <div className="min-h-screen bg-[#121212]">
      <Header darkBackground={true} />
      
      <div className="header-space"></div>

      <section className="blog-post py-12 md:py-20">
        <div className="container">
          <div className="breadcrumbs text-white mb-8 md:mb-12">
            <nav className="flex items-center space-x-2 text-md uppercase">
              <Link 
                href="/"
                className="text-white hover:text-yellow-500 transition-colors"
              >
                Anasayfa
              </Link>
              <span>
                <svg width="9" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.38477 8.1958L5.22656 4.354L1.38477 0.512207" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <Link 
                href="/blog"
                className="text-white hover:text-yellow-500 transition-colors"
              >
                Blog
              </Link>
              <span>
                <svg width="9" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.38477 8.1958L5.22656 4.354L1.38477 0.512207" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-[#f0e74d]">BlogPost</span>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="blog-post-wrapper lg:col-span-3">
                <div className="flex items-center gap-2 mb-6">
                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.73242 8.08203C1.73242 8.08203 4.95642 1.63403 10.5984 1.63403C16.2404 1.63403 19.4644 8.08203 19.4644 8.08203C19.4644 8.08203 16.2404 14.53 10.5984 14.53C4.95642 14.53 1.73242 8.08203 1.73242 8.08203Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.5984 10.5C11.9338 10.5 13.0164 9.41746 13.0164 8.08203C13.0164 6.74661 11.9338 5.66403 10.5984 5.66403C9.263 5.66403 8.18042 6.74661 8.18042 8.08203C8.18042 9.41746 9.263 10.5 10.5984 10.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <span className="view-count text-white text-sm">12,094</span>
                </div>

                <h1 className="text-white text-2xl md:text-4xl font-bold font-saira-condensed uppercase leading-tight">
                    {post.attributes.title}
                </h1>

                <p className='sub-title'>
                    {post.attributes.desc}
                </p>

                <div className="text-white text-base leading-relaxed mb-8">
                    <p>{firstHalf}</p>
                </div>

                <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
                    <Image
                    src={post.attributes.img}
                    alt={post.attributes.title}
                    fill
                    className="object-cover"
                    />
                </div>

                <div className="text-white text-base leading-relaxed mb-8">
                    <p>{secondHalf}</p>
                </div>

                <div className="mb-8 blog-post-tags">
                    <div className="flex flex-wrap gap-2">
                    {post.attributes.tags.map((tag, index) => (
                        <span
                        key={index}
                        className="px-2 py-2 bg-[#323232] text-white text-sm"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2961 2.87156L13.8677 3.48945L14.4856 2.87259C16.2105 1.19143 18.5997 0.426275 20.9476 0.817089C24.4953 1.4082 27.0956 4.47807 27.0956 8.07726V8.37591C27.0956 10.5128 26.21 12.5569 24.6447 14.0141L15.3403 22.7006C14.9541 23.061 14.4444 23.2618 13.914 23.2618C13.3837 23.2618 12.8739 23.061 12.4877 22.7006L3.18286 14.0141C1.6196 12.5569 0.732422 10.5128 0.732422 8.37591V8.07726C0.732422 4.47807 3.33373 1.4082 6.8804 0.817089C9.18203 0.426275 11.6175 1.19143 13.2961 2.87156C13.2961 2.87208 13.2498 2.87156 13.2961 2.87156ZM13.8677 6.98566L11.5506 4.5759C10.4333 3.50387 8.84734 2.99514 7.28717 3.25465C4.93148 3.64753 3.20397 5.6881 3.20397 8.07726V8.37591C3.20397 9.82794 3.80693 11.2182 4.86918 12.2068L13.914 20.6513L22.9609 12.2068C24.0216 11.2182 24.6241 9.82794 24.6241 8.37591V8.07726C24.6241 5.6881 22.894 3.64753 20.5409 3.25465C18.9807 2.99514 17.3948 3.50387 16.2774 4.5759L13.8677 6.98566Z" fill="white"/>
                        </svg>
                        <span className="blog-post-likes text-white text-sm"><b>14 kişi</b> beğendi</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9614 0.716797C5.85515 0.716797 0.0971166 5.39568 0.0971166 11.1702C0.0971166 13.5639 1.09772 15.7561 2.75619 17.5125C2.00837 19.4977 0.450923 21.1752 0.425795 21.1938C0.0928448 21.5456 0.00489575 22.0608 0.193358 22.5005C0.388142 22.9403 0.818439 23.2317 1.30191 23.2317C4.39269 23.2317 6.7849 21.9376 8.2926 20.9074C9.69978 21.3622 11.318 21.6235 12.9614 21.6235C20.0677 21.6235 25.7819 16.9431 25.7819 11.1702C25.7819 5.39719 20.0677 0.716797 12.9614 0.716797ZM12.9665 19.2112C11.6221 19.2112 10.2968 19.0039 9.02735 18.6021L7.88401 18.244L6.90401 18.9351C6.18785 19.4437 5.20132 20.0095 4.01425 20.3925C4.3849 19.7834 4.73644 19.0984 5.01336 18.3697L5.54708 16.9625L4.51079 15.8634C3.60466 14.8942 2.51158 13.291 2.51158 11.1702C2.51158 6.73502 7.19801 3.12911 12.965 3.12911C18.7319 3.12911 23.4183 6.73502 23.4183 11.1702C23.4183 15.6053 18.7309 19.2112 12.9665 19.2112Z" fill="white"/>
                        </svg>
                    <span className="blog-post-comments text-white font-medium text-sm">3</span>
                    </div>
                </div>

                <div className="show-more-content pt-8">
                    <h3 className="font-saira-condensed uppercase mb-6">
                    DAHA FAZLA İÇERİK
                    </h3>

                    <div className="space-y-0">
                    {mockPosts.filter(p => p._id !== post._id).slice(0, 3).map((relatedPost, index, array) => (
                        <div key={relatedPost._id}>
                        <Link href={`/blog/${relatedPost.attributes.slug}`}>
                            <div className="flex space-x-4 group cursor-pointer py-4">
                            <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
                                <Image
                                src={relatedPost.attributes.img}
                                alt={relatedPost.attributes.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-white text-base font-medium leading-tight line-clamp-2">
                                {relatedPost.attributes.title}
                                </h4>
                            </div>
                            </div>
                        </Link>
                        {index < array.length - 1 && (
                            <div className="border-b border-gray-700"></div>
                        )}
                        </div>
                    ))}
                    </div>
                </div>

                <TrendsBlog posts={mockPosts} />
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24 h-fit" style={{ color: 'var(--white)' }}>
                <div className="footer-newsletter" style={{ marginTop: 'var(--40)' }}>
                  <h3 style={{
                    fontFamily: 'Saira Condensed',
                    fontSize: 'var(--40)',
                    fontWeight: '700',
                    marginBottom: 'var(--20)',
                    textTransform: 'uppercase',
                    color: 'var(--white)',
                    lineHeight: '1.2'
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
                    alignItems: 'center',
                    marginBottom: 'var(--30)'
                  }}>
                    <div style={{ cursor: 'pointer' }}>
                      <svg width="24" height="24" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0725 29.7229V16.8029H15.3825L16.2025 11.4529H11.0725V7.98287C11.0725 6.52287 11.7925 5.09287 14.0825 5.09287H16.4125V0.552871C16.4125 0.552871 14.2925 0.192871 12.2725 0.192871C8.05254 0.192871 5.29254 2.75287 5.29254 7.38287V11.4529H0.602539V16.8029H5.29254V29.7229H11.0725Z" fill="#F0E74D"/>
                      </svg>
                    </div>
                    <div style={{ cursor: 'pointer' }}>
                      <svg width="24" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.4315 3.46606C26.5715 3.85606 25.6115 4.09606 24.6915 4.24606C25.1315 4.17606 25.7815 3.37606 26.0415 3.04606C26.4415 2.55606 26.7615 1.98606 26.9515 1.38606C26.9715 1.33606 26.9915 1.27606 26.9515 1.24606C26.8915 1.22606 26.8515 1.23606 26.8015 1.25606C25.7615 1.81606 24.6915 2.21606 23.5415 2.50606C23.4515 2.52606 23.3815 2.50606 23.3215 2.44606C23.2215 2.33606 23.1415 2.23606 23.0315 2.15606C22.5515 1.74606 22.0415 1.42606 21.4515 1.18606C20.6915 0.876061 19.8515 0.746061 19.0315 0.796061C18.2315 0.846061 17.4415 1.07606 16.7415 1.44606C16.0315 1.81606 15.3915 2.33606 14.8915 2.95606C14.3715 3.60606 13.9815 4.36606 13.7915 5.16606C13.6015 5.94606 13.6115 6.71606 13.7315 7.50606C13.7515 7.63606 13.7315 7.65606 13.6215 7.63606C9.15153 6.96606 5.44153 5.37606 2.44153 1.94606C2.31153 1.79606 2.24153 1.79606 2.13153 1.95606C0.811534 3.92606 1.45153 7.09606 3.10153 8.65606C3.32153 8.86606 3.55153 9.07606 3.79153 9.26606C3.70153 9.28606 2.61153 9.16606 1.63153 8.65606C1.50153 8.57606 1.43154 8.61606 1.42154 8.76606C1.41154 8.97606 1.42153 9.17606 1.46153 9.40606C1.71153 11.4061 3.10153 13.2561 4.99153 13.9761C5.22153 14.0761 5.46153 14.1561 5.71153 14.1961C5.28153 14.2861 4.83153 14.3561 3.59153 14.2661C3.44153 14.2361 3.38153 14.3161 3.44153 14.4661C4.37153 17.0061 6.38153 17.7561 7.89153 18.1861C8.09153 18.2261 8.29153 18.2261 8.49153 18.2661C8.48153 18.2861 8.47153 18.2861 8.46153 18.3061C7.96153 19.0661 6.23153 19.6361 5.42154 19.9161C3.95153 20.4261 2.36153 20.6561 0.811534 20.5061C0.561534 20.4661 0.511532 20.4761 0.441532 20.5061C0.371532 20.5461 0.441531 20.6061 0.511531 20.6761C0.831531 20.8861 1.14153 21.0661 1.47153 21.2461C2.46153 21.7661 3.48153 22.1861 4.55153 22.4761C10.0915 24.0061 16.3315 22.8861 20.4915 18.7461C23.7615 15.4961 24.9015 11.0261 24.9015 6.53606C24.9015 6.35606 25.1115 6.26606 25.2315 6.16606C26.0815 5.52606 26.7715 4.76606 27.4015 3.90606C27.5415 3.71606 27.5415 3.54606 27.5415 3.47606V3.45606C27.5415 3.38606 27.5415 3.40606 27.4315 3.45606" fill="#F0E74D"/>
                      </svg>
                    </div>
                    <div style={{ cursor: 'pointer' }}>
                      <svg width="24" height="24" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.8483 2.73285C25.7283 1.76285 23.4983 1.06285 21.1983 0.672852C20.9083 1.18285 20.5783 1.86285 20.3483 2.42285C17.9083 2.06285 15.4183 2.06285 12.9783 2.42285C12.7183 1.82285 12.4283 1.24285 12.1083 0.672852C9.80829 1.06285 7.56829 1.75285 5.44829 2.73285C1.24829 8.99285 0.108301 15.1028 0.678301 21.1129C3.1383 22.9429 5.8983 24.3329 8.8383 25.2329C9.4983 24.3329 10.0783 23.3929 10.5883 22.3929C9.6383 22.0329 8.7183 21.5929 7.8383 21.0829C8.0683 20.9129 8.28831 20.7329 8.49831 20.5629C13.6683 23.0029 19.6583 23.0029 24.8183 20.5629C25.0383 20.7429 25.2683 20.9229 25.4883 21.0929C24.6083 21.6129 23.6883 22.0529 22.7283 22.4129C23.2283 23.4029 23.8183 24.3529 24.4783 25.2429C27.4183 24.3529 30.1783 22.9629 32.6383 21.1229C33.2983 14.1529 31.4883 8.09285 27.8383 2.73285M11.2883 17.4329C9.69832 17.4329 8.38829 15.9729 8.38829 14.1829C8.38829 12.3929 9.66832 10.9229 11.2883 10.9229C12.9083 10.9229 14.1983 12.3829 14.1883 14.1729C14.1683 15.9629 12.9083 17.4329 11.2883 17.4329ZM21.9983 17.4329C20.4083 17.4329 19.0983 15.9729 19.0983 14.1829C19.0983 12.3929 20.3783 10.9229 21.9983 10.9229C23.6183 10.9229 24.9083 12.3829 24.8983 14.1729C24.8783 15.9629 23.6183 17.4329 21.9983 17.4329Z" fill="#F0E74D"/>
                      </svg>
                    </div>
                    <div style={{ cursor: 'pointer' }}>
                      <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0903 0.639648C8.52539 0.639648 0.772095 8.39294 0.772095 17.9579C0.772095 27.5228 8.52539 35.2761 18.0903 35.2761C27.6553 35.2761 35.4086 27.5228 35.4086 17.9579C35.4086 8.39294 27.6573 0.639648 18.0903 0.639648ZM26.0318 25.6181C25.7216 26.1269 25.0557 26.2882 24.5469 25.9759C20.4811 23.4921 15.3625 22.9296 9.33401 24.3069C8.75288 24.4393 8.17381 24.0753 8.04145 23.4942C7.90909 22.913 8.27101 22.334 8.85421 22.2016C15.4514 20.694 21.1098 21.3434 25.6761 24.1332C26.1849 24.4455 26.3462 25.1094 26.0339 25.6181H26.0318ZM28.1516 20.9029C27.7607 21.5378 26.9294 21.7384 26.2945 21.3475C21.6392 18.4852 14.5435 17.658 9.03621 19.329C8.32271 19.5441 7.56786 19.1429 7.35071 18.4294C7.13563 17.7159 7.53891 16.9631 8.25033 16.746C14.5394 14.8371 22.3589 15.7616 27.7049 19.0478C28.3398 19.4386 28.5404 20.27 28.1496 20.9049L28.1516 20.9029ZM28.3336 15.9911C22.7518 12.676 13.5426 12.372 8.2131 13.9892C7.35691 14.2477 6.45315 13.7659 6.19257 12.9097C5.93406 12.0535 6.41593 11.1497 7.27212 10.8891C13.3895 9.03198 23.5604 9.38976 29.986 13.2054C30.7574 13.6624 31.0097 14.6572 30.5527 15.4245C30.0977 16.1938 29.1009 16.4482 28.3336 15.9911Z" fill="#F0E74D"/>
                      </svg>
                    </div>
                    <div style={{ cursor: 'pointer' }}>
                      <svg width="24" height="24" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.4114 0.871826C23.5529 1.07487 23.7682 0.967197 23.9436 0.97335C25.971 1.06564 28.0015 1.1364 30.0196 1.38867C32.7454 1.72709 34.1267 3.03151 34.5328 5.74804C35.065 9.29214 35.0835 12.8547 34.8958 16.4234C34.822 17.8355 34.7051 19.2384 34.4436 20.632C34.019 22.8994 32.6039 24.2376 30.3088 24.5084C26.5309 24.9575 22.7315 24.9914 18.9382 25.0345C15.0526 25.0775 11.167 24.9729 7.28757 24.7176C6.40769 24.6591 5.52782 24.5668 4.66026 24.4069C2.7713 24.0592 1.46072 22.8009 1.05155 20.9212C0.725446 19.4322 0.639305 17.9155 0.519322 16.4019C0.507017 16.2419 0.60854 16.045 0.408569 15.925V9.99049C0.60854 9.87051 0.507017 9.67362 0.519322 9.51364C0.626999 8.17845 0.719293 6.84019 0.943876 5.5173C1.36228 3.04074 2.76822 1.70863 5.25709 1.38867C7.23834 1.1364 9.22882 1.07487 11.2193 0.976426C11.3947 0.967197 11.61 1.07795 11.7485 0.871826H23.4114V0.871826ZM14.3081 7.80927V18.1062C17.3107 16.3803 20.2549 14.6883 23.2668 12.9562C20.2395 11.2149 17.3015 9.52902 14.3081 7.80927Z" fill="#F0E74D"/>
                      </svg>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    marginBottom: 'var(--30)'
                  }}>
                    {[
                      { name: 'Ana Sayfa', href: '/' },
                      { name: 'Videolar', href: '#' },
                      { name: 'Haberler', href: '/blog' },
                      { name: 'Röportajlar', href: '#' }
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

                  <div className='footer-copyright'>
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

    </div>
  );
}