import React from "react";
import imgBannerAbout from "../assets/images/img-banner-about.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DropDownLarge from "../components/DropDownLarge";
import dropDownConstants from "../constants/dropDownConstants";

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <div className="banner">
        <img className="img-banner" src={imgBannerAbout} alt="bannière" />
      </div>
      {dropDownConstants.map(({ id, title, description }) => (
        <DropDownLarge key={id} title={title} description={description} />
      ))}
      <Footer />
    </div>
  );
};

export default About;
