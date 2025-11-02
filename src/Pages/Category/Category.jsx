import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../Shop/ProductCard";
import { useGetAllProductsQuery } from "../../Redux/features/Products/productsApi";

const Category = () => {
  const { categoryName } = useParams();
  console.log(categoryName)

  const { data, error, isError, isLoading } = useGetAllProductsQuery({});
  

  const products = data?.data?.products || [];


  const [filterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category === categoryName
    );
    
    setFilterProduct(filtered);
  }, []);

  if (isLoading)
    return <p className="text-center mt-10">Loading products...</p>;
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
