import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// User Pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./admin/pages/Wishlist";
import Checkout from "./admin/pages/Checkout";
import MyOrders from "./admin/pages/Orders";

// Admin Pages
import Dashboard from "./admin/pages/Dashboard";
import Products from "./admin/pages/Products";
import Orders from "./admin/pages/Orders";
import Users from "./admin/pages/Users";
import Analytics from "./admin/pages/Analytics";
import AddProduct from "./admin/pages/AddProduct";
import EditProduct from "./admin/pages/EditProduct";

// Protected Route
import ProtectedAdmin from "./admin/routes/ProtectedAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
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

        <Route
          path="/admin/add-product"
          element={
            <ProtectedAdmin>
              <AddProduct />
            </ProtectedAdmin>
          }
        />

        <Route
          path="/admin/edit-product/:id"
          element={
            <ProtectedAdmin>
              <EditProduct />
            </ProtectedAdmin>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;