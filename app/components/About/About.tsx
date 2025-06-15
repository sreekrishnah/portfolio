"use client"
import Image from 'next/image';
import React, { useState, useCallback, useMemo } from 'react';
import { Variants, motion, AnimatePresence } from 'framer-motion';
import { techStack, technologies, roles, personalInfo, TechStack, Technology, Role } from '../../data/AboutData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const slideInLeftVariants: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.8
    }
  }
};

const slideInRightVariants: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.8
    }
  }
};

const cardHoverVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const TechIcon: React.FC<{ tech: Technology; index: number }> = React.memo(({ tech, index }) => {
    const getIconUrl = (iconName: string) => {
        const iconMap: { [key: string]: string } = {
          javascript: 'js',
          typescript: 'ts',
          react: 'react',
          nextjs: 'nextjs',
          nodejs: 'nodejs',
          express: 'express',
          mongodb: 'mongodb',
          mysql: 'mysql',
          python: 'python',
          c: 'c',
          php: 'php',
          html5: 'html',
          css3: 'css',
          tailwindcss: 'tailwind',
          bootstrap: 'bootstrap',
          redux: 'redux',
          git: 'git',
          github: 'github',
          vscode: 'vscode',
          aws: 'aws',
          linux: 'linux',
          windows: 'windows'
        };
        return `https://skillicons.dev/icons?i=${iconMap[iconName] || iconName}`;
      };

  return (
    <motion.div
      className="flex flex-col items-center justify-center transition-all duration-300 cursor-pointer group min-w-[80px]"
      initial={{ opacity: 0, scale: 0, rotateY: -180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={getIconUrl(tech.icon)}
        alt={tech.name}
        className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300 filter brightness-100 group-hover:brightness-110"
        loading="lazy"
      />
      <span className="text-xs text-white/80 mt-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tech.name}
      </span>
    </motion.div>
  );
});

TechIcon.displayName = 'TechIcon';

const TechMarquee: React.FC = React.memo(() => {
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="overflow-hidden w-full py-2">
      <motion.div
        className="flex gap-3 sm:gap-1"
        animate={{
          x: [`0%`, `-${100 * (technologies.length / duplicatedTechs.length)}%`]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{ width: `${duplicatedTechs.length * 100}px` }}
      >
        {duplicatedTechs.map((tech, index) => (
          <TechIcon
            key={`${tech.name}-${Math.floor(index / technologies.length)}-${index % technologies.length}`}
            tech={tech}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
});

TechMarquee.displayName = 'TechMarquee';

const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("javascript");

  const handleSetActiveSection = useCallback((section: string) => {
    setActiveSection(section);
  }, []);

  const currentDescription = useMemo(() => techStack[activeSection], [activeSection]);

  return (
    <section
      id="About"
      className="relative min-h-screen w-full bg-gradient-to-b from-[#16072d] via-indigo-900 to-purple-900"
    >
      {/* Background Images */}
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
        {/* Forest */}
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

      {/* Backdrop blur */}
      <div className="absolute inset-0 backdrop-blur-xs z-10" />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-0 pt-8 md:pt-18 xl:pt-26">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
        >
          {/* Left Column - What I Do */}
          <motion.div
            className="space-y-4 flex flex-col justify-center"
            variants={slideInLeftVariants}
          >
            {/* Title Section */}
            <motion.div className="text-left" variants={itemVariants}>
              <motion.h1
                className="text-2xl sm:text-2xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 bg-clip-text text-transparent"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              >
                What I Do..?
              </motion.h1>
              <motion.ul
                className="flex justify-start space-x-8 mb-2"
                variants={itemVariants}
              >
                {['Discover', 'Design', 'Develop'].map((item, index) => (
                  <motion.li
                    key={item}
                    className="text-sm sm:text-md font-semibold text-orange-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Description */}
            <motion.div
              className="text-shadow-2xl"
              initial="rest"
              whileHover="hover"
            >
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6">
                {personalInfo.description}
              </p>
              <motion.h4
                className="text-[#d956ff] text-xs sm:text-sm font-semibold italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                &quot;{personalInfo.quote}&quot;
              </motion.h4>
            </motion.div>

            {/* Roles Section */}
            <motion.div
                className="relative mt-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                >
                <div className="flex flex-col md:flex-row justify-center items-start gap-4 lg:gap-6 px-0 md:px-4">
                    {roles.map((role, index) => (
                    <motion.div
                        key={role.id}
                        className="cursor-pointer sticky top-15"
                        variants={itemVariants}
                        custom={index}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div 
                        className={`w-full h-full 
                            sm:w-36 sm:h-36 lg:w-48 lg:h-48 
                        `}
                        >
                        <div
                          className={`
                            w-full h-full 
                            bg-gradient-to-br from-purple-600/30 to-indigo-600/30 
                            backdrop-blur-sm 
                            border-4 border-white/20 
                            transition-all duration-500 
                            group-hover:border-white/40 
                            sm:rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]
                            sm:${index === 1 ? 'rounded-[56%_44%_20%_80%_/_84%_60%_40%_16%]' : ''}
                            sm:${index === 2 ? 'rounded-[91%_9%_20%_80%_/_65%_66%_34%_35%]' : ''}
                            rounded-none
                            `}
                        >
                        <img
                          src={`/${role.image}`}
                          alt={role.title}
                          className={`
                            w-full h-full object-cover transition-all duration-500 group-hover:opacity-60
                            rounded-none 
                            sm:rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]
                            ${index === 1 ? 'sm:rounded-[56%_44%_20%_80%_/_84%_60%_40%_16%]' : ''}
                            ${index === 2 ? 'sm:rounded-[91%_9%_20%_80%_/_65%_66%_34%_35%]' : ''}
                          `}
                          loading="lazy"
                        />

                          <motion.div
                            className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            >
                            <h3 className="text-xs sm:text-sm font-bold text-white mb-2 drop-shadow-lg">
                                {role.title}
                            </h3>
                            <p className="text-xs text-white/90 drop-shadow-lg leading-relaxed">
                                {role.description}
                            </p>
                            </motion.div>
                        </div>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Stack */}
          <motion.div
            className="space-y-8 flex flex-col justify-center"
            variants={slideInRightVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl lg:text-4xl font-bold text-center xl:text-left bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                <span>
                  My Stack
                </span>
              </h2>
              <p className="text-orange-400 text-xs md:text-md font-semibold text-center xl:text-left">
                Tech Arsenal
              </p>
            </motion.div>

            {/* Tech Stack Container */}
            <motion.div
              className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 backdrop-blur-md rounded-2xl p-2 sm:p-3 border border-white/10 shadow-2xl"
              initial="rest"
              whileHover="hover"
            >
              {/* Tech Stack Buttons */}
              <div className="flex flex-wrap justify-around gap-2 mb-3">
                {Object.keys(techStack).map((section, index) => (
                  <motion.button
                    key={section}
                    className={`text-[8px] md:text-xs flex flex-row gap-0.5 md:gap-1 items-center px-2 md:px-3 py-2 pb-2 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === section
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                    onClick={() => handleSetActiveSection(section)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {section === 'MERN' ? (
                      <img
                        src={`/${section}.png`}
                        alt='icons'
                        className='w-7 md:w-10 h-3.5 md:h-5'
                      />
                    ) : (
                      <img
                        src={`https://skillicons.dev/icons?i=${section}`}
                        alt={section}
                        className='w-3.5 md:w-5 h-3.5 md:w-5'
                      />
                    )}
                    {section === 'MERN' ? 'MERN' : section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                ))}
              </div>

              {/* Tech Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 shadow-inner"
                >
                  <p className="text-white/90 leading-relaxed text-[11px] sm:text-sm">
                    {currentDescription}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 gap-4 py-4"
                variants={itemVariants}
              >
                {[
                  { label: 'Experience', value: personalInfo.experience },
                  { label: 'Projects', value: personalInfo.projects },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-2 rounded-xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-white/20 shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-xs sm:text-md font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-purple-200">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tech Marquee */}
              <TechMarquee />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;