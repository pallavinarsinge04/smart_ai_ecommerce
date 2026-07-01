import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Notifications from "./pages/Notifications";
import Products from "./pages/Product";
// admin
import Inventory from "./admin/pages/Inventory";
import Analytics from "./admin/pages/Analytics";
import Cart from "./pages/Cart";
// seller
import SellerDashboard from "./../seller/pages/SellerDashboard";

// AI
import AIAssistant from "./pages/AIAssistant";

// payment
import PaymentSuccess from "./pages/PaymentSuccess";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/notifications" element={<Notifications />} />

        <Route path="/admin/inventory" element={<Inventory />} />
        <Route path="/admin/analytics" element={<Analytics />} />

        <Route path="/seller/dashboard" element={<SellerDashboard />} />

        <Route path="/ai" element={<AIAssistant />} />
<Route path="/product" element={<Products />} />
<Route path="/cart" element={<Cart />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;