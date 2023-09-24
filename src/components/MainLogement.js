import React from "react";
import Carrousel from "./Carrousel";
import TagName from "./TagName";
import { STARS_ACTIVE, STARS_INACTIVE } from "../constants/starsConstants";
import DropDownLarge from "./DropDownLarge";
import TitleLogement from "./TitleLogement";
import ProfileHost from "./ProfileHost";

const MainLogement = ({ dataFiltered }) => {
  const starsActive = STARS_INACTIVE.slice(
    0,
    STARS_ACTIVE.length - dataFiltered.rating
  );
  const starsInactive = STARS_ACTIVE.slice(0, dataFiltered.rating);
  
  return (
    <section className="main-container">
      <Carrousel key={dataFiltered.id} pictures={dataFiltered.pictures} />
      <div className="title-and-description">
        <TitleLogement dataFiltered={dataFiltered} />
        <ProfileHost dataFiltered={dataFiltered} />

        <ul className="tags">
          {dataFiltered.tags.map((tag) => (
            <TagName key={tag} tag={tag} />
          ))}
        </ul>

        <ul className="stars">
          {starsInactive.map((star) => (
            <img key={crypto.randomUUID()} src={star} alt="" />
          ))}
          {starsActive.map((star) => (
            <img key={crypto.randomUUID()} src={star} alt="" />
          ))}
        </ul>

        <div className="description-container">
          <DropDownLarge
            title="Description"
            description={dataFiltered.description}
          />
          <DropDownLarge
            title="Équipements"
            description={dataFiltered.equipments.map((equi) => (
              <li key={equi}>{equi}</li>
            ))}
          />
        </div>
      </div>
    </section>
  );
};

export default MainLogement;
