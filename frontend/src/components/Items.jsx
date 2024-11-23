import React, { useEffect, useState } from "react";
import AddItemForm from "./AddItemForm";
import api from "../api";

const ItemList = () => {
  const [Items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await api.get("/Items");
      setItems(response.data.Items);
    } catch (error) {
      console.error("Error fetching Items", error);
    }
  };

  const addItem = async (ItemName) => {
    try {
      await api.post("/Items", { name: ItemName });
      fetchItems(); // Refresh the list after adding a Item
    } catch (error) {
      console.error("Error adding Item", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {Items.map((Item, index) => (
          <li key={index}>{Item.name}</li>
        ))}
      </ul>
      <AddItemForm addItem={addItem} />
    </div>
  );
};

export default ItemList;
