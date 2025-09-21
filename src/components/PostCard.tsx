'use client';

import Image from 'next/image';
import { Play, Calendar, User } from 'lucide-react';
import { Post } from '@/data/mockData';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'large' | 'small';
}

export default function PostCard({ post, variant = 'default' }: PostCardProps) {
  const getCardClasses = () => {
    switch (variant) {
      case 'large':
        return 'md:col-span-2';
      case 'small':
        return '';
      default:
        return '';
    }
  };

  const getImageClasses = () => {
    switch (variant) {
      case 'large':
        return 'h-48 sm:h-64 lg:h-80';
      case 'small':
        return 'h-32 sm:h-40';
      default:
        return 'h-40 sm:h-48';
    }
  };

  const getTitleClasses = () => {
    switch (variant) {
      case 'large':
        return 'text-xl sm:text-2xl lg:text-3xl';
      case 'small':
        return 'text-sm sm:text-base';
      default:
        return 'text-lg sm:text-xl';
    }
  };

  return (
    <article className={`group cursor-pointer ${getCardClasses()}`}>
      <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors h-full">
        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={post.attributes.img}
            alt={post.attributes.title}
            width={400}
            height={300}
            className={`w-full ${getImageClasses()} object-cover group-hover:scale-105 transition-transform duration-300`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110">
              <Play className="h-6 w-6" />
            </button>
          </div>

          {/* Category badge */}
          {post.attributes.trends && (
            <div className="absolute top-3 left-3">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                Trend
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Categories */}
          <div className="flex flex-wrap gap-1">
            {post.attributes.category.slice(0, 2).map((category, index) => (
              <span
                key={index}
                className="text-red-500 text-xs font-medium uppercase tracking-wide"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className={`font-bold text-white group-hover:text-red-500 transition-colors line-clamp-2 ${getTitleClasses()}`}>
            {post.attributes.title}
          </h3>

          {/* Description */}
          {variant !== 'small' && (
            <p className="text-gray-300 text-sm line-clamp-2">
              {post.attributes.desc}
            </p>
          )}

          {/* Meta info */}
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{post.attributes.authors[0]}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>
                {new Date(post.createdAt).toLocaleDateString('tr-TR')}
              </span>
            </div>
          </div>

          {/* Tags */}
          {variant !== 'small' && (
            <div className="flex flex-wrap gap-1">
              {post.attributes.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-gray-500 text-xs px-2 py-1 bg-gray-800 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
