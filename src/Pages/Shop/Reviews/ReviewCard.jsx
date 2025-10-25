import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router"; 
import RatingStar from "../../../Components/RatingStar";
import { useAddReviewMutation } from "../../../Redux/features/Reviews/reviewsApi";

const ReviewCard = ({ reviews: initialReviews }) => {
  const { id: productId } = useParams();
  const { user } = useSelector((state) => state.auth);
  

  const [reviews, setReviews] = useState(initialReviews || []);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [editing, setEditing] = useState(false);

  const [addReview] = useAddReviewMutation();

  const userReview = user
    ? reviews.find((r) => r.userId._id === user._id || r.userId === user._id)
    : null;

  useEffect(() => {
    if (userReview && editing) {
      setRating(userReview.rating || 0);
      setComment(userReview.comment || "");
    }
  }, [userReview, editing]);

  const handleSubmit = async () => {
    
    if (!user) return alert("Please login first!");

   
    if (!rating || !comment.trim()) {
      return alert("Please provide rating and comment!");
    }

  
    if (!productId) {
      return alert("Product ID missing!");
    }

    const payload = {
      comment: comment.trim(),
      rating,
      userId: user.user._id,
      productId,
    };

    console.log("Review Payload:", payload); 

    try {
      const response = await addReview(payload).unwrap();
      console.log("Review Response:", response);

      // Update reviews in state
      let updatedReviews = reviews.map((r) =>
        r.userId._id === user._id
          ? { ...r, rating, comment, createdAt: new Date() }
          : r
      );

      if (!userReview) {
        updatedReviews = [
          {
            comment: comment.trim(),
            rating,
            userId: { _id: user._id, username: user.username },
            createdAt: new Date(),
          },
          ...updatedReviews,
        ];
      }

      setReviews(updatedReviews);
      setShowModal(false);
      setEditing(false);
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Failed to post review:", error);
      alert(error?.data?.message || "Failed to post review. Try again later.");
    }
  };

  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold mb-6">All Comments</h3>

      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.ibb.co/y6Rpw8Y/user.png"
                    alt="Reviewer"
                    className="h-14 w-14 rounded-full border"
                  />
                  <div>
                    <p className="text-lg font-medium text-blue-500 mb-1 capitalize">
                      {review?.userId?.username || "Anonymous"}
                    </p>
                    <p className="text-xs italic text-gray-500">
                      {new Date(review?.createdAt).toLocaleDateString()}
                    </p>
                    <RatingStar rating={review.rating} />
                  </div>
                </div>

                {user && review.userId._id === user._id && (
                  <button
                    onClick={() => {
                      setEditing(true);
                      setShowModal(true);
                    }}
                    className="px-3 py-1 bg-[#ed3849] text-white rounded-md text-sm hover:bg-[#d23141] transition-all duration-200"
                  >
                    Edit
                  </button>
                )}
              </div>

              <div className="mt-4 bg-gray-50 border border-gray-100 p-5 rounded-md">
                <p className="text-gray-700 leading-relaxed md:w-4/5">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center italic">No reviews yet.</p>
      )}

      {/* Add Review Button */}
      <div className="mt-10 text-center">
        {user && !userReview && (
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-[#ed3849] hover:bg-[#d23141] text-white rounded-md flex items-center gap-2 mx-auto transition-all duration-300 cursor-pointer"
          >
            Add a Review
          </button>
        )}
      </div>

      {/* Review Modal */}
      {showModal && user && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 scale-95 animate-fadeIn">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#ed3849]">
              {editing ? "Edit Your Review" : "Post a Review"}
            </h2>

            <div className="flex justify-center mb-6 gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="cursor-pointer text-3xl transition-transform duration-200 hover:scale-125"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  {star <= (hoverRating || rating) ? (
                    <i className="ri-star-fill text-yellow-400 drop-shadow-lg"></i>
                  ) : (
                    <i className="ri-star-line text-gray-300"></i>
                  )}
                </span>
              ))}
            </div>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows="5"
              className="w-full border border-gray-300 focus:border-[#ed3849] focus:ring-1 focus:ring-[#ed3849] outline-none p-3 rounded-xl mb-6 text-sm placeholder-gray-400 resize-none shadow-sm transition-all duration-200"
              placeholder="Write your comment here..."
            />

            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditing(false);
                  setRating(0);
                  setComment("");
                }}
                className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-200 shadow-sm cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                disabled={!rating || !comment.trim()}
                className="px-5 py-2 bg-[#ed3849] text-white rounded-lg hover:bg-[#d23141] transition-all duration-300 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReviewCard;
