import React from 'react';
import '../styles/_reviewlist.sass'; 

const ReviewList = ({ reviews, averageRating }) => {
  const renderRatingDots = (rating) => {
    const maxRating = 5;
    const filledDots = Math.floor(rating);
    const remainder = rating - filledDots;

    const ratingDots = [];

    for (let i = 0; i < filledDots; i++) {
      ratingDots.push(<span key={i} className="filled-dot"></span>);
    }

    if (remainder > 0) {
      ratingDots.push(<span key={filledDots} className="partial-dot"></span>);
    }

    const emptyDots = maxRating - filledDots - (remainder > 0 ? 1 : 0);
    for (let i = 0; i < emptyDots; i++) {
      ratingDots.push(<span key={i + filledDots + (remainder > 0 ? 1 : 0)} className="empty-dot"></span>);
    }

    return ratingDots;
  };

  return (
    <div>
      <div>
        <p>{renderRatingDots(parseFloat(averageRating))} {reviews.length} Reviews</p>
      </div>
      <ul className="review-list">
        {reviews.length === 0 ? (
          <li>No reviews available</li>
        ) : (
          reviews.map((review, index) => (
            <li key={index} className="review-item">
              <div className="review-wrapper">
                <p>
                  {review.title}{' '}
                  <span className="rating-dots">{renderRatingDots(review.rating)}</span>
                </p>
                <p>{review.reviewText}</p>
                <p>{review.timestamp}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ReviewList;
