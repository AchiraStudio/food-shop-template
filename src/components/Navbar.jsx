import React, { useState, useEffect } from 'react';
import siteConfig from '../config/siteConfig';
import '../styles/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="#home" className="brand-link" onClick={closeMobileMenu}>
              <img 
                src="/images/kotakan-logo.png" 
                alt={`${siteConfig.businessName} Logo`} 
                className="brand-logo" 
              />
            </a>
          </div>
          
          <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {siteConfig.navLinks.map((link, index) => (
                <li key={index} className="nav-item">
                  <a 
                    href={link.href} 
                    className="nav-link"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* <div className="navbar-cta">
              <a href="#contact" className="btn btn-primary" onClick={closeMobileMenu}>
                Hubungi Kami
              </a>
            </div> */}
          </div>
          
          <button 
            className="navbar-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </>
  );
};

export default Navbar;