import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useGetOrderByIdQuery } from "../../../../Redux/features/orders/orderApi";
import TimelineStep from "../../../../Components/TimelineStep";
import Loader from "../../../../Components/Loader";

const steps = [
  {
    status: "Pending",
    label: "Pending",
    description: "Your order has been created and is awaiting processing.",
    icon: {
      iconName: "edit-2-line",
      bgColor: "red-500",
      textColor: "gray-800",
    },
  },
  {
    status: "Processing",
    label: "Processing",
    description: "Your order is currently being processed.",
    icon: {
      iconName: "loader-line",
      bgColor: "yellow-500",
      textColor: "yellow-800",
    },
  },
  {
    status: "Shipped",
    label: "Shipped",
    description: "Your order has been shipped.",
    icon: {
      iconName: "truck-line",
      bgColor: "blue-800",
      textColor: "blue-100",
    },
  },
  {
    status: "Completed",
    label: "Completed",
    description: "Your order has been successfully completed.",
    icon: { iconName: "check-line", bgColor: "green-800", textColor: "white" },
  },
];

const OrderDetails = () => {
  const { orderId } = useParams();
  const { data, isLoading, isError, error } = useGetOrderByIdQuery(orderId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoading) return <Loader />;
  if (isError)
    return <div className="text-red-500">Can’t fetch order data: {error}</div>;

  const order = data?.data || {};

  const isCompleted = (status) => {
    const statuses = ["Pending", "Processing", "Shipped", "Completed"];
    return statuses.indexOf(status) < statuses.indexOf(order?.status);
  };
  const isCurrent = (status) => order.status === status;

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-[#ed3849]">Order Summary </h1>

      <div className="mb-10">
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Order ID:</span> {order?.orderId}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Email:</span> {order?.email}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Total Amount:</span> $
          {order?.amount?.toFixed(2)}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Current Status:</span>{" "}
          <span
            className={`px-3 py-1 rounded-full text-white ${
              order?.status === "Pending"
                ? "bg-red-500"
                : order?.status === "Processing"
                ? "bg-yellow-500"
                : order?.status === "Shipped"
                ? "bg-blue-500"
                : "bg-green-600"
            }`}
          >
            {order?.status}
          </span>
        </p>
      </div>

      {/* Timeline Section */}
      <ol className="sm:grid sm:grid-cols-4 items-center relative mt-12 mb-20">
        {steps.map((step, index) => (
          <TimelineStep
            key={index}
            step={step}
            order={order}
            isCompleted={isCompleted(step.status)}
            isCurrent={isCurrent(step.status)}
            isLastStep={index === steps.length - 1}
            icon={step.icon}
            description={step.description}
          />
        ))}
      </ol>

      {/* 🛍 Ordered Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-[#ed3849]">
          Ordered Products{" "}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {order?.products?.map((product, index) => (
            <div
              key={index}
              className=" shadow-lg rounded-2xl p-5 flex flex-col items-center hover:shadow-2xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Product ID: {product.productId}
              </p>
              <p className="text-gray-700 font-semibold">
                Quantity: {product.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
