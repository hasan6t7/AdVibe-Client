import React, { useEffect, useState } from "react";

const Deal = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    // 📅 set the target date (this month's last day)
    const now = new Date();
    const targetDate = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0,
      23,
      59,
      59
    );

    const countdown = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = targetDate.getTime() - currentTime;

      if (distance <= 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, mins, secs });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <section className="p-6 my-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-[#F4E5EC] rounded-2xl">
      <div className="flex-1">
        <img
          className="w-[90%] mx-auto"
          src="https://i.ibb.co.com/WptrfzNC/deals.png"
          alt="deals"
        />
      </div>

      <div className="flex-1">
        <h5 className="text-[#ed3849] mb-4 text-center md:text-left tracking-wide">
          Get Up To 20% Discount
        </h5>
        <h4 className="text-4xl lg:text-5xl mb-4 font-bold playfair text-center md:text-left">
          Deals Of This Month
        </h4>
        <p className="text-sm text-gray-700 text-center lg:text-left">
          Our Women's Fashion Deals of the Month are here to make your style
          dreams a reality without breaking the bank. Discover a curated
          collection of exquisite clothing, accessories, and footwear — all
          handpicked to elevate your wardrobe.
        </p>

        <div className="flex items-center gap-6 mt-10 flex-wrap justify-center md:justify-start">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.mins },
            { label: "Secs", value: timeLeft.secs },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center space-y-1 font-semibold bg-white px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-2xl text-[#ed3849]">
                {item.value.toString().padStart(2, "0")}
              </h4>
              <p className="text-gray-600 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deal;
