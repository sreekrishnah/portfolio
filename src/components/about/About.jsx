import './about.css';
import School from './Academics';
import CircularProgressBar from './Progessbar';

function About() {
    return (
      <section id="About">
        <img className="clouds" src="/clouds.svg" alt=""/>
        <img src='/mountain.png' alt='' className='mountain'/>
        <div className="about-container">
          <div className="academic-container">
            <School/>
          </div>
          <div className="skill-container">
            <CircularProgressBar/>
          </div>
        </div>
      </section>
    )
  }

  
  
  export default About
  