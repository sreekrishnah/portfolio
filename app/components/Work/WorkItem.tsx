'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Variants, motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Work } from '@/app/types/WorkDataTypes';

interface WorkItemProps extends Work {}

const WorkItem: React.FC<WorkItemProps> = ({
  img,
  name,
  techstack,
  description,
  button,
  viewlink,
  codelink
}) => {
  const containerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: -50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { 
        duration: 0.7,
        delay: 0.2,
        ease: 'easeOut'
      }
    }
  };

  const textVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.7,
        delay: 0.4,
        ease: 'easeOut'
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.6
      }
    }
  };

  return (
    <motion.section 
      className="min-h-screen w-full overflow-x-hidden flex items-center justify-center px-4 sm:px-8  relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >

      <div className="container mx-auto max-w-4xl mt-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            className="relative group mt-0 md:mt-20"
            variants={imageVariants}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-1 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={img}
                  alt={name}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={false}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
            {/* Floating tech stack badges */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              {techstack.split(',')[0]}
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-6 mt-0 md:mt-15"
            variants={textVariants}
          >
            <div>
              <motion.h2 
                className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {name}
              </motion.h2>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {techstack.split(',').map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center justify-center gap-1 px-3 py-1 bg-white/10 text-purple-200 rounded-full text-[11px] font-medium backdrop-blur-sm border border-white/20"
                  >
                    <img src={`https://skillicons.dev/icons?i=${(tech.trim()).toLowerCase()}`} alt="icons" className='w-4 h-4'/>
                    <span>{tech.trim()}</span>
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.p 
              className="text-gray-300 text-xs sm:text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={buttonVariants}
            >
              {button && viewlink && (
                <Link href={viewlink} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="text-xs group flex items-center justify-center gap-2 w-full sm:w-auto text-xs sm:text-sm px-4 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 ui-btn"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{button}</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </Link>
              )}
              
              <Link href={codelink} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="text-xs group flex items-center justify-center gap-2 w-full sm:w-auto text-xs sm:text-sm px-4 py-2 bg-transparent border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 ui-btn"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-3 h-3" />
                  <span>View Code</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkItem;