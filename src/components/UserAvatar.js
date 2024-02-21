import React, { useState, useEffect } from "react";
import "../styling/UserAvatar.css";

const UserAvatar = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const userImage = data.results[0].picture.large;
        setImageUrl(userImage);
      });
  }, []);

  return (
    <div className="user-avatar-container">
      {imageUrl && <img src={imageUrl} alt="Random User" />}
    </div>
  );
};

export default UserAvatar;
