import React from "react";
import { Link } from "react-router";

const Categories = () => {
  const categories = [
    {
      name: "Accessories",
      path: "accessories",
      image: "https://i.ibb.co.com/WpPGR1sS/category-1.jpg",
    },
    {
      name: "Dress Collection",
      path: "dress",
      image: "https://i.ibb.co.com/7txbcyxp/category-2.jpg",
    },
    {
      name: "Jewellery",
      path: "jewellery",
      image: "https://i.ibb.co.com/gFF7y0gL/category-3.jpg",
    },
    {
      name: "Cosmetics",
      path: "cosmetics",
      image: "https://i.ibb.co.com/nMT6NjPm/category-4.jpg",
    },
  ];

  return (
    <div className="max-w-3xl my-20 mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center">
      {categories.map((cat, ind) => (
        <Link key={ind} to={`/category/${cat.path}`}>
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src={cat?.image}
            alt={cat?.name}
          />
          <h1 className="text-center mt-3 font-semibold ">{cat?.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
