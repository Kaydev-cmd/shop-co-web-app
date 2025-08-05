import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="bg-gray-200 rounded-4xl hover:bg-black hover:text-white md:w-[140px]" style={{ padding: "12px" }}>
      <p className="text-center md:text-lg">{title}</p>
    </div>
  );
};

export default Pill;
