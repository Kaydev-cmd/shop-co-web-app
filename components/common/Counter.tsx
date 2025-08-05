import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      className="bg-gray-200 rounded-4xl flex items-center justify-center gap-6 md:w-[160px] md:text-md"
      style={{ padding: "12px 16px" }}
    >
      <FaMinus onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))} />
      <p>{count}</p>
      <FaPlus onClick={() => setCount((prev) => prev + 1)} />
    </div>
  );
};

export default Counter;
