import React from "react";
import { STARS_ACTIVE, STARS_INACTIVE } from "../constants/starsConstants";

const Stars = ({ dataFiltered }) => {
  const starsActive = STARS_INACTIVE.slice(
    0,
    STARS_ACTIVE.length - dataFiltered.rating
  );
  const starsInactive = STARS_ACTIVE.slice(0, dataFiltered.rating);
  return (
    <ul className="stars">
      {starsInactive.map((star) => (
        <img key={crypto.randomUUID()} src={star} alt="" />
      ))}
      {starsActive.map((star) => (
        <img key={crypto.randomUUID()} src={star} alt="" />
      ))}
    </ul>
  );
};

export default Stars;
