import React from "react";
import Map from "../components/Map";
import '../styles/_mapsection.sass';

const MapSection = () => {
  return (
    <div className="map">
      <Map
        restaurants={[
          {
            coordinates: { lat: 57.7, lng: 11.95 },
            name: "Cedar Grill & Lounge",
            address: "Olof Palmes plats 8, Göteborg",
          },
        ]}
      />
    </div>
  );
};

export default MapSection;
