import React from "react";
import { Link } from "react-router";
import RatingStar from "../../Components/RatingStar";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/features/cart/cartSlice";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    
  };
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product, ind) => (
            <div
              key={ind}
              className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Optional badge */}
                {product?.badge && (
                  <span className="absolute top-3 left-3 bg-[#ed3849] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}

                {/* Floating cart button */}
                <div className="absolute top-3  right-3">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-[#ed3849] hover:bg-[#c72c3b] p-2 rounded-full shadow-md transition-all duration-300 hover:rotate-12 cursor-pointer"
                  >
                    <i className="ri-shopping-cart-2-line text-white text-lg"></i>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 pt-8 text-center">
                <h4 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#ed3849] transition-colors duration-300">
                  {product?.name}
                </h4>

                <p className="text-gray-600 mt-2">
                  <span className="text-[#ed3849] font-bold text-lg">
                    ${product?.price}
                  </span>
                  {product?.oldPrice && (
                    <s className="ml-2 text-sm text-gray-400">
                      ${product?.oldPrice}
                    </s>
                  )}
                </p>

                <div className="flex justify-center items-center mt-3">
                  <RatingStar rating={product?.rating} />
                </div>

                <div className="mt-5">
                  <Link
                    to={`/shop/${product?._id}`}
                    className="inline-block bg-[#ed3849] hover:bg-[#c72c3b] text-white text-sm font-medium px-5 py-2 rounded-full shadow transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Glow border hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-[#ed3849]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))
        ) : (
          <div className="font-medium text-2xl flex justify-center items-center">
            No Product Found
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
