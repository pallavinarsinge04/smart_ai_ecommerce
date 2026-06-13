import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./admin/pages/Dashboard";
import Products from "./admin/pages/Products";
import Orders from "./admin/pages/Orders";
import Users from "./admin/pages/Users";
import Analytics from "./admin/pages/Analytics";
import ProtectedAdmin from "./admin/routes/ProtectedAdmin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdmin>
              <Dashboard />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/admin/products"
          element={
            <ProtectedAdmin>
              <Products />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <ProtectedAdmin>
              <Orders />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedAdmin>
              <Users />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/admin/analytics"
          element={
            <ProtectedAdmin>
              <Analytics />
            </ProtectedAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;