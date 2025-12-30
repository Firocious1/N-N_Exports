import React from 'react';
import './Hero.css';
import { FaGlobe, FaShippingFast, FaHandshake } from 'react-icons/fa';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <FaGlobe /> Trusted Global Exporter
        </div>
        
        <h1 className="hero-title">
          Premium Quality <span className="highlight">Agricultural Products</span> & <span className="highlight">Office Stationery</span>
        </h1>
        
        <p className="hero-subtitle">
          Connecting India's finest produce to international markets. Specialized in Fresh Red Onions and Quality Office Stationery exports worldwide.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToContact}>
            Get Started
          </button>
          <button className="btn btn-secondary" onClick={scrollToProducts}>
            Our Products
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <FaShippingFast className="stat-icon" />
            <div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Timely Delivery</div>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <FaHandshake className="stat-icon" />
            <div>
              <div className="stat-number">GST & IEC</div>
              <div className="stat-label">Certified</div>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <FaGlobe className="stat-icon" />
            <div>
              <div className="stat-number">Global</div>
              <div className="stat-label">Market Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

