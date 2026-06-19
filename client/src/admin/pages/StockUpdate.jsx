
import { useState } from "react";
import axios from "axios";

function StockUpdate({ id }) {

  const [stock, setStock] = useState("");

  const update = async () => {

    await axios.put(

      `http://localhost:5000/api/inventory/${id}`,

      {
        stock,
      }

    );

    alert("Stock Updated");

  };

  return (

    <div>

      <input

        type="number"

        placeholder="Stock"

        onChange={(e) =>
          setStock(e.target.value)
        }

      />

      <button onClick={update}>
        Update
      </button>

    </div>

  );

}

export default StockUpdate;
