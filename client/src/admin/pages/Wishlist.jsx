import React from "react";
import { useWishlist } from "../../context/WishlistContext";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <h2>No products in wishlist</h2>
      ) : (
        wishlist.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid gray",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="120"
            />

            <h2>{item.name}</h2>

            <h3>₹{item.price}</h3>

            <button
              onClick={() =>
                removeFromWishlist(item._id)
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;