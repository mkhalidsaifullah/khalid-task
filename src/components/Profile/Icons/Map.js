
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./Map.css";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const Map = ({ coordinates }) => {
  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey="YOUR_ACTUAL_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
