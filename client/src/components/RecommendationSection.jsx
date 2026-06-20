
import RecommendationCard from "./RecommendationCard";

function RecommendationSection({

products

}){

return(

<div>

<h2>

Recommended For You

</h2>

<div className="recommend-grid">

{

products.map(product=>(

<RecommendationCard

key={product.id}

product={product}

/>

))

}

</div>

</div>

);

}

export default RecommendationSection;

