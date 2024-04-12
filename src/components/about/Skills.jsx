import './skills.css'
import { useState,useEffect } from 'react';
import {motion} from 'framer-motion';
import Slider from "react-slick";


function Skills() {

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

    console.log(width)


    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      cssEase: "linear",
      pauseOnHover: false
    };

    const settings2 = {
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      cssEase: "linear",
      pauseOnHover: false
    }

    const boxvariant = {
      initial:{
        y:50,
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

  return (
    <section id="About" className='About-2'>
    <img className="clouds" src="/clouds.svg" alt=""/>
    <img src='/mountain.png' alt='' className='mountain'/>
    <div className="skillset-container">

    <div className="title-card3">
                <motion.h1
                variants={boxvariant}
                initial='initial'
                whileInView='animate'>Skills & Experience</motion.h1>
      </div>
      <motion.h4 className='cyber-quote'
                variants={boxvariant}
                initial='initial'
                whileInView='animate'> "The best thing about a boolean is even if you are wrong, you are only off by a bit."
    </motion.h4>
      <motion.div className="slider-container"
      variants={boxvariant}
      initial='initial'
      whileInView='animate'>
      <Slider {...width>400?{...settings}:{...settings2}}>
        <div>
        <div className="exp-container">
              <div className='skill-title-card'>
              <img src="/springboard.webp" alt="" className='titlebox-thumnail'/>
                <div className="title-card-txt">
                  <h3>Infosys Springboard</h3>
                  <span>25th Nov 2022</span>
                </div>
              </div>
              <div className='skill-description'>
                 <p>"Successfully completed a full-stack program at <b><a href='https://infyspringboard.onwingspan.com/web/en/page/home' style={{color:'white'}}>Infosys Springboard,</a></b> achieving <b>73%</b> in assessment and developing an e-commerce application named "ecart" as the capstone project.</p>
                </div>
              </div>
        </div>
        <div>
        <div className="exp-container">
              <div className='skill-title-card'>
              <img src="/aws.png" alt="" className='titlebox-thumnail'/>
                <div className="title-card-txt">
                  <h3>AWS</h3>
                  <span>17th Nov 2023</span>
                </div>
              </div>
              <div className='skill-description'>
              <p>"Effectively deployed a virtual Linux machine on<b><a href='#' style={{color:'white'}}> AWS Cloud Management Console, </a></b>utilizing various AWS services for deploying the employee directory application alongside the virtual machine.</p>
                </div>
              </div>
        </div>
        <div>
        <div className="exp-container">
              <div className='skill-title-card'>
              <img src="/frontend-mentor.avif" alt="" className='titlebox-thumnail'/>
                <div className="title-card-txt">
                <h3>Front-end Mentor</h3>
                  <span>In progress</span>
                </div>
              </div>
              <div className='skill-description'>
              <p>"Continuously overcoming challenges on the <b><a href='https://www.frontendmentor.io/profile/SritharanKalimuthu' style={{color:'white'}}>Frontend Mentor site, </a></b>significantly improving my frontend development skills through practical experience."</p>
                </div>
              </div>
        </div>
        <div>
        <div className="exp-container">
              <div className='skill-title-card'>
              <img src="/coursera.png" alt=""  className='titlebox-thumnail'/>
                <div className="title-card-txt">
                <h3>Coursera</h3>
                  <span>17th Nov 2023</span>
                </div>
              </div>
              <div className='skill-description'>
              <p>"Accomplished the AWS Cloud Technical Essentials course on <b><a href='https://www.coursera.org/account/accomplishments/verify/9ERVZEXWQZAH' style={{color:'white'}}>Coursera,</a></b> achieving a perfect score of 100% in assessments and earning certification from Coursera."</p>
                </div>
              </div>
        </div>
        <div>
        <div className="exp-container">
              <div className='skill-title-card'>
              <img src="/ibm.jpg" alt=""  className='titlebox-thumnail'/>
                <div className="title-card-txt">
                <h3>IBM</h3>
                  <span>10th Jul 2023</span>
                </div>
              </div>
              <div className='skill-description'>
              <p>"I led the training and development of a Machine Learning model utilizing a Kaggle dataset at <b><a href='https://courses.tnsdc.skillsnetwork.site/certificates/0d45d66ec26848fb8845d12ef33cd344' target='_blank' style={{color:'white'}}>IBM - Developer Skills Network,</a></b> employing Transfer Learning techniques to automate weather classification tasks and earned certification from IBM."</p>
                </div>
              </div>
        </div>
      </Slider>
    </motion.div>
    </div>
    </section>
  )
}

export default Skills
