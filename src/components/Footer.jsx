import React from 'react';
import siteConfig from '../config/siteConfig';
import { FaInstagram, FaTiktok, FaFacebookF, FaArrowUp } from "react-icons/fa";
import '../styles/footer.css';

const getIcon = (name) => {
  switch (name) {
    case 'Instagram': return <FaInstagram />;
    case 'Tiktok': return <FaTiktok />;
    case 'Facebook': return <FaFacebookF />;
    default: return null;
  }
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Texture Overlay */}
      <div className="noise-overlay"></div>

      <div className="footer-container">
        
        {/* Top: Call to Action & Navigation */}
        <div className="footer-top">
          <div className="footer-nav">
            <span className="nav-label">Explore</span>
            <ul className="nav-list">
              {siteConfig.navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="nav-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-summary">
            <span className="nav-label">Find Us</span>
            <p>{siteConfig.contact.address}</p>
            <a href={`mailto:${siteConfig.contact.email}`} className="footer-email">
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="footer-social-col">
            <span className="nav-label">Socials</span>
            <div className="social-row">
              {siteConfig.footer.socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  aria-label={link.name}
                >
                  {getIcon(link.name)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle: Massive Brand Name */}
        <div className="footer-brand-wrapper">
          <h1 className="giant-brand-text">
            {siteConfig.businessName || "KOTAKAN"}
          </h1>
        </div>

        {/* Bottom: Copyright & Utility */}
        <div className="footer-bottom">
          <div className="copyright">
            <span>&copy; {currentYear} {siteConfig.businessName}.</span>
            <span className="divider">•</span>
            <span>All Rights Reserved.</span>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn">
            <span>Back to Top</span>
            <div className="arrow-circle">
              <FaArrowUp />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;