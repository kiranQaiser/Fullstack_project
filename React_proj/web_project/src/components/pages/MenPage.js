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
                    name: "Convertible Bomber Jacket White/Black",
                    description: "Double-sided jacket in polyester fabrication, featuring a ribbed collar, pockets, and full front zip opening from 'ONE' ",
                    price: 6995,
                    image: "https://beoneshopone.com/cdn/shop/files/MOJ0088-WBK2.jpg?v=1701847695",
                }}
                addToCart={addToCart}
            />
            <hr className="product-line" />
            <ProductCard
                product={{
                    id: 5,
                    name: "Corduroy Jacket Brown",
                    description: "Corduroy jacket, featuring sherpa collar and lining, full front buttoned placket and pockets from 'ONE'",
                    price: 7495,
                    image: "https://beoneshopone.com/cdn/shop/files/MOJ00962.jpg?v=1698834574",
                }}
                addToCart={addToCart}
            />
            <ProductCard
                product={{
                    id: 5,
                    name: "Convertible Bomber Jacket Navy/Yellow",
                    description: "Double sided jacket in polyester fabrication, featuring high collar, pockets and full front zip opening",
                    price: 6995,
                    image: "https://beoneshopone.com/cdn/shop/files/MOJ01001.jpg?v=1698396353",
                }}
                addToCart={addToCart}
            />
        </div>
    );
};

export default WomenPage;
