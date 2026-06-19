import "./Auth.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-container">

      <div className="auth-card">

        <div className="auth-logo">
          🛍️
        </div>

        <h1>Welcome Back</h1>

        <p>Login to your SmartAI Shop account</p>

        <input type="email" placeholder="Email Address" />

        <input type="password" placeholder="Password" />

        <button className="auth-btn">
          Login
        </button>

        <div className="auth-footer">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;