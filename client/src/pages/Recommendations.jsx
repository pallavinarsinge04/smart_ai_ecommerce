
import { useEffect, useState } from "react";

import RecommendationCard from "../components/RecommendationCard";

import axios from "axios";

function Recommendations({ productId }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios

      .get(
        `http://localhost:5000/api/recommendations/${productId}`
      )

      .then((res) => setProducts(res.data));

  }, [productId]);

  return (

    <div>

      <h2>Recommended For You</h2>

      <div className="grid">

        {products.map((item) => (

          <RecommendationCard
            key={item._id}
            product={item}
          />

        ))}

      </div>

    </div>

  );

}

export default Recommendations;
