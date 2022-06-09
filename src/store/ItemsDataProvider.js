import React, { useState } from "react";
import ItemsData from "./items-context";
const INITIAL_ITEMS = [
  {
    id: 1,
    amount: 10,
    price: 100,
    onStock: true,
    title: "Best for run",
    brand: "Nike",
  },
  {
    id: 2,
    amount: 20,
    price: 30.4,
    onStock: true,
    title: "Best for run",
    brand: "Nike",
  },
  {
    id: 3,
    amount: 10,
    price: 50.5,
    onStock: true,
    title: "Best for run",
    brand: "Nike",
  },
  {
    id: 4,
    amount: 30,
    price: 20,
    onStock: true,
    title: "Best for run",
    brand: "Puma",
  },
  {
    id: 5,
    amount: 40,
    price: 200,
    onStock: false,
    title: "Best for run",
    brand: "Puma",
  },
  {
    id: 6,
    amount: 20,
    price: 44.4,
    onStock: false,
    title: "Best for run",
    brand: "Adidas",
  },
  {
    id: 7,
    amount: 10,
    price: 30,
    onStock: true,
    title: "Best for run",
    brand: "Adidas",
  },
];

const ItemsDataProvider = (props) => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    const res = cart.find((el) => el.id === item.id);
    if (!res) {
      setCart([...cart, item]);
    } else {
    }
  };
  console.log(INITIAL_ITEMS);

  const itemsData = { items, cart, addItemToCart };
  return (
    <ItemsData.Provider value={itemsData}>{props.children}</ItemsData.Provider>
  );
};
export default ItemsDataProvider;
