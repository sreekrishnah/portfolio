import {mirrorEasing, motion} from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'
import './hero.css';

function Hero() {

  // framer-motion variants for animation ...

  const boxvariant = {
    initial:{
      y:-100,
      opacity:0,
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:.5,
      }
    }
  }

  const opacityvariant = {
    initial:{
      opacity:0,
    },
    animate:{
      opacity:1,
      transition:{
        duration:.9,
        delay:.5,
      }
    }
  }


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
  // }

  // end of variants..


  return (
    <section id="Home">

      <img className="clouds" src="/clouds.svg" alt=""/>
      <img className="forest"  src="/forest.png" alt=""/>

      <motion.div className="hero-container"
      variants={boxvariant}
      initial='initial'
      whileInView='animate'>

            <div className="hero-text-container">

                  <h2>Hello, I'm sritharan kalimuthu,</h2>

                  <motion.h1
                  variants={opacityvariant}
                  initial='initial'
                  whileInView='animate'>And I am  
                    <span style={{ color: 'orange', }}>
                        <Typewriter
                        words={['Front-end Developer...','Web Designer...','Cyber-Addict...']}
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
                      <b><i><span>Specializing in JavaScript, React, and MERN Stack.</span></i></b><p>From design to implementation, React is my passion and playground. Excel & dedicated to craft and deliver dynamic and engaging web applications with expertise in component architecture and state management.</p>
                  </div>

                  <div className="social-profiles">
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

                  <motion.div className="hero-btn"
                    variants={opacityvariant}
                    initial='initial'
                    whileInView='animate'>
                      <a href='#About'>
                        <button className='know-btn ui-btn'>
                            <span>Know me!</span>
                        </button>
                      </a>
                      <a href='#Contact'>
                        <button className=' contact-btn ui-btn'>
                          <span>Hire me!</span>
                        </button>
                      </a>
                  </motion.div>

                  <motion.img src="/scroll.png" className="scroll-btn" 
                      initial={{opacity:0}} 
                      animate={{opacity:1,y:10}} 
                      transition={{delay:2,duration:2,repeat:Infinity}}>
                  </motion.img>

                  {/* <motion.div className="slider-text" 
                  variants={slider_variant}
                  initial='initial'
                  whileInView='animate'>
                     Tech-enthusiast
                  </motion.div> */}

              </div>
            <div className="cyber-image-container">
              <motion.img className="tools"  src="/cybercoder.jpeg" alt="" 
                variants={boxvariant}
                initial='initial'
                whileInView='animate'/>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero
