import React from "react";

const Wonders = ({ structures }) => {
  return (
    <div className="section-center">
      {structures.map((wondersStructure) => {
        const { id, name, construction, builders, destruction, cause, location, img } = wondersStructure;
        return (
          <article key={id} className="wonders-structure">
            <img src={img} alt={name} className="photo" />
            <div className="structure-info">
              <header>
                <h4>{name}</h4>
              </header>
                <h4 className="location">location: {location}</h4>  
                <p className="structure-text">Builders: {builders}</p>
                <p className="structure-text">Construction: {construction}</p>
                <p className="structure-text">Destruction: {destruction}</p>
                <p className="structure-text">Cause: {cause}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Wonders;