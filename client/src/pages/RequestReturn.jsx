
import {useState} from "react";

import {createReturn}

from "../services/returnService";

function RequestReturn(){

const[data,setData]=useState({

reason:"",

image:"",

refundAmount:""

});

const submit=async(e)=>{

e.preventDefault();

await createReturn(data);

alert("Return Request Submitted");

};

return(

<div className="return-container">

<form onSubmit={submit}>

<h2>Return Product</h2>

<input

placeholder="Reason"

onChange={(e)=>setData({

...data,

reason:e.target.value

})}

/>

<input

placeholder="Image URL"

onChange={(e)=>setData({

...data,

image:e.target.value

})}

/>

<input

placeholder="Refund Amount"

onChange={(e)=>setData({

...data,

refundAmount:e.target.value

})}

/>

<button>

Submit

</button>

</form>

</div>

);

}

export default RequestReturn;
