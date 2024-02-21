// UserProfile.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import CountryFlag from "react-country-flag";
import UserAvatar from "./UserAvatar.js";
import "../styling/UserProfile.css";

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `https://randomuser.me/api/?uuid=${userId}`
      );
      setUser(response.data.results[0]);
    };
    fetchUser();
  }, [userId]);

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
        <UserAvatar />

        <p>Hi, My Name is</p>
        <h1>
          {user.name.first} {user.name.last}
        </h1>
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
