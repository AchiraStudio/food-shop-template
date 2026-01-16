import React, { useState } from "react";
import siteConfig from "../config/siteConfig";
import "../styles/reviews.css";

const truncateText = (text, maxCharacters) => {
  if (text.length <= maxCharacters) return { truncated: text, isTruncated: false };
  return {
    truncated: text.slice(0, maxCharacters).trim(),
    isTruncated: true
  };
};

const Reviews = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { items, maxCharacters } = siteConfig.reviews;

  return (
    <section id="reviews" className="reviews-section">
      {/* Texture Overlay */}
      <div className="noise-overlay"></div>

      <div className="reviews-container">
        
        {/* Editorial Header */}
        <div className="reviews-header">
          <span className="section-label">04 — Community</span>
          <h2 className="reviews-title">
            Words from the <br/> 
            <span className="serif-italic">Patrons.</span>
          </h2>
        </div>

        {/* Staggered Grid */}
        <div className="reviews-grid">
          {items.map((review, index) => {
            const { truncated, isTruncated } = truncateText(review.text, maxCharacters);
            const isExpanded = expandedIndex === index;

            return (
              <div className={`review-card-modern ${isExpanded ? 'expanded' : ''}`} key={index}>
                
                {/* Background Decor */}
                <div className="watermark-quote">“</div>

                <div className="card-top">
                   <div className="star-row">
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M6 0L7.6 4.8H12.5L8.5 7.7L10 12.5L6 9.6L2 12.5L3.5 7.7L-0.5 4.8H4.4L6 0Z" fill="#D4AF37"/>
                       </svg>
                     ))}
                   </div>
                   <span className="verified-badge">Verified Visit</span>
                </div>

                <div className="review-body">
                  <p className="review-text">
                    {isExpanded || !isTruncated ? review.text : `${truncated}...`}
                  </p>
                  
                  {isTruncated && (
                    <button
                      className="read-more-btn"
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    >
                      {isExpanded ? "Close" : "Read Full Story"}
                    </button>
                  )}
                </div>

                <div className="reviewer-info">
                   <div className="avatar-frame">
                      <img src={review.avatar} alt={review.name} className="avatar-img" />
                   </div>
                   <div className="meta-text">
                      <strong className="author-name">{review.name}</strong>
                      <span className="author-role">Guest</span>
                   </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;