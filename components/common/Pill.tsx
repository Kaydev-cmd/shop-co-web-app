import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="bg-gray-200 rounded-4xl" style={{ padding: "12px" }}>
      <p>{title}</p>
    </div>
  );
};

export default Pill;
