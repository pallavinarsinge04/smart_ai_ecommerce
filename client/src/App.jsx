import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import OrderTracking from "./pages/OrderTracking";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import AIAssistant from "./pages/AIAssistant";
import Inventory from "./admin/pages/Inventory";
import Analytics from "./admin/pages/Analytics";
import SellerRegister from "./seller/pages/SellerRegister";
import SellerDashboard from "./seller/pages/SellerDashboard";
import PaymentSuccess from "./pages/PaymentSuccess"; 
import PaymentFailed from "./pages/PaymentFailed";
import Support from "./pages/Support";
import AIAssistant from "./pages/AIAssistant";
import Inventory from "./admin/pages/Inventory";
import Coupons from "./admin/pages/Coupons";
import Notifications from "./pages/Notifications";
import Analytics from "./admin/pages/Analytics";
import SellerDashboard from "./seller/pages/SellerDashboard";
function Layout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />

        <Route path="/product" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/orders" element={<Orders />} />
       
       <Route path="/checkout" element={<Checkout />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/payment-success" element={<PaymentSuccess />}/>

<Route
  path="/track-order"
  element={<OrderTracking />}
/>
<Route

path="/assistant"

element={<AIAssistant />}

/>
<Route

path="/admin/inventory"

element={<Inventory />}

/>
<Route
  path="/admin/analytics"
  element={<Analytics />}
/>
<Route
  path="/seller/register"
  element={<SellerRegister />}
/>

<Route
  path="/seller/dashboard"
  element={<SellerDashboard />}
/>
<Route path="/payment-success" element={<PaymentSuccess/>} /> <Route path="/payment-failed" element={<PaymentFailed/>} />
      </Routes>
      <Route path="/support" element={<Support/>} />
      <Route path="/ai-assistant" element={<AIAssistant/>} />

      <Route path="/admin/inventory" element={<Inventory/>} />
<Route path="/admin/coupons" element={<Coupons/>} />
  
  <Route path="/notifications" element={<Notifications/>} />
  <Route path="/admin/analytics" element={<Analytics/>} />
  <Route path="/seller/dashboard" element={<SellerDashboard/>} />  </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}