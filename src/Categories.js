import React from "react";

function Categories({ Categories, filterItems }) {

  return (
    <div className="btn-container">
      {Categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            ket={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  )
}

export default Categories