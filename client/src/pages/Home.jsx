import React, { useEffect, useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "30px",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;