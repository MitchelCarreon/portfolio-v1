import React from "react";
import { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";

import { RiServiceLine } from "react-icons/ri";
import { BsEnvelope } from "react-icons/bs";
import {AiOutlineRobot} from 'react-icons/ai'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaRegUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <HiOutlineLightBulb />
      </a>
      {/* <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a> */}
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineRobot />
      </a>
      {/* <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsEnvelope />
      </a> */}
    </nav>
  );
};

export default Nav;
