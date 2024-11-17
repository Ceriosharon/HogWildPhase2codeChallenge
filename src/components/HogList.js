import React from "react";
import HogTile from "./HogTile";

function HogList({ hogData, hideHog }) {
  return (
    <div className="ui grid container">
      {hogData.map((hog) => (
        <HogTile key={hog.name} hog={hog} hideHog={hideHog} />
      ))}
    </div>
  );
}

export default HogList;
