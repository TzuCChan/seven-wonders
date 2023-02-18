import React from "react";

const Wonders = ({ structures }) => {
  return (
    <div className="section-center">
      {structures.map((wondersStructure) => {
        const { id, name, construction, builders, destruction, cause, location, img } = wondersStructure;
        return (
          <article key={id} className="Wonders-structure">
            <img src={img} alt={name} className="photo" />
            <div className="structure-info">
              <header>
                <h4>{name}</h4>
                <h4 className="location">${location}</h4>
              </header>
              <p className="structure-text">{builders}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Wonders;