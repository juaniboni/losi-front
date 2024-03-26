import React from "react";
import Marquee from "react-fast-marquee";
import "./ScrollingText.css";

const ScrollingText = () => {
  return (
    <div className="scrolling-text">
      <Marquee>
        <div className="scrolling-text--inner direction-left">
          <div className="scrolling-text--item">
            <span className="skate-promo">* SPECIAL SALE *</span>
          </div>
          <div className="scrolling-text--item">
            <span className="skate-text">SKATEBOARDING PROMO</span>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default ScrollingText;
