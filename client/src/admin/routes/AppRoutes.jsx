import React from "react";
import { Routes, Route } from "react-router-dom";

// layouts
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

// user pages
import Home from "../pages/user/Home";
import Product from "../pages/user/Product";
import Cart from "../pages/user/Cart";
import Wishlist from "../pages/user/Wishlist";
import Orders from "../pages/user/Orders";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";

// admin pages
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import OrdersAdmin from "../pages/admin/Orders";

function AppRoutes() {
  return (
    <Routes>

      {/* USER ROUTES */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route path="/product" element={<MainLayout><Product /></MainLayout>} />
      <Route path="/cart" element={<MainLayout><Cart /></MainLayout>} />
      <Route path="/wishlist" element={<MainLayout><Wishlist /></MainLayout>} />
      <Route path="/orders" element={<MainLayout><Orders /></MainLayout>} />
      <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
      <Route path="/register" element={<MainLayout><Register /></MainLayout>} />

      {/* ADMIN ROUTES */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/products"
        element={
          <AdminLayout>
            <Products />
          </AdminLayout>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <AdminLayout>
            <OrdersAdmin />
          </AdminLayout>
        }
      />

    </Routes>
  );
}

export default AppRoutes;