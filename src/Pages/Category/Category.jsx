import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import products from "../../../public/products.json";
import ProductCard from "../Shop/ProductCard";

const Category = () => {
  const { categoryName } = useParams();

  const [filterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    const filtered = products?.filter(
      (product) => product.category === categoryName.toLowerCase()
    );
    setFilterProduct(filtered);
  }, []);


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
