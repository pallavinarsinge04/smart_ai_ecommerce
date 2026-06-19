
import axios from "axios";

const API = "http://localhost:5000/api/recommendations";

export const getRecommendations = (id) =>
  axios.get(`${API}/${id}`);

export const getTrending = () =>
  axios.get(`${API}/trending`);
