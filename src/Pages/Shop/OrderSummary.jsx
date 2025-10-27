import React from "react";
import { FiTrash2, FiCreditCard } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Redux/features/cart/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { getBaseUrl } from "../../Utils/getBaseUrl";
import axios from "axios";

const OrderSummary = () => {
  const { selectedItems, totalPrice, products } = useSelector(
    (state) => state.cart
  );
  const { user } = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleMakePayments = async () => {
    try {
      const stripe = await loadStripe(
        import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
      );
      console.log(stripe);

      const body = {
        products,
        userId: user?._id,
      };

      const response = await axios.post(
        `${getBaseUrl()}api/orders/create-checkout-session`,
        body,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const { url } = response.data;

      window.open(url, "_blank");
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };
  return (
    <div className="bg-red-50 mt-5 rounded-lg shadow-md text-base">
      {/* Header */}
      <div className="px-6 py-5 space-y-3">
        <h1 className="text-2xl font-bold text-gray-800">Order Summary</h1>
        <p className="text-gray-700">
          Selected Items: <span className="font-semibold">{selectedItems}</span>
        </p>
        <p className="text-gray-700">
          Total Price: <span className="font-semibold">${totalPrice}</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="px-6 pb-6 flex flex-col gap-3">
        <button
          onClick={handleClearCart}
          className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition cursor-pointer"
        >
          <FiTrash2 size={20} />
          Clear Cart
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleMakePayments();
          }}
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          <FiCreditCard size={20} />
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
