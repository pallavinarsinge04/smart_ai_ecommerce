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
       {/* HEADER */}
<div className="wishlist-header">
  <div>
    <h1>💜 My Wishlist</h1>
    <p>
      Save your favourite products and purchase them whenever you're ready.
    </p>
  </div>

  <div className="wishlist-count">
    <h2>{wishlist.length}</h2>
    <span>Saved Items</span>
  </div>
</div>
{/* FEATURES */}

<div className="wishlist-features">

  <div className="feature-card">
    ❤️
    <h3>Save Favorites</h3>
    <p>Store products you love.</p>
  </div>

  <div className="feature-card">
    🔔
    <h3>Price Alerts</h3>
    <p>Get notified when prices drop.</p>
  </div>

  <div className="feature-card">
    🚚
    <h3>Fast Checkout</h3>
    <p>Move products directly to your cart.</p>
  </div>

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

                <div className="wishlist-image">
    💜
</div>

<span className="wishlist-tag">
    Trending
</span>

<div className="rating">
⭐⭐⭐⭐⭐ (4.8)
</div>

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
        <div className="recommend-section">

<h2>You May Also Like</h2>

<div className="recommend-grid">

<div className="recommend-card">
📱
<h3>iPhone 16</h3>
<p>₹69,999</p>
<button>View Product</button>
</div>

<div className="recommend-card">
🎧
<h3>Sony Headphones</h3>
<p>₹5,999</p>
<button>View Product</button>
</div>

<div className="recommend-card">
⌚
<h3>Apple Watch</h3>
<p>₹29,999</p>
<button>View Product</button>
</div>

</div>

</div>

      </div>
    </div>
  );
}

export default Wishlist;