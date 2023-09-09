// Create a slider input in React which will set the border radius of a card on a change in the value of the range.

import { useState } from "react";

export function Card() {
  const [borderRadius, setBorderRadius] = useState(0);
  function getBorderRadius(event) {
    setBorderRadius(event.target.value);
  }

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          borderRadius: `${borderRadius}px`,
          marginTop: "20px",
          paddingBottom: "30px"
        }}
      >
        <h2>Card with Rounded Corners</h2>
        <label>Border Radius: </label>
        <input
          type="range"
          defaultValue={borderRadius}
          onChange={getBorderRadius}
        ></input>
      </div>
    </>
  );
}
