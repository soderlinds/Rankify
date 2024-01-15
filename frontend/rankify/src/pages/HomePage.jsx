import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Map from "../components/Map";
import "../styles/_homepage.sass";
import restaurantData from "../data/restaurantData"; 

const HomePage = () => {
  const [restaurants] = useState(restaurantData);
  const [searchTerm, setSearchTerm] = useState("");
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/reviews");
      const data = await response.json();

      setReviews(data.reviews);
      calculateAverageRating(data.reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const calculateAverageRating = (fetchedReviews) => {
    if (fetchedReviews.length > 0) {
      const totalRating = fetchedReviews.reduce(
        (sum, review) => sum + parseInt(review.rating),
        0
      );
      const calculatedAverageRating = totalRating / fetchedReviews.length;
      setAverageRating(calculatedAverageRating.toFixed(1));
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const cedarGrillRestaurant = restaurants.find(
    (restaurant) => restaurant.name === 'Cedar Grill & Lounge'
  );

  if (cedarGrillRestaurant) {
    cedarGrillRestaurant.rating = averageRating;
  }

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header searchTerm={searchTerm} handleSearch={handleSearch} showSearchBar={true} showBackArrow={false} />
      <div className="homepage-wrapper">
        <div className="homepage-content">
          <div>
            <div className="map-container">
              <Map restaurants={filteredRestaurants} />
            </div>
            <div className="restaurant-list">
              {filteredRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="restaurant-item-link">
                  <div className="restaurant-item">
                    {restaurant.name === 'Cedar Grill & Lounge' ? (
                      <Link to="/cedar-grill" className="restaurant-link">
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="restaurant-image"
                        />
                        <div className="restaurant-details">
                          <div className="restaurant-info">
                            <div className="restaurant-category">
                              {restaurant.cuisine} ● {restaurant.type}
                            </div>
                            <div>
                              <div>{restaurant.name}</div>
                              <p className="restaurant-address">
                                {restaurant.address}
                              </p>
                            </div>
                            <div className="restaurant-score">
                              {restaurant.rating}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="non-redirected-restaurant">
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="restaurant-image"
                        />
                        <div className="restaurant-details">
                          <div className="restaurant-info">
                            <div className="restaurant-category">
                              {restaurant.cuisine} ● {restaurant.type}
                            </div>
                            <div>
                              <div>{restaurant.name}</div>
                              <p className="restaurant-address">
                                {restaurant.address}
                              </p>
                            </div>
                            <div className="restaurant-score">
                              {restaurant.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default HomePage;