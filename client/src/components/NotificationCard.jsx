
function NotificationCard({item}){

return(

<div className="notification-card">

<h3>

{item.title}

</h3>

<p>

{item.message}

</p>

</div>

);

}

export default NotificationCard;
