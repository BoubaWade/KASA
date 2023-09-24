import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/images/LOGO.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo de Kasa" />
      <Navigation />
    </div>
  );
};

export default Header;
