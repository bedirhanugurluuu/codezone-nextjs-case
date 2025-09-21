import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { mockPosts } from '@/data/mockData';
import BlogPost from '../../../components/BlogPost';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = mockPosts.find(p => p.attributes.slug === slug);
  
  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}

export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.attributes.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = mockPosts.find(p => p.attributes.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Rapkology',
      description: 'Aradığınız sayfa bulunamadı.',
    };
  }

  const seo = post.attributes.seo;

  return {
    title: seo.metaTitle || `${post.attributes.title} - Rapkology`,
    description: seo.metaDescription || post.attributes.desc,
    keywords: post.attributes.tags.join(', '),
    authors: [{ name: post.attributes.authors[0] }],
    openGraph: {
      title: seo.metaTitle || post.attributes.title,
      description: seo.metaDescription || post.attributes.desc,
      images: [
        {
          url: post.attributes.img,
          width: 1200,
          height: 630,
          alt: post.attributes.title,
        }
      ],
      type: 'article',
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: post.attributes.authors,
      tags: post.attributes.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.metaTitle || post.attributes.title,
      description: seo.metaDescription || post.attributes.desc,
      images: [post.attributes.img],
    },
    alternates: {
      canonical: seo.canonicalURL ? `/blog/${seo.canonicalURL}` : `/blog/${post.attributes.slug}`,
    },
    category: post.attributes.category.join(', '),
  };
}
