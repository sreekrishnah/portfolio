import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {

    // Function that handles selection of current page in navbar list.
    const handleScroll = () => {
      const sections = ["Home", "About", "Works", "Contact"].map(
        (id) => document.getElementById(id)
      );
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const { offsetTop, offsetHeight, id } = section;
        const top = offsetTop - 50;
        const bottom = top + offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // To block scroll while sidebar is open.
  useEffect(() => {
    if (open) {
      document.body.classList.add("block-scroll");
    } else {
      document.body.classList.remove("block-scroll");
    }
  }, [open]);

  // menubar toggle function.
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (

    <nav className={open ? "sidebar" : null}>

      <motion.h1>
        <a href="#Home">KS</a>
      </motion.h1>

      <motion.ul className={open ? "menubar" : ""}>
        {["Home", "About", "Works", "Contact"].map((value, index) => (
          <motion.a
            href={`#${value}`}
            className={
              activeSection === value ? "current-page navigator" : "navigator"
            }
            onClick={open ? toggleSidebar : null}
            key={index}
          >
            {value}
          </motion.a>
        ))}
      </motion.ul>

      <motion.button
        className="toggle-btn"
        onClick={toggleSidebar}
        animate={open ? "open" : "close"}
      >

        <motion.svg width="23" height="23" viewBox="0 0 23 23">
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
