
import {

useEffect,

useState

}

from "react";

import {

getNotifications,

markAsRead

}

from "../services/notificationService";

function Notifications(){

const[data,setData]=useState([]);

const load=()=>{

getNotifications()

.then(res=>setData(res.data));

};

useEffect(()=>{

load();

},[]);

return(

<div className="notification-page">

<h1>

Notifications

</h1>

{

data.map(item=>(

<div

key={item._id}

className="notification-card"

>

<h3>

{item.title}

</h3>

<p>

{item.message}

</p>

<button

onClick={()=>markAsRead(item._id).then(load)}

>

Mark as Read

</button>

</div>

))

}

</div>

);

}

export default Notifications;
