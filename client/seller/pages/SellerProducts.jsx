
import {useEffect,useState} from "react";

import {

getSellerProducts,

deleteSellerProduct

} from "../../services/sellerProductService";

function SellerProducts(){

const[products,setProducts]=useState([]);

const loadProducts=()=>{

getSellerProducts()

.then(res=>setProducts(res.data));

};

useEffect(()=>{

loadProducts();

},[]);

const remove=async(id)=>{

await deleteSellerProduct(id);

loadProducts();

};

return(

<div className="seller-products">

<h1>My Products</h1>

<table>

<thead>

<tr>

<th>Name</th>

<th>Price</th>

<th>Stock</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

products.map(product=>(

<tr key={product._id}>

<td>{product.name}</td>

<td>₹{product.price}</td>

<td>{product.stock}</td>

<td>

<button

onClick={()=>remove(product._id)}

>

Delete

</button>

</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}

export default SellerProducts;
