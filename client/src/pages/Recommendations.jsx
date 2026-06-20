
import {

useEffect,

useState

}

from "react";

import {

getRecommendations

}

from "../services/recommendationService";

import RecommendationSection

from "../components/RecommendationSection";

function Recommendations(){

const[products,setProducts]=useState([]);

useEffect(()=>{

getRecommendations()

.then(res=>setProducts(res.data));

},[]);

return(

<div className="recommend-page">

<h1>

AI Recommendations

</h1>

<RecommendationSection

products={products}

/>

</div>

);

}

export default Recommendations;
