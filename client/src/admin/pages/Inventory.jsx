
import {useEffect,useState} from "react";

import axios from "axios";

function Inventory(){

const[data,setData]=useState([]);

useEffect(()=>{

axios

.get("http://localhost:5000/api/inventory")

.then(res=>setData(res.data));

},[]);

return(

<div className="inventory-page">

<h1>

Inventory Management

</h1>

<table>

<thead>

<tr>

<th>Product</th>

<th>Stock</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{

data.map(item=>(

<tr key={item._id}>

<td>

{item.product?.name}

</td>

<td>

{item.stock}

</td>

<td>

{

item.stock<=item.lowStockLimit?

"⚠️ Low Stock"

:

"✅ Available"

}

</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}

export default Inventory;
