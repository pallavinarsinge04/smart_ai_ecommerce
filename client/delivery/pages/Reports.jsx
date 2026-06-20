
import {useEffect,useState} from "react";

import {getReports}

from "../../services/reportService";

import ReportCard

from "../components/ReportCard";

function Reports(){

const[data,setData]=useState(null);

useEffect(()=>{

getReports()

.then(res=>setData(res.data));

},[]);

if(!data){

return <h2>Loading...</h2>;

}

return(

<div className="reports-page">

<h1>

Business Reports

</h1>

<div className="report-grid">

<ReportCard

title="Revenue"

value={"₹"+data.totalRevenue}

/>

<ReportCard

title="Orders"

value={data.totalOrders}

/>

<ReportCard

title="Users"

value={data.totalUsers}

/>

<ReportCard

title="Profit"

value={"₹"+data.totalProfit}

/>

</div>

<h2>

Top Selling Products

</h2>

<table>

<thead>

<tr>

<th>Product</th>

<th>Sold</th>

</tr>

</thead>

<tbody>

{

data.topProducts.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>

<td>{item.sold}</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}

export default Reports;

