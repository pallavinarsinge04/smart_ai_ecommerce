import axios from "axios";

const API = "http://localhost:5000/api/payment";

export const createOrder = (data) =>
    axios.post(`${API}/create-order`, data);

export const verifyPayment = (data) =>
    axios.post(`${API}/verify`, data);