import React from 'react';
import './Vision.css';
import { FaEye, FaBullseye } from 'react-icons/fa';

const Vision = () => {
  const missions = [
    'Deliver quality products at competitive prices',
    'Build long-term relationships with international buyers',
    'Support Indian farmers and manufacturers',
    'Expand exports using modern trade practices'
  ];

  return (
    <section id="vision" className="vision section">
      <div className="container">
        <div className="vision-content">
          <div className="vision-card">
            <div className="vision-icon">
              <FaEye />
            </div>
            <h2 className="vision-title">Our Vision</h2>
            <p className="vision-text">
              To become a trusted global exporter of Indian agricultural and stationery products 
              while promoting <strong>"Make in India"</strong>.
            </p>
            <div className="vision-tagline">
              Building bridges between India and the world
            </div>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <FaBullseye />
            </div>
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-intro">
              We are committed to achieving our vision through focused actions and dedication:
            </p>
            <ul className="mission-list">
              {missions.map((mission, index) => (
                <li key={index} className="mission-item">
                  <span className="mission-number">{index + 1}</span>
                  <span className="mission-text">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="vision-banner">
          <div className="banner-content">
            <h3>Committed to Excellence</h3>
            <p>
              Our vision and mission drive everything we do. We're not just exporting products – 
              we're building lasting relationships and contributing to India's global trade presence.
            </p>
          </div>
          <div className="banner-stats">
            <div className="banner-stat">
              <div className="stat-value">Quality</div>
              <div className="stat-label">First Approach</div>
            </div>
            <div className="banner-stat">
              <div className="stat-value">Trust</div>
              <div className="stat-label">Based Relations</div>
            </div>
            <div className="banner-stat">
              <div className="stat-value">Global</div>
              <div className="stat-label">Market Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

