import React from "react";
import { useParams } from "react-router";
import { useGetOrderByIdQuery } from "../../../../Redux/features/orders/orderApi";
import TimelineStep from "../../../../Components/TimelineStep";

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
  isError && <div>Can not fetch Order data. {error}</div>;
  isLoading && <div>loading...</div>;
  const order = data?.data || {};
  const isCompleted = (status) => {
    const statuses = ["Pending", "Processing", "Shipped", "Completed"];
    return statuses.indexOf(status) < statuses.indexOf(order?.status);
  };
  const isCurrent = (status) => order.status === status;
  return (
    <div className="p-6 min-h-[calc(100vh-428px)] ">
      <h1 className="text-2xl font-semibold mb-4">Payment {order?.status}</h1>
      <p className="mb-4">
        <span className="font-semibold">Order Id :</span> {order?.orderId}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Status: </span> {order?.status}
      </p>

      <ol className="sm:grid sm:grid-cols-4 items-center relative">
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
          ></TimelineStep>
        ))}
      </ol>
    </div>
  );
};

export default OrderDetails;
