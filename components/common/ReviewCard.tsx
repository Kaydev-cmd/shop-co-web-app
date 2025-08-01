import React from "react";
import { ReviewCardProps } from "@/interfaces";
import { FaStar } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import Rating from "./Rating";

const ReviewCard: React.FC<ReviewCardProps> = ({ nameOfUser, review }) => {
  return (
    <div className="card border border-gray-300 rounded-2xl flex flex-col gap-3">
      <Rating />
      <div className="flex items-center gap-1">
        <h4 className="font-bold text-xl">{nameOfUser}</h4>
        <MdVerifiedUser color="#01AB31" />
      </div>
      <p className="text-[#666666]">{review}</p>
    </div>
  );
};

export default ReviewCard;
