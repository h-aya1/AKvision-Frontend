import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Import icons
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <img src="/logo-white.svg" alt="AKvision Logo" />
              <span className="footer-logo-text">AKvision</span>
            </div>
            <p className="footer-description">
              Leading provider of advanced security and surveillance solutions. 
              We deliver cutting-edge technology to protect what matters most.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <a href="https://youtube.com" className="social-icon" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-links">
              <Link to="/products" className="footer-link">
                <ChevronRightIcon /> Products
              </Link>
              <Link to="/solutions" className="footer-link">
                <ChevronRightIcon /> Solutions
              </Link>
              <Link to="/services" className="footer-link">
                <ChevronRightIcon /> Services
              </Link>
              <Link to="/support" className="footer-link">
                <ChevronRightIcon /> Support
              </Link>
              <Link to="/blog" className="footer-link">
                <ChevronRightIcon /> Blog & Resources
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <div className="footer-links">
              <Link to="/about" className="footer-link">
                <ChevronRightIcon /> About Us
              </Link>
              <Link to="/about#careers" className="footer-link">
                <ChevronRightIcon /> Careers
              </Link>
              <Link to="/contact" className="footer-link">
                <ChevronRightIcon /> Contact Us
              </Link>
              <Link to="/legal" className="footer-link">
                <ChevronRightIcon /> Privacy Policy
              </Link>
              <Link to="/legal" className="footer-link">
                <ChevronRightIcon /> Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPinIcon />
                <span>123 Security Avenue, Tech Park<br />New York, NY 10001</span>
              </div>
              <div className="contact-item">
                <PhoneIcon />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <EnvelopeIcon />
                <span>info@akvision.com</span>
              </div>
              <div className="contact-item">
                <ClockIcon />
                <span>Mon-Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-column">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-description">
              Subscribe to our newsletter to receive updates on new products, 
              special offers, and security tips.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Your email address" 
                required 
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} AKvision. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/legal" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/legal" className="footer-bottom-link">Terms of Service</Link>
            <Link to="/legal" className="footer-bottom-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;