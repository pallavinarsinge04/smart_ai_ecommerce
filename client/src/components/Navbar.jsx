import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🛍 SmartAI Shop
      </div>

      <div className="nav-links">

        <Link to="/home">Home</Link>

        <Link to="/product">Products</Link>

        <Link to="/cart">
          Cart
          <span className="cart-badge">2</span>
        </Link>

        <Link to="/wishlist">Wishlist</Link>

        <Link to="/orders">Orders</Link>

        <Link to="/admin/dashboard">Admin</Link>
        <Link to="/">
          <button className="login-btn">
            Logout
          </button>
        </Link>

      </div>


    </nav>
  );
}

export default Navbar;