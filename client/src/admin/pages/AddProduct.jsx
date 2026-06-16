import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    stock: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/products",
      form
    );

    alert("Product Added");

    setForm({
      name: "",
      description: "",
      price: "",
      image: "",
      category: "",
      stock: "",
    });
  };

  return (
    <form
      onSubmit={submit}
      style={{ width: 400, margin: "30px auto" }}
    >
      <h2>Add Product</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        placeholder="Price"
        value={form.price}
        onChange={(e) =>
          setForm({
            ...form,
            price: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        placeholder="Image URL"
        value={form.image}
        onChange={(e) =>
          setForm({
            ...form,
            image: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) =>
          setForm({
            ...form,
            category: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        placeholder="Stock"
        value={form.stock}
        onChange={(e) =>
          setForm({
            ...form,
            stock: e.target.value,
          })
        }
      />

      <br />
      <br />

      <button type="submit">
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;