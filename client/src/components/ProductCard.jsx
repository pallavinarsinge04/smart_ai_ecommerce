import React from "react";

function ProductCard({ product }) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width="200"
      />

      <h2>{product.name}</h2>

      <h3>₹{product.price}</h3>

      <p>{product.description}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;