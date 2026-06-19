import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NotificationProvider } from "./context/NotificationContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { OrderProvider } from "./context/OrderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <OrderProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </OrderProvider>
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);