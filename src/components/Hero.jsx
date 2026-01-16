import React, { useEffect } from 'react';
import siteConfig from '../config/siteConfig';
import '../styles/hero.css';

const Hero = () => {
  useEffect(() => {
    // Parallax logic: Moves the Background Circle slightly
    const handleMouseMove = (e) => {
      // Disable on mobile to save battery/performance
      if (window.innerWidth < 768) return; 

      const moveX = (e.clientX * -0.03) / 8;
      const moveY = (e.clientY * -0.03) / 8;
      const bgCircle = document.querySelector('.bg-circle-container');
      
      if(bgCircle) {
        // We keep the -50% translate because it's centered via CSS
        bgCircle.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Texture Overlay */}
      <div className="noise-overlay"></div>
      
      {/* 
        THE BACKGROUND CIRCLE IMAGE 
        Positioned absolute behind content
      */}
      <div className="bg-circle-container">
        <div className="img-overlay"></div> {/* Darkens image for text readability */}
        <img src="images/kotakan.png" alt="Kotakan Aesthetics" className="circle-hero-img" />
      </div>

      {/* Background Ambient Glows (Behind the circle) */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      {/* MAIN CONTENT - Centered */}
      <div className="hero-content-wrapper">
        <div className="badge-container">
          <span className="pill-badge">Established 2021</span>
        </div>
        
        <h1 className="hero-title">
          <span className="title-line">Taste the</span>
          <span className="title-line accent-font">Extraordinary</span>
          <span className="title-line">Every Day.</span>
        </h1>
        
        <p className="hero-description">
          {siteConfig.hero.subheadline || "Experience the authentic flavors of Asia, crafted with passion and served with a modern twist."}
        </p>
        
        <div className="hero-actions">
          <a href={siteConfig.hero.ctaLink || "#menu"} className="btn-modern primary">
            <span>{siteConfig.hero.ctaText || "Visit Us"}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#reviews" className="btn-modern text-link">
            Read Reviews
          </a>
        </div>
        
        {/* Footer Stats - Centered */}
        <div className="hero-footer">
           <div className="stat-item">
             <span className="stat-num">4.8+</span>
             <span className="stat-label">Rating</span>
           </div>
           <div className="separator"></div>
           <div className="stat-item">
             <span className="stat-num">SE</span>
             <span className="stat-label">Asian Taste</span>
           </div>
        </div>
      </div>
      
      {/* Optional: Keep the spinning text, but move it to bottom corner independently */}
      <div className="floating-badge-corner">
          <svg viewBox="0 0 100 100" width="100" height="100">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text>
              <textPath href="#circlePath" fill="currentColor">
                • KOTAKAN • ASIAN • TASTE
              </textPath>
            </text>
          </svg>
          <div className="badge-center"></div>
      </div>

    </section>
  );
};

export default Hero;