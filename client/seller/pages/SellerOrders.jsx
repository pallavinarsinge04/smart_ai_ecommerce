
import {useEffect,useState} from "react";

import {

getOrders,

updateOrder

} from "../../services/sellerOrderService";

function SellerOrders(){

const[orders,setOrders]=useState([]);

const loadOrders=()=>{

getOrders().then(res=>setOrders(res.data));

};

useEffect(()=>{

loadOrders();

},[]);

const shipped=(id)=>{

updateOrder(id,{

status:"Accepted",

shippingStatus:"Shipped"

}).then(loadOrders);

};

return(

<div className="seller-orders">

<h1>Seller Orders</h1>

<table>

<thead>

<tr>

<th>Customer</th>

<th>Total</th>

<th>Status</th>

<th>Shipping</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

orders.map(order=>(

<tr key={order._id}>

<td>{order.user?.name}</td>

<td>₹{order.total}</td>

<td>{order.status}</td>

<td>{order.shippingStatus}</td>

<td>

<button

onClick={()=>shipped(order._id)}

>

Ship

</button>

</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}

export default SellerOrders;

