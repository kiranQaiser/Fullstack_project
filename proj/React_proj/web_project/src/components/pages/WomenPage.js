import React, { useState, useEffect } from 'react';
import './Page.css';
import Navbar from './Navbar';

const WomenPage = () => {
    const [womenProducts, setWomenProducts] = useState([]);

    useEffect(() => {
        const fetchWomenProducts = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/women-products/');
                if (response.ok) {
                    const data = await response.json();
                    setWomenProducts(data);
                } else {
                    console.error('Failed to fetch women products');
                }
            } catch (error) {
                console.error('Error fetching women products:', error);
            }
        };

        fetchWomenProducts();
    }, []);

    return (
        <div className="women-page">
            <Navbar />
            <div className="women-banner">
                <p>hi</p>
            </div>
            <div className="women-products">
                {womenProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

const ProductCard = ({ product }) => {
    const testImageURL = 'https://www.sclothers.com/cdn/shop/products/3_ba725d3b-3ff3-4e8e-87a5-259dae939f6d.jpg?v=1680377589&width=1800';

    return (
        <div className="product-card">
            <img src={testImageURL} alt={product.name} />
            <img src={`http://localhost:8000${product.image}`} alt={product.name} />

            <div className="product-details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                {/* Add buttons or functionality for adding to cart */}
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default WomenPage;
