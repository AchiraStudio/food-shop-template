import React from 'react';
import siteConfig from '../config/siteConfig';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Texture for continuity */}
      <div className="noise-overlay"></div>
      
      {/* Background Decor - Subtle vertical lines */}
      <div className="grid-lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="about-container">
        
        {/* Left Column: Visual Composition */}
        <div className="about-visuals">
          <div className="visual-group">
            {/* Main Architectural Image */}
            <div className="main-image-mask">
              <img 
                src={siteConfig.about.imagePath || "images/about-space.jpg"} 
                alt="The Space" 
                className="main-img" 
              />
            </div>
            
            {/* Secondary Detail Image (Floating) */}
            <div className="detail-image-mask">
              <img 
                src="images/coffee-pour.jpg" /* Replace with a detail shot */
                alt="The Craft" 
                className="detail-img" 
                onError={(e) => e.target.style.display = 'none'} // Fallback if image missing
              />
            </div>

            {/* Decorative Circle Text */}
            <div className="est-circle">
               <span className="est-year">Est. 2024</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className="about-content">
          <div className="section-label">03 — The Philosophy</div>
          
          <h2 className="about-title">
            Where <span className="serif-italic">Architecture</span> <br/>
            Meets <span className="highlight-gold">Aroma.</span>
          </h2>

          <div className="text-body">
            <p className="lead-paragraph">
              <span className="drop-cap">K</span>
              {siteConfig.about.text || "otakan wasn't built just to serve coffee; it was designed to slow down time. We believe that the environment you consume your coffee in is just as vital as the beans themselves."}
            </p>
            <p className="secondary-text">
              Every corner of our space is intentional. From the rough textures of the walls that ground you, to the carefully curated playlist that uplifts you. We are a sanctuary for the creatives, the dreamers, and the early risers.
            </p>
          </div>

          <div className="signature-block">
            <div className="signature-svg">
              {/* Artistic SVG Signature */}
              <svg width="150" height="50" viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 35C10 35 25 15 40 25C55 35 45 45 35 35C25 25 50 10 70 20C90 30 80 40 100 35C120 30 140 10 140 10" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="founder-name">The Founders</span>
          </div>

          <div className="about-actions">
            <a href="#contact" className="btn-modern outline">
              {siteConfig.about.ctaText || "Visit the Space"}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;