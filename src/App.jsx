import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import Skills from './components/about/Skills'


function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
    </>
  )
}

export default App
