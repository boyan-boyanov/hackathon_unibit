import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(sessionStorage.getItem("users")) || [];

    if (storedUsers.some((user) => user.username === username)) {
      setMessage("User already exists");
      return;
    }

    const updatedUsers = [...storedUsers, { username, password }];
    sessionStorage.setItem("users", JSON.stringify(updatedUsers));

    sessionStorage.setItem("username", username);
    setAuth(true);

    navigate("/profile");
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
