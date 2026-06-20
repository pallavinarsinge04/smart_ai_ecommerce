
import {useEffect,useState} from "react";

import {

getReturns,

approveReturn,

rejectReturn

}

from "../../services/returnService";

function ManageReturns(){

const[data,setData]=useState([]);

const load=()=>{

getReturns()

.then(res=>setData(res.data));

};

useEffect(()=>{

load();

},[]);

return(

<div className="returns-page">

<h1>

Manage Returns

</h1>

<table>

<thead>

<tr>

<th>User</th>

<th>Reason</th>

<th>Status</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

data.map(item=>(

<tr key={item._id}>

<td>{item.user?.name}</td>

<td>{item.reason}</td>

<td>{item.status}</td>

<td>

<button

onClick={()=>approveReturn(item._id).then(load)}

>

Approve

</button>

<button

onClick={()=>rejectReturn(item._id).then(load)}

>

Reject

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

export default ManageReturns;
