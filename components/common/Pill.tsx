import React, { useState } from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title, selected, onClick }) => {
  return (
    <div
      className={`rounded-4xl ${
        selected ? "bg-black text-white" : "bg-gray-200 text-black"
      } transition duration-200 md:w-[140px]`}
      style={{ padding: "12px" }}
      onClick={onClick}
    >
      <p className="text-center md:text-lg">{title}</p>
    </div>
  );
};

export default Pill;
