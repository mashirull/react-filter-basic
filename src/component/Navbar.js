import React  from 'react'
import '../App.css';
import {NavLink} from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {

  const [activeItem, setActiveItem] = useState('order');
  return (
    <div className="navbar">
        <div className="left">
            <div className="logo">
                <img src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt="logo" />
               
                <h1>Kafene</h1>
            </div>
            <div className="menu-item">
                <ul>
                  <li className={activeItem === 'order' ? 'active' : ''} onClick={()=>setActiveItem('order')}>
                    <NavLink to= "/">Orders</NavLink>
                    
                  </li>
                  <li className={activeItem === 'product' ? 'active' : ''} onClick={()=>setActiveItem('product')}>
                    <NavLink to= "/product">Product</NavLink>
                    
                  </li>
                  <li className={activeItem === 'user' ? 'active' : ''} onClick={()=>setActiveItem('user')}>
                    <NavLink to= "/users">Users</NavLink>
                    
                  </li>
                  
                </ul>
            </div>

        </div>

    </div>
  );
};

export default Navbar;