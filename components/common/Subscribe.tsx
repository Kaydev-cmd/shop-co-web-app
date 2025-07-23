import React from "react";
import { MdOutlineMail } from "react-icons/md";

const Subscribe = () => {
  return (
    <div
      className="bg-black text-white rounded-2xl flex flex-col gap-6"
      style={{ padding: "24px" }}
    >
      <h3 className="text-4xl font-bold">
        Stay Up To Date About Our Latest Offers
      </h3>
      <div className="flex items-center relative">
        <MdOutlineMail
          style={{ position: "absolute", right: 10 }}
          color="#9CA3AF"
          size={30}
        />
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full"
        />
      </div>
      <button className="bg-white" style={{ color: "#000" }}>
        Subscribe to Newsletter
      </button>
    </div>
  );
};

export default Subscribe;
