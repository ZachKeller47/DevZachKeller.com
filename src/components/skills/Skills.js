import React from 'react'
import './skills.css'
import {BiCaretRight} from 'react-icons/bi'
import {AiFillHtml5} from 'react-icons/ai'
import {ImCss3} from 'react-icons/im'
import {SiReact} from 'react-icons/si' 
import {DiSass} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'

const Skills = () => {
  return (
    <section id="skills">
      <h5>Skills I have</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
          <div className="experience">
            <h3>Frontend Development</h3>
            <div className="experience__content">
                <article className="experience__details">
                    <h4><AiFillHtml5 className="experience__details-icons" /></h4>
                  </article>

                  <article className="experience__details">
                    <h4><ImCss3 className="experience__details-icons"  /></h4>
                  </article>

                  <article className="experience__details">
                    <h4><SiJavascript className="experience__details-icons"  /></h4>
                  </article>

                  <article className="experience__details">
                    <h4><SiReact className="experience__details-icons"/></h4>
                  </article>

                  <article className="experience__details">
                    <h4><DiSass className="experience__details-icons"/></h4>
                  </article>

                  <article className="experience__details">
                    <h4 className="experience__details">UI/UX Design</h4>
                  </article>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Skills