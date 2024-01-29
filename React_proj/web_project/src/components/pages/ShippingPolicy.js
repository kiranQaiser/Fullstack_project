// ShippingPolicy.js
import React from 'react';
import Navbar from './Navbar';
import './Page.css';

const ShippingPolicy = () => {
    return (
        <div className="container mt-5">
            <Navbar />
            <div className="page-content">
                <h1 className="mb-4">Shipping Policy</h1>
                <ul className="list-group mb-4">
                    <li className="list-group-item text-dark">We currently only offer shipping within Pakistan.</li>
                    <li className="list-group-item text-dark">All orders are processed and shipped within 1-3 business days.</li>
                    <li>We offer standard and express shipping options.</li>
                    <li>Standard shipping usually takes 5-7 business days, while express shipping takes 2-3 business days.</li>
                    <li>Shipping costs will be calculated at checkout based on the delivery location and chosen shipping method.</li>
                    <li>Please ensure that your shipping address is accurate to avoid any delivery delays.</li>
                </ul>
                <p>
                    If you have any further questions or concerns regarding our shipping policy, feel free to contact our customer support.
                </p>
            </div>
        </div>
    );
};

export default ShippingPolicy;
