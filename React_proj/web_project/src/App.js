import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios'; // Import axios for making API requests
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';
import './App.css'; 
import Navbar from './components/pages/Navbar';
import WomenPage from './components/pages/WomenPage';
import MenPage from './components/pages/MenPage';
import LoginPage from './components/pages/LoginPage';
import ShippingPolicy from './components/pages/ShippingPolicy';
import ReturnAndExchange from './components/pages/ReturnAndExchange';
import RefundPolicy from './components/pages/RefundPolicy';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import FAQ from './components/pages/FAQ';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import OurOutlets from './components/pages/OurOutlets';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to your Django API endpoint
    axios.get('http://localhost:8000/api/products/')
      .then(response => {
        // Handle the successful response, update the state, etc.
        setData(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        {/* Pass the data received from the API to your HomeContent component */}
        <Routes>
          <Route path="/" element={<HomeContent data={data} />} />
          <Route path="/WomenPage" element={<WomenPage />} />
          <Route path="/MenPage" element={<MenPage />} />
          <Route path="/ReturnAndExchange" element={<ReturnAndExchange />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/RefundPolicy" element={<RefundPolicy />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path ="/TermsOfService" element={<TermsOfService />} />
          <Route path ="/FAQ" element={<FAQ />} />
          <Route path ="/AboutUs" element={<AboutUs />} />
          <Route path ="/ContactUs" element={<ContactUs />} />
          <Route path ="/OurOutlets" element={<OurOutlets />} />
          <Route path="/login" element={<LoginPage />} /> {/* Use element instead of component */}
          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
