import React from 'react';
import './about.css';
import ME from '../../assets/imgs/me.png';
import {
  FaGraduationCap,
  FaUserCheck,
  FaUserAlt,
  FaTools,
} from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';

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
            <FaGraduationCap className="about__content-icon" />
            Computer Science Graduate (B.Sc.), <br />
            <FaUserCheck className="about__content-icon" />
            Fullstack development specialization.
            <br />
            <GiSkills className="about__content-icon" />
            Skills: JavaScript, HTML, CSS, Java, C, C++.
            <br />
            <FaTools className="about__content-icon" />
            Framework & Tools: React, NodeJS, MongoDB, Git.
            <br />
            <FaUserAlt className="about__content-icon" />
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
