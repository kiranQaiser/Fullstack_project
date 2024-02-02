// OrderSuccessPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

const OrderSuccessPage = () => {
  return (
    <div className='order-page '>
      <h2>Order Placed Successfully!</h2>
      <p>Thank you for your order.</p>
      <Link to="/">
        <button className='continue-button'>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default OrderSuccessPage;
