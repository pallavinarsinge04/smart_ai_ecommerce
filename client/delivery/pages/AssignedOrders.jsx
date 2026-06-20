
function AssignedOrders(){

const orders=[

{

id:"ORD1001",

customer:"Rahul",

address:"Pune",

status:"Packed"

},

{

id:"ORD1002",

customer:"Amit",

address:"Mumbai",

status:"Out For Delivery"

}

];

return(

<div className="assigned-orders">

<h1>

Assigned Orders

</h1>

<table>

<thead>

<tr>

<th>Order ID</th>

<th>Customer</th>

<th>Address</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{

orders.map(order=>(

<tr key={order.id}>

<td>{order.id}</td>

<td>{order.customer}</td>

<td>{order.address}</td>

<td>{order.status}</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}

export default AssignedOrders;
