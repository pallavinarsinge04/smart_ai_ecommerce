
import axios from "axios";

const API = "http://localhost:5000/api/reviews";

export const getReviews = (id) =>
  axios.get(`${API}/${id}`);

export const addReview = (data) =>
  axios.post(API, data);
