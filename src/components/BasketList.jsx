import React from 'react'
import BasketItem from './BasketItem';

export default function BasketList(props) {
    const {order, HandleClose}=props;

    const TotalPrice = order.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price * currentValue.quantity
    }, 0)
  return (
    <div className='basket-list'>
        <ul className="collection with-header">
        <li className="collection-item active"><h4>Basket</h4></li>
        {order.map(item => (
            <BasketItem key={item.id} {...item}/>
        ))}
        <li className='collection-item active'>Total Price: {TotalPrice} </li>
        <i className='material-icons close' onClick={()=> HandleClose()}>close</i>
      </ul>
    </div>
  )
}
