import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const RatingStar = ({ rating }) => {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2; // round to nearest 0.5

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<FaStar key={i} className="text-yellow-400 text-xl" />);
    } else if (i - 0.5 === roundedRating) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-xl" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400 text-xl" />);
    }
  }

  return <div className="flex justify-center mt-2 mb-2">{stars}</div>;
};

export default RatingStar;
