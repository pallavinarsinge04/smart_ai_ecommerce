
import React, { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Add your API call here

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-logo">🛍️</div>

        <h1>Create Account</h1>

        <p>Register to Smart AI Ecommerce</p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-btn" type="submit">
            Register
          </button>

        </form>

        <div className="auth-footer">
          Already have an account?

          <Link to="/login">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Register;

