import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import './hero.css';

function Hero() {
  // Framer Motion variants for animations
  const boxVariant = {
    initial:{
      y: -100,
      opacity: 0,
    },
    animate:{
      y: 0,
      opacity: 1,
      transition:{
        duration: 0.5,
      }
    }
  };

  const opacityVariant = {
    initial:{
      opacity: 0,
    },
    animate:{
      opacity: 1,
      transition:{
        duration: 0.9,
        delay: 0.5,
      }
    }
  };

    // const slider_variant = {
  //   initial:{
  //     x:1500,
  //   },
  //   animate:{
  //     x:-1800,
  //     transition:{
  //         repeat:Infinity,
  //         duration:9,
  //         repeatType:mirrorEasing
  //     }
  //   }
  // };

  return (
    <section id="Home">
      {/* Background images */}
      <img className="clouds" src="/clouds.svg" alt=""/>
      <img className="forest"  src="/forest.png" alt=""/>

      {/* Hero content */}
      <motion.div className="hero-container" variants={boxVariant} initial="initial" whileInView="animate">
        <div className="hero-text-container">
          <h2>Hello, I'm sritharan kalimuthu,</h2>
          <motion.h1 variants={opacityVariant} initial="initial" whileInView="animate">
            And I am  
            <span style={{ color: 'orange' }}>
              <Typewriter
                words={[ 'Software Engineer...','Front-end Developer...', 'Cyber-Addict...']}
                loop={false}
                cursor
                cursorStyle='|'
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>
          <div className="hero-description">
            <b><i><span>Specializing in JavaScript, React, and MERN Stack.</span></i></b>
            <p>From design to implementation, React is my passion and playground. Excel & dedicated to craft and deliver dynamic and engaging web applications with expertise in component architecture and state management.</p>
          </div>

          <div className="social-profiles">
            {/* Social profile links */}
            <a href="mailto:sritharkalimuthu@gmail.com">
              <ion-icon name="mail"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/sritharan-k/">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://github.com/SritharanKalimuthu">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="tel:+919786348620">
              <ion-icon name="call"></ion-icon>
            </a>
          </div>

          <motion.div className="hero-btn" variants={opacityVariant} initial="initial" whileInView="animate">
            {/* Buttons for navigation */}
            <a href='#About' ><button className='know-btn ui-btn'><span>About me!</span></button></a>
            <a href='#Contact'><button className='contact-btn ui-btn'><span>Hire me!</span></button></a>
          </motion.div>

          {/* Scroll button */}
          {/* <motion.img src="/scroll.png" className="scroll-btn" initial={{ opacity: 0 }} animate={{ opacity: 1, y: 10 }} transition={{ delay: 2, duration: 2, repeat: Infinity }} /> */}
        </div>

         {/* <motion.div className="slider-text" 
                  variants={slider_variant}
                  initial='initial'
                  whileInView='animate'>
                     Tech-enthusiast
                  </motion.div> */}
                  
        {/* Image container */}
        <div className="cyber-image-container">
          <img className="tools"  src="/cybercoder.jpeg" alt="" variants={boxVariant} initial="initial" whileInView="animate" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
