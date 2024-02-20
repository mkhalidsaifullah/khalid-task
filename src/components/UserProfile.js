// UserProfile.js
import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams(); // Assuming userId is a unique identifier from the API

  // Fetch user details based on userId here or use context if already loaded

  return (
    <div>
      <h2>User Profile</h2>
      {/* Display user details */}
      <p>This is the profile page for user ID: {userId}</p>
      {/* More user details */}
    </div>
  );
};

export default UserProfile;
