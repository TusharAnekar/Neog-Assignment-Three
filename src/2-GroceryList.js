import { useState } from "react";

// Create a list of Grocery list items with checkboxes and as the user checks out the item those checked-out items should be listed in another section named ‘Completed list’. Add the list of items via an input field.
export function GroceryList() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();
  const [completedItems, setCompletedItems] = useState([]);

  function handleItemChange(event) {
    setItem(event.target.value);
  }

  function addItem() {
    if (item?.length && !items.includes(item)) {
      setItems([...items, item]);
    }
    setItem("");
  }
  function completeItem(event) {
    setItems(items.filter((item) => item !== event.target.value));
    setCompletedItems([...completedItems, event.target.value]);
  }

  return (
    <>
      <h2>Grocery List</h2>
      <label style={{ textAlign: "left" }}>
        Add item:
        <input
          type="text"
          value={item}
          onChange={handleItemChange}
          style={{ textAlign: "left" }}
        ></input>
      </label>

      <button onClick={addItem}>Add</button>

      <div style={{ textAlign: "left" }}>
        {items.map((item) => (
          <li style={{ margin: "5px" }}>
            <input
              type="checkbox"
              value={item}
              onClick={completeItem}
              checked={false}
            ></input>
            <label>{item}</label>
          </li>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <h3>Completed List</h3>
        {!!completedItems.length &&
          completedItems.map((item) => (
            <li style={{ margin: "5px" }}>{item}</li>
          ))}
      </div>
    </>
  );
}
