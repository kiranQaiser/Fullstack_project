import React from 'react';
import { FaSearch, FaShoppingCart, FaHeart,FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          {/* Add your logo image with an appropriate alt text */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHVriYDY5aK_O_U59xx5Y1jjvYLXfBSeK7Xw&usqp=CAU" alt="Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <div className="clothing-shop-line">
          <Link to="/" className="clothing-shop-link">Clothing Shop</Link>
        </div>
        <div className="men-women-line">
          <Link to="/WomenPage">Women</Link>
          <Link to="/men">Men</Link>
          <Link to="/login">Login</Link> {/* Ensure the correct path */}
    

        </div>
      </div>
      <div className="search-cart">
        <Link to="/cart">
          <FaShoppingCart /> {/* Cart icon */}
        </Link>
        <FaHeart /> {/* Heart icon for likes/favorites */}
        <FaSearch /> {/* Search icon */}
        <Link to="/login">
          <FaUser /> {/* User icon for login */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar
