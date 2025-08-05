import React, { useState } from "react";
import Pill from "./Pill";

const PillGroup = () => {
  const [selectedPill, setSelectedPill] = useState("");

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  return (
    <div className="flex justify-around flex-wrap">
      {sizes.map((size) => (
        <Pill
          key={size}
          title={size}
          selected={selectedPill === size}
          onClick={() => setSelectedPill(size)}
        />
      ))}
    </div>
  );
};

export default PillGroup;
