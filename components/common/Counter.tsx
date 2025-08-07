import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CounterProps } from "@/interfaces";

const Counter: React.FC<CounterProps> = ({ value, onChange }) => {
  const increment = () => onChange(value + 1);
  const decrement = () => {
    if (value > 1) onChange(value - 1);
  };

  return (
    <div
      className="bg-gray-200 rounded-4xl flex items-center justify-center gap-6 md:w-[160px] md:text-md"
      style={{ padding: "12px 16px" }}
    >
      <FaMinus onClick={decrement} className="cursor-pointer" />
      <p>{value}</p>
      <FaPlus onClick={increment} className="cursor-pointer" />
    </div>
  );
};

export default Counter;
