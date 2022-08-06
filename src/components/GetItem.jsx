import React from 'react'

export default function GetItem(props) {

const {id,name, description, full_background, price, addToCart } = props;


  return (
        <div className="card" key={id}>
            <img src={full_background} alt={name} />
            <div className="title p-2">
                <span><h3>{name}</h3></span>
                <span><p>{description}</p></span>
            </div>
            <hr />
            <div className="btn_price d-flex justify-content-between align-items-center p-3">
                <button className='btn btn-primary' onClick={()=>addToCart({id, name, price})}>Buy</button>
                 <h6>{price}$</h6>
            </div> 
        </div>
  )
}
