import React, { useState } from "react";
import "./Loginpage.css";
import { Link } from "react-router-dom";

export const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    if (username === "name" && password === "password") {
      setErrorMessage("");
      setLoggedIn(true);
    } else {
      setErrorMessage("Invalid username or password");
      setLoggedIn(false);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="smart-login-container">
      {isLoggedIn ? (
        <div className="logged-in-container">
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Login</button>
          <div className="register-class">
            <p>
              Don't have an account?{" "}
              <Link style={{ textDecoration: "none" }} to="/Register">
                <b>Register</b>
              </Link>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
