import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { BackToTopButton } from './components/BackToTop/BackToTopButton';

// Optimized dynamic imports for server components
const Navbar = dynamic(() => import('@/app/components/Navbar/Navbar'), {
  loading: () => <div className="h-16 bg-purple-900/10" />
});

const Hero = dynamic(() => import('@/app/components/Hero/Hero'), {
  loading: () => <div className="h-screen bg-gradient-to-b from-purple-900 to-indigo-900" />
});

// Lazy load non-critical components
const About = dynamic(() => import('@/app/components/About/About'), {
  loading: () => <div className="h-96 bg-gray-100/50" />
});

const Skills = dynamic(() => import('@/app/components/Skill/Skill'), {
  loading: () => <div className="h-96 bg-gray-50/50" />
});

const Works = dynamic(() => import('@/app/components/Work/Work'), {
  loading: () => <div className="h-96 bg-gray-100/50" />
});

const Contact = dynamic(() => import('@/app/components/Contact/Contact'), {
  loading: () => <div className="h-96 bg-gray-50/50" />
});

// SEO Metadata
export const metadata: Metadata = {
  title: 'Levy Forge',
  description: 'Passionate Full Stack Developer specializing in JavaScript, React, and MERN Stack. Creating dynamic web applications with modern technologies.',
  keywords: 'Full Stack Developer, React Developer, JavaScript, MERN Stack, Web Development, Software Engineer, Portfolio',
  authors: [{ name: 'Srithar' }],
  creator: 'Srithar',
  publisher: 'Srithar',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://levyforge.netlify.app',
    title: 'Full Stack Developer Portfolio',
    description: 'Passionate Full Stack Developer specializing in JavaScript, React, and MERN Stack.',
    siteName: 'Levy Forge',
    images: [
      {
        url: '/pixar-profile.png',
        width: 1200,
        height: 630,
        alt: 'Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Levy Forge',
    description: 'Passionate Full Stack Developer specializing in JavaScript, NextJS, and MERN Stack.',
    images: ['/pixar-profile.png'],
  },
  verification: {
    google: 'M9MZN7sJiaG8Q123Tu8nTyAo846oa-YM0aYfKczMA4E',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Srithar',
  url: 'https://levyforge.netlify.app',
  image: '/pixar-profile.png',
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance'
  },
  sameAs: [
    'https://linkedin.com/in/srithar-K',
    'https://github.com/sreekrishnah',
  ],
  email: 'sritharkalimuthu@gmail.com',
  telephone: '+919786348620',
  description: 'Passionate Full Stack Developer specializing in JavaScript, React, and MERN Stack.',
  knowsAbout: [
    'JavaScript',
    'React',
    'Node.js',
    'MERN Stack',
    'TypeScript',
    'Next.js',
    'Web Development',
    'Frontend Development',
    'Backend Development'
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Your University/College'
  }
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
      
      <main className='bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-900 relative'>
        {/* Optimized Background Elements */}
        <div className="fixed inset-0 z-0 will-change-transform">
          {/* Clouds - Optimized loading */}
          <div className="absolute top-0 w-full h-80 md:h-32 opacity-10">
            <Image 
              src="/clouds.svg" 
              alt="" 
              fill 
              className="object-cover object-top" 
              priority 
              sizes="100vw"
              quality={75}
            />
          </div>
          
          {/* Forest - Optimized loading */}
          <div className="absolute -bottom-7 w-full h-full">
            <Image 
              src="/forest.png" 
              alt="" 
              fill 
              className="object-cover object-bottom" 
              priority={false}
              sizes="100vw"
              quality={80}
              loading="eager"
            />
          </div>
        </div>

        {/* Backdrop blur overlay */}
        <div className="absolute inset-0 z-10" />

        {/* Main Content Container */}
        <div className="relative min-h-screen z-20">
          {/* Navigation - Critical above the fold */}
          <Navbar />

          {/* Hero Section - Critical above the fold */}
          <Hero />

          {/* Below the fold sections - Lazy loaded with Suspense */}
          <Suspense fallback={<div className="h-96 bg-gray-100/50" />}>
            <About />
          </Suspense>

          <Suspense fallback={<div className="h-96 bg-gray-50/50" />}>
            <Skills />
          </Suspense>

          <Suspense fallback={<div className="h-96 bg-gray-100/50" />}>
            <Works />
          </Suspense>

          <Suspense fallback={<div className="h-96 bg-gray-50/50" />}>
            <Contact />
          </Suspense>

          {/* Back to Top Button */}
          <BackToTopButton />
        </div>
      </main>
    </>
  );
}