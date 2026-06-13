import axios from "axios";

const API = "http://localhost:5000/api/orders";

export const placeOrder = async (orderData) => {
  const res = await axios.post(API, orderData);
  return res.data;
};