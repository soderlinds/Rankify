import React from "react";
import ReviewList from "../components/ReviewList";
import '../styles/_reviews.sass';

const Reviews = ({ reviews, averageRating }) => {
  return (
    <div className="reviews">
      <div className="reviews-header">How did our guests rate us?</div>
      <div className="scrollable-box">
        <ReviewList reviews={reviews} averageRating={averageRating} />
      </div>
    </div>
  );
};

export default Reviews;
