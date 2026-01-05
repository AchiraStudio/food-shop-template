// src/components/Hero.jsx
import React from 'react';
import siteConfig from '../config/siteConfig';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {siteConfig.hero.headline}
            </h1>
            <p className="hero-subtitle">
              {siteConfig.hero.subheadline}
            </p>
            <div className="hero-cta">
              <a href={siteConfig.hero.ctaLink} className="btn btn-primary">
                {siteConfig.hero.ctaText}
              </a>
              <a href="#reviews" className="btn btn-secondary">
                Reviews
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <img src="images/kotakan.png" alt="Kotakan Cafe" className="hero-img" />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;