import React from "react";
import woman from "../images/woman.png";
import Vector1 from "../images/Vector1.png";
import Quote from "../icons/Quote";
import Stars from "../icons/Stars";
import Arrow from "../icons/Arrow";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hello-wrapper">
        <div className="hello">Hello!</div>
      </div>

      <div className="Vec1-wrapper">
        <div className="Vector1">
          <img src={Vector1} alt="" />
        </div>
      </div>

      <div className="lolu">
        I'm <span className="taye">Tayelolu</span> ,
        <br /> Web Developer
      </div>

      <div className="quoted-words">
        <div className="quotation">
          <Quote />
        </div>
        <div className="heronote">
          Tayelolu’s Exceptional web development <br />
          ensure our website’s success.
          <br />
          Highly Recommended
        </div>
      </div>

      <div className="woman">
        <img src={woman} alt="alternatetext" />
      </div>
      <div className="star-words">
        <div className="stars">
          <Stars />
          <Stars />
          <Stars />
          <Stars />
          <Stars />
        </div>
        <div className="exp-word">
          <span className="years">2 Years</span>
          <br />
          Experience
        </div>
      </div>

      <div className="folio-hire__wrapper">
        <div className="portfolio-wrapper">
          <div className="portfolio">Portfolio </div>
          <Arrow />
        </div>
        <div className="hire-wrapper">
          <div className="hire">Hire me</div>
        </div>
      </div>
    </div>
  );
}
