import "../styles/components/_banner.scss";
import imgBanner from "../assets/images/img-banner.png";
import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <img className="img-banner" src={imgBanner} alt="bannière" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default Banner;
