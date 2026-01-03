import React from 'react';
import siteConfig from '../config/siteConfig';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>{siteConfig.about.title}</h2>
        </div>
        
        <div className="about-content">
          <p>{siteConfig.about.text}</p>
        </div>
      </div>
    </section>
  );
};

export default About;