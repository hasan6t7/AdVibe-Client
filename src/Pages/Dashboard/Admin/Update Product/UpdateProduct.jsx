import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../../Redux/features/Products/productsApi";
import TextInput from "../Add Product/TextInput";
import UploadImage from "../Add Product/UploadImage";

const UpdateProduct = () => {
  const { id } = useParams();
  const { data, isLoading: isFetching } = useGetSingleProductQuery(id);
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const productData = data?.data?.singleProduct;

  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    color: "",
  });

  const [image, setImage] = useState("");
  const navigate = useNavigate();

  // Set default values once productData is loaded
  useEffect(() => {
    if (productData) {
      setProduct({
        name: productData.name || "",
        category: productData.category || "",
        description: productData.description || "",
        price: productData.price || "",
        color: productData.color || "",
      });
      setImage(productData.image || "");
    }
  }, [productData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !product.name ||
      !product.category ||
      !product.color ||
      !product.description ||
      !product.price
    ) {
      alert("Please fill all the fields");
      return;
    }

    try {
      await updateProduct({
        id,
        ...product,
        price: Number(product.price),
        image,
      }).unwrap();
      alert("Product updated successfully");
      navigate("/dashboard/manage-product");
    } catch (error) {
      console.log("Failed to update product", error);
    }
  };

  if (isFetching) return <div>Loading product...</div>;

  return (
    <div className="mt-10 mx-5 shadow-lg rounded-2xl p-8 border border-gray-200 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Update Product</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Product Name */}
        <TextInput
          type="text"
          label="Product Name"
          name="name"
          placeholder="Gold Necklace"
          value={product.name}
          onChange={handleChange}
        />

        {/* Category */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ed3849] transition duration-150"
          >
            <option value="">Select Category</option>
            <option value="accessories">Accessories</option>
            <option value="jewellery">Jewelry</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="dress">Dress Collection</option>
          </select>
        </div>

        {/* Image */}
        <UploadImage
          label="Image"
          name="image"
          id="image"
          value={image}
          setImage={setImage}
          placeholder="Upload Image"
        />

        {/* Description */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter product description..."
            value={product.description}
            onChange={handleChange}
            rows="3"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ed3849] transition duration-150"
          ></textarea>
        </div>

        {/* Price */}
        <TextInput
          type="number"
          label="Price"
          name="price"
          placeholder="200"
          value={product.price}
          onChange={handleChange}
        />

        {/* Color */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Color
          </label>
          <select
            name="color"
            value={product.color}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ed3849] transition duration-150"
          >
            <option value="">Select Color</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isUpdating}
          className={`w-full py-2 text-white font-semibold rounded-lg transition duration-200 ${
            isUpdating ? "bg-gray-400" : "bg-[#ed3849] hover:bg-[#d23141]"
          }`}
        >
          {isUpdating ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
