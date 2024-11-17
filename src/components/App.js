import React, { useState, useMemo } from "react";
import hogs from "../porkers_data";
import Nav from "./Nav";
import HogList from "./HogList";
import AddHogForm from "./AddHogForm";
import FilterSortControls from "./FilterSortControls";

function App() {
  const [hogData, setHogData] = useState(hogs);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState([]);

  // Filter and sort logic
  const filteredAndSortedHogs = useMemo(() => {
    const visibleHogs = hogData.filter(
      (hog) =>
        (showGreased ? hog.greased : true) && !hiddenHogs.includes(hog.name)
    );

    return [...visibleHogs].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "weight") return a.weight - b.weight;
      return 0;
    });
  }, [hogData, showGreased, sortBy, hiddenHogs]);

  // Handlers
  const addHog = (newHog) => setHogData((prev) => [...prev, newHog]);

  const hideHog = (hogName) => setHiddenHogs((prev) => [...prev, hogName]);

  return (
    <div className="App">
      <Nav />
      <div className="ui container">
        {/* Filter and Sort Controls */}
        <FilterSortControls
          showGreased={showGreased}
          setShowGreased={setShowGreased}
          setSortBy={setSortBy}
        />

        {/* Add Hog Form */}
        <AddHogForm addHog={addHog} />

        {/* Hog List */}
        <HogList hogData={filteredAndSortedHogs} hideHog={hideHog} />
      </div>
    </div>
  );
}

export default App;
