import React from "react";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="page">
      <div className="container">
        <h2 className="title">Wishlist</h2>

        {wishlist.map((item) => (
          <div key={item._id} className="card-ui" style={{ marginBottom: 10 }}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button className="btn" onClick={() => removeFromWishlist(item._id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;