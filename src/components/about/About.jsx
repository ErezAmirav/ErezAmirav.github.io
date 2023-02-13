import React from 'react';
import './about.css';
import ME from '../../assets/imgs/me.png';
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Computer Science Graduate (B.Sc.), Fullstack development
            specialization.<br/>
            Skills: JavaScript, HTML, CSS, Java, C, C++.<br/>
            Framework & Tools: React, NodeJS, MongoDB, Git.<br/>
            Ambitious, team player, love to challenge myself.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
