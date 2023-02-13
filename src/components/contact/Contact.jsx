import React from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>erezamirav@gmail.com</h5>
            <a href="mailto:erezamirav@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+972-50-9324402</h5>
            <a href="https://wa.me/+972509324402" target='_blank'>Send a message</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
