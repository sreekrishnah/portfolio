import {animate, motion ,useScroll , useTransform} from 'framer-motion';
import './about.css';
import School from './Academics';
import CircularProgressBar from './progressbar/Progessbar';

function About() {

  const linevariant = {
    initial:{
      opacity:0,
    },
    animate:{
      opacity:1,
      transition:{
        duration:3,
        delay:1,
      }
    }
  }

  // const ref = useRef();

  // const {scrollYProgress} = useScroll({
  //   target:ref,
  //   offset:["start start","end start"]
  // })

  // const lineheight = useTransform(scrollYProgress,[0,1],['0%','100%'])

    return (
      <section id="About">
        <img className="clouds" src="/clouds.svg" alt=""/>
        <img src='/mountain.png' alt='' className='mountain'/>
        <div className="about-container">
          <div className="academic-container">
            <School/>
            <motion.div className="vl" 
            variants={linevariant} initial='initial' whileInView='animate'></motion.div>
          </div>
          <div className="skill-container">

             <CircularProgressBar
            percentage={90}
            pathColor='F0DB4F'
            textSize={20}
            header='JavaScript'/>

            <CircularProgressBar
            percentage={85}
            pathColor='61DBFB'
            textSize={20}
            header='React JS'/>

            <CircularProgressBar
            percentage={70}
            pathColor='306998'
            textSize={20}
            header='python3'/>
            
            <CircularProgressBar
            percentage={60}
            pathColor='484C89'
            textSize={20}
            header='php & c '/>


            <CircularProgressBar
            percentage={50}
            pathColor='FB6542'
            textSize={20}
            header='MERN Stack'/>

          </div>
        </div>
      </section>
    )
  }

  
  
  export default About
  