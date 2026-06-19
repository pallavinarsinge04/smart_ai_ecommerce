import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-body">

        <h2 className="product-name">
          {product.name}
        </h2>

        <h3 className="product-price">
          ₹{product.price}
        </h3>

        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >
          🛒 Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;