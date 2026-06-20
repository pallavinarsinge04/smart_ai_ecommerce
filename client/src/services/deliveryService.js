
import axios from "axios";

const API="http://localhost:5000/api/delivery";

export const getPartners=()=>axios.get(API);

export const registerPartner=(data)=>axios.post(API,data);

export const updateAvailability=(id,data)=>

axios.put(API+"/"+id,data);

