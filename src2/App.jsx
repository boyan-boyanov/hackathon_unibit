import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import "./styles/global.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    !!sessionStorage.getItem("username")
  );

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setAuth={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login setAuth={setIsAuthenticated} />
            ) : (
              <Navigate to="/profile" />
            )
          }
        />
        <Route
          path="/register"
          element={
            !isAuthenticated ? (
              <Register setAuth={setIsAuthenticated} />
            ) : (
              <Navigate to="/profile" />
            )
          }
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
