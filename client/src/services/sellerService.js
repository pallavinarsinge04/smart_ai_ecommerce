
import axios from "axios";

const API="http://localhost:5000/api/sellers";

export const getSellers=()=>{

return axios.get(API);

};

export const registerSeller=(data)=>{

return axios.post(API,data);

};
