import React from "react";
import { Link } from "react-router";
import RatingStar from "../../Components/RatingStar";

const ProductCard = ({ products }) => {


  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, ind) => (
          <div
            key={ind}
            className=" overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl"
          >
            <div className="relative">
              <Link href={`/shop/${product?._id || ind}`}>
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300 rounded-t-xl"
                />
              </Link>
              <div className="absolute top-3 right-3">
                <button>
                  <i className="ri-shopping-cart-2-line bg-[#ed3849] p-1.5 text-white hover:bg-primary-dark rounded-full"></i>
                </button>
              </div>
            </div>

            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold">{product?.name}</h4>
              <p className=" font-medium">
                $ {product?.price}{" "}
                {product?.oldPrice ? <s>{product?.oldPrice}</s> : null}
              </p>

              <RatingStar rating={product?.rating}></RatingStar>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
