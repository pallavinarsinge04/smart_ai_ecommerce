
import {useState} from "react";

import {trackShipment}

from "../services/shipmentService";

function TrackOrder(){

const[id,setId]=useState("");

const[data,setData]=useState(null);

const search=()=>{

trackShipment(id)

.then(res=>setData(res.data));

};

return(

<div className="track-page">

<h1>

Track Order

</h1>

<input

placeholder="Enter Tracking ID"

value={id}

onChange={(e)=>setId(e.target.value)}

/>

<button onClick={search}>

Track

</button>

{

data &&

<div className="tracking-card">

<h2>{data.trackingId}</h2>

<p>Status : {data.status}</p>

<p>Courier : {data.courier}</p>

<p>Current Location : {data.currentLocation}</p>

<p>

Estimated Delivery :

{new Date(data.estimatedDelivery).toLocaleDateString()}

</p>

</div>

}

</div>

);

}

export default TrackOrder;
