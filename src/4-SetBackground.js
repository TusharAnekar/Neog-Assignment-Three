import { useState } from "react";

// Create a select dropdown that updates the background color of the page when a new color is selected.
export function SetBackground() {
  const [selectorBackgroundColor, setSelectorBackgroundColor] = useState();

  function getBackgroundColor(event) {
    setSelectorBackgroundColor(event.target.value);
  }
  return (
    <>
      <h2>Set Background Color</h2>
      <div
        style={{ backgroundColor: selectorBackgroundColor, height: "100px" }}
      >
        <select id="color-selector" onChange={getBackgroundColor}>
          <option value="white">White</option>
          <option value="pink">Pink</option>
          <option value="tomato">Tomato</option>
          <option value="aquamarine">Aqua Marine</option>
        </select>
      </div>
    </>
  );
}
