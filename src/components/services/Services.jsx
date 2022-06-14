import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Services</h5>
      <h2>What I offer</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Game Design &amp; Mobile Apps</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Strategic approach on implementing game logic.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Intuitive UI that's convenient for users.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Applications &amp; UI Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experienced in trending client-side technologies (i.e., ReactJS)
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Fluent in reliable server-side frameworks (i.e., Flask) </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Knowledgeable in UI design tools (i.e., Figma) </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Data analysis and machine learning</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fluent in statistical methods.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficient in machine learning tools (i.e., NumPy) </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experienced in providing complex data via coherent infographics
                (i.e., Seaborn)
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
