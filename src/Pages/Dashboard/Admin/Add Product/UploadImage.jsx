import axios from "axios";
import React, { useState, useEffect } from "react";
import { getBaseUrl } from "../../../../Utils/getBaseUrl";

const UploadImage = ({ name, placeholder, setImage, label, value }) => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(value || "");

  useEffect(() => {
    setPreview(value || "");
  }, [value]);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const uploadSingleImage = async (base64) => {
    try {
      setLoading(true);
      const res = await axios.post(`${getBaseUrl()}uploadImage`, {
        image: base64,
      });
      const imageUrl = res.data;

      setPreview(imageUrl);
      setImage(imageUrl);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Failed to upload image:", error);
      alert("Failed to upload image!");
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("Please select an image.");
      return;
    }
    const base64 = await convertBase64(file);
    uploadSingleImage(base64);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        onChange={uploadImage}
        type="file"
        name={name}
        id={name}
        placeholder={placeholder}
        accept="image/*"
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-150"
      />

      {loading && (
        <p className="text-sm text-[#ed3849] animate-pulse">Uploading...</p>
      )}

      {preview && (
        <div className="mt-3">
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-lg shadow-md border border-[#ed3849]"
          />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
