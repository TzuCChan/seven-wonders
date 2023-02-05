import React from "react";

const Wonders = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((wondersItem) => {
        const { id, name, construction, builders, destruction, cause, location, img } = wondersItem;
        return (
          <article key={id} className="Wonders-item">
            <img src={img} alt={name} className="photo" />
            <div className="item-info">
              <header>
                <h4>{name}</h4>
                <h4 className="location">${location}</h4>
              </header>
              <p className="item-text">{builders}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Wonders;