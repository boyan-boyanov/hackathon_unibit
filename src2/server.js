const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let users = []; // Temporary in-memory users list

// Register endpoint
app.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ username, password });
  res.status(200).json({ message: "User registered successfully" });
});

// Login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.status(200).json({ message: "Login successful", user });
});
