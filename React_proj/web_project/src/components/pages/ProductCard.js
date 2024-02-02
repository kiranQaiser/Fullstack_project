import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Rs{Number(product.price).toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
