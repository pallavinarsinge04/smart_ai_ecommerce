
import axios from "axios";

const API="http://localhost:5000/api/notifications";

export const getNotifications=()=>axios.get(API);

export const createNotification=(data)=>axios.post(API,data);

export const markAsRead=(id)=>axios.put(API+"/"+id);

