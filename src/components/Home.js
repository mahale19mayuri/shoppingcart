import React from 'react'
import  "./home.css"
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../actions/cartAction';


export default function Home({data}) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
      console.log(product);
        dispatch(addProductToCart(product));
      };    
    
  return (
    <div>
        <h2 className='App'>All Items</h2>
      <div className="smallitems">
      {data.map((d)=>{
            return (<div className="mainitembox">
                <div className="image"><img className='img' src={d.images[0]} /></div>
                <div className="title">Title :{d.title.substring(1, 10)}</div>
                <div className="price"> Price :$ {d.price}</div>
                <button className='rebtn'  onClick={()=>handleAddToCart(d)}>Add To Cart</button>
            </div> )     
      })
      }
    </div>
    </div>
  )
}