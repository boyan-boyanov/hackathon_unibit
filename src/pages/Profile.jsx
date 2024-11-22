import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  const username = sessionStorage.getItem("username");
  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default Profile;
