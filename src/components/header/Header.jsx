import React from "react";
import "./Header.css";
import CTA from "./CTA";
import bucky from "../../assets/keyboard.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mitchel Carreon</h1>
        <h5 className="text-light">Fresh Computer Science Graduate</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={bucky} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll to bottom
        </a>
      </div>
    </header>
  );
};

export default Header;
