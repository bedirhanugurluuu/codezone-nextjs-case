import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TwitchArea from '@/components/TwitchArea';
import Trends from '@/components/Trends';
import Favorites from '@/components/Favorites';
import Explore from '@/components/Explore';
import { mockPosts } from '@/data/mockData';

export const metadata = {
  title: 'Rapkology - Türkçe Rap Müzik Platformu',
  description: 'Türkçe rap müziğin kalbi Rapkology\'de atıyor. En yeni şarkılar, trendler, haberler ve daha fazlası için bizi takip edin.',
  keywords: 'türkçe rap, rap müzik, hip hop, rap sanatçıları, yeni şarkılar, rap haberleri, müzik platformu',
  openGraph: {
    title: 'Rapkology - Türkçe Rap Müzik Platformu',
    description: 'Türkçe rap müziğin kalbi Rapkology\'de atıyor. En yeni şarkılar, trendler, haberler ve daha fazlası.',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rapkology - Türkçe Rap Müzik Platformu',
    description: 'Türkçe rap müziğin kalbi Rapkology\'de atıyor. En yeni şarkılar, trendler, haberler ve daha fazlası.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <div className="max-w-container-2xl mx-auto">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Twitch Area */}
        <TwitchArea />
        
        {/* Trends */}
        <Trends posts={mockPosts} />
        
        {/* Favorites */}
        <Favorites />
        
        {/* Explore */}
        <Explore posts={mockPosts} />
        </div>
      </main>

    </div>
  );
}
