import React, { useState } from "react";
import prevButton from "../assets/images/prev-button.png";
import nextButton from "../assets/images/next-button.png";

const Carrousel = ({ pictures }) => {
  const [index, setIndex] = useState(1);

  function sliderImage(indexImage) {
    let indexCurrent;
    if (indexImage + index > pictures.length) {
      indexCurrent = 1;
    } else if (indexImage + index < 1) {
      indexCurrent = pictures.length;
    } else {
      indexCurrent = indexImage + index;
    }
    setIndex(indexCurrent);
  }
  return (
    <ul className="carrousel-container">
      {
        <li key={index} className="image-carrousel">
          <img src={pictures[index - 1]} alt="" />
        </li>
      }
      {pictures.length > 1 && (
        <>
          <button onClick={() => sliderImage(-1)} className="previous-button">
            <img src={prevButton} alt="previousimage" />
          </button>
          <button onClick={() => sliderImage(1)} className="next-button">
            <img src={nextButton} alt="nextimage" />
          </button>
          <p className="index-image">
            {index}/{pictures.length}
          </p>
        </>
      )}
    </ul>
  );
};

export default Carrousel;
