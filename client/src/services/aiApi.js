
import axios from "axios";

export const askAI = (message) => {

  return axios.post(

    "http://localhost:5000/api/ai/chat",

    { message }

  );

};
