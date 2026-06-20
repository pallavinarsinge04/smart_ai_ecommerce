import axios from "axios";

const API = "http://localhost:5000/api/orders";

export const createOrder = (data) =>
    axios.post(API, data);

export const getUserOrders = (userId) =>
    axios.get(`${API}/user/${userId}`);

export const getAllOrders = () =>
    axios.get(`${API}/admin/all`);

export const updateOrderStatus = (id, status) =>
    axios.put(`${API}/${id}/status`, { status });

export const cancelOrder = (id) =>
    axios.put(`${API}/${id}/cancel`);