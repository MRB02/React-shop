import React from 'react'
import GetItem from './GetItem';

export default function GetList(props) {
    const {goods} = props
  return (
    
    goods.map(good => 
    (
        <GetItem good={good} key={good.id}/>
    )
    )
  )
}
