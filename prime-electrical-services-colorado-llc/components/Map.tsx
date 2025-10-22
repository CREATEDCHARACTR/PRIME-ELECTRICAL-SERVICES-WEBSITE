import React, { useEffect, useRef } from 'react';

// This tells TypeScript that a global variable `L` (from Leaflet) exists.
declare var L: any;

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null); // To hold the map instance

  const DENVER_COORDS: [number, number] = [39.7392, -104.9903];
  const SERVICE_RADIUS_METERS = 50000; // ~31 miles

  useEffect(() => {
    // Initialize map only if the container exists and map hasn't been initialized yet
    if (mapContainerRef.current && !mapInstanceRef.current) {
      // Create map instance
      const map = L.map(mapContainerRef.current).setView(DENVER_COORDS, 9);
      mapInstanceRef.current = map;

      // Add tile layer (the map background)
      // Using a darker theme to match the site
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      // Add a circle to represent the service area
      L.circle(DENVER_COORDS, {
        color: '#D4AF37',
        fillColor: '#D4AF37',
        fillOpacity: 0.2,
        radius: SERVICE_RADIUS_METERS,
      }).addTo(map);

      // Add a marker for the main office location
      L.marker(DENVER_COORDS).addTo(map)
        .bindPopup('<b>Prime Electrical Services</b><br>Serving the Denver Metro Area.')
        .openPopup();
    }
    
    // Cleanup function to remove map on component unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div 
        ref={mapContainerRef} 
        style={{ height: '500px', width: '100%' }} 
        aria-label="Interactive map of service area"
    />
  );
};

export default Map;
