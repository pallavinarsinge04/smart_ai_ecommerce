import React from "react";

function ProductCard() {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        width: "250px",
        borderRadius: "10px",
      }}
    >
      <img
        src="https://via.placeholder.com/200"
        alt="Product"
        width="200"
      />

      <h3>Laptop</h3>

      <p>₹50,000</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;