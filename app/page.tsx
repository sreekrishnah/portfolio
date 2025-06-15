import type { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { BackToTopButton } from './components/BackToTop/BackToTopButton';

// Dynamic imports for better performance and code splitting
const Navbar = dynamic(() => import('@/app/components/Navbar/Navbar'), {
  ssr: true,
  loading: () => <div className="h-16 bg-purple-900/20 animate-pulse" />
});

const Hero = dynamic(() => import('@/app/components/Hero/Hero'), {
  ssr: true,
  loading: () => <div className="h-screen bg-gradient-to-b from-purple-900 to-indigo-900 animate-pulse" />
});

const About = dynamic(() => import('@/app/components/About/About'), {
  ssr: true,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

const Skills = dynamic(() => import('@/app/components/Skill/Skill'), {
  ssr: true,
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const Works = dynamic(() => import('@/app/components/Work/Work'), {
  ssr: true,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
});

const Contact = dynamic(() => import('@/app/components/Contact/Contact'), {
  ssr: true,
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

// SEO Metadata
export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'Passionate Full Stack Developer specializing in JavaScript, React, and MERN Stack. Creating dynamic web applications with modern technologies.',
  keywords: 'Full Stack Developer, React Developer, JavaScript, MERN Stack, Web Development, Software Engineer, Portfolio',
  authors: [{ name: 'Sritharan' }],
  creator: 'Sritharan',
  publisher: 'Sritharan',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://levyz-codes.netlify.app',
    title: 'Full Stack Developer Portfolio',
    description: 'Passionate Full Stack Developer specializing in JavaScript, React, and MERN Stack.',
    siteName: 'DevPortfolio',
    images: [
      {
        url: '/pixar-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in JavaScript, React, and MERN Stack.',
    images: ['/pixar-profile.jpeg'],
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
  url: 'https://your-domain.com',
  image: '/pixar-profile.jpeg',
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance'
  },
  sameAs: [
    'https://linkedin.com/in/yourprofile',
    'https://github.com/yourprofile',
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
      
      {/* Main Application Container */}
      <div className="relative min-h-screen bg-white">
        {/* Navigation */}
        <Suspense fallback={<div className="h-16 bg-purple-900/20 animate-pulse" />}>
          <Navbar />
        </Suspense>

        {/* Hero Section */}
        <Suspense fallback={<div className="h-screen bg-gradient-to-b from-purple-900 to-indigo-900 animate-pulse" />}>
          <Hero />
        </Suspense>

        {/* About Section */}
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <About />
        </Suspense>

        {/* Skills Section */}
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <Skills />
        </Suspense>

        {/* Works/Projects Section */}
        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
          <Works />
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <Contact />
        </Suspense>

        {/* Back to Top Button */}
        <BackToTopButton />
      </div>
    </>
  );
}