# Rapkology - CodeZone Software - Case

##  Sayfalar
- https://codezone-nextjs-case.vercel.app/
- https://codezone-nextjs-case.vercel.app/blog
- https://codezone-nextjs-case.vercel.app/blog/[slug]


##  Teknoloji Stack'i

### **Frontend Framework**
- **Next.js 15.5.3** - React tabanlı full-stack framework
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19.1.0** - Modern React hooks ve components

### **UI/UX Kütüphaneleri**
- **Swiper.js 12.0.1** - Modern slider/carousel component
- **Lucide React** - Modern icon library
- **Next/Image** - Optimize edilmiş görsel yükleme

### **Development Tools**
- **ESLint** - Code quality ve standartlar
- **PostCSS** - CSS processing
- **Turbopack** - Ultra-fast bundler

## Proje Özellikleri

### **Ana Sayfa (Homepage)**

### **Blog Sistemi**
- **Blog Ana Sayfası** (`/blog`):
- **Blog Post Detay** (`/blog/[slug]`):

### **Responsive Design**
- **Mobile-First**: 768px altında optimize
- **Hamburger Menü**: Mobilde gizli menü sistemi

## **Mimari Kararlar**

### **Rendering Strategy: SSG (Static Site Generation)**
```typescript
// Tüm blog postları build time'da pre-render ediliyor
export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.attributes.slug,
  }));
}
```


### **Data Management**
- **MockData**: Gerçek API simülasyonu
- **TypeScript Interfaces**: Type-safe data handling
- **Dynamic Content**: Tag-based filtering ve categorization

### **Component Architecture**
```
src/
├── components/
│   ├── Header.tsx          # Global navigation
│   ├── Footer.tsx          # Blog sayfası footer
│   ├── HeroSection.tsx     # Ana sayfa hero
│   ├── Explore.tsx         # Ana sayfa keşfet
│   ├── ExploreBlog.tsx     # Blog keşfet (farklı layout)
│   ├── Blog.tsx            # Blog ana sayfa
│   ├── BlogPost.tsx        # Blog post detay
│   ├── Trends.tsx          # Ana sayfa trends
│   ├── TrendsBlog.tsx      # Blog trends (2'li grid)
│   └── ...
└── data/
    └── mockData.ts         # Centralized data management
```

## 🔧 **Geliştirme Süreci**

### **Component Development**
1. **Header System**: Logo, navigation, responsive menu
2. **Layout Components**: Grid systems, flexbox layouts
3. **Content Components**: Post cards, sliders, lists
4. **Interactive Features**: Filtering, pagination, toggles

### **Responsive Implementation**
- **Mobile Optimization**: 768px breakpoint
- **Content Reorganization**: Sidebar'ın mobilde üste taşınması
- **Menu System**: Desktop navigation + mobile hamburger
- **Grid Adaptations**: 4→2→1 column responsive grids

### **SEO & Performance**
- **Dynamic Metadata**: MockData'dan SEO bilgileri
- **Sitemap Generator**: Otomatik sitemap oluşturma
- **Robots.txt**: Search engine optimization
- **Image Optimization**: Next/Image ile lazy loading

## 📊 **Performance Metrikleri**

### **Build Output**
```
Route (app)                    Size    First Load JS
┌ ○ /                         8.53 kB      161 kB
├ ○ /blog                    10.5 kB       163 kB
├ ● /blog/[slug]             9.92 kB       133 kB
├ ○ /robots.txt                 0 B          0 B
└ ○ /sitemap.xml                0 B          0 B
```

**Sonuçlar:**
- Tüm sayfalar 10kB altında
- First Load JS optimize
- Shared chunks efficient
- Static generation başarılı

## 🔗 **Routing Sistemi**

### **Page Structure**
```
/                           # Ana sayfa
├── /blog                   # Blog ana sayfası
└── /blog/[slug]           # Dynamic blog post sayfaları
    ├── /blog/lark2020den-yeni-parca-olmemi-istemezsin-yayinda
    ├── /blog/favordan-sert-bir-veda-ya-kal-ya-da-git-yayinda
    └── [+3 more]
```


## **Özel Özellikler**



### **1. Advanced Filtering System**
```typescript
// Tag-based filtering
const filteredPosts = mockPosts.filter(post => 
  post.attributes.tags.includes(activeTab)
);
```

### **2. Dynamic SEO Implementation**
```typescript
// MockData'dan otomatik SEO
return {
  title: seo.metaTitle || `${post.attributes.title} - Rapkology`,
  description: seo.metaDescription || post.attributes.desc,
  openGraph: { /* ... */ },
  twitter: { /* ... */ },
};
```

### **3. Component Reusability**
- **Explore**: Ana sayfa + Blog sayfası (farklı styling)
- **Trends**: Ana sayfa (3'lü) + Blog (2'li) versiyonları
- **Footer**: Conditional rendering (sadece blog)

## **Teknik Detaylar**

### **State Management**
- **React Hooks**: useState, useEffect, useMemo
- **Local State**: Component-level state management
- **Props Drilling**: Efficient data passing

### **CSS Architecture**
- **CSS Variables**: Scalable design tokens
- **Responsive Design**: Mobile-first approach
- **Component Styling**: Modular CSS approach

### **TypeScript Implementation**
```typescript
// Strict typing
interface Post {
  _id: string;
  attributes: {
    title: string;
    slug: string;
    content: string;
    tags: string[];
    seo: SEOData;
    // ...
  };
}
```

## **Responsive Breakpoints**

- **Mobile**: < 768px (tek sütun, hamburger menü)
- **Tablet**: 768px - 1024px (2 sütun)
- **Desktop**: > 1024px (3-4 sütun, full features)

## 🔍 **SEO Optimizasyonları**

### **Meta Tags**
- Dynamic title ve description
- OpenGraph social media tags
- Twitter Card optimization
- Canonical URLs

### **Technical SEO**
- **Sitemap.xml**: Otomatik oluşturma
- **Robots.txt**: Search engine guidance
- **Structured Data**: Article markup
- **Performance**: Fast loading times

## **Deployment**

### **Vercel Optimization**
- **Static Generation**: Pre-rendered HTML
- **Edge Network**: Global CDN distribution
- **Automatic Optimization**: Image, CSS, JS minification
- **Zero Config**: Otomatik deployment

### **Performance Features**
- **Image Optimization**: Next/Image lazy loading
- **Code Splitting**: Page-based bundles
- **Tree Shaking**: Unused code elimination
- **Caching**: Optimal cache headers


---

## 🚀 **Kurulum ve Çalıştırma**

```bash
# Dependencies
npm install

# Development
npm run dev

# Production Build
npm run build

# Start Production
npm start
```
