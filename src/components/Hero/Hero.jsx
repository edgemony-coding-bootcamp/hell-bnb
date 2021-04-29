import React from "react";
import CoverHero from "./Hero.element";

function Hero({ coverUrl }) {
  return (
    <div>
      <CoverHero img={coverUrl} />
    </div>
  );
}

export default Hero;
