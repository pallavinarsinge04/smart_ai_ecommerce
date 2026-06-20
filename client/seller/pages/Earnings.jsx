
import EarningsCard from "../components/EarningsCard";

function Earnings(){

return(

<div className="earnings-page">

<h1>Seller Earnings</h1>

<div className="earnings-grid">

<EarningsCard
title="Total Revenue"
value="₹5,45,000"
/>

<EarningsCard
title="Commission"
value="₹54,500"
/>

<EarningsCard
title="Net Earnings"
value="₹4,90,500"
/>

<EarningsCard
title="Pending Payout"
value="₹75,000"
/>

</div>

</div>

);

}

export default Earnings;
