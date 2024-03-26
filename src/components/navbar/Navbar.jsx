import {motion} from "framer-motion";
import { useState,useEffect } from "react";
import './navbar.css';

function Navbar() {

  const [open,setOpen] = useState(false)


  const navelements = ['Home','About','Works','Contact'];
  const variant = {
    visible : {
      opacity:1,
      x:0,
      transition:{duration:.9},
    },
    hidden:(i) =>({
      x:-200,
      opacity:0,
    })
  }
  const ul_variant = {
    visible : {
      opacity:1,
      x:0,
      transition:{staggerChildren:.3},
    },
    hidden:{
      opacity:0,
    }
  }

  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const Home = document.getElementById('Home');
      const About = document.getElementById('About');
      const Works = document.getElementById('Works');
      const Contact = document.getElementById('Contact');

      const sections = [Home,About,Works,Contact];
      sections.forEach((section) => {
        const top = section.offsetTop - 50; // Adjust 50 based on your header height
        const bottom = top + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <nav className={open?'sidebar':null}>
        <motion.h1 initial="hidden" animate="visible" variants={variant}><a href={`#Home`}>sk</a></motion.h1>
        <motion.ul initial="hidden" animate="visible" variants={ul_variant} className={open?'menubar':''}>
          {navelements.map((value,index)=>{
            return <motion.a href={`#${value}`} className={activeSection === `${value}`? 'active navigator' : 'navigator'} key={index} variants={ul_variant}>{value}</motion.a>
          })}
          </motion.ul>
          <motion.button className="toggle-btn" onClick={()=>{setOpen((prev)=>!prev)}} animate={open?'open':'close'}>
            <motion.svg width='23' height='23' viewBox="0 0 23 23" initial={{opacity:0}} transition={{duration:.6,delay:.2}} animate={{opacity:1}}>
                <motion.path strokeWidth='3' stroke='white' strokeLinecap="round"
                variants={{
                  close:{d: 'M 2 2.5 L 20 2.5'},
                  open:{d: 'M 3 16.5 L 17 2.5'}
                }}/>
                <motion.path strokeWidth='3' stroke='white' strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                variants={{
                  close:{opacity:1},
                  open:{opacity:0}}}/>
                <motion.path strokeWidth='3' stroke='white' strokeLinecap="round"
                variants={{
                  close:{d: 'M 2 16.346 L 20 16.346'},
                  open:{d: 'M 3 2.5 L 17 16.346'}}}/>
            </motion.svg>
          </motion.button>
      </nav>
    </>
  )
}

export default Navbar
