import React from "react";
import '../styles/_restaurantinfo.sass';

const RestaurantInfo = () => {
  return (
    <div className="restaurantinfo-wrapper">
      <div className="restaurantinfo-title">Cedar Grill & Lounge</div>
      <p className="restaurantinfo-info">
        We specialize in sizzling and savory dishes that celebrate the essence of classic American cuisine.
      </p>
      <div className="restaurantinfo-text">
        <div className="restaurantinfo-header">KITCHEN</div>
        <p>American</p>
        <div className="restaurantinfo-header">SPECIAL DIET</div>
        <p>A selection of vegetarian options</p>
        <div className="restaurantinfo-header">MEALS</div>
        <p>Lunch, Dinner</p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
