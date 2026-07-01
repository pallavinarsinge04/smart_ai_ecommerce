import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // ✅ FIX ADDED

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(name, email, password);

    // fake register success
    localStorage.setItem("token", "demo-token");

    // redirect to login page
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account 🚀</h2>
        <p>Register to start shopping</p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        <div className="extra-links">
          <p>Forgot Password?</p>

          {/* ✅ CLICK → LOGIN PAGE */}
          <p style={{ cursor: "pointer", color: "blue" }} onClick={() => navigate("/")}>
            Already have an account? Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;