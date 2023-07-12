import React from "react";
import "./Hero.css";
import LeftLogo from "./HeroImages/left.png";
import RightLogo from "./HeroImages/right.png";

export default function Hero() {
  return (
    <div className="hero-main">
      <div className="hero">
        <div className="hero__left">
          <img src={LeftLogo} alt="img" />
        </div>
        <div className="hero__middle">
          <div className="heading">
            Find & Search <br /> You Dream School
          </div>
          <div className="sub-heading">
            "Dream big, excel beyond limits - Welcome to Your Dream School!"
          </div>
          <div className="button">
            <input type="tel" id="phone" name="phone" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div>
        <div className="hero__right">
          <img src={RightLogo} alt="img" />
        </div>
      </div>
    </div>
  );
  return <div></div>;
}
