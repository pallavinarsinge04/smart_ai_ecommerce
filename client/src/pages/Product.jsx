
import { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import SortDropdown from "../components/SortDropdown";
import ProductCard from "../components/ProductCard";

function Product() {

  const [products, setProducts] = useState([]);

  const [keyword, setKeyword] = useState("");

  const [category, setCategory] = useState("");

  const [sort, setSort] = useState("");

  useEffect(() => {

    axios

      .get(
        `http://localhost:5000/api/products/search?keyword=${keyword}&category=${category}&sort=${sort}`
      )

      .then((res) => setProducts(res.data));

  }, [keyword, category, sort]);

  return (

    <div>

      <SearchBar
        value={keyword}
        onChange={setKeyword}
      />

      <SortDropdown setSort={setSort} />

      <FilterSidebar
        setCategory={setCategory}
      />

      <div className="grid">

        {products.map((item) => (

          <ProductCard
            key={item._id}
            product={item}
          />

        ))}

      </div>

    </div>

  );

}

export default Product;

