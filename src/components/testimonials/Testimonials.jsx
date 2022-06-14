import React from "react";
import "./Testimonials.css";

import ADTAALoginPage from "../../assets/project-screenshots/ADTAA/LoginPageADTAA.png";
import ADTAASetupPage from "../../assets/project-screenshots/ADTAA/SetupPageADTAA.png";
import ADTAARegistrationPage from "../../assets/project-screenshots/ADTAA/RegistrationPageADTAA.png";
import ADTAAAssistantPage from "../../assets/project-screenshots/ADTAA/AssistantPageADTAA.png";
import ADTAASetupSectionsForm from "../../assets/project-screenshots/ADTAA/SetupSectionsFormADTAA.png";

import CYOAGameplayScreens from "../../assets/project-screenshots/CYOA-mobile/GameplayCYOA.png";
import CYOALoginRegisterScreens from "../../assets/project-screenshots/CYOA-mobile/LoginRegisterCYOA.png";

import ContraEnemyShooting from "../../assets/project-screenshots/Contra-game/ContraEnemyShooting.png";
import ContraBridgePosition from "../../assets/project-screenshots/Contra-game/ContraBridgePosition.png";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  // ADTAA
  {
    avatar: ADTAASetupPage,
    name: "ADTAA-Setup-Page",
    review: "Complex. Implemented",
  },
  {
    avatar: ADTAARegistrationPage,
    name: "ADTAA-Registration-Page",
    review: "Basic. Implemented.",
  },
  {
    avatar: ADTAASetupSectionsForm,
    name: "ADTAA-Sections-Form",
    review: "Complex. Implemented",
  },
  {
    avatar: ADTAAAssistantPage,
    name: "ADTAA-Assistant-Page",
    review: "Complex. Implemented",
  },
  // CYOA
  {
    avatar: CYOAGameplayScreens,
    name: "CYOA-Gameplay-Screens",
    review: "Basic. Implemented",
  },
  {
    avatar: CYOALoginRegisterScreens,
    name: "CYOA-Login-Register-Screens",
    review: "Complex. Implemented",
  },
  // Contra
  {
    avatar: ContraEnemyShooting,
    name: "Contra-Enemy-Shooting",
    review: "Intermediate. Implemented",
  },
  {
    avatar: ContraBridgePosition,
    name: "Contra-Bridge-Position",
    review: "Intermediate. Implemented",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Screenshots</h5>
      <h2>Projects Overview</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              {/* <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
