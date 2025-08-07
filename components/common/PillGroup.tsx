import React from "react";
import Pill from "./Pill";
import { PillGroupProps } from "@/interfaces";

const PillGroup: React.FC<PillGroupProps> = ({ selectedPill, onSelect }) => {
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  return (
    <div className="flex justify-around flex-wrap">
      {sizes.map((size) => (
        <Pill
          key={size}
          title={size}
          selected={selectedPill === size}
          onClick={() => onSelect(size)}
        />
      ))}
    </div>
  );
};

export default PillGroup;
