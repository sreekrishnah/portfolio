import './works.css';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion'; 

// Array of work items
const workList = [
  {
    id:1,
    img:'/weather.png',
    name:'Weather Today',
    description:`" Designed and developed a global weather application, integrating OpenWeather API for real-time forecasts, offering seamless access to accurate weather worldwide. "`,
    date:'Feb 26, 2024',
    button:'Get weather',
    viewlink:'https://weather-from-openweather.netlify.app/',
    codelink:'https://github.com/SritharanKalimuthu/React_Learnings'
  },
  {
    id:2,
    img:'/bookstore.jpeg',
    name:'Book Store - CRUD',
    description:`" Architected a CRUD book store application using MERN stack technology, facilitating seamless addition and removal of books. Empowering users with intuitive controls for efficient book management. "`,
    date:'Mar 12, 2024',
    codelink:'https://github.com/SritharanKalimuthu/Bookstore-CRUD'
  },
  {
    id:3,
    img:'/banking.png',
    name:'Internet Banking',
    description:`" This Application is a collaborative project developed as part of the Naan Mudhalvan program, an initiative by the Tamil Nadu government to enhance technical skills among students. The project aimed to create a secure, user-friendly online banking platform. "`,
    date:'Dec 02, 2023',
    codelink:'https://github.com/SritharanKalimuthu/Internet_Banking'
  },
  {
    id:4,
    img:'/agecalculator.jpg',
    name:'Age Calculator',
    description:`" Engineered an age calculator application utilizing React, providing efficient age calculation functionality. Seamlessly designed for user-friendly experience and intuitive interaction. "`,
    date:'Jan 20, 2024',
    button:'count age',
    viewlink:'https://agecalculator-frontendmentorchallenge.netlify.app/',
    codelink:'https://github.com/SritharanKalimuthu/FrontendMentor/tree/main'
  }
  // Add more work items here...
];

// WorkContainer component to render each work item
const WorkContainer = ({ img, name, date, description, button, viewlink, codelink }) =>{
  // Framer motion variants for animation
  const workVariant = {
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
  };

  const boxVariant = {
    initial:{
      y:100,
      opacity:0,
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:.7,
        delay:.4,
      }
    }
  };

  const boxVariant2 = {
    initial:{
      y:100,
      opacity:0,
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:.7,
      }
    }
  };

  return (
    <section>
      <img src='/mountains.png' alt='' className='mountains'/>
      <motion.div className="works-container" variants={workVariant} initial='initial' whileInView='animate'>
        <motion.div variants={boxVariant2} initial='initial' whileInView='animate' className="works-image">
          <img src={img} alt=''/>
        </motion.div>
        <motion.div variants={boxVariant} initial='initial' whileInView='animate' className="works-text-container">
          <h2>{name}</h2>
          <span>{date}</span>
          <p>{description}</p>
          {button && <a href={viewlink} target='_blank'><button className='link-preview-btn ui-btn'><span>{button}</span></button></a>}
          <a href={codelink} target='_blank'><button className="code-btn ui-btn"><span>View Code</span></button></a>
        </motion.div>
      </motion.div>
    </section>
  );
};

function Works() {
  const ref = useRef();

  // Framer motion hook to track scroll position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  // Framer motion spring for smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="Works" ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX: scaleX }} className='progress-line-bar'></motion.div>
      </div>
      {/* Render WorkContainer for each work item */}
      {workList.map((workItem) => <WorkContainer key={workItem.id} {...workItem} />)}
    </div>
  );
}
  
export default Works;
