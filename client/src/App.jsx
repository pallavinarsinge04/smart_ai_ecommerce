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
import SellerProducts from "./seller/pages/SellerProducts";
 import AddSellerProduct from "./seller/pages/AddSellerProduct";
 import SellerOrders from "./seller/pages/SellerOrders";
 import Earnings from "./seller/pages/Earnings"; 
 import Withdraw from "./seller/pages/Withdraw";
 import RequestReturn from "./pages/RequestReturn"; 
 import ManageReturns from "./admin/pages/ManageReturns";
 import Invoice from "./pages/Invoice";
 import TrackOrder from "./pages/TrackOrder"; 
 import ManageShipment from "./admin/pages/ManageShipment";
import DeliveryDashboard from "./delivery/pages/Dashboard"; 
import AssignedOrders from "./delivery/pages/AssignedOrders";
import Reports from "./admin/pages/Reports";
import Recommendations from "./pages/Recommendations";
import Notifications from "./pages/Notifications";
import Loyalty from "./pages/Loyalty";

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
  <Route path="/seller/dashboard" element={<SellerDashboard/>} /> 
  <Route path="/seller/products" element={<SellerProducts/>} />
   <Route path="/seller/add-product" element={<AddSellerProduct/>} />
   <Route path="/seller/orders" element={<SellerOrders/>} /> 
   <Route path="/seller/earnings" element={<Earnings/>} /> <Route path="/seller/withdraw" element={<Withdraw/>} />
   <Route path="/return" element={<RequestReturn/>} /> <Route path="/admin/returns" element={<ManageReturns/>} />
   <Route path="/invoice/:id" element={<Invoice/>} />
   <Route path="/track" element={<TrackOrder/>} /> <Route path="/admin/shipment" element={<ManageShipment/>} />
   <Route path="/delivery/dashboard" element={<DeliveryDashboard/>} /> <Route path="/delivery/orders" element={<AssignedOrders/>} />
   <Route path="/admin/reports" element={<Reports/>} />
   <Route path="/recommendations" element={<Recommendations/>} />
  <Route path="/notifications" element={<Notifications/>} />
  <Route path="/loyalty" element={<Loyalty />} />
  
   </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}