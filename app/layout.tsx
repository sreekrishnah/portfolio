import type { Metadata } from 'next';
import { fonts } from './utils/fonts';
import './globals.css';

// Base metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'Sritharan Kalimuthu - Full Stack Developer',
    template: '%s | Sritharan Kalimuthu'
  },
  description: 'Passionate Full Stack Developer specializing in JavaScript, React, and MERN Stack. Creating dynamic web applications with modern technologies.',
  keywords: ['Full Stack Developer', 'React Developer', 'JavaScript', 'MERN Stack', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Sritharan Kalimuthu', url: 'https://your-domain.com' }],
  creator: 'Sritharan Kalimuthu',
  publisher: 'Sritharan Kalimuthu',
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
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
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
        scroll-smooth
      `}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        
        {/* Prevent zoom on mobile inputs */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        
        {/* Apple specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sritharan K" />
      </head>
      <body 
        className={`${fonts.firaCode.variable} antialiased bg-white text-gray-900 selection:bg-purple-200 selection:text-purple-900`}
        suppressHydrationWarning
      >
        
        {/* Main content */}
        <main id="main-content" className="relative">
          {children}
        </main>
        
        {/* Scroll restoration script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Scroll restoration
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              
              // Smooth scrolling polyfill for older browsers
              if (!('scrollBehavior' in document.documentElement.style)) {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
                document.head.appendChild(script);
              }
            `,
          }}
        />
      </body>
    </html>
  );
}