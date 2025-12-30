import React from 'react';
import './Footer.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">N&N</span>
              <span className="logo-subtitle">Global Exports</span>
            </div>
            <p className="footer-description">
              Your trusted partner for quality agricultural products and office stationery exports. 
              Connecting India to the world with excellence.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/919876543210" className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a onClick={() => scrollToSection('products')}>Our Products</a></li>
              <li><a onClick={() => scrollToSection('strengths')}>Why Choose Us</a></li>
              <li><a onClick={() => scrollToSection('vision')}>Vision & Mission</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Our Products</h4>
            <ul className="footer-links">
              <li><a>Fresh Red Onion</a></li>
              <li><a>Office Stationery</a></li>
              <li><a>Custom Export Orders</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <FaEnvelope />
                <a href="mailto:info@nnglobalexports.com">info@nnglobalexports.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-certifications">
          <div className="cert-badge">
            <span className="cert-icon">✓</span>
            <span>GST Certified</span>
          </div>
          <div className="cert-badge">
            <span className="cert-icon">✓</span>
            <span>IEC Registered</span>
          </div>
          <div className="cert-badge">
            <span className="cert-icon">🇮🇳</span>
            <span>Make in India</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} N&N Global Exports. All rights reserved.
          </p>
          <p className="footer-tagline">
            Promoting Indian excellence in global markets
          </p>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;

