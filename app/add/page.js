"use client";

import { revalidateProducts } from "@/actions/productActions";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Product() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const { status } = await res.json();

    if (status === "success") {
      await revalidateProducts();
      toast.success("Product Created");
      setFormData({
        name: "",
        price: "",
        description: "",
      });
    } else {
      toast.error("Error Creating Product");
    }
  }

  return (
    <div className="container mx-auto mt-24">
      <h1 className="heading text-center text-primary">Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10 mx-auto mt-6">
          <div className="flex gap-4 items-center justify-center">
            <label className="text-xl font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-8 py-3 rounded-md focus:outline-primary"
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <label className="text-xl font-semibold" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="px-8 py-3 rounded-md focus:outline-primary"
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <label className="text-xl font-semibold" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="px-8 py-3 rounded-md focus:outline-primary"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary rounded-md mx-auto"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}
