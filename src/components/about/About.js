import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container">
          <div className="about__content">
                <p>My name is Zachary Keller or Zach.  I am a frontend developer born and raised in Tampa, Florida with a passion for expanding
                   my skills and expertise as a developer.
                  I started my developer journey in the early months of the pandemic, losing my personal training business because of the lock down.
                  One of my clients was a frontend developer. She put me on the path I am today and I could not be more grateful. 
                </p>
              <div className="btn__about">
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About