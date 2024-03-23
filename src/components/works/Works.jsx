import './works.css'
import { useRef } from 'react';
import {animate, motion ,useScroll, useSpring } from 'framer-motion';

const workList = [
  {
    id:1,
    img:'/weather.png',
    name:'Weather Today',
    desription:`"Designed and developed a global weather application, integrating OpenWeather API for real-time forecasts, offering seamless access to accurate weather worldwide."`,
    date:'Feb 26, 2024',
    button:'check weather',
    viewlink:'https://weather-from-openweather.netlify.app/',
    codelink:'https://github.com/SritharanKalimuthu/React_Learnings'
  },
  {
    id:2,
    img:'/bookstore.jpeg',
    name:'Book Store - CRUD',
    desription:`"Architected a CRUD book store application using MERN stack technology, facilitating seamless addition and removal of books. Empowering users with intuitive controls for efficient book management."`,
    date:'Mar 12, 2024',
    codelink:'https://github.com/SritharanKalimuthu/Bookstore-CRUD'
  },
  {
    id:3,
    img:'/agecalculator.jpg',
    name:'Age Calculator',
    desription:`"Engineered an age calculator application utilizing React, providing efficient age calculation functionality. Seamlessly designed for user-friendly experience and intuitive interaction."`,
    date:'Jan 20, 2024',
    button:'count age',
    viewlink:'https://agecalculator-frontendmentorchallenge.netlify.app/',
    codelink:'https://github.com/SritharanKalimuthu/FrontendMentor/tree/main'
  }
]

const WorkContainer = (workList) =>{

  const workvariant = {
    initial:{
      y:100,
      opacity:0,
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:.6,
      }
    },
  }
  return <section>
        {/* <img className="cloud" src="/clouds.svg" alt=""/> */}
        <img src='/mountains.png' alt='' className='mountains'/>
        <motion.div className="works-container" variants={workvariant} initial='initial' whileInView='animate'>
          <div className="works-image">
            <img src={workList.img} alt=''/>
          </div>
            <div className="works-text-container">
                <h2>{workList.name}</h2>
                <span>{workList.date}</span>
                <p>{workList.desription}</p>
                {workList.button?<a href={workList.viewlink} target='_blank'><button className='link-preview-btn'>{workList.button}</button></a>:null}
                <a href={workList.codelink} target='_blank'><button className="code-btn">View Code</button></a>
            </div>
        </motion.div>
  </section>
}

function Works() {

  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["end end","start start"]
  })

  const scaleX = useSpring(scrollYProgress,
    {
      stiffness:100,
      damping:30,
    })


    return (
      <div id="Works" ref={ref}>
        <div className='progress'>
          <h1>Featured Works</h1>
          <motion.div style={{scaleX:scaleX}} className='progress-line-bar'></motion.div>
        </div>
        {workList.map((workList)=>{
            return <WorkContainer {...workList} key={workList.id}/>
        })}
      </div>
    )
  }
  
  export default Works
  