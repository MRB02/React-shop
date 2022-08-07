import React from "react";

export default function BasketItem(props) {
  const {id, name, price, quantity, incrementQuantity, decrementQuantity} = props;
  return(
    <>
    <li className="collection-item">
      {name} x{quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <button className="waves-effect waves-light btn btnq" onClick={() => incrementQuantity(id)}>
          <i className="material-icons left">exposure_plus_1</i>add
        </button>
        <button
          className="waves-effect waves-light btn btnq"
          onClick={() => decrementQuantity(id)}
        style={{margin: '0px 10px'}}>
          <i className="material-icons left">exposure_minus_1</i>remove
        </button>
        <button className='waves-effect waves-light btn btnq'
           onClick={() => props.removeFromBasket(id)}
        >
          <i className="material-icons basket-delete">delete_forever</i> delete
        </button>
      </span>
    </li>
    </>
  )
}