import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import 'tailwindcss/tailwind.css';

import L from 'leaflet'; // Import Leaflet library

const Map = () => {
  const position = [30.60937, 32.27125];

  // Use the default Leaflet icon
  const customIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  });

  const isMobile = window.innerWidth <= 768; // You can adjust this breakpoint

  return (
    <div className='flex items-center justify-center' style={{ width: '90%', height: '50%' }}>
      <div className="h-96 w-96 flex items-center justify-center" style={{ width: '100%', height: '500px' }}>
        <MapContainer
          center={position}
          zoom={13}
          style={{ width: '100%', height: '100%', borderRadius: '10px' }}
          attributionControl={false}
          scrollWheelZoom={true} // Disable scroll wheel zoom on mobile
          dragging={isMobile?false:true} // Disable dragging on mobile
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup autoOpen={true}>
              شركة الماهر التجارية
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
