import React, { useState } from "react";
import "../styles/Login.css";

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded user
    if (username === "Admin" && password === "123123") {
      sessionStorage.setItem("username", username);
      setAuth(true);
      alert("Login successful");
      return;
    }

    // Dynamically registered users
    const storedUsers = JSON.parse(sessionStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      sessionStorage.setItem("username", username);
      setAuth(true);
      alert("Login successful");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
