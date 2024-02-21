// UserProfile.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import CountryFlag from "react-country-flag";
import "./Card.css";
import Container from "../Icons/Container.js";
import UserAvatar from "../Avatar/UserAvatar";

const UserProfile = () => {
  const { state } = useLocation();
  const user = state.user;
  console.log(user);

  if (!user) return <div>Loading...</div>;

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: user.location.coordinates.latitude,
    lng: user.location.coordinates.longitude,
  };

  return (
    <div>
      <div className="container">
        <UserAvatar imageUrl={user.picture.large} />
        <Container user={user} />

        <CountryFlag
          className="country-flag"
          countryCode={user.nat}
          svg
          style={{ width: "2em", height: "2em" }}
        />
        <div className="map-container">
          <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={center}
              zoom={10}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
