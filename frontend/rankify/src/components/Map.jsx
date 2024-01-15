import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import '../styles/_map.sass';

const Map = ({ restaurants }) => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([57.7, 11.95], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapRef.current);

      let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      const customMarkerIcon = DefaultIcon;

      L.Marker.prototype.options.icon = customMarkerIcon;

      restaurants.forEach((restaurant) => {
        const { lat, lng } = restaurant.coordinates;
        const { name, address } = restaurant; 
      
        const marker = L.marker([lat, lng], { icon: customMarkerIcon })
          .addTo(mapRef.current)
          .bindPopup(`<b>${name}</b><br>${address}`); 
      
        marker.on('click', function () {
          this.openPopup();
        });
      });
    }
  }, [restaurants]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;