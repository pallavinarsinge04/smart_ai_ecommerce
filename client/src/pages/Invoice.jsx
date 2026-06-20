
import {useEffect,useState} from "react";

import {getInvoice}

from "../services/invoiceService";

import {useParams}

from "react-router-dom";

function Invoice(){

const{id}=useParams();

const[data,setData]=useState(null);

useEffect(()=>{

getInvoice(id)

.then(res=>setData(res.data));

},[id]);

if(!data){

return <h2>Loading...</h2>;

}

return(

<div className="invoice">

<h1>INVOICE</h1>

<hr/>

<h3>

Customer : {data.customerName}

</h3>

<h4>

Email : {data.email}

</h4>

<table>

<thead>

<tr>

<th>Product</th>

<th>Qty</th>

<th>Price</th>

</tr>

</thead>

<tbody>

{

data.items.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>

<td>{item.quantity}</td>

<td>₹{item.price}</td>

</tr>

))

}

</tbody>

</table>

<h3>

Subtotal : ₹{data.subtotal}

</h3>

<h3>

GST : ₹{data.gst}

</h3>

<h3>

Shipping : ₹{data.shipping}

</h3>

<h2>

Total : ₹{data.total}

</h2>

<button

onClick={()=>window.print()}

>

Download Invoice

</button>

</div>

);

}

export default Invoice;
