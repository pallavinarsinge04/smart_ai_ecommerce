import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🛍 SmartAI Shop
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/product">Products</Link>

        <Link to="/cart">
          Cart
          <span className="cart-badge">2</span>
        </Link>

        <Link to="/wishlist">Wishlist</Link>

        <Link to="/orders">Orders</Link>

        <Link to="/admin/dashboard">Admin</Link>

      </div>

      <div className="nav-right">

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="register-btn">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;