import "./Auth.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-container">

      <div className="auth-card">

        <div className="auth-logo">
          🚀
        </div>

        <h1>Create Account</h1>

        <p>Join SmartAI Shop today</p>

        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email Address" />

        <input type="password" placeholder="Password" />

        <input type="password" placeholder="Confirm Password" />

        <button className="auth-btn">
          Register
        </button>

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