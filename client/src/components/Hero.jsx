import React from "react";

function Hero() {
  return (
    <div
      style={{
        padding: "80px",
        textAlign: "center",
        background: "#dbeafe",
      }}
    >
      <h1>Welcome to Smart AI E-Commerce</h1>

      <p>Discover products with AI-powered recommendations.</p>

      <button
        style={{
          padding: "10px 20px",
          marginTop: "20px",
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Hero;