
import axios from "axios";

const API="http://localhost:5000/api/payouts";

export const getPayouts=()=>axios.get(API);

export const requestPayout=(data)=>axios.post(API,data);

export const approvePayout=(id)=>axios.put(API+"/"+id);
