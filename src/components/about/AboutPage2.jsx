import './about.css'
import {motion} from 'framer-motion';

function AboutPage2() {

    const boxvariant1 = {
        initial:{
          y:50,
          opacity:0,
        },
        animate:{
          y:0,
          opacity:1,
          transition:{
            duration:.5,
          }
        }
      }

      const boxvariant2 = {
        initial:{
          y:50,
          opacity:0,
        },
        animate:{
          y:0,
          opacity:1,
          transition:{
            duration:.5,
            delay:.2,
          }
        }
      }
      const boxvariant3 = {
        initial:{
          y:50,
          opacity:0,
        },
        animate:{
          y:0,
          opacity:1,
          transition:{
            duration:.5,
            delay:.4,
          }
        }
      }
      const boxvariant4 = {
        initial:{
          y:50,
          opacity:0,
        },
        animate:{
          y:0,
          opacity:1,
          transition:{
            duration:.5,
            delay:.6,
          }
        }
      }

  return (
    <section id="About" className='About-2'>
         <img className="clouds" src="/clouds.svg" alt=""/>
         <img src='/mountain.png' alt='' className='mountain'/>
        <div className="about-section-2">
        <motion.div className="section2-content"
        variants={boxvariant1}
        initial='initial'
        whileInView='animate'
        >
            <img src="/springboard.webp" alt="" className='text-box-thumnail'/>
            <div className="about-text-box">
            <span>25th Nov 2022</span>
                <p>"Completed my first full-stack program on Nov 25th, 2022, at <b><a href='https://infyspringboard.onwingspan.com/web/en/page/home' style={{color:'black'}}>Infosys Springboard </a></b>, leveraging the project of an e-commerce application."</p><hr></hr><p>
                <b>Achievement : </b>Successfully completed full-stack program with <b>73%</b> in Assessment & by developing ecart, an e-commerce application as the capstone project.
                </p>
            </div>
            </motion.div>
            <motion.div className="section2-content"
           variants={boxvariant2}
      initial='initial'
      whileInView='animate'
            >
            <img src="/frontend-mentor.avif" alt="" className='text-box-thumnail'/>
            <div className="about-text-box"><span>In Progress</span>
                <p>"Consistently conquering challenges on <b><a href='https://www.frontendmentor.io/profile/SritharanKalimuthu' style={{color:'black'}}>Frontend Mentor </a></b>site, significantly enhancing my frontend development proficiency."</p><hr></hr><p>
                <b>Achievement : </b>Strengthening frontend development capabilities through practical experience.
                </p></div>
            </motion.div>
            <motion.div className="section2-content"
            variants={boxvariant3}
            initial='initial'
            whileInView='animate'
            >
            <img src="/aws.png" alt="" className='text-box-thumnail'/>
            <div className="about-text-box"><span>17th Nov 2023</span>
                <p>"Successfully deployed a virtual Linux machine on cloud using <b><a href='#' style={{color:'black'}}>AWS Cloud Management Console</a></b>  utilizing various AWS services."</p><hr></hr><p>
                <b>Achievement : </b>Leveraged various AWS services for deploying employee directory application & successfully deployed alongside the virtual machine.
                </p></div>
            </motion.div>
            <motion.div className="section2-content"
            variants={boxvariant4}
            initial='initial'
            whileInView='animate'
            >
            <img src="/coursera.png" alt="" className='text-box-thumnail'/>
            <div className="about-text-box"><span>17th Nov 2023</span>
                <p>"Accomplished the AWS Cloud Technical Essentials course on <b><a href='https://www.coursera.org/account/accomplishments/verify/9ERVZEXWQZAH' style={{color:'black'}}>Coursera </a></b>, mastering essential skills through diverse assessments."</p><hr></hr><p>
                <b>Achievement : </b> Grade Achieved <b>100% </b>in Assessments.<br></br>Certified by <a href='https://www.coursera.org/account/accomplishments/verify/9ERVZEXWQZAH' target='_blank'>Coursera</a>.
                </p></div>
            </motion.div>
           
        </div>
    </section>
  )
}

export default AboutPage2
