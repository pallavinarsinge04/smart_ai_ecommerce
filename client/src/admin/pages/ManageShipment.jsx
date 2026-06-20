
import {useState} from "react";

import {updateShipment}

from "../../services/shipmentService";

function ManageShipment(){

const[id,setId]=useState("");

const[status,setStatus]=useState("");

const submit=()=>{

updateShipment(id,{

status

});

alert("Shipment Updated");

};

return(

<div className="manage-shipment">

<h1>

Manage Shipment

</h1>

<input

placeholder="Shipment ID"

onChange={(e)=>setId(e.target.value)}

/>

<select

onChange={(e)=>setStatus(e.target.value)}

>

<option>Order Confirmed</option>

<option>Packed</option>

<option>Shipped</option>

<option>Out For Delivery</option>

<option>Delivered</option>

</select>

<button

onClick={submit}

>

Update

</button>

</div>

);

}

export default ManageShipment;
