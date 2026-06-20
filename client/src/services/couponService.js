import axios from "axios";

const API = "http://localhost:5000/api/coupons";

export const applyCoupon = (data) =>
    axios.post(`${API}/apply`, data);

export const createCoupon = (data) =>
    axios.post(`${API}/create`, data);

export const redeemGiftCard = (data) =>
    axios.post(`${API}/gift/redeem`, data);