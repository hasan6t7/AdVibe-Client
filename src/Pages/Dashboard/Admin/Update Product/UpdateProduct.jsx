import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../../Redux/features/Products/productsApi";
import TextInput from "../Add Product/TextInput";
import UploadImage from "../Add Product/UploadImage";
import Loader from "../../../../Components/Loader";
import Swal from "sweetalert2";

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
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Product updated successfully`,
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dashboard/manage-product");
    } catch (error) {
      console.log("Failed to update product", error);
    }
  };

  if (isFetching) return <Loader />;

  return (
    <div className="mt-4 mx-5 shadow-lg rounded-2xl p-8 border border-gray-200 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-[#ed3849]">Update Product</h1>
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
            <option value="roses">Roses</option>
            <option value="tulips">Tulips</option>
            <option value="lilies">Lilies</option>
            <option value="orchids">Orchids</option>
            <option value="sunflowers">Sunflowers</option>
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
            <option value="Gold">Gold</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="pink">Pink</option>
            <option value="blue">Blue</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isUpdating}
          className={`w-full py-2 cursor-pointer text-white font-semibold rounded-lg transition duration-200 ${
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
