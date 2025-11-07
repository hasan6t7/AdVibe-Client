import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../Shop/ProductCard";
import { useGetAllProductsQuery } from "../../Redux/features/Products/productsApi";
import Loader from "../../Components/Loader";

const Category = () => {
  const { categoryName } = useParams();

  const { data, error, isError, isLoading } = useGetAllProductsQuery({
    category: "",
    color: "",
    minPrice: "",
    maxPrice: "",
    page: "",
    limit: "",
  });

  const products = useMemo(() => data?.data?.products || [], [data]);

  const [filterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    if (products.length > 0 && categoryName) {
      const filtered = products.filter(
        (product) =>
          product.category?.toLowerCase() === categoryName.toLowerCase()
      );

      setFilterProduct(filtered);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      setFilterProduct([]);
    }
  }, [categoryName, products]);

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">
        {error?.data?.message || "Something went wrong"}
      </p>
    );

  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold text-center playfair capitalize">
        {categoryName}
      </h1>
      <p className="text-gray-700 text-center mt-2  lg:w-1/2 mx-auto ">
        Browse a diverse range of categories, from chic dresses to versatile
        accessories. Elevate your style today!
      </p>

      {/* product card  */}
      <div className="mt-10">
        <ProductCard products={filterProduct}></ProductCard>
      </div>
    </div>
  );
};

export default Category;
