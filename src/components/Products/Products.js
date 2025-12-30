import React from 'react';
import './Products.css';
import { FaSeedling, FaPencilAlt, FaBoxOpen } from 'react-icons/fa';

const Products = () => {
  const products = [
    {
      icon: <FaSeedling />,
      title: 'Fresh Red Onion',
      description: 'Premium quality fresh red onions sourced directly from trusted farmers. Carefully selected, graded, and packaged to maintain freshness during international transit.',
      features: [
        'Direct farm sourcing',
        'Quality graded',
        'Export-ready packaging',
        'Competitive pricing'
      ]
    },
    {
      icon: <FaPencilAlt />,
      title: 'Office Stationery',
      description: 'Comprehensive range of high-quality office stationery products suitable for businesses, educational institutions, and organizations worldwide.',
      features: [
        'Wide product range',
        'Quality assured',
        'Bulk orders accepted',
        'Timely delivery'
      ]
    },
    {
      icon: <FaBoxOpen />,
      title: 'Custom Export Orders',
      description: 'Tailored export solutions to meet your specific requirements. We handle custom orders with the same commitment to quality and timely delivery.',
      features: [
        'Flexible solutions',
        'Custom packaging',
        'Volume discounts',
        'Dedicated support'
      ]
    }
  ];

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="products-header">
          <span className="section-label">Our Products</span>
          <h2 className="section-title">Quality Products for Global Markets</h2>
          <p className="section-description">
            We offer a carefully curated selection of products that meet international quality standards
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-icon">
                {product.icon}
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="product-btn">Learn More</button>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <div className="cta-content">
            <h3>Looking for something specific?</h3>
            <p>We handle custom export orders tailored to your needs. Contact us to discuss your requirements.</p>
          </div>
          <button 
            className="cta-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;

