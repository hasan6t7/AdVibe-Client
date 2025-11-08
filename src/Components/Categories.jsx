import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 250,
      easing: "ease-in-out",
    });
  }, []);

  const categories = [
    {
      name: "Roses",
      path: "roses",
      image: "https://i.ibb.co.com/sJ68ckkL/roses.jpg",
    },
    {
      name: "Tulips",
      path: "tulips",
      image: "https://i.ibb.co.com/gbGKTVm7/tulips.jpg",
    },
    {
      name: "Lilies",
      path: "lilies",
      image: "https://i.ibb.co.com/93CjxyC6/lilies.jpg",
    },
    {
      name: "Orchids",
      path: "orchids",
      image: "https://i.ibb.co.com/v4mmXpzm/orchids.jpg",
    },
    {
      name: "Sunflowers",
      path: "sunflowers",
      image: "https://i.ibb.co.com/v6DMmv75/sunflowes.jpg",
    },
  ];

  return (
    <div className="max-w-4xl my-20 mx-auto grid grid-cols-2 md:grid-cols-5 gap-5 items-center justify-center">
      {categories.map((cat, ind) => (
        <Link
          key={ind}
          to={`/category/${cat.path}`}
          data-aos="zoom-in"
          data-aos-delay={ind * 100}
        >
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src={cat.image}
            alt={cat.name}
          />
          <h1 className="text-center mt-3 font-semibold">{cat.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
