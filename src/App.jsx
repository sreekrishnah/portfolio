import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/about/About'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import AboutPage2 from './components/about/AboutPage2'

function App() {

  return (
    <>
      <Home/>
      <About/>
      <AboutPage2/>
      <Works/>
      <Contact/>
    </>
  )
}

export default App
