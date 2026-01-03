import React, { useState } from 'react';
import siteConfig from '../config/siteConfig';
import '../styles/menu.css'

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = siteConfig.menuCategories[activeTab];

  return (
    <section id="menu" className="menu">
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
              <img
                src={item.image}
                alt={item.name}
                className="menu-card-image"
              />

              <div className="menu-card-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="menu-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
