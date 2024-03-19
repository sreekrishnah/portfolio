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
            textColor='FB6542'
            textSize={20}
            header='Frontend Development'/>

            <CircularProgressBar
             name='left' 
            percentage={65}
            pathColor='B08401'
            textColor='B08401'
            textSize={20}
            header='Cloud Services - (AWS)'/>

            <hr></hr>

             <CircularProgressBar
             name='left' 
            percentage={90}
            pathColor='FFBB00'
            textColor='FFBB00'
            textSize={20}
            header='JavaScript ...'/>
             <CircularProgressBar
             name='left' 
            percentage={70}
            pathColor='408EC6'
            textColor='408EC6'
            textSize={20}
            header='python ...'/>
            <CircularProgressBar
             name='left' 
            percentage={60}
            pathColor='6AB187'
            textColor='6AB187'
            textSize={20}
            header='php & c ...'/>
          </div>
        </div>
      </section>
    )
  }

  
  
  export default About
  