import React, { useEffect } from 'react';
import siteConfig from '../config/siteConfig';
import '../styles/hero.css';

const Hero = () => {
  // Simple parallax effect for the image
  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX * -0.05) / 8;
      const moveY = (e.clientY * -0.05) / 8;
      const image = document.querySelector('.hero-visual-wrapper');
      if(image) {
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Texture Overlay for the "Grounded" feel */}
      <div className="noise-overlay"></div>
      
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="hero-grid">
        
        {/* Left: Content */}
        <div className="hero-content">
          <div className="badge-container">
            <span className="pill-badge">Established 2024</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Taste the</span>
            <span className="title-line accent-font">Extraordinary</span>
            <span className="title-line">Every Day.</span>
          </h1>
          
          <p className="hero-description">
            {siteConfig.hero.subheadline || "Experience the perfect blend of architectural tranquility and artisanal coffee. A space designed for pauses, conversations, and inspiration."}
          </p>
          
          <div className="hero-actions">
            <a href={siteConfig.hero.ctaLink} className="btn-modern primary">
              <span>{siteConfig.hero.ctaText || "Visit Us"}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#reviews" className="btn-modern text-link">
              Read Reviews
            </a>
          </div>
          
          <div className="hero-footer">
             <div className="stat-item">
               <span className="stat-num">4.5+</span>
               <span className="stat-label">Rating</span>
             </div>
             <div className="separator"></div>
             <div className="stat-item">
               <span className="stat-num">-</span>
               <span className="stat-label">Visitors</span>
             </div>
          </div>
        </div>

        {/* Right: Visuals */}
        <div className="hero-visuals">
          <div className="hero-visual-wrapper">
            <div className="image-arch-mask">
              <img src="images/kotakan.png" alt="Kotakan Aesthetics" className="hero-img" />
            </div>
            
            {/* Floating Badge Element */}
            <div className="floating-badge">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text>
                  <textPath href="#circlePath" fill="currentColor">
                    • KOTAKAN • AUTHENTIC • SPACE
                  </textPath>
                </text>
              </svg>
              <div className="badge-center"></div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;