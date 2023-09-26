import "../styles/components/_navigation.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          className={(nav) => "nav-link" + (nav.isActive ? " nav-active" : "")}
          to="/"
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          className={(nav) => "nav-link" + (nav.isActive ? " nav-active" : "")}
          to="/about"
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
