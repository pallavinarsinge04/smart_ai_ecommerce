
import axios from "axios";

const API = "http://localhost:5000/api/returns";

export const getReturns = () => axios.get(API);

export const createReturn = (data) => axios.post(API,data);

export const approveReturn = (id) => axios.put(API+"/approve/"+id);

export const rejectReturn = (id) => axios.put(API+"/reject/"+id);
