import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>
        <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Home;
