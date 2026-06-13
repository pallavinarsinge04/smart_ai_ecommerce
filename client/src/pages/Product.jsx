import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Product() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const product = {
    _id: "1",
    name: "Laptop",
    price: 50000,
    image: "https://via.placeholder.com/150",
  };

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <h3>₹{product.price}</h3>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <button
        onClick={() => addToWishlist(product)}
        style={{ marginLeft: "10px" }}
      >
        ❤️ Add to Wishlist
      </button>
    </div>
  );
}

export default Product;