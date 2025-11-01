import React, { useState } from "react";
import TextInput from "./TextInput";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    color: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product.name);
  };
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add Product
      </h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          label="Product Name"
          name="name"
          placeholder="Gold Necklace"
          value={product.name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default AddProduct;
