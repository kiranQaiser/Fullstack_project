import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios'; // Import axios for making API requests
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';
import './App.css'; 
import Navbar from './components/pages/Navbar';
import WomenPage from './components/pages/WomenPage';
import LoginPage from './components/pages/LoginPage';


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
          <Route path="/women" element={<WomenPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Use element instead of component */}
          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
