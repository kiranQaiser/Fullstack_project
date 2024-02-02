// Cart.js
import React, { useState } from 'react';
import './Cart.css';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import OrderSuccessPage from './OrderSuccessPage';

const Cart = ({ setShowCart }) => {
  const { cart } = useCart();
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    address: '',
  });

  const handleInputChange = (e) => {
    setDeliveryInfo({
      ...deliveryInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async () => {
    try {
      // Handle placing the order logic here
      // You can send the cart items and delivery information to your backend
      // For now, let's clear the cart as a placeholder
      const response = await fetch('http://localhost:8000/api/place-order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart, deliveryInfo }),
      });
  
      if (response.ok) {
        // If the response is successful, you can perform additional actions here
        // For example, you can clear the cart
        // setCart([]);
        setShowCart(false); // Close the cart after placing the order
      } else {
        // Handle error scenarios based on the response status
        console.error('Failed to place order. Status:', response.status);
      }
    } catch (error) {
      // Handle unexpected errors during the fetch or JSON parsing
      console.error('Error placing order:', error);
    }
  };
  

  // Calculate the total quantity in the cart
  const calculateTotalQuantity = () => {
    // Safely check if cart is an array and has a length property
    if (Array.isArray(cart) && cart.length > 0) {
      return cart.reduce((total, item) => total + (item.quantity || 0), 0);
    }
    return 0;
  };

  // Placeholder for rendering cart items
  const renderCartItems = () => {
    if (Array.isArray(cart) && cart.length > 0) {
      return cart.map((item) => (
        <div key={item.id}>
          {/* Render each item details (e.g., name, quantity, etc.) */}
          {item.name} - Quantity: {item.quantity}
        </div>
      ));
    } else {
      return <p>Your cart is empty.</p>;
    }
  };

  // Placeholder for calculating the total price
  const calculateTotalPrice = () => {
    // Replace 'item' with the correct variable for your product, for example, 'cart[0].price'
    return calculateTotalQuantity() * (cart[0]?.price || 0) + 200;
  };

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        {/* Display cart items */}
        {renderCartItems()}
        {/* Display the total and standard shipping fee */}
        <div className="cart-summary">
          <h2>Cart Summary</h2>
          {/* Display total quantity and total price */}
          <p>Total Items: {calculateTotalQuantity()}</p>
          <p>Total: Rs {calculateTotalPrice()} (including Rs 200 shipping fee)</p>
        </div>
        {/* Display delivery information form */}
        <form className="delivery-form">
          <h2>Delivery Information</h2>
          <label>
            Name:
            <input type="text" name="name" value={deliveryInfo.name} onChange={handleInputChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={deliveryInfo.address} onChange={handleInputChange} />
          </label>
          <Link to="/OrderSuccessPage">
            <button>Place Order</button>
          </Link>
        </form>
        {/* Close the cart when clicking outside or on a close button */}
        <div className="close-cart" onClick={() => setShowCart(false)}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default Cart;
