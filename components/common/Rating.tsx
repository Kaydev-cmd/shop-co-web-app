import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <div>
      {/* Need to implement rating system */}
      <div className="flex items-center gap-2">
        <FaStar color="#FFC633" size={20} />
        <FaStar color="#FFC633" size={20} />
        <FaStar color="#FFC633" size={20} />
        <FaStar color="#FFC633" size={20} />
        <FaStar color="#FFC633" size={20} />
      </div>
    </div>
  );
};

export default Rating;
