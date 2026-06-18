import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT LOGO */}
      <div className="nav-left">
        <Link to="/" className="logo">
          🛒 SmartAI Shop
        </Link>
      </div>

      {/* CENTER LINKS */}
      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/orders">Orders</Link>
      </div>

      {/* RIGHT LINKS */}
      <div className="nav-right">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/admin/dashboard">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;