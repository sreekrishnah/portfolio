import {motion} from "framer-motion";
import './hero.css';

function Hero() {
  return (
    <section id="Home">
      <img className="clouds" src="/clouds.svg" alt=""/>
      <img className="forest"  src="/forest.png" alt=""/>
      <motion.img className="tools"  src="/tools.png" alt="" initial={{x:200,opacity:0}} transition={{duration:.9}} animate={{x:0,opacity:1}}/>
      <motion.h2 initial={{y:-100,opacity:0}} transition={{duration:.9}} animate={{y:0,opacity:1}}>sritharan kalimuthu</motion.h2>
      <motion.h1 initial={{x:-200,opacity:0}} transition={{duration:.9}} animate={{x:0,opacity:1}}>Web developer and web designer...</motion.h1>
      <motion.div className="social-profiles" initial={{y:100,opacity:0}} transition={{duration:.9}} animate={{y:0,opacity:1}}>
        <a href="mailto:sritharkalimuthu@gmail.com"><ion-icon name="mail"></ion-icon></a>
        <a href="https://www.linkedin.com/in/sritharan-k/"><ion-icon name="logo-linkedin"></ion-icon></a>
        <a href="https://github.com/SritharanKalimuthu"><ion-icon name="logo-github"></ion-icon></a>
        <a href="tel:+919786348620"><ion-icon name="call"></ion-icon></a>
      </motion.div>
    </section>
  )
}

export default Hero
