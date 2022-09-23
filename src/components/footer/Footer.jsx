import React from "react";
import "./Footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { SiHandshake } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Mitchel Carreon
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#testimonials">Additional Info</a>
        </li>
        {/* <li>
          <a href="#contact">Contact</a>
        </li> */}
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mitchel-gabriel-halili-carreon-14b04923b/">
          <AiFillLinkedin />
        </a>
        <a href="tel:+5015802869">
          <AiFillPhone />
        </a>
        <a href="https://app.joinhandshake.com/stu/users/22014666">
          <SiHandshake />
        </a>
      </div>

      {/* <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div> */}
    </footer>
  );
};

export default Footer;
