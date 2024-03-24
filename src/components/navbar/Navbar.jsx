import {motion} from "framer-motion";
import { useState,useEffect } from "react";
import './navbar.css';

function Navbar() {

  const [menubar,setMenubar] = useState(false);

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
      <nav>
        <motion.h1 initial="hidden" animate="visible" variants={variant}><a href={`#Home`}>sk</a></motion.h1>
        <motion.ul initial="hidden" animate="visible" variants={ul_variant}>
          {navelements.map((value,index)=>{
            return <motion.a href={`#${value}`} className={activeSection === `${value}`? 'active navigator' : 'navigator'} key={index} variants={ul_variant}>{value}</motion.a>
          })}
        </motion.ul>
      </nav>
    </>
  )
}

export default Navbar
