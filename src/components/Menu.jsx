import React from 'react';
import siteConfig from '../config/siteConfig';

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-header">
          <h2>Menu Kami</h2>
          <p>{siteConfig.tagline}</p>
        </div>
        
        <div className="menu-grid">
          {siteConfig.menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-item-content">
                <h3>{item.name}</h3>
                <p className="menu-item-description">{item.description}</p>
                <span className="menu-item-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;