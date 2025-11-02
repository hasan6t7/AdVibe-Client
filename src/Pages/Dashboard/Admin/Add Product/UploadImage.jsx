import axios from "axios";
import React, { useState } from "react";
import { getBaseUrl } from "../../../../Utils/getBaseUrl";

const UploadImage = ({ name, placeholder, setImage, label }) => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  
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
      
      

      setUrl(imageUrl);
      setImage(imageUrl);
      alert(" Image uploaded successfully!");
    } catch (error) {
      console.error(" Failed to upload image:", error);
    } finally {
      setLoading(false);
    }
  };

 
  const uploadImage = async (e) => {
    const files = e.target.files;
    
    if (!files || files.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    
    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      uploadSingleImage(base64);
      return;
    }

    
    const base64s = [];
    for (let i = 0; i < files.length; i++) {
      const base = await convertBase64(files[i]);
      base64s.push(base);
    }
    console.log("Multiple images (not uploaded yet):", base64s);
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

      {url && (
        <div className="mt-3">
          <img
            src={url}
            alt="Uploaded"
            className="w-32 h-32 object-cover rounded-lg shadow-md border border-[#ed3849]"
          />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
