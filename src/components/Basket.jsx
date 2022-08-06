import React from 'react'

export default function Basket(props) {
  const {quantity=0} =props;

  console.log(quantity)
  return (
    <div className='basket'>
     <i className="material-icons ">shopping_basket</i>
     <sub>{quantity}</sub>
    </div>
  )
}
