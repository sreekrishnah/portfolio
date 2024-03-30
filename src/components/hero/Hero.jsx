import {mirrorEasing, motion} from "framer-motion";
import './hero.css';

function Hero() {

  const boxvariant = {
    initial:{
      x:200,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:.9,
      }
    }
  }

  const textvariant1 = {
    initial:{
      x:-200,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:.9,
      }
    }
  }

  const textvariant2 = {
    initial:{
      y:-100,
      opacity:0,
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:.9,
      }
    }
  }

  const textvariant3 = {
    initial:{
      y:100,
      opacity:0,
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:.9,
      }
    }
  }


  const buttonvariant = {
    initial:{
      opacity:0,
    },
    animate:{
      opacity:1,
      transition:{
        duration:.9,
        delay:.8,
      }
    }
  }

  const slider_variant = {
    initial:{
      x:1500,
    },
    animate:{
      x:-1800,
      transition:{
          repeat:Infinity,
          duration:9,
          repeatType:mirrorEasing
      }
    }
  }
  return (
    <section id="Home">
      <img className="clouds" src="/clouds.svg" alt=""/>
      <img className="forest"  src="/forest.png" alt=""/>
      <div className="hero-container">
            <div className="hero-text-container">
                  <motion.h2 
                  variants={textvariant2}
                  initial='initial'
                  whileInView='animate'>Hello, I'm sritharan kalimuthu,</motion.h2>
                  <motion.h1 
                  variants={textvariant1}
                  initial='initial'
                  whileInView='animate'>Front-end developer and web designer...</motion.h1>
                  <motion.div
                  className="hero-description" 
                  variants={textvariant3}
                  initial='initial'
                  whileInView='animate'>
                    <b><i><span>Specializing in JavaScript, React, and MERN Stack.</span></i></b><p>Excel at crafting dynamic and engaging web applications with expertise in component architecture and state management, I am dedicated to delivering seamless experiences. From design to implementation, React is my passion and playground.</p>
                  </motion.div>
                  <motion.div className="social-profiles" 
                  variants={textvariant3}
                  initial='initial'
                  whileInView='animate'>
                    <a href="mailto:sritharkalimuthu@gmail.com"><ion-icon name="mail"></ion-icon></a>
                    <a href="https://www.linkedin.com/in/sritharan-k/"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a href="https://github.com/SritharanKalimuthu"><ion-icon name="logo-github"></ion-icon></a>
                    <a href="tel:+919786348620"><ion-icon name="call"></ion-icon></a>
                      </motion.div>
                    <div className="hero-btn">
                      <a href='#About'><motion.button className='know-btn' 
                      variants={buttonvariant}
                      initial='initial'
                      whileInView='animate'>Know me!</motion.button></a>
                      <a href='#Contact'><motion.button className='contact-btn' 
                      variants={buttonvariant}
                      initial='initial'
                      whileInView='animate'>Hire me!</motion.button></a>
                  </div>
                  <motion.img src="/scroll.png" className="scroll-btn" 
                  initial={{opacity:0}} 
                  animate={{opacity:1,y:10}} 
                  transition={{delay:2,duration:2,repeat:Infinity}}></motion.img>
                  <motion.div className="slider-text" 
                  variants={slider_variant}
                  initial='initial'
                  animate='animate'>
                  Tech-enthusiast
                  </motion.div>
              </div>
            <div className="tool-image-container">
              <motion.img className="tools"  src="/tools.png" alt="" 
              variants={boxvariant}
              initial='initial'
              whileInView='animate'/>
            </div>
        </div>
    </section>
  )
}

export default Hero
