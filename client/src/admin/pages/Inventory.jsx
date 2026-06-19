
import { useEffect, useState } from "react";
import axios from "axios";

function Inventory() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios

      .get("http://localhost:5000/api/inventory")

      .then((res) => setProducts(res.data));

  }, []);

  return (

    <div className="inventory-page">

      <h1>Inventory Management</h1>

      <table>

        <thead>

          <tr>

            <th>Name</th>

            <th>Price</th>

            <th>Stock</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {products.map((item) => (

            <tr key={item._id}>

              <td>{item.name}</td>

              <td>₹{item.price}</td>

              <td>{item.stock}</td>

              <td>

                {item.stock === 0 ? (

                  <span className="out">
                    Out of Stock
                  </span>

                ) : item.stock < 10 ? (

                  <span className="low">
                    Low Stock
                  </span>

                ) : (

                  <span className="good">
                    Available
                  </span>

                )}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Inventory;
