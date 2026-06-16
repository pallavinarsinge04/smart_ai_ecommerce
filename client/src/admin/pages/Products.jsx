import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/products"
    );

    setProducts(res.data);
  };

  const deleteProduct = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/products/${id}`
    );

    fetchProducts();
  };

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>

      <h1>Admin Products</h1>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <br /><br />

      <Link to="/admin/add-product">
        <button>Add Product</button>
      </Link>

      <br /><br />

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>

        </thead>

        <tbody>

          {filtered.map((item) => (

            <tr key={item._id}>

              <td>{item.name}</td>

              <td>₹{item.price}</td>

              <td>{item.category}</td>

              <td>{item.stock}</td>

              <td>

                <Link to={`/admin/edit-product/${item._id}`}>
                  <button>Edit</button>
                </Link>

              </td>

              <td>

                <button
                  onClick={() =>
                    deleteProduct(item._id)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Products;