'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Variants, motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Award, Star } from 'lucide-react';
import { SkillExperience } from '@/app/types/SkillDataType';
import { skillsData } from '@/app/data/SkillData';

const SkillCard: React.FC<{
  skill: SkillExperience;
  isCenter: boolean;
  position: number;
  totalVisible: number;
  cardIndex: number;
}> = ({ skill, isCenter, position, totalVisible }) => {
  const getCardStyle = () => {
    const centerIndex = Math.floor(totalVisible / 2);
    const distance = Math.abs(position - centerIndex);

    if (totalVisible === 1) {
      return { opacity: 1, scale: 1, blur: 0, zIndex: 10 };
    }

    if (isCenter) {
      return { opacity: 1, scale: 1, blur: 0, zIndex: 20 };
    }

    return {
      opacity: Math.max(0.5, 1 - (distance * 3.5)),
      scale: Math.max(0.85, 1 - (distance * 0.08)),
      blur: distance * 2.5,
      zIndex: 20 - distance
    };
  };

  const cardStyle = getCardStyle();

  return (
    <motion.div
      className="relative cursor-pointer select-none m-2 sm:m-0"
      style={{ zIndex: cardStyle.zIndex }}
      animate={{
        opacity: cardStyle.opacity,
        scale: cardStyle.scale,
        filter: `blur(${cardStyle.blur}px)`,
      }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
      }}
      whileHover={isCenter ? {
        scale: 1.03,
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      } : {}}
      layout
    >
      <div className={`
        relative overflow-hidden rounded-3xl p-6 flex flex-col
        bg-gradient-to-br from-white/25 via-purple-50/40 to-blue-50/35
        backdrop-blur-xl border border-white/40 shadow-2xl
        transition-all duration-300 ease-out
        ${isCenter ? 'ring-2 ring-purple-400/60 shadow-purple-500/25' : 'shadow-black/10'}
        ${totalVisible === 1 ? 'h-[420px] max-w-xs' : 'h-[380px] w-[340px]'}
      `}>
        {/* Status Badge */}
        <div className="absolute bottom-1 right-4 z-10">
          <motion.div
            className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg ${
              skill.status === 'completed'
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Award className="w-4 h-4" />
            {skill.status === 'completed' ? 'Completed' : 'In Progress'}
          </motion.div>
        </div>

        {/* Header Section */}
        <div className="flex items-start gap-6 mb-6">
          <motion.div
            className="relative shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative w-12 h-12 md:w-15 md:h-15 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-purple-100 to-blue-100 p-3">
              <img
                src={skill.thumbnail}
                alt={skill.title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/60x60?text=${skill.title.charAt(0)}`;
                }}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          <div className="flex-1 min-w-0">
            <h3 className="text-md md:text-lg font-bold text-gray-900 mb-2 leading-tight">
              {skill.title}
            </h3>
            <p className="text-xs sm:text-sm text-violet-800 font-semibold mb-3 flex items-center gap-2">
              <Star className="w-4 h-4 text-violet-800" />
              {skill.organization}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-700 bg-gray-100/50 rounded-lg px-3 py-2">
              <Calendar className="w-3 h-3 text-blue-500" />
              <span className="text-xs font-medium">{skill.date}</span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="flex-1 overflow-hidden mb-6">
          <div className="bg-gradient-to-br from-indigo-50/30 to-purple-50/30 rounded-2xl p-3 h-full border border-indigo-100/50">
            <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              Description
            </h4>
            <div 
              className="text-xs sm:text-sm text-gray-800 leading-relaxed overflow-y-auto max-h-32 pr-2" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <p className="pb-2">
                {skill.description}
              </p>
            </div>
          </div>
        </div>


        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full"
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </div>

        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/1 pointer-events-none rounded-3xl" />
      </div>
    </motion.div>
  );
};

const Skill: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg'>('lg');
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const getCarouselConfig = useCallback(() => {
    switch (screenSize) {
      case 'sm':
        return { visibleCards: 1, centerIndex: 0 };
      case 'md':
        return { visibleCards: 2, centerIndex: 0 };
      case 'lg':
      default:
        return { visibleCards: 3, centerIndex: 1 };
    }
  }, [screenSize]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setScreenSize('sm');
      else if (width < 1280) setScreenSize('md');
      else setScreenSize('lg');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isAnimating) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % skillsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isAnimating]);

  const { visibleCards, centerIndex } = getCarouselConfig();

  const getVisibleCards = () => {
    const cards = [];
    const startIndex = currentIndex - centerIndex;

    for (let i = 0; i < visibleCards; i++) {
      const index = (startIndex + i + skillsData.length) % skillsData.length;
      cards.push({
        ...skillsData[index],
        isCenter: i === centerIndex,
        position: i,
        cardIndex: index
      });
    }

    return cards;
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev + 1) % skillsData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev - 1 + skillsData.length) % skillsData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // const goToSlide = (index: number) => {
  //   if (isAnimating || index === currentIndex) return;
  //   setIsAnimating(true);
  //   setCurrentIndex(index);
  //   setTimeout(() => setIsAnimating(false), 500);
  // };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="Skill" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#16072d] via-indigo-900 to-purple-900 pt-2 sm:pt-12">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
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
        <div className="absolute -bottom-7 h-screen w-screen">
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

      <div className="absolute inset-0 backdrop-blur-xs z-10" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1 text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-2xl sm:text-2xl lg:text-4xl font-bold mb-2 pt-14 sm:pt-0 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 bg-clip-text text-transparent"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              >
                Skills & Experience
              </motion.h1>
              <motion.blockquote
                className="text-gray-50/90 text-xs md:text-sm font-medium italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                &quot;The best thing about a boolean is even if you are wrong, you are only off by a bit.&quot;
              </motion.blockquote>
            </motion.div>
          </div>
        </div>

        {/* Progress Bar */}
        {/* <div className="w-full max-w-md mx-auto mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full"
            animate={{ width: `${((currentIndex + 1) / skillsData.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div> */}

        {/* Dots Navigation */}
        {/* <div className="flex justify-center gap-3 mt-4">
          {skillsData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-2 h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                index === currentIndex
                  ? 'bg-purple-400 shadow-lg shadow-purple-400/50'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: index === currentIndex ? 1.3 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          ))}
        </div> */}

        {/* Main Carousel */}
        <div className="relative max-w-7xl mx-auto pt-6">
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            ref={carouselRef}
          >
            {/* Navigation Buttons */}
            <motion.button
              onClick={prevSlide}
              disabled={isAnimating}
              className="absolute -bottom-1/5 left-4 sm:top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ChevronLeft className="w-7 h-7" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              disabled={isAnimating}
              className="absolute -bottom-1/5 right-4 sm:top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ChevronRight className="w-7 h-7" />
            </motion.button>

            {/* CAROUSEL CONTAINER */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex justify-center items-center gap-6 px-20 mt-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              >
                {getVisibleCards().map((card) => (
                  <motion.div
                    key={`${card.cardIndex}-${currentIndex}`}
                    className="flex-shrink-0"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.23, 1, 0.32, 1],
                      delay: card.position * 0.1
                    }}
                    layout
                  >
                    <SkillCard
                      skill={card}
                      isCenter={card.isCenter}
                      position={card.position}
                      totalVisible={visibleCards}
                      cardIndex={card.cardIndex}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;