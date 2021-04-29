import React from "react";
import { CoverHero, CoverImg } from "./Hero.element";

function Hero({ coverUrl, CoverImage }) {
  console.log("CoverImage", CoverImage);
  return (
    <div>
      {CoverImage === undefined ? (
        <CoverHero>
          <CoverImg src={coverUrl} />
        </CoverHero>
      ) : (
        <>
          <CoverHero img={coverUrl} />
        </>
      )}
    </div>
  );
}

export default Hero;
