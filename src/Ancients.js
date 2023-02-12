import React from "react";

function Ancients({ ancients, filterItems }) {

  return (
    <div className="btn-container">
      {ancients.map((ancient, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            ket={index}
            onClick={() => filterItems(ancient)}
          >
            {ancient}
          </button>
        );
      })}
    </div>
  )
}

export default Ancients