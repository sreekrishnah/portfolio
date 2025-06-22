'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Variants, motion, useScroll, useSpring } from 'framer-motion';
import WorkItem from './WorkItem';
import { workList } from '@/app/data/WorkData';

const Works: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const progressBarVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scaleX: 0 
    },
    visible: { 
      opacity: 1, 
      scaleX: 1,
      transition: { 
        duration: 1,
        delay: 0.5,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div 
      id="Works" 
      ref={containerRef}
      className="relative min-h-screen"
    >
      
      {/* Sticky Header */}
      <div className="relative lg:sticky md:top-15 z-11 pt-20 md:pt-0">
        <div className="container mx-auto px-4 py-4 md">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
              Featured Works
            </h1>
            <p className="text-gray-300 text-[11px] sm:text-base max-w-2xl mx-auto">
              Explore my latest projects and creative solutions
            </p>
          </motion.div>
          
          {/* Progress Bar */}
          <motion.div
            className="mt-2 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full origin-left mb-12"
            style={{ scaleX }}
            variants={progressBarVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
      </div>

      {/* Works List */}
      <div className="relative z-10">
        {workList.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <WorkItem {...work} />
          </motion.div>
        ))}
      </div>

   </div>
  );
};

export default Works;