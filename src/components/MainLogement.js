import React from "react";
import Carrousel from "./Carrousel";
import TagName from "./TagName";
import DropDownLarge from "./DropDownLarge";
import TitleLogement from "./TitleLogement";
import ProfileHost from "./ProfileHost";
import Stars from "./Stars";

const MainLogement = ({ dataFiltered }) => {
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
        <Stars dataFiltered={dataFiltered} />
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
