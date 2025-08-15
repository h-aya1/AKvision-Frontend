import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

// Simple SVG Icon Components (no external library needed)
const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={styles.iconSmall}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);
const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={styles.iconMedium}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={styles.iconMedium}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z"
    />
  </svg>
);
const EnvelopeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={styles.iconMedium}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        {" "}
        {/* Using your global container */}
        <div className={styles.footerContainer}>
          {/* Company Info */}
          <div className={styles.footerColumn}>
            <div className={styles.footerLogo}>
              <span className={styles.footerLogoText}>AK VISTION</span>
            </div>
            <p className={styles.footerDescription}>
              Leading provider of advanced security and surveillance solutions.
              We deliver cutting-edge technology to protect what matters most.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <div className={styles.footerLinks}>
              <Link to="/products" className={styles.footerLink}>
                <ChevronRightIcon /> Products
              </Link>
              <Link to="/solutions" className={styles.footerLink}>
                <ChevronRightIcon /> Solutions
              </Link>
              <Link to="/support" className={styles.footerLink}>
                <ChevronRightIcon /> Support
              </Link>
              <Link to="/about" className={styles.footerLink}>
                <ChevronRightIcon /> About Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Contact Us</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPinIcon />
                <span>
                  123 Security Avenue, Tech Park
                  <br />
                  New York, NY 10001
                </span>
              </div>
              <div className={styles.contactItem}>
                <PhoneIcon />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <EnvelopeIcon />
                <span>info@akvistion.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Newsletter</h3>
            <p className={styles.footerDescription}>
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                className={styles.newsletterInput}
                placeholder="Your email address"
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} AK VISTION. All rights reserved.
          </p>
          <div className={styles.footerBottomLinks}>
            <Link to="/legal" className={styles.footerBottomLink}>
              Privacy Policy
            </Link>
            <Link to="/legal" className={styles.footerBottomLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
