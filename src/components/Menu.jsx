import React, { useState } from 'react';
import siteConfig from '../config/siteConfig';
import '../styles/menu.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = siteConfig.menuCategories[activeTab];

  return (
    <section id="menu" className="menu">
      <div className="menu-background">
        <div className="menu-gradient"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2>Menu Kami</h2>
          <p>{siteConfig.tagline}</p>
        </div>

        {/* Tabs */}
        <div className="menu-tabs">
          {siteConfig.menuCategories.map((cat, index) => (
            <button
              key={index}
              className={`menu-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="menu-grid">
          {activeCategory.items.map((item, index) => (
            <div className="menu-card" key={index}>
              <div className="menu-card-image-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-card-image"
                />
                <div className="menu-card-overlay"></div>
              </div>

              <div className="menu-card-content">
                <div className="menu-card-header">
                  <h3>{item.name}</h3>
                  <span className="menu-price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <button className="menu-card-btn">
                  <span>Pesan Sekarang</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;