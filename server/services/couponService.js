
import axios from "axios";

const API="http://localhost:5000/api/coupons";

export const applyCoupon=(code,total)=>{

return axios.post(API+"/apply",{

code,

total

});

};

export const getCoupons=()=>{

return axios.get(API);

};

