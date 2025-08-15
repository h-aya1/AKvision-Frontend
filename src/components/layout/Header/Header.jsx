import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

// Import icons
import { 
  Bars3Icon, 
  XMarkIcon, 
  MagnifyingGlassIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' },
    { name: 'Blog', path: '/blog' },
  ];

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    setIsSearchOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-container">
            {/* Logo */}
            <Link to="/" className="logo-container">
              <img src="/logo.svg" alt="AKvision Logo" className="logo" />
              <span className="logo-text">AKvision</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              <button 
                className="search-button" 
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
              >
                <MagnifyingGlassIcon />
              </button>
              
              <Link to="/contact" className="contact-button">
                Contact Us
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="mobile-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <Link 
              to="/contact" 
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <div className={`search-overlay ${isSearchOpen ? 'active' : ''}`}>
        <button 
          className="search-close" 
          onClick={() => setIsSearchOpen(false)}
          aria-label="Close search"
        >
          <XMarkIcon />
        </button>
        
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search for products, solutions..." 
            autoFocus
          />
          <button type="submit" className="search-submit" aria-label="Submit search">
            <MagnifyingGlassIcon />
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;