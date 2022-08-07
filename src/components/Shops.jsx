import React, { useState, useEffect } from "react";
import { Api_KEY, Api_URL } from "./Config";
import Loader from "./Loader";
import GetList from "./GetList";
import Basket from "./Basket";
import BasketList from "./BasketList";

export default function Shops() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const [order, setOrder] = useState([]);

  const [isCartHas, setCartHas] =useState(false);




  const HandleCartHas =()=>{
    return setCartHas(!isCartHas)
  }


  const addToCart = (PropsOfItem) => {
    const itemIndex = order.findIndex(
      (orderedItem) => orderedItem.id === PropsOfItem.id
    );

    if (itemIndex < 0) {
      const newItem = {
        ...PropsOfItem,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } 
    else if(itemIndex>0) {
      const newOrder = order.map((orderedItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderedItem,
            quantity: orderedItem.quantity + 1,
          };
        } else {
          return PropsOfItem;
        }
      });

      setOrder(newOrder);
    }
  };

  useEffect(() => {
    fetch(Api_URL, {
      headers: {
        Authorization: Api_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      <Basket quantity={order.length} HandleCartHas={HandleCartHas} />
      {loading ? <Loader /> : <GetList goods={goods} addToCart={addToCart} />}
      {isCartHas && <BasketList order={order} HandleClose={HandleCartHas}  />}
    </div>
  );
}
