import React from 'react';
import Navbar from './Navbar';
import './Page.css';

const FAQ = () => {
    return (
        <div className="container mt-5">
            <Navbar />
            <div className="page-content">
                <h1 className="mb-4">Frequently Asked Questions</h1>

                <h4>Question 1: How can I place an order?</h4>
                <p>
                    To place an order, simply browse our products, add items to your cart, and proceed to checkout. Follow the instructions to complete your purchase.
                </p>

                <h4>Question 2: What payment methods do you accept?</h4>
                <p>
                    We accept various payment methods, including credit/debit cards and online payment gateways. Visit our checkout page for the full list of accepted payment options.
                </p>

                <h4>Question 3: Can I track my order?</h4>
                <p>
                    Yes, once your order is shipped, you will receive a tracking number and a link to track your order's delivery status.
                </p>

                <h4>Question 4: What is your return policy?</h4>
                <p>
                    We accept returns within 30 days of the purchase date. Please refer to our Return and Exchange policy for more details.
                </p>

                <p>
                    If you have additional questions that are not addressed in our FAQ, please contact our customer support.
                </p>
            </div>
        </div>
    );
};

export default FAQ;
