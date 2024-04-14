import {useState,useEffect} from 'react';
import {animate, motion ,useScroll , useTransform} from 'framer-motion';
import Marquee from "react-fast-marquee";
import './about.css';



function About() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const [activeSection, setActiveSection] = useState("javascript");


  const techboxstanza ={
    javascript:"I possess a strong command of JavaScript and its advanced concepts, coupled with practical experience gained through the development of several foundational projects. These include applications such as calculators, tic-tac-toe games, and to-do lists, all of which demonstrate my proficiency in applying JavaScript principles to real-world scenarios. For a comprehensive overview of my projects, please visit my GitHub profile.",
    react:"I have advanced through more than half of my React learning journey, acquiring proficiency in both fundamental and advanced concepts. Currently, I am focused on leveraging this knowledge to develop real-time projects. Notable projects include a weather forecasting web application, a QR code generator, and an Amazon best-selling bookshelf application.",
    MERN:"I am actively advancing my skills in the MERN stack, and enhancing my expertise in Express.js and MongoDB. Recently, I have developed a CRUD application for a bookstore, empowering users to seamlessly manage book items. Additionally, I am continuously refining my skills by undertaking a variety of beginner-level projects. And I am giving efforts to expand my knowledge and refine my abilities in MERN stack.",
    bootstrap:"Bootstrap is an exceptional CSS library that significantly accelerates project development. While I have utilized Bootstrap in many of my projects for its efficiency, I find that custom styling, meticulously crafted line by line, enhances the satisfaction of my work. As a result, I often opt for personalized styling, although I am proficient in integrating Bootstrap or Tailwind CSS when the project requirements demand it."
  }

  const [description,setDescription] = useState(techboxstanza.javascript);


  const languagesknown = [
    'languages/html.png',
    'languages/css.png',
    'languages/bootstrap.png',
    'languages/tailwind.png',
    'languages/sass.png',
    'languages/js.png',
    'languages/react.png',
    '/MERN.png',
    'languages/nodejs.png',
    'languages/npm.png',
    'languages/python.png',
    'languages/php.png',
    'languages/c.png'
  ]




  const imgvariant = {
    initial:{
      x:-50,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:.8,
        delay:.5,
      }
    }
  }
  const boxvariant = {
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
  }

  const techvariant = {
    initial:{
      opacity:0,
    },
    animate:{
      opacity:1,
      transition:{
        duration:.7,
        delay:.7,
      }
    }
  }



    return (
      <section id="About">
        <img className="clouds" src="/clouds.svg" alt=""/>
        <img src='/mountain.png' alt='' className='mountain'/>
        <div className="about-container">
          <div className="do-container">
            <div className="title-card">
                <motion.h1
                variants={boxvariant}
                initial='initial'
                whileInView='animate'>What I Do..?</motion.h1>
                <motion.ul
                variants={boxvariant}
                initial='initial'
                whileInView='animate'>
                  <li>Discover</li>
                  <li>Design</li>
                  <li>Develop</li>
                </motion.ul>
            </div>
            <div className="do-description">
                <motion.p
                variants={boxvariant}
                initial='initial'
                whileInView='animate'>I'm so called Levy, on a mission to turn challenges into opportunities. With a keen eye for design and a love for clean code, I specialize in crafting engaging and user-friendly web experiences.</motion.p>
                <motion.h4
                variants={boxvariant}
                initial='initial'
                whileInView='animate'>"Coding is not about typing, it's about thinking."</motion.h4>
            </div>
          </div>
          <div className="skill-container">
            <div className="title-card2">
            <motion.h1
                variants={boxvariant}
                initial='initial'
                whileInView='animate'>My Stack</motion.h1>
                <motion.h3
                variants={boxvariant}
                initial='initial'
                whileInView='animate'>
                  Tech Arsenal
                </motion.h3>
                <motion.div className="tech-box-container"
                variants={techvariant}
                initial='initial'
                whileInView='animate'>
                  <div className="arsenal-content">
                  <ul>
                    <li className={activeSection==='javascript'?'activesection':'arsenal-list'} onClick={()=>setDescription(techboxstanza.javascript)||setActiveSection('javascript')}><img src='/js.png' alt=''/>Javascript</li>
                    <li className={activeSection==='react'?'activesection':'arsenal-list'}  onClick={()=>setDescription(techboxstanza.react)||setActiveSection('react')}><img src='/react.png' alt=''/>React</li>
                    <li className={activeSection==='MERN'?'activesection':'arsenal-list'}  onClick={()=>setDescription(techboxstanza.MERN)||setActiveSection('MERN')}><img src='/MERN.png' alt=''/>MERN</li>
                    <li className={activeSection==='bootstrap'?'activesection':'arsenal-list'}  onClick={()=>setDescription(techboxstanza.bootstrap)||setActiveSection('bootstrap')}><img src='/bootstrap.png' alt=''/>Bootstrap</li>
                  </ul>
                  <div className="tech-box">
                    <p>{description}</p>
                  </div>
                  <div className="logos-container">
                   <Marquee style={{width:'27rem',marginLeft:'1rem'}}   direction='left'
                   autoFill='true'>
                    {languagesknown.map((languages,i)=>{
                      return <img src={languages} alt='' key={i} className='logos'/>
                    })}
                   </Marquee>
                   </div>
                   </div>
                </motion.div>
            </div>
          </div>
          <div className="role-container">
            <motion.div className="role-img-container" 
             variants={imgvariant}
             initial='initial'
             whileInView='animate'>
              <img src='/coder.jpg' alt=''/>
              <div className="role-description">
                <h2>Front-end Developer</h2>
                <p>Crafting Exceptional Web Experiences</p>
              </div>
            </motion.div>
            <motion.div className="role-img-container" 
             variants={imgvariant}
             initial='initial'
             whileInView='animate'>
              <img src='/designer.jpg' alt=''/>
              <div className="role-description">
                <h2>Web Designer</h2>
                <p>Turning Ideas into Visual Masterpieces</p>
              </div>
            </motion.div>
            <motion.div className="role-img-container" 
             variants={imgvariant}
             initial='initial'
             whileInView='animate'>
              <img src='/cyberdesigner.jpg' alt=''/>
              <div className="role-description">
                <h2>Problem Solver</h2>
                <p>Solving Complex Challenges with Precision</p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>
    )
  }

  
  
  export default About
  
