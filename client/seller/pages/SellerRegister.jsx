
import { useState } from "react";
import axios from "axios";

function SellerRegister() {

  const [form, setForm] = useState({});

  const submit = async () => {

    await axios.post(
      "http://localhost:5000/api/sellers/register",
      form
    );

    alert("Seller Registered");

  };

  return (

    <div className="seller-card">

      <h1>Seller Registration</h1>

      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        placeholder="Shop Name"
        onChange={(e) =>
          setForm({
            ...form,
            shopName: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <button onClick={submit}>
        Register
      </button>

    </div>

  );

}

export default SellerRegister;

