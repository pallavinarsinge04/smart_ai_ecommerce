import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const placeOrder = (cartItems, total) => {
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total,
      status: "Processing",
      container: "orders", // ✅ container flag
      date: new Date().toLocaleString(),
    };

    setOrders((prev) => [...prev, newOrder]);
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);