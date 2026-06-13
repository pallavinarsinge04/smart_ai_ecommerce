import React from "react";
import { useCart } from "../context/CartContext";

function Product() {
  const { addToCart } = useCart();

  const product = {
    _id: "1",
    name: "iPhone 16",
    price: 79999,
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <h2>₹{product.price}</h2>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;