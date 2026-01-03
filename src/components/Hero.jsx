import React from 'react';
import siteConfig from '../config/siteConfig';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>{siteConfig.hero.headline}</h1>
          <p>{siteConfig.hero.subheadline}</p>
          <a href={siteConfig.hero.ctaLink} className="btn btn-primary">
            {siteConfig.hero.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;