
import SellerCard from "../components/SellerCard";

function SellerDashboard(){

return(

<div className="seller-dashboard">

<h1>

Seller Dashboard

</h1>

<div className="seller-grid">

<SellerCard title="Products" value="25"/>

<SellerCard title="Orders" value="140"/>

<SellerCard title="Revenue" value="₹1,45,000"/>

<SellerCard title="Rating" value="4.8⭐"/>

</div>

</div>

);

}

export default SellerDashboard;
