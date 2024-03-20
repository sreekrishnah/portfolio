import {motion ,useScroll , useTransform} from 'framer-motion';
import './about.css';
import School from './Academics';
import CircularProgressBar from './progressbar/Progessbar';
import { useRef } from 'react';
import { Progress } from 'flowbite-react';

function About() {

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
            initial={{height:0}}
            transition={{duration:4}}
            animate={{height:"100vh"}}></motion.div>
          </div>
          <div className="skill-container">
            <CircularProgressBar
            name='main' 
            percentage={80}
            pathColor='FB6542'
            textSize={20}
            header='Frontend Development'/>

            <CircularProgressBar
             name='left' 
            percentage={85}
            pathColor='61DBFB'
            textSize={20}
            header='React JS'/>

             <CircularProgressBar
             name='left' 
            percentage={90}
            pathColor='F0DB4F'
            textSize={20}
            header='JavaScript'/>
             <CircularProgressBar
             name='left' 
            percentage={70}
            pathColor='306998'
            textSize={20}
            header='python3'/>
            <CircularProgressBar
             name='left' 
            percentage={60}
            pathColor='484C89'
            textSize={20}
            header='php & c '/>
          </div>
        </div>
      </section>
    )
  }

  
  
  export default About
  