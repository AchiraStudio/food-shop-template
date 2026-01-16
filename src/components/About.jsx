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
              {/* UPDATED: Gambar detail sebaiknya makanan/chef */}
              <img 
                src="images/food-detail.jpg" 
                alt="The Craft" 
                className="detail-img" 
                onError={(e) => e.target.style.display = 'none'} 
              />
            </div>

            {/* Decorative Circle Text */}
            <div className="est-circle">
               {/* UPDATED: Tahun pendirian disesuaikan */}
               <span className="est-year">Est. 2021</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className="about-content">
          <div className="section-label">03 — The Philosophy</div>
          
          {/* UPDATED: Title disesuaikan agar lebih umum (bukan cuma architecture/aroma kopi) */}
          <h2 className="about-title">
            Where <span className="serif-italic">Passion</span> <br/>
            Meets <span className="highlight-gold">Flavor.</span>
          </h2>

          <div className="text-body">
            <p className="lead-paragraph">
              {/* Drop cap otomatis mengambil huruf pertama dari teks di siteConfig ('K' dari KOTAKAN) */}
              <span className="drop-cap">{siteConfig.about.text.charAt(0)}</span>
              {siteConfig.about.text.substring(1)}
            </p>
            <p className="secondary-text">
              Kami percaya bahwa makanan enak tidak harus rumit. Setiap Ricebox yang kami sajikan diracik dengan bumbu pilihan untuk menghadirkan kehangatan rasa Asia Tenggara langsung ke tangan Anda.
            </p>
          </div>

          <div className="signature-block">
            <div className="signature-svg">
              {/* Artistic SVG Signature */}
              <svg width="150" height="50" viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 35C10 35 25 15 40 25C55 35 45 45 35 35C25 25 50 10 70 20C90 30 80 40 100 35C120 30 140 10 140 10" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="founder-name">Laninka Siamiyono</span>
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