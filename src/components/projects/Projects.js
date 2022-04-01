import React from 'react'
import './projects.css'
import airbnb from  '../../assets/airbnb.png'
import tattoos from  '../../assets/tattoos.png'
import blackjack from  '../../assets/blackjack.png'

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
            <div className="portfolio-item__img">
              <img src={airbnb} alt="Project" />
              </div>
            <h3>Airbnb Clone app</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ZachKeller47/airbnb-clone" className="btn" target="_blank">See Code</a>
              <a href="https://airbnb-clone-f7e0c.web.app" className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
            <div className="portfolio-item__img">
              <img src={tattoos} alt="Project" />
              </div>
            <h3>KurtisToddTattoos.com</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ZachKeller47/KurtisToddTattoos" className="btn" target="_blank">See Code</a>
              <a href="https://kurtistoddtattoos.com/" className="btn btn-primary" target="_blank">Live Website</a>
            </div>
        </article>

        <article className="portfolio__item">
            <div className="portfolio-item__img">
              <img src={blackjack} alt="Project" className="bj__img"/>
              </div>
            <h3>blackjack Game</h3>
           <div className="portfolio__item-cta">
            <a href="https://github.com/ZachKeller47/Blackjack" className="btn" target="_blank">See Code</a>
            <a href="https://zachkeller47.github.io/Blackjack/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div> 
        </article>
        </div>
      </section>
  )
}

export default Projects