
import axios from "axios";

const API="http://localhost:5000/api/shipment";

export const trackShipment=(trackingId)=>{

    return axios.get(API+"/"+trackingId);

};

export const updateShipment=(id,data)=>{

    return axios.put(API+"/"+id,data);

};
