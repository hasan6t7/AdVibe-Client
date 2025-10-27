import React from "react";

const TimelineStep = ({
  step,
  order,
  isCompleted,
  isCurrent,
  isLastStep,
  icon,
  description,
}) => {
  const iconBgColor = isCompleted
    ? "bg-green-600"
    : isCurrent
    ? "bg-red-500"
    : "bg-gray-200";

  const iconTextColor = isCompleted
    ? "text-white"
    : isCurrent
    ? "text-white"
    : "text-gray-600";

  const connectorColor = isCompleted ? "bg-green-500" : "bg-gray-300";

  const labelTextColor = isCompleted
    ? "text-green-700"
    : isCurrent
    ? "text-red-600"
    : "text-gray-500";

  const descriptionTextColor =
    isCompleted || isCurrent ? "text-gray-700" : "text-gray-500";

  return (
    <li className="relative flex flex-col items-start mb-8 sm:mb-0">
      {/* Icon and connector aligned horizontally */}
      <div className="flex items-center w-full">
        {/* Icon */}
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full ${iconBgColor} ${iconTextColor} shadow-md transition-transform duration-300 hover:scale-110`}
        >
          <i className={`ri-${icon.iconName} text-xl`}></i>
        </div>

        {/* Connector (perfectly aligned middle line) */}
        {!isLastStep && (
          <div
            className={`flex-1 h-0.5 ${connectorColor} ml-2 sm:ml-4 mt-[1px]`}
          ></div>
        )}
      </div>

      {/* Text Section */}
      <div className="mt-3 sm:pe-8">
        <h3 className={`font-semibold text-lg ${labelTextColor}`}>
          {step?.label}
        </h3>
        <time className="block mb-2 text-sm text-gray-400">
          {order?.updatedAt ? new Date(order.updatedAt).toLocaleString() : "—"}
        </time>
        <p className={`text-base font-normal ${descriptionTextColor}`}>
          {description}
        </p>
      </div>
    </li>
  );
};

export default TimelineStep;
