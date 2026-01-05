// src/components/Footer.jsx
import React from 'react';
import siteConfig from '../config/siteConfig';
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
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
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>{siteConfig.businessName}</h3>
            <p>{siteConfig.tagline}</p>
          </div>
          
          <div className="footer-links">
            <h4>Menu Cepat</h4>
            <ul>
              {siteConfig.navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Ikuti Kami</h4>
            <div className="social-links">
              {siteConfig.footer.socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  {getIcon(link.name)}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{siteConfig.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;