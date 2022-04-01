import React from 'react'
import './contact.css'
import {BsMailbox2} from 'react-icons/bs'
import {FiPhoneCall} from 'react-icons/fi'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_huvw1rq', 'template_hiu31pa', form.current, 'oii8ilFPKqzK5BMRl')
     e.target.reset()
  };

  return (
    <section id="contact" className="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__card">
              <BsMailbox2 className="contact__card-icon"/>
                <h4>Email</h4>
                <h5>zachkeller47@gmail.com</h5>
                <a href="mailto:zachkeller47@gmail.com" target="_blank">Send a message</a>
              </article>
              <article className="contact__card">
                <FiPhoneCall className="contact__card-icon"/>
                <h4>Phone Number</h4>
                <h5>Call or Text</h5>
                <a href="tel:813-424-7021">813-424-7021</a>
              </article>
          </div>

          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
  )
}

export default Contact