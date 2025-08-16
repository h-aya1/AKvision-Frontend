import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'; // ✅ Import as module

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
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          
          {/* Company Info */}
          <div className={styles.footerColumn}>
            <div className={styles.footerLogo}>
              <img src="/logo-white.svg" alt="AKvision Logo" />
              <span className={styles.footerLogoText}>AKvision</span>
            </div>
            <p className={styles.footerDescription}>
              Leading provider of advanced security and surveillance solutions. 
              We deliver cutting-edge technology to protect what matters most.
            </p>
            <div className={styles.footerSocial}>
              {/* Social icons stay as before */}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <div className={styles.footerLinks}>
              <Link to="/products" className={styles.footerLink}>
                <ChevronRightIcon className={styles.iconSmall}/> Products
              </Link>
              <Link to="/solutions" className={styles.footerLink}>
                <ChevronRightIcon className={styles.iconSmall}/> Solutions
              </Link>
              <Link to="/services" className={styles.footerLink}>
                <ChevronRightIcon className={styles.iconSmall}/> Services
              </Link>
              <Link to="/support" className={styles.footerLink}>
                <ChevronRightIcon className={styles.iconSmall}/> Support
              </Link>
              <Link to="/blog" className={styles.footerLink}>
                <ChevronRightIcon className={styles.iconSmall}/> Blog & Resources
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Company</h3>
            <div className={styles.footerLinks}>
              <Link to="/about" className={styles.footerLink}>
                <ChevronRightIcon className={styles.iconSmall}/> About Us
              </Link>
              <Link to="/about#careers" className={styles.footerLink}>
                <ChevronRightIcon className={styles.iconSmall}/> Careers
              </Link>
              <Link to="/contact" className={styles.footerLink}>
                <ChevronRightIcon className={styles.iconSmall}/> Contact Us
              </Link>
              <Link to="/legal" className={styles.footerLink}>
                <ChevronRightIcon className={styles.iconSmall}/> Privacy Policy
              </Link>
              <Link to="/legal" className={styles.footerLink}>
                <ChevronRightIcon className={styles.iconSmall}/> Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Contact Us</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPinIcon className={styles.iconMedium}/>
                <span>123 Security Avenue, Tech Park<br />New York, NY 10001</span>
              </div>
              <div className={styles.contactItem}>
                <PhoneIcon className={styles.iconMedium}/>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <EnvelopeIcon className={styles.iconMedium}/>
                <span>info@akvision.com</span>
              </div>
              <div className={styles.contactItem}>
                <ClockIcon className={styles.iconMedium}/>
                <span>Mon-Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Newsletter</h3>
            <p className={styles.footerDescription}>
              Subscribe to our newsletter to receive updates on new products, 
              special offers, and security tips.
            </p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                className={styles.newsletterInput} 
                placeholder="Your email address" 
                required 
              />
              <button type="submit" className={styles.newsletterButton}>Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} AKvision. All rights reserved.
          </p>
          <div className={styles.footerBottomLinks}>
            <Link to="/legal" className={styles.footerBottomLink}>Privacy Policy</Link>
            <Link to="/legal" className={styles.footerBottomLink}>Terms of Service</Link>
            <Link to="/legal" className={styles.footerBottomLink}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
