import './about.css'
import {motion} from 'framer-motion';

function AboutPage2() {
  return (
    <section id="About" className='About-2'>
         <img className="clouds" src="/clouds.svg" alt=""/>
         <img src='/mountain.png' alt='' className='mountain'/>
        <div className="about-section-2">
        <motion.div className="section2-content"
        initial={{y:100,opacity:0}}
        transition={{duration:.4,delay:.2}}
        animate={{y:0,opacity:1}}
        whileHover={{
            scale:1.08
        }}>
            <img src="/springboard.webp" alt="" className='text-box-thumnail'/>
            <div className="about-text-box">
            <span>25th Nov 2022</span>
                <p>"Completed my first full-stack program on Nov 25th, 2022, at Infosys Springboard, leveraging the project of an e-commerce application."</p><hr></hr><p>
                <b>Achievement : </b>Successfully accomplished full-stack program at Infosys Springboard by completing an e-commerce application as the capstone project.
                </p>
            </div>
            </motion.div>
            <motion.div className="section2-content"
            initial={{y:100,opacity:0}}
            transition={{duration:.4,delay:.4}}
            animate={{y:0,opacity:1}}
            whileHover={{
                scale:1.08
            }}>
            <img src="/frontend-mentor.avif" alt="" className='text-box-thumnail'/>
            <div className="about-text-box"><span>In Progress</span>
                <p>"Consistently conquering challenges on Frontend Mentor site, significantly enhancing my frontend development proficiency."</p><hr></hr><p>
                <b>Achievement : </b>Strengthening frontend development capabilities through practical experience.
                </p></div>
            </motion.div>
            <motion.div className="section2-content"
            initial={{y:100,opacity:0}}
            transition={{duration:.4,delay:.6}}
            animate={{y:0,opacity:1}}
            whileHover={{
                scale:1.08
            }}>
            <img src="/aws.png" alt="" className='text-box-thumnail'/>
            <div className="about-text-box"><span>17th Nov 2023</span>
                <p>"Successfully deployed a virtual Linux machine on AWS Cloud Management Console utilizing various AWS services."</p><hr></hr><p>
                <b>Achievement : </b>Leveraged various AWS services for efficient deployment of employee directory application & successfully deployed alongside the virtual machine.
                </p></div>
            </motion.div>
            <motion.div className="section2-content"
            initial={{y:100,opacity:0}}
            transition={{duration:.4,delay:.8}}
            animate={{y:0,opacity:1}}
            whileHover={{
                scale:1.08,
            }}>
            <img src="/coursera.png" alt="" className='text-box-thumnail'/>
            <div className="about-text-box"><span>17th Nov 2023</span>
                <p>"Accomplished the AWS Cloud Technical Essentials course on Coursera, mastering essential skills through diverse assessments."</p><hr></hr><p>
                <b>Achievement : </b> certified by <a href='https://www.coursera.org/account/accomplishments/verify/9ERVZEXWQZAH' target='_blank'>Coursera</a>.
                </p></div>
            </motion.div>
           
        </div>
    </section>
  )
}

export default AboutPage2
