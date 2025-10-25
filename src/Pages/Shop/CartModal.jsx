import React from "react";
import OrderSummary from "./OrderSummary";

const CartModal = ({ products, isOpen, onClose }) => {
  console.log({ products, isOpen, onClose });
  return (
    <div>
      <div
        className={`fixed z-[1000] inset-0  transition-opacity`}
        style={{ transition: "opacity 300ms" }}
      >
        <div
          className={`fixed right-0 top-0 md:w-[45%] w-full bg-white h-full overflow-y-auto transition-transform `}
          style={{
            transition: "transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="p-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold">Your Cart</h4>
              <button
                onClick={onClose}
                className="text-gray-600 btn btn-sm hover:text-[#ed3849]"
              >
                x
              </button>
            </div>
            <div className="cart-items">
              {products.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                products.map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-4"
                  >
                    <div className="flex items-center">
                      <span className="mr-4 px-2 py-1 bg-[#ed3849] text-white rounded-full">
                        {index + 1}
                      </span>
                      <img
                        src={product?.image}
                        alt="image"
                        className="size-12 object-cover mr-4"
                      />
                      <div>
                        <h5 className="text-lg font-medium">{product?.name}</h5>
                        <p className="text-gray-600 text-sm">{product.price}</p>
                      </div>
                    </div>

                    <div className="flex flex-row md:justify-start justify-end items-center mt-2">
                      <button className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-[#ed3849] hover:bg-[#d23141] hover:text-white ml-8">
                        -
                      </button>
                      <span className="px-2 text-center mx-1">
                        {product.quantity}
                      </span>
                      <button className="size-6 flex items-center justify-center px-1.5 rounded-full text-[#ed3849] hover:bg-[#d23141] hover:text-white">
                        +
                      </button>
                      <div className="ml-5">
                        <button className="text-red-500 hover:text-red-700 mr-4">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {products.length > 0 && <OrderSummary></OrderSummary>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
