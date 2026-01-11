import React from 'react';
import './Products.css';
import { FaSeedling, FaPencilAlt, FaBoxOpen, FaLeaf, FaRecycle, FaMortarPestle, FaSpa, FaMonument } from 'react-icons/fa';

// Import product images
import moringaPowder from '../../assets/moringa powder.webp';
import organicCompost from '../../assets/Feed_Organic compost.webp';
import guarGum from '../../assets/guar-protein-1.jpg';
import multaniMitti from '../../assets/multani mitti.webp';
import marbleIdols from '../../assets/marble-idols.jpg';
import onionPowder from '../../assets/onion powder.jpg';

const Products = () => {
  const mainProducts = [
    {
      icon: <FaLeaf />,
      image: moringaPowder,
      title: 'Moringa Powder & Food Supplements',
      description: 'Premium quality Moringa powder and other natural food supplements. Rich in nutrients and sourced from organic farms to ensure maximum health benefits.',
      features: [
        '100% Natural & Organic',
        'Rich in vitamins & minerals',
        'Export quality standards',
        'Custom packaging available'
      ]
    },
    {
      icon: <FaRecycle />,
      image: organicCompost,
      title: 'Organic Compost',
      description: 'High-grade organic compost made from natural materials. Perfect for agriculture and gardening, enhancing soil fertility and promoting sustainable farming.',
      features: [
        'Eco-friendly production',
        'Nutrient-rich formula',
        'Bulk quantities available',
        'International shipping'
      ]
    },
    {
      icon: <FaMortarPestle />,
      image: guarGum,
      title: 'Guar Gum Powder',
      description: 'Premium Guar Gum powder for industrial and food applications. Sourced from high-quality guar beans with excellent thickening and stabilizing properties.',
      features: [
        'Food & industrial grade',
        'High viscosity',
        'Quality tested',
        'Various mesh sizes'
      ]
    },
    {
      icon: <FaSpa />,
      image: multaniMitti,
      title: 'Multani Mitti (Fuller\'s Earth)',
      description: 'Pure Multani Mitti clay powder, ideal for cosmetic and industrial applications. Known for its natural cleansing and purifying properties.',
      features: [
        'Natural & pure',
        'Cosmetic grade quality',
        'Finely processed',
        'Export certified'
      ]
    },
    {
      icon: <FaMonument />,
      image: marbleIdols,
      title: 'Marble Idols',
      description: 'Exquisite marble idols and sculptures crafted from premium Indian marble. Custom designs available for religious idols, decorative pieces, and artistic sculptures.',
      features: [
        'Premium marble quality',
        'Custom designs',
        'Expert craftsmanship',
        'Secure packaging & shipping'
      ]
    },
    {
      icon: <FaSeedling />,
      image: onionPowder,
      title: 'Onion Powder',
      description: 'Premium dehydrated onion powder made from fresh red onions. Ideal for food processing, seasoning, and culinary applications worldwide.',
      features: [
        'Fresh onion sourced',
        'Low moisture content',
        'Long shelf life',
        'Food safety certified'
      ]
    }
  ];

  const additionalServices = [
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

        {/* Main Products Grid - 6 items */}
        <div className="products-grid">
          {mainProducts.map((product, index) => (
            <div key={index} className="product-card">
              {product.image ? (
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
              ) : (
                <div className="product-icon">
                  {product.icon}
                </div>
              )}
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

        {/* Additional Services Grid - 2 items centered */}
        <div className="additional-services">
          <h3 className="services-subtitle">Additional Services</h3>
          <div className="services-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="product-card">
                <div className="product-icon">
                  {service.icon}
                </div>
                <h3 className="product-title">{service.title}</h3>
                <p className="product-description">{service.description}</p>
                <ul className="product-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="product-btn">Learn More</button>
              </div>
            ))}
          </div>
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

