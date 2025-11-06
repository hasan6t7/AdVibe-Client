import React, { useState } from "react";
import TextInput from "./TextInput";
import UploadImage from "./UploadImage";
import { useSelector } from "react-redux";
import { useAddProductMutation } from "../../../../Redux/features/Products/productsApi";
import Loader from "../../../../Components/Loader";

const AddProduct = () => {
  const data = useSelector((state) => state.auth.user);
  const user = data?.user;

  const [addProduct, { isLoading, isError }] = useAddProductMutation();

  const [image, setImage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !product.name ||
      !product.category ||
      !product.color ||
      !product.description ||
      !product.price
    ) {
      alert("Please Fill All The Field");
      return;
    }
    try {
      await addProduct({ ...product, image, author: user?._id }).unwrap();
      alert("Product Added Successfully");
      setProduct({
        name: "",
        category: "",
        description: "",
        price: "",
        color: "",
      });
      setImage("");
    } catch (error) {
      console.log("Failed to add Product", error);
    }
  };

  if (isLoading) return <Loader />;
  if (isError) return <div>Error on Add Product</div>;

  return (
    <div className="mt-10 mx-5 shadow-lg rounded-2xl p-8 border border-gray-200 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Product</h1>
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
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ed3849]  transition duration-150"
          >
            <option value="">Select Category</option>
            <option value="accessories">Accessories</option>
            <option value="jewellery">Jewelry</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="dress">Dress Collection</option>
          </select>
        </div>
        {/* image  */}
        <UploadImage
          label="Image"
          name="image"
          id="image"
          // value={(e) => setImage(e.target.value)}
          placeholder="Upload Image"
          setImage={setImage}
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
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ed3849]  transition duration-150"
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
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ed3849]  transition duration-150"
          >
            <option value="">Select Color</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-[#ed3849] text-white font-semibold rounded-lg hover:bg-[#d23141] transition duration-200"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
