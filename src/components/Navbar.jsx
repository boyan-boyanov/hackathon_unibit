import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ isAuthenticated, setAuth }) => {
  const username = sessionStorage.getItem("username");

  const handleLogout = () => {
    sessionStorage.clear();
    setAuth(false);
    alert("Logged out successfully");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyApp</Link>
      </div>
      <ul className="navbar-links">
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>Hello, {username}!</li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link className="logout-btn" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
