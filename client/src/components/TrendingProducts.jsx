
import { useEffect, useState } from "react";

import axios from "axios";

function TrendingProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios

      .get(
        "http://localhost:5000/api/recommendations/trending"
      )

      .then((res) => setProducts(res.data));

  }, []);

  return (

    <div>

      <h2>🔥 Trending Products</h2>

      <div className="grid">

        {products.map((item) => (

          <div
            key={item._id}
            className="recommend-card"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h3>{item.name}</h3>

            <h4>₹{item.price}</h4>

          </div>

        ))}

      </div>

    </div>

  );

}

export default TrendingProducts;
