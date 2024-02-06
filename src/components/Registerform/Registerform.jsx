import React, { useState } from "react";
import "./Registerform.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your registration logic here
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      setErrorMessage("");
      // Add logic to handle successful registration
      console.log("Registration successful:", { username, email, password });
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Register</button>
        <div className="Login-class">
          <p>
            Already have an account?
            <Link style={{ textDecoration: "none" }} to="/Login">
              <b>Login Here</b>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
