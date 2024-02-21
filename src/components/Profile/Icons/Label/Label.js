import React from "react";
import Map from "../Map";

const Label = ({ CurrentIcon, user }) => {
  let firstLine;
  let secondLine;
  let showMap = false; // Add a flag to determine when to show the map

  const address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;

  const coordinates = {
    lat: parseFloat(user.location.coordinates.latitude),
    lng: parseFloat(user.location.coordinates.longitude),
  };

  switch (CurrentIcon) {
    case "avatar":
      firstLine = "Hi, My name is";
      secondLine = `${user.name.first} ${user.name.last}`;
      break;
    case "email":
      firstLine = "My email is";
      secondLine = user.email;
      break;
    case "dob":
      firstLine = "My date of birth is";
      secondLine = new Date(user.dob.date).toLocaleDateString(); // Format the date
      break;
    case "map":
      firstLine = "My location is";
      secondLine = address;
      showMap = true; // Set the flag to true to render the map
      break;
    case "phn":
      firstLine = "My phone number is";
      secondLine = user.phone;
      break;
    case "loc":
      firstLine = "My username is";
      secondLine = user.login.username;
      break;
    default:
      console.log("Invalid icon");
  }
  
  return (
    <>
      <p>{firstLine}</p>
      <h1>{secondLine}</h1>
      {showMap && <Map coordinates={coordinates} />}{" "}
      {/* Conditionally render the Map */}
    </>
  );
};

export default Label;
