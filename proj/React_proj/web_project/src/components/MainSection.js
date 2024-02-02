// src/components/MainSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainSection.css';

const MainSection = () => {
  return (
    <main>
      <section>
        <span>w</span>
        <span>e</span>
        <span></span>
        <span>w</span>
      </section>
      <section>
        <Link to="/women">
          <img src="/assets/woman.jpg" alt="Women's Clothing" />
          <p>Women</p>
        </Link>
        <Link to="/men">
          <img src="/assets/men-image.jpg" alt="Men's Clothing" />
          <p>Men</p>
        </Link>
      </section>
    </main>
  );
}

export default MainSection;
