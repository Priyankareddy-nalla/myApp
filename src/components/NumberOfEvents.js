import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [numEvents, setNumEvents] = useState("32");
  const [error, setError] = useState("");

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumEvents(value);

    let infoText;
    if (isNaN(value) || value <= 0) {
      infoText = "Only positive numbers are allowed";
      setError(infoText);
    } else {
      infoText = "";
      setError(infoText);
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        className="number-of-events-input"
        value={numEvents}
        onChange={handleInputChanged}
      />
      {error && <div className="error-alert">{error}</div>}
    </div>
  );
};

export default NumberOfEvents;
