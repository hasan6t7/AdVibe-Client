import React, { useState } from "react";
import { useGetAllProductsQuery } from "../../Redux/features/Products/productsApi";
import ProductCard from "./ProductCard";
import ShopFiltering from "./ShopFiltering";
import Loader from "../../Components/Loader";

const Shop = () => {
  const filter = {
    categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
    color: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
    priceRange: [
      { label: "Under $50", min: 0, max: 50 },
      { label: "$50 - $100", min: 50, max: 100 },
      { label: "$100 - $200", min: 100, max: 200 },
      { label: "$200 and Above", min: 200, max: Infinity },
    ],
  };

  const [filterstate, setFilterstate] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });

  const clearFilter = () => {
    setFilterstate({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };

  const { category, color, priceRange } = filterstate;
  const [minPrice, maxPrice] = priceRange
    ? priceRange.split("-").map(Number)
    : [0, Infinity];
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);

  const { data, error, isError, isLoading } = useGetAllProductsQuery({
    category: category !== "all" ? category : "",
    color: color !== "all" ? color : "",
    minPrice: minPrice || 0,
    maxPrice: maxPrice || Infinity,
    page: currentPage,
    limit: productPerPage,
  });

  const products = data?.data?.products || [];
  const totalPages = data?.data?.totalPage || 0;
  const totalProducts = data?.data?.totalProduct || 0;

  const handlePageChange = (pageNum) => {
    if (pageNum > 0 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const startProduct = (currentPage - 1) * productPerPage + 1;
  const endProduct = startProduct + products.length - 1;

  if (isLoading)
    return <Loader />;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">
        {error?.data?.message || "Something went wrong"}
      </p>
    );
  return (
    <div className="p-6 mb-20">
      <div>
        <h1 className="text-center text-5xl playfair">Shop</h1>
        <p className="lg:w-2/3 mx-auto text-center mt-3 text-sm text-gray-700">
          Discover the latest trends and express your unique style with our
          Women's Fashion website. Explore a curated collection of clothing,
          accessories, and footwear that caters to every taste and occasion.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 mt-16">
        <div className="w-full md:w-1/4 space-y-6">
          <ShopFiltering
            filter={filter}
            filterstate={filterstate}
            setFilterstate={setFilterstate}
            clearFilter={clearFilter}
          ></ShopFiltering>
        </div>

        <div>
          <h1 className="mb-5 text-lg ">
            Showing {startProduct} to {endProduct} of {totalProducts} products
          </h1>
          <ProductCard products={products}></ProductCard>
          {/* // pagination */}

          {products.length > 0 && (
            <div className="flex items-center justify-center my-16">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="join-item btn btn-square"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`btn btn-square ${
                    currentPage === index + 1
                      ? "bg-[#ed3849] text-white"
                      : "hover:bg-[#ed3849] "
                  }`}
                  key={index}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="join-item btn btn-square"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
