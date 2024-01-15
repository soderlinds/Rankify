import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/_submitreviewpage.sass";

const SubmitReviewPage = () => {
  const { qrCodeId } = useParams();
  const [showThankYou, setShowThankYou] = useState(false);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      description: reviewText,
      rating: parseInt(rating),
      qrCodeId: qrCodeId,
    };

    try {
      const response = await fetch('http://localhost:5000/api/submit-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowThankYou(true);
        setTitle('');
        setRating('');
        setReviewText('');
      } else {
        alert('Failed to submit the review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the review:', error);
      alert('An error occurred while submitting the review. Please try again later.');
    }
  };

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const getButtonClassName = (num) => {
    return `rating-button ${num <= parseInt(rating) ? 'active' : ''}`;
  };

  return (
    <div className="submitreview-wrapper">
      <div className="submitreview-header">Submit a review for Cedar Grill & Lounge</div>

      {!showThankYou ? (
        <form className="submitreview-form" onSubmit={handleSubmit}>
          <div>
            <div>Summarize your experience in one word:</div>
            <input
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                e.target.setCustomValidity(''); 
              }}
              onInvalid={(e) => e.target.setCustomValidity('Please provide a title')}
              required
            />
          </div>
          <div>
            <div>Rate us:</div>
            <div className="rating-buttons">
              {[1, 2, 3, 4, 5].map((num) => (
                <button className={getButtonClassName(num)} key={num} type="button" onClick={() => handleRatingClick(num)}>
                  {num}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div>Tell us more:</div>
            <textarea
              id="review-text"
              value={reviewText}
              onChange={(e) => {
                setReviewText(e.target.value);
                e.target.setCustomValidity(''); 
              }}
              onInvalid={(e) => e.target.setCustomValidity('Please provide a review text')}
              required
            />
          </div>
          <button className="review-button" type="submit">Submit review</button>
        </form>
      ) : (
        <div className="thank-you-message">Thank you for your review!</div>
      )}
    </div>
  );
};

export default SubmitReviewPage;
