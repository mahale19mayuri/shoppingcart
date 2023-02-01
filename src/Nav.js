import React from 'react'
import  "./Nav.css"
import { Outlet, Link } from "react-router-dom";
function Nav() {
  return (
    <div>
       <div className="contentiner">
        <div className="heading"> <h2>Shopping app</h2></div>
        <div className="rightnav">
            <div className="home"><Link to="/" style={{color:'white',textDecoration:'none'}}>Home</Link></div>
            <div className="home">  <Link to="/cart" style={{color:'white',textDecoration:'none'}}>Cart</Link></div>
        </div>
        </div> 
    </div>
  )
}

export default Nav