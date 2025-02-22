import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/imgs/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>
          <a target="_blank" href="https://portfolio-phi-umber.vercel.app/">
            For Newer Version Click Here
          </a>
        </h2>
        <h5>Hello I'm</h5>
        <h1>Erez Amirav</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        {/* <div className="me">
          <img src={ME} alt="" />
        </div> */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
