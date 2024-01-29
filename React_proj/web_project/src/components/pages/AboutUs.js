import React from 'react';
import Navbar from './Navbar';
import './Page.css';


const AboutUs = () => {
    return (
        <div className="container mt-5">
            <Navbar />
            <div className="page-content">
                <h1 className="mb-4">About Us</h1>

                <p>
                    Welcome to [Your Brand Name], your go-to destination for high-quality and trendy clothing. We are passionate about providing our customers with fashionable and comfortable apparel that reflects their unique style.
                </p>

                <h4>Our Mission</h4>
                <p>
                    At [Your Brand Name], our mission is to inspire confidence and empower individuals through fashion. We strive to create clothing that not only looks great but also makes you feel confident and expressive.
                </p>

                <h4>Our Values</h4>
                <ul>
                    <li><strong>Quality: </strong>We are committed to delivering products of the highest quality to our customers.</li>
                    <li><strong>Style:</strong> We believe that everyone deserves to express their style through clothing that speaks to their personality.</li>
                    <li><strong>Customer Satisfaction: </strong>Your satisfaction is our priority, and we aim to provide excellent customer service.</li>
               
                </ul>
                
                    

                <h4>Contact Us</h4>
                <p>
                    If you have any questions or feedback, please feel free to contact us at [your email address] or call us at [your phone number]. We value your input and look forward to hearing from you.
                </p>

            </div>
        </div>
    );
};

export default AboutUs;
