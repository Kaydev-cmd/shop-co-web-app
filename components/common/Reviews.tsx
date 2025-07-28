import React from "react";
import Button from "./Button";
import { ImEqualizer2 } from "react-icons/im";
import ReviewCard from "./ReviewCard";
import { REVIEWS } from "@/constants";

const Reviews = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h3>
          <span className="font-bold text-xl">All Reviews</span> (451)
        </h3>
        <div className="flex items-center ">
          <div
            className="bg-gray-200 rounded-full"
            style={{ padding: "12px", marginRight: "8px" }}
          >
            <ImEqualizer2 />
          </div>
          <Button title="Write a Review" />
        </div>
      </div>
      <div className="flex flex-col gap-6" style={{marginTop: "24px"}}>
        {REVIEWS.map((review) => (
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
