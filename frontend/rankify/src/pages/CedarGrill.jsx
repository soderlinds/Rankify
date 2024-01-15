import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import Reviews from "../components/Reviews";
import RestaurantInfo from "../components/RestaurantInfo";
import MapSection from "../components/MapSection";
import "../styles/_cedargrill.sass";
import grill from "../assets/grill5.jpg";
import grill6 from "../assets/grill6.jpg";
import grill2 from "../assets/grill2.jpg";
import grill4 from "../assets/grill4.jpg";

const CedarGrill = () => {
  const pictures = [grill, grill2, grill4, grill6];
  const [currentImage, setCurrentImage] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/reviews");
      const data = await response.json();

      console.log("Received data from server:", data);

      const formattedReviews = data.reviews.map((review) => ({
        title: review.title,
        rating: review.rating,
        reviewText: review.description,
        timestamp: review.timestamp,
      }));
      setReviews(formattedReviews);
      calculateAverageRating(formattedReviews);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    }
  };

  const calculateAverageRating = (fetchedReviews) => {
    const totalRating = fetchedReviews.reduce(
      (sum, review) => sum + parseInt(review.rating),
      0
    );
    const calculatedAverageRating =
      totalRating / (fetchedReviews.length || 1);
    setAverageRating(calculatedAverageRating.toFixed(2));
  };

  return (
    <>
      <Header showSearchBar={false} showBackArrow={true} />
      <ImageSlider pictures={pictures} currentImage={currentImage} setCurrentImage={setCurrentImage} />
      <div className="container-info">
        <Reviews reviews={reviews} averageRating={averageRating} />
        <RestaurantInfo />
      </div>
      <div>
        <MapSection />
      </div>
    </>
  );
};

export default CedarGrill;
