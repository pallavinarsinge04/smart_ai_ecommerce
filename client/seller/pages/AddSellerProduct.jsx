
import {useState} from "react";

import {

addSellerProduct

} from "../../services/sellerProductService";

function AddSellerProduct(){

const[data,setData]=useState({

name:"",

price:"",

stock:"",

image:"",

category:"",

description:""

});

const submit=async(e)=>{

e.preventDefault();

await addSellerProduct(data);

alert("Product Added");

};

return(

<form onSubmit={submit}>

<input

placeholder="Product Name"

onChange={(e)=>setData({

...data,

name:e.target.value

})}

/>

<input

placeholder="Price"

onChange={(e)=>setData({

...data,

price:e.target.value

})}

/>

<input

placeholder="Stock"

onChange={(e)=>setData({

...data,

stock:e.target.value

})}

/>

<button>

Add Product

</button>

</form>

);

}

export default AddSellerProduct;
