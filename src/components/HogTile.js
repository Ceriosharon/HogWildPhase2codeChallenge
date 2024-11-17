import React, { useState } from "react";

function HogTile({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui card eight wide column">
      <div className="image" onClick={() => setShowDetails((prev) => !prev)}>
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <h3 className="header">{hog.name}</h3>
      </div>

      {showDetails && (
        <div className="extra content">
          <p>
            <strong>Specialty:</strong> {hog.specialty}
          </p>
          <p>
            <strong>Weight:</strong> {hog.weight} lbs
          </p>
          <p>
            <strong>Greased:</strong> {hog.greased ? "Yes" : "No"}
          </p>
          <p>
            <strong>Highest Medal Achieved:</strong> {hog["highest medal achieved"]}
          </p>
        </div>
      )}

      <button className="ui button" onClick={() => hideHog(hog.name)}>
        Hide
      </button>
    </div>
  );
}

export default HogTile;
