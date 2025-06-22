'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { memo, useMemo } from 'react';
import TypeWriter from '../TypeWriter/TypeWriter';

const Hero: React.FC = memo(() => {
  // Animation variants
  const animationVariants = useMemo(() => ({
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
          staggerChildren: 0.1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    } as Variants,

    slideUp: {
      hidden: { y: 30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    } as Variants,

    slideDown: {
      hidden: { y: -30, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    } as Variants,

    scale: {
      hidden: { scale: 0.9, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    } as Variants,

    float: {
      animate: {
        y: [0, -8, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut"
        }
      }
    } as Variants
  }), []);

  // Memoized social links to prevent recreation
  const socialLinks = useMemo(() => [
    {
      href: "mailto:sritharkalimuthu@gmail.com",
      icon: Mail,
      label: "Email",
      hoverColor: "hover:text-red-500"
    },
    {
      href: "https://www.linkedin.com/in/sritharan-k/",
      icon: Linkedin,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-500",
      external: true
    },
    {
      href: "https://github.com/sreekrishnah",
      icon: Github,
      label: "GitHub",
      hoverColor: "hover:text-gray-400",
      external: true
    },
    {
      href: "tel:+919786348620",
      icon: Phone,
      label: "Phone",
      hoverColor: "hover:text-green-500"
    }
  ], []);

  return (
    <section 
      id="Home" 
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Main Content */}
      <motion.div 
        className="relative z-20 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-evenly px-4 sm:px-6 lg:px-8 pt-6 sm:pt-16 pb-8 mt-6 sm:mt-0"
        variants={animationVariants.container}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <motion.div 
          className="w-full max-w-2xl flex flex-col items-start space-y-4 lg:space-y-6 text-center lg:text-left mt-8 lg:mt-0"
          variants={animationVariants.slideUp}
        >
          {/* Greeting */}
          <motion.h2 
            className="text-sm sm:text-lg lg:text-xl font-bold text-gray-300 uppercase tracking-wide font-sans"
            variants={animationVariants.slideDown}
          >
            Hello, I&apos;m Sritharan Kalimuthu,
          </motion.h2>

          {/* Main Title with Typewriter */}
          <motion.h1 
            className="text-base sm:text-xl lg:text-2xl xl:text-4xl font-bold text-white text-start uppercase leading-tight"
            variants={animationVariants.slideUp}
          >
            And I am{' '}
            <span className="text-orange-500">
              <TypeWriter
                words={[
                  'Software Engineer..',
                  'FullStack Developer..',
                  'Cyber-Addict..'
                ]}
                loop={true}
                cursor={true}
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div 
            className="text-start space-y-3 lg:space-y-4 text-white max-w-xl"
            variants={animationVariants.slideUp}
          >
            <p className="text-xs sm:text-sm font-bold italic">
              Specializing in JavaScript, React, and MERN Stack.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              From design to implementation, React is my passion and playground. 
              Excel & dedicated to craft and deliver dynamic and engaging web 
              applications with expertise in component architecture and state management.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center space-x-6 lg:space-x-8"
            variants={animationVariants.slideUp}
          >
            {socialLinks.map(({ href, icon: Icon, label, hoverColor, external }) => (
              <Link 
                key={label}
                href={href}
                className={`text-white ${hoverColor} transition-colors duration-200 will-change-transform`}
                aria-label={label}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
              </Link>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-row sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
            variants={animationVariants.slideUp}
          >
            <Link href='#About'>
              <button className='w-full sm:w-auto text-xs sm:text-sm px-4 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 will-change-transform ui-btn'>
                <span>About me!</span>
              </button>
            </Link>
            <Link href='#Contact'>
              <button className='w-full sm:w-auto text-xs sm:text-sm px-4 py-2 bg-transparent border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 will-change-transform ui-btn'>
                <span>Hire me!</span>
              </button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-4"
            variants={animationVariants.float}
            animate="animate"
          >
            <Image 
              src="/scroll.png" 
              alt='scroll indicator' 
              className="text-white opacity-70" 
              width={40} 
              height={40}
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          className="relative w-60 h-60 sm:w-76 sm:h-76 lg:w-86 lg:h-86 flex-shrink-0"
          variants={animationVariants.scale}
        >
          <div className="relative w-full h-full">
            <Image
              src="/pixar-profile.png"
              alt="Sritharan Kalimuthu profile"
              fill
              className="object-contain rounded-full border-4 border-white/20 shadow-2xl morphing-shape"
              priority
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 304px, 344px"
              quality={85}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Optimized CSS with GPU acceleration */}
      <style jsx>{`
        .morphing-shape {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: morph 12s ease-in-out infinite;
          will-change: border-radius;
          transform: translateZ(0);
        }

        @keyframes morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 50% 40% 60% 30% / 40% 70% 50% 60%;
          }
          75% {
            border-radius: 70% 30% 40% 60% / 30% 50% 70% 40%;
          }
        }

        /* Force hardware acceleration for smooth animations */
        .will-change-transform {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;