import React from "react";

const Blogs = () => {
  const blogPosts = [
    {
      img: "https://i.ibb.co.com/8nLX9N2h/blooming.jpg",
      title: "Blooming Tips",
      subtitle: "How to Keep Your Flowers Fresh Longer",
      date: "12th August 2025",
    },
    {
      img: "https://i.ibb.co.com/kjDXvfX/orchid-care.jpg",
      title: "Orchid Care",
      subtitle: "Secrets to Thriving Orchids at Home",
      date: "18th September 2025",
    },
    {
      img: "https://i.ibb.co.com/27sBhxfg/Bouquet-Arrangements.jpg",
      title: "Bouquet Arrangements",
      subtitle: "Creative Ideas for Stunning Floral Bouquets",
      date: "5th October 2025",
    },
    {
      img: "https://i.ibb.co.com/CdmYw71/Seasonal-Flowers.jpg",
      title: "Seasonal Flowers",
      subtitle: "Top Picks for Each Season",
      date: "25th November 2025",
    },
  ];

  return (
    <section className="p-6 my-20">
      <h2 className="text-center text-5xl playfair">Latest From Our Blog</h2>
      <p className="lg:w-2/3 mx-auto text-center mt-3 text-sm text-gray-700">
        Discover tips, tricks, and inspiration for your home and garden with our flower-focused blog.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {blogPosts.map((blog, idx) => (
          <div
            key={idx}
            className="rounded-xl pb-6 shadow-lg cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <img
              className="h-[200px] rounded-t-xl w-full object-cover"
              src={blog.img}
              alt={blog.title}
            />
            <div className="text-center mt-4 space-y-3 px-3">
              <h6 className="playfair text-2xl font-bold">{blog.title}</h6>
              <h4 className="text-sm text-gray-700">{blog.subtitle}</h4>
              <p className="text-[#ed3849] text-sm">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
