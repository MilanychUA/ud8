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
const INITIAL_DISCOUNTS = [
  {
    id: 1,
    idItem: "Nike",
    discount: 10,
    expdate: "2021 June 04",
  },
  {
    id: 2,
    idItem: "Puma",
    discount: 50,
    expdate: '2020-10-10',
  },
  {
    id: 3,
    idItem: "Adidas",
    discount: 25,
    expdate: "2022-10-04",
  },
];
const ItemsDataProvider = (props) => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [discounts, setDiscounts] = useState(INITIAL_DISCOUNTS);
  const [cart, setCart] = useState([]);
  const [isBtValid, setIsBtValid] = useState(true);
  const [isShowDiscount, setIsShowDiscount] = useState(false);
  const [isShowAddNewItem, setIsShowAddNewItem] = useState(false);
  const [totalCost, setTotlaCost] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);


  let updRowCart;
  let updCart;
  let updRowItem;
  let updItem;
  let disc = 0;

  const addItemToCart = (item) => {
    const res = cart.findIndex((el) => el.id === item.id);

    const resD = discounts.findIndex(ds => ds.idItem === item.brand)
    if (resD !== -1) {disc=discounts[resD].discount/100}
    // console.log(items[0].amount)
    if (res === -1) {
      setCart([...cart, item]);
      // setCart((prevState) => {
      //   return [...prevState, item]
      // })
      const res2 = items.findIndex((el) => el.id === item.id);
      updRowItem = items[res2];
      updRowItem = { ...updRowItem, amount: updRowItem.amount - 1 };
      updItem = [...items];
      updItem[res2] = updRowItem;
      setTotlaCost(totalCost+item.amount*item.price)
      setTotalDiscount(totalDiscount+item.amount*item.price*disc)
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
      setTotlaCost(totalCost+1*item.price)
      setTotalDiscount(totalDiscount+1*item.price*disc)
      if (items[res].amount === 1) {setIsBtValid(false);}
    }

  };
  const addItemToBase = (item) => {
    setItems([...items,item])
}
  const removeItemFromCart = (id,brand,price) => {
    const res = cart.findIndex((ct) => ct.id === id);
    const res2 = items.findIndex((ct) => ct.id === id);
    const resD = discounts.findIndex(ds => ds.idItem === brand)
    if (resD !== -1) {disc=discounts[resD].discount/100}
    setTotlaCost(totalCost-1*price)
    setTotalDiscount(totalDiscount-1*price*disc)

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
  const addItemFromCart = (id, brand,price) => {
    const res = cart.findIndex((ct) => ct.id === id);
    const res2 = items.findIndex((ct) => ct.id === id);

    const resD = discounts.findIndex(ds => ds.idItem === brand)
    if (resD !== -1) {disc=discounts[resD].discount/100}
    setTotlaCost(totalCost+1*price)
    setTotalDiscount(totalDiscount+1*price*disc)
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
const showDiscount = () => {
  setIsShowDiscount(!isShowDiscount)
}
const showNewItem = () => {
  setIsShowAddNewItem(!isShowAddNewItem)
}
  const itemsData = {
    items,
    cart,
    isBtValid,
    discounts,
    isShowDiscount,
    isShowAddNewItem,
    totalCost,
    totalDiscount,
    addItemToCart,
    removeItemFromCart,
    addItemFromCart,
    showDiscount,
    addItemToBase,showNewItem
  };
  return (
    <ItemsData.Provider value={itemsData}>{props.children}</ItemsData.Provider>
  );
};
export default ItemsDataProvider;
