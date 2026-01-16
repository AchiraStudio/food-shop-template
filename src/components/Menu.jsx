import React, { useState } from 'react';
import siteConfig from '../config/siteConfig';
import '../styles/menu.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = siteConfig.menuCategories[activeTab];

  return (
    <section id="menu" className="menu-section">
      {/* Texture for continuity */}
      <div className="noise-overlay"></div>
      
      <div className="content-container">
        
        {/* Header: Editorial Style */}
        <div className="menu-header">
          <span className="section-label">02 — Our Offerings</span>
          <h2 className="menu-title">
            Curated <span className="accent-italic">Tastes</span>
          </h2>
          <p className="menu-description">
            {siteConfig.tagline || "Ingredients sourced with intention. Flavors crafted with patience."}
          </p>
        </div>

        {/* Categories: Minimalist Text Links */}
        <div className="category-nav">
          {siteConfig.menuCategories.map((cat, index) => (
            <button
              key={index}
              className={`category-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="cat-text">{cat.category}</span>
              <span className="cat-dot"></span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="menu-grid">
          {activeCategory.items.map((item, index) => (
            <div className="menu-card" key={index} style={{ animationDelay: `${index * 100}ms` }}>
              
              <div className="card-visual">
                <div className="arch-frame">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-img"
                  />
                </div>
                <div className="price-tag">
                  {item.price}
                </div>
              </div>

              <div className="card-details">
                <div className="item-header">
                  <h3 className="item-name">{item.name}</h3>
                  <div className="dotted-line"></div>
                </div>
                <p className="item-desc">{item.description}</p>
                
                <button className="add-btn">
                  <span>Add to Order</span>
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