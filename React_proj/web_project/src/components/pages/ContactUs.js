import React from 'react';
import Navbar from './Navbar';
import './Page.css';

const ContactUs = () => {
    return (
        <div className="container mt-5">
            <Navbar />
            <div className="page-content">
                <h1 className="mb-4">Contact Us</h1>

                <p>
                    We'd love to hear from you! If you have any questions, feedback, or inquiries, please reach out to us using the contact information below.
                </p>

                <h4>Contact Information</h4>
                <p>
                    <strong>Email:</strong> info@example.com<br />
                    <strong>Phone:</strong> +92 42 1234567<br />
                    <strong>Address:</strong> 123 Street, Gulberg, Lahore, Pakistan
                </p>

                <h4>Send us a Message</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message:</label>
                        <textarea id="message" className="form-control" rows="4" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>

            </div>
        </div>
    );
};

export default ContactUs;
