import React from "react";
import "../styling/UserAvatar.css";

const UserAvatar = ({ src, alt }) => {
  return <img src={src} alt={alt} className="circular-image" />;
};

export default UserAvatar;
