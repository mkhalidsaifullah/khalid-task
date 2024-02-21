// UserProfile.js
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import CountryFlag from "react-country-flag";
import { useLocation } from "react-router-dom";
import UserAvatar from "../Avatar/UserAvatar";
import Container from "../Icons/Container.js";
import "./Card.css";

const Card = () => {
  const { state } = useLocation();
  const user = state.user;

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
        <div className="country-flag-container">
          <CountryFlag
            className="country-flag"
            countryCode={user.nat}
            svg
            style={{ width: "2em", height: "2em" }}
          />
        </div>
        <Container user={user} />

        {/*  <div className="map-container">
          <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={center}
              zoom={10}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
