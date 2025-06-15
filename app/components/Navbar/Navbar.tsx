"use client"
import { Variants, motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface NavbarProps {
  brand?: string;
  items?: NavItem[];
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  brand = "KS",
  items = [
    { id: "home", label: "Home", href: "#Home" },
    { id: "about", label: "About", href: "#About" },
    { id: "skill", label: "Skills", href: "#Skill" },
    { id: "works", label: "Works", href: "#Works" },
    { id: "contact", label: "Contact", href: "#Contact" }
  ],
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Extract section ID from href (remove #)
  const getSectionId = (href: string) => href.replace('#', '');

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    
    // Update navbar background based on scroll
    setIsScrolled(scrollPosition > 20);
    
    // Find active section - check all sections
    const sections = items.map(item => {
      const sectionId = getSectionId(item.href);
      const element = document.getElementById(sectionId);
      
      if (!element) return null;
      
      return {
        id: item.id, // Keep the nav item id for matching
        sectionId,
        offsetTop: element.offsetTop,
        offsetHeight: element.offsetHeight
      };
    }).filter(Boolean);

    // If we're at the very top, set home as active
    if (scrollPosition < 100) {
      setActiveSection("home");
      return;
    }

    // Find which section is currently in view
    let currentSection = "home";
    
    for (const section of sections) {
      if (!section) continue;
      
      const top = section.offsetTop - 150; // Offset for navbar height
      const bottom = top + section.offsetHeight;
      
      if (scrollPosition >= top && scrollPosition < bottom) {
        currentSection = section.id;
        break;
      }
    }
    
    // If we're past all sections, set the last one as active
    if (sections.length > 0) {
      const lastSection = sections[sections.length - 1];
      if (lastSection && scrollPosition >= lastSection.offsetTop + lastSection.offsetHeight - 200) {
        currentSection = sections[sections.length - 1]!.id;
      }
    }
    
    setActiveSection(currentSection);
  }, [items]);

  // Throttled scroll event
  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    
    // Initial call after a short delay to ensure DOM is ready
    const timer = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(timer);
    };
  }, [handleScroll]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--scrollbar-width, 0px)";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const toggleSidebar = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback((href: string, itemId: string) => {
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
    
    // Immediately set active section for visual feedback
    setActiveSection(itemId);
    
    // Smooth scroll to section
    const sectionId = getSectionId(href);
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Calculate offset to account for fixed navbar
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  }, [isOpen]);

  // Animation variants
  const navVariants: Variants = useMemo(() => ({
    hidden: { opacity: 0, y: -100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }), []);

  const mobileMenuVariants: Variants = useMemo(() => ({
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }), []);

  const menuItemVariants: Variants = useMemo(() => ({
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }), []);

  const hamburgerVariants: Variants = useMemo(() => ({
    closed: {
      rotate: 0,
      scale: 1
    },
    open: {
      rotate: 180,
      scale: 1.1
    }
  }), []);

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`
          fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3
          transition-all duration-300 ease-out
          ${isScrolled 
            ? 'bg-black/30 backdrop-blur-xl shadow-lg shadow-black/25' 
            : 'bg-violet-900/30 backdrop-blur-xs'
          }
          ${className}
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10"
          >
            <a
              href="#Home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#Home", "home");
              }}
              className="
                flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12
                bg-gradient-to-br from-orange-400 to-orange-600
                rounded-full text-white font-black text-md sm:text-lg
                shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40
                transition-all duration-300 transform hover:rotate-3
                font-['Timmana',sans-serif] uppercase tracking-wider pt-2
              "
            >
              {brand}
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {items.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.id);
                  }}
                  className={`
                    relative px-4 py-2 rounded-lg font-medium text-sm xl:text-base
                    transition-all duration-300 font-['League_Spartan',sans-serif]
                    ${activeSection === item.id
                      ? 'text-orange-400 bg-orange-500/10'
                      : 'text-white hover:text-orange-300'
                    }
                    before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5
                    before:bg-gradient-to-r before:from-orange-400 before:to-orange-600
                    before:transform before:scale-x-0 before:transition-transform before:duration-300
                    hover:before:scale-x-100
                    ${activeSection === item.id ? 'before:scale-x-100' : ''}
                  `}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            variants={hamburgerVariants}
            animate={isOpen ? "open" : "closed"}
            onClick={toggleSidebar}
            className="lg:hidden relative z-10 p-2 rounded-lg backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
              <motion.path
                strokeWidth="2.5"
                stroke="currentColor"
                strokeLinecap="round"
                fill="none"
                variants={{
                  closed: { d: "M 3 6 L 21 6" },
                  open: { d: "M 18 6 L 6 18" }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                strokeWidth="2.5"
                stroke="currentColor"
                strokeLinecap="round"
                fill="none"
                d="M 3 12 L 21 12"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                strokeWidth="2.5"
                stroke="currentColor"
                strokeLinecap="round"
                fill="none"
                variants={{
                  closed: { d: "M 3 18 L 21 18" },
                  open: { d: "M 6 6 L 18 18" }
                }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="
                fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw]
                bg-gradient-to-br from-gray-900/95 to-black/95
                backdrop-blur-xl border-l border-white/10
                shadow-2xl shadow-black/50 lg:hidden
                overflow-y-auto
              "
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-end p-6 border-b border-white/10">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleSidebar}
                    className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-6 py-8">
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <motion.li
                        key={item.id}
                        custom={index}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.href, item.id);
                          }}
                          className={`
                            block px-4 py-3 rounded-xl text-lg font-medium
                            transition-all duration-300 font-['League_Spartan',sans-serif]
                            ${activeSection === item.id
                              ? 'text-orange-400 bg-orange-500/10 border border-orange-500/20'
                              : 'text-white hover:text-orange-300 hover:bg-white/5'
                            }
                          `}
                        >
                          <div className="flex items-center justify-between">
                            {item.label}
                            {activeSection === item.id && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 bg-orange-400 rounded-full"
                              />
                            )}
                          </div>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-white/10">
                  <div className="text-center text-white/50 text-xs">
                    © 2025. All rights reserved <br /> Just for fun 😅😅
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;