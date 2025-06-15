'use client';

import { motion, Variants, easeOut } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Linkedin, Github, Phone, ChevronDown } from 'lucide-react';
import TypeWriter from '../TypeWriter/TypeWriter';

const Hero: React.FC = () => {
  // Animation variants
  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const slideUpVariant: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const slideDownVariant: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const scaleVariant: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const bounceVariant: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: 2
      }
    }
  };

  return (
    <section 
      id="Home" 
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Clouds */}
        <div className="absolute top-0 w-full h-80 md:h-32 opacity-80">
          <Image
            src="/clouds.svg"
            alt="Clouds"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Forest - Hidden on mobile */}
        <div className=" absolute -bottom-7 w-full h-full">
          <Image
            src="/forest.png"
            alt="Forest"
            fill
            className="object-cover object-bottom"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Backdrop blur overlay */}
      <div className="absolute inset-0 backdrop-blur-xs z-10" />

      {/* Main Content */}
      <motion.div 
        className="relative z-20 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-evenly px-4 sm:px-6 lg:px-8 pt-6 sm:pt-16 pb-8 mt-6 sm:mt-0"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <motion.div 
          className="w-full max-w-2xl flex flex-col items-start space-y-4 lg:space-y-6 text-center lg:text-left mt-8 lg:mt-0"
          variants={slideUpVariant}
        >
          {/* Greeting */}
          <motion.h2 
            className="text-sm sm:text-lg lg:text-xl font-bold text-gray-300 uppercase tracking-wide font-sans"
            variants={slideDownVariant}
            style={{ textShadow: '3px 3px 10px rgba(21, 21, 22, 0.8)' }}
          >
            Hello, I'm Sritharan Kalimuthu,
          </motion.h2>

          {/* Main Title with Typewriter */}
          <motion.h1 
            className="text-base sm:text-xl lg:text-2xl xl:text-4xl font-bold text-white text-start uppercase leading-tight"
            variants={slideUpVariant}
            style={{ textShadow: '3px 3px 10px rgba(16, 16, 17, 0.8)' }}
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
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div 
            className="text-start space-y-3 lg:space-y-4 text-white max-w-xl"
            variants={slideUpVariant}
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
            variants={slideUpVariant}
          >
            <Link 
              href="mailto:sritharkalimuthu@gmail.com"
              className="text-white hover:text-red-500 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-3 h-3 sm:w-5 sm:h-5" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/sritharan-k/"
              className="text-white hover:text-blue-500 transition-colors duration-200"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-3 h-3 sm:w-5 sm:h-5" />
            </Link>
            <Link 
              href="https://github.com/sreekrishnah"
              className="text-white hover:text-gray-400 transition-colors duration-200"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-3 h-3 sm:w-5 sm:h-5" />
            </Link>
            <Link 
              href="tel:+919786348620"
              className="text-white hover:text-green-500 transition-colors duration-200"
              aria-label="Phone"
            >
              <Phone className="w-3 h-3 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-row sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
            variants={slideUpVariant}
          >
            <Link href='#About' ><button className='w-full sm:w-auto text-xs sm:text-sm px-4 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 ui-btn'><span>About me!</span></button></Link>
            <Link href='#Contact'><button className='w-full sm:w-auto text-xs sm:text-sm px-4 py-2 bg-transparent border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 ui-btn'><span>Hire me!</span></button></Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-4"
            variants={bounceVariant}
            animate="animate"
          >
            {/* <ChevronDown className="w-8 h-8 text-white opacity-70" /> */}
            <img src="/scroll.png" alt='scroll indicator' className="w-8 h-8 text-white opacity-70" />
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          className="relative w-60 h-60 sm:w-76 sm:h-76 lg:w-86 lg:h-86 flex-shrink-0"
          variants={scaleVariant}
        >
          <div className="relative w-full h-full">
            <Image
              src="/pixar-profile.png"
              alt="pixar-profile image"
              fill
              className="object-contain rounded-full border-4 border-white/20 shadow-2xl animate-pulse"
              style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                animation: 'morph 8s ease-in-out infinite'
              }}
              priority
              sizes="(max-width: 768px) 180px, (max-width: 1024px) 280px, 324px"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Background Text Slider - Hidden on mobile */}
      {/* <div className="hidden xl:block absolute bottom-[10%] left-0 w-full overflow-hidden z-0">
        <div 
          className="text-white/5 font-black text-[12rem] whitespace-nowrap select-none pointer-events-none"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          DEVELOPER
        </div>
      </div> */}

      {/* Custom CSS for morphing animation */}
      <style jsx>{`
        @keyframes morph {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;