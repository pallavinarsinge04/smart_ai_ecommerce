import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Product() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
        }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          marginLeft: "20px",
          padding: "10px",
        }}
      >
        <option value="All">All</option>
        <option value="Laptop">Laptop</option>
        <option value="Mobile">Mobile</option>
        <option value="Accessories">
          Accessories
        </option>
      </select>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))
        ) : (
          <h2>No Products Found</h2>
        )}
      </div>
    </div>
  );
}

export default Product;