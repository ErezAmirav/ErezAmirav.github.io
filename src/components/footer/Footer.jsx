import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Erez Amirav
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>Erez Amirav &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;
