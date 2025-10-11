
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo-link">
        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Paradise Nursery logo" className="nav-logo-img" />
        <div>
          <h3>Paradise Nursery</h3>
          <i>Where Green Meets Serenity</i>
        </div>
      </Link>
      <ul className="nav-links">
        <li>
          <NavLink to="/products" className="nav-link">Plants</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-link cart-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="34" width="34">
              <rect width="256" height="256" fill="none"></rect>
              <circle cx="80" cy="216" r="12"></circle>
              <circle cx="184" cy="216" r="12"></circle>
              <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
            </svg>
            {totalQuantity > 0 && (
              <span className="cart-quantity-badge">{totalQuantity}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;