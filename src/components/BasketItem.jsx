import React from "react";

export default function BasketItem(props) {
    const { name, quantity, price} =props
  return (
    <li className="collection-item">
      <div>
        {name} X {quantity} = {price * quantity}  <b>$</b>
        <a href="#!" className="secondary-content">
          <i className="material-icons">delete_forever</i>
        </a>
      </div>
    </li>
  );
}
