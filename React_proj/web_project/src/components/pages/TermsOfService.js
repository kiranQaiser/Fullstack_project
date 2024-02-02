import React from 'react';
import Navbar from './Navbar';
import './Page.css';

const TermsOfService = () => {
    return (
        <div className="container mt-5">
            <Navbar />
            <div className="terms-of-service-content mt-5">
                <h1 className="mb-4">Terms of Service</h1>
                <h4>Acceptance of Terms</h4>
                <p>
                    By accessing or using our website, you agree to comply with and be bound by these Terms of Service.
                </p>
                <h4>Use of the Website</h4>
                <p>
                    You may use our website for lawful purposes and in accordance with these Terms of Service. You are prohibited from engaging in any illegal, harmful, or disruptive activities.
                </p>
                <h4>Intellectual Property</h4>
                <p>
                    The content on this website, including text, images, and logos, is the property of our company and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without our permission.
                </p>
                <p>
                    If you have any questions or concerns regarding our terms of service, please contact our customer support.
                </p>
            </div>
        </div>
    );
};

export default TermsOfService;
