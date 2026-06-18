import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Wishlist from "./admin/pages/Wishlist";
import Orders from "./admin/pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Admin
import Dashboard from "./admin/pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ADMIN ROUTE */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;