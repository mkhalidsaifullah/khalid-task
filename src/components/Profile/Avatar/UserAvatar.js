import React, { useState, useEffect } from "react";
import "./UserAvatar.css";

const UserAvatar = ({ imageUrl }) => {
  return (
    <div className="user-avatar-container">
      {imageUrl && <img src={imageUrl} alt="Random User" />}
    </div>
  );
};

export default UserAvatar;
