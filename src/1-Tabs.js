// Create a Tabs component in React with four city name tabs. On click of each tab show some content about that city.

import { useState } from "react";

const cities = [
  {
    city: "London",
    description: "London is capital of United Kingdom."
  },
  {
    city: "Paris",
    description: "Paris is capital of France."
  },
  {
    city: "Tokyo",
    description: "Tokyo is capital of Japan."
  },
  {
    city: "New York",
    description:
      "New York New York City was the capital of the United States from 1785 until 1790."
  }
];

export function Tabs() {
  const [cityDetails, setCityDetails] = useState({});

  function showCityDetails(cityDetails) {
    setCityDetails(cityDetails);
  }
  return (
    <>
      <h2 style={{ textAlign: "left" }}>Tabs</h2>
      <nav
        style={{
          textAlign: "left",
          border: "1px solid grey",
          display: "flex"
        }}
      >
        {cities.map((cityDetails) => (
          <button
            style={{
              flexGrow: "1",
              backgroundColor: "lightgreen",
              border: "1px solid black"
            }}
            onClick={() => showCityDetails(cityDetails)}
          >
            {cityDetails.city}
          </button>
        ))}
      </nav>
      {cityDetails.city && (
        <div style={{ border: "1px solid grey" }}>
          <h3>{cityDetails.city}</h3>
          <p>{cityDetails.description}</p>
        </div>
      )}
    </>
  );
}
