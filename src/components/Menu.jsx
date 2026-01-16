import React, { useState, useMemo, useEffect, useRef } from 'react';
import siteConfig from '../config/siteConfig';
import '../styles/menu.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Ref for the section to trigger animations on scroll
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Memoize the active category data to prevent unnecessary recalculations
  const activeItems = useMemo(() => 
    siteConfig.menuCategories[activeTab].items, 
  [activeTab]);

  // Simple Intersection Observer to trigger entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle Tab Change with a small delay for smooth transition effect
  const handleTabChange = (index) => {
    if (index === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsAnimating(false);
    }, 300); // Matches CSS transition time
  };

  return (
    <section id="menu" className="menu-section" ref={sectionRef}>
      {/* Texture for continuity */}
      <div className="noise-overlay"></div>
      
      <div className="content-container">
        
        {/* Header */}
        <div className={`menu-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-label">02 — Our Offerings</span>
          <h2 className="menu-title">
            Curated <span className="accent-italic">Tastes</span>
          </h2>
          <p className="menu-description">
            {siteConfig.tagline || "Ingredients sourced with intention. Flavors crafted with patience."}
          </p>
        </div>

        {/* Categories: Scrollable on mobile, Centered on Desktop */}
        <div className={`category-nav-wrapper ${isVisible ? 'animate-in' : ''}`}>
          <div className="category-nav">
            {siteConfig.menuCategories.map((cat, index) => (
              <button
                key={index}
                className={`category-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => handleTabChange(index)}
                aria-label={`View ${cat.category} menu`}
              >
                <span className="cat-text">{cat.category}</span>
                <span className="cat-dot"></span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className={`menu-grid ${isAnimating ? 'fading-out' : 'fading-in'}`}>
          {activeItems.map((item, index) => (
            <div 
              className={`menu-card ${isVisible ? 'animate-card' : ''}`} 
              key={`${activeTab}-${index}`} // Key change forces re-render for animation reset
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              <div className="card-visual">
                <div className="arch-frame">
                  {/* Lazy load images for performance */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-img"
                    loading="lazy"
                    width="400" 
                    height="500"
                  />
                </div>
                <div className="price-tag">
                  {item.price}
                </div>
              </div>

              <div className="card-details">
                <div className="item-header">
                  <h3 className="item-name">{item.name}</h3>
                </div>
                <p className="item-desc">{item.description}</p>
                
                <button className="add-btn" aria-label={`Add ${item.name} to order`}>
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