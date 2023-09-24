import { NavLink } from "react-router-dom";
import React from "react";

const Card = ({ id, title, cover }) => {
  return (
    <li className="card">
      <NavLink to={`/logement/${id}`} className="card-link">
        <img
          className="card-image"
          src={cover}
          alt="aperçu de la page du logement"
        />
        <h3 className="card-title-location">{title}</h3>
      </NavLink>
    </li>
  );
};

export default Card;
