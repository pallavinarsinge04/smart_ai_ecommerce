
import axios from "axios";

export const askAI = async (message) => {

    return axios.post(

        "http://localhost:5000/api/ai/chat",

        {

            message,

        }

    );

};
