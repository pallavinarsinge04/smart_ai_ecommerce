import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      // fake login success
      localStorage.setItem("token", "demo-token");

      // redirect to home
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      {/* CARD UI */}
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p>Login to continue</p>

        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>
        </form>

        <div className="extra-links">
          <p>Forgot Password?</p>
          <p onClick={() => navigate("/register")}>
            Don't have an account? Register
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;