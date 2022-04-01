import React from 'react'
import './header.css'
import CTA from './CTA'
import logo from '../../assets/logo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Zachary Keller</h1>
          <h5 className="text-light">Front End Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header