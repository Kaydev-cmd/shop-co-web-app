import React, { useState } from "react";
import Button from "./Button";
import { ImEqualizer2 } from "react-icons/im";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      nameOfUser: "Sarah M.",
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      nameOfUser: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      nameOfUser: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    review: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.review.trim()) return;

    setReviews([
      {
        nameOfUser: formData.name,
        review: formData.review,
      },
      ...reviews,
    ]);

    setFormData({ name: "", review: "" });
    setShowForm(false);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h3>
          <span className="font-bold text-xl">All Reviews</span> (
          {reviews.length})
        </h3>
        <div className="flex items-center ">
          <div
            className="bg-gray-200 rounded-full"
            style={{ padding: "12px", marginRight: "8px" }}
          >
            <ImEqualizer2 />
          </div>
          <Button title="Write a Review" onClick={() => setShowForm(true)} />
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 bg-white/50 backdrop-blur-sm flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            style={{ marginTop: "24px" }}
          >
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              style={{ borderRadius: "16px" }}
            />
            <textarea
              placeholder="Write your review here..."
              value={formData.review}
              rows={10}
              cols={33}
              onChange={(e) =>
                setFormData({ ...formData, review: e.target.value })
              }
              required
              style={{ borderRadius: "16px" }}
            />
            <div className="flex justify-around items-center">
              <button className="bg-red-600" onClick={() => setShowForm(false)}>
                Cancel
              </button>
              <button className="bg-blue-600" type="submit">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="flex flex-col gap-6" style={{ marginTop: "24px" }}>
        {reviews.map((review) => (
          <ReviewCard
            key={review.nameOfUser}
            nameOfUser={review.nameOfUser}
            review={review.review}
          />
        ))}
      </div>
    </>
  );
};

export default Reviews;
