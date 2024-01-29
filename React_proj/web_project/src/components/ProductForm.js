// src/components/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    image: null,  // Add this line for image upload
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send the image file
    const formDataForUpload = new FormData();
    formDataForUpload.append('name', formData.name);
    formDataForUpload.append('description', formData.description);
    formDataForUpload.append('price', formData.price);
    formDataForUpload.append('image', formData.image);

    // Make a POST request to your Django API endpoint
    axios.post('http://127.0.0.1:8000/api/products/', formDataForUpload)
      .then(response => {
        console.log('Product added successfully:', response.data);
        // Optionally, you can reset the form or update the product list
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />

        <label>Image:</label>
        <input type="file" name="image" onChange={handleChange} accept="image/*" required />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
