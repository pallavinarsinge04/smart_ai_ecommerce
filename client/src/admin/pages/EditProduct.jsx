import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    stock: "",
  });

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );

    setForm(res.data);
  };

  const submit = async (e) => {
    e.preventDefault();

    await axios.put(
      `http://localhost:5000/api/products/${id}`,
      form
    );

    alert("Product Updated");

    navigate("/admin/products");
  };

  return (
    <div style={{ padding: 30 }}>

      <h1>Edit Product</h1>

      <form onSubmit={submit}>

        <input
          value={form.name}
          placeholder="Name"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <br /><br />

        <input
          value={form.description}
          placeholder="Description"
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <br /><br />

        <input
          value={form.price}
          placeholder="Price"
          onChange={(e) =>
            setForm({
              ...form,
              price: e.target.value,
            })
          }
        />

        <br /><br />

        <input
          value={form.image}
          placeholder="Image URL"
          onChange={(e) =>
            setForm({
              ...form,
              image: e.target.value,
            })
          }
        />

        <br /><br />

        {form.image && (
          <img
            src={form.image}
            alt=""
            width="150"
          />
        )}

        <br /><br />

        <input
          value={form.category}
          placeholder="Category"
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        />

        <br /><br />

        <input
          value={form.stock}
          placeholder="Stock"
          onChange={(e) =>
            setForm({
              ...form,
              stock: e.target.value,
            })
          }
        />

        <br /><br />

        <button>
          Update Product
        </button>

      </form>

    </div>
  );
}

export default EditProduct;