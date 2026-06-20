import axios from "axios";

const API = "http://localhost:5000/api/chatbot";

export const sendMessage = (message) =>
    axios.post(API, { message });