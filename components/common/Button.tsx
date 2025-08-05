import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="bg-black md:text-md">
      {title}
    </button>
  );
};

export default Button;
