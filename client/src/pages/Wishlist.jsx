import React from "react";
import Navbar from "../components/Navbar";
function Wishlist() {
  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
      <h1>Wishlist Page ❤️</h1>

      <p>Your saved products will appear here.</p>

      {/* Example static content */}
      <div style={{ marginTop: "20px" }}>
        <div style={{ border: "1px solid #ddd", padding: "10px" }}>
          <h3>Sample Product 1</h3>
          <p>Price: ₹999</p>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;