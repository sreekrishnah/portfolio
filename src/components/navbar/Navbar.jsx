import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  if(open){
    document.body.classList.add('block-scroll');
  }else{
    document.body.classList.remove('block-scroll');
  }

  useEffect(() => {
    const handleScroll = () => {
      const Home = document.getElementById("Home");
      const About = document.getElementById("About");
      const Works = document.getElementById("Works");
      const Contact = document.getElementById("Contact");

      const sections = [Home, About, Works, Contact];
      sections.forEach((section) => {
        const top = section.offsetTop - 50;
        const bottom = top + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={open ? "sidebar" : null}>
      <motion.h1>
        <a href="#Home">sk</a>
      </motion.h1>
      <motion.ul className={open ? "menubar" : ""}>
        {["Home", "About", "Works", "Contact"].map((value, index) => (
          <li key={index} onClick={() => setOpen((prev) => !prev)}>
            <motion.a
              href={`#${value}`}
              className={
                activeSection === value ? "current-page navigator" : "navigator"
              }
            >
              {value}
            </motion.a>
          </li>
        ))}
      </motion.ul>
      <motion.button
        className="toggle-btn"
        onClick={() => setOpen((prev) => !prev)}
        animate={open ? "open" : "close"}
      >
        <motion.svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.path
            strokeWidth="3"
            stroke="white"
            strokeLinecap="round"
            variants={{
              close: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="white"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              close: { opacity: 1 },
              open: { opacity: 0 }
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="white"
            strokeLinecap="round"
            variants={{
              close: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </motion.svg>
      </motion.button>
    </nav>
  );
}

export default Navbar;
