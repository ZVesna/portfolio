import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </BrowserRouter>
)

export default App