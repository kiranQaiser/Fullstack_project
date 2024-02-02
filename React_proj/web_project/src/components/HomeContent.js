import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageWomen from '../images/women.png'; 
import ImageMen from '../images/men.png';
import './pages/Page.css';

function HomeContent() {
  // State to store fetched data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Django backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/your-endpoint'); // Replace 'your-endpoint' with your actual endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div className="home-content">
      <h5></h5>
        <div className='main-content'>
          {/* Link to Women's Clothing Page */}
          <Link to="/WomenPage" className="image-link">
            <div className="image-wrapper">
              <img src={ImageWomen} alt="Women's Clothing" className="home-image" />
              <div className="image-label">Women</div>
            </div>
          </Link>
        
          <Link to="/MenPage" className="image-link">
            <div className="image-wrapper">
              <img src={ImageMen} alt="Men's Clothing" className="home-image" />
              <div className="image-label">Men</div>
            </div>
          </Link>
        </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Top Quality Fabric</h4>
          <p>
            Sclothers credits its origin to a simple yet industry-disrupting realization, "Quality should never be a privilege". We synthesize the best of both worlds; Quality, fashionable apparel that does not form craters in your wallet.
          </p>
        </div>

        <div className="footer-section">
          <h4>All Sizes Matter</h4>
          <p>
            The best part of being human is that we are uniquely different. We come in all shapes and sizes; So, every design we make is always a plus design as well. Everything we create is created with love, style, and equality.
          </p>
        </div>

        <div className="footer-section">
          <h4>Proudly Made in Pakistan</h4>
          <p>
            Our textile industry manufactures fabric for the most loved brands over the globe. Thus, we produce every piece of fabric with the same export spirit. Yet, we take pride in being a Pakistani-owned and produced entity.
          </p>
        </div>
      </div>

      <p>Discover the latest trends in fashion. Shop now!</p>
      {/* Add more content or components as needed */}
    </div>
  );
}

export default HomeContent;
