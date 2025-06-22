import type { Metadata } from 'next';
import { fonts } from './utils/fonts';
import './globals.css';

// Base metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://levyforge.netlify.app'),
  title: {
    default: 'Levy Forge',
    template: '%s | Srithar'
  },
  description: 'Passionate Full Stack Developer specializing in JavaScript, React, and MERN Stack. Creating dynamic web applications with modern technologies.',
  keywords: ['Full Stack Developer', 'React Developer', 'JavaScript', 'MERN Stack', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Srithar', url: 'https://levyforge.netlify.app' }],
  creator: 'Srithar',
  publisher: 'Srithar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' }],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className={`
        ${fonts.firaCode.variable} 
        ${fonts.portLligat.variable} 
        ${fonts.leagueSpartan.variable} 
        ${fonts.timmana.variable}
      `}
      suppressHydrationWarning
    >
      <head>
        {/* Critical resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/clouds.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/forest.png" as="image" type="image/png" />
        
        {/* Theme and mobile optimization */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        
        {/* Apple specific optimizations */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Levy Forge" />
        
        {/* Performance optimizations */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical styles to prevent layout shift */
            .hero-bg { min-height: 100vh; }
            .nav-height { height: 4rem; }
            .loading-skeleton { 
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: loading 1.5s infinite;
            }
            @keyframes loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
            /* Disable animations on reduced motion */
            @media (prefers-reduced-motion: reduce) {
              *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
            }
          `
        }} />
      </head>
      
      <body 
        className={`
          ${fonts.firaCode.variable} 
          antialiased 
          bg-white 
          text-gray-900 
          selection:bg-purple-200 
          selection:text-purple-900
          overflow-x-hidden
        `}
        suppressHydrationWarning
      >

        {/* Main content with performance optimizations */}
        <main id="main-content" className="relative">
          {children}
        </main>

        {/* Optimized scroll restoration and smooth scrolling */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Scroll restoration
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                
                // Intersection Observer for lazy loading
                if ('IntersectionObserver' in window) {
                  window.ioCallback = function(entries) {
                    entries.forEach(function(entry) {
                      if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                      }
                    });
                  };
                  window.io = new IntersectionObserver(window.ioCallback, {
                    threshold: 0.1,
                    rootMargin: '50px'
                  });
                }
                
                // Performance monitoring
                if ('PerformanceObserver' in window) {
                  const observer = new PerformanceObserver(function(list) {
                    list.getEntries().forEach(function(entry) {
                      if (entry.entryType === 'largest-contentful-paint') {
                        console.log('LCP:', entry.startTime);
                      }
                    });
                  });
                  observer.observe({entryTypes: ['largest-contentful-paint']});
                }
              })();
            `
          }}
        />
      </body>
    </html>
  );
}