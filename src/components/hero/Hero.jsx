import {mirrorEasing, motion} from "framer-motion";
import './hero.css';

function Hero() {

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
      <motion.img className="tools"  src="/tools.png" alt="" 
      initial={{x:200,opacity:0}} 
      transition={{duration:.9}} 
      animate={{x:0,opacity:1}}/>
      <motion.h2 
      initial={{y:-100,opacity:0}} 
      transition={{duration:.9}} 
      animate={{y:0,opacity:1}}>I'm , sritharan kalimuthu</motion.h2>
      <motion.h1 
      initial={{x:-200,opacity:0}} 
      transition={{duration:.9}} 
      animate={{x:0,opacity:1}}>Web developer and web designer...</motion.h1>
      <motion.div className="social-profiles" 
      initial={{y:100,opacity:0}} 
      transition={{duration:.9}} 
      animate={{y:0,opacity:1}}>
        <a href="mailto:sritharkalimuthu@gmail.com"><ion-icon name="mail"></ion-icon></a>
        <a href="https://www.linkedin.com/in/sritharan-k/"><ion-icon name="logo-linkedin"></ion-icon></a>
        <a href="https://github.com/SritharanKalimuthu"><ion-icon name="logo-github"></ion-icon></a>
        <a href="tel:+919786348620"><ion-icon name="call"></ion-icon></a>
      </motion.div>
      <a href='#About'><motion.button className='know-btn' 
      initial={{opacity:0}} 
      transition={{duration:1,delay:.8}} 
      animate={{opacity:1}}>Know me!</motion.button></a>
      <a href='#Contact'><motion.button className='contact-btn' 
      initial={{opacity:0}} 
      transition={{duration:1,delay:.8}} 
      animate={{opacity:1}}>Hire me!</motion.button></a>
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
    </section>
  )
}

export default Hero
