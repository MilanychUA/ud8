import React, { useState } from "react";
import ItemsData from "./items-context";
const INITIAL_ITEMS = [
  {
    id: 1,
    amount: 10,
    price: 100,
    isSale: true,
    title: "Best for run",
    brand: "Nike",
  },
  {
    id: 2,
    amount: 20,
    price: 30.4,
    isSale: true,
    title: "Best for run",
    brand: "Nike",
  },
  {
    id: 3,
    amount: 10,
    price: 50.5,
    isSale: true,
    title: "Best for run",
    brand: "Nike",
  },
  {
    id: 4,
    amount: 30,
    price: 20,
    isSale: true,
    title: "Best for run",
    brand: "Puma",
  },
  {
    id: 5,
    amount: 40,
    price: 200,
    isSale: false,
    title: "Best for run",
    brand: "Puma",
  },
  {
    id: 6,
    amount: 20,
    price: 44.4,
    isSale: false,
    title: "Best for run",
    brand: "Adidas",
  },
  {
    id: 7,
    amount: 10,
    price: 30,
    isSale: true,
    title: "Best for run",
    brand: "Adidas",
  },
];

const ItemsDataProvider = (props) => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [cart, setCart] = useState([]);
  const [isBtValid, setIsBtValid] = useState(true);
  let updRowCart;
  let updCart;
  let updRowItem;
  let updItem;

  const addItemToCart = (item) => {
    const res = cart.findIndex((el) => el.id === item.id);
    if (res === -1) {
      setCart([...cart, item]);
      const res2 = items.findIndex((el) => el.id === item.id);
      updRowItem = items[res2];
      updRowItem = { ...updRowItem, amount: updRowItem.amount - 1 };
      updItem = [...items];
      updItem[res2] = updRowItem;
      setItems(updItem);
    } else {
      updRowCart = cart[res];
      updRowCart = { ...updRowCart, amount: updRowCart.amount + 1 };
      updCart = [...cart];
      updCart[res] = updRowCart;
      setCart(updCart);

      const res2 = items.findIndex((el) => el.id === item.id);
      updRowItem = items[res2];
      updRowItem = { ...updRowItem, amount: updRowItem.amount - 1 };
      updItem = [...items];
      updItem[res2] = updRowItem;
      setItems(updItem);
    }
  };

  const removeItemFromCart = (id) => {
    const res = cart.findIndex((ct) => ct.id === id);
    const res2 = items.findIndex((ct) => ct.id === id);
    updRowCart = cart[res];
    if (updRowCart.amount !== 1) {
      updRowCart = { ...updRowCart, amount: updRowCart.amount - 1 };
      updCart = [...cart];
      updCart[res] = updRowCart;
      setCart(updCart);

      updRowItem = items[res2];
      updRowItem = { ...updRowItem, amount: updRowItem.amount + 1 };
      updItem = [...items];
      updItem[res2] = updRowItem;
      setItems(updItem);

      setIsBtValid(true);
    } else {
      updRowItem = items[res2];
      updRowItem = { ...updRowItem, amount: updRowItem.amount + 1 };
      updItem = [...items];
      updItem[res2] = updRowItem;
      setItems(updItem);
      updCart = cart.filter((ct) => ct.id !== id);
      setCart(updCart);
    }
  };
  const addItemFromCart = (id) => {
    const res = cart.findIndex((ct) => ct.id === id);
    const res2 = items.findIndex((ct) => ct.id === id);
    updRowCart = cart[res];
    updRowCart = { ...updRowCart, amount: updRowCart.amount + 1 };
    updCart = [...cart];
    updCart[res] = updRowCart;
    setCart(updCart);

    updRowItem = items[res2];
    if (updRowItem.amount !== 1) {
      updRowItem = { ...updRowItem, amount: updRowItem.amount - 1 };
      updItem = [...items];
      updItem[res2] = updRowItem;
      setItems(updItem);
    } else {
      updRowItem = { ...updRowItem, amount: updRowItem.amount - 1 };
      updItem = [...items];
      updItem[res2] = updRowItem;
      setItems(updItem);
      setIsBtValid(false);
    }
  };

  const itemsData = {
    items,
    cart,
    isBtValid,
    addItemToCart,
    removeItemFromCart,
    addItemFromCart,
  };
  return (
    <ItemsData.Provider value={itemsData}>{props.children}</ItemsData.Provider>
  );
};
export default ItemsDataProvider;
