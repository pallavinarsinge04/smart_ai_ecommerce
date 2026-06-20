
import {useEffect,useState} from "react";

import {getNotifications}

from "../services/notificationService";

import NotificationCard

from "../components/NotificationCard";

function Notifications(){

const[data,setData]=useState([]);

useEffect(()=>{

getNotifications()

.then(res=>setData(res.data));

},[]);

return(

<div className="notification-page">

<h1>

Notifications

</h1>

{

data.map(item=>

<NotificationCard

key={item._id}

item={item}

/>

)

}

</div>

);

}

export default Notifications;

