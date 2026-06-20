
import axios from "axios";

const API="http://localhost:5000/api/invoices";

export const getInvoices=()=>axios.get(API);

export const getInvoice=(id)=>axios.get(API+"/"+id);

export const createInvoice=(data)=>axios.post(API,data);
