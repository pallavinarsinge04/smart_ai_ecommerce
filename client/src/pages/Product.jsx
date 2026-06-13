import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Recommendation from "../components/Recommendation";

function Product() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => setSelectedProduct(product)}
            style={{ cursor: "pointer" }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <Recommendation product={selectedProduct} />
    </div>
  );
}

export default Product;