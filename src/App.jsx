import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/about/About'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
      <Home/>
      <About/>
      <Works/>
      <Contact/>
    </>
  )
}

export default App
