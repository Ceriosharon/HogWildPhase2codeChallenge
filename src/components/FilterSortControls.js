import React from "react";

function FilterSortControls({ showGreased, setShowGreased, setSortBy }) {
  return (
    <div className="ui segment">
      <h2>Filter and Sort</h2>
      <div className="ui form">
        <div className="inline field">
          <label>
            Show Greased:
            <input
              type="checkbox"
              checked={showGreased}
              onChange={() => setShowGreased((prev) => !prev)}
            />
          </label>
        </div>
        <div className="ui buttons">
          <button className="ui button" onClick={() => setSortBy("name")}>
            Sort by Name
          </button>
          <button className="ui button" onClick={() => setSortBy("weight")}>
            Sort by Weight
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSortControls;
