// UserProfile.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import CountryFlag from "react-country-flag";
import UserAvatar from "./UserAvatar.js";

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
      <div className="box">
        <UserAvatar />
        <h1>
          {user.name.first} {user.name.last}
        </h1>
        <CountryFlag
          countryCode={user.nat}
          svg
          style={{ width: "2em", height: "2em" }}
        />
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default UserProfile;
