import React from "react";
import Rating from "./Rating";
import { ProductSearchCardProps } from "@/interfaces";

const ProductSearchCard: React.FC<ProductSearchCardProps> = ({
  image,
  alt,
  itemName,
  price,
  rating,
}) => {
  return (
    <div className="card flex flex-col gap-3">
      <img src={image} alt={alt} className="rounded-2xl w-full lg:w-1/3" />
      <h3 className="font-bold text-2xl">{itemName}</h3>
      <div className="flex items-center gap-2">
        <Rating />
        <p className="font-bold text-md">
          {" "}
          <span>{rating}</span>/5
        </p>
      </div>
      <p className="text-2xl font-bold">${price}</p>
    </div>
  );
};

export default ProductSearchCard;
