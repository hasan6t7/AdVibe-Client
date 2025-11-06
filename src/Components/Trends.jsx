import React from "react";

const Trends = () => {
  const cards = [
    {
      img: "https://i.ibb.co/sMk85z1/pngwing-6.png",
      bg: "#A7216226",
      title: "Pink Flower Tree",
    },
    {
      img: "https://i.ibb.co.com/WW2QrCsr/pngwing-8.png",
      bg: "#0597A026",
      title: "Blue Flower Tree",
    },
    {
      img: "https://i.ibb.co/27yctVxM/pngwing-7.png",
      bg: "#477D1126",
      title: "Green Flower Tree",
    },
  ];

  return (
    <section className="p-6  my-20">
      <div className="mb-16">
        <h1 className="text-center text-5xl playfair">Featured Flowers</h1>
        <p className="lg:w-2/3 mx-auto text-center mt-3 text-sm text-gray-700">
          Discover the latest trends and express your unique style with our
          Women's Fashion website. Explore a curated collection of clothing,
          accessories, and footwear that caters to every taste and occasion.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-white  rounded-lg h-[400px] overflow-hidden"
        >
          {/* Top colored section */}
          <div
            className="flex justify-center items-center w-full h-[300px] rounded-t-[300px]"
            style={{ backgroundColor: card.bg }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="object-contain max-h-[220px]"
            />
          </div>

          {/* Title */}
          <p className="mt-4 text-center text-gray-700 font-medium">{card.title}</p>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Trends;
