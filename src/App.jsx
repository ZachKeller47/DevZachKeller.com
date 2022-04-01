import React from 'react'
import Header from './components/header/Header.js'
import Nav from './components/nav/Nav.js'
import About from './components/about/About.js'
import Projects from './components/projects/Projects.js'
import Skills from './components/skills/Skills.js'
import Contact from './components/contact/Contact.js'
import Footer from './components/footer/Footer.js'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App