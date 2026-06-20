
import axios from "axios";

const API = "http://localhost:5000/api/loyalty";

export const getLoyalty = (userId) =>
    axios.get(`${API}/${userId}`);

export const addPoints = (data) =>
    axios.post(`${API}/add`, data);

export const redeemPoints = (data) =>
    axios.post(`${API}/redeem`, data);

