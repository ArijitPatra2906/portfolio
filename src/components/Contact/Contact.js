import React,{ Component , useRef } from 'react'
import "./Contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sq47ffr', 'template_cwhh50r', form.current, 'vbdnn6xD8B1UBwET4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
    <h5>Get in touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact_container">
    
    <div className="contact_options">
    <article className="contact_option">
    <MdOutlineEmail className='contact_icon' />
    <h4 className='title'>Email</h4>
    <h5>patraarijit440@gmail.com</h5>
    <a href="mailto:patraarijit440@gmail.com" target='_blank' rel="noreferrer">Send a massage</a>

    </article>

    <article className="contact_option">
    <RiMessengerLine className='contact_icon'/>
    <h4 className='title'>Messenger</h4>
    <h5>Arijit Patra</h5>
    <a href="https://m.me/arijit.patra.988" target='_blank' rel="noreferrer">Send a massage</a>

    </article>

    <article className="contact_option">
    <BsWhatsapp className='contact_icon'/>
    <h4 className='title'>Whatsapp</h4>
    <h5>+919836671549</h5>
    <a href="https://api.whatsapp.com/send?phone=+919836671549" target='_blank' rel="noreferrer">Send a massage</a>

    </article>
    </div>

    <form ref={form} onSubmit={sendEmail}>
    <input type="text" name='name'  placeholder='Your full name' required/>
    <input type="email" name='email' placeholder='Your Email' required />
   
    <textarea name='message' rows='7' placeholder='your message' required ></textarea>
    <button type='submit' className='btn btn-primary '>Send Message</button>
    </form>
    
    </div>
    </section>
  )
}

export default Contact