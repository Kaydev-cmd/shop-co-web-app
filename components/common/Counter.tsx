import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      className="bg-gray-200 rounded-4xl flex items-center gap-4"
      style={{ padding: "12px 32px" }}
    >
      <FaMinus onClick={() => setCount(count - 1)} />
      <p>{count}</p>
      <FaPlus onClick={() => setCount(count + 1)} />
    </div>
  );
};

export default Counter;
