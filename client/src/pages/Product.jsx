import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Product.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    setProducts([
      { id: 1, name: "Smart Watch", price: 1999, category: "Electronics" },
      { id: 2, name: "Wireless Earbuds", price: 1499, category: "Electronics" },
      { id: 3, name: "Gaming Mouse", price: 999, category: "Accessories" },
      { id: 4, name: "Laptop Stand", price: 799, category: "Accessories" },
      { id: 5, name: "Bluetooth Speaker", price: 2499, category: "Electronics" },
    ]);
  }, []);

  // FILTER
  let filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filtered = filtered.filter((p) => p.category === category);
  }

  // SORT
  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <Navbar />

      <div className="product-container">

        {/* HEADER */}
        <div className="product-header">
          <h1>🛍️ Explore Products</h1>
          <p>Find the best deals curated for you</p>
        </div>

        {/* FILTER SECTION */}
        <div className="filter-section">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-box"
          />

          {/* CATEGORY */}
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="filter-box"
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
          </select>

          {/* SORT */}
          <select
            onChange={(e) => setSort(e.target.value)}
            className="filter-box"
          >
            <option value="">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>

        </div>

        {/* PRODUCT GRID */}
        <div className="product-grid">

          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div className="product-card" key={product.id}>

                <div className="product-image">
                  🛒
                </div>

                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="price">₹ {product.price}</p>

                <button className="add-btn">
                  Add to Cart
                </button>

              </div>
            ))
          ) : (
            <div className="empty-state">
              <h3>No products found 😢</h3>
              <p>Try different keywords or filters</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Products;