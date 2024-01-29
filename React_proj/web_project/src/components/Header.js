// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/women">Women</Link>
        <Link to="/men">Men</Link>
      </nav>
      <div className="logo">
        <h1>Clothing Shop</h1>
      </div>
    </header>
  );
}

export default Header;
