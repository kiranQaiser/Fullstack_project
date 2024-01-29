import React from 'react';
import Navbar from './Navbar';
import './Page.css';

const RefundPolicy = () => {
    return (
        <div className="container mt-5">
            <Navbar />
            <div className="page-content">
                <h1 className="mb-4">Refund Policy</h1>
                <ul className="list-group mb-4">
                    <li className="list-group-item text-dark">Refunds are issued for defective or damaged items within 30 days of purchase.</li>
                    <li className="list-group-item text-dark">To request a refund, please contact our customer support with your order details.</li>
                    <li className="list-group-item text-dark">Refunds will be processed within 5 business days of receiving the returned item.</li>
                </ul>
                <p>
                    If you have any further questions or concerns regarding our refund policy, feel free to contact our customer support.
                </p>
            </div>
        </div>
    );
};

export default RefundPolicy;
