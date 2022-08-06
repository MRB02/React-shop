import React from 'react'
import GetItem from './GetItem';

export default function GetList(props) {
    const {goods =[], addToCart} = props

    if(!goods.length){
      return <h2>Nothing Found</h2>
    }
    return (
    
    goods.map( good => 
    (
        <GetItem key={good.id} {...good} addToCart={addToCart}/> /// shu yerga xushyor qaraymiz
     )
    )
  )
}
