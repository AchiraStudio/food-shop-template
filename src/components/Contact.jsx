import React from 'react';
import siteConfig from '../config/siteConfig';
import { FaInstagram, FaTiktok } from "react-icons/fa";
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      {/* Texture Overlay */}
      <div className="noise-overlay"></div>
      
      <div className="contact-container">
        
        {/* Left Column: Info & Context */}
        <div className="contact-info-col">
          <span className="section-label">05 — Visit Us</span>
          <h2 className="contact-title">
            Start a <br/>
            <span className="serif-italic">Conversation.</span>
          </h2>
          
          <div className="info-grid">
            {/* Address */}
            <div className="info-block">
              <span className="info-label">Location</span>
              <p className="info-value serif-font">
                {siteConfig.contact.address || "Jl. Sudirman No. 45, Jakarta"}
              </p>
            </div>

            {/* Hours */}
            <div className="info-block">
              <span className="info-label">Opening Hours</span>
              <p className="info-value">
                {siteConfig.contact.hours || "Mon - Sun: 08:00 - 22:00"}
              </p>
            </div>

            {/* Contacts */}
            <div className="info-block">
              <span className="info-label">Direct Line</span>
              <a href={`tel:${siteConfig.contact.phone}`} className="info-value link-hover">
                {siteConfig.contact.phone}
              </a>
            </div>

            <div className="info-block">
              <span className="info-label">Inquiries</span>
              <a href={`mailto:${siteConfig.contact.email}`} className="info-value link-hover">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div className="social-connect">
             <span className="info-label">Follow Our Journey</span>
             <div className="social-links">
                <a href="#" className="social-txt"><FaInstagram></FaInstagram></a>
                <span className="separator">/</span>
                <a href="#" className="social-txt"><FaTiktok></FaTiktok></a>
             </div>
          </div>
        </div>
        
        {/* Right Column: The Form */}
        <div className="contact-form-col">
          <form className="minimal-form">
             <div className="form-header">
               <p>Or send us a message directly here:</p>
             </div>

             <div className="input-group">
               <input type="text" id="name" placeholder=" " required />
               <label htmlFor="name">Your Name</label>
             </div>
             
             <div className="input-group">
               <input type="email" id="email" placeholder=" " required />
               <label htmlFor="email">Email Address</label>
             </div>
             
             <div className="input-group">
               <textarea id="message" rows="4" placeholder=" " required></textarea>
               <label htmlFor="message">How can we help?</label>
             </div>
             
             <button type="submit" className="submit-btn">
               <span>Send Message</span>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;