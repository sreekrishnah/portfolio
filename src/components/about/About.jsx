import { useState } from 'react';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import './about.css';

function About() {
  // State for active section and its description
  const [activeSection, setActiveSection] = useState("Javascript");

  // Object containing descriptions for each section
  const techstack = {
    Javascript: "I possess a strong command of JavaScript and its advanced concepts, coupled with practical experience gained through the development of several foundational projects. These include applications such as calculators, tic-tac-toe games, and to-do lists, all of which demonstrate my proficiency in applying JavaScript principles to real-world scenarios. For a comprehensive overview of my projects, please visit my GitHub profile.",
    React: "I have advanced through more than half of my React learning journey, acquiring proficiency in both fundamental and advanced concepts. Currently, I am focused on leveraging this knowledge to develop real-time projects. Notable projects include a weather forecasting web application, a QR code generator, and an Amazon best-selling bookshelf application.",
    MERN: "I am actively advancing my skills in the MERN stack, and enhancing my expertise in Express.js and MongoDB. Recently, I have developed a CRUD application for a bookstore, empowering users to seamlessly manage book items. Additionally, I am continuously refining my skills by undertaking a variety of beginner-level projects. And I am giving efforts to expand my knowledge and refine my abilities in MERN stack.",
    Bootstrap: "Bootstrap is an exceptional CSS library that significantly accelerates project development. While I have utilized Bootstrap in many of my projects for its efficiency, I find that custom styling, meticulously crafted line by line, enhances the satisfaction of my work. As a result, I often opt for personalized styling, although I am proficient in integrating Bootstrap or Tailwind CSS when the project requirements demand it."
  };

  const [description, setDescription] = useState(techstack.Javascript);

  // Array of images for technologies
  const languagesImages = [
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
    'languages/c.png',
    'languages/linux.png'
  ];

  // Framer Motion variants for animations
  const variants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.7 } }
  };

  const variants2 = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } }
  };

  const techVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.7, delay: 0.7 } }
  };

  // Function to handle click on tech section
  const handleSetActiveSection = (section, description) => {
    setDescription(description);
    setActiveSection(section);
  };

  return (
    <section id="About">
      {/* Background images */}
      <img className="clouds" src="/clouds.svg" alt="" />
      <img src='/mountain.png' alt='' className='mountain' />

      {/* About container */}
      <div className="about-container">
        {/* Container for What I Do section */}
        <div className="do-container">
          {/* Title and description */}
          <motion.div className="title-card" variants={variants} initial='initial' whileInView='animate'>
            <h1>What I Do..?</h1>
            <ul>
              <li>Discover</li>
              <li>Design</li>
              <li>Develop</li>
            </ul>
          </motion.div>
          {/* Description */}
          <motion.div className="do-description" variants={variants} initial='initial' whileInView='animate'>
            <p>I'm so called Levy, on a mission to turn challenges into opportunities. With a keen eye for design and a love for clean code, I specialize in crafting engaging and user-friendly web experiences.</p>
            <h4>"Coding is not about typing, it's about thinking."</h4>
          </motion.div>
        </div>

        {/* Container for Tech Stack section */}
        <div className="skill-container">
          <motion.div className="title-card2" variants={variants} initial='initial' whileInView='animate'>
            <h1>My Stack</h1>
            <h3>Tech Arsenal</h3>
            {/* List of tech stacks */}
            <motion.div className="tech-box-container" variants={techVariant} initial='initial' whileInView='animate'>
              <div className="arsenal-content">
                <ul>
                  {/* Mapping over techstack object */}
                  {Object.entries(techstack).map(([key, value]) => (
                    <li className={activeSection === key ? 'activesection' : 'arsenal-list'} onClick={() => handleSetActiveSection(key, value)} key={key}>
                      <img src={`/${key}.png`} alt='' />{key}
                    </li>
                  ))}
                </ul>
                {/* Description of selected tech stack */}
                <div className="tech-box">
                  <p>{description}</p>
                </div>
                {/* Marquee for logos */}
                <div className="logos-container">
                  <Marquee style={{ width: '95vw', marginLeft: '1rem' }} direction='left' autoFill='true'>
                    {languagesImages.map((images, i) => (
                      <img src={images} alt='' key={i} className='logos' />
                    ))}
                  </Marquee>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Container for Role section */}
        <motion.div className="role-container" variants={variants2} initial='initial' whileInView='animate'>
          {/* Role description */}
          <div className="role-img-container">
            <img src='/cyberdesigner.jpg' alt='' />
            <div className="role-description">
              <h2>Software Engineer</h2>
              <p>"Transforming ideas into digital solutions."</p>
            </div>
          </div>
          {/* Role description */}
          <div className="role-img-container" >
            <img src='/coder.jpg' alt='' />
            <div className="role-description">
              <h2>Front-end Developer</h2>
              <p>Crafting Exceptional Web Experiences</p>
            </div>
          </div>
          {/* Role description */}
          <div className="role-img-container">
            <img src='/designer.jpg' alt='' />
            <div className="role-description">
              <h2>Problem Solver</h2>
              <p>Solving Complex Challenges with Precision</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About;
