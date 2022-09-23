import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";
import bucky from "../../assets/comp.jpg";

const About = () => {
  return (
    <section id="about">
      {/* <h5>Summary</h5> */}
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={bucky} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiDiploma className="about__icon" />
              <h5>Education</h5>
              <small>3.7 GPA. Dean's Lister.</small>
            </article>

            {/* <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Performance</h5>
              <small>Top senior student</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Highly passionate about topics related to software design
            principles, web design, mobile app development, machine learning and
            relational databases. An avid learner who finds trial and error
            satisfying. More often than not, a curious tinkerer with varying scopes of interest.
          </p>

          {/* <a href="#contact" className="btn btn-primary">
            Contact me
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
