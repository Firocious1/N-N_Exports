import React from 'react';
import './About.css';
import { FaCheckCircle, FaIndustry } from 'react-icons/fa';
import { MdBusinessCenter } from 'react-icons/md';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-header">
          <span className="section-label">About N&N Global Exports</span>
          <h2 className="section-title">Leading the Way in Quality Exports</h2>
          <p className="section-description">
            A trusted partnership firm committed to delivering excellence in agricultural and stationery exports
          </p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-card">
              <div className="card-icon">
                <FaIndustry />
              </div>
              <h3>Who We Are</h3>
              <p>
                N&N Global Exports is a partnership firm engaged in the export of fresh agricultural produce 
                and office stationery products. We specialize in supplying fresh red onions and quality office 
                stationery to international markets.
              </p>
              <p>
                Our focus is on quality, competitive pricing, and timely delivery. We bridge the gap between 
                India's finest producers and global markets, ensuring excellence at every step.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <MdBusinessCenter />
              </div>
              <h3>Our Business Model</h3>
              <p>
                We source products directly from manufacturers and farmers, ensure quality compliance, and 
                export through reliable logistics partners.
              </p>
              <p>
                Our model is scalable and aligned with international trade standards, ensuring transparency 
                and efficiency throughout the supply chain.
              </p>
            </div>
          </div>

          <div className="about-info">
            <div className="info-box">
              <h4>Business Type</h4>
              <p className="info-value">Partnership Firm</p>
            </div>
            <div className="info-box">
              <h4>Sector</h4>
              <p className="info-value">Export - Agricultural Products & Office Stationery</p>
            </div>
            <div className="info-box">
              <h4>Specialization</h4>
              <div className="info-list">
                <div className="info-list-item">
                  <FaCheckCircle /> Fresh Red Onions
                </div>
                <div className="info-list-item">
                  <FaCheckCircle /> Office Stationery Products
                </div>
                <div className="info-list-item">
                  <FaCheckCircle /> Custom Export Orders
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

