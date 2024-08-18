import './works.css';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion'; 

// Array of work items
const workList = [
  {
    id:1,
    img:'https://raw.githubusercontent.com/SritharanKalimuthu/Finance_Advisor/main/app/assets/screenshot/finchat.png',
    name:'FinChat Bot',
    techstack:'react,nextjs,redux,tailwind',
    description:`Engineered a seamless and responsive financial query chatbot, FinChat AI, utilizing advanced AI models to provide users with 24/7 access to personalized financial assistance.`,
    button:'Plan Finance',
    viewlink:'https://finance-advisor-fjxcb0dwz-sritharankalimuthus-projects.vercel.app/',
    codelink:'https://github.com/SritharanKalimuthu/Finance_Advisor'
  },
  {
    id:2,
    img:'/weather.png',
    name:'Weather Today',
    techstack:'vite,react,nodejs',
    description:`Designed and developed a global weather application, integrating OpenWeather API for real-time forecasts, offering seamless access to accurate weather worldwide.`,
    button:'Get weather',
    viewlink:'https://weather-from-openweather.netlify.app/',
    codelink:'https://github.com/SritharanKalimuthu/React_Learnings'
  },
  {
    id:3,
    img:'/sunnyside.jpg',
    name:'Sunnyside Landing Page',
    techstack:'vite,react',
    description:`Developed a Landing page application for a madeup organization sunnyside. Which offer a understanding of what sunnyside for the organization customers.`,
    button:'Go There',
    viewlink:'https://sunnyside-landing-page-frontend.netlify.app/',
    codelink:'https://github.com/SritharanKalimuthu/FrontendMentor/tree/main/Sunnyside-Landing-Page'
  },
  {
    id:4,
    img:'/bookstore.jpeg',
    name:'Book Store - CRUD',
    techstack:'react,express,mongodb,nodejs,tailwind',
    description:`Architected a CRUD book store application using MERN stack technology, facilitating seamless addition and removal of books. Empowering users with intuitive controls for efficient book management.`,
    codelink:'https://github.com/SritharanKalimuthu/BookStore'
  },
  {
    id:5,
    img:'/banking.png',
    name:'Internet Banking',
    techstack:'php,mysql',
    description:`This Application is a collaborative project developed as part of the Naan Mudhalvan program, an initiative by the Tamil Nadu government to enhance technical skills among students.`,
    codelink:'https://github.com/SritharanKalimuthu/Internet_Banking'
  },
  // Add more work items here...
];

// WorkContainer component to render each work item
const WorkContainer = ({ img, name, date,techstack, description, button, viewlink, codelink }) =>{
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
      <img src='/mountains.png' alt='' className='mountains' />
      <motion.div className="works-container" variants={workVariant} initial='initial' whileInView='animate'>
        <motion.div variants={boxVariant2} initial='initial' whileInView='animate' className="works-image">
          <img src={img} alt=''/>
        </motion.div>
        <motion.div variants={boxVariant} initial='initial' whileInView='animate' className="works-text-container">
          <h2>{name}</h2>
          <img src={`https://skillicons.dev/icons?i=${techstack}`} alt='logos' className=''/>
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
