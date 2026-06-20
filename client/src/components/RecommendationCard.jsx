
function RecommendationCard({

product

}){

return(

<div className="recommend-card">

<img

src={product.image}

alt={product.name}

/>

<h3>{product.name}</h3>

<h2>₹{product.price}</h2>

<button>

View Product

</button>

</div>

);

}

export default RecommendationCard;

