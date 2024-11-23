import React, { useState } from "react";

const AddItemForm = ({ addItem }) => {
  const [ItemName, setItemName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ItemName) {
      addItem(ItemName);
      setItemName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={ItemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter Item name"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
