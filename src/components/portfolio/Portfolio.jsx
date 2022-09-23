import React from "react";
import "./Portfolio.css";
import ADTAA from "../../assets/project-screenshots/ADTAA/ADTAACover.png"; // FIND IMAGE FOR EACH PROJECT
import placeholder from "../../assets/bucky_funny_face.jpg";
import CYOA from "../../assets/project-screenshots/CYOA-mobile/CYOACover.png";
import ContraClone from "../../assets/project-screenshots/Contra-game/ContraCover.png";
import PPMImages_OOP from "../../assets/project-screenshots/PPMImages/PPMCover.png";

const projects = [
  {
    id: 1,
    image: ADTAA,
    title: "Teaching scheduler web app",
    github: "https://github.com/MitchelCarreon/cpscadtaa",
    demo: "https://cpsc-adtaa.herokuapp.com/",
    demo_live: true,
    demo_disabled: false,
    description: `A web app that generates class schedules by matching them to instructors with the right expertise. 
    Users can create, store, and update info about instructors, courses and their corresponding classes. Developed with React and Flask.`,
  },
  {
    id: 2,
    image: CYOA,
    title: "Create-Your-Own-Adventure mobile app",
    github: "https://github.com/MitchelCarreon/app_test",
    demo: "https://youtu.be/yScORlq1f40",
    demo_live: false,
    demo_disabled: false,
    description: `An Android app for creating customizable, choice-based text games. 
    It allows users to create and store multiple interactive stories. 
    Story duration may vary and is entirely based on the user-configured choices picked by players. Developed with Java.`,
  },
  {
    id: 3,
    image: ContraClone,
    title: "Contra clone - Level 1",
    github: "https://github.com/MitchelCarreon/SDL_Beginner",
    demo: "https://youtu.be/HljXC7Cr-qg",
    demo_live: false,
    demo_disabled: false,
    description: `A clone of the 80s game, Contra. 
    It has the original's basic features:
    jumping, running, crouching, and shooting. 
    This varies from the original in that players can obtain a power-up that allows sniping when crouched. 
    Getting hit forfeits this ability. Developed with C++ and SDL.
    `,
  },
  {
    id: 4,
    image: PPMImages_OOP,
    title: "Describing OOP via .ppm images",
    github: "https://github.com/MitchelCarreon/python_cpp/blob/master/README.pdf",
    demo: "https://github.com/MitchelCarreon/python_cpp",
    demo_live: false,
    demo_disabled: true,
    description: `
    Contrasting object-oriented coding practices to procedural programming.
    A portrayal of good software design principles. Written in C++ and Python.
    `,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      {/* <h5>My recent work</h5> */}
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {projects.map(
          ({ id, image, title, github, demo, demo_live, demo_disabled, description }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    style={demo_disabled ? {display: 'none'} : {}}
                  >
                    {demo_live ? "Live Demo" : "App Demo"}
                  </a>
                </div>
                <div>
                  <h4 style={{ fontWeight: "normal" }}>{description}</h4>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
