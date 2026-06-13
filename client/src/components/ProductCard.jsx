import React from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div>
      <img src={product.image} alt={product.name} width="200" />

      <h2>{product.name}</h2>

      <h3>₹{product.price}</h3>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;