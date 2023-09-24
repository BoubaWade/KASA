import arrow from "../assets/images/arrow.png";
import React, { useState } from "react";

const DropDownLarge = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="drop-down-large-container">
      <div className="title-and-arrow">
        <p>{title}</p>
        <img
          className={isActive ? "rotate" : ""}
          src={arrow}
          alt="flêche ouverture et férmeture "
          onClick={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
      <div className={"description " + (isActive ? "active" : "")}>
        {description}
      </div>
    </div>
  );
};

export default DropDownLarge;
