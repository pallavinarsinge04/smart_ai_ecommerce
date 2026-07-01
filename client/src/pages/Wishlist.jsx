import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Wishlist.css";

function Wishlist() {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Smart Watch", price: 1999 },
    { id: 2, name: "Wireless Earbuds", price: 1499 },
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const moveToCart = (id) => {
    alert("Moved to cart (connect API later 🚀)");
  };

  return (
    <div>
      <Navbar />

      <div className="wishlist-container">

        {/* HEADER */}
        <div className="wishlist-header">
          <h1>❤️ Your Wishlist</h1>
          <p>All your saved products in one place</p>
        </div>

        {/* EMPTY STATE */}
        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <h2>Your wishlist is empty 💔</h2>
            <p>Start adding products you love!</p>
          </div>
        ) : (
          <div className="wishlist-grid">

            {wishlist.map((item) => (
              <div className="wishlist-card" key={item.id}>

                <div className="wishlist-icon">❤️</div>

                <h3>{item.name}</h3>
                <p className="price">₹ {item.price}</p>

                <div className="btn-group">
                  <button
                    className="move-btn"
                    onClick={() => moveToCart(item.id)}
                  >
                    Move to Cart
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Wishlist;