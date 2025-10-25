import React from "react";

const ShopFiltering = ({ filter, filterstate, setFilterstate, clearFilter }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-100 space-y-8 sticky top-10">
      <div className="">
        <h1 className="text-2xl font-semibold text-gray-800">Filter</h1>
      
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <h2 className="font-medium text-lg text-gray-700">Category</h2>
        <hr className="border-gray-200" />
        <div className="space-y-2">
          {filter.categories.map((category, ind) => (
            <label
              key={ind}
              className={`flex items-center gap-2 capitalize cursor-pointer hover:text-[#ed3849] transition-colors ${
                filterstate.category === category ? "text-[#ed3849]" : ""
              }`}
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={filterstate.category === category}
                onChange={(e) =>
                  setFilterstate({ ...filterstate, category: e.target.value })
                }
                className="accent-[#ed3849] w-4 h-4 cursor-pointer"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="space-y-3">
        <h2 className="font-medium text-lg text-gray-700">Color</h2>
        <hr className="border-gray-200" />
        <div className="space-y-2">
          {filter.color.map((color, ind) => (
            <label
              key={ind}
              className={`flex items-center gap-2 capitalize cursor-pointer hover:text-[#ed3849] transition-colors ${
                filterstate.color === color ? "text-[#ed3849]" : ""
              }`}
            >
              <input
                type="radio"
                name="color"
                value={color}
                checked={filterstate.color === color}
                onChange={(e) =>
                  setFilterstate({ ...filterstate, color: e.target.value })
                }
                className="accent-[#ed3849] w-4 h-4 cursor-pointer"
              />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="space-y-3">
        <h2 className="font-medium text-lg text-gray-700">Price Range</h2>
        <hr className="border-gray-200" />
        <div className="space-y-2">
          {filter.priceRange.map((price, ind) => (
            <label
              key={ind}
              className={`flex items-center gap-2 cursor-pointer hover:text-[#ed3849] transition-colors ${
                filterstate.priceRange === `${price.min} -  ${price.max}`
                  ? "text-[#ed3849]"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="price"
                value={`${price.min} -  ${price.max}`}
                checked={
                  filterstate.priceRange === `${price.min} -  ${price.max}`
                }
                onChange={(e) =>
                  setFilterstate({ ...filterstate, priceRange: e.target.value })
                }
                className="accent-[#ed3849] w-4 h-4 cursor-pointer"
              />
              <span>{price.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filter Button */}
      <div className="pt-2">
        <button
          onClick={clearFilter}
          className="w-full bg-[#ed3849] hover:bg-[#c72c3b] text-white font-medium py-2 rounded-full shadow-md transition-all duration-300"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default ShopFiltering;
