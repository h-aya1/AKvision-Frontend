import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Import icons
import { 
  ShieldCheckIcon, 
  CameraIcon, 
  ChartBarIcon, 
  ArrowRightIcon,
  StarIcon,
  ArrowLongRightIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      title: 'Advanced Security',
      description: 'State-of-the-art surveillance technology for comprehensive security solutions with AI-powered threat detection.',
    },
    {
      icon: <CameraIcon className="h-10 w-10" />,
      title: 'Smart Cameras',
      description: 'AI-powered cameras with intelligent detection, facial recognition, and advanced tracking capabilities.',
    },
    {
      icon: <ChartBarIcon className="h-10 w-10" />,
      title: 'Analytics Dashboard',
      description: 'Real-time data analysis and insights for informed decision-making with customizable reporting.',
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      category: 'IP Camera',
      title: 'AK-8000 Pro Series',
      description: '4K Ultra HD security camera with night vision and 360° coverage',
      price: '$299.99',
      image: '/images/product-1.jpg'
    },
    {
      id: 2,
      category: 'PTZ Camera',
      title: 'AK-7500 PTZ',
      description: 'Pan-tilt-zoom camera with 30x optical zoom and auto-tracking',
      price: '$449.99',
      image: '/images/product-2.jpg'
    },
    {
      id: 3,
      category: 'Security System',
      title: 'AK-NVR Enterprise',
      description: '16-channel network video recorder with 12TB storage',
      price: '$899.99',
      image: '/images/product-3.jpg'
    },
  ];

  const testimonials = [
    {
      id: 1,
      content: 'AKvision\'s security cameras have transformed how we monitor our retail locations. The analytics features have helped us improve store layout and customer flow.',
      name: 'Sarah Johnson',
      title: 'Operations Director, RetailCo',
      image: 'https://randomuser.me/api/portraits/women/48.jpg'
    },
    {
      id: 2,
      content: 'The integration capabilities of AKvision systems with our existing infrastructure was seamless. Their technical support team is also top-notch.',
      name: 'Michael Chen',
      title: 'CTO, TechSolutions Inc.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      content: 'We\'ve seen a 40% reduction in security incidents since implementing AKvision\'s comprehensive security solution across our campus.',
      name: 'Dr. Lisa Patel',
      title: 'Security Director, Metro University',
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Securing Your World with Advanced Vision Technology</h1>
            <p className="hero-subtitle">
              Discover our cutting-edge surveillance solutions that combine AI, IoT, and advanced analytics to keep your premises secure and your business insights sharp.
            </p>
            <div className="hero-buttons">
              <Link to="/products" className="hero-primary-btn">Explore Products</Link>
              <Link to="/contact" className="hero-secondary-btn">Contact Sales</Link>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <span className="hero-scroll-text">Scroll Down</span>
          <div className="hero-scroll-icon"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose AKvision</h2>
            <p className="section-subtitle">Our cutting-edge technology provides comprehensive security solutions for businesses and homes</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <Link to="/solutions" className="feature-link">
                  Learn more <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="products-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Explore our most popular security and surveillance solutions</p>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  <span className="product-badge">Featured</span>
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-features">
                    <span className="product-feature">{product.category}</span>
                    <span className="product-feature">HD Quality</span>
                    <span className="product-feature">Night Vision</span>
                  </div>
                  
                  <div className="product-price">{product.price}</div>
                  
                  <div className="product-actions">
                    <Link to={`/products/${product.id}`} className="product-btn product-btn-primary">View Details</Link>
                    <Link to="/contact" className="product-btn product-btn-secondary">Inquire</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="view-all-products">
            <Link to="/products" className="view-all-btn">
              View All Products <ArrowLongRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Trusted by businesses and organizations worldwide</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-position">{testimonial.title}</div>
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="testimonial-star" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to enhance your security?</h2>
            <p className="cta-description">Get in touch with our experts for a personalized consultation and find the perfect security solution for your needs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-btn cta-btn-primary">Schedule a Consultation</Link>
              <Link to="/products" className="cta-btn cta-btn-secondary">Browse Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;