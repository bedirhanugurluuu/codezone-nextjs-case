import Blog from '@/components/Blog';

export default function BlogPage() {
  return <Blog />;
}

export const metadata = {
  title: 'Blog - Türkçe Rap Haberleri ve Analizler | Rapkology',
  description: 'Türkçe rap dünyasından en son haberler, röportajlar ve analizler. Rap müzik sahnesindeki gelişmeleri yakından takip edin.',
  keywords: 'türkçe rap, rap haberleri, rap müzik, hip hop, rap sanatçıları, müzik haberleri',
  openGraph: {
    title: 'Blog - Türkçe Rap Haberleri | Rapkology',
    description: 'Türkçe rap dünyasından en son haberler, röportajlar ve analizler.',
    type: 'website',
    url: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Türkçe Rap Haberleri | Rapkology',
    description: 'Türkçe rap dünyasından en son haberler, röportajlar ve analizler.',
  },
  alternates: {
    canonical: '/blog',
  },
};
