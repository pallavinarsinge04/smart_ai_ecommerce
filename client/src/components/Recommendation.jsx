import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { getRecommendations } from "../utils/recommendation";

function Recommendation({ product }) {
  const recommendations = getRecommendations(products, product);

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Recommended Products</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {recommendations.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Recommendation;