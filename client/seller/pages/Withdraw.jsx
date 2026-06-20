
import {useState} from "react";

import {requestPayout}

from "../../services/payoutService";

function Withdraw(){

const[amount,setAmount]=useState("");

const submit=async(e)=>{

e.preventDefault();

await requestPayout({

amount

});

alert("Withdrawal Request Submitted");

};

return(

<form onSubmit={submit}>

<h2>

Withdraw Earnings

</h2>

<input

placeholder="Enter Amount"

onChange={(e)=>setAmount(e.target.value)}

/>

<button>

Request Withdrawal

</button>

</form>

);

}

export default Withdraw;

