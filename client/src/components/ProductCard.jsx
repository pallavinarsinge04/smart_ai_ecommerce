import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        width: "250px",
        borderRadius: "10px",
      }}
    >
      <img
        src={product.image}
        width="200"
        alt={product.name}
      />

      <h2>{product.name}</h2>

      <h4>{product.category}</h4>

      <h3>₹{product.price}</h3>

      <button onClick={() => addToCart(product)}>
        Add Cart
      </button>

      <button
        onClick={() => addToWishlist(product)}
        style={{ marginLeft: "10px" }}
      >
        ❤️
      </button>
    </div>
  );
}

export default ProductCard;