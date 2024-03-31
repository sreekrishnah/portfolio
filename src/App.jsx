import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import AboutPage2 from './components/about/AboutPage2'

function App() {

  return (
    <>
     <div className="construction-div">
      <img src='/construction.jpg' alt=''/>
      </div>
      <Navbar />
      <Hero/>
      {/* <About/>
      <AboutPage2/>
      <Works/>
      <Contact/> */}
    </>
  )
}

export default App
