import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Add new order
  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  // Remove order
  const removeOrder = (id) => {
    setOrders((prev) =>
      prev.filter((order) => order._id !== id)
    );
  };

  // Clear all orders
  const clearOrders = () => {
    setOrders([]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        removeOrder,
        clearOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

// Custom Hook
export const useOrder = () => {
  return useContext(OrderContext);
};