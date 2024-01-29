import React from 'react';
import Navbar from './Navbar';
import './Page.css';

const PrivacyPolicy = () => {
    return (
        <div className="container mt-5">
            <Navbar />
            <div className="page-content">
                <h1 className="mb-4">Privacy Policy</h1>
                <p>
                    Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website.
                </p>
                <h4>Information We Collect</h4>
                <p>
                    We may collect personal information, including but not limited to your name, email address, and contact details when you interact with our website or make a purchase.
                </p>
                <h4>How We Use Your Information</h4>
                <p>
                    We use the collected information to process orders, provide customer support, and improve our services. Your information will not be shared with third parties without your consent.
                </p>
                <p>
                    If you have any questions or concerns regarding our privacy policy, please contact our customer support.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
