import React from "react";
import { Link, useParams } from "react-router";
import { useGetSingleProductQuery } from "../../../Redux/features/Products/productsApi";
import RatingStar from "../../../Components/RatingStar";
import ReviewCard from "../Reviews/ReviewCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/features/cart/cartSlice";

const SingleProducts = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
   
  };
  const { id } = useParams();
  const {
    data: { data: productDetails } = {},
    isLoading,
    isError,
  } = useGetSingleProductQuery(id);
  const { singleProduct, reviews } = productDetails || {};
 

  if (isLoading) return <div>loading....</div>;
  if (isError) return <div>Error...</div>;
  return (
    <div className="p-6 mt-16 mb-20">
      {/* banner  */}
      <section className=" ">
        <h1 className="text-center text-5xl playfair">Product Details</h1>

        <div className="flex justify-center items-center flex-wrap text-sm text-gray-600 space-x-2 mt-5">
          <Link
            to="/"
            className="hover:text-[#ed3849] transition-colors duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-s-line text-gray-400"></i>
          <Link
            to="/shop"
            className="hover:text-[#ed3849] transition-colors duration-300"
          >
            Shop
          </Link>
          <i className="ri-arrow-right-s-line text-gray-400"></i>
          <span className="text-[#ed3849] font-medium">
            {singleProduct?.name}
          </span>
        </div>
      </section>

      {/* product details  */}
      <section className=" mt-12">
        <div className="flex flex-col md:flex-row items-center gap-10 rounded-2xl  transition-shadow duration-300">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className=" rounded-xl transition-colors duration-300">
              <img
                src={singleProduct?.image}
                alt={singleProduct?.name}
                className="rounded-lg w-[90%] md:w-full  transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              {singleProduct?.name}
            </h3>

            <div className="flex items-center gap-4 text-2xl">
              <span className="text-[#ed3849] font-semibold">
                {singleProduct?.price}
              </span>
              <s className="text-gray-400 text-lg">{singleProduct?.oldPrice}</s>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {singleProduct?.description}
            </p>

            {/* Additional Info */}
            <div className="text-gray-700 space-y-2 text-base">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {singleProduct?.category}
              </p>
              <p>
                <span className="font-semibold">Color:</span>{" "}
                {singleProduct?.color}
              </p>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Rating:</span>
                <RatingStar rating={singleProduct?.rating}></RatingStar>
                <span className="text-gray-500 text-sm">
                  ({singleProduct?.rating} / 5)
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => handleAddToCart(singleProduct)}
                className="px-8 py-3 bg-[#ed3849] text-white font-semibold rounded-lg hover:bg-[#d32f3f] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* reviews  */}
      <ReviewCard reviews={reviews}></ReviewCard>
    </div>
  );
};

export default SingleProducts;
