
import axios from "axios";

const API="http://localhost:5000/api/seller-orders";

export const getOrders=()=>axios.get(API);

export const updateOrder=(id,data)=>{

return axios.put(API+"/"+id,data);

};
