// Navbar.js
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Page.css';
import Cart from './Cart'; // Import the Cart component

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]); // Add cart state

  // Function to calculate total quantity in the cart
  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHVriYDY5aK_O_U59xx5Y1jjvYLXfBSeK7Xw&usqp=CAU" alt="Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <div className="clothing-shop-line">
          <Link to="/" className="clothing-shop-link"> M&K </Link>
        </div>
        <div className="men-women-line">
          <Link to="/WomenPage">Women</Link>
          <Link to="/MenPage">Men</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="search-cart">
        <div onClick={() => setShowCart(true)}>
          <FaShoppingCart />
          {cart.length > 0 && <span className="cart-count">{calculateTotalQuantity()}</span>}
        </div>
        <FaHeart />
        <FaSearch />
        <Link to="/login">
          <FaUser />
        </Link>
      </div>
      {showCart && <Cart cart={cart} setCart={setCart} setShowCart={setShowCart} />}
    </nav>
  );
};

export default Navbar;
