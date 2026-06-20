
import axios from "axios";

const API="http://localhost:5000/api/seller-products";

export const getSellerProducts=()=>axios.get(API);

export const addSellerProduct=(data)=>axios.post(API,data);

export const updateSellerProduct=(id,data)=>axios.put(API+"/"+id,data);

export const deleteSellerProduct=(id)=>axios.delete(API+"/"+id);
