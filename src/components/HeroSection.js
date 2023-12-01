import React from "react";
import woman from "../images/woman.png";
import Vector1 from "../images/Vector1.png";
import Quote from "../icons/Quote";
import Stars from "../icons/Stars";
import Arrow from "../icons/Arrow";
import "../styles/hero.css";

// BEM - Block Element Modifier
//  To write the css -> block__element--modifier

//difference between block and inline elemnet

export default function HeroSection() {
  return (
    <div className="hero">
      {/* --------hero heading start------  */}
      <div className="hero__heading center">
        <div className="hero__heading--content">Hello !</div>
        <div>
          <img src={Vector1} alt="" />
        </div>
      </div>
      {/* --------hero heading stops------  */}
      {/* ----------description starts--------------  */}
      <div className="hero__description">
        <div className="center ">
          I am &nbsp; <span className="orange"> Jenny</span>,
        </div>
        <div className="center">Product Designer</div>
      </div>
      {/* ------------description stops-------------------  */}

      <div className="hero__content">
        <div className="hero__content--1">
          <div className="quote">
            <Quote />
          </div>
          <div>
            Jenny’s Exceptional product design ensure our website’s
            success.Highly Recommended
          </div>
        </div>
        <div className="hero__content--2">
          <img src={woman} alt="woman" className="hero__content--image" />
        </div>
        <div className="hero__content--3">
          <div className="stars">
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <Stars />
          </div>
          <div>10years</div>
          <div>Experience</div>
        </div>
      </div>
    </div>
  );
}
