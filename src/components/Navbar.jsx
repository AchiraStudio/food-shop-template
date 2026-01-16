import React, { useState, useEffect } from 'react';
import siteConfig from '../config/siteConfig';
import '../styles/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Body Scroll Lock when Menu Open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`navbar-section ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          
          {/* Logo / Brand */}
          <div className="navbar-brand">
            <a href="#home" className="brand-link" onClick={() => setIsMobileMenuOpen(false)}>
              {/* Option 1: Image Logo (Uncomment if needed) */}
              {/* <img src="/images/logo.png" alt="Logo" className="brand-img" /> */}
              
              {/* Option 2: Typographic Logo (Matches the theme better) */}
              <span className="brand-text">
                KOTAKAN<span className="brand-dot">.</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            <ul className="desktop-links">
              {siteConfig.navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="link-item">
                    <span className="link-text">{link.name}</span>
                    <span className="link-dot"></span>
                  </a>
                </li>
              ))}
            </ul>
            
            <a href="#reservation" className="cta-btn-modern">
              Book a Table
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="bar top"></span>
            <span className="bar bottom"></span>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Overlay */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        {/* Texture */}
        <div className="noise-overlay"></div>
        
        <div className="mobile-content">
          <ul className="mobile-links">
            {siteConfig.navLinks.map((link, index) => (
              <li key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                <a 
                  href={link.href} 
                  className="mobile-link-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mobile-num">0{index + 1}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-footer">
            <p className="mobile-address">{siteConfig.contact.address}</p>
            <div className="mobile-socials">
              <span>Instagram</span>
              <span>•</span>
              <span>TikTok</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;