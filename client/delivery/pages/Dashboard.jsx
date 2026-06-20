
import DeliveryCard from "../components/DeliveryCard";

function Dashboard(){

return(

<div className="delivery-dashboard">

<h1>

Delivery Dashboard

</h1>

<div className="delivery-grid">

<DeliveryCard

title="Today's Deliveries"

value="18"

/>

<DeliveryCard

title="Completed"

value="15"

/>

<DeliveryCard

title="Pending"

value="3"

/>

<DeliveryCard

title="Today's Earnings"

value="₹1850"

/>

</div>

</div>

);

}

export default Dashboard;
