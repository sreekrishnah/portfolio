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
    link:'https://weather-from-openweather.netlify.app/',
  },
  {
    id:2,
    img:'/bookstore.jpeg',
    name:'Book Store - CRUD',
    desription:`"Architected a CRUD book store application using MERN stack technology, facilitating seamless addition and removal of books. Empowering users with intuitive controls for efficient book management."`,
    date:'Mar 12, 2024',
  },
  {
    id:3,
    img:'/agecalculator.jpg',
    name:'Age Calculator',
    desription:`"Engineered an age calculator application utilizing React, providing efficient age calculation functionality. Seamlessly designed for user-friendly experience and intuitive interaction."`,
    date:'Jan 20, 2024',
    button:'count age',
    link:'https://agecalculator-frontendmentorchallenge.netlify.app/',
  }
]

const WorkContainer = (workList) =>{
  return <section>
        <img className="cloud" src="/clouds.svg" alt=""/>
        <img src='/mountains.png' alt='' className='mountains'/>
        <div className="works-container">
          <div className="works-image">
            <img src={workList.img} alt=''/>
          </div>
          <div className="works-text-container">
              <h2>{workList.name}</h2>
              <span>{workList.date}</span>
              <p>{workList.desription}</p>
              {workList.button?<button className='link-preview-btn'><a href={workList.link} target='_blank'>{workList.button}</a></button>:null}
          </div>
        </div>
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
  