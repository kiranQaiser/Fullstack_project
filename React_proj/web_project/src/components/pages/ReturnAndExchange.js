import React from 'react';
import Navbar from './Navbar';
import './Page.css';

const ReturnAndExchange = () => {
    return (
        <div className="container mt-5">
            <Navbar />
            <div className="page-content">
                <h1 className="mb-4 mt-5">Return and Exchange</h1>
                <ul className="list-group mb-4">
                    <li className="list-group-item text-dark">We accept returns within 30 days of the purchase date.</li>
                    <li className="list-group-item text-dark">To initiate a return, please contact our customer support.</li>
                    <li className="list-group-item text-dark">Exchanges are allowed for defective or damaged items.</li>
                    
                </ul>
                <p>
                    If you have any further questions or concerns regarding our return and exchange policy, feel free to contact our customer support.
                </p>
            </div>
        </div>
    );
};

export default ReturnAndExchange;
