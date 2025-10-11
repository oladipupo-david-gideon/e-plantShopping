
import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="background-image"></div>
      <div className="content-overlay">
        <div className="landing-content">
          <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
          <Link to="/products">
            <button className="get-started-button">Get Started</button>
          </Link>
        </div>
        <div className="about-us-section">
          <AboutUs />
        </div>
      </div>
    </div>
  );
}

export default HomePage;