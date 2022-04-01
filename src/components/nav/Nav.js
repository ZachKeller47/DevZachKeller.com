import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {ImProfile} from 'react-icons/im'
import {BiBookBookmark} from 'react-icons/bi'
import {BsBriefcase} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><ImProfile /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiBookBookmark /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsBriefcase /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlinePhone /></a>
    </nav>
  )
}

export default Nav