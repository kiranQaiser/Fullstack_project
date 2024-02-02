import React, { useState, useEffect } from 'react';
import './Page.css';
import Navbar from './Navbar';
import { useCart } from './CartContext';
import './Page.css';
import ProductCard from './ProductCard';

const WomenPage = () => {
    const { addToCart, cart } = useCart();
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
            {/* Additional ProductCards */}
            <ProductCard
                product={{
                    id: 4,
                    name: "Graphic Tee Peach",
                    description: "Round neck tee shirt in lycra jersey, featuring short sleeves and print in front from 'ONE'",
                    price: 1495,
                    image: "https://beoneshopone.com/cdn/shop/files/WTT0219-PCH.jpg?v=1696573903",
                }}
                addToCart={addToCart}
            />
            <hr className="product-line" />
            <ProductCard
                product={{
                    id: 5,
                    name: "Graphic Tee Pink",
                    description: "Round neck tee shirt in lycra jersey, featuring short sleeves and print in front from 'ONE' ",
                    price: 1395,
                    image: "https://beoneshopone.com/cdn/shop/files/WTT0217-PNK4_954c2f2e-a2e6-4bad-9623-8bb7702c7ed8.jpg?v=1695206936",
                }}
                addToCart={addToCart}
            />
            <hr className="product-line" />
            <ProductCard
                product={{
                    id: 5,
                    name: "Statement Tee Blue",
                    description: "Round neck tee shirt in jersey fabrication, featuring print in front from 'ONE' ",
                    price: 1195,
                    image: "https://beoneshopone.com/cdn/shop/products/WTT0206-BLU_1.jpg?v=1680683586"                }}
                addToCart={addToCart}
            />
        </div>
    );
};

export default WomenPage;
