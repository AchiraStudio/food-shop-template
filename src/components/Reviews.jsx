import React, { useState } from "react";
import siteConfig from "../config/siteConfig";
import "../styles/reviews.css";

const truncateText = (text, maxCharacters) => {
  if (text.length <= maxCharacters) {
    return {
      truncated: text,
      isTruncated: false
    };
  }

  return {
    truncated: text.slice(0, maxCharacters).trim(),
    isTruncated: true
  };
};

const Reviews = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { items, maxCharacters, subtitle } = siteConfig.reviews;

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="section-header">
          <h2>Apa Kata Mereka</h2>
          <p>{subtitle}</p>
        </div>

        <div className="reviews-grid">
          {items.map((review, index) => {
            const { truncated, isTruncated } = truncateText(
              review.text,
              maxCharacters
            );
            const isExpanded = expandedIndex === index;

            return (
              <div className="review-card" key={index}>
                <div className="review-stars">★★★★★</div>

                <p className="review-text">
                  “
                  {isExpanded || !isTruncated
                    ? review.text
                    : `${truncated}…`}
                  ”
                </p>

                {isTruncated && (
                  <button
                    className="review-toggle"
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : index)
                    }
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}

                <div className="review-author">
                  <strong>{review.name}</strong>
                  <span>{review.source}</span>
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
