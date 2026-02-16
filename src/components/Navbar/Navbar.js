import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/NN-logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <img src={logo} alt="N&N Global Exports Logo" className="logo-image" />
          <div className="logo-text-container">
            <span className="logo-text">N&N</span>
            <span className="logo-subtitle">Global Exports</span>
          </div>
        </div>

        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('hero')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
          <button onClick={() => scrollToSection('strengths')} className="nav-link">Why Choose Us</button>
          <button onClick={() => scrollToSection('vision')} className="nav-link">Vision</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link nav-link-cta">Contact Us</button>
        </div>

        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

