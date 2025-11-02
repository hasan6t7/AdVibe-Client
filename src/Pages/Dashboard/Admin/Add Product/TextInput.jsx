import React from "react";

const TextInput = ({ label, name, placeholder, value, type, onChange }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="mb-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ed3849]  transition duration-150"
      />
    </div>
  );
};

export default TextInput;
