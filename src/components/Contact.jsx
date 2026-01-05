// src/components/Contact.jsx
import React from 'react';
import siteConfig from '../config/siteConfig';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-background">
        <div className="contact-gradient"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2>{siteConfig.contact.title}</h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Alamat</h3>
                <p>{siteConfig.contact.address}</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Telepon</h3>
                <p>{siteConfig.contact.phone}</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>{siteConfig.contact.email}</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaClock />
              </div>
              <div className="contact-details">
                <h3>Jam Buka</h3>
                <p>{siteConfig.contact.hours}</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <div className="contact-form">
              <h3>Kirim Kami Pesan</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Nama Anda" required />
                </div>
                
                <div className="form-group">
                  <input type="email" placeholder="Email Anda" required />
                </div>
                
                <div className="form-group">
                  <textarea placeholder="Pesan Anda" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Kirim Pesan</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;