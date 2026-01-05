// src/components/About.jsx
import React from 'react';
import siteConfig from '../config/siteConfig';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-background">
        <div className="about-gradient"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2>{siteConfig.about.title}</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>{siteConfig.about.text}</p>
            <a href="#contact" className="btn btn-primary">
              {siteConfig.about.ctaText}
            </a>
          </div>
          <div className="about-image-container">
            <img src={siteConfig.about.imagePath} alt="About Kotakan Cafe" className="about-image" />
            <div className="image-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;