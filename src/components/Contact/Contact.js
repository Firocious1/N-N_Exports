import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be implemented when backend is ready
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Start Your Export Journey</h2>
          <p className="section-description">
            Ready to partner with us? Fill out the form below or reach out directly. We're here to help!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              We're committed to providing excellent service and support. Reach out to us through any of these channels.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <FaEnvelope />
                </div>
                <div className="method-details">
                  <h4>Email Us</h4>
                  <a href="mailto:info@nnglobalexports.com">info@nnglobalexports.com</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <FaPhone />
                </div>
                <div className="method-details">
                  <h4>Call Us</h4>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <FaWhatsapp />
                </div>
                <div className="method-details">
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="method-details">
                  <h4>Visit Us</h4>
                  <p>India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-icon" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

