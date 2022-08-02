import React, {useState, useEffect} from 'react'
import { Api_KEY, Api_URL } from './Config'
import Loader from './Loader'
import GetList from './GetList';

export default function Shops() {

    const [goods, setGoods] =useState([])
    const [loading, setLoading] =useState(true)

useEffect(()=>{

    fetch(Api_URL, {
        headers: {
            Authorization: Api_KEY,
        }
    }).then((response)=> response.json()).then((data)=>{
        data.featured && setGoods(data.featured);
        setLoading(false)
    })


}, [])


  return (
    <div className='container content'>
       {loading ? <Loader/> :
       <GetList goods={goods}/>
       }
    </div>
  )
}
