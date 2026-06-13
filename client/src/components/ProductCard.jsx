import React from "react";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToWishlist } = useWishlist();

  return (
    <div>
      <h2>{product.name}</h2>

      <button onClick={() => addToWishlist(product)}>
        Add to Wishlist
      </button>
    </div>
  );
}

export default ProductCard;