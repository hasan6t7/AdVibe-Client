import React, { useState } from "react";

import ProductCard from "../Shop/ProductCard";
import { useGetAllProductsQuery } from "../../Redux/features/Products/productsApi";
import Loader from "../../Components/Loader";

const TrendingPro = () => {
  const [visibleProduct, setVisibleProduct] = useState(8);
  const handleLoadMore = () => {
    setVisibleProduct((prv) => prv + 4);
  };
  const { data, error, isError, isLoading } = useGetAllProductsQuery({
    category: "",
    color: "",
    minPrice: "",
    maxPrice: "",
    page: "",
    limit: "",
  });

  const products = data?.data?.products || [];
  if (isLoading)
    return <Loader />;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">
        {error?.data?.message || "Something went wrong"}
      </p>
    );
  return (
    <div className="p-6">
      <h1 className="text-center text-5xl playfair">Trending Products</h1>
      <p className="lg:w-2/3 mx-auto text-center mt-3 text-sm text-gray-700">
        Discover the latest trends and express your unique style with our
        Women's Fashion website. Explore a curated collection of clothing,
        accessories, and footwear that caters to every taste and occasion.
      </p>
      <div className="mt-16">
        <ProductCard products={products.slice(0, visibleProduct)}></ProductCard>
      </div>
      <div className="flex items-center justify-center mt-10">
        {visibleProduct < products.length && (
          <button
            onClick={handleLoadMore}
            className="btn px-5 py-1.5 bg-[#ed3849] text-white"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default TrendingPro;
