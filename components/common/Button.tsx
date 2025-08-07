import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, onClick, type = "button" }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        type={type}
        className="bg-black transition hover:bg-gray-800 md:text-md"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
