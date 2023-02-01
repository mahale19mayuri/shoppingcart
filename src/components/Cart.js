import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart ,resetCart} from '../actions/cartAction';
import { useState } from 'react';
import Home from './Home';


function Cart() {
    const[total,setTotal]=useState(0);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
  
    const sum = cart.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
  
    function handleRemoveFromCart(id){
      console.log(id);
      dispatch(removeFromCart(id));
    }
    function handlerReset(){
      // console.log(id);
     
      dispatch(resetCart());
      alert("Success")
    }
    
    
    return (
      <div>
        
  
          <h2 className='App'>My Cart</h2>
          <div className="maindiv">
          {cart.length==0?<h3>No item in cart</h3>:null}
        <div className="smallitems">
        {cart.map((d)=>{
              return (<div className="mainitembox">
                  <div className="image"><img className='img' src={d.images[0]} /></div>
                  <div className="title">Title :{d.title.substring(1, 10)}</div>
                  <div className="price"> Price :$ {d.price}</div>
                  <button className='rebtn'  onClick={()=>handleRemoveFromCart(d.id)}>Remove from Cart</button>
              </div> )     
        })
        }
        </div>
       
        <div className="carttotal">
        <h3 className='h3'>checkout list</h3>
        <ol>
        {cart.map((d)=>{
         
              return (
                
         
            <li>{d.title}: <span className='prices'>{d.price}</span></li>
            )
        })
      }
          </ol>
          
          <hr />
          <h5>total:   <span className='total'>{sum}</span></h5> 
          
          <button  className='btn' onClick={handlerReset}>click to checkout</button>
        </div>
        
      </div>
      </div>
    )
  }
  
  export default Cart