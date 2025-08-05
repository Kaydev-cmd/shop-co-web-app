import React from "react";
import { ProductCartCardProps } from "@/interfaces";
import { FaTrashCan } from "react-icons/fa6";
import Counter from "./Counter";

const ProductCartCard: React.FC<ProductCartCardProps> = ({
  productImage,
  productName,
  productSize,
  productColor,
  productPrice,
}) => {
  return (
    <div
      className="flex justify-around gap-4 items-center"
      style={{ padding: "12px 0" }}
    >
      <div>
        <img src={productImage} alt={productName} className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold md:text-xl">{productName}</h3>
          <FaTrashCan size={20} color="#FF3333" />
        </div>
        <p className="text-sm md:text-md">
          Size: <span className="text-[#666666]">{productSize}</span>{" "}
        </p>
        <p className="text-sm md:text-md">
          Color: <span className="text-[#666666]">{productColor}</span>{" "}
        </p>
        <div className="flex items-center gap-12">
          <p className="font-bold text-lg md:text-xl">{productPrice}</p>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default ProductCartCard;
