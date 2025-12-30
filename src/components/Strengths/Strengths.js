import React from 'react';
import './Strengths.css';
import { FaNetworkWired, FaFileAlt, FaCheckCircle, FaShippingFast, FaHandsHelping, FaChartLine } from 'react-icons/fa';

const Strengths = () => {
  const strengths = [
    {
      icon: <FaNetworkWired />,
      title: 'Reliable Supplier Network',
      description: 'Strong partnerships with trusted farmers and manufacturers ensuring consistent quality and supply.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Export-Ready Documentation',
      description: 'GST & IEC certified with all necessary export documentation and compliance in place.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Quality Control & Packaging',
      description: 'Rigorous quality checks and export-grade packaging to ensure products reach in perfect condition.'
    },
    {
      icon: <FaShippingFast />,
      title: 'Timely Delivery',
      description: 'Efficient logistics coordination ensuring your orders reach on time, every time.'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Transparent Operations',
      description: 'Clear communication and honest business practices building long-term trust with clients.'
    },
    {
      icon: <FaChartLine />,
      title: 'Scalable Business Model',
      description: 'Flexible and scalable operations aligned with international trade standards for growing needs.'
    }
  ];

  return (
    <section id="strengths" className="strengths section">
      <div className="container">
        <div className="strengths-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Our Competitive Advantages</h2>
          <p className="section-description">
            We combine reliability, quality, and expertise to deliver exceptional export services
          </p>
        </div>

        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-card">
              <div className="strength-icon-wrapper">
                <div className="strength-icon">
                  {strength.icon}
                </div>
              </div>
              <h3 className="strength-title">{strength.title}</h3>
              <p className="strength-description">{strength.description}</p>
            </div>
          ))}
        </div>

        <div className="strengths-highlight">
          <div className="highlight-box">
            <div className="highlight-icon">🏆</div>
            <div className="highlight-content">
              <h4>Quality Commitment</h4>
              <p>Every product undergoes strict quality control before shipment</p>
            </div>
          </div>
          <div className="highlight-box">
            <div className="highlight-icon">💼</div>
            <div className="highlight-content">
              <h4>Professional Service</h4>
              <p>Dedicated support team for all your export requirements</p>
            </div>
          </div>
          <div className="highlight-box">
            <div className="highlight-icon">🌏</div>
            <div className="highlight-content">
              <h4>Global Standards</h4>
              <p>Compliance with international trade regulations and standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strengths;

