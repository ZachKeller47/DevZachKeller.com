import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#" className="footer__logo">DevZach</a>

      <ul className="permaLinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/zach-keller47/" target="_blank" className="footer__socials-icon"><BsLinkedin /></a>
        <a href="https://github.com/ZachKeller47" target="_blank" className="footer__socials-icon"><BsGithub /></a>
        <a href="https://twitter.com/DevZachK" target="_blank" className="footer__socials-icon"><AiFillTwitterCircle /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DevZach. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer