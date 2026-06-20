
import {useEffect,useState} from "react";
import axios from "axios";

function Coupons(){

const[coupons,setCoupons]=useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/api/coupons")

.then(res=>setCoupons(res.data));

},[]);

return(

<div className="coupon-page">

<h1>Coupons</h1>

<table>

<thead>

<tr>

<th>Code</th>

<th>Discount</th>

<th>Type</th>

<th>Expiry</th>

</tr>

</thead>

<tbody>

{

coupons.map(c=>(

<tr key={c._id}>

<td>{c.code}</td>

<td>{c.discount}</td>

<td>{c.type}</td>

<td>{new Date(c.expiry).toLocaleDateString()}</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}


