import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetReviewByUserIdQuery } from "../../../../Redux/features/Reviews/reviewsApi";
import { Link } from "react-router";
import Loader from "../../../../Components/Loader";

const UserReviews = () => {
  const { user } = useSelector((state) => state.auth.user);
  const { data, isLoading, isError, error } = useGetReviewByUserIdQuery(
    user?._id
  );
  const reviews = data?.data || [];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <div className="text-red-600 text-center font-semibold mt-10">
        Error fetching reviews: {error?.message || "Something went wrong!"}
      </div>
    );

  if (reviews.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <img
          src="https://illustrations.popsy.co/gray/error.svg"
          alt="No Reviews"
          className="w-40 mb-6"
        />
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          You haven’t added any reviews yet!
        </h2>
        <p className="text-gray-500 mb-4">
          Share your experience to help others make better choices.
        </p>
        <Link to={"/shop"}>
          <button className="px-5 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-all">
            + Add Your First Review
          </button>
        </Link>
      </div>
    );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#d23141]/90 ">
        Your Given Reviews
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review._id}
            className=" shadow-lg rounded-2xl p-5 border border-transparent hover:border-[#d23141] hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-semibold text-yellow-600">
                ⭐ {review.rating}/5
              </span>
              <span className="text-sm text-gray-500">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 mb-2">
              <strong>Comment:</strong> {review.comment}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Product ID:</strong> {review.productId}
            </p>
          </div>
        ))}

        {/* Add Review Card */}
        <Link to={"/shop"}>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 flex flex-col items-center justify-center rounded-2xl p-6 border border-dashed border-gray-400 cursor-pointer hover:from-[#d23141] hover:to-[#d23141]/80 hover:text-white transition-all duration-300">
            <span className="text-4xl font-bold mb-2">+</span>
            <p className="text-lg font-semibold">Add New Review</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserReviews;
