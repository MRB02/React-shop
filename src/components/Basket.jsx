import React from 'react'

export default function Basket(props) {
  const {quantity=0, HandleCartHas} =props;
  
  return (
    <div className='basket' onClick={()=>HandleCartHas()}>
     <i className="material-icons ">shopping_basket</i>
     <sub>{quantity}</sub>
    </div>
  )
}
