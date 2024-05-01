import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  // State variables to manage the navbar's open/close state and active section
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Effect to update the active section based on scroll position
  useEffect(() => {
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

  // Effect to prevent scrolling when the sidebar is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("block-scroll");
    } else {
      document.body.classList.remove("block-scroll");
    }
  }, [open]);

  // Function to toggle the sidebar's open/close state
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <nav className={open ? "sidebar" : null}>
      <h1>
        <a href="#Home">KS</a>
      </h1>
      <ul className={open ? "menubar" : ""}>
        {/* Rendering navbar items dynamically */}
        {["Home", "About", "Works", "Contact"].map((value, index) => (
          <li key={index}>
            <a
              href={`#${value}`}
              className={
                activeSection === value ? "current-page navigator" : "navigator"
              }
              // Conditionally handling click event to close sidebar
              onClick={open ? toggleSidebar : null}
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
      {/* Button to toggle the sidebar's open/close state */}
      <motion.button
        className="toggle-btn"
        onClick={toggleSidebar}
        animate={open ? "open" : "close"}
      >
      <motion.svg width="23" height="23" viewBox="0 0 23 23">
          {/* Animated SVG paths for toggle button*/}
          <motion.path
            strokeWidth="3"
            stroke="orange"
            strokeLinecap="round"
            variants={{
              close: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="orange"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              close: { opacity: 1 },
              open: { opacity: 0 }
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="orange"
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
