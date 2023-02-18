import React from "react";

function Ancients({ ancients, filterStructures }) {

  return (
    <div className="btn-container">
      {ancients.map((ancient, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            ket={index}
            onClick={() => filterStructures(ancient)}
          >
            {ancient}
          </button>
        );
      })}
    </div>
  )
}

export default Ancients