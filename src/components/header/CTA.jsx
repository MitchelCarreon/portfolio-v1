import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download my CV</a>
      {/* <a href="#contact" className="btn btn-primary">Contact details</a> */}
    </div>
  );
};

export default CTA;
