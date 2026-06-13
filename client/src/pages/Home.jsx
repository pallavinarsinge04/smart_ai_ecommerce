import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "40px",
          flexWrap: "wrap",
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <Footer />
    </>
  );
}

export default Home;