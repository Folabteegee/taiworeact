import React from "react";
import woman from "../images/woman.png";
import Vector1 from "../images/Vector1.png";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hello-wrapper">
        <div className="Vector 1">
          <img src={Vector1} alt="" />
        </div>

        <div className="hello">Hello!</div>
      </div>
      <div className="lolu">
        I'm <span className="taye">Tayelolu</span> ,
        <br /> Web Developer
      </div>

      <div className="heronote">
        "<br />
        Tayelolu’s Exceptional web development <br />
        ensure our website’s success.
        <br />
        Highly Recommended
      </div>

      <div className="heronote2">
        2Years
        <br />
        <span className="experience">Experience</span>
      </div>

      <div className="woman">
        <img src={woman} alt="alternatetext" />
      </div>
    </div>
  );
}
