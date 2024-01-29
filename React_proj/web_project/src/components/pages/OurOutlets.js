import React from 'react';
import Navbar from './Navbar';
import './Page.css';

const OurOutlets = () => {
    return (
        <div className="container mt-5">
            <Navbar />
            <div className="page-content">
                <h1 className="mb-4">Our Outlets</h1>

                <div className="outlet">
                    <h4>Lahore Outlets</h4>
                    <ul>
                        <li><strong>Gulberg Outlet:</strong> 123 Street, Gulberg, Lahore - Phone: +92 42 1111111</li>
                        <li><strong>DHA Outlet:</strong> 456 Avenue, DHA, Lahore - Phone: +92 42 2222222</li>
                        <li><strong>Johar Town Outlet:</strong> 789 Road, Johar Town, Lahore - Phone: +92 42 3333333</li>
                    </ul>
                </div>

                <div className="outlet">
                    <h4>Karachi Outlet</h4>
                    <ul>
                        <li><strong>Clifton Outlet:</strong> 567 Seaview, Clifton, Karachi - Phone: +92 21 4444444</li>
                    </ul>
                </div>

                <div className="outlet">
                    <h4>Islamabad Outlet</h4>
                    <ul>
                        <li><strong>F-8 Outlet:</strong> 890 Avenue, F-8, Islamabad - Phone: +92 51 5555555</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default OurOutlets;
